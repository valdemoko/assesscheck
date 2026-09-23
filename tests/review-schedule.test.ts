import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  REVIEW_SCHEDULE,
  getReviewSchedule,
  getReviewStatus,
  getDueForReview,
  getUpcomingReviews,
} from "@/lib/data/review-schedule";
import { requireSource, getSourcesForJurisdiction } from "@/lib/sources/registry";
import { getDeadlines } from "@/lib/data/deadlines";
import { JURISDICTION_RULES } from "@/lib/data/jurisdictions";

/**
 * The review schedule is only worth having if it can actually ring. These tests
 * check the arithmetic in both directions (so the mechanism is proven, not
 * assumed) and then check the real date, which is the alarm itself.
 */

describe("review schedule: the mechanism works in both directions", () => {
  const entry = REVIEW_SCHEDULE[0];

  it("is not yet due on the day it was verified", () => {
    const status = getReviewStatus(entry, entry.lastVerifiedDate);
    expect(status.dueOn).toBeTruthy();
    expect(status.overdue).toBe(false);
    expect(status.daysRemaining).toBe(entry.intervalDays);
  });

  it("is due exactly one day after its interval elapses, not before", () => {
    const due = getReviewStatus(entry, entry.lastVerifiedDate);
    expect(getReviewStatus(entry, shift(due.dueOn, -1)).overdue).toBe(false);
    expect(getReviewStatus(entry, due.dueOn).overdue).toBe(false);
    expect(getReviewStatus(entry, shift(due.dueOn, 1)).overdue).toBe(true);
  });

  it("returns every entry once the date is far enough out", () => {
    expect(getDueForReview("2999-01-01")).toHaveLength(REVIEW_SCHEDULE.length);
    // The failure that would make this whole file pointless.
    expect(REVIEW_SCHEDULE.length).toBeGreaterThan(0);
  });

  it("filters by jurisdiction and by upcoming window", () => {
    for (const id of ["nevada", "oregon", "florida"]) {
      const scoped = getReviewSchedule(id);
      expect(scoped.length).toBeGreaterThan(0);
      expect(scoped.every((e) => e.jurisdictionId === id)).toBe(true);
    }
    const upcoming = getUpcomingReviews("2026-09-23", 400);
    expect(upcoming.every((s) => !s.overdue && s.daysRemaining <= 400)).toBe(true);
    expect(upcoming.map((s) => s.daysRemaining)).toEqual(
      [...upcoming.map((s) => s.daysRemaining)].sort((a, b) => a - b)
    );
  });
});

describe("review schedule: the entries are wired to real content", () => {
  it("every source resolves and belongs to the entry's own jurisdiction", () => {
    for (const entry of REVIEW_SCHEDULE) {
      const source = requireSource(entry.sourceId);
      expect(source.jurisdictionId).toBe(entry.jurisdictionId);
    }
  });

  it("every deadline a entry points at is registered for that jurisdiction", () => {
    for (const entry of REVIEW_SCHEDULE) {
      if (!entry.deadlineId) continue;
      const ids = getDeadlines(entry.jurisdictionId).map((d) => d.deadlineId);
      expect(ids, `${entry.reviewId} points at ${entry.deadlineId}`).toContain(entry.deadlineId);
    }
  });

  it("every 'statedIn' path exists, so an editor can go and change it", () => {
    for (const entry of REVIEW_SCHEDULE) {
      // Longest alternative first: `(ts|tsx)` matches "ts" and strands the "x".
      const paths = entry.statedIn.match(/[a-z0-9./-]+\.(tsx|ts)/gi) ?? [];
      expect(paths.length, `${entry.reviewId} names no file`).toBeGreaterThan(0);
      for (const p of paths) {
        expect(() => readFileSync(p, "utf8"), `${entry.reviewId}: ${p} not found`).not.toThrow();
      }
    }
  });

  it("uses unique ids, a real trigger value and a sane interval", () => {
    const ids = REVIEW_SCHEDULE.map((e) => e.reviewId);
    expect(new Set(ids).size).toBe(ids.length);
    for (const entry of REVIEW_SCHEDULE) {
      expect(["each-fiscal-year", "each-tax-year", "cpi-indexed", "each-legislative-session"]).toContain(
        entry.trigger
      );
      expect(entry.intervalDays).toBeGreaterThan(0);
      expect(entry.intervalDays).toBeLessThanOrEqual(730);
      expect(entry.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(entry.what.length).toBeGreaterThan(30);
      expect(entry.statedIn.length).toBeGreaterThan(10);
    }
  });

  it("covers the jurisdictions whose content actually carries volatile figures", () => {
    // Nevada's published dates and rents, and Oregon's CPI-indexed thresholds,
    // are the three the research docs identified as moving. If a state is added
    // with a figure of this kind, this list is where the omission becomes visible.
    const covered = new Set(REVIEW_SCHEDULE.map((e) => e.jurisdictionId));
    for (const id of ["nevada", "oregon"]) expect(covered).toContain(id);
    expect(getSourcesForJurisdiction("nevada").length).toBeGreaterThan(0);
    expect(JURISDICTION_RULES.oregon).toBeDefined();
  });

  it("keeps the Florida CPI leg unpublished, which is the stated position", () => {
    // The site's answer to Florida's annual CPI change is to send the reader to
    // their own TRIM notice rather than publish a number that is superseded
    // every January. This asserts the position still holds.
    const florida = getReviewSchedule("florida").find((e) => e.reviewId === "fl-soh-cpi-leg");
    expect(florida, "the Florida CPI decision must stay on the schedule").toBeDefined();
    const page = readFileSync("app/florida-property-tax/save-our-homes/page.tsx", "utf8");
    expect(page).not.toMatch(/CPI (?:increase|change) (?:was|is) \d/i);
    expect(page).not.toMatch(/\d+\.\d+% (?:CPI|consumer price index)/i);
  });
});

describe("review schedule: the alarm (real date)", () => {
  it("no figure is past its interval today", () => {
    const overdue = getDueForReview(new Date().toISOString().slice(0, 10));
    const message = overdue
      .map(
        (s) =>
          `• ${s.entry.reviewId} (${s.entry.jurisdictionId}) was due ${s.dueOn}\n` +
          `  figure:   ${s.entry.what}\n` +
          `  statedIn: ${s.entry.statedIn}\n` +
          `  re-read:  ${s.entry.sourceId}\n` +
          `  fix:      re-read the source and move lastVerifiedDate in lib/data/review-schedule.ts,\n` +
          `            or widen intervalDays and say why.`
      )
      .join("\n");
    expect(
      overdue.map((s) => s.entry.reviewId),
      `\nThese figures have outlived their verification interval:\n${message}\n`
    ).toEqual([]);
  });

  it("warns before the next one is due, so the work can be planned", () => {
    const upcoming = getUpcomingReviews(new Date().toISOString().slice(0, 10), 30);
    // Informational: there is nothing to assert beyond the shape being usable.
    for (const s of upcoming) {
      expect(s.dueOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.daysRemaining).toBeGreaterThanOrEqual(0);
    }
    expect(Array.isArray(upcoming)).toBe(true);
  });
});

function shift(iso: string, days: number): string {
  const base = Date.parse(`${iso}T00:00:00Z`);
  return new Date(base + days * 86_400_000).toISOString().slice(0, 10);
}

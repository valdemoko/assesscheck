import { requireSource } from "@/lib/sources/registry";

export function SourceList({
  sourceIds,
  heading = "Sources",
}: {
  sourceIds: string[];
  heading?: string;
}) {
  if (sourceIds.length === 0) {
    // Like the domain guard in lib/seo/metadata.ts, this fails the build rather
    // than rendering something plausible: a Sources heading with nothing under
    // it still reads as a citation, and a page that makes claims without them is
    // the one mistake this block exists to make visible.
    throw new Error(
      "SourceList was given no sourceIds. A page making factual claims has to cite " +
        "what they rest on — add the registered ids from lib/sources/registry.ts, or " +
        "drop the block if the page makes no claims of its own.",
    );
  }

  return (
    <section aria-label={heading} className="source-block">
      <h2>{heading}</h2>
      <ul>
        {sourceIds.map((id) => {
          const s = requireSource(id);
          return (
            <li key={s.sourceId}>
              <strong>{s.publisher}</strong> —{" "}
              <a href={s.url} rel="noopener noreferrer" target="_blank">
                {s.title}
              </a>
              <br />
              <span className="source-meta">
                Verified: <time dateTime={s.lastVerifiedDate}>{s.lastVerifiedDate}</time>{" "}
                · Jurisdiction: {s.jurisdiction} · Authority level: {s.authorityLevel}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

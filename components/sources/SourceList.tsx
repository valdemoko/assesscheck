import { requireSource } from "@/lib/sources/registry";

export function SourceList({
  sourceIds,
  heading = "Sources",
}: {
  sourceIds: string[];
  heading?: string;
}) {
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

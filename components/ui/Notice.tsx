import type { ReactNode } from "react";

export function Notice({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "verify";
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className={`notice${variant === "verify" ? "" : " notice--info"}`}>
      {title && (
        <p>
          <strong>{title}</strong>{" "}
        </p>
      )}
      {children}
    </aside>
  );
}

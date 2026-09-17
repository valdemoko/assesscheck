// AssessCheck brand mark — institutional building glyph from the supplied
// taxes-svgrepo-com.png, used directly. Rendered inside a square viewBox
// with the same proportions as the generated favicons (glyph 82% of canvas,
// centered) so header and favicon show the identical image.

export function BrandMark({ size = 26 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- pixel-exact brand asset, intentionally not next/image
    <img
      src="/brand-mark.png"
      alt=""
      width={size}
      height={size}
      className="brand-mark"
      aria-hidden="true"
    />
  );
}

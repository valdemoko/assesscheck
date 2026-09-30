import type { MetadataRoute } from "next";
import { SITE_URL_RESOLVED as SITE_URL } from "@/lib/seo/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /api/: endpoints internos. /case/ y /casos/: rutas privadas de
        // usuario. /health: monitoring, no contenido. Las rutas con query
        // string NO se bloquean globalmente (/*?* bloqueaba el rastreo de
        // URLs publicas con parametros utiles); el dedupe lo hacen canonicals.
        disallow: ["/api/", "/case/", "/casos/", "/health"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

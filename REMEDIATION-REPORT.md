# REMEDIATION-REPORT.md
Date: 2026-09-17. Source audit: `CONTENT-ADSENSE-AUDIT.md`. All changes verified by tests, typecheck, and production build. **No new states, no HCAD/API/DB, no ads, no visual redesign, no new jurisdictions.**

---

## 1. P0 corregidos

| ID | Fix | Verificación |
|---|---|---|
| **P-01** Harris checker overclaim | Sección reescrita: ahora declara explícitamente "**The checker does not analyze comparables**" — no acepta comparables, no consulta HCAD — y dirige al usuario a HCAD property search + nuestra metodología. Añadida sección "Filing in Harris County" (iFile, 50-132, regla del deadline) para dar valor local real. | `grep "does not analyze comparables"` = 1 en HTML servido; sweep de frases sobreclaim en todo el repo = 0 resultados |
| **P-08** Dominio placeholder | `lib/seo/metadata.ts`: `NEXT_PUBLIC_SITE_URL` ahora es **obligatorio en producción** — el build falla con error explícito si falta. Fallback dev solo con flag opt-in `NEXT_PUBLIC_SITE_URL_DEV=1` (nunca en hosting). Placeholder `example.org` **eliminado del código** (grep = 0). Canonicals/sitemap/OG/robots/JSON-LD usan `SITE_URL_RESOLVED`. Documentado dónde configurarlo (mensaje de error incluido). | Test: build sin env → exit 1 con "NEXT_PUBLIC_SITE_URL is not set" (verificado manualmente; lógica cubierta por `tests/domain.test.ts`); sitemap servido resuelve al dominio dev explícito, 42 URLs |

## 2. P1 corregidos

| ID | Fix |
|---|---|
| P-03 | Copyedit appeal-options: frase rota de SOAH reparada; "arbitration windows do not extend because you were busy" suavizado a lenguaje no-legalista con CTA de verificación |
| P-06 | Harris checker page diferenciada: ya no duplica la descripción del tool; ahora cubre comparables-legales (36 meses, § 23.013(d)) + filing local + postura honesta sobre calendario HCAD |
| Checker inputs muertos | `lotSize` y `yearBuilt` **eliminados** del form y del `CheckerInput` (Fase 12: sin función en el cálculo → fuera, coherente con minimización de datos) |

## 3. P2 corregidos

| ID | Fix |
|---|---|
| P-04 | Hub `/evidence/` ampliado (96→~380 palabras): routing por situación del usuario (5 situaciones → evidencia concreta), "Two rules that hold for every category", enlaces a checker |
| P-04 | Hub `/texas-property-tax/protest/` ampliado (144→~350 palabras): "The process at a glance" en 6 pasos con enlaces internos contextuales |
| P-05 | Checker: validación de límite superior (`toPlausibleNumber`, $100M / 100k sq ft) — inputs fat-finger ya no producen flags "confiables" sin sentido |

## 4. Contenido mejorado

| Página | Valor nuevo |
|---|---|
| `/evidence/` | Routing por situación → evidencia correcta para cada caso; reglas universales de evidencia |
| `/texas-property-tax/protest/` | Proceso completo de un vistazo (6 pasos), cada paso con su página de detalle |
| `/texas/harris-county/property-tax-checker/` | Aclaración honesta de capacidades + ventanas legales de comparables + filing local |
| `/texas-property-tax/protest/appeal-options/` | Editorial cleanup |
| `components/tools/AssessmentChecker.tsx` | Form simplificado (sin campos muertos), inputs saneados |
| `lib/tools/checkerEngine.ts` | `toPlausibleNumber` + bounds documentados |

## 5. Ejemplos numéricos (6/6 guías)

Cada ejemplo es ilustrativo (marcado como tal), matemáticamente correcto, con inputs → pasos → resultado → "what this tells you" → "what it does NOT tell you":

1. **appraised-value-vs-taxable-value** — $320k→$300k con exención $100k y tasa 2.20: efecto $22/año por cada $1,000 de valor reducido.
2. **exemptions** — $450k con exención escolar $140k a tasa 1.00: exención vale $1,400/año; beneficio relativo mayor en casas modestas.
3. **how-property-value-is-determined** — modelo a $185/sq ft con 2,000 sq ft registrados vs 1,750 reales: error de característica = $46k de valor.
4. **property-tax-notice** — leer aviso: appraised +15% pero taxable +53% → la exención cambió; dos preguntas distintas.
5. **protest/deadlines** — entrega April 20 → +30 días = May 20 > May 15, gana May 20; contraste con entrega April 1.
6. **protest/arb-hearing** — estructura de presentación de 5 minutos: error de registro + 2 comparables + condición → un número claro.

## 6. Thin content

- `/evidence/` (96 palabras): **ampliado** — función real como router tarea→evidencia.
- `/texas-property-tax/protest/` (144 palabras): **ampliado** — summary ejecutable del proceso.
Ninguno fusionado: ambos son nodos de navegación legítimos con valor propio ahora.

## 7. Checker

Corregido: inputs muertos eliminados; sanity bounds añadidos; copy del Harris page alineado con capacidades reales.
Intacto: cálculos, disclaimers obligatorios, separación input/calculated, honestidad de comparables, 39 tests del motor.
**Comparables: sin implementación nueva** (según instrucciones) — el contenido ya no afirma que existe.

## 8. SEO

- Build **falla** sin `NEXT_PUBLIC_SITE_URL` (imposible publicar con placeholder).
- Sitemap: 42 URLs, deriva del registro central (gate intacto), **0** menciones a condados no publicados y **0** URLs placeholder (verificado en HTML servido).
- Canonicals únicos y consistentes vía `SITE_URL_RESOLVED`.
- `NEXT_PUBLIC_SITE_URL_DEV=1` solo afecta builds locales; el flag no existe en producción.

## 9. AdSense

Sin cambios de ads (correcto). Calidad restante pendiente (P2 del audit original): 2–3 diagramas explicativos; guías de unequal-appraisal y record-error; comparables worksheet. Ninguno bloquea; son mejora continua.

## 10. Tests

**58/58 PASS** (5 archivos): checkerEngine 19, jurisdictions 8, publication 10, footer-legal 17, domain 4.

## 11. Typecheck

`tsc --noEmit` — **PASS** (0 errores).

## 12. Build

`NEXT_PUBLIC_SITE_URL_DEV=1 npm run build` — **PASS**: 49 páginas estáticas generadas (42 contenido + not-found + iconos + meta-rutas).
`npm run build` sin env — **FALLA correctamente** (guard de dominio).

## 13. Remaining issues

1. `NEXT_PUBLIC_SITE_URL` debe definirse en producción (único bloqueante de deploy).
2. `NEXT_PUBLIC_CONTACT_EMAIL` sin definir → /contact muestra estado honesto (por diseño).
3. Comparables worksheet, deadline calculator, diagramas — mejoras P2/P3 pendientes.
4. Nota: `next start` redirige 308 a trailing slash (comportamiento por defecto de Next); canonicals ya usan trailing slash, consistente.

## 14. NEXT STEP

**READY WITH MINOR ISSUES** — listo para pasar a la siguiente fase (diseño o expansion prep) una vez definido el dominio de producción. Los dos "minor issues" operativos (dominio, email) son configuración, no trabajo de código. El audit de contenido pasaba de 62/100; con ejemplos, hubs completos, checker saneado y overclaim eliminado, los problemas estructurales detectados están resueltos; los restantes son mejora incremental, no remediation.

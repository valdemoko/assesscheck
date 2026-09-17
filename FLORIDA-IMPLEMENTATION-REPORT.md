# FLORIDA IMPLEMENTATION REPORT — STATE-ONLY

Date: 2026-09-17 · Scope: `ASSESSCHECK — FLORIDA STATE-ONLY IMPLEMENTATION`
County-level: **BLOQUEADO** · Miami-Dade: **NO IMPLEMENTADO**

---

# 1. Implemented

**Architecture (Fases 2–4, 7)**
- `lib/data/jurisdictions.ts` — rewritten: `caps[]` (array of semantically typed `CapRule` with `basis: "annual-increase" | "lower-of-or-cpi"`, `appliesTo`, `resetNote`, `limitations`, per-cap sources), `valueChain[]` (configured terminology: TX 2-step appraised→taxable; FL 3-step just→assessed→taxable), `homesteadCapQuestion` (checkbox→capId wiring), `assessmentNoticeName`, `reviewBoardName`, `jurisdictionName`. Florida registered with its two caps.
- `lib/tools/checkerEngine.ts` — reads caps via `getCap(rules, homesteadCapQuestion.capId)`; SOH flags append `limitations` (states the lower-of-3%-or-CPI rule); flag title says "Assessed value" for Florida (terminology-correct); checklist uses configured notice name; "appraisal district" wording neutralized to "official property records". Zero Texas literals.
- `lib/data/deadlines.ts` — `deadlineBasis: "fixed-date" | "rule-based"` + `anchoredTo` + `jurisdictionId`; all 6 Texas records migrated (behavior identical); 7 Florida records added (see §2).
- `lib/sources/types.ts` + `registry.ts` — `jurisdictionLevel`/`jurisdictionId` fields; 15 primary Florida sources registered; `getSourcesForJurisdiction()` partition helper.
- **Texas couplings removed**: `DataIntegrationNotice` takes required `jurisdictionId` (no default — render throws if omitted, never silently renders Texas); footer disclaimer neutralized + Florida links added; header adds Florida nav; home page adds a Florida section; `evidence.ts` header documents records as Texas-specific with reusable shape; checker next-steps links resolve per-jurisdiction via `siteConfig.jurisdictions`.

**Content (Fases 9–11, 6 páginas, todas `ready`)**
- `/florida-property-tax/` — hub + basics (3-value chain, roles, worked example).
- `/florida-property-tax/save-our-homes/` — SOH (lower-of-3%/CPI) vs non-homestead 10% cap, resets, the Texas-confusion warning, worked example.
- `/florida-property-tax/trim-notice/` — notice anatomy, the printed petition date, worked reading example.
- `/florida-property-tax/vab-petition/` — 6-step process (informal review → petition → 75% payment → evidence exchange → hearing/decision → circuit court), verified day-rules only.
- `/florida-property-tax/vab-evidence/` — screening vs appraisal vs VAB evidence, exchange rules, worked example.
- `/florida-property-tax/deadlines/` — rendered from the deadline registry (data-driven; zero hardcoded dates).

Every page: worked illustrative example with inputs/calculation/interpretation + "what this tells you / does not tell you", next steps, `SourceList` with verified Florida sources only.

**Tests (Fase 17)** — `tests/florida.test.ts` (24 tests): Florida rules & cap semantics, non-inheritance of Texas cap/§ 23.23, checker Florida behavior (3% flag with CPI caveat, boundary +3.0%, unchecked checkbox, no Texas institutions in output), C1 deadline gate (25-day rule-based w/ anchor, March 1 fixed-date, 75% rule, DR-486 absence), source partitioning, publication gate (6 pages ready, no Miami-Dade).

# 2. C1 Deadline Verification

| Deadline | Estado | Fuente | Regla |
|---|---|---|---|
| Petición VAB (valor) | **VERIFIED** | § 194.011(3)(d) + § 200.069(7) | En o antes del 25º día tras el envío del aviso § 194.011(1); **la fecha impresa en el TRIM controla** — `rule-based` |
| Petición VAB (denegación exención/clasificación) | **VERIFIED** | § 194.011(3)(d) | 30 días tras el envío del aviso de denegación — `rule-based` |
| Solicitud de exención (homestead) | **VERIFIED** | § 196.011(1)(a), (8), (9) | 1 de marzo; excepciones tardías limitadas — `fixed-date` |
| TRIM notice | **VERIFIED** | § 200.069 (texto completo) | Aviso estandarizado; "THIS IS NOT A BILL"; fecha de petición impresa en el formulario — `rule-based` |
| Aviso de vista VAB | **VERIFIED** | § 194.032(1)(a), (2)(a) | Vista 30–60 días tras el aviso; notificación ≥25 días antes — `rule-based` |
| Intercambio de evidencia | **VERIFIED** | § 194.011(4)(a)-(b) | Peticionario 15 días antes; PA responde ≤7 días antes — `rule-based` |
| Pago del 75% | **VERIFIED** | § 194.014(1)(a), (c) | ≥75% de ad valorem antes de la mora; denegación obligatoria el 20 de abril si falta — `rule-based` |
| Impuestos (vencimiento/mora) | **VERIFIED** | § 197.333, § 197.322 | 1 Nov / 1 Abr (o 60 días del envío, el más tardío) — `fixed-date` |
| **DR-486 / DR-486A** | **NOT VERIFIED** | — | **No publicado, no registrado, no en sitemap** (no accesible en esta sesión; el estatuto dice "substantially the form prescribed by the department") |
| **Presunción NAL (§ 193.502/§ 194.034)** | **NOT VERIFIED** | — | Excluida del contenido y del registry; § 194.034 se cita solo por sus cláusulas verificadas |
| Calendario de descuentos por pago anticipado | **NOT VERIFIED** | — | No publicado |

# 3. Florida Rules

Implementadas (todas verificadas contra el texto del estatuto 2024 F.S.): just valuation factors (§ 193.011); SOH cap lower-of-3%/CPI + resets + additions (§ 193.155); non-homestead residential 10% non-school cap (§ 193.1554); homestead exemption $25k+$25k split-tier (§ 196.031); March 1 application (§ 196.011); VAB structure/petition/evidence/decision/fee/75% payment (§§ 194.011–194.036, 194.013, 194.014); TRIM notice (§ 200.069); tax calendar (§§ 197.322, 197.333); exemption-denial appeal (§ 196.151). **No** se implementó la rama no-homestead del checker como input (requeriría clasificar la propiedad del usuario; el cap existe en config y su contenido está publicado — la UI del checker consulta solo la rama homestead en esta fase).

# 4. Architecture Changes

- `homesteadCap` (objeto único, implícitamente Texas) → **`caps[]`** con `basis` tipado: el sistema ahora representa reglas con semántica distinta sin colapsarlas en un número.
- `DeadlineRecord` + `deadlineBasis`/`anchoredTo`/`jurisdictionId`: las deadlines Florida son reglas ancladas a eventos, no fechas — el modelo lo expresa en lugar de falsificarlas.
- Sources con partición de jurisdicción (`jurisdictionLevel`/`jurisdictionId`).
- Último acoplamiento de código eliminado: `DataIntegrationNotice` ya no tiene default `"texas"` — omitir `jurisdictionId` lanza error en render.
- Chrome (footer/header/home) neutralizado; el copy por estado vive en páginas de estado.

# 5. Texas Regression

- `tests/jurisdictions.test.ts`, `tests/checkerEngine.test.ts`, `tests/publication.test.ts`, `tests/footer-legal.test.ts`, `tests/domain.test.ts`: **todos en verde** tras la migración a `caps[]` (2 tests actualizados porque codificaban la forma antigua, no porque el comportamiento cambiara).
- Cap Texas: 10% / § 23.23 / `annual-increase` — verificado por test explícito.
- Texas checker: flags, disclaimers, checklist y links idénticos (misma lógica, solo reescrito el acceso al cap).
- Harris County: `getDeadlines("texas")` OK; gate de publicación intacto.
- Texas content: sin cambios.

# 6. Content

| Página | Propósito |
|---|---|
| `/florida-property-tax/` | Hub: roles, cadena de 3 valores, ejemplo trabajado |
| `/florida-property-tax/save-our-homes/` | Los dos caps de Florida con semántica correcta + warning anti-Texas |
| `/florida-property-tax/trim-notice/` | Leer el aviso; la fecha impresa es la que controla |
| `/florida-property-tax/vab-petition/` | Proceso completo con reglas de días verificadas |
| `/florida-property-tax/vab-evidence/` | Screening vs appraisal vs evidencia VAB |
| `/florida-property-tax/deadlines/` | Deadlines 100% del registro de datos |

Cada página sigue el estándar de la remediación: ejemplo ilustrativo, "what this does not tell you", next steps, fuentes verificadas.

# 7. Miami-Dade

**NO implementado. Confirmación explícita:** cero rutas, cero registros en `COUNTIES`, cero entradas en `SITE_PAGES`, cero menciones en sitemap (verificado por build output y por tests `florida.test.ts` + `publication.test.ts`). Ningún otro condado de Florida fue creado. Bloqueo documentado en `docs/florida-expansion-research.md` §20 y `docs/florida-implementation-notes.md` §6.

# 8. Public Data

- **Implementado**: nada. Cero integración de datos, cero APIs, cero scraping — como se especificó. El checker Florida (futuro) será form-based sobre el TRIM notice.
- **Solo documentado**: NAL/SDF/DOR Data Portal (términos de uso NO VERIFIED), Property Search de Miami-Dade, GIS. Véase `docs/florida-expansion-research.md` §9–10.

# 9. Tests

**83/83 PASS** (6 archivos: checkerEngine 18, jurisdictions 8, publication 13, footer-legal 15, domain 4, **florida 24**).

# 10. Typecheck

`tsc --noEmit` — **exit 0**.

# 11. Build

`NEXT_PUBLIC_SITE_URL_DEV=1 npm run build` — **PASS**, 54 rutas estáticas (48 páginas + not-found + iconos). Build sin `NEXT_PUBLIC_SITE_URL` sigue fallando correctamente (guard P-08 intacto).

# 12. Sitemap

**48 URLs** (42 previas + 6 Florida). Las 6 rutas `/florida-property-tax/*` presentes; **0 menciones** a miami/broward/palm-beach/dallas/tarrant/bexar/travis (verificado sobre el XML compilado).

# 13. Remaining Issues

1. **Dominio real** — `NEXT_PUBLIC_SITE_URL` pendiente de definir para producción (operativo, no de código).
2. **`NEXT_PUBLIC_CONTACT_EMAIL`** — canal de contacto inactivo hasta definirse.
3. **DR-486** y **presunción NAL** siguen NOT VERIFIED; no pueden citarse hasta verificarse.
4. **CPI del SOH por año** — valor anual que el checker futuro necesitará como config con fuente; hoy solo se advierte en el contenido.
5. **Checker Florida (TRIM review)** — fase posterior planificada; hoy Florida consume contenido, no herramienta.
6. **Rama no-homestead en la UI del checker** — cap en config, sin input de UI en esta fase.
7. **Miami-Dade** — bloqueado hasta verificar VAB procedure + deadline del condado.

# 14. Next Step

**READY FOR FLORIDA AUDIT**

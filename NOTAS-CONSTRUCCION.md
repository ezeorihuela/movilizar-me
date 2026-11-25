# MovilizarMe v1 — Notas de construcción

Construido el 2026-11-24, solo en archivos locales en esta carpeta (`site/`).
**No se publicó nada, no se creó ningún repositorio, no se tocó DNS ni el sitio en vivo.**
Base: `~/workspace/movilizar-me-web/diagnostico-y-plan-2026-11-24.md` (plan aprobado por Ezequiel).

## Archivos creados (32 en total)

Raíz:
- `index.html` — selector de idioma: logo, lema en ES y EN, botones Español → `es/` y English → `en/`
- `404.html` — página sencilla bilingüe, con botones a inicio ES y EN
- `CNAME` — contiene `movilizar.me`
- `sitemap.xml` — 21 URLs (raíz + 10 ES + 10 EN)
- `robots.txt` — permite todo y declara el sitemap
- `NOTAS-CONSTRUCCION.md` — este archivo

Assets (`assets/`):
- `styles.css` — una sola hoja compartida por todo el sitio
- `MovilizarMe-logo-horizontal.png`, `MovilizarMe-logo-horizontal-white-transparency.png`, `MovilizarMe-favicon.png` — descargados del WordPress actual (URLs de `/wp-content/uploads/2024/02/`, verificadas: HTTP 200, PNG reales)
- `logo.png` y `logo-white.png` — versiones recortadas (sin el aire vertical del archivo original) para cabecera y pie; los originales se conservan intactos

Páginas ES (`es/`): `index`, `nosotros`, `ministerio`, `involucrarse`, `herramientas`, `podcast`, `biblioteca`, `agenda`, `contacto`, `matrimonios`
Páginas EN (`en/`): `index`, `about`, `ministry`, `get-involved`, `tools`, `podcast`, `library`, `meeting`, `contact`, `matrimonios`

Cada página ES tiene su contraparte EN completa (traducción entera, no resumen; conteos de palabras casi idénticos por par, p. ej. Involucrarse 351 vs Get Involved 342) y el selector ES/EN de la cabecera enlaza siempre a la contraparte exacta de la misma página.

## Cómo se ve cada página

Estructura común: cabecera blanca fija con logo a color, menú y selector ES/EN; pie morado oscuro con logo blanco, el lema y © 2026.

- **Raíz:** centrada, logo grande, lema en los dos idiomas y dos botones de idioma.
- **Inicio (ES/EN):** hero en fondo lavanda suave con "DREAM GLOBAL <> IMPACT LOCAL", el H1 real de la portada actual ("Los sueños toman vida y el cambio comienza en casa"), el párrafo de la luz, el lema de Ezequiel y botones a Involucrarse y Ministerio. Después: la sección real "Despertar una generación que genera un movimiento de impacto misionero latino" con tres tarjetas (Ministerio, Herramientas, Biblioteca), la banda verde suave "We are one / Unidad que trasciende fronteras, idiomas y culturas" con la cita de Juan 17:23 (TLA en ES), y un bloque del podcast.
- **Nosotros/About:** qué es MovilizarMe, familia González sirviendo junta, el lema en ambos idiomas en cita, y lista de lo que hacen.
- **Ministerio/Ministry:** tres subsecciones con anclas: CESI y formación de plantadores (Instituto CESI USA, curso Omega), Plantación de iglesias (Michigan, apoyo a Iglesia Yo Soy, Sturgis como testimonio, nuevo campo) y González en Misión con botón al enlace oficial de Mesa Global.
- **Involucrarse/Get Involved:** introducción a XPLORE con atribución al Center for Mission Mobilization (ideas generales y títulos de las 7 lecciones; no se reproduce ninguna lección) y los 5 hábitos (Orar, Enviar, Acoger, Ir, Movilizar) en tarjetas numeradas, cada una con su paso práctico y su enlace interno.
- **Herramientas/Tools:** cuatro tarjetas (Interpretación en vivo, Agenda, Biblioteca, Talleres) y la sección de interpretación explicada como servicio propio: sala, pantalla de proyección con QR grande y código de sala, cada persona escucha en su teléfono en su idioma (pasos 1 a 4). Talleres reales: CESI, XPLORE y matrimonios.
- **Podcast:** "Misiones y tecnología", presentación sobria del tema y las cápsulas.
- **Biblioteca/Library:** la biblioteca de Ezequiel en su Drive, orden por autor, catálogo y lector, sin inventar URL de acceso (ver pendientes).
- **Agenda/Meeting:** texto breve (45 minutos, Google Meet) y el **iframe real** de Google Calendar obtenido del HTML actual de `movilizar.me/meeting/`: `calendar.google.com/calendar/appointments/schedules/AcZssZ1BRnoA_opXTU4zdIGPiNtI2tsKorIZaUFhQNEMRxJc78_NpgNGewqwUwONBLJ77OwdPz37H9Dw?gv=true`
- **Contacto/Contact:** ruta principal a la agenda, Mesa Global, Involucrarse y Biblioteca.
- **Matrimonios (ES/EN):** página de memoria del seminario del 14 y 15 de junio de 2024. Dice expresamente que el registro cerró. **Sin formulario.**
- **404:** logo, mensaje en los dos idiomas y botones de regreso.

## Decisiones de diseño

- **Paleta derivada del logo real:** el logo es morado lavanda (`#9080a0` aprox.) y verde menta (`#a0d0d0` aprox.). Esos tonos claros no dan contraste para texto, así que el texto usa derivados oscuros de la misma familia: morado `#453a63` (titulares) y `#342b4d` (pie), verde oscuro `#17615f` (enlaces y botones). Fondos suaves: lavanda `#f4f1f8` y menta `#edf6f6`.
- **Contraste verificado por cálculo (WCAG):** texto/fondo 13.96:1, titulares 10.30:1, enlaces 7.21:1, botones 7.21:1, pie 13.14:1, enlaces del pie 10.23:1. Todo por encima de 4.5:1.
- **Móvil primero:** menú que se acomoda en bloque bajo el logo en pantallas chicas, tarjetas en 1 columna que pasan a 2 (44rem) y 3 (62rem), hero que crece en escritorio. Sin frameworks, sin JavaScript: no hay ni un solo script en el sitio.
- **Accesibilidad:** `alt` en todas las imágenes, enlace "saltar al contenido", `aria-label` en navegación y selector de idioma, `aria-current` en página e idioma activos, foco visible, `lang="es"` / `lang="en"` correcto por página, títulos y descripciones meta propios por página.
- **Voz:** frases cortas, textos sobrios, sin guiones largos (verificado: ningún `—` ni `–` en el HTML) y sin lorem ipsum (verificado).

## Verificación de enlaces internos

Script de revisión sobre los 22 archivos HTML del sitio:
- **392 enlaces internos revisados (href y src), 0 rotos.** Cada destino se resolvió contra la estructura de carpetas (archivo o `index.html` de la carpeta).
- Anclas verificadas una por una: `#cesi`, `#plantacion`, `#gonzalez-en-mision`, `#interpretacion`, `#talleres` (ES) y `#cesi`, `#planting`, `#gonzalez-on-mission`, `#interpretation`, `#workshops` (EN) existen en su página destino.
- Enlaces externos usados (solo 2, ambos pedidos en el plan): Mesa Global `https://www.mesaglobal.co/workers/31682` y el iframe de Google Calendar de la agenda.
- Marcadores `[PENDIENTE]` visibles en el texto público: **ninguno** (verificado quitando comentarios HTML antes de buscar). Todos los pendientes viven en comentarios HTML y en la lista de abajo.
- Limitación honesta: en esta máquina no hay navegador headless disponible, así que no se tomó captura de pantalla; la verificación fue de código, enlaces, contraste calculado y lectura del HTML generado. Conviene una revisión visual de Ezequiel al abrir los archivos.

## Marcadores pendientes (datos reales que faltan)

Cada uno está también como comentario `<!-- PENDIENTE: ... -->` en el HTML indicado:

1. **Biblioteca:** URL pública de acceso a la app/catálogo de la Biblioteca. Pendiente en `es/biblioteca` y `en/library`. Mientras tanto, el texto público ofrece pedir títulos por Contacto.
2. **Podcast:** enlaces oficiales de escucha (plataformas) y lista de episodios publicados. Pendiente en `es/podcast` y `en/podcast`.
3. **Interpretación en vivo:** URL pública del servicio propio (sala / página de escucha y pantalla de proyección con QR) cuando se reactive y despliegue el servicio de Ezequiel (repo audio-streaming). Pendiente en `es/herramientas` y `en/tools`.
4. **CESI:** enlace o formulario oficial de inscripción. Pendiente en `es/ministerio` y `en/ministry`. El texto público deriva a Contacto y Agenda.
5. **Donación directa:** enlace propio de donación, si Ezequiel decide publicar uno además de Mesa Global. Pendiente en `es/involucrarse` y `en/get-involved`. El hábito Enviar ya enlaza a Mesa Global.
6. **Contacto:** correo público y redes sociales de González en Misión (Facebook, Instagram, Threads) que Ezequiel confirme para el sitio. Pendiente en `es/contacto` y `en/contact`.
7. **Talleres:** fechas y registro de próximos talleres y seminarios, cuando se programen. Pendiente en `es/herramientas` y `en/tools`.

## Notas para la publicación futura (fuera de esta entrega)

- El constructor usado fue un script local en `/tmp` (build_site.py, es_content.py, en_content.py, render.py); el HTML entregado es estático y se puede editar directamente.
- Al publicar en GitHub Pages: el `CNAME` ya está listo; la raíz con selector de idioma funcionará tal cual, y GitHub servirá cada carpeta por su `index.html`.
- Antes de apuntar el DNS, revisar visualmente el sitio publicado en la URL temporal de GitHub, sobre todo el iframe de la agenda y el alto del logo en móvil.

## Elementos de confianza (2026-11-24, commit 6df870a)
- Pie de página de TODAS las páginas (24 archivos): línea "Sitio seguro: conexión cifrada (HTTPS). Dominio verificado con Google." (EN: "Secure site: encrypted connection (HTTPS). Domain verified with Google.") y enlace a Aviso de privacidad / Privacy Notice y Contacto.
- Páginas nuevas: es/privacidad y en/privacy (aviso completo bilingüe: responsable, datos recogidos, finalidad, procesadores Google/Mesa Global/GitHub Pages, cookies, derechos y contacto ezequiel@movilizar.me, fecha de versión). Sitemap actualizado a 23 URLs.
- Notas de procesamiento seguro: Agenda/Meeting (Google Calendar), Contacto/Contact (Google), Involucrarse/Get Involved (donativos seguros en Mesa Global, sin guardar tarjetas), Ministerio/Ministry (inscripción CESI por formulario seguro de Google).
- Verificado tras el cambio: 474 enlaces internos, 0 rotos; sin guiones largos en el texto visible.

## Footer de confianza (2026-11-24, commit 65b6b81)
Publicado con aprobación de Ezequiel: línea de confianza en las 22 páginas con dos botones que abren popups (dialog nativo): "Sitio seguro (HTTPS)" -> explica el cifrado y enlaza al reporte en vivo de SSL Labs (calificación B verificada ese día); "Verificado por Google Safe Browsing" -> enlaza al Transparency Report (estado verificado: "No unsafe content found"). JS en assets/lang.js, CSS .trust-btn/.trust-dlg en assets/styles.css. Verificado en vivo tras el push.
Ajuste posterior (instrucción de Ezequiel vía chat principal, commit a6809f7): la línea de confianza quedó CENTRADA, más pequeña (.78rem) y más discreta (color suave, opacidad .85), solo con cambio de CSS; enlaces y popups intactos. Verificado en vivo (CSS servido y páginas ES/EN) y en captura local del pie.

## v5 (2026-11-24, aprobado por Ezequiel tras capturas)
Rediseño inspirado en Open Eyes: Poppins en titulares, Source Serif 4 a 20px en lectura, columna de 1040px, etiquetas en mayúsculas, ritmo de espaciado amplio. Ministerio se dividió en páginas propias (CESI, Plantación, González en Misión); el formulario de CESI vive solo al final de la página de CESI. La banda de cifras usa las palabras de escala de Ezequiel (Cientos, Docenas, Iglesias, Familias), sin números chicos. Generador: ../gen_v5.py; carpeta de trabajo: ../site-v5/.

# Praxia Studio · Lineamientos de la Landing

> Documento maestro para construir la landing pública de **Praxia Studio** en `praxiastudio.ar`.
>
> **North star**: una landing que **demuestra** lo que hacemos por la forma en que está construida — no que solo lo cuenta. Dark mode editorial, storytelling con peso, microinteracciones que destacan craft, performance no negociable.
>
> Inspiración base: la landing de NEOS que ya construimos (estructura, animaciones de reveal, paleta dark, tipografía Inter Tight, mapas Leaflet, chatbot conversacional). Acá tomamos lo que funciona y subimos un escalón en sofisticación.

---

## 0. Filosofía y reglas de juego

| Principio | Qué significa en concreto |
|-----------|--------------------------|
| **Show, don't tell** | Si decimos "construimos productos rápido y precisos", la landing tiene que LOAD rápido y verse precisa. La calidad del sitio = primera prueba de calidad del trabajo. |
| **Storytelling > features** | No listamos servicios uno al lado del otro como capability brochure. Contamos el porqué primero, el qué después. |
| **Dark mode primero** | El default es dark. No es una opción para "modo nocturno" — es la identidad visual. (Light mode opcional para v2, no prioritario.) |
| **Microinteracciones con propósito** | Cada hover, cada scroll, cada transición tiene una razón. Animar por animar es ruido. Animar para guiar la atención es craft. |
| **Performance < 2s LCP** | Lighthouse > 95 en todas las métricas. No es negociable. Una landing de un estudio de software con 6s de LCP es contradicción. |
| **i18n desde el día uno** | ES por default, EN con switch. Mismo patrón que NEOS. El mercado LATAM + selectos del mundo es nuestro target. |
| **A11y como baseline** | Contraste WCAG AA mínimo. Navegable por teclado. Tooltips con aria. Skip-links. |

---

## 1. Identidad de marca

### 1.1 Nombre y origen

**Praxia Studio**. Derivado del griego antiguo *praxis* (πρᾶξις) — la acción que pone en marcha el conocimiento. Aristóteles diferenciaba *theoria* (contemplación) de *praxis* (acción transformadora del mundo). Praxia es nuestra interpretación: la práctica concreta de software que mejora sistemas reales.

### 1.2 Tagline principal

> **Software puesto en acción.**

Variantes corte para distintos contextos:

| Contexto | Tagline |
|----------|---------|
| Hero principal | Software puesto en acción. |
| Subtítulo / sub-claim | Construimos producto digital senior — de la idea al sistema en producción. |
| Footer / firma | Praxis aplicada al producto digital. |
| Bio de Twitter / LinkedIn | Studio de software craft. Construimos lo que tu operación necesita para escalar. |

### 1.3 Valores que tiene que transmitir la landing

- **Seniority sin pretensión** — somos seniors pero no nos creemos los más copados
- **Craft sobre velocidad** — preferimos hacerlo bien una vez que rápido tres veces
- **Transparencia de proceso** — el cliente ve cada sprint, no aparece "el resultado final" 16 semanas después
- **Multidisciplinario por diseño** — UX + Dev + QA bajo el mismo techo (no agencia)
- **Tecnología actual con criterio** — usamos lo moderno pero no nos casamos con cada hype del mes

### 1.4 Voz y tono

| Hacer | NO hacer |
|-------|----------|
| Hablar en primera persona plural ("construimos", "diseñamos") | Hablar en tercera persona corporativa ("la empresa ofrece") |
| Argentinismos justos ("laburar", "le ponemos cabeza") | Llenarlo de modismos ("dale que va", "ponele") |
| Frases declarativas, cortas, con punto | Párrafos largos académicos |
| Concretos: "16 semanas", "USD 16.500", "<1 segundo" | Genéricos: "ágilmente", "world-class", "best-in-class" |
| Inglés técnico cuando es obvio (stack, sprint, kanban) | Forzar traducciones raras (entrega continua de software ágil = CI/CD) |

---

## 2. Sistema visual

### 2.1 Paleta — tres opciones a decidir antes de empezar

Praxia es independiente de NEOS, así que conviene **diferenciarse cromáticamente**. Tres direcciones posibles, en orden de mi preferencia:

#### Opción A — Violet/Magenta gradient ★ recomendado

Mantiene parentesco visual con NEOS (continuidad de portfolio) pero pivotea a violeta como primario propio.

```css
--bg:           #0a0a0d;   /* fondo principal */
--bg-elevated:  #15151b;   /* cards, modales */
--bg-soft:      #1c1c24;   /* secciones alternadas */
--ink:          #f5f5f8;   /* texto principal */
--ink-2:        #b8b8c4;   /* texto secundario */
--ink-3:        #6b6b78;   /* texto terciario */
--primary:      #8b5cf6;   /* violeta vibrante */
--accent:       #e91e8c;   /* magenta como acento */
--gradient:     linear-gradient(135deg, #8b5cf6 0%, #e91e8c 100%);
```

> Storytelling: "el violeta es la chispa de la acción; el magenta es la continuidad con nuestros raíces" (cuando uses NEOS como case study).

#### Opción B — Electric green (developer-feel)

Más "tech studio" puro. Verde tipo Bun/Cursor.

```css
--primary:      #00ff88;   /* verde eléctrico */
--accent:       #00b8d4;   /* cyan complementario */
--gradient:     linear-gradient(135deg, #00ff88 0%, #00b8d4 100%);
```

> Storytelling: "verde de terminal, verde de código compilando bien".

#### Opción C — Solar yellow + ink (más bold, más diferenciador)

Inspirado en estudios premium tipo Linear, Vercel.

```css
--primary:      #ffe600;   /* amarillo solar */
--accent:       #ff5e1f;   /* naranja complementario */
--gradient:     linear-gradient(135deg, #ffe600 0%, #ff5e1f 100%);
```

> Storytelling: "amarillo = energía visible, no es sutil, no pasa desapercibido".

**Mi voto: Opción A** — porque mantiene profesionalidad, evita el cliché del "tech studio en verde fluo" y le da continuidad visual al portfolio (NEOS magenta → Praxia violeta + magenta como acento secundario es elegante y conta una historia).

### 2.2 Tipografía

Reutilizamos lo que ya funciona en NEOS:

```css
--font-display: "Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans:    "Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono:    "JetBrains Mono", "SF Mono", Menlo, monospace;
```

**Escala tipográfica** (rem):

| Token | rem | px | Uso |
|-------|-----|-----|-----|
| `text-xs` | 0.75 | 12 | Eyebrows, badges, footer |
| `text-sm` | 0.875 | 14 | Bullets, captions |
| `text-base` | 1 | 16 | Cuerpo de párrafo |
| `text-lg` | 1.125 | 18 | Subtítulos, lede |
| `text-xl` | 1.25 | 20 | H4 |
| `text-2xl` | 1.5 | 24 | H3 |
| `text-3xl` | 1.875 | 30 | H2 mobile |
| `text-4xl` | 2.25 | 36 | H2 desktop |
| `text-5xl` | 3 | 48 | H1 mobile |
| `text-6xl` | 3.75 | 60 | H1 desktop |
| `text-7xl` | 4.5 | 72 | Hero principal desktop |
| `text-8xl` | 6 | 96 | Hero extra-large desktop |

**Letter spacing**: aplicar `-0.025em` (negativo) en H1/H2 grandes. Inter Tight ya viene con tracking apretado pero le viene bien una mano más.

### 2.3 Espaciado y grilla

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-6:  24px;
--space-8:  32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;
```

**Grid**: container max-width `1280px`, padding lateral `24px` mobile / `48px` desktop. 12 columnas con gap `24px`.

### 2.4 Radios y sombras

```css
--radius-sm: 6px;
--radius:    12px;
--radius-lg: 20px;
--radius-xl: 32px;
--radius-pill: 999px;

--shadow-sm:  0 1px 2px rgba(0,0,0,0.4);
--shadow:     0 4px 16px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2);
--shadow-lg:  0 12px 32px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.2);
--shadow-glow: 0 0 24px rgba(139,92,246,0.35);  /* halo violeta sutil para CTAs */
```

### 2.5 Iconografía

- **SVG inline siempre** (no icon fonts, no PNG)
- Stroke-based, weight `2px`, linecap `round`
- Cuando sea posible, usar la familia de **Lucide** (https://lucide.dev) por consistencia
- Para iconos custom (los amenities tipo NEOS), mantener mismo lineart style
- Tamaño base: `24x24`, escalable según contexto

### 2.6 Iso / logo de Praxia Studio

A definir junto con un diseñador. Pero la dirección conceptual:

- **Símbolo abstracto que represente "acción/aplicación"**: flecha estilizada, triángulo dinámico, líneas en movimiento
- **NO usar el iso de NEOS** ni nada parecido (somos otro brand)
- **Funcionalidad**: mismo iso debe servir a 16px (favicon) y 200px (header marketing)
- **Versiones**: full color (con gradient), white-on-dark, dark-on-white
- **Posible dirección**: un símbolo geométrico que sugiera transformación — ej: una "P" que se transforma en flecha, o un triángulo que apunta hacia adelante

---

## 3. Stack técnico

**Mismo stack que NEOS** — Vite + React 19 + TS + Tailwind v4 + daisyUI v5. Dominio total, cero curva de aprendizaje, reuso máximo de patrones probados.

| Capa | Tecnología | Estado en el repo |
|------|-----------|-------------------|
| Build | **Vite 8** | ✅ ya instalado |
| UI | **React 19** + **TypeScript** estricto | ✅ ya instalado |
| Styling | **Tailwind CSS v4** + tokens custom | ✅ ya instalado |
| Theme system | **daisyUI v5** con theme "praxia" custom | ✅ ya instalado |
| Animaciones | **Framer Motion** para reveals complejos + CSS para microinteracciones | ⏳ pendiente |
| Router | **React Router v7** | ⏳ pendiente |
| Mapas (si los usamos) | **Leaflet + CartoDB Dark Matter** (mismo que NEOS) | ⏳ pendiente |
| Iconos | **Lucide React** + custom SVG inline | ⏳ pendiente |
| Forms | React Hook Form + Zod (validación) | ⏳ pendiente |
| i18n | Patrón Context+Localized (mismo que NEOS — `src/i18n/strings.ts`) | ⏳ pendiente |
| SEO + prerendering | **vite-plugin-ssg** (genera HTML estático en build) | ⏳ pendiente, fase 4 |
| Analytics | **Plausible** o **Umami** (privacy-first, sin cookie banner) | ⏳ pendiente |
| Deploy | **Vercel** o **Cloudflare Pages** | ⏳ pendiente |
| Backend (form de contacto) | **Supabase Edge Function → Resend** (igual que NEOS) o webhook directo | ⏳ pendiente |

> **¿Por qué no Next.js?** Para una landing chica, Vite + React + prerendering al build alcanza para todo (SEO, performance, deployment). Next.js suma complejidad que no necesitamos hoy. Si en el futuro crecemos a un sitio multi-página con back propio (case studies dinámicos, blog, portal de clientes), entonces sí migramos.

---

## 4. Arquitectura de información — secciones de la landing

Orden secuencial (cómo se scrollea de arriba a abajo):

```
1. Hero ─── Frase central + CTA primario
2. Manifiesto ─── Quiénes somos, en 60 palabras
3. Servicios ─── Qué hacemos (4-6 cards)
4. Metodología ─── Cómo trabajamos (proceso visual)
5. Casos ─── Trabajos hechos (carousel o grid)
6. Stack ─── Tecnologías que dominamos
7. Equipo ─── Quiénes son las personas
8. FAQ ─── Preguntas frecuentes
9. CTA / Contacto ─── Hablemos
10. Footer ─── Links, redes, contact info
```

### 4.1 Hero

**Componentes:**
- Eyebrow chiquito arriba: "Studio de software craft · Salta, Argentina"
- Título gigante: "Software puesto en acción." (con la palabra "acción" en gradient violet→magenta)
- Subtítulo de 2 líneas: "Construimos producto digital senior end-to-end. Desde el primer wireframe hasta el sistema en producción, con un equipo que conoce su oficio."
- Dos CTAs: primario "Hablemos de tu proyecto" (lleva a #contacto), secundario "Ver cómo trabajamos" (lleva a #metodologia)
- **Visual lateral**: NO una imagen estática. Sugerencias:
  - Animación abstracta con líneas/grids (tipo Linear)
  - Code editor "respirando" con tu propio código (tipo Vercel)
  - Iso de Praxia con animación de transformación
  - 3D simple con Three.js o Spline embebido
- Scroll indicator abajo

### 4.2 Manifiesto

Una sección corta, muy editorial. Una frase grande que cuente quiénes somos y por qué existimos.

> *"Praxia viene del griego, donde describe la acción que transforma el conocimiento en realidad. Nosotros aplicamos esa idea al software: tomamos las mejores herramientas y prácticas modernas, y las usamos para que los sistemas de nuestros clientes mejoren de verdad. No vendemos features. Vendemos cambio aplicado."*

Tratar como una **quote editorial** con tipografía grande, comillas decorativas, mucho whitespace.

### 4.3 Servicios

4-6 cards con qué hacemos. Diseño tipo:

| Servicio | Brief |
|----------|-------|
| **Diseño de producto digital** | De wireframes a interfaces production-ready. UX + UI bajo el mismo techo. |
| **Desarrollo fullstack** | React, Next, TypeScript, Node, PostgreSQL. Construcción de producto end-to-end. |
| **Integración de sistemas** | Conectamos lo que tu empresa ya usa con lo que necesita. APIs, webhooks, ETL. |
| **Modernización legacy** | Refactor de sistemas viejos a stack moderno, sin big-bang. |
| **CMS + admin custom** | Paneles administrativos para que el negocio edite sin pedirle nada al dev. |
| **QA + automation** | Testing automatizado, CI/CD, observabilidad. La calidad como sistema, no como suerte. |

**Visual**: cards con icono grande arriba (Lucide), título, descripción 2-3 líneas, link sutil "Ver más →" que en la primera versión puede no llevar a nada (o a un anchor).

### 4.4 Metodología

**El bloque que más se diferencia de una agencia común.** Mostrar el cómo es lo que vende a un cliente B2B serio.

Sugerencia: **timeline horizontal** o **stepper vertical** con las fases:

1. **Discovery** (semana 0): entendemos el problema, no asumimos requirements
2. **Sprint 0** (semana 1-2): foundation técnica + design system
3. **Sprints quincenales** con demo continua
4. **UAT colaborativo** con el cliente
5. **Deploy + capacitación**
6. **Soporte continuo** opcional

Cada paso con icono, descripción 1-2 líneas y un detalle distintivo ("demo cada 2 semanas, no al final").

### 4.5 Casos

**El primer caso: NEOS Real Estate**. (Y por un tiempo va a ser el único. Está bien — un case study fuerte vale más que cinco débiles.)

Estructura del case card:

- Imagen hero del proyecto (screenshot de la landing NEOS)
- Logo del cliente
- Categoría: "Real Estate · LATAM"
- Headline: "Sistema integral para una desarrolladora inmobiliaria"
- Stack pills: React 19, Supabase, Leaflet, i18n ES/EN
- Métricas (si las hay): "Captura 3 leads/día en primer mes" — esto lo agregás cuando tengas data real
- Link a case study completo (página separada, opcional v2)

### 4.6 Stack

**Marquee horizontal** con logos de tecnologías que dominamos. Estilo "scrolling logos" tipo enterprise landing pages, pero con dark mode + sutiles efectos hover (lift + tint magenta).

Lista sugerida: React · Next.js · TypeScript · Tailwind · Supabase · PostgreSQL · Node · Vercel · Cloudflare · Leaflet · Resend · Framer Motion · Figma · GitHub Actions

### 4.7 Equipo

**Acá la decisión clave es: ¿mostramos caras o no?**

Pros de mostrar caras: confianza, humaniza el studio, el cliente sabe con quién va a trabajar.
Contras: pérdida de "mística" del estudio, queda muy chico (4 personas), si alguien se va hay que actualizar.

**Recomendación**: mostrar **fotos profesionales en blanco y negro** + nombre + rol + link a LinkedIn. Diferenciar visualmente al founder (badge "Founder") del staff.

Mockup:

```
┌──────────────────┐
│  [foto B&W]      │   ← solo founder (más grande, destacado)
│  Ignacio Leyes   │
│  Founder         │
│  Fullstack SR    │
└──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  [foto B&W]      │  │  [foto B&W]      │  │  [foto B&W]      │
│  [security name] │  │  [UX name]       │  │  [QA name]       │
│  Dev SR          │  │  UX/UI SR        │  │  QA SR           │
│  Security        │  │                  │  │  Automation      │
└──────────────────┘  └──────────────────┘  └──────────────────┘

Staff (3 personas, mismo tamaño)
```

> El especialista en seguridad es un diferenciador a destacar — en studios chicos no es común tener security senior dedicado.

### 4.8 FAQ (opcional pero útil)

3-5 preguntas que sabés que el cliente B2B se hace antes de contactar:

- ¿Cuánto tarda un proyecto típico?
- ¿Trabajan con equity / pre-seed / sólo cash?
- ¿Cómo manejan los cambios de scope?
- ¿Qué pasa post-launch?
- ¿Hacen mantenimiento de sistemas que no construyeron ustedes?

Estilo accordion (click para expandir), dark theme.

### 4.9 CTA / Contacto

Bloque final fuerte. Algo como:

> *"Tenés un sistema que necesita una mano senior. Tenemos el equipo para resolverlo."*

CTAs:
- Form de contacto in-line (nombre + email + qué necesitás)
- Botón WhatsApp directo (verde, secundario)
- Link "Agendá 30 min" → Calendly o Cal.com

### 4.10 Footer

Compacto:

```
PRAXIA STUDIO         CONTACTO              REDES
Software puesto       hola@praxiastudio.ar  LinkedIn
en acción.            Salta, Argentina      Instagram
                                            GitHub

© 2026 Praxia Studio · Construido con ♥ en Salta
```

---

## 5. Storytelling framework — 4 actos

El recorrido emocional del visitante:

### Acto I — Atrapar (Hero + Manifiesto)

- 5 segundos para que entienda QUÉ somos
- 30 segundos para que entienda POR QUÉ existimos
- Si scrolea más, ganamos el acto

### Acto II — Convencer (Servicios + Metodología)

- Acá demostramos que somos seniors, no junior wrapper
- La metodología es el diferenciador — un freelance no muestra metodología, un studio sí
- Microinteracciones y craft visual = prueba implícita de competencia

### Acto III — Probar (Casos + Stack + Equipo)

- Acá mostramos que ya lo hicimos (NEOS)
- El stack genera confianza técnica
- El equipo humaniza al studio

### Acto IV — Convertir (FAQ + CTA)

- FAQ responde las objeciones típicas
- CTA múltiple (form, WhatsApp, calendario) para que el cliente use el canal que prefiera

---

## 6. Componentes y patrones UI

### 6.1 Botones

```
Primary:    bg-primary text-white hover:scale-105 hover:shadow-glow
Secondary:  border border-ink-2 text-ink hover:border-primary hover:text-primary
Ghost:      text-ink-2 hover:text-primary
WhatsApp:   bg-[#25D366] text-white (cuando linkea a WA)
```

Padding: `px-6 py-3` para CTA grande, `px-4 py-2` para acciones secundarias.

### 6.2 Cards (servicio, caso, equipo)

```
Base:       bg-bg-elevated border border-ink-3/20 rounded-lg p-6
Hover:      border-primary/50, shadow-glow, ligero translate-y -2px, smooth transition 200ms
Interior:   ícono 32px arriba con bg circular tint primary/10, título, descripción, link sutil
```

### 6.3 Form fields

```
Input:      bg-bg-soft border border-ink-3/30 text-ink placeholder:text-ink-3 rounded-md px-4 py-3
Focus:      border-primary, ring 2px primary/30
Error:      border-red-500, mensaje abajo en text-red-400 text-sm
Label:      text-xs uppercase tracking-widest text-ink-3 mb-2
```

### 6.4 Quotes editoriales

```
Tipografía:  serif elegante (Playfair Display? — agregar como secondary font solo para quotes)
Tamaño:      4xl en mobile, 5xl en desktop
Comillas:    decorativas grandes en gradient violet→magenta
Author:      caption abajo con role + foto chiquita
```

### 6.5 Sections

Todas las sections deben tener:

- `eyebrow`: text-xs uppercase tracking-[0.3em] text-primary
- `title`: H2 grande, font-semibold, letter-spacing -0.025em
- `subtitle`: text-lg text-ink-2, max-w-3xl
- Padding vertical: `py-24 lg:py-32` (mucho whitespace = premium feel)

---

## 7. Animaciones y efectos

### 7.1 Reveal on scroll (Framer Motion o Intersection Observer)

Todos los bloques principales entran con:

```js
initial:    { opacity: 0, y: 32, filter: "blur(6px)" }
animate:    { opacity: 1, y: 0, filter: "blur(0)" }
transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
```

(Es el mismo patrón que NEOS — funciona, lo conocemos.)

### 7.2 Hero — entrada cascading

Cada elemento del hero entra con stagger de 150ms:

1. Eyebrow (top)
2. Título principal (con animación de "máscara" o "split text")
3. Subtítulo
4. CTAs
5. Visual lateral

### 7.3 Microinteracciones críticas

| Elemento | Efecto |
|----------|--------|
| **Botón primary** | Hover: scale 1.05 + shadow-glow + slight gradient shift |
| **Botón secondary** | Hover: border + text color a primary, suave |
| **Card de servicio/caso** | Hover: lift 4px + glow sutil + icon scale 1.1 |
| **Link de nav** | Hover: underline animado desde la izquierda |
| **Cursor en hero** | (Opcional, no abusar) cursor custom — dot magenta que sigue al mouse con lag |
| **Stack marquee** | Logos scroll horizontal infinito, pause on hover |
| **Galería de casos** | Carousel suave con keyboard nav |

### 7.4 Efectos "wow" controlados (1-2 máximo, no más)

Elegir UNO o DOS de estos para destacar — no todos, eso satura:

- **Texto que se "tipea" en el hero** — el slogan se escribe letra por letra, con cursor parpadeante (Framer Motion `useAnimate` o `react-type-animation`)
- **Iso animado** — el logo de Praxia se transforma/morfea al hacer scroll
- **Parallax sutil** — el background del hero se mueve más lento que el contenido (max 20% offset)
- **Cursor follower** — un círculo magenta que sigue al mouse con `lerp` (transition gradual)
- **Magnetic buttons** — los CTAs principales "atraen" el cursor cuando se acerca
- **Number counter** — métricas que cuentan de 0 al valor real cuando entran en viewport
- **3D / Spline** — un elemento 3D embebido (sutil, no protagonista)
- **Code editor "vivo"** en el hero — un editor que muestra código tipeándose solo

**Mi recomendación**: text typing en el hero + cursor follower sutil. No más. El resto = ruido.

### 7.5 Transiciones de página (si usás Next App Router)

Fade entre rutas, 300ms. Nada de slides agresivos.

### 7.6 Performance de animaciones

**REGLAS no negociables:**

- Animar SOLO `transform` y `opacity` (no `width`, `height`, `top`, `left` — eso causa layout reflow)
- `will-change` solo en elementos que realmente animan, sino mata performance
- `prefers-reduced-motion` respetado: si el usuario lo tiene activado, deshabilitar animaciones complejas
- Lottie sí — pero máximo 1-2 animaciones Lottie en toda la landing, optimizadas

---

## 8. Microcopy y voz

### 8.1 Reglas

- **Headlines en oraciones, no en mayúsculas** (no "WHAT WE DO" → sí "Qué hacemos")
- **Punto al final de headlines** ("Software puesto en acción.") — más declarativo, más editorial
- **Listas en bullets cortos** — máximo 6-8 palabras por bullet
- **CTAs en imperativo** ("Hablemos", "Veámoslo", "Agendá") en vez de pasivo ("Contactar", "Ver")

### 8.2 Microcopy concretos

| Lugar | ❌ NO | ✅ SÍ |
|-------|-------|-------|
| CTA principal hero | "Contáctenos" | "Hablemos de tu proyecto" |
| Form submit | "Enviar" | "Mandalo, te respondemos en 24h" |
| Loading | "Cargando..." | "Buscando..." (con contexto) |
| Empty state | "No hay resultados" | "Probá buscar otra cosa" |
| Error 404 | "Page not found" | "Esa página no existe — pero las que sí están son geniales" |
| Email enviado | "Email enviado" | "Listo, te respondemos en 24h" |

---

## 9. i18n, a11y y SEO

### 9.1 Internacionalización

- ES por default, EN como switch
- Routing: `/` para ES, `/en` para EN (next-intl pattern)
- Strings en archivos por idioma (estructura igual a NEOS `src/i18n/strings.ts`)
- Switch visible en topbar (mismo patrón que NEOS — globe icon)

### 9.2 Accesibilidad

| Item | Cumplir |
|------|---------|
| Contraste de texto | WCAG AA mínimo (4.5:1 para body, 3:1 para large) |
| Navegación teclado | Tab order lógico, focus visible (ring magenta) |
| Aria labels | En todos los iconos y botones sin texto |
| Skip-links | "Skip to main content" al inicio (oculto visualmente, visible con tab) |
| Alt text | En todas las imágenes (no usar alt="" salvo decorativas) |
| Form validation | Mensajes de error con aria-live |
| Animaciones | `prefers-reduced-motion` respetado |

### 9.3 SEO

| Item | Cómo |
|------|------|
| Title tag | "Praxia Studio · Software puesto en acción" (50-60 chars) |
| Meta description | "Studio de software craft en Salta. Diseñamos y construimos producto digital end-to-end. NEOS Real Estate y otros clientes nos eligen por seniority + transparencia + entrega continua." |
| Open Graph image | 1200x630px, dark, con tagline + iso |
| Twitter Card | Mismo OG image, summary_large_image |
| Schema.org | Organization + LocalBusiness + WebSite + Person (founders) |
| Sitemap | Automático con Next.js |
| robots.txt | Allow all, sitemap link |
| Canonical URLs | En todas las páginas |

---

## 10. Performance budget

Estos números NO son nice-to-have. Son **mínimo aceptable para una landing de studio de software**. Si no llegamos, no salimos.

| Métrica | Target | Cómo lograrlo |
|---------|--------|--------------|
| **LCP** | < 2.0s | Imagen hero optimizada (WebP/AVIF), font-display swap, prefetch crítico |
| **FID/INP** | < 100ms | Sin JS pesado en hero, lazy load todo lo demás |
| **CLS** | < 0.1 | Reservar espacio para imágenes (width/height), no inyectar contenido tarde |
| **Lighthouse Performance** | ≥ 95 | Verificar en cada PR |
| **Bundle size primer load** | < 200KB JS gzipped | Tree-shaking agresivo, dynamic imports |
| **Imágenes** | WebP/AVIF, responsive `srcset`, lazy loading | Next.js Image component siempre |
| **Fonts** | < 2 familias, subset, `font-display: swap` | Self-hosted o preconnect Google Fonts |
| **Third party scripts** | Mínimos. Analytics privacy-first sin cookie banner | Plausible o Umami |

---

## 11. Roadmap de implementación

Fases para construir la landing. Estimación: **~120-150 horas** total (3-4 semanas full-time de un dev senior).

### Fase 1 — Foundation (1 semana, ~30h)

- [ ] Setup proyecto Next.js 15 + TypeScript + Tailwind v4
- [ ] Configurar tokens de diseño + tipografía
- [ ] Crear sistema de componentes base (Button, Card, Input, etc.)
- [ ] Setup i18n con next-intl
- [ ] Setup analytics (Plausible/Umami)
- [ ] Deploy a Vercel con preview environments

### Fase 2 — Estructura y contenido (1 semana, ~30h)

- [ ] Hero estático (sin animaciones aún)
- [ ] Secciones de contenido (manifiesto, servicios, metodología)
- [ ] Casos (con NEOS como case real)
- [ ] Stack y equipo
- [ ] FAQ y CTA
- [ ] Footer
- [ ] Mobile responsive completo

### Fase 3 — Animaciones y craft (1 semana, ~30h)

- [ ] Reveal on scroll en todas las secciones
- [ ] Hero animado (texto typing + visual)
- [ ] Microinteracciones en cards y CTAs
- [ ] Stack marquee
- [ ] Transiciones suaves
- [ ] Cursor follower (si va)
- [ ] Performance optimization
- [ ] Lighthouse ≥ 95

### Fase 4 — Contenido pulido + i18n + lanzamiento (1 semana, ~30h)

- [ ] Copywriting final (español + inglés)
- [ ] Fotos del equipo (sesión profesional)
- [ ] Imagen OG diseñada
- [ ] SEO completo (meta tags, schema, sitemap)
- [ ] A11y audit
- [ ] Test cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Test cross-device (iPhone, Android, desktop)
- [ ] Form de contacto wireado a Resend → `hola@praxiastudio.ar`
- [ ] Dominio + DNS apuntando a Vercel
- [ ] Launch ✨

---

## 12. Estructura de carpetas sugerida (Vite + React, igual patrón que NEOS)

```
praxiastudio/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── cases/
│   │   ├── team/
│   │   └── og/
│   ├── favicon.svg
│   └── praxia-iso.svg
├── src/
│   ├── main.tsx                ← StrictMode + createRoot (ya existe)
│   ├── App.tsx                 ← BrowserRouter + LanguageProvider + Routes
│   ├── index.css               ← Tailwind import + theme daisyUI + keyframes
│   ├── vite-env.d.ts
│   ├── pages/
│   │   └── Home.tsx            ← landing principal (compone secciones)
│   ├── components/
│   │   ├── ui/                 ← Button, Card, Input, NeosMark equivalent, etc.
│   │   ├── sections/           ← Hero, Manifiesto, Services, Methodology, Cases, Stack, Team, FAQ, Contact
│   │   ├── effects/            ← TextReveal, CursorFollower, TopoPattern, etc.
│   │   └── layout/             ← Topbar, Footer, LanguageSwitcher
│   ├── i18n/
│   │   ├── strings.ts          ← copy bilingüe ES/EN (mismo patrón NEOS)
│   │   ├── types.ts
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   └── cases.ts            ← NEOS Real Estate como primer case
│   ├── hooks/
│   │   └── useReveal.ts        ← reveal on scroll (copiado de NEOS)
│   └── lib/
│       ├── seo.ts              ← helpers para meta tags por ruta
│       └── analytics.ts        ← Plausible / Umami wrapper
├── lineamientos/               ← ESTE DOCUMENTO + futuros
├── index.html                  ← raíz Vite con meta tags + OG
├── vite.config.ts
└── package.json
```

> En Tailwind v4 no se usa `tailwind.config.ts` — toda la config (theme, plugins, custom tokens) va dentro de `src/index.css` usando `@theme`, `@plugin`, etc. Mismo patrón que en el `index.css` de NEOS.

---

## 13. Decisiones que tomar antes de la línea 1 de código

Lista de cosas que hay que cerrar con un sí/no antes de arrancar dev — para no estar replanteando a mitad de camino:

- [ ] **Paleta**: A (violet+magenta), B (green), C (yellow)? **Mi recomendación: A.**
- [ ] **Iso/logo**: ¿lo diseña UX del equipo o se contrata diseñador externo? Plazo y costo.
- [ ] **Fotos del equipo**: ¿sí o no? ¿Profesional o casual?
- [ ] **Case study NEOS**: ¿tenemos OK de NEOS para usarlos como caso visible? Si no, esperar a tener el OK.
- [ ] **Efecto "wow"**: ¿text typing, cursor follower, ambos, ninguno? Elegir antes para no perder tiempo experimentando.
- [ ] **Calendario para agendar**: ¿Calendly, Cal.com, link directo? Cuenta gratis sirve para empezar.
- [ ] **Email**: ¿Resend (recomendado) o forwarding simple desde Zoho?
- [ ] **Hosting**: Vercel vs Cloudflare Pages — Vercel tiene mejor DX para Next.js, Cloudflare es más barato a escala. **Recomendación: Vercel** para v1.
- [ ] **Domain config**: el `.ar` apunta a Vercel directamente o con CNAME desde Cloudflare? Decidir nameservers.
- [ ] **Analytics**: Plausible ($9/mo) o Umami self-hosted (gratis pero más laburo)? **Recomendación: Plausible** por simplicidad.

---

## 14. Inspiración curada

Sitios para mirar y tomar referencias (no copiar):

### Studios de software con landing premium dark
- **Linear** (linear.app) — referencia absoluta de craft visual
- **Vercel** (vercel.com) — dark mode + gradient masterclass
- **Resend** (resend.com) — dark editorial perfecto
- **Plain** (plain.com) — minimalismo extremo
- **Bun** (bun.sh) — dark + tipografía gigante

### Studios LATAM
- **Boavista** (boavista.studio) — Brasil, dark editorial
- **Studio Daza** (studiodaza.com) — México, micro-portfolio
- **Anagrama** (anagrama.com) — México, layouts experimentales

### Microinteracciones
- **Stripe** (stripe.com) — el gold standard de microcraft
- **Framer** (framer.com) — animaciones de hero memorables

---

## 15. Anti-patrones — qué NO hacer

| ❌ NO | Por qué |
|-------|---------|
| Carousel auto-rotando en hero | Distrae, mata performance, los usuarios no esperan |
| Pop-up de cookies enorme | Plausible/Umami no requieren consent, evitalo |
| Pop-up de newsletter en primera visita | Es 2026, ya nadie tolera eso |
| Video autoplay con audio | Banneado de internet por buenas razones |
| Live chat agresivo (Intercom popup) | Para una landing de studio no aplica |
| Más de 2 fuentes tipográficas | Inter Tight + (opcional Playfair para quotes) = todo |
| Animaciones largas (> 1s) | Frustran al usuario que ya scrolea |
| Iconos con styles inconsistentes | Usar SOLO Lucide o SOLO custom, no mezclar |
| Imágenes stock obvias | Mejor ilustraciones o sin imagen que stock photo de "personas felices con laptop" |
| Testimonials inventados | Hasta tener uno real (NEOS post-launch), no poner. Mejor honesto que falso. |

---

## 16. Métricas de éxito post-launch

Cómo sabemos que la landing está funcionando (en los primeros 3 meses):

| Métrica | Target mes 1 | Target mes 3 |
|---------|-------------|-------------|
| Visitas únicas/mes | 200+ | 1000+ |
| Bounce rate | < 60% | < 50% |
| Avg time on page | > 1 min | > 2 min |
| Conversiones (form/WhatsApp/agenda) | 1-2 | 5-10 |
| Lighthouse score | 95+ | 95+ |
| Posicionamiento "praxia studio" en Google | Top 5 AR | Top 1 AR |
| Backlinks orgánicos | 0 | 3-5 |

---

## Apéndice A — Lista de assets a producir antes del launch

- [ ] Iso/logo de Praxia Studio (color, b&w, knockout)
- [ ] Favicon SVG (16x16 que se vea bien)
- [ ] OG image (1200x630)
- [ ] 4 fotos profesionales del equipo (B&W, fondo neutro)
- [ ] Screenshot hero del case NEOS
- [ ] Mockups o GIFs cortos del proceso (sprints, demos, etc.)
- [ ] 6-8 ilustraciones/iconos custom para servicios

---

## Apéndice B — Brief para diseñador (si se contrata uno externo para el iso)

```
Cliente: Praxia Studio
Industria: Software / Producto digital
Tono: Senior, craft, no pretencioso, moderno
Concepto: "Praxis" = acción que transforma. El iso debería sugerir
movimiento, transformación, o aplicación práctica. Evitar:
metáforas obvias de "código" (chevrons, brackets), iconos genéricos
de "tech" (engranajes, circuitos), o ilustraciones literales.
Estilo: geométrico abstracto, minimalista, escalable de 16px a 200px+.
Colores: violet (#8b5cf6) + magenta (#e91e8c) como gradient.
Versiones requeridas: full color, white on dark, dark on white,
versión monocromática plana.
Entregables: SVG vectorial + PNG en 3 tamaños + brand guide básico
(usos correctos e incorrectos, área de respeto).
Inspiración (no copiar): Linear's L, Vercel's triangle, Stripe's bars.
```

---

*Documento vivo. Se actualiza a medida que tomamos decisiones de producto, contenido o tecnología. Última revisión: 2026-05-26.*

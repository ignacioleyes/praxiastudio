import type { Lang } from "./types";

/**
 * UI strings dictionary. Use `useT()` para leer (`const t = useT(); t.hero.titleA`).
 * Mantener las dos ramas (es / en) en sync — TypeScript fuerza la misma shape.
 */
export const messages = {
  es: {
    common: {
      menu: "Menú",
      close: "Cerrar",
      open: "Abrir menú",
      language: "Idioma",
      languageShort: "ES",
    },
    nav: {
      navigation: "Navegación",
      home: "Inicio",
      manifesto: "Manifiesto",
      services: "Servicios",
      methodology: "Metodología",
      cases: "Casos",
      stack: "Stack",
      team: "Equipo",
      faq: "FAQ",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Studio de software craft · Salta, Argentina",
      titleA: "Software puesto en",
      titleHighlight: "acción.",
      subtitle:
        "Construimos producto digital senior end-to-end. Desde el primer wireframe hasta el sistema en producción, con un equipo que conoce su oficio — UX, desarrollo, seguridad y QA bajo el mismo techo.",
      ctaPrimary: "Hablemos de tu proyecto",
      ctaSecondary: "Ver cómo trabajamos",
      scroll: "scroll",
    },
    manifesto: {
      eyebrow: "Manifiesto",
      quote:
        "Praxia viene del griego, donde describe la acción que transforma el conocimiento en realidad. Aplicamos esa idea al software: tomamos las mejores herramientas y prácticas modernas, y las usamos para que los sistemas de nuestros clientes mejoren de verdad.",
      tagline: "No vendemos features. Vendemos cambio aplicado.",
      author: "Praxia Studio",
      authorRole: "Salta, Argentina",
    },
    methodology: {
      eyebrow: "Metodología",
      title: "Cómo trabajamos",
      subtitle:
        "Un proceso que muestra avance cada dos semanas, no al final. El cliente ve cada decisión, no recibe una sorpresa.",
      steps: {
        discovery: {
          timing: "Semana 0",
          title: "Discovery",
          description:
            "Entendemos el problema antes de proponer solución. Hablamos con el equipo, mapeamos flujos reales, validamos supuestos.",
          badge: "Sin asumir requirements",
        },
        foundation: {
          timing: "Semanas 1–2",
          title: "Sprint 0 · Foundation",
          description:
            "Stack, design system, repos, CI/CD, entornos. La cocina lista antes del primer feature, no descubriendo problemas en el sprint 5.",
          badge: "Foundation antes del feature",
        },
        sprints: {
          timing: "Sprints quincenales",
          title: "Construcción con demo continua",
          description:
            "Sprints de 2 semanas. Cada cierre tiene demo en vivo con el cliente, código en un entorno real, decisiones validadas.",
          badge: "Demo cada 2 semanas, no al final",
        },
        uat: {
          timing: "Últimas 2 semanas",
          title: "UAT colaborativo",
          description:
            "El equipo del cliente prueba con nosotros presentes. Bugs y ajustes se resuelven en el momento, no por ticket.",
          badge: "El cliente prueba con el equipo presente",
        },
        deploy: {
          timing: "Lanzamiento",
          title: "Deploy + capacitación",
          description:
            "Salida a producción, migración de datos si hace falta, sesiones de capacitación al equipo y manual de uso navegable.",
          badge: "Capacitación incluida",
        },
        support: {
          timing: "Post-launch",
          title: "Soporte continuo",
          description:
            "Plan de soporte mensual opcional para bug fixes, mejoras menores y evolución del producto. Sin lock-in.",
          badge: "Opcional · sin lock-in",
        },
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: "Tenés un sistema que necesita una mano senior.",
      titleAccent: "Tenemos el equipo.",
      subtitle:
        "Contanos en una línea qué estás construyendo o qué problema te aprieta. Te respondemos en menos de 24 hs.",
      form: {
        nameLabel: "Nombre",
        namePlaceholder: "Cómo te llamás",
        emailLabel: "Email",
        emailPlaceholder: "vos@empresa.com",
        messageLabel: "Qué necesitás",
        messagePlaceholder: "Un párrafo es suficiente — el problema, el plazo, el contexto.",
        submit: "Mandalo, te respondemos en 24h",
        sentTitle: "Listo, te respondemos en 24h.",
        sentBody:
          "Revisamos cada mensaje a mano. Si urge, podés escribirnos por WhatsApp o agendar una llamada directa.",
        sentReset: "Mandar otro",
      },
      alternativesLabel: "O hablemos por otro lado",
      alternatives: {
        email: { label: "Email", hint: "Te respondemos el mismo día" },
        whatsapp: { label: "WhatsApp", hint: "Más informal, más rápido" },
        calendar: { label: "Agendá una llamada", hint: "30 minutos, sin compromiso" },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas que nos hacen seguido",
      subtitle:
        "Las dudas reales que aparecen antes de contratar a un studio. Si la tuya no está, escribinos.",
      ctaQuestion: "¿Otra pregunta?",
      ctaLink: "Escribinos",
      items: {
        timeline: {
          q: "¿Cuánto tarda un proyecto típico?",
          a: "Depende del scope. Una landing como esta la entregamos en 1 semana. Un sistema integral arranca desde 4 semanas y se ajusta según los requerimientos. En el discovery te damos un timeline concreto con hitos — no un plazo flexible que se va dilatando.",
        },
        payment: {
          q: "¿Trabajan con equity, pre-seed o solo cash?",
          a: "Solo cash. No tomamos equity ni revenue share. Buscamos proyectos donde el cliente tiene presupuesto definido y nosotros entregamos un trabajo terminado y mantenible.",
        },
        scope: {
          q: "¿Cómo manejan los cambios de scope?",
          a: "Cualquier cambio se cotiza al momento y se decide juntos. Si entra, ajustamos el cronograma. Si no entra, queda como etapa siguiente. Cero sorpresas en la entrega final.",
        },
        postlaunch: {
          q: "¿Qué pasa post-launch?",
          a: "Garantía de 30 días sobre todo lo entregado, sin costo. Después ofrecemos planes mensuales de soporte continuo — bug fixes, mejoras menores, evolución del producto. Opcionales, sin lock-in.",
        },
        legacy: {
          q: "¿Mantienen sistemas que no construyeron ustedes?",
          a: "Sí, con un audit inicial pago. Revisamos el código, identificamos deuda técnica y definimos qué se mantiene tal cual y qué necesita refactor. A partir de ahí, plan de mantenimiento mensual.",
        },
      },
    },
    team: {
      eyebrow: "Equipo",
      title: "Quién está detrás",
      subtitle:
        "Un studio chico, senior, multidisciplinario. El cliente trabaja con las mismas personas que escriben el código.",
      founderBadge: "Founder",
      linkedinLabel: "LinkedIn",
      members: {
        ignacio: {
          name: "Ignacio Leyes",
          role: "Founder · Fullstack Senior",
          bio: "+6 años construyendo producto digital. Lleva la dirección técnica y la relación directa con cada cliente.",
        },
        magali: {
          name: "Magalí Gandini",
          role: "UX/UI Designer Senior",
          bio: "Diseñadora de producto digital con +9 años. Pone foco obsesivo en la experiencia del usuario — productos simples, humanos, centrados en las personas que los usan.",
        },
        dario: {
          name: "Dario Esposito",
          role: "Fullstack Senior · Ethical Hacker",
          bio: "Fullstack con +12 años, especialista en ciberseguridad y ethical hacking. Aporta la mirada de seguridad desde el día uno del proyecto.",
        },
        luciano: {
          name: "Luciano Leyes",
          role: "QA Automation Senior",
          bio: "QA Automation Senior con +12 años. Diseña la red de tests automatizados que sostiene cada release — calidad como sistema, no como suerte.",
        },
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologías que dominamos",
      subtitle:
        "Usamos lo moderno con criterio, no por hype. Estas son las herramientas que conocemos a fondo y elegimos cuando resuelven el problema.",
    },
    cases: {
      eyebrow: "Casos",
      title: "Trabajos hechos",
      subtitle:
        "Cada proyecto que asumimos lo tratamos como propio. Este es uno reciente — en producción, con tráfico real.",
      previewLabel: "Vista del sitio",
      stackLabel: "Stack",
      items: {
        neos: {
          category: "Real Estate · LATAM",
          tagline: "Software puesto en acción",
          title: "Sistema integral para una desarrolladora inmobiliaria",
          description:
            "Landing pública bilingüe, chatbot conversacional, captura de leads en Supabase con notificaciones en tiempo real y mapas interactivos de cada desarrollo. Toda la captación de un grupo inmobiliario, en un sistema único.",
          linkLabel: "Ver sitio en vivo",
        },
      },
    },
    services: {
      eyebrow: "Servicios",
      title: "Qué hacemos",
      subtitle:
        "Construcción de producto digital de punta a punta. Cinco capacidades que se combinan según lo que tu operación necesite.",
      cardCta: "Ver más",
      backCta: "Volver",
      items: {
        design: {
          title: "Diseño de producto digital",
          description:
            "De wireframes a interfaces production-ready. UX e UI bajo el mismo techo, sin handoff perdido entre equipos.",
          descriptionLong:
            "Wireframes de baja fidelidad para validar flujos, sistema de componentes en Figma, prototipo navegable y handoff con tokens y specs. UI lista para que un dev la implemente sin preguntas.",
        },
        fullstack: {
          title: "Desarrollo fullstack",
          description:
            "React, TypeScript, Node, PostgreSQL, Supabase. Construcción de producto end-to-end con stack moderno y mantenible.",
          descriptionLong:
            "TypeScript estricto, tests donde importa, CI/CD desde el sprint 1 y deploys de preview por feature. El código queda en tu repo, no en el nuestro — sin lock-in.",
        },
        integrations: {
          title: "Integración de sistemas",
          description:
            "Conectamos lo que tu empresa ya usa con lo que necesita. APIs, webhooks, ETL, automatizaciones sin reinventar la rueda.",
          descriptionLong:
            "Mapa de sistemas existentes, contratos de API definidos, sincronización por eventos o batch, manejo de errores y reintentos. Documentación del flujo para que cualquiera del equipo lo entienda.",
        },
        legacy: {
          title: "Modernización legacy",
          description:
            "Refactor de sistemas viejos a stack moderno sin big-bang. Migración progresiva, con riesgo controlado y operación viva.",
          descriptionLong:
            "Auditoría inicial de deuda técnica, plan de refactor por capas, migración progresiva con el sistema viejo y nuevo conviviendo. Cero ventana de mantenimiento, cero data perdida.",
        },
        admin: {
          title: "CMS y paneles administrativos",
          description:
            "Paneles a medida para que el negocio edite, configure y opere sin pedirle nada al programador.",
          descriptionLong:
            "Panel hecho a medida para tu modelo de datos. Roles, permisos, auditoría y exportes incluidos. El equipo edita contenido, configura el negocio y consulta reportes sin tocar código.",
        },
        qa: {
          title: "QA y automatización",
          description:
            "Testing automatizado, CI/CD y observabilidad. La calidad como sistema, no como suerte de último minuto.",
          descriptionLong:
            "Suite de tests automatizados en cada capa relevante, pipeline de CI que bloquea regresiones antes del merge, monitoreo de errores en producción. Calidad medible, no opinable.",
        },
      },
    },
    footer: {
      blurb: "Software puesto en acción.",
      location: "Salta, Argentina",
      copyright: (year: number) =>
        `© ${year} Praxia Studio. Hecho con criterio en Salta.`,
      tagline: "Praxis aplicada al producto digital.",
    },
  },
  en: {
    common: {
      menu: "Menu",
      close: "Close",
      open: "Open menu",
      language: "Language",
      languageShort: "EN",
    },
    nav: {
      navigation: "Navigation",
      home: "Home",
      manifesto: "Manifesto",
      services: "Services",
      methodology: "Methodology",
      cases: "Cases",
      stack: "Stack",
      team: "Team",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Senior software craft studio · Salta, Argentina",
      titleA: "Software put into",
      titleHighlight: "action.",
      subtitle:
        "We build senior digital product end-to-end. From the first wireframe to production-ready systems, with a team that knows its craft — UX, development, security and QA under the same roof.",
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: "See how we work",
      scroll: "scroll",
    },
    manifesto: {
      eyebrow: "Manifesto",
      quote:
        "Praxia comes from the Greek word for the action that turns knowledge into reality. We apply that idea to software: we take the best modern tools and practices, and use them to actually make our clients' systems better.",
      tagline: "We don't sell features. We sell applied change.",
      author: "Praxia Studio",
      authorRole: "Salta, Argentina",
    },
    methodology: {
      eyebrow: "Methodology",
      title: "How we work",
      subtitle:
        "A process that shows progress every two weeks, not at the end. The client sees every decision — no surprises at the finish line.",
      steps: {
        discovery: {
          timing: "Week 0",
          title: "Discovery",
          description:
            "We understand the problem before proposing a solution. We talk to your team, map real flows, validate assumptions.",
          badge: "We don't assume requirements",
        },
        foundation: {
          timing: "Weeks 1–2",
          title: "Sprint 0 · Foundation",
          description:
            "Stack, design system, repos, CI/CD, environments. Kitchen ready before the first feature — not discovering issues in sprint 5.",
          badge: "Foundation before features",
        },
        sprints: {
          timing: "Biweekly sprints",
          title: "Build with continuous demos",
          description:
            "Two-week sprints. Every close ships a live demo with the client, code running in a real environment, decisions validated.",
          badge: "Demo every 2 weeks, not at the end",
        },
        uat: {
          timing: "Final 2 weeks",
          title: "Collaborative UAT",
          description:
            "The client's team tests with us in the room. Bugs and tweaks are resolved on the spot, not via ticket.",
          badge: "Client tests with the team present",
        },
        deploy: {
          timing: "Launch",
          title: "Deploy + training",
          description:
            "Production rollout, data migration if needed, training sessions for the team and a navigable user manual.",
          badge: "Training included",
        },
        support: {
          timing: "Post-launch",
          title: "Ongoing support",
          description:
            "Optional monthly support plan for bug fixes, small improvements and product evolution. No lock-in.",
          badge: "Optional · no lock-in",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "You've got a system that needs a senior hand.",
      titleAccent: "We've got the team.",
      subtitle:
        "Tell us in a line what you're building or what's hurting. We reply within 24 hours.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        messageLabel: "What you need",
        messagePlaceholder: "A paragraph is enough — the problem, the timeline, the context.",
        submit: "Send it, we reply in 24h",
        sentTitle: "Got it. We reply within 24h.",
        sentBody:
          "We read every message by hand. If it's urgent, WhatsApp us or book a direct call.",
        sentReset: "Send another",
      },
      alternativesLabel: "Or reach us another way",
      alternatives: {
        email: { label: "Email", hint: "Same-day reply" },
        whatsapp: { label: "WhatsApp", hint: "Quicker, more casual" },
        calendar: { label: "Book a call", hint: "30 min, no commitment" },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions we get often",
      subtitle:
        "The real doubts that come up before hiring a studio. If yours isn't here, just ask.",
      ctaQuestion: "Another question?",
      ctaLink: "Get in touch",
      items: {
        timeline: {
          q: "How long does a typical project take?",
          a: "Depends on scope. A landing like this one we ship in 1 week. A full system starts at 4 weeks and scales with requirements. During discovery we give you a concrete timeline with milestones — not a flexible date that keeps slipping.",
        },
        payment: {
          q: "Do you work with equity, pre-seed or cash only?",
          a: "Cash only. We don't take equity or revenue share. We look for projects where the client has a defined budget and we deliver finished, maintainable work.",
        },
        scope: {
          q: "How do you handle scope changes?",
          a: "Any change is quoted on the spot and decided together. If it's in, we adjust the timeline. If it's out, it becomes the next stage. Zero surprises at delivery.",
        },
        postlaunch: {
          q: "What happens post-launch?",
          a: "30-day warranty on everything delivered, no charge. After that we offer monthly support plans — bug fixes, small improvements, product evolution. Optional, no lock-in.",
        },
        legacy: {
          q: "Do you maintain systems you didn't build?",
          a: "Yes, with a paid initial audit. We review the code, identify technical debt and decide what stays as-is and what needs refactoring. From there, a monthly maintenance plan.",
        },
      },
    },
    team: {
      eyebrow: "Team",
      title: "Who's behind it",
      subtitle:
        "A small, senior, multidisciplinary studio. Clients work with the same people who write the code.",
      founderBadge: "Founder",
      linkedinLabel: "LinkedIn",
      members: {
        ignacio: {
          name: "Ignacio Leyes",
          role: "Founder · Senior Fullstack",
          bio: "+6 years building digital product. Leads technical direction and the direct relationship with every client.",
        },
        magali: {
          name: "Magalí Gandini",
          role: "Senior UX/UI Designer",
          bio: "Digital product designer with +9 years. Obsessive focus on user experience — simple, human products centered on the people using them.",
        },
        dario: {
          name: "Dario Esposito",
          role: "Senior Fullstack · Ethical Hacker",
          bio: "Fullstack with +12 years, specialist in cybersecurity and ethical hacking. Brings the security mindset from day one of the project.",
        },
        luciano: {
          name: "Luciano Leyes",
          role: "Senior QA Automation",
          bio: "Senior QA Automation with +12 years. Designs the network of automated tests that holds every release — quality as a system, not as luck.",
        },
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools we know inside out",
      subtitle:
        "We use modern tech with judgment, not hype. These are the tools we know deeply and reach for when they fit the job.",
    },
    cases: {
      eyebrow: "Cases",
      title: "Work shipped",
      subtitle:
        "We treat every project as our own. Here's a recent one — in production, with real traffic.",
      previewLabel: "Site preview",
      stackLabel: "Stack",
      items: {
        neos: {
          category: "Real Estate · LATAM",
          tagline: "Software put into action",
          title: "End-to-end platform for a real estate developer",
          description:
            "Bilingual public landing, conversational chatbot, lead capture in Supabase with real-time notifications and interactive maps per development. The full lead funnel of a real estate group, in a single system.",
          linkLabel: "Visit live site",
        },
      },
    },
    services: {
      eyebrow: "Services",
      title: "What we do",
      subtitle:
        "End-to-end digital product. Six capabilities we combine based on what your operation actually needs.",
      cardCta: "Learn more",
      backCta: "Back",
      items: {
        design: {
          title: "Digital product design",
          description:
            "From wireframes to production-ready interfaces. UX and UI under the same roof — no handoff lost between teams.",
          descriptionLong:
            "Low-fidelity wireframes to validate flows, a Figma component system, navigable prototype, and handoff with tokens and specs. UI ready for a dev to implement without questions.",
        },
        fullstack: {
          title: "Fullstack development",
          description:
            "React, TypeScript, Node, PostgreSQL, Supabase. End-to-end product built on a modern, maintainable stack.",
          descriptionLong:
            "Strict TypeScript, tests where they matter, CI/CD from sprint 1, and preview deploys per feature. Code lives in your repo, not ours — no lock-in.",
        },
        integrations: {
          title: "Systems integration",
          description:
            "We connect what your company already uses with what it needs. APIs, webhooks, ETL, automation — no reinventing the wheel.",
          descriptionLong:
            "Map of existing systems, defined API contracts, event-based or batch sync, error handling and retries. Flow documentation so anyone on the team can understand it.",
        },
        legacy: {
          title: "Legacy modernization",
          description:
            "Refactor old systems to a modern stack without a big-bang. Progressive migration, controlled risk, business keeps running.",
          descriptionLong:
            "Initial technical-debt audit, layer-by-layer refactor plan, progressive migration with the old and new system coexisting. Zero maintenance window, zero data loss.",
        },
        admin: {
          title: "CMS and admin panels",
          description:
            "Tailored back-offices so the business can edit, configure and operate without filing a ticket to a developer.",
          descriptionLong:
            "Admin panel tailored to your data model. Roles, permissions, auditing and exports included. The team edits content, configures the business and pulls reports without touching code.",
        },
        qa: {
          title: "QA and automation",
          description:
            "Automated testing, CI/CD and observability. Quality as a system, not as last-minute luck.",
          descriptionLong:
            "Automated test suite across every relevant layer, CI pipeline that blocks regressions before merge, production error monitoring. Quality that's measurable, not opinionable.",
        },
      },
    },
    footer: {
      blurb: "Software put into action.",
      location: "Salta, Argentina",
      copyright: (year: number) =>
        `© ${year} Praxia Studio. Crafted in Salta.`,
      tagline: "Praxis applied to digital product.",
    },
  },
} as const;

export type Messages = (typeof messages)[Lang];

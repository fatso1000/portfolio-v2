const en = {
  translation: {
    common: {
      technologies: "Technologies",
      website: "website",
    },
    header: {
      home: "Home",
      work: "Selected work",
      projects: "Projects",
      experience: "Experience",
      capabilities: "Capabilities",
      education: "Education",
      contact: "Contact",
      primaryNav: "Primary navigation",
      navbar: {
        download: "Download CV",
        menuActions: "Navigation and actions",
        openMenu: "Open navigation menu",
      },
    },
    introduction: {
      eyebrow: "Portfolio / 2026",
      role: "Front-End Developer",
      lead: "Web and mobile interfaces using Vue, React, TypeScript, and modern CSS.",
      experience: "4+ years experience",
      location: "Auckland, New Zealand",
      portraitAlt: "Matias Benitez, front-end engineer",
      viewWork: "View selected work",
      canvasLabel: "Front-end development workspace",
    },
    selectedWork: {
      eyebrow: "Professional product work",
      title: "Selected work",
      intro:
        "A closer look at the kind of product challenges I have owned: complex workflows, evolving platforms, and interfaces that need to remain useful as they scale.",
      context: "Context",
      contribution: "Contribution",
      outcome: "Outcome",
      items: [
        {
          id: "growlat",
          company: "Growlat",
          title: "Making AI-powered marketing operations understandable",
          context:
            "An omnichannel data marketing platform where enterprise teams manage leads, campaigns, automations, and reporting from one product.",
          contribution:
            "Developed and evolved user-facing and back-office experiences, including responsive dashboards, data visualizations, and REST API integrations.",
          outcome:
            "A clearer, more maintainable product interface that helps teams work with complex marketing data and AI-assisted workflows.",
          stack: [
            "Vue 3",
            "Pinia",
            "PrimeVue",
            "Vite",
            "ApexCharts",
            "Tailwind CSS",
          ],
        },
        {
          id: "dreamVenture",
          company: "Dream Venture Studio",
          title: "Strengthening a large-scale EdTech platform",
          context:
            "A learning platform serving the Indian market across user-facing and administration experiences.",
          contribution:
            "Led front-end refactoring across React and React Native, introduced stricter TDD practices, and improved custom CI/CD workflows.",
          outcome:
            "A more maintainable delivery foundation with stronger testing discipline and more reliable deployment practices.",
          stack: [
            "React",
            "React Native",
            "TypeScript",
            "Jest",
            "TDD",
            "CI/CD",
          ],
        },
        {
          id: "mobeats",
          company: "Mobeats",
          title: "Delivering products across industries and frameworks",
          context:
            "A portfolio of healthcare, agriculture, e-commerce, and promotional-product applications with distinct product needs.",
          contribution:
            "Built responsive web, mobile, and back-office interfaces while moving comfortably between React, Vue, Angular, React Native, and Node.js.",
          outcome:
            "Consistent product delivery across varied domains, devices, and technical stacks while maintaining usability and cross-browser quality.",
          stack: [
            "React",
            "Vue",
            "Angular",
            "React Native",
            "Node.js",
            "MySQL",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Independent practice",
      title: "Projects built to explore",
      intro:
        "Independent work where I experiment with interaction patterns, product ideas, and full-stack tools outside client constraints.",
      live: "View live",
      source: "View source",
      preview: "project preview",
      featured: [
        {
          id: "bsasTravel",
          title: "BSAS Travel",
          description:
            "An interactive Buenos Aires guide focused on quick discovery, clear recommendations, events, and practical tourist routes.",
          stack: ["React", "Tailwind CSS", "Responsive UI"],
        },
        {
          id: "learnLanguages",
          title: "Learn Languages Online",
          description:
            "A full-stack language-learning platform exploring structured content, authentication, and an approachable learning experience.",
          stack: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
        },
        {
          id: "osClone",
          title: "OS Clone",
          description:
            "A playful browser-based operating-system interface exploring windows, desktop interactions, and familiar spatial UI patterns.",
          stack: ["React", "Interaction design", "CSS"],
        },
      ],
      archiveEyebrow: "Earlier experiments",
      archiveTitle: "Project archive",
      archive: [
        {
          id: "personalBlog",
          title: "Personal Blog",
          description:
            "A Next.js publishing experiment with Prisma and PostgreSQL.",
        },
        {
          id: "portfolio",
          title: "Portfolio v2",
          description: "The source and design evolution behind this portfolio.",
        },
        {
          id: "mercadoLibre",
          title: "MercadoLibre Clone",
          description:
            "A React Native interface study based on a regional marketplace.",
        },
        {
          id: "gamesDb",
          title: "VideoGamesDB",
          description:
            "A deprecated full-stack search project built during Soy Henry.",
        },
      ],
    },
    experience: {
      eyebrow: "Career",
      title: "Experience",
      intro:
        "A career shaped by adaptable front-end delivery, product collaboration, and steadily deeper ownership.",
      current: "Current",
      details: "View role highlights",
      roles: [
        {
          id: "growlat",
          position: "Front-End Developer",
          company: "Growlat",
          date: "February 2025 — Present",
          location: "Hybrid",
          current: true,
          summary:
            "Building and evolving an AI-powered omnichannel data marketing platform.",
          highlights: [
            "Develop responsive user and back-office product experiences.",
            "Build data dashboards and complex campaign-management interfaces.",
            "Collaborate across product and backend teams on REST API integrations.",
          ],
        },
        {
          id: "dreamVenture",
          position: "Front-End Developer",
          company: "Dream Venture Studio",
          date: "March 2024 — January 2025",
          location: "Remote, United States",
          summary:
            "Refactored and strengthened a large-scale EdTech platform for the Indian market.",
          highlights: [
            "Led front-end refactoring across React and React Native.",
            "Introduced stricter Test-Driven Development practices.",
            "Improved custom CI/CD workflows and deployment reliability.",
          ],
        },
        {
          id: "mobeats",
          position: "Front-End Developer",
          company: "Mobeats",
          date: "April 2021 — June 2023",
          location: "Buenos Aires, Argentina",
          summary:
            "Delivered web and mobile products for healthcare, agriculture, and commerce clients.",
          highlights: [
            "Worked across React, Vue, Angular, React Native, and Node.js.",
            "Built responsive interfaces and back-office applications.",
            "Tested and debugged products across browsers and devices.",
          ],
        },
      ],
    },
    capabilities: {
      eyebrow: "How I contribute",
      title: "Capabilities",
      intro:
        "Tools matter most when they support good product decisions, maintainable systems, and dependable collaboration.",
      groups: [
        {
          id: "frontend",
          title: "Frontend systems",
          description:
            "Build scalable web and mobile interfaces with clear component and state architecture.",
          skills: [
            "TypeScript",
            "JavaScript",
            "Vue 3",
            "React",
            "Angular",
            "React Native",
            "HTML5",
            "CSS3 / Sass",
          ],
        },
        {
          id: "product",
          title: "Product UI and data",
          description:
            "Turn complex workflows and information into responsive, approachable product experiences.",
          skills: [
            "Responsive UX",
            "Design systems",
            "Data visualization",
            "ApexCharts",
            "Tailwind CSS",
            "PrimeVue",
            "Figma",
          ],
        },
        {
          id: "quality",
          title: "Quality and delivery",
          description:
            "Keep delivery reliable through testing discipline, automation, and iterative teamwork.",
          skills: [
            "Jest",
            "TDD",
            "CI/CD",
            "Git",
            "GitHub",
            "GitLab",
            "Agile / Scrum",
          ],
        },
        {
          id: "platform",
          title: "Backend and platform",
          description:
            "Work effectively across API boundaries and understand the systems behind the interface.",
          skills: [
            "Node.js",
            "REST APIs",
            "PostgreSQL",
            "MySQL",
            "SAP BTP",
            "Prisma",
          ],
        },
        {
          id: "ai",
          title: "AI-assisted engineering",
          description:
            "Use modern AI tooling to accelerate exploration, implementation, and technical communication.",
          skills: ["Codex", "Claude", "OpenCode", "Ollama", "MiniMax"],
        },
      ],
      collaborationEyebrow: "Working style",
      collaboration:
        "Collaborative, detail-oriented, and comfortable learning quickly. I value clear communication, useful documentation, and small iterations that keep teams moving.",
    },
    education: {
      eyebrow: "Foundations",
      title: "Education and certifications",
      intro:
        "Formal programming foundations, full-stack training, and continued platform learning.",
      formalTitle: "Formal education",
      certificationsTitle: "Training and certifications",
      formal: [
        {
          id: "technicalSchool",
          title: "Programming Technician",
          institution: "Escuela de Educación Técnica Nro. 4",
          date: "Graduated 2020",
          description:
            "Six-year technical programme covering programming, databases, electronics, and software fundamentals.",
        },
      ],
      certifications: [
        {
          id: "soyHenry",
          title: "Full-Stack Development",
          institution: "Soy Henry",
          date: "2020 — 2021",
          description:
            "Intensive full-stack programme focused on React, Node.js, PostgreSQL, APIs, testing, and deployment.",
        },
        {
          id: "accenture",
          title: "SAP BTP CAP-UI5",
          institution: "Accenture",
          date: "2023",
          description:
            "Platform training across SAP BTP, CAP, UI5, HANA, Fiori, Node.js, and MTA.",
        },
      ],
    },
    contact: {
      eyebrow: "Let’s build something useful",
      title:
        "Looking for a front-end engineer who cares about the whole product?",
      intro:
        "I am open to product engineering opportunities in New Zealand where I can help turn ambitious ideas into clear, dependable experiences.",
      email: "Email me",
      designed: "Designed and developed by Matias Benitez",
      footerLabel: "Footer",
    },
  },
};

const es = {
  translation: {
    common: { technologies: "Tecnologías", website: "sitio web" },
    header: {
      home: "Inicio",
      work: "Trabajo destacado",
      projects: "Proyectos",
      experience: "Experiencia",
      capabilities: "Capacidades",
      education: "Educación",
      contact: "Contacto",
      primaryNav: "Navegación principal",
      navbar: {
        download: "Descargar CV",
        menuActions: "Navegación y acciones",
        openMenu: "Abrir menú de navegación",
      },
    },
    introduction: {
      eyebrow: "Portfolio / 2026",
      role: "Desarrollador Front-End",
      lead: "Interfaces web y mobile con Vue, React, TypeScript y CSS moderno.",
      experience: "Más de 4 años de experiencia",
      location: "Auckland, Nueva Zelanda",
      portraitAlt: "Matias Benitez, ingeniero front-end",
      viewWork: "Ver trabajo destacado",
      canvasLabel: "Espacio de trabajo de desarrollo front-end",
    },
    selectedWork: {
      eyebrow: "Trabajo profesional de producto",
      title: "Trabajo destacado",
      intro:
        "Una mirada a los desafíos de producto que asumí: flujos complejos, plataformas en evolución e interfaces que deben seguir siendo útiles al crecer.",
      context: "Contexto",
      contribution: "Contribución",
      outcome: "Resultado",
      items: [
        {
          id: "growlat",
          company: "Growlat",
          title: "Haciendo comprensibles las operaciones de marketing con IA",
          context:
            "Plataforma omnicanal donde equipos empresariales gestionan leads, campañas, automatizaciones y reportes.",
          contribution:
            "Desarrollé y evolucioné experiencias de usuario y back-office, dashboards responsivos, visualizaciones e integraciones REST.",
          outcome:
            "Una interfaz más clara y mantenible para trabajar con datos de marketing y flujos asistidos por IA.",
          stack: [
            "Vue 3",
            "Pinia",
            "PrimeVue",
            "Vite",
            "ApexCharts",
            "Tailwind CSS",
          ],
        },
        {
          id: "dreamVenture",
          company: "Dream Venture Studio",
          title: "Fortaleciendo una plataforma EdTech a gran escala",
          context:
            "Plataforma educativa para el mercado de India con experiencias para estudiantes y administración.",
          contribution:
            "Lideré refactors en React y React Native, incorporé prácticas TDD más estrictas y mejoré flujos CI/CD.",
          outcome:
            "Una base más mantenible, con mejor disciplina de testing y despliegues más confiables.",
          stack: [
            "React",
            "React Native",
            "TypeScript",
            "Jest",
            "TDD",
            "CI/CD",
          ],
        },
        {
          id: "mobeats",
          company: "Mobeats",
          title: "Entregando productos entre industrias y frameworks",
          context:
            "Aplicaciones de salud, agricultura, e-commerce y productos promocionales con necesidades distintas.",
          contribution:
            "Construí interfaces web, mobile y back-office usando React, Vue, Angular, React Native y Node.js.",
          outcome:
            "Entrega consistente en distintos dominios, dispositivos y stacks, manteniendo usabilidad y calidad cross-browser.",
          stack: [
            "React",
            "Vue",
            "Angular",
            "React Native",
            "Node.js",
            "MySQL",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Práctica independiente",
      title: "Proyectos para explorar",
      intro:
        "Trabajo independiente donde exploro patrones de interacción, ideas de producto y herramientas full-stack.",
      live: "Ver online",
      source: "Ver código",
      preview: "vista previa del proyecto",
      featured: [
        {
          id: "bsasTravel",
          title: "BSAS Travel",
          description:
            "Guía interactiva de Buenos Aires enfocada en descubrimiento rápido, recomendaciones, eventos y rutas útiles.",
          stack: ["React", "Tailwind CSS", "UI responsiva"],
        },
        {
          id: "learnLanguages",
          title: "Learn Languages Online",
          description:
            "Plataforma full-stack para aprender idiomas, explorando contenido estructurado, autenticación y una experiencia accesible.",
          stack: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
        },
        {
          id: "osClone",
          title: "OS Clone",
          description:
            "Interfaz de sistema operativo en el navegador que explora ventanas, escritorio y patrones espaciales familiares.",
          stack: ["React", "Diseño de interacción", "CSS"],
        },
      ],
      archiveEyebrow: "Experimentos anteriores",
      archiveTitle: "Archivo de proyectos",
      archive: [
        {
          id: "personalBlog",
          title: "Blog personal",
          description:
            "Experimento de publicación con Next.js, Prisma y PostgreSQL.",
        },
        {
          id: "portfolio",
          title: "Portfolio v2",
          description:
            "El código y la evolución de diseño detrás de este portfolio.",
        },
        {
          id: "mercadoLibre",
          title: "MercadoLibre Clone",
          description:
            "Estudio de interfaz en React Native basado en un marketplace regional.",
        },
        {
          id: "gamesDb",
          title: "VideoGamesDB",
          description:
            "Proyecto full-stack de búsqueda, actualmente deprecado, creado en Soy Henry.",
        },
      ],
    },
    experience: {
      eyebrow: "Carrera",
      title: "Experiencia",
      intro:
        "Una carrera construida sobre entrega front-end adaptable, colaboración de producto y mayor responsabilidad.",
      current: "Actual",
      details: "Ver detalles del rol",
      roles: [
        {
          id: "growlat",
          position: "Desarrollador Front-End",
          company: "Growlat",
          date: "Febrero 2025 — Presente",
          location: "Híbrido",
          current: true,
          summary:
            "Construcción y evolución de una plataforma omnicanal de marketing impulsada por IA.",
          highlights: [
            "Desarrollo experiencias responsivas de usuario y back-office.",
            "Creo dashboards de datos e interfaces complejas de campañas.",
            "Colaboro con producto y backend en integraciones REST.",
          ],
        },
        {
          id: "dreamVenture",
          position: "Desarrollador Front-End",
          company: "Dream Venture Studio",
          date: "Marzo 2024 — Enero 2025",
          location: "Remoto, Estados Unidos",
          summary:
            "Refactor y fortalecimiento de una plataforma EdTech para el mercado de India.",
          highlights: [
            "Lideré refactors en React y React Native.",
            "Incorporé prácticas más estrictas de Test-Driven Development.",
            "Mejoré flujos CI/CD y confiabilidad de despliegues.",
          ],
        },
        {
          id: "mobeats",
          position: "Desarrollador Front-End",
          company: "Mobeats",
          date: "Abril 2021 — Junio 2023",
          location: "Buenos Aires, Argentina",
          summary:
            "Entrega de productos web y mobile para salud, agricultura y comercio.",
          highlights: [
            "Trabajé con React, Vue, Angular, React Native y Node.js.",
            "Construí interfaces responsivas y aplicaciones back-office.",
            "Probé y depuré productos en múltiples navegadores y dispositivos.",
          ],
        },
      ],
    },
    capabilities: {
      eyebrow: "Cómo contribuyo",
      title: "Capacidades",
      intro:
        "Las herramientas importan cuando sostienen buenas decisiones de producto, sistemas mantenibles y colaboración confiable.",
      groups: [
        {
          id: "frontend",
          title: "Sistemas front-end",
          description:
            "Construyo interfaces web y mobile escalables con arquitectura clara de componentes y estado.",
          skills: [
            "TypeScript",
            "JavaScript",
            "Vue 3",
            "React",
            "Angular",
            "React Native",
            "HTML5",
            "CSS3 / Sass",
          ],
        },
        {
          id: "product",
          title: "UI de producto y datos",
          description:
            "Convierto flujos e información compleja en experiencias responsivas y accesibles.",
          skills: [
            "UX responsiva",
            "Sistemas de diseño",
            "Visualización de datos",
            "ApexCharts",
            "Tailwind CSS",
            "PrimeVue",
            "Figma",
          ],
        },
        {
          id: "quality",
          title: "Calidad y entrega",
          description:
            "Mantengo entregas confiables mediante testing, automatización y trabajo iterativo.",
          skills: [
            "Jest",
            "TDD",
            "CI/CD",
            "Git",
            "GitHub",
            "GitLab",
            "Agile / Scrum",
          ],
        },
        {
          id: "platform",
          title: "Backend y plataforma",
          description:
            "Trabajo efectivamente sobre límites de API y comprendo los sistemas detrás de la interfaz.",
          skills: [
            "Node.js",
            "APIs REST",
            "PostgreSQL",
            "MySQL",
            "SAP BTP",
            "Prisma",
          ],
        },
        {
          id: "ai",
          title: "Ingeniería asistida por IA",
          description:
            "Uso herramientas modernas de IA para acelerar exploración, implementación y comunicación técnica.",
          skills: ["Codex", "Claude", "OpenCode", "Ollama", "MiniMax"],
        },
      ],
      collaborationEyebrow: "Forma de trabajo",
      collaboration:
        "Colaborativo, detallista y cómodo aprendiendo rápido. Valoro la comunicación clara, documentación útil e iteraciones pequeñas.",
    },
    education: {
      eyebrow: "Fundamentos",
      title: "Educación y certificaciones",
      intro:
        "Fundamentos formales de programación, formación full-stack y aprendizaje continuo de plataformas.",
      formalTitle: "Educación formal",
      certificationsTitle: "Formación y certificaciones",
      formal: [
        {
          id: "technicalSchool",
          title: "Técnico en Programación",
          institution: "Escuela de Educación Técnica Nro. 4",
          date: "Graduado en 2020",
          description:
            "Programa técnico de seis años sobre programación, bases de datos, electrónica y fundamentos de software.",
        },
      ],
      certifications: [
        {
          id: "soyHenry",
          title: "Desarrollo Full-Stack",
          institution: "Soy Henry",
          date: "2020 — 2021",
          description:
            "Programa intensivo enfocado en React, Node.js, PostgreSQL, APIs, testing y despliegue.",
        },
        {
          id: "accenture",
          title: "SAP BTP CAP-UI5",
          institution: "Accenture",
          date: "2023",
          description:
            "Formación en SAP BTP, CAP, UI5, HANA, Fiori, Node.js y MTA.",
        },
      ],
    },
    contact: {
      eyebrow: "Construyamos algo útil",
      title:
        "¿Buscas un ingeniero front-end que se preocupe por todo el producto?",
      intro:
        "Estoy abierto a oportunidades de ingeniería de producto en Nueva Zelanda donde pueda convertir ideas ambiciosas en experiencias claras y confiables.",
      email: "Enviar email",
      designed: "Diseñado y desarrollado por Matias Benitez",
      footerLabel: "Pie de página",
    },
  },
};

export { en, es };

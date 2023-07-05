const es = {
  translation: {
    aboutMe: {
      text: "Hola! Me llamo Matias Benitez, un talentoso y experimentado <span>desarrollador Front-End</span>, actualmente en Buenos Aires, Argentina.",
      sub: "/* Apasionado por la programacion y la ciencia 👨‍💻.*/",
    },
    contactMe: {
      text: "¡Espero que podamos ponernos en contacto pronto!",
      designed: "Diseñado y desarrollado por Matías Benítez ",
    },
    experiences: [
      {
        position: "Desarrollador Front End",
        enterprise: "MOBEATS",
        date: "Abr 2021 - Jul 2023 · 2 años",
        location: "Berazategui, Buenos Aires, Argentina",
        experiences: [
          {
            title: "ENFOKE",
            link: "https://www.enfoke.com/",
            description:
              'New Eges, "El software de gestión que optimiza los Centros de Diagnóstico más importantes de Argentina"',
            technologies: "React Typescript",
          },
          {
            title: "LAFKEN",
            link: "https://grupolafken.com/",
            description:
              "Lafken App, aplicacione mobile para seguir y monitorear las medicinas del paciente",
            technologies: "React Native",
          },
          {
            title: "IOF",
            link: "https://iofcompany.com/",
            description:
              "Backoffice y AppWeb para monitorear y controlar la temperatura de los cultivos y silobolsas.",
            technologies:
              "React typescript, NodeJs, MaterialUI, Bootstrap, Mysql",
          },
          {
            title: "SEVENTEEN",
            link: "https://seventeensrl.com.ar/",
            description: "E-Commerce de cortinas",
            technologies: "Angular, PHP",
          },
          {
            title: "ZECATDIFAPRO",
            link: "https://www.zecat.com/",
            description:
              "E-Commerce, Proveedor integral de productos promocionales",
            technologies: "Vue, NodeJs",
          },
        ],
      },
      {
        position: "Desarrollador Full Stack",
        enterprise: "SOY HENRY",
        date: "Dic 2020 - Abr 2021",
        location: "Remote, Latin America",
        experiences: [
          {
            title: "VideoGamesDB Buscador",
            description:
              "WebApp utilizando una API privada debia filtrar y buscar videojuegos.",
            technologies:
              "React Typescript, NodeJs Typescript, Postgresql, Heroku",
          },
        ],
      },
    ],
    education: {
      eestn4: {
        position: "Técnico en Programación",
        enterprise: "Escuela Tecnica Nro 4 de Berazategui",
        date: "Feb 2014 - Dic 2020 · 6 años",
        location: "Berazategui, Buenos Aires, Argentina",
        experiences: [
          {
            title: "Técnico en Programación",
            description:
              "Carrera de Técnico en Programación, desarrollé diversos proyectos para la escuela.",
            technologies:
              "React, javascript, C, C++, Python, Mysql, Arduino, nodeJs, RaspberryPi, Relational Databases.",
          },
        ],
      },
      soyHenry: {
        position: "Desarrollador Full-Stack",
        enterprise: "SOY HENRY",
        date: "Nov 2020 - Abr 2021",
        location: "Remote, Latin America",
        experiences: [
          {
            title: "Carrera Full-Stack",
            description:
              "Carrera Full-Stack, bootcamp intensivo donde aprendes la mayoría de tecnologías y cómo desarrollar nuevos proyectos.",
            technologies:
              "React Typescript, NodeJs Typescript, Postgresql, Redux, API, Data Structures, WebPack, Non-Relational databases",
          },
        ],
      },
    },
    projects: [
      {
        title: "XKCD Comic Search",
        text: "Buscador de comics XKCD mediante su id, no funciona debido a la baja de la API",
      },
      {
        title: "MercadoLibre Clone",
        text: "Clon de mercado libre creado con react-native, solamente funcionalidades esteticas y de interfaz",
      },
      {
        title: "Portfolio",
        text: "Este proyecto es mi ultimo portfolio, es el mismo en el que estas viendo esto :p",
      },
      {
        title: "VideoGamesDB Search",
        text: "Este proyecto fue hecho para SoyHenry, utilizando una API privada debia filtrar y buscar videojuegos. Actualmente se encuentra obsoleto, debido a que la API utilizada ya no existe.",
      },
      {
        title: "SO Clone",
        text: "This project was made for SoyHenry, using a private API to filter and search for video games. It is currently deprecated, because the API used no longer exists.",
      },
    ],
    header: {
      home: "Inicio",
      aboutMe: "Acerca de mí",
      technologies: "Tecnologías",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contáctame",
      projects: "Proyectos",
      navbar: { download: "Descargar CV" },
    },
    technologies: {
      header: {
        experience: "Experiencia",
        experienceLabel: "2 Años",
        projects: "Proyectos",
        projectsLabel: "5+",
        professionalism: "Profesionalismo",
        professionalismLabel: "100%",
      },
      softSkills: {
        teamWork: "Trabajo en Equipo",
        goodMood: "Buen Humor",
        fastLearning: "Aprendizaje Rapido",
        timeManagement: "Manejo del Tiempo",
        problemSolving: "Resolucion de Problemas",
        communication: "Comunicación",
      },
    },
  },
};
const en = {
  translation: {
    aboutMe: {
      text: "Hi! I'm Matias Benitez, a talented and experienced <span>Front-End Developer</span> based on Buenos Aires, Argentina.",
      sub: "/* Appasionated for programming and science 👨‍💻.*/",
    },
    contactMe: {
      text: "I hope we can get in touch soon!",
      designed: "Designed and developed by Matias Benitez ",
    },
    header: {
      home: "Home",
      aboutMe: "About Me",
      technologies: "Technologies",
      experience: "Experience",
      contact: "Contact Me",
      education: "Education",
      projects: "Projects",
      navbar: {
        download: "Download CV",
      },
    },
    projects: [
      {
        title: "XKCD Comic Search",
        text: "XKCD comics search engine through its id, does not work due to the cancellation of the API",
      },
      {
        title: "MercadoLibre Clone",
        text: "MercadoLibre clone created with react-native, only aesthetic and interface functionalities",
      },
      {
        title: "Portfolio",
        text: "This project is my last portfolio, it is the same one in which you are seeing this",
      },
      {
        title: "VideoGamesDB Search",
        text: "This project was made for SoyHenry, using a private API to filter and search for video games. It is currently deprecated, because the API used no longer exists.",
      },
      {
        title: "SO Clone",
        text: "This project was made for SoyHenry, using a private API to filter and search for video games. It is currently deprecated, because the API used no longer exists.",
      },
    ],
    experiences: [
      {
        position: "Front End Developer",
        enterprise: "MOBEATS",
        date: "April 2021 - Jul 2023 · 2 years",
        location: "Berazategui, Buenos Aires, Argentina",
        experiences: [
          {
            title: "ENFOKE",
            link: "https://www.enfoke.com/",
            description:
              'New Eges, "The Management software that optimizes the most important Diagnostic Centers in Argentina"',
            technologies: "React Typescript",
          },
          {
            title: "LAFKEN",
            link: "https://grupolafken.com/",
            description:
              "Lafken App, mobile app to track and manage the patient's medicines",
            technologies: "React Native",
          },
          {
            title: "IOF",
            link: "https://iofcompany.com/",
            description:
              "Backoffice and AppWeb to monitor and control the temperature of crops and silo bags.",
            technologies:
              "React typescript, NodeJs, MaterialUI, Bootstrap, Mysql",
          },
          {
            title: "SEVENTEEN",
            link: "https://seventeensrl.com.ar/",
            description: "E-Commerce of curtains",
            technologies: "Angular, PHP",
          },
          {
            title: "ZECATDIFAPRO",
            link: "https://www.zecat.com/",
            description:
              "E-Commerce, One-stop provider of promotional products",
            technologies: "Vue, NodeJs",
          },
        ],
      },
      {
        position: "Full Stack Developer",
        enterprise: "SOY HENRY",
        date: "Dec 2020 - Apr 2021",
        location: "Remote, Latin America",
        experiences: [
          {
            title: "VideoGamesDB Search",
            description:
              "WebApp using a private API should filter and search for video games.",
            technologies:
              "React Typescript, NodeJs Typescript, Postgresql, Heroku",
          },
        ],
      },
    ],
    education: {
      eestn4: {
        position: "Programming Technician",
        enterprise: "Escuela Tecnica Nro 4 de Berazategui",
        date: "Feb 2014 - Dec 2020 · 6 years",
        location: "Berazategui, Buenos Aires, Argentina",
        experiences: [
          {
            title: "Programming Technician",
            description:
              "Programming Technician career, developed various projects for the school.",
            technologies:
              "React, javascript, C, C++, Python, Mysql, Arduino, nodeJs, RaspberryPi, Relational Databases.",
          },
        ],
      },
      soyHenry: {
        position: "Full-Stack Developer",
        enterprise: "SOY HENRY",
        date: "Nov 2020 - Apr 2021",
        location: "Remote, Latin America",
        experiences: [
          {
            title: "Full-Stack Career",
            description:
              "Full-Stack career, intensive bootcamp where you learn the majority of technologies and how to develop new projects.",
            technologies:
              "React Typescript, NodeJs Typescript, Postgresql, Redux, API, Data Structures, WebPack, Non-Relational databases",
          },
        ],
      },
    },
    technologies: {
      header: {
        experience: "Experience",
        experienceLabel: "2 Years",
        projects: "Projects",
        projectsLabel: "5+",
        professionalism: "Professionalism",
        professionalismLabel: "100%",
      },
      softSkills: {
        teamWork: "Team Work",
        goodMood: "Good Mood",
        fastLearning: "Fast Learning",
        timeManagement: "Time Management",
        problemSolving: "Problem Solving",
        communication: "Communication",
      },
    },
  },
};

export { en, es };

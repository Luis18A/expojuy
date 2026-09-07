/* ExpoJuy 2026 - Central Mock Dataset */
const EXPO_DATA = {
  event: {
    name: "EXPOJUY 2026",
    edition: "17ª Edición Internacional",
    tagline: "La Muestra Multisectorial más importante del Norte Argentino",
    dates: "9 al 12 de Octubre de 2026",
    location: "Ciudad Cultural, San Salvador de Jujuy, Argentina",
    targetDate: "2026-10-09T09:00:00-03:00",
    organizer: "Cámara de Comercio Exterior de Jujuy"
  },
  
  sectors: [
    {
      id: "mineria",
      name: "Minería y Transición Energética",
      badge: "badge-mining",
      icon: "fa-solid opacity-90 fa-bolt-lightning",
      color: "var(--sector-mining)",
      stats: "+45 Empresas del Triángulo del Litio",
      desc: "Líderes globales en extracción sostenible de litio, parques solares (Cauchari), minerales críticos y proveedores industriales clave."
    },
    {
      id: "agro",
      name: "Agroindustria y Bioeconomía",
      badge: "badge-agro",
      icon: "fa-solid opacity-90 fa-wheat-awn",
      color: "var(--sector-agro)",
      stats: "+80 Productores Regionales",
      desc: "Producción de azúcar, biocombustibles, frutas tropicales, tabaco, legumbres, cannabis medicinal y tecnologías agrotech."
    },
    {
      id: "tech",
      name: "Tecnología e Industrias del Conocimiento",
      badge: "badge-tech",
      icon: "fa-solid opacity-90 fa-microchip",
      color: "var(--sector-tech)",
      stats: "+30 Startups & Hubs Tech",
      desc: "Desarrollo de software, automatización industrial, inteligencia artificial, IoT minero e infraestructuras inteligentes."
    },
    {
      id: "turismo",
      name: "Turismo, Comercio y Servicios",
      badge: "badge-tourism",
      icon: "fa-solid opacity-90 fa-mountain-sun",
      color: "var(--sector-tourism)",
      stats: "Destino Quebrada & Puna",
      desc: "Patrimonio Mundial de la Humanidad, infraestructura hotelera, gastronomía autóctona, conectividad aérea y turismo corporativo."
    },
    {
      id: "industria",
      name: "Industria, Logística y Proveedores",
      badge: "badge-industry",
      icon: "fa-solid opacity-90 fa-industry",
      color: "var(--sector-industry)",
      stats: "Corredor Bioceánico Paso de Jama",
      desc: "Parques industriales, servicios logísticos internacionales, metalmecánica, química y suministros de escala regional."
    }
  ],

  metrics: [
    { number: "250+", label: "Expositores Nacionales e Internacionales", icon: "fa-building" },
    { number: "USD 120M+", label: "Proyección en Rondas de Negocios B2B", icon: "fa-handshake-simple" },
    { number: "+85.000", label: "Visitantes Esperados en 4 Días", icon: "fa-users" },
    { number: "12.000m²", label: "Superficie de Exposición en Ciudad Cultural", icon: "fa-vector-square" }
  ],

  exhibitors: [
    {
      id: "exar",
      name: "Minera EXAR S.A.",
      sectorId: "mineria",
      sectorName: "Minería & Litio",
      origin: "Jujuy, Argentina",
      stand: "Pabellón A - Stand A-12",
      description: "Proyecto de producción de carbonato de litio grado batería Cauchari-Olaroz, líder en sostenibilidad y empleo local.",
      website: "https://www.mineraexar.com.ar",
      featured: true,
      products: ["Carbonato de Litio Grado Batería", "Soluciones de Litio Verde", "Programa de Desarrollo de Proveedores Jujeños"]
    },
    {
      id: "cannava",
      name: "Cannava S.E.",
      sectorId: "agro",
      sectorName: "Agroindustria & Biotecnología",
      origin: "Jujuy, Argentina",
      stand: "Pabellón B - Stand B-05",
      description: "Sociedad del Estado pionera en América Latina dedicada a la producción pública y científica de cannabis medicinal de altísima pureza.",
      website: "https://cannava.jujuy.gob.ar",
      featured: true,
      products: ["Aceites Medicinales Cannava CBD 10", "Ingredientes Farmacéuticos Activos", "Desarrollos Biotecnológicos"]
    },
    {
      id: "sales-jujuy",
      name: "Sales de Jujuy / Allkem",
      sectorId: "mineria",
      sectorName: "Minería & Litio",
      origin: "Olaroz, Jujuy",
      stand: "Pabellón A - Stand A-08",
      description: "Explotación del Salar de Olaroz. Referente mundial en la exportación de litio de alta calidad a mercados asiáticos y europeos.",
      website: "https://allkem.co",
      featured: true,
      products: ["Lithium Carbonate Industrial & Micronized", "Proyectos de Energía Limpia"]
    },
    {
      id: "ledesma",
      name: "Ledesma S.A.A.I.",
      sectorId: "agro",
      sectorName: "Agroindustria",
      origin: "Libertador Gral. San Martín, Jujuy",
      stand: "Pabellón B - Stand B-01",
      description: "Empresa agroindustrial líder en producción de azúcar, papel de fibra de caña de azúcar, bioetanol, frutas cítricas y jugos.",
      website: "https://www.ledesma.com.ar",
      featured: true,
      products: ["Papel Nat de Caña", "Azúcar Mascabo & Estándar", "Bioetanol Energético"]
    },
    {
      id: "jujuy-digital",
      name: "Jujuy Digital Tech Hub",
      sectorId: "tech",
      sectorName: "Tecnología",
      origin: "San Salvador de Jujuy",
      stand: "Pabellón C - Stand C-04",
      description: "Clúster tecnológico que agrupa empresas de desarrollo de software, sensado de mina por IoT y soluciones GIS.",
      website: "#",
      featured: false,
      products: ["Plataformas IoT Mineras", "Sistemas ERP de Logística", "Capacitación en Habilidades Digitales"]
    },
    {
      id: "norte-servicios",
      name: "Norte Servicios Industriales",
      sectorId: "industria",
      sectorName: "Industria & Proveedores",
      origin: "Palpalá, Jujuy",
      stand: "Pabellón C - Stand C-18",
      description: "Provisión de estructuras metalmecánicas pesadas, montajes industriales y mantenimiento para minería y energía.",
      website: "#",
      featured: false,
      products: ["Montajes de Galpones Industriales", "Piping Minero", "Tanques de Almacenamiento"]
    },
    {
      id: "quebrada-travel",
      name: "Quebrada & Puna Experience",
      sectorId: "turismo",
      sectorName: "Turismo & Servicios",
      origin: "Purmamarca, Jujuy",
      stand: "Pabellón B - Stand B-22",
      description: "Operador receptivo internacional especializado en turismo corporativo, glamping en salares y rutas gastronómicas.",
      website: "#",
      featured: false,
      products: ["Excursiones VIP Salinas Grandes", "Organización de Eventos MICE", "Turismo Comunitario"]
    }
  ],

  agenda: [
    {
      id: "act-101",
      day: "9",
      dateLabel: "Viernes 9 de Octubre",
      time: "10:00 - 11:30",
      title: "Acto de Apertura Oficial EXPOJUY 2026 & Corte de Cinta",
      category: "institucional",
      categoryName: "Institucional",
      speaker: "Autoridades de la provincia de Jujuy y Cámara de Comercio Exterior",
      location: "Escenario Principal - Ciudad Cultural",
      description: "Bienvenida a delegaciones internacionales del Corredor Bioceánico, cámaras empresarias y expositores."
    },
    {
      id: "act-102",
      day: "9",
      dateLabel: "Viernes 9 de Octubre",
      time: "15:00 - 17:00",
      title: "Foro Internacional: El Litio y la Cadena de Valor en el Norte Argentino",
      category: "negocios",
      categoryName: "Negocios & Minería",
      speaker: "Ing. Guillermo Calvo (EXAR), Dra. Elena Rossi (CFI)",
      location: "Carpa de Conferencias B2B",
      description: "Análisis de inversiones, sostenibilidad ambiental, valor agregado local y suministro para baterías de vehículos eléctricos."
    },
    {
      id: "act-201",
      day: "10",
      dateLabel: "Sábado 10 de Octubre",
      time: "11:00 - 13:00",
      title: "Plenary Session: Oportunidades del Corredor Bioceánico Paso de Jama",
      category: "negocios",
      categoryName: "Negocios & Logística",
      speaker: "Panelistas de Chile, Brasil, Paraguay y Argentina",
      location: "Carpa de Conferencias B2B",
      description: "Conexión estratégica entre el Atlántico y el Pacífico: infraestructura, aduanas simplificadas y transporte multimodal."
    },
    {
      id: "act-202",
      day: "10",
      dateLabel: "Sábado 10 de Octubre",
      time: "18:00 - 20:00",
      title: "Show Case Agrotech: Biotecnología y Cannabis Medicinal",
      category: "charlas",
      categoryName: "Charlas Técnicas",
      speaker: "Equipo Científico de Cannava S.E.",
      location: "Pabellón B - Auditorio Agro",
      description: "Presentación de ensayos clínicos, estándares GMP internacionales y oportunidades para inversores agroindustriales."
    },
    {
      id: "act-301",
      day: "11",
      dateLabel: "Domingo 11 de Octubre",
      time: "16:00 - 18:00",
      title: "Pitching Startups Jujuy Tech: Soluciones para Smart Cities & Minería 4.0",
      category: "charlas",
      categoryName: "Tecnología",
      speaker: "Fundadores de Startups Locales e Inversores Ángel",
      location: "Pabellón C - Tech Stage",
      description: "Demostración en vivo de soluciones tecnológicas desarrolladas en el norte argentino."
    },
    {
      id: "act-302",
      day: "11",
      dateLabel: "Domingo 11 de Octubre",
      time: "20:30 - 23:00",
      title: "Gran Festival Cultural & Noche de Gala Jujuy",
      category: "cultura",
      categoryName: "Cultura & Espectáculos",
      speaker: "Artistas Jujeños Destacados & Orquesta Sinfónica",
      location: "Escenario Principal",
      description: "Música en vivo, bailes tradicionales y espectáculo audiovisual de iluminación."
    },
    {
      id: "act-401",
      day: "12",
      dateLabel: "Lunes 12 de Octubre",
      time: "14:00 - 16:30",
      title: "Ronda Final de Negocios Sauken-BRM & Firma de Acuerdos",
      category: "negocios",
      categoryName: "Negocios B2B",
      speaker: "Coordinación B2B ExpoJuy",
      location: "Hub B2B Sauken",
      description: "Cierre de compromisos comerciales y entrega de menciones de impacto regional."
    }
  ],

  faqs: [
    {
      q: "¿Cuáles son los horarios de apertura de ExpoJuy 2026?",
      a: "ExpoJuy 2026 estará abierta del 9 al 12 de Octubre. El horario para visitantes de público general es de 15:00 a 23:00 hs. El espacio de Rondas de Negocios B2B opera de 09:00 a 14:00 hs."
    },
    {
      q: "¿Dónde se realiza la exposición y cómo se llega?",
      a: "El evento se lleva a cabo en el predio de Ciudad Cultural en San Salvador de Jujuy. Cuenta con acceso directo por Av. Bolivia, amplios estacionamientos señalizados y líneas de colectivos urbanos."
    },
    {
      q: "¿Cómo me inscribo en las Rondas de Vinculación B2B?",
      a: "Puedes registrar tu perfil empresarial en la sección 'Vinculate B2B'. A través del sistema Sauken-BRM coordinas agendas de reuniones 1 a 1 con compradores y contrapartes internacionales."
    },
    {
      q: "¿Hay tarifa preferencial o descuento para estudiantes y PyMEs jujeñas?",
      a: "Sí, contamos con un Pase Estudiantil bonificado y tarifas de entrada diferenciadas. Los menores de 10 años ingresan sin cargo acompañados por un adulto."
    }
  ],

  news: [
    {
      id: "news-1",
      date: "02 Sep 2026",
      title: "ExpoJuy 2026 proyecta la mayor participación internacional de su historia",
      tag: "Prensa",
      summary: "Delegaciones de Brasil, Chile, Bolivia y Paraguay confirmaron su asistencia en el marco del Corredor Bioceánico."
    },
    {
      id: "news-2",
      date: "25 Ago 2026",
      title: "Se agotan los stands del Pabellón A dedicado a Minería y Transición Energética",
      tag: "Expositores",
      summary: "Con más de 45 empresas mineras confirmadas, la 17ª edición bate récords de demanda espacial."
    },
    {
      id: "news-3",
      date: "10 Ago 2026",
      title: "Lanzamiento oficial de la plataforma digital de Matchmaking B2B Sauken-BRM",
      tag: "B2B",
      summary: "Herramienta que permitirá a expositores y visitantes profesionales agendar reuniones 1:1 con anticipación."
    }
  ]
};



import { AcademyResource, LearningPath, GastronomicEvent } from './types';

export const WHATSAPP_NUMBER = "5493517736981"; 
export const DISPLAY_PHONE = "+54 9 351 773-6981";
export const CONTACT_EMAIL = "octopuscoquinaria@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/octopuscuquinaria/";
export const YOUTUBE_URL = "https://www.youtube.com/@octopuscoquinaria";
export const APP_NAME = "Octopus Coquinaria";

// --- CUSTOM IMAGES CONFIGURATION ---
// Paste your URLs inside the quotes below
export const GLOBAL_LOGO_URL = "https://i.postimg.cc/C1240jfz/logo-completo.png"; 
export const GLOBAL_BACKGROUND_IMAGE_URL = "https://i.postimg.cc/dt6jtPdV/fondo-abismo-azul.png";
export const BRAND_ILLUSTRATION_URL = "https://i.postimg.cc/dVtPLYx4/pulpo-completo-transparente.png";

// --- EXTERNAL ASSETS LINKS ---
export const COLIFA_MENU_URL = "https://drive.google.com/file/d/12x0CoM4lYMKMNSQWtNxPEEtT2eAMiCX4/view?usp=sharing"; 
export const TECHNICAL_SHEETS_EXAMPLE_URL = "https://drive.google.com/file/d/1vfOyn2-cQ2ZKH6EDxbrL6RhCCbR65QEe/view?usp=drive_link"; 
export const PROCESS_EXAMPLE_URL = "https://drive.google.com/file/d/18--dvReEprD_5RN3Q2llxn6Nw8giqeFt/view?usp=sharing"; 

// --- PROFILE CONFIGURATION ---
export const NICOLAS_PHOTO_URL = "https://i.postimg.cc/ht9zPVN8/Generated-Image-September-05-2025-2-20PM.jpg"; 
export const LINKEDIN_URL = "https://www.linkedin.com/in/nicolas-vitale-ops";
// -----------------------------------

export const MOCK_HISTORY = [
  { month: 'Ago 2024', sales: 12000000, cogs: 35, labor: 28, result: 15 },
  { month: 'Sep 2024', sales: 11500000, cogs: 38, labor: 30, result: 10 },
  { month: 'Oct 2024', sales: 13200000, cogs: 33, labor: 25, result: 22 },
  { month: 'Nov 2024', sales: 14000000, cogs: 31, labor: 24, result: 25 },
];

export const METHODOLOGY_7P = [
  { 
    id: 'orden',
    key: 'O', 
    letter: 'Orden', 
    tagline: 'Sin orden, todo es urgente.',
    description: 'Orden es procesos, método y disciplina aplicada al día a día del negocio: qué se hace, quién lo hace, cuándo y cómo se controla.',
    importance: [
      'Reduce el caos en horas pico.',
      'Baja errores de pedido, desperdicios y dobles trabajos.',
      'Permite que el negocio dependa menos de “las personas clave” y más del sistema.'
    ],
    symptoms: [
      'Cada semana inventan una forma nueva de hacer lo mismo.',
      'Nadie sabe exactamente qué hay que hacer al abrir o cerrar.',
      'Problemas repetidos: faltan productos, se olvidan comandas.',
      'Mucho “yo pensé que…”, poco “está escrito así”.'
    ],
    actions: [
      'Diseño de SOP / manuales de proceso simples y usables.',
      'Checklists de apertura, cierre, limpieza, caja, producción.',
      'Tableros básicos de control (qué se revisa y cuándo).',
      'Capacitación al equipo para que el Orden sea hábito, no castigo.'
    ],
    pills: [
      'Un buen checklist evita más quilombos que un speech motivacional.',
      'Si solo vos sabés cómo se hace algo, no tenés un proceso: tenés un secuestro.'
    ]
  },
  { 
    id: 'creatividad',
    key: 'C', 
    letter: 'Creatividad', 
    tagline: 'Sin creatividad, sos uno más en la avenida.',
    description: 'Creatividad es innovación y storytelling aplicados a la marca, la carta y la experiencia. No es solo “inventar platos raros”, es darle sentido a lo que hacés.',
    importance: [
      'Te diferencia de la competencia sin entrar a matar precios.',
      'Permite subir valor percibido → mejor ticket promedio.',
      'Hace que el cliente recuerde tu marca y vuelva.'
    ],
    symptoms: [
      'Carta eterna que no cambia hace años.',
      'Platos que “andan” pero nadie sabría explicar qué los hace tuyos.',
      'Redes sociales genéricas: mismo contenido que todos.',
      'Todo se decide “por gusto” y nada por concepto.'
    ],
    actions: [
      'Definición de concepto y relato de marca.',
      'Diseño/ajuste de carta pensando en identidad y rentabilidad.',
      'Naming de productos, campañas, combos, experiencias.',
      'Aterrizar ideas creativas en costos, fichas y capacidad real de operación.'
    ],
    pills: [
      'Creatividad sin costos es hobbie. Costos sin creatividad es planilla triste.',
      'Si saco tu logo de la carta, ¿se nota que es tuya igual?'
    ]
  },
  { 
    id: 'tecnologia',
    key: 'T', 
    letter: 'Tecnología', 
    tagline: 'Sin datos, opinás. Con datos, decidís.',
    description: 'Tecnología es herramientas digitales, IA y sistemas que te ayudan a registrar, controlar y decidir mejor: planillas inteligentes, tableros, sistemas de ventas, autodiagnósticos.',
    importance: [
      'Te permite saber qué pasa más allá de la intuición.',
      'Ahorra tiempo en tareas repetitivas (cierres, controles, informes).',
      'Es la base para escalar el negocio sin que todo dependa de estar físicamente ahí.'
    ],
    symptoms: [
      'Todo está “en la cabeza” de alguien o en papelitos.',
      'No podés responder rápido: “¿cuánto vendí?”, “¿cuánto gasté en mercadería?”.',
      'Cierres de caja eternos y siempre con dudas.',
      'Tenés sistema, pero nadie lo usa bien.'
    ],
    actions: [
      'Implementación de planillas y tableros adaptados al negocio.',
      'Uso de IA (como la “Pitonisa” y el autodiagnóstico) para revisar números.',
      'Acompañamiento para integrar sistema de ventas, stock y reportes.',
      'Definición de rutinas de carga y lectura de datos (quién, qué, cuándo).'
    ],
    pills: [
      'No necesitás un software carísimo: necesitás usar bien el que tengas.',
      'Si solo mirás la cuenta bancaria, no estás usando tecnología: estás rezando.'
    ]
  },
  { 
    id: 'observacion',
    key: 'O_obs', 
    letter: 'Observación', 
    tagline: 'Mirar no es observar. Observar es medir.',
    description: 'Observación es análisis profundo y diagnóstico: mirar métricas, auditorías, reseñas, tiempos, flujos, con intención de entender qué pasa.',
    importance: [
      'Evita tomar decisiones desde la bronca del día.',
      'Permite encontrar la causa raíz (no solo el síntoma).',
      'Te muestra si lo que estás haciendo funciona o no.'
    ],
    symptoms: [
      'Se toman decisiones por comentarios aislados (“me dijeron que…”).',
      'No hay auditorías de stock, ni controles de porción, ni mistery shopper.',
      'No se revisan reseñas ni comentarios de clientes.',
      'Cambiás cosas sin saber si mejoraron algo.'
    ],
    actions: [
      'Auditorías operativas y de stock periódicas.',
      'Diseño de indicadores simples (lo justo): tiempos, quejas, quiebres, rotación.',
      'Revisión de métricas con el dueño: lectura guiada, no solo envío de reportes.',
      'Cruce de observación en salón / cocina con números y feedback del cliente.'
    ],
    pills: [
      'Medir no mata la magia; mata la mentira.',
      'Si nunca encontrás nada en una auditoría, el problema es la auditoría.'
    ]
  },
  { 
    id: 'pragmatismo',
    key: 'P', 
    letter: 'Pragmatismo', 
    tagline: 'Menos PowerPoint, más resultados.',
    description: 'Pragmatismo es eficiencia y resultados reales: tomar decisiones que se notan en costos, ventas y tiempo, con los recursos que hay.',
    importance: [
      'Evita planes hermosos que nadie aplica.',
      'Focaliza en lo que mueve la aguja, no en el maquillaje.',
      'Te obliga a priorizar: no se puede todo al mismo tiempo.'
    ],
    symptoms: [
      'Se arrancan mil cambios y no se termina ninguno.',
      'Capacitan al equipo, pero no se ajustan procesos ni números.',
      'Se hacen “acciones de marketing” sin revisar rentabilidad.',
      'Mucho “deberíamos” y poco “hicimos”.'
    ],
    actions: [
      'Definición de KPI claros y metas concretas (ej: bajar CMV 3 puntos).',
      'Plan de acción acotado: pocas acciones, bien hechas.',
      'Revisiones periódicas: qué funcionó, qué no, qué se ajusta.',
      'Diseño de soluciones que respeten el contexto (equipos chicos, proveedores limitados).'
    ],
    pills: [
      'Si no se ve en los números o en la operación, no es mejora: es decoración.',
      'Pragmatismo no es ser tacaño, es ser inteligente.'
    ]
  },
  { 
    id: 'universalidad',
    key: 'U', 
    letter: 'Universalidad', 
    tagline: 'Si solo funciona con vos ahí, no funciona.',
    description: 'Universalidad es escalabilidad y aplicabilidad amplia: que el método sirva para distintos tipos de negocios y pueda replicarse.',
    importance: [
      'Te permite abrir otro local, franquiciar, delegar.',
      'Hace que el negocio sobreviva cambios de personal.',
      'Permite aplicar lo aprendido en nuevos proyectos (productos, catering, hoteles).'
    ],
    symptoms: [
      '“Si no estoy yo, no se puede.”',
      'Cada local funciona de forma distinta sin razón.',
      'No se puede entrenar gente nueva rápido.',
      'Lo que funciona en un negocio no se puede trasladar a otro.'
    ],
    actions: [
      'Diseño de procesos que se puedan copiar y adaptar.',
      'Estandarización de formatos: fichas, manuales, tableros.',
      'Definición de un “modelo Octopus” que se pueda aplicar a bar, panadería, hotel, etc.',
      'Acompañar aperturas / expansiones para que el método se mantenga.'
    ],
    pills: [
      'Si cada sucursal es un planeta, no tenés cadena: tenés constelación descontrolada.',
      'Universal no es copiar-pegar: es tener un idioma común.'
    ]
  },
  { 
    id: 'sutileza',
    key: 'S', 
    letter: 'Sutileza', 
    tagline: 'El detalle no vende hoy, pero hace que vuelvan mañana.',
    description: 'Sutileza es equilibrio, elegancia y control en la experiencia: cómo se ve, cómo se siente y cómo se comunica el negocio.',
    importance: [
      'Convierte un servicio correcto en una experiencia recordable.',
      'Refuerza la marca sin gritar.',
      'Impacta en reseñas, recomendaciones y ticket promedio.'
    ],
    symptoms: [
      'Mensajes visuales mezclados: carteles caseros, fonts distintas, desorden.',
      'Staff que comunica cosas importantes de forma torpe o agresiva.',
      'Detalles descuidados: vajilla, música, olores, tiempos de espera.',
      'Redes que no reflejan lo que pasa en el salón.'
    ],
    actions: [
      'Revisión de comunicación, diseño visual y servicio.',
      'Ajustes finos sin necesidad de “tirar todo y arrancar de cero”.',
      'Guías simples para el equipo: cómo hablar, cómo resolver quejas, cómo presentar.',
      'Coherencia entre carta, local, redes y discurso.'
    ],
    pills: [
      'Un “perdón, ya lo soluciono” a tiempo vale más que un post perfecto en Instagram.',
      'La sutileza es el arte de que todo esté bajo control sin que se note.'
    ]
  }
];

// --- ACADEMY DATA ---

export const ACADEMY_RESOURCES: AcademyResource[] = [
  {
    id: 'res_001',
    title: 'Cómo bajar tu costo de mercadería sin matar la propuesta',
    type: 'video',
    duration: '12 min',
    topics: ['finanzas', 'operaciones'],
    letters7p: ['P', 'O_obs'],
    summary: 'Los tres puntos ciegos que inflan tu costo y cómo atacarlos.',
    description: 'En este video analizamos por qué el costo teórico de tu ficha técnica nunca coincide con la realidad. Vemos mermas ocultas, errores de recepción y el impacto del "picoteo" staff.',
    idealFor: ['Dueños con CMV > 38%', 'Gerentes operativos'],
    actionSteps: [
      'Hacé un inventario ciego (sin mirar el sistema) esta semana.',
      'Revisá los tachos de basura de producción (ahí está tu ganancia).',
      'Estandarizá las 5 recetas que más vendés.'
    ],
    recommendedTrigger: ['high_cogs'],
    youtubeId: 'dQw4w9WgXcQ' // Placeholder
  },
  {
    id: 'res_002',
    title: 'Plantilla de Control Semanal Simplificado',
    type: 'template',
    duration: 'Uso diario',
    topics: ['tecnologia', 'finanzas'],
    letters7p: ['T', 'O'],
    summary: 'El Excel mínimo viable para saber si ganaste o perdiste plata esta semana.',
    description: 'No necesitás un ERP de la NASA. Necesitás esta planilla. Carga ventas diarias, compras y gastos de caja chica. El resto se calcula solo.',
    idealFor: ['Negocios pequeños', 'Quienes odian el Excel'],
    actionSteps: [
      'Descargá la plantilla.',
      'Cargá los tickets de la semana pasada (retroactivo).',
      'Mirá la celda F8: ese es tu margen bruto real.'
    ],
    downloadUrl: '#',
    recommendedTrigger: ['low_tech', 'low_observation']
  },
  {
    id: 'res_003',
    title: 'Rutina de Apertura y Cierre: Dejá de sufrir',
    type: 'guide',
    duration: 'Lectura 8 min',
    topics: ['operaciones', 'equipo'],
    letters7p: ['O'],
    summary: 'Checklists que funcionan para que el local abra y cierre solo.',
    description: 'Si te llaman a las 11 PM porque "no encuentran las llaves" o "falta hielo", leé esto. Cómo armar un checklist que el equipo realmente use.',
    idealFor: ['Dueños esclavos de su local', 'Encargados nuevos'],
    actionSteps: [
      'Imprimí la lista base.',
      'Plastificala y pegala en la zona de pase.',
      'Auditala al azar 2 veces por semana.'
    ],
    recommendedTrigger: ['low_order']
  },
  {
    id: 'res_004',
    title: 'Ingeniería de Menú: Ganar más vendiendo lo mismo',
    type: 'video',
    duration: '25 min',
    topics: ['marketing', 'finanzas'],
    letters7p: ['C', 'P'],
    summary: 'Cómo rediseñar tu carta para empujar los platos más rentables.',
    description: 'Tu carta no es una lista de precios, es tu mejor vendedor. Aprendé a ubicar los platos Estrella y a eliminar los Perros.',
    idealFor: ['Restaurantes con margen bajo', 'Renovación de carta'],
    actionSteps: [
      'Calculá la rentabilidad en $ de cada plato (no solo %).',
      'Cruzalo con la popularidad (cantidad vendida).',
      'Rediseñá el menú destacando los "Estrella".'
    ],
    recommendedTrigger: ['low_margin'],
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'res_005',
    title: 'Kit de Supervivencia para Equipos Gastronómicos',
    type: 'guide',
    duration: 'Lectura 15 min',
    topics: ['equipo'],
    letters7p: ['S', 'U'],
    summary: 'Cómo liderar cocineros y camareros sin gritos ni dramas.',
    description: 'La rotación te mata. Acá vemos cómo armar un esquema de propinas justo, horarios rotativos sanos y comunicación clara.',
    idealFor: ['Jefes de cocina', 'Gerentes de salón'],
    actionSteps: [
      'Implementá el "briefing" de 5 minutos pre-servicio.',
      'Definí reglas claras para las propinas por escrito.',
      'Hacé una reunión mensual de feedback (sin celulares).'
    ],
    recommendedTrigger: ['high_labor']
  }
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path_costos',
    title: 'Bajar mi costo de mercadería',
    description: 'Ruta de choque para recuperar rentabilidad en 30 días.',
    resourceIds: ['res_001', 'res_002']
  },
  {
    id: 'path_orden',
    title: 'Ordenar el quilombo operativo',
    description: 'Dejá de apagar incendios y empezá a gestionar.',
    resourceIds: ['res_003', 'res_005']
  }
];

// --- GASTRONOMIC TICKER DATA ---
export const GASTRONOMIC_EVENTS: GastronomicEvent[] = [
  {
    id: "2025_12_01_feriado_pba",
    tipo: "feriado_local",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-01",
    mensaje: "1 DIC: Feriado municipal en partes de PBA · Revisar horarios y apertura parcial.",
    prioridad: 2,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_06_08_findelargo",
    tipo: "feriado_nacional",
    fecha_inicio: "2025-12-06",
    fecha_fin: "2025-12-08",
    mensaje: "6–8 DIC: Finde largo con feriado nacional lunes 8 · Alta demanda prevista, reforzar stock y personal.",
    prioridad: 3,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_calor",
    tipo: "clima",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-10",
    mensaje: "Alerta calor: ola de calor en gran parte del país · Suben consumo de bebidas frías, hielo y frescos.",
    prioridad: 3,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_carnes_alza",
    tipo: "precios_insumos",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-07",
    mensaje: "Carnes en alza: la categoría vuelve a presionar precios · Revisar costos de menú esta semana.",
    prioridad: 3,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_11_inflacion_alimentos",
    tipo: "precios_insumos",
    fecha_inicio: "2025-11-30",
    fecha_fin: "2025-12-07",
    mensaje: "Inflación alimentos: noviembre con subas fuertes en productos frescos · Ajustar compras y mermas.",
    prioridad: 2,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_consumo_familiar",
    tipo: "tendencia_consumo",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-15",
    mensaje: "Consumo familiar en ajuste · Combos económicos y porciones inteligentes pueden mejorar rotación.",
    prioridad: 2,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_stock_diciembre",
    tipo: "operacion",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-08",
    mensaje: "Diciembre arranca fuerte · Prever stock, panificados y producción para el finde largo.",
    prioridad: 3,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_proveedores",
    tipo: "proveedores",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-10",
    mensaje: "Revisión de proveedores: aumentos desparejos · Conviene renegociar o adelantar compras estratégicas.",
    prioridad: 2,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_tip_gestion",
    tipo: "tip_gestion",
    fecha_inicio: "2025-12-01",
    fecha_fin: "2025-12-07",
    mensaje: "Tip de gestión: buena semana para revisar CMV, ajustar precios y cargar proyecciones de demanda.",
    prioridad: 1,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  },
  {
    id: "2025_12_hospitalidad_xxl",
    tipo: "operacion",
    fecha_inicio: "2025-12-06",
    fecha_fin: "2025-12-08",
    mensaje: "Hospitalidad: feriado XXL · Reforzar personal en picos y prever turnos extendidos.",
    prioridad: 2,
    visible_desde: "2024-01-01",
    visible_hasta: "2026-01-01"
  }
];
export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  course: string;
  courseName: string;
  preview: string;
  date: string;
  description: string;
  github?: string;
  images: ProjectImage[];
}

export const courseColors: Record<string, string> = {
  CE1103: '#06b6d4',
  CE2103: '#8b5cf6',
  CE3101: '#10b981',
  CE3104: '#f59e0b',
  CE3201: '#ef4444',
  CE4202: '#f97316',
  CE4301: '#3b82f6',
  CE4303: '#ec4899',
  CE5508: '#84cc16',
  IC6200: '#14b8a6',
  TI4601: '#a78bfa',
};

export const courseNames: Record<string, string> = {
  CE1103: 'Estructuras de Datos',
  CE2103: 'Algoritmos y Estructuras de Datos II',
  CE3101: 'Bases de Datos',
  CE3104: 'Lenguajes, Compiladores e Intérpretes',
  CE3201: 'Diseño Digital',
  CE4202: 'Microprocesadores',
  CE4301: 'Arquitectura de Computadores',
  CE4303: 'Sistemas Operativos',
  CE5508: 'Redes',
  IC6200: 'Inteligencia Artificial',
  TI4601: 'Ingeniería de Software',
};

export const projects: Project[] = [
  {
    slug: 'ic6200-diabetes-ml',
    title: 'ML for Diabetes',
    course: 'IC6200',
    courseName: courseNames['IC6200'],
    preview: '/img/preview_diabetes.jpeg',
    date: '2023',
    description:
      'Modelo de Machine Learning aplicado a la predicción de diabetes. Exploración de algoritmos de clasificación, análisis de datos clínicos y evaluación de métricas de rendimiento para un sistema de diagnóstico asistido.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/diabetes.gif', caption: 'Demo del modelo' },
    ],
  },
  {
    slug: 'ce4301-canny-edge-detector',
    title: 'Canny-Edge Detector',
    course: 'CE4301',
    courseName: courseNames['CE4301'],
    preview: '/img/preview_cannyedge.jpeg',
    date: 'Jun 14, 2023',
    description:
      'Implementación del algoritmo Canny Edge Detection en ensamblador x86. El proyecto aprovecha el calendarizador dinámico de hardware para optimizar el procesamiento intensivo de imágenes mediante paralelismo a nivel de instrucción, acceso optimizado a memoria y uso eficiente de las unidades funcionales del procesador.',
    github: 'https://github.com/ce-itcr/canny-edge-detector',
    images: [
      { src: '/img/projects_preview/canny/ultra-goat.png', caption: 'Resultado Esperado I' },
      { src: '/img/projects_preview/canny/goat.png', caption: 'Resultado Esperado II' },
    ],
  },
  {
    slug: 'ce4301-tessia',
    title: 'Tessia',
    course: 'CE4301',
    courseName: courseNames['CE4301'],
    preview: '/img/preview_tessia.png',
    date: 'May 19, 2023',
    description:
      'Diseño e implementación de un ASIP (Application-Specific Instruction Processor) para animación de imagen utilizando el efecto Rippling. El procesador fue diseñado desde la microarquitectura hasta la implementación en ensamblador, optimizado para el procesamiento gráfico específico.',
    github: 'https://github.com/delias2798/earce_computer_architecture_1_2023_grupal',
    images: [
      { src: '/img/projects_preview/Tessia/funcionamiento_general.png', caption: 'Funcionamiento General' },
      { src: '/img/projects_preview/Tessia/solucion.png', caption: 'Solución Arquitectónica' },
      { src: '/img/projects_preview/Tessia/green_sheet.png', caption: 'Green Sheet' },
      { src: '/img/projects_preview/Tessia/microarquitectura.png', caption: 'Microarquitectura' },
    ],
  },
  {
    slug: 'ce4301-the-imitation-game',
    title: 'The Imitation Game',
    course: 'CE4301',
    courseName: courseNames['CE4301'],
    preview: '/img/preview_theimitationgame.png',
    date: '2023',
    description:
      'Proyecto de arquitectura de computadores inspirado en el trabajo de Alan Turing. Implementación de máquinas de estado y procesadores especializados para descifrado de mensajes, explorando los fundamentos del cómputo moderno.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/TheImitationGame/code.png', caption: 'Código del proyecto' },
      { src: '/img/projects_preview/TheImitationGame/exec.png', caption: 'Ejecución' },
    ],
  },
  {
    slug: 'ce4202-carrito',
    title: 'Carrito',
    course: 'CE4202',
    courseName: courseNames['CE4202'],
    preview: '/img/preview_carrito.jpeg',
    date: '2023',
    description:
      'Sistema de control para carrito basado en microcontrolador. Implementación de control de motores, sensores de proximidad y lógica de navegación autónoma utilizando programación de bajo nivel para sistemas embebidos.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/Carrito/II.jpeg', caption: 'Carrito basado en microcontrolador' },
    ],
  },
  {
    slug: 'ce4303-decode-shield',
    title: 'Decode Shield',
    course: 'CE4303',
    courseName: courseNames['CE4303'],
    preview: '/img/preview_decodeshield.png',
    date: '2022',
    description:
      'Herramienta de sistemas operativos para decodificación y análisis de datos en tiempo real. El proyecto explora los mecanismos de comunicación entre procesos, manejo de señales y gestión de recursos del sistema operativo.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/decodeshield/1.png', caption: '' },
      { src: '/img/projects_preview/decodeshield/2.png', caption: '' },
      { src: '/img/projects_preview/decodeshield/3.png', caption: '' },
      { src: '/img/projects_preview/decodeshield/4.png', caption: '' },
      { src: '/img/projects_preview/decodeshield/5.png', caption: '' },
      { src: '/img/projects_preview/decodeshield/6.png', caption: '' },
    ],
  },
  {
    slug: 'ce3201-verilog-snake-saga',
    title: 'Verilog Snake Saga',
    course: 'CE3201',
    courseName: courseNames['CE3201'],
    preview: '/img/preview_snake_digitales.png',
    date: '2022',
    description:
      'Implementación del clásico juego Snake en Verilog HDL sobre FPGA. El proyecto demuestra el diseño digital desde la lógica combinacional hasta la sincronización de señales de video VGA, controladores de entrada y máquinas de estados finitas.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/snake.mp4', caption: 'Snake en FPGA' },
    ],
  },
  {
    slug: 'ti4601-clubes-tec',
    title: 'clubes-tec',
    course: 'TI4601',
    courseName: courseNames['TI4601'],
    preview: '/img/clubes-tec.png',
    date: '2022',
    description:
      'Plataforma web para gestión de clubes y actividades estudiantiles del TEC. Sistema de registro de miembros, publicación de eventos, control de membresías y dashboard administrativo desarrollado con metodologías ágiles.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/clubes-tec.mp4', caption: 'Demo de la plataforma' },
    ],
  },
  {
    slug: 'ce5508-karaoke-v2',
    title: 'karaoke v2.0.0',
    course: 'CE5508',
    courseName: courseNames['CE5508'],
    preview: '/img/preview_karaoke.jpg',
    date: '2022',
    description:
      'Aplicación de karaoke distribuida sobre red. Implementación de streaming de audio/video sincronizado, protocolo de comunicación cliente-servidor, control de latencia y sincronización de letras en tiempo real sobre arquitectura de redes.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/karaoke/1.png', caption: 'Landing Page' },
      { src: '/img/projects_preview/karaoke/2.png', caption: 'Inicio de Sesión y Registro de Usuarios' },
      { src: '/img/projects_preview/karaoke/3.png', caption: 'Inicio de Sesión y Registro de Usuarios' },
      { src: '/img/projects_preview/karaoke/4.png', caption: 'Búsqueda de Canciones' },
      { src: '/img/projects_preview/karaoke/5.png', caption: 'Perfil de Usuario y Estadísticas' },
      { src: '/img/projects_preview/karaoke/6.png', caption: 'Perfil de Usuario y Estadísticas' },
      { src: '/img/projects_preview/karaoke/7.png', caption: 'Reproductor' },
      { src: '/img/projects_preview/karaoke/8.png', caption: 'Información del artista' },
    ],
  },
  {
    slug: 'ce3101-xtecdigital',
    title: 'xtecDigital',
    course: 'CE3101',
    courseName: courseNames['CE3101'],
    preview: '/img/preview_xtecdigital.jpg',
    date: '2021',
    description:
      'Sistema de gestión académica digital para el TEC. Base de datos relacional con procedimientos almacenados, triggers y vistas para administración de cursos, calificaciones, horarios y reportes institucionales.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/xtecDigital/001.jpeg', caption: '' },
      { src: '/img/projects_preview/xtecDigital/002.jpeg', caption: '' },
      { src: '/img/projects_preview/xtecDigital/003.jpeg', caption: '' },
      { src: '/img/projects_preview/xtecDigital/004.jpeg', caption: '' },
      { src: '/img/projects_preview/xtecDigital/005.jpeg', caption: '' },
      { src: '/img/projects_preview/xtecDigital/006.jpeg', caption: '' },
    ],
  },
  {
    slug: 'ce3101-straviatec',
    title: 'StraviaTEC',
    course: 'CE3101',
    courseName: courseNames['CE3101'],
    preview: '/img/preview_straviatec.jpg',
    date: 'Nov 20, 2020',
    description:
      'Plataforma deportiva inspirada en Strava para seguimiento de actividades físicas. Sistema de registro de sesiones, seguimiento entre atletas, organización de eventos y tablas de posiciones. Incluye vista deportista y vista organizador con gestión completa de carreras, retos y grupos.',
    github: 'https://github.com/ce-itcr/StraviaTec',
    images: [
      { src: '/img/projects_preview/StraviaTEC/image5.png', caption: 'Inicio de Sesión' },
      { src: '/img/projects_preview/StraviaTEC/image14.png', caption: 'Registro de Usuarios' },
      { src: '/img/projects_preview/StraviaTEC/image17.png', caption: 'Vista Deportista — Dashboard' },
      { src: '/img/projects_preview/StraviaTEC/image7.png', caption: 'Registro de Actividades' },
      { src: '/img/projects_preview/StraviaTEC/image4.png', caption: 'Búsqueda de Atletas' },
      { src: '/img/projects_preview/StraviaTEC/image9.png', caption: 'Inscripciones' },
      { src: '/img/projects_preview/StraviaTEC/image3.png', caption: 'Perfil de Usuario' },
      { src: '/img/projects_preview/StraviaTEC/image18.png', caption: 'Vista Organizador — Inscripciones' },
      { src: '/img/projects_preview/StraviaTEC/image1.png', caption: 'Vista Organizador — Reportes' },
    ],
  },
  {
    slug: 'ce3101-freshbuy',
    title: 'FreshBuy',
    course: 'CE3101',
    courseName: courseNames['CE3101'],
    preview: '/img/preview_freshbuy.jpg',
    date: '2020',
    description:
      'Sistema de e-commerce con base de datos relacional. Proyecto de Bases de Datos que incluye gestión de inventario, carrito de compras, órdenes de pedido, historial de transacciones y reportes de ventas.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/freshbuy_iniciosesion.jpeg', caption: 'Inicio de Sesión' },
      { src: '/img/projects_preview/freshbuy_registro.jpeg', caption: 'Registro' },
      { src: '/img/projects_preview/freshbuy_gproductos.jpeg', caption: 'Gestión de Productos' },
      { src: '/img/projects_preview/freshbuy_gproductores.jpeg', caption: 'Gestión de Productores' },
      { src: '/img/projects_preview/freshbuy_afiliaciones.jpeg', caption: 'Afiliaciones' },
    ],
  },
  {
    slug: 'ce3104-motortherapy',
    title: 'MotorTherapy',
    course: 'CE3104',
    courseName: courseNames['CE3104'],
    preview: '/img/preview_motortherapy.jpg',
    date: 'Nov 17, 2019',
    description:
      'Aplicación de terapia motriz asistida por computadora. Sistema interactivo con animaciones y ejercicios diseñados para rehabilitación motora, con seguimiento de progreso del paciente y reportes para profesionales de salud.',
    github: 'https://github.com/ce-itcr/MotorTherapy',
    images: [
      { src: '/img/projects_preview/motor_therapy/login.png', caption: 'Inicio de Sesión' },
      { src: '/img/projects_preview/motor_therapy/01.escogencia.png', caption: 'Escogencia de Juegos' },
      { src: '/img/projects_preview/motor_therapy/02.ballons.png', caption: 'Juego Ballons — coordinación con las manos' },
      { src: '/img/projects_preview/motor_therapy/03. piano.png', caption: 'Juego Piano — coordinación con los pies' },
      { src: '/img/projects_preview/motor_therapy/04.cobweb.png', caption: 'Telaraña — caminata y distribución de espacio' },
      { src: '/img/projects_preview/motor_therapy/05.targets.png', caption: 'Targets — coordinación con las manos' },
    ],
  },
  {
    slug: 'ce3104-donce-y-kong-jr',
    title: 'DonCE y Kong Jr',
    course: 'CE3104',
    courseName: courseNames['CE3104'],
    preview: '/img/preview_donceykongjr.jpg',
    date: '2019',
    description:
      'Videojuego 2D de plataformas estilo arcade inspirado en Donkey Kong. Implementado con un motor gráfico propio, sistema de colisiones, IA de enemigos, niveles progresivos y sistema de puntuación.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/donce_welcome.png', caption: 'Pantalla de Bienvenida' },
      { src: '/img/projects_preview/donce_playing.png', caption: 'Jugando' },
      { src: '/img/projects_preview/donce_movements.png', caption: 'Movimientos' },
    ],
  },
  {
    slug: 'ce3104-wazitico',
    title: 'Wazitico',
    course: 'CE3104',
    courseName: courseNames['CE3104'],
    preview: '/img/preview_wazitico.jpg',
    date: '2019',
    description:
      'Intérprete de lenguaje de programación educativo para niños. Implementación de un parser, árbol de sintaxis abstracta (AST) y evaluador para un lenguaje con sintaxis simplificada, diseñado para enseñanza de lógica de programación.',
    github: 'https://github.com/ce-itcr',
    images: [],
  },
  {
    slug: 'ce2103-gladiators-gbp',
    title: 'Gladiators GBP',
    course: 'CE2103',
    courseName: courseNames['CE2103'],
    preview: '/img/preview_gladiatorsgbp.jpg',
    date: 'May 10, 2019',
    description:
      'Juego cliente/servidor ambientado en la antigua Roma donde gladiadores atraviesan una zona de intimidación para ingresar al coliseo. El servidor gestiona poblaciones con algoritmos genéticos y API REST; el cliente maneja la lógica del juego con búsqueda de caminos, hechizos y peleas contra jefes.',
    github: 'https://github.com/ce-itcr/Gladiators-GBP',
    images: [
      { src: '/img/projects_preview/gbp_path.gif', caption: 'Búsqueda de Caminos' },
      { src: '/img/projects_preview/gbp_spells.gif', caption: 'Hechizos' },
      { src: '/img/projects_preview/gbp_maps.gif', caption: 'Elección de Mapas' },
      { src: '/img/projects_preview/gbp_boss.gif', caption: 'Pelea contra Jefes' },
    ],
  },
  {
    slug: 'ce2103-myinvincible-library',
    title: 'MyInvincibleLibrary',
    course: 'CE2103',
    courseName: courseNames['CE2103'],
    preview: '/img/preview_myinvinciblelibrary.jpg',
    date: '2019',
    description:
      'Sistema de gestión de biblioteca digital con estructuras de datos avanzadas. Implementación de árboles B+ para índices de búsqueda, tablas hash para acceso rápido, listas enlazadas para gestión de préstamos.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/mil_generalView.png', caption: 'Vista General' },
      { src: '/img/projects_preview/mil_consult_metadata.png', caption: 'Consulta de Metadatos' },
      { src: '/img/projects_preview/mil_uploadImages.png', caption: 'Carga de Imágenes' },
    ],
  },
  {
    slug: 'ce2103-vehicle-factory',
    title: 'VehicleFactory',
    course: 'CE2103',
    courseName: courseNames['CE2103'],
    preview: '/img/preview_carfactory.jpg',
    date: '2019',
    description:
      'Simulador de línea de ensamblaje de vehículos. Patrón Factory Method aplicado a la creación de diferentes tipos de vehículos, con sistema de colas para la línea de producción y visualización del proceso de manufactura.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/vf_generalView.png', caption: 'Vista General' },
    ],
  },
  {
    slug: 'ce1103-game-of-sorts',
    title: 'GameOfSorts',
    course: 'CE1103',
    courseName: courseNames['CE1103'],
    preview: '/img/preview_gos.jpg',
    date: '2018',
    description:
      'Visualizador interactivo de algoritmos de ordenamiento. Animación en tiempo real de Bubble Sort, Merge Sort, Quick Sort y más, con control de velocidad, comparación de eficiencia y análisis de complejidad temporal.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/gos_logo.png', caption: 'Logo' },
      { src: '/img/projects_preview/game_of_sorts.jpg', caption: 'Vista General' },
    ],
  },
  {
    slug: 'ce1103-sort-mobile',
    title: 'SortMobile',
    course: 'CE1103',
    courseName: courseNames['CE1103'],
    preview: '/img/preview_sortmobile.jpg',
    date: '2018',
    description:
      'Aplicación móvil para aprendizaje de algoritmos de ordenamiento. Versión móvil interactiva con visualizaciones animadas, modo de práctica, quizzes y seguimiento de progreso del aprendizaje.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/sm_01.jpg', caption: '' },
      { src: '/img/projects_preview/sm_02.jpg', caption: '' },
      { src: '/img/projects_preview/sm_03.jpg', caption: '' },
    ],
  },
  {
    slug: 'ce1103-dots',
    title: 'Dots',
    course: 'CE1103',
    courseName: courseNames['CE1103'],
    preview: '/img/preview_dots.jpg',
    date: '2018',
    description:
      'Implementación del juego Dots and Boxes con algoritmos de IA. Búsqueda de grafos para conectar puntos, estrategia basada en teoría de juegos y varios niveles de dificultad con un oponente computacional.',
    github: 'https://github.com/ce-itcr',
    images: [
      { src: '/img/projects_preview/dots_logo.png', caption: 'Logo' },
      { src: '/img/projects_preview/dots.png', caption: 'Vista General' },
    ],
  },
];

export const allCourses = [...new Set(projects.map((p) => p.course))].sort();

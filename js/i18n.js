/**
 * i18n.js — VitalTrek Landing
 * Complete EN/ES translation object and language management.
 * Usage: call initLanguage() on DOMContentLoaded.
 */

const translations = {
  en: {
    /* ── Meta ── */
    metaTitle: "VitalTrek | Offline-ready safety for adventure tours",
    metaDescription:
      "VitalTrek helps adventure tour operators monitor remote expeditions through checkpoint synchronization, early alerts, and offline route information.",
    ogTitle: "VitalTrek | Offline-ready safety for adventure tours",
    ogDescription:
      "Monitor remote expeditions, synchronize telemetry at checkpoints, and act on early alerts — even beyond the signal.",

    /* ── Header nav ── */
    navHowItWorks: "How it works",
    navOperators: "For operators",
    navSafety: "Safety",
    navPlans: "Plans",
    navRequestDemo: "Request a demo",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",

    /* ── Lang toggle ── */
    langToggleLabel: "Select language",
    langEN: "EN",
    langES: "ES",

    /* ── Hero ── */
    heroEyebrow: "OFFLINE-READY ADVENTURE SAFETY",
    heroH1: "Know what happens beyond the signal.",
    heroLead:
      "VitalTrek helps adventure tour operators monitor expedition progress, synchronize field telemetry at checkpoints, and act on early alerts—even on remote routes.",
    heroCTAPrimary: "Request a demo",
    heroCTASecondary: "See how it works",
    heroMicroproof: "Built for remote routes in Peru",

    /* ── Dashboard mockup ── */
    mockupTitle: "Operations Dashboard",
    mockupRoute: "Salkantay · Expedition 04",
    demoBadge: "Demo data",
    group1Name: "Group A — 6 members",
    group1Meta: "CP 3/5 · On schedule",
    group2Name: "Group B — 4 members",
    group2Meta: "CP 2/5 · Delay detected",
    group3Name: "Group C — 8 members",
    group3Meta: "CP 1/5 · Anomaly flag",
    alertDelayLabel: "DELAY",
    alertDelayMsg: "Group B: Expected at CP3 by 14:20 — last sync 52 min ago.",
    alertAnomalyLabel: "ANOMALY",
    alertAnomalyMsg: "Group C: Physiological anomaly flagged at last checkpoint sync.",

    /* ── Trust strip ── */
    trust1Metric: "95%",
    trust1Label: "Target checkpoint registration",
    trust2Metric: "40%",
    trust2Label: "Faster anomaly detection target",
    trust3Metric: "Offline",
    trust3Label: "Offline-first field operation",
    trustNote:
      "MVP targets based on VitalTrek research and validation goals.",

    /* ── Why VitalTrek ── */
    whyEyebrow: "WHY VITALTREK",
    whyH2: "The problem with remote expedition monitoring",
    painTitle1: "No continuous signal",
    painDesc1:
      "Remote routes in the Andes have little to no cellular coverage. Traditional communication fails when operators need it most.",
    painTitle2: "Delayed incident awareness",
    painDesc2:
      "Relying on WhatsApp, phone calls, and manual check-ins means incidents may go unnoticed for hours.",
    painTitle3: "Fragmented field information",
    painDesc3:
      "Guides and operators work from different tools with no shared view of group status, route progress, or active alerts.",
    solutionEyebrow: "THE VITALTREK APPROACH",
    solutionTitle: "Checkpoint-based visibility for remote routes",
    solutionLead:
      "VitalTrek replaces disconnected workflows with a unified operations platform designed for low-connectivity environments.",
    solutionPoint1Title: "Checkpoint synchronization",
    solutionPoint1Desc:
      "Wearables accumulate telemetry offline and push updates in bursts when passing Bluetooth checkpoints.",
    solutionPoint2Title: "Prioritized early warning alerts",
    solutionPoint2Desc:
      "The dashboard surfaces Delays, Route Deviations, and physiological anomalies so operators can respond quickly.",
    solutionPoint3Title: "Unified operations dashboard",
    solutionPoint3Desc:
      "Tour Operators and Field Guides share a single view of all Expedition Groups, check-in records, and active incidents.",

    /* ── How it works ── */
    howEyebrow: "HOW IT WORKS",
    howH2: "Three steps to safer expeditions",
    howLead:
      "VitalTrek fits into your existing operations without requiring permanent cellular coverage.",
    step1Title: "Configure the route",
    step1Desc:
      "The Operations Administrator defines the Route, places Checkpoints, assigns Expedition Groups, and sets expected time windows.",
    step2Title: "Synchronize in the field",
    step2Desc:
      "The wearable device records location and vitals offline. When a group member passes a Checkpoint, accumulated telemetry syncs in a burst to the platform.",
    step3Title: "Act early",
    step3Desc:
      "The dashboard prioritizes Early Warning Alerts for Delays, Route Deviations, and possible anomalies. The Field Guide and operator respond before incidents escalate.",
    howNote:
      "VitalTrek supports periodic checkpoint synchronization; it does not depend on permanent cellular tracking.",

    /* ── For operators ── */
    forEyebrow: "WHO IT'S FOR",
    forH2: "Built for every role in the field",
    forLead:
      "Whether you manage operations from an office or guide groups through the mountains, VitalTrek adapts to your role.",
    operatorCardTitle: "For Tour Operators",
    operatorCardDesc:
      "Control your operations, reduce uncertainty, and respond faster when something changes in the field.",
    operatorBenefit1: "Configure Routes and Checkpoints per expedition",
    operatorBenefit2: "Monitor all Expedition Groups from a single dashboard",
    operatorBenefit3: "Receive Early Warning Alerts and track Check-in Records",
    operatorCTA: "Contact us",
    touristCardTitle: "For Adventure Tourists",
    touristCardDesc:
      "Travel with confidence knowing your operator has visibility into your route—even without a signal.",
    touristBenefit1: "Offline Consultation of route maps and technical Route Notes",
    touristBenefit2: "Review verified checkpoints and time windows before departure",
    touristBenefit3: "Receive a Tour Summary at the end of your expedition",
    touristCTA: "Learn more",

    /* ── Features ── */
    featEyebrow: "PLATFORM FEATURES",
    featH2: "Everything you need for remote expedition monitoring",
    featLead:
      "A focused set of tools designed for operators, guides, and tourists in low-connectivity environments.",
    feat1Title: "Checkpoint synchronization",
    feat1Desc:
      "Telemetry is accumulated offline and synced in bursts at Bluetooth checkpoints—no continuous signal required.",
    feat2Title: "Early Warning Alerts",
    feat2Desc:
      "Automated alerts for Delays, Route Deviations, and physiological anomalies help operators act before incidents escalate.",
    feat3Title: "Expedition dashboard",
    feat3Desc:
      "A real-time operations view showing all active Expedition Groups, their checkpoint progress, and alert status.",
    feat4Title: "Offline route consultation",
    feat4Desc:
      "Tourists and guides can access route maps, waypoints, and notes locally without an internet connection.",
    feat5Title: "Verified Route Notes",
    feat5Desc:
      "Technical route information is loaded and validated only by authorized operators and guides. No open reviews.",
    feat6Title: "Tour summaries",
    feat6Desc:
      "At the end of each expedition, a summary consolidates Check-in Records, timeline, and incident log for the operator.",

    /* ── Safety ── */
    safetyEyebrow: "SAFETY & PRIVACY",
    safetyH2: "Responsible data for outdoor operations",
    safetyLead:
      "VitalTrek handles location and biometric telemetry carefully, with clear consent and access policies.",
    safetyPoint1Title: "Informed consent",
    safetyPoint1Desc:
      "Tourists are informed that location and physiological data are collected during the expedition for operational safety purposes.",
    safetyPoint2Title: "Restricted access",
    safetyPoint2Desc:
      "Telemetry data is only accessible to authorized operational staff—Tour Operator and Field Guide assigned to the group.",
    safetyPoint3Title: "Transparent data retention",
    safetyPoint3Desc:
      "Data is used during the active expedition. Retention policies are defined by the operator and visible to participants.",
    safetyPoint4Title: "Operator-managed Route Notes",
    safetyPoint4Desc:
      "Route Notes are exclusively loaded and validated by operators or authorized guides. There are no open or crowd-sourced reviews.",
    safetyVisualTitle: "How data moves through VitalTrek",
    safetyFlow1Step: "FIELD",
    safetyFlow1Desc: "Wearable records telemetry offline — no constant upload",
    safetyFlow2Step: "SYNC",
    safetyFlow2Desc: "Burst sync at Bluetooth Checkpoint — authorized relay only",
    safetyFlow3Step: "PLATFORM",
    safetyFlow3Desc: "Dashboard displays data to assigned operator & guide",
    safetyFlow4Step: "TOURIST",
    safetyFlow4Desc: "Offline consultation of own route data; Tour Summary post-expedition",

    /* ── Plans ── */
    plansEyebrow: "PLANS",
    plansH2: "Choose the plan that fits your operation",
    plansLead:
      "Simple monthly plans for tour operators. Tourist access is included through the operator's plan.",
    plan1Name: "Trail",
    plan1Price: "S/ 99",
    plan1Period: "/ month",
    plan1Desc: "For agencies starting with digital expedition monitoring.",
    plan1F1: "Up to 2 active Expedition Groups",
    plan1F2: "Route and Checkpoint configuration",
    plan1F3: "Base operations dashboard",
    plan1F4: "Email support",
    plan1CTA: "Request a demo",
    plan2Name: "Operator",
    plan2Price: "S/ 199",
    plan2Period: "/ month",
    plan2Desc: "For growing operations that need alerts and full monitoring.",
    plan2F1: "Up to 8 active Expedition Groups",
    plan2F2: "Early Warning Alerts",
    plan2F3: "Tour Summaries and Route Notes",
    plan2F4: "Priority support",
    plan2CTA: "Request a demo",
    plan2Badge: "MOST CHOSEN",
    plan3Name: "Expedition",
    plan3Price: "S/ 299",
    plan3Period: "/ month",
    plan3Desc: "For high-volume operators managing large-scale expeditions.",
    plan3F1: "Up to 20 active Expedition Groups",
    plan3F2: "Advanced route configuration",
    plan3F3: "Full operational history",
    plan3F4: "Remote onboarding included",
    plan3CTA: "Request a demo",
    touristIncluded: "Tourist access is included through the operator's plan.",
    plansNote:
      "Prices shown for the academic MVP demonstration. No payment is processed on this site.",

    /* ── Team ── */
    teamEyebrow: "THE TEAM",
    teamH2: "Nexum Devs",
    teamLead:
      "Nexum Devs builds technology for safer adventure tourism in Peru.",
    member1Name: "Milenko Cayanchi",
    member1Role: "Software Engineering",
    member2Name: "Jorge León",
    member2Role: "Software Engineering",
    member3Name: "Ariel Mendoza",
    member3Role: "Backend & Data Integration",
    member4Name: "Miler Rodriguez",
    member4Role: "Web Development",
    member5Name: "Diego Herrera",
    member5Role: "Product Design",

    /* ── FAQ ── */
    faqEyebrow: "FAQ",
    faqH2: "Common questions",
    faqLead:
      "Answers to the most frequent questions about how VitalTrek works.",
    faq1Q: "Does VitalTrek require continuous cell coverage?",
    faq1A:
      "No. VitalTrek is designed for offline-first operation. The wearable device records telemetry locally and synchronizes data in bursts when passing a Bluetooth Checkpoint. Continuous cellular coverage is not required.",
    faq2Q: "Is VitalTrek a live GPS tracker?",
    faq2A:
      "No. VitalTrek does not provide permanent, continuous GPS tracking. Location visibility is updated when the device syncs at a Checkpoint. We describe this as checkpoint-based updates or periodic synchronization to be accurate about how the system works.",
    faq3Q: "Who can add Route Notes?",
    faq3A:
      "Only authorized operators and field guides can load and validate Route Notes. There are no open reviews or crowd-sourced contributions. This ensures the information tourists consult offline is accurate and operationally vetted.",
    faq4Q: "Does VitalTrek replace emergency services?",
    faq4A:
      "No. VitalTrek provides Early Warning Alerts to support human decision-making. It is not a substitute for emergency services, rescue protocols, or certified safety personnel. Operators must maintain their own emergency response plans.",
    faq5Q: "Is the wearable hardware part of this MVP?",
    faq5A:
      "The MVP presents a functional simulation of the IoT ecosystem. The wearable device and Bluetooth checkpoints are represented as a simulated environment for academic demonstration. No physical hardware is sold or required at this stage.",

    /* ── Contact ── */
    contactEyebrow: "GET IN TOUCH",
    contactH2: "Make every remote route more visible.",
    contactLead:
      "Interested in VitalTrek for your tour operation? Reach out and we'll walk you through a demonstration.",
    contactCTA: "Request a demo",
    contactEmailLabel: "Or email us directly",
    contactNote: "Academic MVP — contact channel for demonstration purposes.",

    /* ── Footer ── */
    footerTagline: "Checkpoint-based safety for remote adventure tours.",
    footerNavTitle: "Navigate",
    footerHowItWorks: "How it works",
    footerSafety: "Safety",
    footerPlans: "Plans",
    footerContact: "Contact",
    footerLegalTitle: "Legal",
    footerTerms: "Terms",
    footerPrivacy: "Privacy",
    footerCopyright: "© 2026 Nexum Devs. VitalTrek academic MVP.",
    footerLangTitle: "Language",
  },

  es: {
    /* ── Meta ── */
    metaTitle: "VitalTrek | Seguridad para tours de aventura sin conexión",
    metaDescription:
      "VitalTrek ayuda a operadores de turismo de aventura a supervisar expediciones remotas mediante sincronización en checkpoints, alertas tempranas e información de ruta offline.",
    ogTitle: "VitalTrek | Seguridad para tours de aventura sin conexión",
    ogDescription:
      "Supervisa expediciones remotas, sincroniza telemetría en checkpoints y actúa ante alertas tempranas, incluso sin señal.",

    /* ── Header nav ── */
    navHowItWorks: "Cómo funciona",
    navOperators: "Para operadores",
    navSafety: "Seguridad",
    navPlans: "Planes",
    navRequestDemo: "Solicitar demo",
    menuOpenLabel: "Abrir menú de navegación",
    menuCloseLabel: "Cerrar menú de navegación",

    /* ── Lang toggle ── */
    langToggleLabel: "Seleccionar idioma",
    langEN: "EN",
    langES: "ES",

    /* ── Hero ── */
    heroEyebrow: "SEGURIDAD PARA AVENTURA SIN CONEXIÓN",
    heroH1: "Conoce lo que ocurre más allá de la señal.",
    heroLead:
      "VitalTrek ayuda a los operadores de turismo de aventura a supervisar el avance de las expediciones, sincronizar telemetría en checkpoints y actuar ante alertas tempranas, incluso en rutas remotas.",
    heroCTAPrimary: "Solicitar demo",
    heroCTASecondary: "Ver cómo funciona",
    heroMicroproof: "Diseñado para rutas remotas del Perú",

    /* ── Dashboard mockup ── */
    mockupTitle: "Panel de Operaciones",
    mockupRoute: "Salkantay · Expedición 04",
    demoBadge: "Datos de demostración",
    group1Name: "Grupo A — 6 integrantes",
    group1Meta: "CP 3/5 · Sin retraso",
    group2Name: "Grupo B — 4 integrantes",
    group2Meta: "CP 2/5 · Retraso detectado",
    group3Name: "Grupo C — 8 integrantes",
    group3Meta: "CP 1/5 · Anomalía señalada",
    alertDelayLabel: "RETRASO",
    alertDelayMsg: "Grupo B: Esperado en CP3 a las 14:20 — última sincronización hace 52 min.",
    alertAnomalyLabel: "ANOMALÍA",
    alertAnomalyMsg: "Grupo C: Anomalía fisiológica detectada en la última sincronización.",

    /* ── Trust strip ── */
    trust1Metric: "95%",
    trust1Label: "Meta de registro en checkpoints",
    trust2Metric: "40%",
    trust2Label: "Meta de detección de anomalías más rápida",
    trust3Metric: "Offline",
    trust3Label: "Operación de campo sin conexión continua",
    trustNote:
      "Métricas objetivo del MVP, basadas en los objetivos de investigación y validación de VitalTrek.",

    /* ── Why VitalTrek ── */
    whyEyebrow: "POR QUÉ VITALTREK",
    whyH2: "El problema del monitoreo en rutas remotas",
    painTitle1: "Sin señal continua",
    painDesc1:
      "Las rutas remotas en los Andes tienen cobertura celular escasa o nula. La comunicación tradicional falla justo cuando más se necesita.",
    painTitle2: "Alerta tardía ante incidentes",
    painDesc2:
      "Depender de WhatsApp, llamadas y reportes manuales implica que los incidentes pueden pasar desapercibidos durante horas.",
    painTitle3: "Información de campo fragmentada",
    painDesc3:
      "Guías y operadores trabajan con herramientas diferentes, sin una vista compartida del estado de los grupos, avance de ruta o alertas activas.",
    solutionEyebrow: "EL ENFOQUE VITALTREK",
    solutionTitle: "Visibilidad por checkpoints para rutas remotas",
    solutionLead:
      "VitalTrek reemplaza flujos de trabajo desconectados con una plataforma de operaciones unificada, diseñada para entornos de baja conectividad.",
    solutionPoint1Title: "Sincronización en checkpoints",
    solutionPoint1Desc:
      "Los wearables acumulan telemetría sin conexión y envían actualizaciones en ráfaga al pasar por checkpoints Bluetooth.",
    solutionPoint2Title: "Alertas tempranas priorizadas",
    solutionPoint2Desc:
      "El panel muestra Retrasos, Desviaciones de ruta y anomalías fisiológicas para que los operadores actúen con rapidez.",
    solutionPoint3Title: "Panel de operaciones unificado",
    solutionPoint3Desc:
      "Operadores y Guías de campo comparten una vista única de todos los Grupos de expedición, registros de check-in e incidentes activos.",

    /* ── How it works ── */
    howEyebrow: "CÓMO FUNCIONA",
    howH2: "Tres pasos para expediciones más seguras",
    howLead:
      "VitalTrek se integra a tus operaciones actuales sin requerir cobertura celular permanente.",
    step1Title: "Configura la ruta",
    step1Desc:
      "El Administrador de operaciones define la Ruta, coloca los Checkpoints, asigna los Grupos de expedición y establece las ventanas de tiempo esperadas.",
    step2Title: "Sincroniza en campo",
    step2Desc:
      "El wearable registra ubicación y signos vitales sin conexión. Al pasar un Checkpoint, la telemetría acumulada se sincroniza en ráfaga hacia la plataforma.",
    step3Title: "Actúa con anticipación",
    step3Desc:
      "El panel prioriza las alertas tempranas por Retrasos, Desviaciones de ruta y posibles anomalías para que el Guía y el operador respondan antes de que el incidente escale.",
    howNote:
      "VitalTrek soporta sincronización periódica en checkpoints; no depende de rastreo celular permanente.",

    /* ── For operators ── */
    forEyebrow: "PARA QUIÉN ES",
    forH2: "Diseñado para cada rol en campo",
    forLead:
      "Ya sea que gestiones operaciones desde una oficina o guíes grupos por las montañas, VitalTrek se adapta a tu rol.",
    operatorCardTitle: "Para Operadores Turísticos",
    operatorCardDesc:
      "Controla tus operaciones, reduce la incertidumbre y responde más rápido cuando algo cambia en campo.",
    operatorBenefit1: "Configura Rutas y Checkpoints por expedición",
    operatorBenefit2: "Supervisa todos los Grupos de expedición desde un panel único",
    operatorBenefit3: "Recibe Alertas tempranas y da seguimiento a los Check-in Records",
    operatorCTA: "Contáctanos",
    touristCardTitle: "Para Turistas de Aventura",
    touristCardDesc:
      "Viaja con la tranquilidad de saber que tu operador tiene visibilidad sobre tu ruta, incluso sin señal.",
    touristBenefit1: "Consulta offline de mapas de ruta y Route Notes técnicas",
    touristBenefit2: "Revisa checkpoints verificados y ventanas de tiempo antes de partir",
    touristBenefit3: "Recibe un Resumen de tu expedición al finalizar",
    touristCTA: "Más información",

    /* ── Features ── */
    featEyebrow: "FUNCIONALIDADES",
    featH2: "Todo lo que necesitas para el monitoreo remoto de expediciones",
    featLead:
      "Un conjunto de herramientas orientadas a operadores, guías y turistas en entornos de baja conectividad.",
    feat1Title: "Sincronización en checkpoints",
    feat1Desc:
      "La telemetría se acumula sin conexión y se sincroniza en ráfagas en los checkpoints Bluetooth. No se requiere señal continua.",
    feat2Title: "Alertas de advertencia temprana",
    feat2Desc:
      "Alertas automáticas por Retrasos, Desviaciones de ruta y anomalías fisiológicas ayudan a los operadores a actuar antes de que los incidentes escalen.",
    feat3Title: "Panel de expedición",
    feat3Desc:
      "Vista de operaciones con todos los Grupos de expedición activos, su progreso en checkpoints y estado de alertas.",
    feat4Title: "Consulta de ruta offline",
    feat4Desc:
      "Turistas y guías acceden a mapas de ruta, puntos de paso y notas localmente, sin conexión a internet.",
    feat5Title: "Route Notes verificadas",
    feat5Desc:
      "La información técnica de ruta solo la cargan y validan operadores y guías autorizados. No existen reseñas abiertas.",
    feat6Title: "Resúmenes de expedición",
    feat6Desc:
      "Al finalizar cada expedición, se genera un resumen con Check-in Records, cronología y registro de incidentes para el operador.",

    /* ── Safety ── */
    safetyEyebrow: "SEGURIDAD Y PRIVACIDAD",
    safetyH2: "Datos responsables para operaciones outdoor",
    safetyLead:
      "VitalTrek maneja la telemetría de ubicación y biométrica con cuidado, con políticas claras de consentimiento y acceso.",
    safetyPoint1Title: "Consentimiento informado",
    safetyPoint1Desc:
      "Los turistas son informados de que se recopilan datos de ubicación y fisiológicos durante la expedición con fines de seguridad operativa.",
    safetyPoint2Title: "Acceso restringido",
    safetyPoint2Desc:
      "Los datos de telemetría solo son accesibles para el personal operativo autorizado: el Operador turístico y el Guía de campo asignados al grupo.",
    safetyPoint3Title: "Política de retención transparente",
    safetyPoint3Desc:
      "Los datos se usan durante la expedición activa. Las políticas de retención las define el operador y son visibles para los participantes.",
    safetyPoint4Title: "Route Notes gestionadas por el operador",
    safetyPoint4Desc:
      "Las Route Notes solo las cargan y validan operadores o guías autorizados. No existen reseñas abiertas ni colaborativas.",
    safetyVisualTitle: "Cómo fluyen los datos en VitalTrek",
    safetyFlow1Step: "CAMPO",
    safetyFlow1Desc: "El wearable registra telemetría offline — sin subida constante",
    safetyFlow2Step: "SYNC",
    safetyFlow2Desc: "Sincronización en ráfaga en Checkpoint Bluetooth — solo retransmisión autorizada",
    safetyFlow3Step: "PLATAFORMA",
    safetyFlow3Desc: "El panel muestra datos al operador y guía asignados",
    safetyFlow4Step: "TURISTA",
    safetyFlow4Desc: "Consulta offline de sus propios datos de ruta; Resumen post-expedición",

    /* ── Plans ── */
    plansEyebrow: "PLANES",
    plansH2: "Elige el plan que se adapta a tu operación",
    plansLead:
      "Planes mensuales simples para operadores turísticos. El acceso para turistas está incluido en el plan del operador.",
    plan1Name: "Trail",
    plan1Price: "S/ 99",
    plan1Period: "/ mes",
    plan1Desc: "Para agencias que inician con el monitoreo digital de expediciones.",
    plan1F1: "Hasta 2 Grupos de expedición activos",
    plan1F2: "Configuración de Ruta y Checkpoints",
    plan1F3: "Panel de operaciones base",
    plan1F4: "Soporte por email",
    plan1CTA: "Solicitar demo",
    plan2Name: "Operator",
    plan2Price: "S/ 199",
    plan2Period: "/ mes",
    plan2Desc: "Para operaciones en crecimiento que necesitan alertas y monitoreo completo.",
    plan2F1: "Hasta 8 Grupos de expedición activos",
    plan2F2: "Alertas de advertencia temprana",
    plan2F3: "Resúmenes de expedición y Route Notes",
    plan2F4: "Soporte prioritario",
    plan2CTA: "Solicitar demo",
    plan2Badge: "MÁS ELEGIDO",
    plan3Name: "Expedition",
    plan3Price: "S/ 299",
    plan3Period: "/ mes",
    plan3Desc: "Para operadores de alto volumen que gestionan expediciones a gran escala.",
    plan3F1: "Hasta 20 Grupos de expedición activos",
    plan3F2: "Configuración avanzada de rutas",
    plan3F3: "Historial operativo completo",
    plan3F4: "Onboarding remoto incluido",
    plan3CTA: "Solicitar demo",
    touristIncluded: "El acceso para turistas está incluido en el plan del operador.",
    plansNote:
      "Precios mostrados para la demostración del MVP académico. No se procesa ningún pago en este sitio.",

    /* ── Team ── */
    teamEyebrow: "EL EQUIPO",
    teamH2: "Nexum Devs",
    teamLead:
      "Nexum Devs desarrolla tecnología para el turismo de aventura más seguro en el Perú.",
    member1Name: "Milenko Cayanchi",
    member1Role: "Ingeniería de Software",
    member2Name: "Jorge León",
    member2Role: "Ingeniería de Software",
    member3Name: "Ariel Mendoza",
    member3Role: "Backend e Integración de Datos",
    member4Name: "Miler Rodriguez",
    member4Role: "Desarrollo Web",
    member5Name: "Diego Herrera",
    member5Role: "Diseño de Producto",

    /* ── FAQ ── */
    faqEyebrow: "PREGUNTAS FRECUENTES",
    faqH2: "Preguntas comunes",
    faqLead:
      "Respuestas a las preguntas más frecuentes sobre cómo funciona VitalTrek.",
    faq1Q: "¿VitalTrek requiere cobertura celular continua?",
    faq1A:
      "No. VitalTrek está diseñado para operar sin conexión. El wearable registra telemetría localmente y sincroniza los datos en ráfaga al pasar por un Checkpoint Bluetooth. No se requiere cobertura celular continua.",
    faq2Q: "¿VitalTrek es un rastreador GPS en vivo?",
    faq2A:
      "No. VitalTrek no ofrece rastreo GPS permanente y continuo. La visibilidad de ubicación se actualiza cuando el dispositivo se sincroniza en un Checkpoint. Describimos esto como actualizaciones por checkpoint o sincronización periódica para ser precisos sobre cómo funciona el sistema.",
    faq3Q: "¿Quién puede agregar Route Notes?",
    faq3A:
      "Solo operadores y guías de campo autorizados pueden cargar y validar las Route Notes. No existen reseñas abiertas ni contribuciones colaborativas. Esto garantiza que la información que los turistas consultan offline sea precisa y verificada operativamente.",
    faq4Q: "¿VitalTrek reemplaza a los servicios de emergencia?",
    faq4A:
      "No. VitalTrek proporciona Alertas tempranas para apoyar la toma de decisiones humanas. No es sustituto de los servicios de emergencia, los protocolos de rescate ni el personal de seguridad certificado. Los operadores deben mantener sus propios planes de respuesta ante emergencias.",
    faq5Q: "¿El hardware wearable forma parte de este MVP?",
    faq5A:
      "El MVP presenta una simulación funcional del ecosistema IoT. El wearable y los checkpoints Bluetooth se representan como un entorno simulado para demostración académica. No se vende ni se requiere hardware físico en esta etapa.",

    /* ── Contact ── */
    contactEyebrow: "CONTÁCTANOS",
    contactH2: "Haz más visible cada ruta remota.",
    contactLead:
      "¿Te interesa VitalTrek para tu operación turística? Escríbenos y te guiaremos por una demostración.",
    contactCTA: "Solicitar demo",
    contactEmailLabel: "O escríbenos directamente",
    contactNote: "MVP académico — canal de contacto para fines de demostración.",

    /* ── Footer ── */
    footerTagline: "Seguridad por checkpoints para tours de aventura remotos.",
    footerNavTitle: "Navegar",
    footerHowItWorks: "Cómo funciona",
    footerSafety: "Seguridad",
    footerPlans: "Planes",
    footerContact: "Contacto",
    footerLegalTitle: "Legal",
    footerTerms: "Términos",
    footerPrivacy: "Privacidad",
    footerCopyright: "© 2026 Nexum Devs. VitalTrek MVP académico.",
    footerLangTitle: "Idioma",
  },
};

/**
 * Apply a language to the document.
 * Updates all [data-i18n] elements, meta tags, and lang attribute.
 * @param {string} lang - 'en' | 'es'
 */
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Update lang attribute */
  document.documentElement.lang = lang;

  /* Update <title> */
  document.title = t.metaTitle;

  /* Update meta description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.metaDescription);

  /* Update OG tags */
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", t.ogTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", t.ogDescription);

  /* Update all [data-i18n] text nodes */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  /* Update [data-i18n-html] innerHTML (use sparingly) */
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Update [data-i18n-aria-label] */
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (t[key] !== undefined) {
      el.setAttribute("aria-label", t[key]);
    }
  });

  /* Update [data-i18n-placeholder] */
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  /* Update lang toggle button states */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  /* Persist to localStorage */
  try {
    localStorage.setItem("vitaltrek-language", lang);
  } catch (_) {
    /* Storage unavailable — silently ignore */
  }
}

/**
 * Initialize language from localStorage or default to 'en'.
 */
function initLanguage() {
  let saved = "en";
  try {
    const stored = localStorage.getItem("vitaltrek-language");
    if (stored && translations[stored]) saved = stored;
  } catch (_) {
    /* Ignore storage errors */
  }
  setLanguage(saved);
}

/* Expose globally for use in main.js */
window.VitalTrekI18n = { setLanguage, initLanguage, translations };

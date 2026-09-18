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
    skipToContent: "Skip to main content",
    navHowItWorks: "How it works",
    navOperators: "For operators",
    navFeatures: "Features",
    navSafety: "Safety",
    navPlans: "Plans",
    navAbout: "About Us",
    navFAQ: "FAQ",
    navGetStarted: "Get Started",
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
    heroCTAPrimary: "Get Started",
    heroCTASecondary: "Learn How It Works",
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
    plan1CTA: "Acquire Trail Plan",
    plan2Name: "Operator",
    plan2Price: "S/ 199",
    plan2Period: "/ month",
    plan2Desc: "For growing operations that need alerts and full monitoring.",
    plan2F1: "Up to 8 active Expedition Groups",
    plan2F2: "Early Warning Alerts",
    plan2F3: "Tour Summaries and Route Notes",
    plan2F4: "Priority support",
    plan2CTA: "Acquire Operator Plan",
    plan2Badge: "MOST CHOSEN",
    plan3Name: "Expedition",
    plan3Price: "S/ 299",
    plan3Period: "/ month",
    plan3Desc: "For high-volume operators managing large-scale expeditions.",
    plan3F1: "Up to 20 active Expedition Groups",
    plan3F2: "Advanced route configuration",
    plan3F3: "Full operational history",
    plan3F4: "Remote onboarding included",
    plan3CTA: "Acquire Expedition Plan",
    touristIncluded: "Tourist access is included through the operator's plan.",
    plansNote:
        "Prices shown for the academic MVP demonstration. No payment is processed on this site.",

    /* ── Team ── */
    teamEyebrow: "THE TEAM",
    teamH2: "NexaTech",
    teamLead:
        "NexaTech builds technology for safer adventure tourism in Peru.",
    member1Name: "Milenko Cayanchi",
    member1Role: "Software Engineering",
    member1Bio: "Builds the front-end structure and navigation of the platform, keeping the experience consistent across every section of the site.",
    member2Name: "Jorge León",
    member2Role: "Software Engineering",
    member3Name: "Ariel Mendoza",
    member3Role: "Backend & Database Architecture",
    member3Bio: "Backend engineer specializing in data integration and system architecture for expedition monitoring.",
    member4Name: "Miler Rodriguez",
    member4Role: "Web Development",
    member4Bio: "Testing and infrastructure that keep checkpoint sync and alerts reliable.",
    member5Name: "Diego Herrera",
    member5Role: "Product Design & UX",
    member5Bio: "Designs interfaces that reduce cognitive load and support fast decisions in low-connectivity environments.",

    /* ── Testimonials ── */
    testimonialsEyebrow: "WHAT OPERATORS SAY",
    testimonialsH2: "Trusted by adventure tour leaders",
    testimonialsLead: "Hear from operators who depend on VitalTrek for expedition safety and peace of mind.",
    testimonial1Quote: "VitalTrek gives us real visibility on routes where we previously had none. The checkpoint sync model is perfect for the Andes — no dependency on spotty cell coverage.",
    testimonial1Author: "Carlos Mendez",
    testimonial1Role: "Operations Manager, Salkantay Adventures",
    testimonial2Quote: "The early warning alerts have helped us catch minor delays before they become major incidents. Our guides feel more confident knowing we have real-time data.",
    testimonial2Author: "Lucia Rojas",
    testimonial2Role: "Head Guide, Mountain Expeditions Peru",
    testimonial3Quote: "Setup was straightforward, and the dashboard is intuitive. We deployed on our first Salkantay trek within days. Highly recommend for any operator serious about safety.",
    testimonial3Author: "Roberto Silva",
    testimonial3Role: "Director, High Altitude Tours",

    /* ── About Us ── */
    aboutEyebrow: "ABOUT VITALTREK",
    aboutH2: "Our purpose and direction",
    missionTitle: "Our Mission",
    missionDesc: "To empower adventure tour operators with offline-ready technology that transforms remote expedition monitoring, enabling real-time visibility and informed decision-making even beyond cellular coverage.",
    visionTitle: "Our Vision",
    visionDesc: "A world where geographic isolation no longer compromises safety. Every adventure tour operator has the tools to monitor expeditions responsibly, every guide can focus on the experience, and every tourist can travel with confidence.",
    valuesTitle: "Our Values",
    valuesDesc: "Safety first. Transparency always. Innovation grounded in real operator needs. We build technology that earns trust through reliable performance and genuine care for the communities we serve.",

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
    contactCTA: "Go to VitalTrek",
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

    /* ── Legal pages (terms.html / privacy.html) ── */
    termsMetaTitle: "Terms of Service | VitalTrek",
    termsMetaDescription: "Terms of Service for VitalTrek, an academic MVP that supports adventure tour operators with checkpoint-based expedition monitoring.",
    privacyMetaTitle: "Privacy Policy | VitalTrek",
    privacyMetaDescription: "Privacy Policy for VitalTrek, an academic MVP that processes expedition location and checkpoint data for adventure tour operators.",
    legalUpdated: "Last updated: September 2026",
    termsH1: "Terms of Service",
    legalNoticeTitle: "Academic project notice",
    legalNoticeBody: "VitalTrek is a student project developed by NexaTech for the course 1ASI0730 Aplicaciones Web at Universidad Peruana de Ciencias Aplicadas. It is a minimum viable product built for academic evaluation. It is not a commercial service, no real expedition is monitored through it, and this document is an academic exercise in drafting service terms — not legal advice.",
    legalTocTitle: "On this page",
    terms1Title: "Acceptance of these Terms",
    terms2Title: "What VitalTrek does",
    terms3Title: "Safety limitations",
    terms4Title: "Operator responsibilities",
    terms5Title: "Participant responsibilities",
    terms6Title: "Accounts and devices",
    terms7Title: "Availability and changes",
    terms8Title: "Intellectual property",
    terms9Title: "Limitation of liability",
    terms10Title: "Governing law",
    terms11Title: "Professional and ethical commitment",
    terms12Title: "Contact",
    terms1BodyA: "By accessing this site or using the VitalTrek platform, an adventure tour operator and the people it authorizes agree to the conditions described here. If an organization does not accept these conditions, it should not use the platform.",
    terms1BodyB: "Because VitalTrek is an academic MVP, these Terms may change as the product evolves through each sprint. The version published on this page is always the current one.",
    terms2BodyA: "VitalTrek helps adventure tour operators follow the progress of expedition groups along routes where mobile coverage is partial or absent. Wearable devices carried by participants record position and basic activity data, and that data is synchronized when a group reaches a Bluetooth checkpoint.",
    terms2BodyB: "The platform then shows the operator an updated picture of each group: which checkpoints were reached, at what time, and which groups are behind their expected schedule.",
    terms3Callout: "VitalTrek is not an emergency service, a rescue service, or a medical device. It must never be used as the only safety measure for an expedition, and it does not replace satellite communicators, emergency beacons, trained guides, or established rescue protocols.",
    terms3BodyA: "Information reaches the platform only when a group passes a checkpoint. Between two checkpoints there is no live tracking, and a delay in the data does not necessarily mean an incident has occurred — nor does the absence of an alert mean a group is safe.",
    terms3BodyB: "Terrain, weather, battery life, device damage and radio interference can all prevent a synchronization from happening. Operators must plan for those situations and keep independent emergency procedures in place.",
    terms4BodyA: "The tour operator remains fully responsible for the safety of its expeditions. When using VitalTrek, an operator agrees to:",
    terms4Item1: "Inform every participant that wearable devices will record location and activity data, and obtain their consent before the expedition starts.",
    terms4Item2: "Keep emergency plans, communication equipment and qualified guides independent of the platform.",
    terms4Item3: "Provide accurate route, checkpoint and group information, and keep it updated.",
    terms4Item4: "Restrict access to the platform to authorized staff and protect their credentials.",
    terms4Item5: "Use the data only to coordinate the safety and logistics of the expedition.",
    terms5BodyA: "Participants are asked to carry the assigned wearable device during the whole route, to follow the instructions of their guide, and to report any damage or malfunction of the device as soon as they notice it.",
    terms5BodyB: "Participation in the monitoring is voluntary. A participant may ask the operator to stop collecting their data, and the operator must explain how that affects the expedition's safety procedures.",
    terms6BodyA: "Accounts are issued to operator organizations, not to individuals, and each organization decides which of its members may access them. Sharing credentials outside the authorized team is not permitted.",
    terms6BodyB: "Wearables and checkpoint units provided as part of the service remain the property of VitalTrek unless a separate agreement states otherwise, and must be returned in working condition.",
    terms7BodyA: "As an academic MVP, VitalTrek is offered without any guarantee of availability. The service may be interrupted, reset or withdrawn at any time, including for scheduled coursework and demonstrations.",
    terms7BodyB: "Features described on this site may change between sprints, and some of them are planned rather than implemented.",
    terms8BodyA: "The VitalTrek name, interface, source code and documentation were produced by the NexaTech team as academic work. Third-party fonts, libraries and assets remain under their own licences.",
    terms8BodyB: "Data supplied by an operator about its own routes, groups and participants belongs to that operator.",
    terms9BodyA: "VitalTrek is provided \"as is\", for academic purposes, without warranties of any kind. The team does not accept liability for decisions taken on the basis of information shown by the platform, nor for incidents occurring during an expedition.",
    terms9BodyB: "This limitation does not attempt to exclude any liability that cannot be excluded under Peruvian law.",
    terms10BodyA: "These Terms are governed by the laws of the Republic of Peru. Any dispute would be submitted to the courts of Lima, Peru.",
    terms11BodyA: "The team develops VitalTrek following the ACM/IEEE-CS Software Engineering Code of Ethics and Professional Practice and the Code of Ethics of the Colegio de Ingenieros del Perú. In practice, this means we accept the following commitments:",
    terms11Item1: "Public interest first: we state the safety limits of the product plainly rather than overstating what it can do.",
    terms11Item2: "Honesty about the product: features that are planned are described as planned, and this site does not claim results the MVP has not achieved.",
    terms11Item3: "Respect for the people being monitored: data collection is explained, consented to, and limited to what an expedition's safety requires.",
    terms11Item4: "Accountability of the team: every change is traceable in our public GitHub repositories through reviewed pull requests.",
    terms11Item5: "Inclusion: the product is built to be usable in English and Latin American Spanish and to meet accessibility guidelines.",
    terms12BodyA: "Questions about these Terms can be sent to the NexaTech team through the contact section of this site.",
    legalBack: "← Back to home",
    privacyH1: "Privacy Policy",
    privacy1Title: "Scope of this Policy",
    privacy2Title: "Information we process",
    privacy3Title: "Why we process it",
    privacy4Title: "Location and health data",
    privacy5Title: "Consent of participants",
    privacy6Title: "Sharing information",
    privacy7Title: "How long we keep it",
    privacy8Title: "Your rights",
    privacy9Title: "Security",
    privacy10Title: "This website",
    privacy11Title: "Minors",
    privacy12Title: "Contact",
    privacy1BodyA: "This Policy explains how the NexaTech team would handle personal data in the VitalTrek platform and on this website. It follows the principles of Peru's Ley N.° 29733, Ley de Protección de Datos Personales, and its regulations.",
    privacy1BodyB: "In the monitoring service, the tour operator decides why and how participant data is processed. VitalTrek acts on the operator's instructions and only for the purposes described here.",
    privacy2SubA: "Operator account data",
    privacy2BodyA: "Name of the organization, contact person, work email address and the role each staff member holds in the platform.",
    privacy2SubB: "Expedition data",
    privacy2BodyB: "Route and checkpoint definitions, group composition, expected schedules, the first name or identifier of each participant and an emergency contact provided by the operator.",
    privacy2SubC: "Field telemetry",
    privacy2BodyC: "Readings captured by the wearable device — position at the moment of synchronization, timestamps, movement indicators and device battery and status — transmitted when a group reaches a Bluetooth checkpoint.",
    privacy2SubD: "Website data",
    privacy2BodyD: "This landing page does not use analytics, advertising or tracking cookies. The only thing it stores in the browser is the language you choose, kept locally so the site opens in the same language next time.",
    privacy3BodyA: "Data is processed to show operators the progress of their groups, to flag groups that are behind schedule, to support decisions during an incident, and to produce a record of the expedition afterwards. We also use aggregated, non-identifying information to improve the product as coursework.",
    privacy3BodyB: "We do not sell personal data, and we do not use it for advertising or profiling.",
    privacy4Callout: "Location and physical activity data are sensitive. They are collected only while an expedition is active, only at the level of detail the safety of the group requires, and are never used to evaluate a participant for any purpose unrelated to that expedition.",
    privacy4BodyA: "Under Peruvian law, sensitive personal data requires the free, prior, informed and explicit consent of the person concerned. The operator must obtain that consent before the expedition begins.",
    privacy5BodyA: "Every participant must be told, in a language they understand, what the device records, who can see it, how long it is kept and how to withdraw consent. Consent is given freely and can be withdrawn at any moment without affecting the participant's right to join the tour.",
    privacy5BodyB: "If a participant withdraws consent, the operator stops the collection and the expedition continues under the operator's ordinary safety procedures.",
    privacy6BodyA: "Expedition data is visible to the authorized staff of the operator that runs the expedition. It may also be shared with emergency or rescue services when there is a serious risk to a person's life or health, and with the authorities when a legal obligation requires it.",
    privacy6BodyB: "Hosting and deployment rely on third-party infrastructure providers, which process the data only to keep the service running.",
    privacy7BodyA: "Expedition records are retained while they are useful to the operator for safety review, and are then deleted or anonymized. Account data is kept while the organization uses the platform.",
    privacy7BodyB: "Because VitalTrek is an academic MVP, any data stored during the course may be deleted when the academic term ends.",
    privacy8BodyA: "Any person whose data is processed may exercise the rights recognized by Ley N.° 29733:",
    privacy8Item1: "Access — to know what data about them is held and how it is used.",
    privacy8Item2: "Rectification — to correct data that is inaccurate or incomplete.",
    privacy8Item3: "Cancellation — to have their data deleted when it is no longer needed.",
    privacy8Item4: "Objection — to refuse a processing they have legitimate grounds to oppose.",
    privacy8BodyB: "Requests should be addressed to the operator that organized the expedition, which can reach the NexaTech team through this site.",
    privacy9BodyA: "Access to the platform is restricted by role, traffic is served over HTTPS, and the team follows reviewed pull requests and version control so that every change to the code is traceable.",
    privacy9BodyB: "No system is completely secure. As an academic MVP, VitalTrek should not be used to store data that an organization could not afford to lose or expose.",
    privacy10BodyA: "This landing page collects no personal information. It does not use analytics or advertising cookies, and it sets no tracking identifiers.",
    privacy10BodyB: "It stores a single preference in your browser's local storage — the language you selected. You can remove it at any time by clearing your browser's site data.",
    privacy11BodyA: "When a participant is under 18, the consent described in this Policy must be given by a parent or legal guardian, and the operator is responsible for obtaining and keeping that record.",
    privacy12BodyA: "Questions about this Policy can be sent to the NexaTech team through the contact section of this site.",
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
    skipToContent: "Saltar al contenido principal",
    navHowItWorks: "Cómo funciona",
    navOperators: "Para operadores",
    navFeatures: "Funcionalidades",
    navSafety: "Seguridad",
    navPlans: "Planes",
    navAbout: "Quiénes somos",
    navFAQ: "Preguntas frecuentes",
    navGetStarted: "Comenzar ahora",
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
    heroCTAPrimary: "Comenzar ahora",
    heroCTASecondary: "Conocer cómo funciona",
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
    plan1CTA: "Adquirir Plan Trail",
    plan2Name: "Operator",
    plan2Price: "S/ 199",
    plan2Period: "/ mes",
    plan2Desc: "Para operaciones en crecimiento que necesitan alertas y monitoreo completo.",
    plan2F1: "Hasta 8 Grupos de expedición activos",
    plan2F2: "Alertas de advertencia temprana",
    plan2F3: "Resúmenes de expedición y Route Notes",
    plan2F4: "Soporte prioritario",
    plan2CTA: "Adquirir Plan Operator",
    plan2Badge: "MÁS ELEGIDO",
    plan3Name: "Expedition",
    plan3Price: "S/ 299",
    plan3Period: "/ mes",
    plan3Desc: "Para operadores de alto volumen que gestionan expediciones a gran escala.",
    plan3F1: "Hasta 20 Grupos de expedición activos",
    plan3F2: "Configuración avanzada de rutas",
    plan3F3: "Historial operativo completo",
    plan3F4: "Onboarding remoto incluido",
    plan3CTA: "Adquirir Plan Expedition",
    touristIncluded: "El acceso para turistas está incluido en el plan del operador.",
    plansNote:
        "Precios mostrados para la demostración del MVP académico. No se procesa ningún pago en este sitio.",

    /* ── Team ── */
    teamEyebrow: "EL EQUIPO",
    teamH2: "NexaTech",
    teamLead:
        "NexaTech desarrolla tecnología para el turismo de aventura más seguro en el Perú.",
    member1Name: "Milenko Cayanchi",
    member1Role: "Ingeniería de Software",
    member1Bio: "Construye la estructura y la navegación del front-end de la plataforma, manteniendo la experiencia consistente en todas las secciones del sitio.",
    member2Name: "Jorge León",
    member2Role: "Ingeniería de Software",
    member3Name: "Ariel Mendoza",
    member3Role: "Arquitectura Backend y Base de Datos",
    member3Bio: "Ingeniero backend especializado en integración de datos y arquitectura de sistemas para el monitoreo de expediciones.",
    member4Name: "Miler Rodriguez",
    member4Role: "Desarrollo Web",
    member4Bio: "Pruebas e infraestructura que mantienen confiables la sincronización de checkpoints y las alertas.",
    member5Name: "Diego Herrera",
    member5Role: "Diseño de Producto y UX",
    member5Bio: "Diseña interfaces que reducen la carga cognitiva y facilitan decisiones rápidas en entornos de baja conectividad.",

    /* ── Testimonials ── */
    testimonialsEyebrow: "QUÉ DICEN LOS OPERADORES",
    testimonialsH2: "Confiado por líderes de turismo de aventura",
    testimonialsLead: "Escucha a operadores que dependen de VitalTrek para la seguridad de expediciones y tranquilidad mental.",
    testimonial1Quote: "VitalTrek nos da visibilidad real en rutas donde antes no la teníamos. El modelo de sincronización en checkpoints es perfecto para los Andes — sin depender de conexión celular inestable.",
    testimonial1Author: "Carlos Mendez",
    testimonial1Role: "Gerente de Operaciones, Salkantay Adventures",
    testimonial2Quote: "Las alertas tempranas nos han ayudado a detectar retrasos menores antes de que se conviertan en incidentes mayores. Nuestros guías se sienten más confiados sabiendo que tenemos datos en tiempo real.",
    testimonial2Author: "Lucia Rojas",
    testimonial2Role: "Jefa de Guías, Mountain Expeditions Peru",
    testimonial3Quote: "La configuración fue directa y el panel es intuitivo. Nos desplegamos en nuestro primer viaje a Salkantay en cuestión de días. Altamente recomendado para cualquier operador serio sobre seguridad.",
    testimonial3Author: "Roberto Silva",
    testimonial3Role: "Director, High Altitude Tours",

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
    contactCTA: "Ir a VitalTrek",
    contactEmailLabel: "O escríbenos directamente",
    contactNote: "MVP académico — canal de contacto para fines de demostración.",

    /* ── About Us ── */
    aboutEyebrow: "SOBRE VITALTREK",
    aboutH2: "Nuestro propósito y dirección",
    missionTitle: "Nuestra Misión",
    missionDesc: "Empoderar a los operadores de turismo de aventura con tecnología offline-ready que transforma el monitoreo remoto de expediciones, habilitando visibilidad en tiempo real y toma de decisiones informada incluso más allá de cobertura celular.",
    visionTitle: "Nuestra Visión",
    visionDesc: "Un mundo donde el aislamiento geográfico no comprometa más la seguridad. Cada operador de tours de aventura tiene las herramientas para monitorear expediciones responsablemente, cada guía puede enfocarse en la experiencia, y cada turista puede viajar con confianza.",
    valuesTitle: "Nuestros Valores",
    valuesDesc: "La seguridad primero. Transparencia siempre. Innovación basada en necesidades reales de operadores. Construimos tecnología que gana confianza a través de desempeño confiable y cuidado genuino por las comunidades que servimos.",

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
    footerCopyright: "© 2026 NexaTech. VitalTrek MVP académico.",
    footerLangTitle: "Idioma",

    /* ── Legal pages (terms.html / privacy.html) ── */
    termsMetaTitle: "Términos del Servicio | VitalTrek",
    termsMetaDescription: "Términos del Servicio de VitalTrek, un MVP académico que apoya a los operadores de turismo de aventura con monitoreo de expediciones basado en checkpoints.",
    privacyMetaTitle: "Política de Privacidad | VitalTrek",
    privacyMetaDescription: "Política de Privacidad de VitalTrek, un MVP académico que procesa datos de ubicación y checkpoints de expediciones para operadores de turismo de aventura.",
    legalUpdated: "Última actualización: septiembre de 2026",
    termsH1: "Términos del Servicio",
    legalNoticeTitle: "Aviso de proyecto académico",
    legalNoticeBody: "VitalTrek es un proyecto estudiantil desarrollado por NexaTech para el curso 1ASI0730 Aplicaciones Web de la Universidad Peruana de Ciencias Aplicadas. Es un producto mínimo viable creado para evaluación académica. No es un servicio comercial, no se monitorea ninguna expedición real a través de él, y este documento es un ejercicio académico de redacción de términos de servicio, no asesoría legal.",
    legalTocTitle: "En esta página",
    terms1Title: "Aceptación de estos Términos",
    terms2Title: "Qué hace VitalTrek",
    terms3Title: "Limitaciones de seguridad",
    terms4Title: "Responsabilidades del operador",
    terms5Title: "Responsabilidades del participante",
    terms6Title: "Cuentas y dispositivos",
    terms7Title: "Disponibilidad y cambios",
    terms8Title: "Propiedad intelectual",
    terms9Title: "Limitación de responsabilidad",
    terms10Title: "Ley aplicable",
    terms11Title: "Compromiso profesional y ético",
    terms12Title: "Contacto",
    terms1BodyA: "Al acceder a este sitio o utilizar la plataforma VitalTrek, el operador de turismo de aventura y las personas que autorice aceptan las condiciones descritas aquí. Si una organización no acepta estas condiciones, no debe usar la plataforma.",
    terms1BodyB: "Dado que VitalTrek es un MVP académico, estos Términos pueden cambiar conforme el producto evoluciona en cada sprint. La versión publicada en esta página es siempre la vigente.",
    terms2BodyA: "VitalTrek ayuda a los operadores de turismo de aventura a seguir el avance de los grupos de expedición en rutas donde la cobertura móvil es parcial o inexistente. Los dispositivos wearables que llevan los participantes registran posición y datos básicos de actividad, y esa información se sincroniza cuando el grupo llega a un checkpoint Bluetooth.",
    terms2BodyB: "La plataforma muestra entonces al operador un panorama actualizado de cada grupo: qué checkpoints alcanzó, a qué hora y qué grupos van retrasados respecto de su horario previsto.",
    terms3Callout: "VitalTrek no es un servicio de emergencia, un servicio de rescate ni un dispositivo médico. Nunca debe usarse como única medida de seguridad de una expedición, y no reemplaza comunicadores satelitales, balizas de emergencia, guías capacitados ni protocolos de rescate establecidos.",
    terms3BodyA: "La información llega a la plataforma solo cuando un grupo pasa por un checkpoint. Entre dos checkpoints no hay seguimiento en tiempo real, y un retraso en los datos no significa necesariamente que haya ocurrido un incidente, ni la ausencia de una alerta significa que un grupo esté a salvo.",
    terms3BodyB: "El terreno, el clima, la duración de la batería, los daños al dispositivo y la interferencia de radio pueden impedir que una sincronización ocurra. Los operadores deben prever esas situaciones y mantener procedimientos de emergencia independientes.",
    terms4BodyA: "El operador turístico sigue siendo plenamente responsable de la seguridad de sus expediciones. Al usar VitalTrek, el operador se compromete a:",
    terms4Item1: "Informar a cada participante que los dispositivos wearables registrarán datos de ubicación y actividad, y obtener su consentimiento antes del inicio de la expedición.",
    terms4Item2: "Mantener planes de emergencia, equipos de comunicación y guías calificados independientes de la plataforma.",
    terms4Item3: "Proporcionar información precisa de rutas, checkpoints y grupos, y mantenerla actualizada.",
    terms4Item4: "Restringir el acceso a la plataforma al personal autorizado y proteger sus credenciales.",
    terms4Item5: "Usar los datos únicamente para coordinar la seguridad y la logística de la expedición.",
    terms5BodyA: "Se solicita a los participantes llevar el dispositivo wearable asignado durante toda la ruta, seguir las indicaciones de su guía e informar cualquier daño o falla del dispositivo apenas lo adviertan.",
    terms5BodyB: "La participación en el monitoreo es voluntaria. Un participante puede pedir al operador que deje de recolectar sus datos, y el operador debe explicarle cómo afecta eso a los procedimientos de seguridad de la expedición.",
    terms6BodyA: "Las cuentas se emiten a organizaciones operadoras, no a personas individuales, y cada organización decide qué miembros pueden acceder a ellas. No está permitido compartir credenciales fuera del equipo autorizado.",
    terms6BodyB: "Los wearables y las unidades de checkpoint entregados como parte del servicio siguen siendo propiedad de VitalTrek, salvo acuerdo distinto, y deben devolverse en condiciones operativas.",
    terms7BodyA: "Al tratarse de un MVP académico, VitalTrek se ofrece sin garantía alguna de disponibilidad. El servicio puede interrumpirse, reiniciarse o retirarse en cualquier momento, incluso por actividades y demostraciones programadas del curso.",
    terms7BodyB: "Las funcionalidades descritas en este sitio pueden cambiar entre sprints, y algunas de ellas están planificadas y aún no implementadas.",
    terms8BodyA: "El nombre VitalTrek, la interfaz, el código fuente y la documentación fueron elaborados por el equipo NexaTech como trabajo académico. Las tipografías, bibliotecas y recursos de terceros se mantienen bajo sus propias licencias.",
    terms8BodyB: "Los datos que un operador aporta sobre sus propias rutas, grupos y participantes pertenecen a ese operador.",
    terms9BodyA: "VitalTrek se proporciona “tal cual”, con fines académicos y sin garantías de ningún tipo. El equipo no asume responsabilidad por decisiones tomadas sobre la base de la información mostrada por la plataforma ni por incidentes ocurridos durante una expedición.",
    terms9BodyB: "Esta limitación no pretende excluir ninguna responsabilidad que no pueda excluirse conforme a la legislación peruana.",
    terms10BodyA: "Estos Términos se rigen por las leyes de la República del Perú. Cualquier controversia se sometería a los tribunales de Lima, Perú.",
    terms11BodyA: "El equipo desarrolla VitalTrek siguiendo el Código de Ética y Práctica Profesional de Ingeniería de Software de ACM/IEEE-CS y el Código de Ética del Colegio de Ingenieros del Perú. En la práctica, asumimos los siguientes compromisos:",
    terms11Item1: "El interés público primero: declaramos con claridad los límites de seguridad del producto en lugar de exagerar lo que puede hacer.",
    terms11Item2: "Honestidad sobre el producto: lo que está planificado se describe como planificado, y este sitio no atribuye al MVP resultados que no ha alcanzado.",
    terms11Item3: "Respeto por las personas monitoreadas: la recolección de datos se explica, se consiente y se limita a lo que exige la seguridad de la expedición.",
    terms11Item4: "Responsabilidad del equipo: cada cambio es trazable en nuestros repositorios públicos de GitHub mediante pull requests revisados.",
    terms11Item5: "Inclusión: el producto se construye para poder usarse en inglés y en español latinoamericano y para cumplir pautas de accesibilidad.",
    terms12BodyA: "Las consultas sobre estos Términos pueden enviarse al equipo NexaTech a través de la sección de contacto de este sitio.",
    legalBack: "← Volver al inicio",
    privacyH1: "Política de Privacidad",
    privacy1Title: "Alcance de esta Política",
    privacy2Title: "Información que tratamos",
    privacy3Title: "Por qué la tratamos",
    privacy4Title: "Datos de ubicación y salud",
    privacy5Title: "Consentimiento de los participantes",
    privacy6Title: "Compartir información",
    privacy7Title: "Cuánto tiempo la conservamos",
    privacy8Title: "Tus derechos",
    privacy9Title: "Seguridad",
    privacy10Title: "Este sitio web",
    privacy11Title: "Menores de edad",
    privacy12Title: "Contacto",
    privacy1BodyA: "Esta Política explica cómo el equipo NexaTech trataría los datos personales en la plataforma VitalTrek y en este sitio web. Sigue los principios de la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, y su reglamento.",
    privacy1BodyB: "En el servicio de monitoreo, el operador turístico decide por qué y cómo se tratan los datos de los participantes. VitalTrek actúa según las instrucciones del operador y solo para los fines aquí descritos.",
    privacy2SubA: "Datos de la cuenta del operador",
    privacy2BodyA: "Nombre de la organización, persona de contacto, correo electrónico corporativo y el rol que cada miembro del personal tiene en la plataforma.",
    privacy2SubB: "Datos de la expedición",
    privacy2BodyB: "Definiciones de rutas y checkpoints, composición de los grupos, horarios previstos, el nombre o identificador de cada participante y un contacto de emergencia proporcionado por el operador.",
    privacy2SubC: "Telemetría de campo",
    privacy2BodyC: "Lecturas capturadas por el dispositivo wearable —posición al momento de la sincronización, marcas de tiempo, indicadores de movimiento y batería y estado del dispositivo— transmitidas cuando un grupo llega a un checkpoint Bluetooth.",
    privacy2SubD: "Datos del sitio web",
    privacy2BodyD: "Esta landing page no utiliza cookies de analítica, publicidad ni rastreo. Lo único que guarda en el navegador es el idioma que eliges, almacenado localmente para que el sitio se abra en el mismo idioma la próxima vez.",
    privacy3BodyA: "Los datos se tratan para mostrar a los operadores el avance de sus grupos, advertir sobre grupos retrasados, apoyar decisiones durante un incidente y dejar un registro posterior de la expedición. También usamos información agregada y no identificable para mejorar el producto como trabajo del curso.",
    privacy3BodyB: "No vendemos datos personales y no los usamos para publicidad ni para elaborar perfiles.",
    privacy4Callout: "Los datos de ubicación y actividad física son sensibles. Se recolectan únicamente mientras una expedición está activa, solo con el nivel de detalle que exige la seguridad del grupo, y nunca se usan para evaluar a un participante con fines ajenos a esa expedición.",
    privacy4BodyA: "Conforme a la legislación peruana, los datos personales sensibles requieren el consentimiento libre, previo, informado y expreso de la persona. El operador debe obtener ese consentimiento antes del inicio de la expedición.",
    privacy5BodyA: "A cada participante se le debe informar, en un idioma que comprenda, qué registra el dispositivo, quién puede verlo, cuánto tiempo se conserva y cómo retirar su consentimiento. El consentimiento se otorga libremente y puede retirarse en cualquier momento sin afectar el derecho del participante a integrarse al tour.",
    privacy5BodyB: "Si un participante retira su consentimiento, el operador detiene la recolección y la expedición continúa bajo los procedimientos de seguridad ordinarios del operador.",
    privacy6BodyA: "Los datos de la expedición son visibles para el personal autorizado del operador que la realiza. También pueden compartirse con servicios de emergencia o rescate cuando exista un riesgo grave para la vida o la salud de una persona, y con las autoridades cuando una obligación legal lo requiera.",
    privacy6BodyB: "El alojamiento y el despliegue se apoyan en proveedores de infraestructura de terceros, que tratan los datos únicamente para mantener el servicio en funcionamiento.",
    privacy7BodyA: "Los registros de expedición se conservan mientras sean útiles al operador para revisiones de seguridad, y luego se eliminan o anonimizan. Los datos de cuenta se conservan mientras la organización use la plataforma.",
    privacy7BodyB: "Al ser VitalTrek un MVP académico, cualquier dato almacenado durante el curso puede eliminarse al finalizar el ciclo académico.",
    privacy8BodyA: "Toda persona cuyos datos sean tratados puede ejercer los derechos reconocidos por la Ley N.° 29733:",
    privacy8Item1: "Acceso: conocer qué datos suyos se conservan y cómo se utilizan.",
    privacy8Item2: "Rectificación: corregir datos inexactos o incompletos.",
    privacy8Item3: "Cancelación: solicitar la supresión de sus datos cuando ya no sean necesarios.",
    privacy8Item4: "Oposición: rechazar un tratamiento al que tenga motivos legítimos para oponerse.",
    privacy8BodyB: "Las solicitudes deben dirigirse al operador que organizó la expedición, quien puede contactar al equipo NexaTech a través de este sitio.",
    privacy9BodyA: "El acceso a la plataforma está restringido por rol, el tráfico se sirve sobre HTTPS y el equipo trabaja con pull requests revisados y control de versiones, de modo que todo cambio en el código sea trazable.",
    privacy9BodyB: "Ningún sistema es completamente seguro. Al ser un MVP académico, VitalTrek no debe usarse para almacenar datos que una organización no pueda permitirse perder o exponer.",
    privacy10BodyA: "Esta landing page no recolecta información personal. No utiliza cookies de analítica ni publicidad, y no establece identificadores de rastreo.",
    privacy10BodyB: "Guarda una única preferencia en el almacenamiento local de tu navegador: el idioma que seleccionaste. Puedes eliminarla en cualquier momento borrando los datos del sitio en tu navegador.",
    privacy11BodyA: "Cuando un participante es menor de 18 años, el consentimiento descrito en esta Política debe ser otorgado por su padre, madre o tutor legal, y el operador es responsable de obtener y conservar ese registro.",
    privacy12BodyA: "Las consultas sobre esta Política pueden enviarse al equipo NexaTech a través de la sección de contacto de este sitio.",
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

// Case study data based on FameGrowth's real reported results (anonymized).
// Swap for a CMS / DB later — the page layer only depends on the getters below.

export type CaseStudyMetric = { label: string; value: string; sub?: string };

export type CaseStudy = {
  slug: string;
  creator: string; // anonymized handle
  niche: string;
  headline: string;
  excerpt: string;
  heroStat: string;
  durationMonths: number;
  startRevenue: number;
  endRevenue: number;
  metrics: CaseStudyMetric[];
  revenueSeries: { month: string; value: number }[];
  challenge: string;
  approach: { title: string; body: string }[];
  result: string;
  quote: { text: string; author: string };
  publishedAt: string;
  /** Optional cover photo (/public path or configured remote URL). Falls back to generated art. */
  image?: string;
  /** Optional real OnlyFans screenshot filename (in /public) shown as proof inside the card. */
  proof?: string;
  /** Optional voice testimonial mp3 filename (in /public) — the creator telling her story. */
  audio?: string;
  /** Tailwind object-position for the homepage teaser card crop (default centered). */
  coverPos?: string;
  /** Tailwind object-position for the detail-page cover crop (default object-top). */
  heroPos?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "von-4564-auf-62461-euro-pro-monat",
    creator: "Creator @L. (Lifestyle)",
    niche: "Lifestyle",
    headline: "Von 4.564 € auf 62.461 € Monatsumsatz",
    excerpt:
      "Eine Creatorin mit solider Basis, aber ohne System dahinter. In wenigen Monaten haben wir den Monatsumsatz mehr als verzehnfacht, bei voller Diskretion.",
    heroStat: "+1.268 %",
    durationMonths: 6,
    startRevenue: 4564,
    endRevenue: 62461,
    metrics: [
      { label: "Monatsumsatz", value: "62.461 €", sub: "vorher 4.564 €" },
      { label: "Umsatzsteigerung", value: "+1.268 %", sub: "in 6 Monaten" },
      { label: "Antwortzeit Chat", value: "< 2 Min", sub: "24/7 Betreuung" },
      { label: "Vorabkosten", value: "0 €", sub: "rein erfolgsbasiert" },
    ],
    revenueSeries: [
      { month: "M0", value: 4564 },
      { month: "M1", value: 9800 },
      { month: "M2", value: 18500 },
      { month: "M3", value: 31000 },
      { month: "M4", value: 44000 },
      { month: "M5", value: 54000 },
      { month: "M6", value: 62461 },
    ],
    challenge:
      "L. hatte bereits eine treue Community, aber keine Struktur: Content wurde unregelmäßig gepostet, Chats blieben stundenlang unbeantwortet und es gab keine Preisstrategie. Wichtigste Bedingung war vollständige Diskretion.",
    approach: [
      {
        title: "Account-Audit & Struktur",
        body: "Neue Positionierung, optimierter Feed und ein klarer Funnel von kostenlosen Plattformen auf den OnlyFans-Account.",
      },
      {
        title: "Multi-Channel-Traffic",
        body: "Über unser breites Promotion-Setup kamen täglich neue Fans, statt sich auf einen einzigen Kanal zu verlassen.",
      },
      {
        title: "24/7 Chatting & Sales",
        body: "Unser Team übernahm die Conversations rund um die Uhr, mit Verkaufsskripten und Upsell-Strategie im Tonfall der Creatorin.",
      },
      {
        title: "Einnahmen-Optimierung",
        body: "Datenbasierte PPV- und Bundle-Strategie hob den Umsatz pro Fan deutlich an.",
      },
    ],
    result:
      "Innerhalb von sechs Monaten stieg der Monatsumsatz von 4.564 € auf 62.461 €, bei voller Anonymität und ohne Vorabkosten. L. arbeitet heute nur noch am Content.",
    quote: {
      text: "Ihr wart immer für mich da, auch als es nicht nur um Zahlen ging!",
      author: "Creator @L.",
    },
    publishedAt: "2026-05-20",
    image: "/von-4564-auf-62461-euro-pro-monat.jpg",
    proof: "Von 4.564€ auf 62.461€ per month.png",
    audio: "Ihr wart immer für mich da, auch als es nicht nur um Zahlen ging!.mp3",
  },
  {
    slug: "plus-1000-prozent-in-8-monaten",
    creator: "Creator @M. (Fitness)",
    niche: "Fitness & Coaching",
    headline: "+1.000 %: Von 2.170 € auf 24.683 € pro Monat",
    excerpt:
      "Ein Fitness-Creator mit Reichweite, aber kaum Umsatz auf OnlyFans. In 8 Monaten haben wir ein wiederkehrendes Einkommen mit über 1.000 % Wachstum aufgebaut.",
    heroStat: "+1.037 %",
    durationMonths: 8,
    startRevenue: 2170,
    endRevenue: 24683,
    metrics: [
      { label: "Monatsumsatz", value: "24.683 €", sub: "vorher 2.170 €" },
      { label: "Wachstum", value: "+1.037 %", sub: "in 8 Monaten" },
      { label: "Rebill-Quote", value: "61 %", sub: "wiederkehrende Fans" },
      { label: "Kündigung", value: "täglich", sub: "in der Probezeit" },
    ],
    revenueSeries: [
      { month: "M0", value: 2170 },
      { month: "M2", value: 5400 },
      { month: "M3", value: 8900 },
      { month: "M4", value: 13200 },
      { month: "M5", value: 16800 },
      { month: "M6", value: 20100 },
      { month: "M8", value: 24683 },
    ],
    challenge:
      "M. hatte eine starke Fitness-Audience, aber Angst, sein Hauptpublikum zu verschrecken, und null Erfahrung mit OnlyFans-Mechanik. Er brauchte ein System, das ohne sein tägliches Zutun läuft.",
    approach: [
      {
        title: "Sanfter Funnel",
        body: "Ein zweistufiger Funnel führte Fitness-Follower über einen kostenlosen Mehrwert-Account in den Premium-Content, ohne den Hauptkanal zu gefährden.",
      },
      {
        title: "Launch mit Verknappung",
        body: "Ein koordinierter Launch mit Einführungsangebot brachte schnell die ersten zahlenden Fans und finanzierte die Promotion.",
      },
      {
        title: "Retention-System",
        body: "Automatisierte Reaktivierung und exklusive Drops hielten die Rebill-Quote stabil über 60 %.",
      },
    ],
    result:
      "Nach 8 Monaten lag der Monatsumsatz bei 24.683 €, ein Plus von über 1.000 %. M. postet weiterhin sein normales Material, der Premium-Funnel läuft im Hintergrund.",
    quote: {
      text: "Ich kann nur sagen, dass ich super zufrieden mit Famegrowth bin!",
      author: "Creator @M.",
    },
    publishedAt: "2026-04-12",
    image: "/plus-1000-prozent-in-8-monaten.jpg",
    proof: "1000% Wachstum in 8 Monaten.png",
    audio: "Ich kann nur sagen, dass ich super zufrieden mit Famegrowth bin! .mp3",
  },
  {
    slug: "von-null-auf-10000-euro-monatlich",
    creator: "Creator @N. (Glamour)",
    niche: "Neustart",
    headline: "Von 0 auf konstant 10.000 € im Monat",
    excerpt:
      "Kompletter Neustart ohne Vorerfahrung. In wenigen Monaten haben wir ein planbares, wiederkehrendes Einkommen rund um den deutschen Agentur-Durchschnitt aufgebaut.",
    heroStat: "0 → 10.000 €",
    durationMonths: 4,
    startRevenue: 0,
    endRevenue: 10000,
    metrics: [
      { label: "Monatsumsatz", value: "10.000 €", sub: "Start bei 0 €" },
      { label: "Content live", value: "Tag 4", sub: "ab Onboarding" },
      { label: "Diskretion", value: "100 %", sub: "anonym & faceless" },
      { label: "Vorabkosten", value: "0 €", sub: "rein erfolgsbasiert" },
    ],
    revenueSeries: [
      { month: "M0", value: 0 },
      { month: "M1", value: 1800 },
      { month: "M2", value: 4200 },
      { month: "M3", value: 7300 },
      { month: "M4", value: 10000 },
    ],
    challenge:
      "N. startete bei null, ohne Reichweite und mit dem klaren Wunsch nach vollständiger Anonymität. Es musste ein System her, das ohne tägliches Zutun und ohne Gesicht funktioniert.",
    approach: [
      {
        title: "Faceless-Setup",
        body: "Klare Nische, anonyme Funnels und Diskretionsmaßnahmen, damit Erfolg ohne Gesicht möglich ist.",
      },
      {
        title: "Promotion von Tag 1",
        body: "Über unser Multi-Channel-Setup kamen von Beginn an Fans, während der Account aufgebaut wurde.",
      },
      {
        title: "24/7 Chatting",
        body: "Das Chatting-Team übernahm Verkauf und Bindung komplett, im Tonfall der Creatorin.",
      },
    ],
    result:
      "Nach vier Monaten lag der stabile Monatsumsatz bei 10.000 €, dem Durchschnitt unserer betreuten Creator, bei vollständiger Anonymität und ohne Vorabkosten.",
    quote: {
      text: "Ich bin so zufrieden mit dem Management!",
      author: "Creator @N.",
    },
    publishedAt: "2026-03-08",
    image: "/von-null-auf-10000-euro-monatlich.jpg",
    proof: "Konstantes Einkommen von 10K per Month.png",
    audio: "Ich bin so zufrieden mit dem Management! .mp3",
  },
  {
    slug: "skalierung-auf-100000-euro-pro-monat",
    creator: "Creator @S. (Top-Creator)",
    niche: "Skalierung",
    headline: "Skalierung auf über 100.000 € pro Monat",
    excerpt:
      "Eine bereits erfolgreiche Creatorin an ihrer Kapazitätsgrenze. Mit System, Team und Datenanalyse haben wir den Account in die sechsstellige Liga pro Monat gebracht.",
    heroStat: "100.000 €+/Mon.",
    durationMonths: 12,
    startRevenue: 22000,
    endRevenue: 100000,
    metrics: [
      { label: "Monatsumsatz", value: "100.000 €+", sub: "vorher 22.000 €" },
      { label: "Wachstum", value: "+354 %", sub: "in 12 Monaten" },
      { label: "Chatting-Team", value: "24/7", sub: "mehrschichtig" },
      { label: "Success-Manager", value: "persönlich", sub: "fester Ansprechpartner" },
    ],
    revenueSeries: [
      { month: "M0", value: 22000 },
      { month: "M2", value: 34000 },
      { month: "M4", value: 48000 },
      { month: "M6", value: 64000 },
      { month: "M8", value: 78000 },
      { month: "M10", value: 90000 },
      { month: "M12", value: 100000 },
    ],
    challenge:
      "S. war bereits erfolgreich, stieß aber an ihre persönliche Kapazitätsgrenze. Mehr Umsatz war nur mit einem skalierbaren System statt Einzelkämpfertum möglich.",
    approach: [
      {
        title: "Mehrschichtiges Chatting",
        body: "Ein rund um die Uhr besetztes Team deckte alle Zeitzonen und Stoßzeiten ab und ließ keinen Fan unbeantwortet.",
      },
      {
        title: "Daten & Einnahmen-Optimierung",
        body: "Kontinuierliche Analyse von Pricing, PPV-Performance und Funnels hob den Umsatz pro Fan systematisch an.",
      },
      {
        title: "Skalierter Traffic",
        body: "Ausgeweitete Promotion über mehrere Kanäle hielt den Zustrom neuer Fans konstant hoch.",
      },
      {
        title: "Persönlicher Success-Manager",
        body: "Ein fester Ansprechpartner steuerte Strategie und Reporting, damit Wachstum planbar blieb.",
      },
    ],
    result:
      "Innerhalb von zwölf Monaten wuchs der Account von 22.000 € auf über 100.000 € pro Monat und gehört damit zu unseren Top-Creatorn, die bis zu 200.000 € monatlich erreichen.",
    quote: {
      text: "Sie sind zuverlässig und haben den kompletten Überblick!",
      author: "Creator @S.",
    },
    publishedAt: "2026-02-15",
    image: "/skalierung-auf-100000-euro-pro-monat.jpg",
    proof: "100.000€ monatlich.png",
    audio: "Sie sind zuverlässig und haben den kompletten Überblick!.mp3",
  },
  {
    slug: "rekordmonat-650000-euro-pro-monat",
    creator: "Creator @V. (Glamour)",
    niche: "Premium",
    headline: "Rekordmonat: über 650.000 € mit einer Creatorin",
    excerpt:
      "Unsere bisher größte Skalierung. Eine etablierte Glamour-Creatorin haben wir mit Team, System und Daten in einen einzigen Monat von über 650.000 € geführt.",
    heroStat: "650.000 €+",
    durationMonths: 12,
    startRevenue: 48000,
    endRevenue: 650000,
    metrics: [
      { label: "Rekordmonat", value: "650.000 €+", sub: "vorher 48.000 €" },
      { label: "Wachstum", value: "+1.254 %", sub: "in 12 Monaten" },
      { label: "Chatting-Team", value: "24/7", sub: "mehrschichtig, global" },
      { label: "Success-Manager", value: "persönlich", sub: "fester Ansprechpartner" },
    ],
    revenueSeries: [
      { month: "M0", value: 48000 },
      { month: "M2", value: 96000 },
      { month: "M4", value: 168000 },
      { month: "M6", value: 270000 },
      { month: "M8", value: 390000 },
      { month: "M10", value: 520000 },
      { month: "M12", value: 650000 },
    ],
    challenge:
      "V. war bereits eine bekannte Glamour-Creatorin mit starkem Umsatz, aber komplett ausgelastet. Jede weitere Stunde Arbeit brachte kaum noch mehr, der Account hatte sein persönliches Limit erreicht. Sie brauchte ein System, das ohne ihr ständiges Zutun in eine neue Größenordnung skaliert, bei voller Diskretion.",
    approach: [
      {
        title: "Globales Chatting rund um die Uhr",
        body: "Ein mehrschichtiges Team deckte sämtliche Zeitzonen und Stoßzeiten ab, sodass kein zahlungsbereiter Fan je unbeantwortet blieb.",
      },
      {
        title: "Daten- & Einnahmen-Engine",
        body: "Tägliche Analyse von Pricing, PPV-Performance und Fan-Segmenten hob den Umsatz pro Fan kontinuierlich auf ein neues Niveau.",
      },
      {
        title: "Skalierter Multi-Channel-Traffic",
        body: "Massiv ausgeweitete Promotion über mehrere Plattformen hielt den Zustrom neuer Fans auch bei sechsstelligen Monatsumsätzen konstant hoch.",
      },
      {
        title: "Persönlicher Success-Manager",
        body: "Ein fester Ansprechpartner steuerte Strategie, Forecasting und Reporting, damit selbst dieses Wachstum planbar und diskret blieb.",
      },
    ],
    result:
      "Innerhalb von zwölf Monaten wuchs der Account von 48.000 € auf einen Rekordmonat von über 650.000 €, unsere bisher größte Einzelskalierung. V. arbeitet heute ausschließlich am Content, alles andere übernimmt das Team.",
    quote: {
      text: "Ich hätte nie gedacht, dass aus meinem Account so ein echtes Unternehmen wird. Sie haben einfach alles im Griff.",
      author: "Creator @V.",
    },
    publishedAt: "2026-06-10",
    image: "/rekordmonat-650000-euro-pro-monat.jpg",
    proof: "Über 650.000 € nur im letzten Monat!.png",
    // Portrait with her face high in the frame: pull the homepage crop up the
    // image (face into view) and lift the detail crop off the top (less ceiling).
    coverPos: "object-[center_20%]",
    heroPos: "object-[center_35%]",
  },
];

export const getCaseStudies = () =>
  [...caseStudies].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getCaseStudySlugs = () => caseStudies.map((c) => c.slug);

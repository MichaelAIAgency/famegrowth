// Mock blog data targeting long-tail informational SEO around "onlyfans agentur".
// Each post body is an array of simple blocks rendered by the [slug] page.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingMinutes: number;
  publishedAt: string;
  author: string;
  keywords: string[];
  /** Optional cover photo (/public path or configured remote URL). Falls back to generated art. */
  image?: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "onlyfans-agentur-worauf-achten",
    title: "OnlyFans Agentur: Worauf du 2026 unbedingt achten solltest",
    description:
      "Wie du eine seriöse OnlyFans Agentur erkennst, welche Verträge fair sind und welche Red Flags du vermeiden solltest, bevor du unterschreibst.",
    category: "Ratgeber",
    readingMinutes: 7,
    publishedAt: "2026-06-10",
    author: "FameGrowth Team",
    keywords: [
      "onlyfans agentur",
      "onlyfans management",
      "onlyfans agentur seriös",
      "onlyfans agentur erfahrungen",
    ],
    image: "/onlyfans-agentur-worauf-achten.jpg",
    body: [
      {
        type: "p",
        text: "Eine gute OnlyFans Agentur kann den Unterschied zwischen ein paar hundert Euro im Monat und einem planbaren Vollzeit-Einkommen ausmachen. Eine schlechte kostet dich Zeit, Reichweite und im schlimmsten Fall die Kontrolle über deinen Account. In diesem Ratgeber zeigen wir dir, worauf es 2026 wirklich ankommt.",
      },
      { type: "h2", text: "Was macht eine OnlyFans Agentur überhaupt?" },
      {
        type: "p",
        text: "Eine professionelle Agentur übernimmt die geschäftliche Seite deines Creator-Business: Content-Strategie, Chatting und Verkauf, Marketing und Traffic sowie Analyse und Skalierung. Du konzentrierst dich auf das, was nur du kannst, deinen Content und deine Persönlichkeit.",
      },
      {
        type: "ul",
        items: [
          "Content-Planung und Aufbereitung",
          "24/7 Chatting und Verkauf (Conversion deiner Fans)",
          "Traffic über Reddit, X, TikTok und bezahlte Promotion",
          "Preis- und Angebotsstrategie (PPV, Bundles, Tipps)",
          "Reporting und kontinuierliche Optimierung",
        ],
      },
      { type: "h2", text: "5 Red Flags bei der Auswahl" },
      {
        type: "ul",
        items: [
          "Garantierte Umsätze ohne Bedingungen (unseriös)",
          "Knebelverträge mit langer Mindestlaufzeit und hoher Provision",
          "Kein Einblick in Zahlen oder fehlendes Reporting",
          "Du musst Account-Zugang vollständig abgeben ohne Schutz",
          "Keine klaren Ansprechpartner und keine Anonymitätsgarantie",
        ],
      },
      {
        type: "quote",
        text: "Eine faire Agentur verdient erst dann richtig, wenn du verdienst. Erfolgsbasierte Modelle richten die Interessen aus.",
      },
      { type: "h2", text: "Faire Vertragsmodelle" },
      {
        type: "p",
        text: "Achte auf transparente, erfolgsbasierte Provisionen, kurze Kündigungsfristen und schriftlich zugesicherte Anonymität. Bei FameGrowth arbeiten wir bewusst mit einer begrenzten Anzahl Creator, damit jeder Account die volle Aufmerksamkeit bekommt.",
      },
      {
        type: "p",
        text: "Du willst wissen, ob dein Account-Potenzial zu uns passt? Bewirb dich für ein kostenloses Strategiegespräch, wir prüfen ehrlich, ob wir der richtige Partner für dich sind.",
      },
    ],
  },
  {
    slug: "onlyfans-anonym-betreiben",
    title: "OnlyFans anonym betreiben: So schützt du deine Identität",
    description:
      "Diskretion ist für viele Creator entscheidend. So baust du einen erfolgreichen OnlyFans-Account auf, ohne dein Gesicht oder deinen echten Namen zu zeigen.",
    category: "Sicherheit",
    readingMinutes: 6,
    publishedAt: "2026-05-28",
    author: "FameGrowth Team",
    keywords: [
      "onlyfans anonym",
      "onlyfans ohne gesicht",
      "onlyfans diskret",
      "onlyfans agentur anonym",
    ],
    image: "/onlyfans-anonym-betreiben.jpg",
    body: [
      {
        type: "p",
        text: "Anonymität ist kein Hindernis für Erfolg auf OnlyFans, sie ist für viele unserer erfolgreichsten Creator sogar Teil der Marke. Mit der richtigen Strategie verdienst du sehr gut, ohne dein Gesicht zu zeigen.",
      },
      { type: "h2", text: "Geht erfolgreicher OnlyFans-Content ohne Gesicht?" },
      {
        type: "p",
        text: "Ja. Faceless-Content, kreative Kameraführung, Masken, Fokus auf Nische und Persönlichkeit im Chat funktionieren hervorragend. Entscheidend ist eine klare Positionierung und ein starkes Chatting, das Bindung aufbaut.",
      },
      { type: "h2", text: "Praktische Schutzmaßnahmen" },
      {
        type: "ul",
        items: [
          "Künstlername und getrennte E-Mail-/Zahlungsdaten",
          "Geoblocking für deine Region",
          "Wasserzeichen und Leak-Monitoring (DMCA)",
          "Keine erkennbaren Hintergründe, Tattoos oder Merkmale ungewollt zeigen",
          "Separate Social-Media-Profile für die Creator-Marke",
        ],
      },
      {
        type: "quote",
        text: "Diskretion ist kein Kompromiss. Richtig umgesetzt wird sie zum Verkaufsargument.",
      },
      { type: "h2", text: "Wie eine Agentur dabei hilft" },
      {
        type: "p",
        text: "Wir kümmern uns um Leak-Monitoring, Geoblocking-Setup, anonyme Funnels und ein Chatting-Team, das deine Identität nie preisgibt. So bleibst du geschützt und kannst trotzdem skalieren.",
      },
    ],
  },
  {
    slug: "onlyfans-umsatz-steigern-strategien",
    title: "OnlyFans Umsatz steigern: 7 Strategien, die 2026 funktionieren",
    description:
      "Von PPV-Strategie über Chatting bis Retention: Sieben konkrete Hebel, mit denen Creator ihren OnlyFans-Umsatz nachhaltig erhöhen.",
    category: "Wachstum",
    readingMinutes: 8,
    publishedAt: "2026-05-15",
    author: "FameGrowth Team",
    keywords: [
      "onlyfans umsatz steigern",
      "onlyfans mehr geld verdienen",
      "onlyfans tipps",
      "onlyfans marketing",
    ],
    image: "/onlyfans-umsatz-steigern-strategien.jpg",
    body: [
      {
        type: "p",
        text: "Die meisten Creator lassen Geld auf dem Tisch liegen, nicht weil ihr Content schlecht ist, sondern weil das System dahinter fehlt. Diese sieben Hebel bewegen den Umsatz am stärksten.",
      },
      { type: "h2", text: "1. Chatting ist dein größter Umsatzhebel" },
      {
        type: "p",
        text: "Der Großteil des Umsatzes entsteht im 1:1-Chat über PPV und Tipps, nicht über das Abo. Ein professionelles, rund um die Uhr verfügbares Chatting-Team kann den Umsatz pro Fan vervielfachen.",
      },
      { type: "h2", text: "2. PPV-Kalender statt Zufall" },
      {
        type: "p",
        text: "Plane verkaufbare Inhalte wie eine Redaktion. Ein fester PPV-Rhythmus sorgt für planbaren Umsatz statt unregelmäßiger Ausreißer.",
      },
      { type: "h2", text: "3. Retention vor Neukunden" },
      {
        type: "ul",
        items: [
          "Reaktiviere abgelaufene Fans automatisiert",
          "Belohne treue Fans mit exklusiven Drops",
          "Senke Churn durch persönliche Ansprache im Chat",
        ],
      },
      { type: "h2", text: "4 bis 7: Funnel, Pricing, Daten, Konsistenz" },
      {
        type: "p",
        text: "Ein Multi-Plattform-Funnel (Reddit, X, TikTok), dynamisches Pricing, datenbasierte Entscheidungen und absolute Konsistenz runden das System ab. Genau diese Hebel managt eine gute Agentur für dich, damit du dich auf den Content konzentrieren kannst.",
      },
      {
        type: "quote",
        text: "Erfolg auf OnlyFans ist kein Glück, sondern ein Funnel mit System dahinter.",
      },
    ],
  },
  {
    slug: "onlyfans-chatter-werden",
    title: "OnlyFans Chatter werden: Job, Gehalt und Einstieg 2026",
    description:
      "Was macht ein OnlyFans Chatter, was verdient man und wie steigst du ein? Alles über den Remote-Job als Chatter und wie du dich bei FameGrowth bewirbst.",
    category: "Karriere",
    readingMinutes: 6,
    publishedAt: "2026-06-18",
    author: "FameGrowth Team",
    keywords: [
      "onlyfans chatter",
      "onlyfans chatter werden",
      "onlyfans chatter job",
      "onlyfans chatter gehalt",
    ],
    image: "/onlyfans-chatter-werden.jpg",
    body: [
      {
        type: "p",
        text: "Chatter sind das Herzstück jedes erfolgreichen OnlyFans-Accounts. Sie betreuen die Fans, bauen Beziehungen auf und sorgen für den Großteil des Umsatzes. Der Job lässt sich komplett remote und flexibel ausüben, ein idealer Einstieg in die Creator-Economy.",
      },
      { type: "h2", text: "Was macht ein OnlyFans Chatter?" },
      {
        type: "p",
        text: "Als Chatter übernimmst du die Conversations im Namen der Creatorin oder des Creators. Du beantwortest Nachrichten, baust Bindung auf und verkaufst Inhalte (PPV), Bundles und Trinkgelder, immer im Tonfall der jeweiligen Marke und mit klaren Verkaufsskripten an der Hand.",
      },
      {
        type: "ul",
        items: [
          "Fans betreuen und Beziehungen aufbauen",
          "Inhalte verkaufen (PPV, Bundles, Tipps)",
          "Verkaufsskripten folgen und optimieren",
          "Im Tonfall der Creator-Marke schreiben",
        ],
      },
      { type: "h2", text: "Was verdient man als Chatter?" },
      {
        type: "p",
        text: "Die Bezahlung besteht meist aus einem festen Stundenlohn plus Provision auf den erzielten Umsatz. Wer gut verkauft, verdient deutlich mehr. Weil der Job remote und in Schichten läuft, eignet er sich für Teilzeit, Vollzeit oder als flexibler Nebenjob.",
      },
      { type: "h2", text: "Was solltest du mitbringen?" },
      {
        type: "ul",
        items: [
          "Sehr gutes Schreibgefühl und Empathie",
          "Verkaufstalent oder die Motivation, es zu lernen",
          "Zuverlässigkeit und Diskretion",
          "Eine stabile Internetverbindung",
        ],
      },
      {
        type: "quote",
        text: "Gute Chatter sind keine Tipp-Automaten, sondern Verkäufer mit Fingerspitzengefühl.",
      },
      {
        type: "p",
        text: "Du willst als Chatter einsteigen? Bei FameGrowth bekommst du Training, klare Skripte und ein Team im Rücken. Bewirb dich in 2 Minuten über unsere Chatter-Seite, wir melden uns diskret zurück.",
      },
    ],
  },
  {
    slug: "onlyfans-starten-anleitung",
    title: "OnlyFans starten: Die komplette Anleitung für Anfänger 2026",
    description:
      "Schritt für Schritt auf OnlyFans starten: Account einrichten, Nische finden, erste Fans gewinnen und von Anfang an die richtige Strategie wählen.",
    category: "Ratgeber",
    readingMinutes: 8,
    publishedAt: "2026-06-02",
    author: "FameGrowth Team",
    keywords: [
      "onlyfans starten",
      "onlyfans anfänger",
      "onlyfans erstellen",
      "onlyfans tipps für anfänger",
    ],
    image: "/onlyfans-starten-anleitung.jpg",
    body: [
      {
        type: "p",
        text: "Der Start auf OnlyFans entscheidet oft über den späteren Erfolg. Wer von Anfang an strukturiert vorgeht, spart Monate und vermeidet die typischen Anfängerfehler. Diese Anleitung führt dich durch die wichtigsten Schritte.",
      },
      { type: "h2", text: "1. Nische und Positionierung festlegen" },
      {
        type: "p",
        text: "Bevor du den Account erstellst, brauchst du eine klare Nische und Positionierung. Wofür stehst du, wen sprichst du an und was unterscheidet dich? Eine spitze Nische ist leichter zu vermarkten als ein Account für alle.",
      },
      { type: "h2", text: "2. Account professionell einrichten" },
      {
        type: "ul",
        items: [
          "Aussagekräftiger Künstlername und Bio",
          "Hochwertiges Profil- und Titelbild",
          "Sinnvolle Abopreise und ein Willkommensangebot",
          "Diskretions- und Schutzmaßnahmen von Tag 1",
        ],
      },
      { type: "h2", text: "3. Content und Funnel aufbauen" },
      {
        type: "p",
        text: "Plane deinen Content wie eine Redaktion und baue einen Funnel von kostenlosen Plattformen (Reddit, X, TikTok) zu deinem OnlyFans-Account. Konsistenz schlägt Perfektion, besonders am Anfang.",
      },
      { type: "h2", text: "4. Erste Fans gewinnen und verkaufen" },
      {
        type: "p",
        text: "Reichweite allein bringt kein Geld. Entscheidend ist der Verkauf im Chat. Hier macht ein professionelles Chatting den größten Unterschied, viele Creator holen sich dafür von Anfang an Unterstützung.",
      },
      {
        type: "quote",
        text: "Die meisten scheitern nicht am Content, sondern am fehlenden System dahinter.",
      },
      {
        type: "p",
        text: "Du willst nicht alles allein herausfinden? Wir bauen mit dir Nische, Funnel und Chatting auf, diskret und erfolgsbasiert. Sichere dir ein kostenloses Strategiegespräch.",
      },
    ],
  },
  {
    slug: "onlyfans-steuern-deutschland",
    title: "OnlyFans und Steuern in Deutschland: Was Creator wissen müssen",
    description:
      "Einkommensteuer, Umsatzsteuer und Gewerbe: Ein verständlicher Überblick, worauf du als OnlyFans Creator in Deutschland steuerlich achten solltest.",
    category: "Finanzen",
    readingMinutes: 7,
    publishedAt: "2026-05-05",
    author: "FameGrowth Team",
    keywords: [
      "onlyfans steuern",
      "onlyfans steuer deutschland",
      "onlyfans finanzamt",
      "onlyfans umsatzsteuer",
    ],
    image: "/onlyfans-steuern-deutschland.jpg",
    body: [
      {
        type: "p",
        text: "Einnahmen aus OnlyFans sind in Deutschland steuerpflichtig. Wer das ignoriert, riskiert Nachzahlungen und Ärger mit dem Finanzamt. Dieser Überblick erklärt die Grundlagen, ersetzt aber keine individuelle Steuerberatung.",
      },
      { type: "h2", text: "Einkommensteuer" },
      {
        type: "p",
        text: "Deine Gewinne aus OnlyFans unterliegen der Einkommensteuer. Du musst sie in deiner Steuererklärung angeben. Wie viel du zahlst, hängt von deinem gesamten zu versteuernden Einkommen ab.",
      },
      { type: "h2", text: "Umsatzsteuer und Kleinunternehmerregelung" },
      {
        type: "p",
        text: "Grundsätzlich fällt auf deine Einnahmen Umsatzsteuer an. Unter bestimmten Umsatzgrenzen kannst du die Kleinunternehmerregelung nutzen und bist davon befreit. Wird es international, gelten zusätzliche Regeln.",
      },
      { type: "h2", text: "Anmeldung und Pflichten" },
      {
        type: "ul",
        items: [
          "Tätigkeit beim Finanzamt anmelden (ggf. Gewerbe)",
          "Einnahmen und Ausgaben sauber dokumentieren",
          "Belege und Auszahlungen aufbewahren",
          "Fristen für die Steuererklärung einhalten",
        ],
      },
      {
        type: "quote",
        text: "Sauberkeit bei den Finanzen ist kein Luxus, sondern Schutz vor bösen Überraschungen.",
      },
      {
        type: "p",
        text: "Hinweis: Dieser Artikel ist eine allgemeine Information und keine Steuerberatung. Für deine konkrete Situation wende dich an eine Steuerberaterin oder einen Steuerberater. Bei FameGrowth bringen wir Struktur in deine Abrechnung, damit du den Überblick behältst.",
      },
    ],
  },
];

export const getBlogPosts = () =>
  [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getBlogSlugs = () => blogPosts.map((p) => p.slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

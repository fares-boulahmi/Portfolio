/* ---------------- reveal on scroll ---------------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------------- theme toggle ---------------- */
let currentLang = "en";

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
function applyThemeUI(theme) {
  if (theme === "dark") {
    themeIcon.textContent = "☀";
    themeLabel.textContent = currentLang === "en" ? "Light" : "Hell";
  } else {
    themeIcon.textContent = "☾";
    themeLabel.textContent = currentLang === "en" ? "Dark" : "Dunkel";
  }
}
themeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  applyThemeUI(next);
});
applyThemeUI("dark");

/* ---------------- language data ---------------- */
const T = {
  en: {
    nav: {
      about: "about.md",
      highlights: "highlights.md",
      skills: "skills.json",
      experience: "experience/",
      education: "education.md",
      contact: "contact.md",
    },
    hero: {
      role: '"backend-focused full-stack"',
      sub: "13 months shipping <strong>7 production platforms</strong> — e-learning, a medical marketplace, a cloud-hosting reseller — most of them solo, all on an <strong>undocumented proprietary framework</strong> reverse-engineered one module at a time. Now deepening data structures &amp; algorithms, targeting backend-focused full-stack roles in Germany and beyond.",
      ctaWork: "./see-the-work",
      ctaContact: "./get-in-touch",
      stat1: "PLATFORMS",
      stat2: "MONTHS_IN_PROD",
      stat3: "SOLO_OWNED",
      stat4: "DOCS_AVAILABLE",
    },
    about: {
      kicker: "// about.md",
      title: "const backstory = {}",
      sub: "Most of this work happened inside a proprietary system with no documentation, no community, no support channel.",
      p1: "Full-stack developer with 13 months of hands-on production experience delivering client web platforms — an e-learning system used by a tutoring center with 200,000+ followers, a medical price-comparison marketplace, and a cloud-hosting resale platform — several built solo, all on an undocumented in-house framework (Vue 2 + Liquid + Node.js + MongoDB) that demanded constant reverse-engineering just to ship ordinary features.",
      p2: "Since late 2025, paused new client acquisition to rebuild data structures &amp; algorithms fundamentals and deepen backend engineering — while reaching working conversational English and progressing toward B1/B2 German.",
      lbl1: "CORE_STACK",
      lbl2: "DEEPENING",
      val2: "Data Structures &amp; Algorithms",
      lbl3: "TARGETING",
      val3: "Germany &amp; international backend roles",
    },
    hl: {
      kicker: "// highlights.md",
      title: "console.log(wins)",
      sub: "Four moments that explain how the work got done, not just what got shipped.",
      item1:
        "Shipped features across <strong>7 client platforms in 13 months</strong>, solo or near-solo on more than half.",
      item2:
        "Became the team's go-to expert on an undocumented framework, writing the <strong>internal docs</strong> still in use.",
      item3:
        "Designed a <strong>multi-tenant plugin architecture</strong> turning onboarding into a zero-code checklist, live across 5 domains.",
      item4:
        "Fixed a crashing dashboard tied to <strong>4 years of live financial data</strong> with a self-healing repair pattern.",
    },
    sk: {
      kicker: "// skills.json",
      title: "import * as skills",
      sub: "Hover a column to pause it and read closer.",
      tagLang: "LANG",
      tagData: "DATA",
      tagArch: "ARCH",
    },
    exp: {
      kicker: "// experience/",
      title: "ls -la ./projects",
      sub: "Freelance full-stack developer — Aug 2024–Present, remote (Tunisia). Click any file to expand it.",
      built: "what_i_built",
      hard: "hard_problems_solved",
      stack: "stack",
      gallery: "screenshots",
      linksLabel: "project_links",
    },
    edu: {
      kicker: "// education.md",
      title: "base_case()",
      degree: "BTS Informatique et Gestion",
      dates: "SEP 2021 – DEC 2023 · DEGREE CONFERRED 2024",
      desc: "Two-year, post-Baccalauréat, practice-oriented program in applied computing and IT management.",
      note: "Independent study, Sep 2025–present: intensive review of data structures &amp; algorithms for competitive backend interviews.",
      arabic: "Arabic",
      native: "NATIVE",
      english: "English",
      prof: "PROFESSIONAL",
      german: "German",
    },
    foot: {
      kicker: "// contact.md",
      SubTitle: "async function connect() {}",
      title: "git clone this-collaboration",
      sub: "Open to backend-focused full-stack roles in Germany and internationally, plus select freelance work.",
      email: "./email",
      linkedin: "./linkedin",
      github: "./github",
      copyright: "TUNIS, TUNISIA · process.exit(0)",
    },
    projects: [
      {
        title: "ComparePlus — Medical Price Comparison Platform",
        meta: "Aug 2024 – Sep 2025 · 13 months",
        hook: "Analytics superdashboard, a public auth flow the framework never supported, and the first internal docs for the engine itself.",
        built: [
          "Analytics superdashboard: per-partner spend, click counts, CPC ranges, revenue charts, with client-side caching and background refresh",
          "Tiptap-based rich text editor for product descriptions, customized for Vue 2, with exact-formatting paste",
          "Full public-facing auth flow — login, register, profile — reverse-engineered since the framework only supported this on the dashboard",
          "Price alert system on public product pages, including fixing a broken cache dependency blocking it",
          "Liquid → Vue 2 migration of public pages, plus internal framework documentation used to onboard new developers",
        ],
        hard: [
          "<strong>Broken cache blocking core features</strong> — added a timeout boundary falling back to direct database queries.",
          "<strong>Search page timing out</strong> — added pagination; load time dropped to under 1 second.",
          "<strong>Public auth on a framework that didn't support it</strong> — reverse-engineered the dashboard's token verification and rebuilt it publicly.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/9.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/10.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/11.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/12.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/13.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/14.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/15.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/16.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/17.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/18.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/19.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/20.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/21.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/22.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/23.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            { label: "Not_Working", url: "https://compareplus.tn/p/web/" },
          ],
        },
        stack: [
          "in-house framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "Python/Scrapy",
          "Tiptap",
          "JWT",
          "SSE",
        ],
        note: "Site is currently offline — the owner moved away from the business idea.",
      },
      {
        title: "Elios Academy — Online Learning Platform",
        meta: "Aug 2024 – Aug 2025 · part-time, multi-developer team",
        hook: "Pixel-matched dashboards inside a framework with no accessible styling layer, plus the first custom profile page ever built on it.",
        built: [
          "Pixel-matched custom dashboard UI inside a framework with no accessible styling layer",
          "Full issue-ticketing system from scratch — became the team's main tracking channel",
          "FAQ system end-to-end across admin panel, public site, and dashboard",
          "Student dashboard homepage and live-session creation flow with personalized per-student emails",
          "The framework's first-ever custom profile page, with the email field hard-locked front and back",
        ],
        hard: [
          "<strong>Custom designs vs. the framework's own CSS</strong> — reconciled fixes element by element until pixel-for-pixel.",
          "<strong>Home page broken on mobile</strong> — traced an overflow bug on the platform's highest-traffic entry point.",
          "<strong>Reverse-engineering the hidden profile-update flow</strong> — rebuilt around the real discovered behavior.",
        ],
        links: {
          enabled: true,
          items: [
            {
              label: "eliosacademy_live_demo",
              url: "https://www.eliosacademy.com/",
            },
          ],
        },
        stack: [
          "in-house framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Vuex",
        ],
        note: "No version control existed initially for the dashboard code.",
      },
      {
        title: "You Learn — E-Learning Platform",
        meta: "Sep 2024 – Mar 2025 · ~6 months · Solo",
        hook: "9 data models, a full payment pipeline, and a testimonials system built from zero because the platform had no review flow at all.",
        built: [
          "All public-facing pages: homepage carousel, category filtering, testimonials, promo block, blog, contact",
          "Full course management: public catalog, course pages, dashboard player with progress tracking",
          "Payment flow with webhook handling and a transaction audit trail",
          "Chatbot API integration, SMTP email/newsletter system, SEO sitemap generation",
          "9 data models designed from scratch: Course, Category, Element, Purchase, Certificate, Student, OnlinePayment, Transaction, Review",
        ],
        hard: [
          "<strong>Zero-documentation, constrained backend</strong> — reverse-engineered behavior from other internal projects.",
          "<strong>Liquid couldn't express the needed logic</strong> — restructured data at the controller level so templates stayed flat.",
          "<strong>No backend model for testimonials</strong> — designed and built the model, admin UI, and public rendering from nothing.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/9.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/10.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/11.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/12.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/13.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "you-learn_live_demo",
              url: "https://you-learn.tn/p/home",
            },
          ],
        },
        stack: [
          "in-house framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Vuex",
          "Tiptap",
          "SSE",
        ],
        note: "Built entirely by one developer, with no public documentation, community, or support channel.",
      },
      {
        title: "Yasso Design — 3D Design Education Website",
        meta: "Jan 2025 · ~2 weeks · Solo",
        hook: "Rebuilt 4 broken dashboard-driven sections from scratch, solo, in two weeks, while the rest of the team fought fires elsewhere.",
        built: [
          "Rebuilt theme selector, promotions manager, reviews carousel, and 'promotion of the month' after inheriting broken code",
          "Contact form flow landing as real-time admin dashboard notifications",
          "Full lead-capture subscription form with admin follow-up notifications",
        ],
        hard: [
          "<strong>Inherited sections were template demos only</strong> — rewrote them entirely rather than patch static placeholders.",
          "<strong>Sole available developer</strong> — delivered the full rebuild solo in two weeks.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/9.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "yassodesign_live_demo",
              url: "https://yassodesign.tn/p/home",
            },
          ],
        },
        stack: [
          "in-house framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Vuex",
        ],
        note: "",
      },
      {
        title: "Alyis — Cloud Hosting Reseller Platform",
        meta: "Jan 2025 – Aug 2025 · ~8 months · Solo",
        hook: "An entire commerce platform from an empty repo, plus a database-driven translation system built because no library would work.",
        built: [
          "Entire application from an empty repository as sole developer: data models, API layer, admin dashboard, public site",
          "Full commerce pipeline: cart, order validation, payment with retry handling, real-time status over WebSocket",
          "isHosting integration layer from scratch: server/plan lookup, pricing, offer handling, validation against an inconsistent API",
          "Per-language content system for the public catalog and the entire desktop navigation menu in Liquid",
        ],
        hard: [
          "<strong>No usable translation system</strong> — built a database-driven system with per-language admin entry and automatic fallback.",
          "<strong>Undocumented, rate-limited hosting API</strong> — mapped real behavior through trial and error, added caching.",
          "<strong>Menu logic with no scripting layer</strong> — hand-built the entire visibility dependency chain as Liquid conditionals.",
        ],
        stack: [
          "Vue 2",
          "Vuex",
          "Vuetify",
          "Node.js",
          "Liquid",
          "MongoDB",
          "JWT",
          "Tiptap",
          "isHosting API",
        ],
        note: "Feature-complete but not yet public or marketed when the engagement ended.",
      },
      {
        title: "EliClass — Education Center Management Platform",
        meta: "Apr 2025 · ~1 month · Team",
        hook: "A self-healing fix for a dashboard crashing on 4 years of live financial data — without a single risky write to history.",
        built: [
          "Attendance-sheet feature front-to-back, including a printable PDF sign-in sheet",
          "Profit/revenue reporting feature with a full transaction log",
          "Repaired a completely broken teacher-earnings dashboard",
        ],
        hard: [
          "<strong>Crashing dashboard tied to years of legacy data</strong> — added defensive checks that fall back to a safe default and write it back on read, so each document heals itself the first time it's touched.",
        ],
        stack: ["Vue 2", "Node.js", "Liquid", "MongoDB", "JWT", "Vuex"],
        note: "Single-account dashboard project — no shareable screenshots or public URL.",
      },
      {
        title: "White-Label E-Learning Platform — Multi-Tenant",
        meta: "Apr 2025 – Aug 2025 · ~4 months",
        hook: "A full production SaaS, effectively solo — auth, payments, a sessions plugin, and a deployment system a non-developer could run.",
        built: [
          "Full course system: model, API, dashboard UI, player with progress tracking, secure file download",
          "Purchase & payment system with manual approval workflow and package/bundle discounted pricing",
          "JWT-based multi-role auth with multi-step registration and password reset",
          "Sessions/Events extension built as a separate plugin, with full role-based access across teachers, students, and admins",
          "Multi-tenant deployment system with integration docs a non-developer could follow end-to-end",
        ],
        hard: [
          "<strong>Undocumented proprietary framework</strong> — searched existing projects for prior art, then trial-and-error.",
          "<strong>Multi-tenant plugin architecture</strong> — structured the whole project as a plugin dropping into a base site.",
          "<strong>Silent configuration failures</strong> — the checklist now flags every step that fails silently but breaks functionality.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/9.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/10.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/11.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/12.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/13.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/14.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "svtghdiri_live_demo",
              url: "https://svtghdiri.tn/p/home",
            },
            {
              label: "smart_academy_live_demo",
              url: "https://smart-academy.tn/p/home",
            },
            {
              label: "makeduc_live_demo",
              url: "https://makeduc.tn/p/home",
            },
            {
              label: "podiumeco_live_demo",
              url: "https://podiumeco.tn/p/home",
            },
            {
              label: "formaticacademy_live_demo",
              url: "https://www.formaticacademy.com/p/home",
            },
          ],
        },
        stack: [
          "in-house framework",
          "Vue.js 2",
          "Vuex",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Konnect API",
          "Tiptap",
          "SSE",
        ],
        note: "Live deployments: svtghdiri.tn, smart-academy.tn, makeduc.tn, podiumeco.tn, formaticacademy.com",
      },
    ],
  },
  de: {
    nav: {
      about: "about.md",
      highlights: "highlights.md",
      skills: "skills.json",
      experience: "erfahrung/",
      education: "ausbildung.md",
      contact: "kontakt.md",
    },
    hero: {
      role: '"backend-orientierter full-stack"',
      sub: "13 Monate mit <strong>7 produktiven Plattformen</strong> — E-Learning, ein Preisvergleich für Medizinprodukte, ein Cloud-Hosting-Reseller — die meisten davon solo, alle auf einem <strong>undokumentierten proprietären Framework</strong>, das Modul für Modul reverse-engineert wurde. Aktuell werden Datenstrukturen &amp; Algorithmen vertieft, mit Blick auf backend-orientierte Full-Stack-Rollen in Deutschland und international.",
      ctaWork: "./projekte-ansehen",
      ctaContact: "./kontakt-aufnehmen",
      stat1: "PLATTFORMEN",
      stat2: "MONATE_IN_PRODUKTION",
      stat3: "SOLO_UMGESETZT",
      stat4: "DOKUMENTATION_VERFÜGBAR",
    },
    about: {
      kicker: "// about.md",
      title: "const werdegang = {}",
      sub: "Der Großteil dieser Arbeit fand in einem proprietären System ohne Dokumentation, Community oder Support statt.",
      p1: "Full-Stack-Entwickler mit 13 Monaten praktischer Produktionserfahrung bei der Umsetzung von Kundenplattformen — ein E-Learning-System eines Nachhilfezentrums mit 200.000+ Followern, ein Preisvergleichsportal für Medizinprodukte und eine Cloud-Hosting-Reseller-Plattform — mehrere davon solo, alle auf einem undokumentierten internen Framework (Vue 2 + Liquid + Node.js + MongoDB), das ständiges Reverse Engineering erforderte, nur um gewöhnliche Funktionen umzusetzen.",
      p2: "Seit Ende 2025 pausiert die Neukundenakquise, um Grundlagen in Datenstrukturen &amp; Algorithmen zu vertiefen und das Backend-Wissen auszubauen — während gleichzeitig ein solides Englisch-Niveau erreicht und Deutsch bis B1/B2 vorangetrieben wird.",
      lbl1: "KERN-STACK",
      lbl2: "AKTUELLER FOKUS",
      val2: "Datenstrukturen &amp; Algorithmen",
      lbl3: "ZIEL",
      val3: "Backend-Rollen in Deutschland &amp; international",
    },
    hl: {
      kicker: "// highlights.md",
      title: "console.log(erfolge)",
      sub: "Vier Momente, die zeigen, wie die Arbeit tatsächlich ablief — nicht nur, was am Ende geliefert wurde.",
      item1:
        "Features auf <strong>7 Kundenplattformen in 13 Monaten</strong> umgesetzt, bei mehr als der Hälfte solo oder fast solo.",
      item2:
        "Wurde zum Ansprechpartner des Teams für ein undokumentiertes Framework und verfasste die <strong>interne Dokumentation</strong>, die bis heute genutzt wird.",
      item3:
        "Entwarf eine <strong>Multi-Tenant-Plugin-Architektur</strong>, die das Onboarding neuer Kunden zu einer code-freien Checkliste machte — live auf 5 Domains.",
      item4:
        "Behob ein abstürzendes Dashboard mit <strong>4 Jahren Live-Finanzdaten</strong> durch ein selbstheilendes Reparaturmuster.",
    },
    sk: {
      kicker: "// skills.json",
      title: "import * as fähigkeiten",
      sub: "Spalte mit der Maus berühren, um sie anzuhalten und in Ruhe zu lesen.",
      tagLang: "SPR",
      tagData: "DATEN",
      tagArch: "ARCH",
    },
    exp: {
      kicker: "// erfahrung/",
      title: "ls -la ./projekte",
      sub: "Freiberuflicher Full-Stack-Entwickler — Aug 2024–heute, remote (Tunesien). Auf ein Projekt klicken, um es zu öffnen.",
      built: "was_ich_gebaut_habe",
      hard: "gelöste_probleme",
      stack: "stack",
      gallery: "screenshots",
      linksLabel: "Projekt_links",
    },
    edu: {
      kicker: "// ausbildung.md",
      title: "basisfall()",
      degree: "BTS Informatique et Gestion",
      dates: "SEP 2021 – DEZ 2023 · ABSCHLUSS 2024",
      desc: "Zweijähriges, praxisorientiertes Programm in angewandter Informatik und IT-Management nach dem Abitur (Baccalauréat).",
      note: "Selbststudium seit Sep 2025: intensive Auffrischung von Datenstrukturen &amp; Algorithmen für anspruchsvolle Backend-Interviews.",
      arabic: "Arabisch",
      native: "MUTTERSPRACHE",
      english: "Englisch",
      prof: "BERUFLICHE KENNTNISSE",
      german: "Deutsch",
    },
    foot: {
      kicker: "// kontaktieren.md",
      SubTitle: "async function verbinden() {}",
      title: "git clone diese-zusammenarbeit",
      sub: "Offen für backend-orientierte Full-Stack-Rollen in Deutschland und international, sowie ausgewählte Freelance-Projekte.",
      email: "./email",
      linkedin: "./linkedin",
      github: "./github",
      copyright: "TUNIS, TUNESIEN · process.exit(0)",
    },
    projects: [
      {
        title: "ComparePlus — Preisvergleichsplattform für Medizinprodukte",
        meta: "Aug 2024 – Sep 2025 · 13 Monate",
        hook: "Analytics-Superdashboard, ein öffentlicher Auth-Flow, den das Framework nie unterstützte, und die erste interne Dokumentation der Engine selbst.",
        built: [
          "Analytics-Superdashboard: Partner-Ausgaben, Klickzahlen, CPC-Bereiche, Umsatzcharts, mit Client-seitigem Caching und Hintergrund-Refresh",
          "Rich-Text-Editor für Produktbeschreibungen auf Tiptap-Basis, angepasst für Vue 2, mit formatgetreuem Einfügen",
          "Vollständiger öffentlicher Auth-Flow — Login, Registrierung, Profil — reverse-engineert, da das Framework dies nur im Dashboard unterstützte",
          "Preisalarm-System auf öffentlichen Produktseiten, inklusive Behebung einer defekten Cache-Abhängigkeit",
          "Liquid → Vue 2 Migration der öffentlichen Seiten, plus interne Framework-Dokumentation zur Einarbeitung neuer Entwickler",
        ],
        hard: [
          "<strong>Defekter Cache blockierte Kernfunktionen</strong> — eine Timeout-Grenze eingebaut, die auf direkte Datenbankabfragen zurückfällt.",
          "<strong>Suchseite mit Timeout</strong> — Pagination ergänzt; Ladezeit auf unter 1 Sekunde reduziert.",
          "<strong>Öffentliche Auth auf einem Framework, das dies nicht unterstützte</strong> — Token-Verifizierung des Dashboards reverse-engineert und öffentlich nachgebaut.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/9.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/10.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/11.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/12.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/13.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/14.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/15.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/16.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/17.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/18.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/19.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/20.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/21.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/22.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/compareplus/23.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "Funktioniert_nicht",
              url: "https://compareplus.tn/p/web/",
            },
          ],
        },
        stack: [
          "internes Framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "Python/Scrapy",
          "Tiptap",
          "JWT",
          "SSE",
        ],
        note: "Die Seite ist derzeit offline — der Inhaber hat sich von der Geschäftsidee entfernt.",
      },
      {
        title: "Elios Academy — Online-Lernplattform",
        meta: "Aug 2024 – Aug 2025 · Teilzeit, Team mit mehreren Entwicklern",
        hook: "Pixelgenaue Dashboards in einem Framework ohne zugängliche Styling-Ebene, plus die erste jemals gebaute individuelle Profilseite.",
        built: [
          "Pixelgenaues, individuelles Dashboard-UI in einem Framework ohne zugängliche Styling-Ebene umgesetzt",
          "Vollständiges Ticket-System von Grund auf — wurde zum Haupt-Tracking-Kanal des Teams",
          "FAQ-System durchgängig über Admin-Panel, öffentliche Seite und Dashboard",
          "Dashboard-Startseite für Studierende sowie Live-Session-Erstellung mit personalisierten E-Mails pro Teilnehmer",
          "Die erste je gebaute individuelle Profilseite des Frameworks, mit beidseitig gesperrtem E-Mail-Feld",
        ],
        hard: [
          "<strong>Individuelle Designs vs. das eigene CSS des Frameworks</strong> — Fixes Element für Element abgestimmt, bis das Design pixelgenau passte.",
          "<strong>Startseite auf Mobilgeräten defekt</strong> — Overflow-Bug auf dem meistbesuchten Einstiegspunkt der Plattform aufgespürt und behoben.",
          "<strong>Reverse Engineering des versteckten Profil-Update-Flows</strong> — anhand des tatsächlich ausgeführten Verhaltens neu aufgebaut.",
        ],
        links: {
          enabled: true,
          items: [
            {
              label: "eliosacademy_live_demo",
              url: "https://www.eliosacademy.com/",
            },
          ],
        },
        stack: [
          "internes Framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Vuex",
        ],
        note: "Anfangs gab es keine Versionskontrolle für den Dashboard-Code.",
      },
      {
        title: "You Learn — E-Learning-Plattform",
        meta: "Sep 2024 – Mär 2025 · ~6 Monate · Solo",
        hook: "9 Datenmodelle, eine vollständige Zahlungs-Pipeline und ein Bewertungssystem, das komplett neu gebaut wurde, weil die Plattform keinerlei Review-Funktion hatte.",
        built: [
          "Alle öffentlichen Seiten: Homepage mit Kurskarussell, Kategorie-Filter, Testimonials, Promo-Block, Blog, Kontakt",
          "Vollständiges Kursmanagement: öffentlicher Katalog, Kursseiten, Dashboard-Player mit Fortschrittsverfolgung",
          "Zahlungsablauf mit Webhook-Verarbeitung und vollständigem Transaktionsprotokoll",
          "Chatbot-API-Integration, SMTP-E-Mail-/Newsletter-System, SEO-Sitemap-Generierung",
          "9 komplett neu entworfene Datenmodelle: Course, Category, Element, Purchase, Certificate, Student, OnlinePayment, Transaction, Review",
        ],
        hard: [
          "<strong>Framework ohne Dokumentation und mit eingeschränktem Backend</strong> — Verhalten anhand anderer interner Projekte reverse-engineert.",
          "<strong>Liquid konnte die nötige Logik nicht abbilden</strong> — Daten auf Controller-Ebene umstrukturiert, damit Templates flach bleiben.",
          "<strong>Kein Backend-Modell für Testimonials</strong> — Modell, Admin-UI und öffentliche Darstellung komplett neu entworfen.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/9.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/10.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/11.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/12.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/you-learn/13.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "you-learn_live_demo",
              url: "https://you-learn.tn/p/home",
            },
          ],
        },
        stack: [
          "internes Framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Vuex",
          "Tiptap",
          "SSE",
        ],
        note: "Vollständig von einem einzigen Entwickler gebaut, ohne öffentliche Dokumentation, Community oder Support-Kanal.",
      },
      {
        title: "Yasso Design — Website für 3D-Design-Ausbildung",
        meta: "Jan 2025 · ~2 Wochen · Solo",
        hook: "4 defekte, dashboard-gesteuerte Bereiche von Grund auf neu gebaut, solo, in zwei Wochen, während der Rest des Teams anderswo Brände löschte.",
        built: [
          "Theme-Auswahl, Promotions-Manager, Bewertungskarussell und 'Aktion des Monats' nach defektem, geerbtem Code komplett neu gebaut",
          "Kontaktformular-Flow, der als Echtzeit-Benachrichtigung im Admin-Dashboard landet",
          "Vollständiges Lead-Formular mit Admin-Benachrichtigung zur Nachverfolgung",
        ],
        hard: [
          "<strong>Geerbte Bereiche waren nur Template-Demos</strong> — komplett neu geschrieben statt statische Platzhalter zu flicken.",
          "<strong>Einziger verfügbarer Entwickler</strong> — den kompletten Umbau solo in zwei Wochen geliefert.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/yasso-design/9.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "yassodesign_live_demo",
              url: "https://yassodesign.tn/p/home",
            },
          ],
        },
        stack: [
          "internes Framework",
          "Vue 2",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Vuex",
        ],
        note: "",
      },
      {
        title: "Alyis — Cloud-Hosting-Reseller-Plattform",
        meta: "Jan 2025 – Aug 2025 · ~8 Monate · Solo",
        hook: "Eine komplette Commerce-Plattform aus einem leeren Repository, plus ein datenbankgestütztes Übersetzungssystem, weil keine Bibliothek funktionierte.",
        built: [
          "Gesamte Anwendung aus einem leeren Repository als alleiniger Entwickler: Datenmodelle, API-Schicht, Admin-Dashboard, öffentliche Seite",
          "Vollständige Commerce-Pipeline: Warenkorb, Bestellvalidierung, Zahlung mit Retry-Logik, Echtzeit-Status über WebSocket",
          "isHosting-Integrationsschicht von Grund auf: Server-/Plan-Lookup, Preisberechnung, Angebotslogik und Validierung gegen eine inkonsistente API",
          "Mehrsprachiges Inhaltssystem für den öffentlichen Katalog und das gesamte Desktop-Navigationsmenü in Liquid",
        ],
        hard: [
          "<strong>Kein nutzbares Übersetzungssystem</strong> — datenbankgestütztes System mit Übersetzung pro Sprache und automatischem Fallback gebaut.",
          "<strong>Undokumentierte, ratenlimitierte Hosting-API</strong> — reales Verhalten per Trial-and-Error kartiert, Caching zur Reduzierung der Anfragen ergänzt.",
          "<strong>Menülogik ohne Scripting-Ebene</strong> — die gesamte Sichtbarkeits-Abhängigkeitskette als strukturierte Liquid-Bedingungen von Hand gebaut.",
        ],
        stack: [
          "internes Framework",
          "Vue 2",
          "Vuex",
          "Vuetify",
          "Node.js",
          "Liquid",
          "MongoDB",
          "JWT",
          "Tiptap",
          "isHosting API",
        ],
        note: "Funktional vollständig, aber noch nicht öffentlich oder vermarktet, als das Projekt endete.",
      },
      {
        title: "EliClass — Verwaltungsplattform für ein Bildungszentrum",
        meta: "Apr 2025 · ~1 Monat · Team",
        hook: "Eine selbstheilende Lösung für ein Dashboard, das an 4 Jahren Live-Finanzdaten abstürzte — ohne einen einzigen riskanten Schreibvorgang.",
        built: [
          "Anwesenheitsliste von Grund auf, inklusive druckbarem PDF-Unterschriftenbogen",
          "Gewinn-/Umsatzberichterstattung mit vollständigem Transaktionsprotokoll",
          "Ein komplett defektes Lehrer-Einkommens-Dashboard repariert",
        ],
        hard: [
          "<strong>Abstürzendes Dashboard mit jahrelangen Altdaten</strong> — defensive Prüfungen ergänzt, die auf einen sicheren Standardwert zurückfallen und ihn beim Lesen zurückschreiben, sodass sich jedes Dokument beim ersten Zugriff selbst heilt.",
        ],
        stack: ["Vue 2", "Node.js", "Liquid", "MongoDB", "JWT", "Vuex"],
        note: "Einzelkonto-Dashboard-Projekt — keine teilbaren Screenshots oder öffentliche URL.",
      },
      {
        title: "White-Label-E-Learning-Plattform — Multi-Tenant",
        meta: "Apr 2025 – Aug 2025 · ~4 Monate",
        hook: "Eine vollständige Produktions-SaaS, praktisch solo umgesetzt — Auth, Zahlungen, ein Sessions-Plugin und ein Deployment-System, das auch Nicht-Entwickler bedienen können.",
        built: [
          "Vollständiges Kurssystem: Modell, API, Dashboard-UI, Player mit Fortschrittsverfolgung, sicherer Datei-Download",
          "Kauf- und Zahlungssystem mit manuellem Freigabe-Workflow und rabattierten Paket-Preisen",
          "JWT-basierte Multi-Rollen-Authentifizierung mit mehrstufiger Registrierung und Passwort-Reset",
          "Sessions/Events-Erweiterung als eigenständiges Plugin, mit vollständiger rollenbasierter Zugriffskontrolle für Lehrer, Studierende und Admins",
          "Multi-Tenant-Deployment-System mit Integrationsdokumentation, der auch ein Nicht-Entwickler von Anfang bis Ende folgen konnte",
        ],
        hard: [
          "<strong>Undokumentiertes, proprietäres Framework</strong> — bestehende Projekte nach Vorbildern durchsucht, danach per Trial-and-Error weitergemacht.",
          "<strong>Multi-Tenant-Plugin-Architektur</strong> — das gesamte Projekt als Plugin strukturiert, das in eine Basis-Seite eingebunden wird.",
          "<strong>Stille Konfigurationsfehler</strong> — die Checkliste markiert nun jeden Schritt, der still fehlschlägt, aber die Funktion bricht.",
        ],
        images: {
          enabled: true,
          items: [
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/1.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/2.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/3.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/4.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/5.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/6.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/7.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/8.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/9.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/10.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/11.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/12.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/13.png",
            "https://cdn.jsdelivr.net/gh/fares-boulahmi/projects-screenshots@main/whitelabel/14.png",
          ],
        },
        links: {
          enabled: true,
          items: [
            {
              label: "svtghdiri_live_demo",
              url: "https://svtghdiri.tn/p/home",
            },
            {
              label: "smart_academy_live_demo",
              url: "https://smart-academy.tn/p/home",
            },
            {
              label: "makeduc_live_demo",
              url: "https://makeduc.tn/p/home",
            },
            {
              label: "podiumeco_live_demo",
              url: "https://podiumeco.tn/p/home",
            },
            {
              label: "formaticacademy_live_demo",
              url: "https://www.formaticacademy.com/p/home",
            },
          ],
        },
        stack: [
          "internes Framework",
          "Vue.js 2",
          "Vuex",
          "Liquid",
          "Node.js",
          "MongoDB",
          "JWT",
          "Konnect API",
          "Tiptap",
          "SSE",
        ],
        note: "Live-Deployments: svtghdiri.tn, smart-academy.tn, makeduc.tn, podiumeco.tn, formaticacademy.com",
      },
    ],
  },
};

/* ---------------- skills (tech names stay in English) ---------------- */
const skillsData = [
  { name: "JavaScript (Node.js)", tag: "lang" },
  { name: "TypeScript", tag: "lang" },
  { name: "C++", tag: "lang" },
  { name: "Vue.js 2 / Vuex", tag: "lang" },
  { name: "React.js / TS", tag: "lang" },
  { name: "Express.js / TS", tag: "lang" },
  { name: "Tailwind CSS", tag: "lang" },
  { name: "Vuetify", tag: "lang" },
  { name: "Liquid templating", tag: "lang" },
  { name: "Tiptap editor", tag: "lang" },
  { name: "REST API design", tag: "data" },
  { name: "JWT & RBAC", tag: "data" },
  { name: "WebSocket systems", tag: "data" },
  { name: "Server-Sent Events", tag: "data" },
  { name: "MongoDB schema design", tag: "data" },
  { name: "Aggregation pipelines", tag: "data" },
  { name: "PDF generation", tag: "data" },
  { name: "SMTP / email", tag: "data" },
  { name: "Payment gateways (Konnect)", tag: "data" },
  { name: "Web scraping (Scrapy)", tag: "data" },
  { name: "Multi-tenant architecture", tag: "arch" },
  { name: "Framework reverse-engineering", tag: "arch" },
  { name: "Technical documentation", tag: "arch" },
  { name: "Data structures & algorithms", tag: "arch" },
  { name: "Multi-tenant architecture", tag: "arch" },
  { name: "Framework reverse-engineering", tag: "arch" },
  { name: "Technical documentation", tag: "arch" },
  { name: "Data structures & algorithms", tag: "arch" },
  { name: "Multi-tenant architecture", tag: "arch" },
  { name: "Framework reverse-engineering", tag: "arch" },
  { name: "Technical documentation", tag: "arch" },
  { name: "Data structures & algorithms", tag: "arch" },
];
function tagLabel(tag) {
  const t = T[currentLang].sk;
  return tag === "lang" ? t.tagLang : tag === "data" ? t.tagData : t.tagArch;
}
function makeColumn(elId, tagFilter, firstRender) {
  const el = document.getElementById(elId);
  // const subset = skillsData.filter((s) => s.tag === tagFilter);
  if (tagFilter === "all") {
    subset = [...skillsData].sort(() => Math.random() - 0.5);
  } else {
    subset = skillsData.filter((s) => s.tag === tagFilter);
  }
  const doubled = [...subset, ...subset];
  el.innerHTML = doubled
    .map(
      (s) =>
        `<div class="card skill-pill tag-${s.tag}"><span class="name">${s.name}</span><span class="tag">${tagLabel(s.tag)}</span></div>`,
    )
    .join("");
}

/* ---------------- lightbox ---------------- */
let lightboxImages = [];
let lightboxIndex = 0;
const lightboxEl = document.getElementById("lightbox");
const lightboxTrack = document.getElementById("lightboxTrack");

function renderLightboxTrack() {
  lightboxTrack.innerHTML = lightboxImages
    .map((src) => `<div class="lightbox-slide"><img src="${src}" alt=""></div>`)
    .join("");
  moveLightboxTo(lightboxIndex);
}
function moveLightboxTo(i) {
  lightboxIndex = (i + lightboxImages.length) % lightboxImages.length;
  lightboxTrack.style.transform = `translateX(-${lightboxIndex * 100}%)`;
}
function openLightbox(images, startIndex, title) {
  lightboxImages = images;
  lightboxIndex = startIndex >= 0 ? startIndex : 0;
  lightboxEl.setAttribute("aria-label", title || "");
  renderLightboxTrack();
  lightboxEl.classList.add("open");
  lightboxEl.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightboxEl.classList.remove("open");
  lightboxEl.setAttribute("aria-hidden", "true");
}
document
  .getElementById("lightboxClose")
  .addEventListener("click", closeLightbox);
document
  .getElementById("lightboxPrev")
  .addEventListener("click", () => moveLightboxTo(lightboxIndex - 1));
document
  .getElementById("lightboxNext")
  .addEventListener("click", () => moveLightboxTo(lightboxIndex + 1));
lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightboxEl.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") moveLightboxTo(lightboxIndex + 1);
  if (e.key === "ArrowLeft") moveLightboxTo(lightboxIndex - 1);
});

let firstExpRender = true;
function renderExperience() {
  const list = T[currentLang].projects;
  const labels = T[currentLang].exp;
  const expList = document.getElementById("expList");
  expList.innerHTML = list
    .map(
      (p, i) => `
    <div class="card exp-item${firstExpRender ? " reveal" : ""}" data-index="${i}">
      <div class="exp-head" role="button" tabindex="0" aria-expanded="false">
        <div><span class="exp-num">0${i + 1}_</span><div class="exp-title">${p.title}</div>
        <div class="exp-meta">${p.metas}</div>
        <div class="exp-hook">${p.hook}</div></div>
        <div class="exp-toggle">+</div>
      </div>
      <div class="exp-body"><div class="exp-body-inner">
        <h4>${labels.built}</h4><ul>${p.built.map((b) => `<li>${b}</li>`).join("")}</ul>
        <h4>${labels.hard}</h4><ul>${p.hard.map((h) => `<li>${h}</li>`).join("")}</ul>
        <h4>${labels.stack}</h4><div class="stack-row">${p.stack.map((s) => `<span class="stack-chip">${s}</span>`).join("")}</div>
         ${
           p.images && p.images.enabled && p.images.items.length
             ? `
        <h4>${labels.gallery}</h4>
        <div class="proj-gallery">
          <div class="gallery-track">
            ${[...p.images.items, ...p.images.items].map((src) => `<div class="gallery-item" data-project="${i}" data-src="${src}"><img src="${src}" alt="${p.title} screenshot" loading="lazy"></div>`).join("")}
          </div>
        </div>`
             : ""
         }
         ${
           p.links && p.links.enabled && p.links.items.length
             ? `
        <h4>${labels.linksLabel}</h4>
        <div class="proj-links-row">
          ${p.links.items.map((l) => `<a href="${l.url}" class="proj-link" data-url="${l.url}" target="_blank" rel="noopener"><span>${l.label}</span><span class="arrow">↗</span></a>`).join("")}
        </div>`
             : ""
         }
        ${p.note ? `<div class="exp-note">${p.note}</div>` : ""}
      </div></div>
    </div>`,
    )
    .join("");
  if (firstExpRender) {
    document
      .querySelectorAll("#expList .reveal")
      .forEach((el) => io.observe(el));
  }
  document.querySelectorAll(".exp-head").forEach((head) => {
    const toggle = () => {
      const item = head.closest(".exp-item");
      const body = item.querySelector(".exp-body");
      const isOpen = item.classList.contains("open");
      if (isOpen) {
        body.style.maxHeight = null;
        item.classList.remove("open");
        head.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
        head.setAttribute("aria-expanded", "true");
      }
    };
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        const project = list[Number(item.dataset.project)];
        const startIndex = project.images.items.indexOf(item.dataset.src);
        openLightbox(project.images.items, startIndex, project.title);
      });
    });
    document.querySelectorAll(".proj-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        if (link.classList.contains("navigating")) return;
        const url = link.dataset.url;
        link.classList.add("navigating");
        setTimeout(() => {
          window.open(url, "_blank", "noopener");
          link.classList.remove("navigating");
        }, 450); // matches the CSS sweep duration below
      });
    });
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}

function applyTextTranslations() {
  const dict = T[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n").split(".");
    let val = dict;
    for (const p of path) {
      val = val ? val[p] : undefined;
    }
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = currentLang;
}

function renderAll(firstRender) {
  applyTextTranslations();
  makeColumn("col1", "lang");
  makeColumn("col2", "data");
  makeColumn("col3", "arch");
  makeColumn("col4", "all");
  renderExperience();
  firstExpRender = false;
  const theme = document.documentElement.getAttribute("data-theme");
  applyThemeUI(theme);
}

const langBtn = document.getElementById("langBtn");
const langFlag = document.getElementById("langFlag");
const langLabel = document.getElementById("langLabel");
function applyLangUI() {
  if (currentLang === "en") {
    langFlag.textContent = "🇩🇪";
    langLabel.textContent = "DE";
  } else {
    langFlag.textContent = "🇬🇧";
    langLabel.textContent = "EN";
  }
}
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  applyLangUI();
  renderAll(false);
});

/* initial render */
applyLangUI();
renderAll(true);

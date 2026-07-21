export type Lang = "en" | "he";

export type AccentColor = "blue" | "green" | "purple";

export interface EcosystemItem {
  name: string;
  tag: string;
  description: string[];
  points?: string[];
  footnote?: string;
  cycle?: string;
  cycleLabel?: string;
  cta: string;
  href?: string;
  logo?: string;
  color: AccentColor;
}

export interface ResourceItem {
  name: string;
  tag: string;
  logo?: string;
}

export interface ContentShape {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    kicker: string;
    name: string;
    roles: string[];
    lead: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  intro: {
    kicker: string;
    paragraphs: string[];
  };
  video: {
    kicker: string;
    title: string;
    caption: string;
  };
  question: {
    kicker: string;
    title: string;
    question: string;
    paragraphs: string[];
    notChoose: string[];
    doChoose: string[];
    closing: string[];
  };
  ecosystem: {
    kicker: string;
    title: string;
    items: EcosystemItem[];
  };
  belief: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  resources: {
    kicker: string;
    title: string;
    intro: string;
    items: ResourceItem[];
    cta: string;
  };
  finalThought: {
    kicker: string;
    title: string;
    lead: string;
    question: string;
    closing: string[];
  };
  connect: {
    title: string;
    paragraphs: string[];
    cta: string;
    ctaSub: string;
  };
  contact: {
    title: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    whatsappHref: string;
    whatsapp: string;
    linkedin: string;
    linkedinHref: string;
    website: string;
    websiteHref: string;
  };
  footer: {
    brand: string;
    tagline: string;
    storyLink: string;
    quote: string;
    quoteAuthor: string;
    rights: string;
  };
}

export const content: Record<Lang, ContentShape> = {
  en: {
    meta: {
      title: "Itai Gelman — Founder & CEO, Gintex.ai",
      description:
        "Entrepreneur and business builder. Founder & CEO of Gintex.ai, exploring how trust, authority, and visibility shape the decisions markets make.",
    },
    nav: {
      links: [
        { label: "About", href: "#intro" },
        { label: "The Question", href: "#question" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Beliefs", href: "#belief" },
        { label: "Resources", href: "#resources" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Schedule a Meeting",
    },
    hero: {
      kicker: "Founder & CEO, Gintex.ai",
      name: "Itai Gelman",
      roles: ["Entrepreneur", "Business Builder", "Founder & CEO, Gintex.ai"],
      lead: "Hello, I'm Itai.",
      sub: "If you've arrived here, there's a good chance we've already met. I don't hand this card to many people, so before we talk about business, technology, artificial intelligence, or opportunities, I'd like to give you a brief introduction to the world I'm building.",
      ctaPrimary: "Schedule a Meeting",
      ctaSecondary: "Explore the Ecosystem",
      scrollHint: "Scroll to explore",
    },
    intro: {
      kicker: "Two Decades in the Making",
      paragraphs: [
        "For more than two decades, I have worked across operations, procurement, logistics, sales, business development, marketing, and technology.",
        "Throughout my career, I have helped establish, grow, and expand companies in Israel and internationally, opened new markets, built growth engines, led teams, and managed business activities across a wide range of industries.",
        "But more than anything, one question has always fascinated me.",
      ],
    },
    video: {
      kicker: "Personal Video",
      title: "Welcome to My World",
      caption: "Personal Video by Itai Gelman",
    },
    question: {
      kicker: "The Question",
      title: "The Question Behind Everything I Build",
      question: "Why do people choose one company over another?",
      paragraphs: [
        "Over the years, I have met outstanding companies that struggled to grow.",
        "I've seen average companies become market leaders.",
        "I've seen exceptional products fail.",
        "And I've seen brands become the obvious choice.",
        "Experience taught me that something deeper influences decisions.",
      ],
      notChoose: [
        "People don't choose based solely on price.",
        "They don't choose solely because of advertising.",
        "And they don't decide solely because of the product.",
      ],
      doChoose: [
        "When they trust.",
        "When they recognize authority.",
        "When they see consistency.",
        "When they feel confident they are making the right decision.",
      ],
      closing: [
        "The challenge is that most of these decisions are made long before the first meeting, conversation, or purchase.",
        "My effort to understand how those decisions are formed eventually evolved into research, methodologies, platforms, and ultimately an entire ecosystem.",
      ],
    },
    ecosystem: {
      kicker: "The Ecosystem",
      title: "One Question. An Entire Ecosystem.",
      items: [
        {
          name: "OnlinePerception.ai",
          tag: "Research & Insights",
          description: [
            "The research layer behind everything. Understanding how people, markets, and AI systems form perceptions, build trust, and make decisions.",
          ],
          cta: "Explore OnlinePerception.ai",
          href: "https://www.onlineperception.ai",
          logo: "/logos/onlineperception.png",
          color: "blue",
        },
        {
          name: "GEON",
          tag: "Measurement Framework — Not a Website",
          description: [
            "GEON isn't a platform you visit. It's a methodology designed to measure the six dimensions of influence that shape how markets perceive businesses.",
          ],
          points: ["Trust", "Visibility", "Authority", "Context", "Market Fit", "Consistency"],
          footnote: "The six factors that influence decisions long before a purchase takes place.",
          cta: "Learn the GEON Method",
          logo: "/logos/geon.png",
          color: "green",
        },
        {
          name: "GeoRepute.ai",
          tag: "Business Visibility Intelligence Platform",
          description: [
            "GeoRepute.ai was built on a simple realization: Most organizations measure outcomes. Very few truly understand what created them.",
            "The platform delivers intelligence layers, strategic analysis, diagnostics, and executive insights designed to help organizations understand:",
          ],
          points: [
            "How the market perceives them",
            "How competitors are positioned",
            "How AI engines recommend businesses",
            "Where opportunities are emerging",
            "Where risks are developing",
            "And which decisions are being made without the organization being considered",
          ],
          cycle: "Analyze → Decide → Publish → Measure → Improve",
          cycleLabel: "Decision Intelligence In Action",
          cta: "Explore GeoRepute.ai",
          href: "https://www.georepute.ai",
          logo: "/logos/georepute.png",
          color: "purple",
        },
        {
          name: "CopyUp.ai",
          tag: "Market Presence Platform",
          description: [
            "CopyUp.ai was built around a simple belief: Marketing should not be the primary job of a business. It should be part of the business.",
            "The platform enables organizations to transform knowledge, experience, and expertise into a consistent digital presence for months ahead.",
            "Instead of constantly thinking about what to publish, when to publish, and where to publish, businesses can build up to six months of market presence in about one hour of work.",
          ],
          points: ["Presence", "Trust", "Authority", "Consistency", "Memorability"],
          footnote:
            "Across multiple languages and digital platforms — in the places where customers are today, and in the sources AI engines rely on when recommending businesses, services, and professionals tomorrow.",
          cta: "Explore CopyUp.ai",
          href: "https://www.copyup.ai",
          logo: "/logos/copyup.png",
          color: "blue",
        },
      ],
    },
    belief: {
      kicker: "Philosophy",
      title: "What I Believe",
      paragraphs: [
        "I believe we are entering a new era.",
        "An era where information is everywhere. Answers are available within seconds. But trust still needs to be earned. Authority still needs to be built. And presence still needs to be maintained over time.",
        "The companies that will thrive in the years ahead will not necessarily be the ones with the best products.",
        "They will be the ones that better understand how markets think. How trust is built. And how decisions are made.",
        "That belief sits at the heart of everything I build.",
      ],
    },
    resources: {
      kicker: "Private Resources",
      title: "Private Resources",
      intro: "I've gathered a selection of materials for those who would like to explore further.",
      items: [
        { name: "Gintex.ai", tag: "Business Visibility Intelligence", logo: "/logos/gintex.png" },
        { name: "GeoRepute.ai", tag: "Decision Intelligence Platform", logo: "/logos/georepute.png" },
        { name: "GEON", tag: "Measurement Framework (Methodology)", logo: "/logos/geon.png" },
        { name: "CopyUp.ai", tag: "Market Presence Platform", logo: "/logos/copyup.png" },
        { name: "OnlinePerception.ai", tag: "Research & Insights", logo: "/logos/onlineperception.png" },
      ],
      cta: "Download Presentations & Resources",
    },
    finalThought: {
      kicker: "Final Thought",
      title: "One Final Thought",
      lead: "If I could leave you with only one question, it would be this:",
      question:
        "How many decisions are being made in your market every day without your business ever being considered?",
      closing: [
        "Most companies never ask that question.",
        "Those that do usually discover something important.",
      ],
    },
    connect: {
      title: "Let's Continue The Conversation",
      paragraphs: [
        "If something here sparked curiosity, interest, or a new perspective, I'd be happy to continue the conversation.",
        "Not necessarily about what I'm building.",
        "About what you're building. Your market. The challenges you see. And the opportunities that may still be invisible.",
      ],
      cta: "Schedule a Meeting",
      ctaSub: "Book a Meeting",
    },
    contact: {
      title: "Contact Information",
      name: "Itai Gelman",
      role: "Founder & CEO | Gintex.ai",
      email: "itai@gintex.ai",
      phone: "+972 55-680-0600",
      whatsappHref: "https://wa.me/972556800600",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      linkedinHref: "https://linkedin.com",
      website: "Gintex.ai",
      websiteHref: "https://gintex-ai.vercel.app",
    },
    footer: {
      brand: "Gintex.ai",
      tagline: "Business Visibility Intelligence",
      storyLink: "See The Story Behind The Story",
      quote:
        "Most people focus on outcomes. I've always been interested in understanding what creates them.",
      quoteAuthor: "Itai Gelman",
      rights: "All rights reserved.",
    },
  },
  he: {
    meta: {
      title: "איתי גלמן — מייסד ומנכ\"ל, Gintex.ai",
      description:
        "יזם ובונה עסקים. מייסד ומנכ\"ל Gintex.ai, חוקר כיצד אמון, סמכות ונראות מעצבים את ההחלטות שהשוק מקבל.",
    },
    nav: {
      links: [
        { label: "אודות", href: "#intro" },
        { label: "השאלה", href: "#question" },
        { label: "האקוסיסטם", href: "#ecosystem" },
        { label: "תפיסת עולם", href: "#belief" },
        { label: "משאבים", href: "#resources" },
        { label: "יצירת קשר", href: "#contact" },
      ],
      cta: "קביעת פגישה",
    },
    hero: {
      kicker: "מייסד ומנכ\"ל, Gintex.ai",
      name: "איתי גלמן",
      roles: ["יזם", "בונה עסקים", "מייסד ומנכ\"ל, Gintex.ai"],
      lead: "שלום, אני איתי.",
      sub: "אם הגעת לכאן, סביר להניח שכבר נפגשנו. אני לא מחלק את הכרטיס הזה להרבה אנשים, ולכן לפני שנדבר על עסקים, טכנולוגיה, בינה מלאכותית או הזדמנויות, אשמח לתת לך הצצה קצרה לעולם שאני בונה.",
      ctaPrimary: "קביעת פגישה",
      ctaSecondary: "גילוי האקוסיסטם",
      scrollHint: "גללו למטה",
    },
    intro: {
      kicker: "שני עשורים בדרך",
      paragraphs: [
        "במשך למעלה משני עשורים פעלתי בתחומי התפעול, הרכש, הלוגיסטיקה, המכירות, הפיתוח העסקי, השיווק והטכנולוגיה.",
        "לאורך הדרך הייתי שותף להקמה, לצמיחה ולהתרחבות של חברות בישראל ובעולם, פתחתי שווקים חדשים, בניתי מנועי צמיחה, הובלתי צוותים וניהלתי פעילות עסקית במגוון רחב של תעשיות.",
        "אך יותר מכל, שאלה אחת עניינה אותי תמיד.",
      ],
    },
    video: {
      kicker: "סרטון אישי",
      title: "ברוכים הבאים לעולם שלי",
      caption: "סרטון אישי מאת איתי גלמן",
    },
    question: {
      kicker: "השאלה",
      title: "השאלה שמאחורי כל מה שאני בונה",
      question: "למה אנשים בוחרים בחברה אחת על פני אחרת?",
      paragraphs: [
        "לאורך השנים פגשתי חברות מצוינות שהתקשו לצמוח.",
        "ראיתי חברות בינוניות שהפכו למובילות שוק.",
        "ראיתי מוצרים יוצאי דופן שנכשלו.",
        "וראיתי מותגים שהפכו לבחירה הטבעית של הלקוחות.",
        "הניסיון לימד אותי שמשהו עמוק יותר משפיע על החלטות.",
      ],
      notChoose: [
        "אנשים לא בוחרים רק בגלל מחיר.",
        "הם לא בוחרים רק בגלל פרסום.",
        "והם לא מחליטים רק בגלל המוצר.",
      ],
      doChoose: [
        "כשהם סומכים.",
        "כשהם מזהים סמכות.",
        "כשהם רואים עקביות.",
        "וכשהם מרגישים בטוחים שהם מקבלים את ההחלטה הנכונה.",
      ],
      closing: [
        "האתגר הוא שרוב ההחלטות האלו מתקבלות הרבה לפני הפגישה, השיחה או הרכישה הראשונה.",
        "הניסיון להבין כיצד נוצרות אותן החלטות הוביל אותי למסע שהפך עם השנים למחקר, למתודולוגיה, לפלטפורמות, ולבסוף לאקוסיסטם שלם.",
      ],
    },
    ecosystem: {
      kicker: "האקוסיסטם",
      title: "שאלה אחת. אקוסיסטם שלם.",
      items: [
        {
          name: "OnlinePerception.ai",
          tag: "מחקר ותובנות",
          description: [
            "שכבת המחקר שמאחורי הכול. הבנת הדרך שבה אנשים, שווקים ומנועי AI יוצרים תפיסות, בונים אמון ומקבלים החלטות.",
          ],
          cta: "לגלות את OnlinePerception.ai",
          href: "https://www.onlineperception.ai",
          logo: "/logos/onlineperception.png",
          color: "blue",
        },
        {
          name: "GEON",
          tag: "מתודולוגיית מדידה — לא אתר אינטרנט",
          description: [
            "GEON אינה פלטפורמה שנכנסים אליה, אלא מתודולוגיה למדידת ששת מרחבי ההשפעה שמעצבים את הדרך שבה השוק רואה עסקים.",
          ],
          points: ["אמון", "נראות", "סמכות", "הקשר", "התאמה לשוק", "עקביות"],
          footnote: "ששת הגורמים שמשפיעים על החלטות הרבה לפני שמתבצעת רכישה.",
          cta: "להכיר את שיטת GEON",
          logo: "/logos/geon.png",
          color: "green",
        },
        {
          name: "GeoRepute.ai",
          tag: "פלטפורמת בינת נראות עסקית",
          description: [
            "GeoRepute.ai נבנתה מתוך תובנה פשוטה: רוב הארגונים מודדים תוצאות. מעטים באמת מבינים מה יצר אותן.",
            "הפלטפורמה מספקת שכבות מודיעין, ניתוח אסטרטגי, אבחון ותובנות ניהוליות שנועדו לעזור לארגונים להבין:",
          ],
          points: [
            "איך השוק תופס אותם",
            "איך המתחרים ממוצבים",
            "איך מנועי AI ממליצים על עסקים",
            "היכן נוצרות הזדמנויות",
            "היכן מתפתחים סיכונים",
            "ואילו החלטות מתקבלות מבלי שהארגון נלקח בחשבון כלל",
          ],
          cycle: "ניתוח ← החלטה ← פרסום ← מדידה ← שיפור",
          cycleLabel: "בינת החלטות בפעולה",
          cta: "לגלות את GeoRepute.ai",
          href: "https://www.georepute.ai",
          logo: "/logos/georepute.png",
          color: "purple",
        },
        {
          name: "CopyUp.ai",
          tag: "פלטפורמת נוכחות בשוק",
          description: [
            "CopyUp.ai נבנתה מתוך אמונה פשוטה: שיווק לא צריך להיות העבודה המרכזית של העסק. הוא צריך להיות חלק מהעסק.",
            "הפלטפורמה מאפשרת לארגונים להפוך ידע, ניסיון ומומחיות לנוכחות דיגיטלית עקבית לאורך חודשים קדימה.",
            "במקום לחשוב כל יום מחדש מה לפרסם, מתי לפרסם ואיפה לפרסם, עסקים יכולים לבנות נוכחות של עד חצי שנה קדימה בכשעת עבודה אחת.",
          ],
          points: ["נוכחות", "אמון", "סמכות", "עקביות", "זכירות"],
          footnote:
            "במספר שפות ובמגוון פלטפורמות - במקומות שבהם הלקוחות נמצאים היום, ובמקורות שעליהם מסתמכים מנועי ה-AI כשהם ממליצים על עסקים, שירותים ואנשי מקצוע מחר.",
          cta: "לגלות את CopyUp.ai",
          href: "https://www.copyup.ai",
          logo: "/logos/copyup.png",
          color: "blue",
        },
      ],
    },
    belief: {
      kicker: "תפיסת עולם",
      title: "במה אני מאמין",
      paragraphs: [
        "אני מאמין שאנחנו נכנסים לעידן חדש.",
        "עידן שבו מידע נמצא בכל מקום. תשובות זמינות תוך שניות. אבל אמון עדיין צריך להיבנות. סמכות עדיין צריכה להיווצר. ונוכחות עדיין צריכה להישמר לאורך זמן.",
        "החברות שיצליחו בשנים הקרובות לא בהכרח יהיו אלו עם המוצר הטוב ביותר.",
        "הן יהיו אלו שמבינות טוב יותר איך השוק חושב, איך נבנה אמון, ואיך מתקבלות החלטות.",
        "האמונה הזאת נמצאת בלב כל מה שאני בונה.",
      ],
    },
    resources: {
      kicker: "משאבים פרטיים",
      title: "משאבים פרטיים",
      intro: "ריכזתי כאן מספר חומרים למי שרוצה להעמיק.",
      items: [
        { name: "Gintex.ai", tag: "בינת נראות עסקית", logo: "/logos/gintex.png" },
        { name: "GeoRepute.ai", tag: "פלטפורמת בינת החלטות", logo: "/logos/georepute.png" },
        { name: "GEON", tag: "מתודולוגיית מדידה (שיטה)", logo: "/logos/geon.png" },
        { name: "CopyUp.ai", tag: "פלטפורמת נוכחות בשוק", logo: "/logos/copyup.png" },
        { name: "OnlinePerception.ai", tag: "מחקר ותובנות", logo: "/logos/onlineperception.png" },
      ],
      cta: "הורדת מצגות וחומרים",
    },
    finalThought: {
      kicker: "מחשבה לסיום",
      title: "מחשבה אחת לסיום",
      lead: "אם יכולתי להשאיר אותך עם שאלה אחת בלבד, זו הייתה השאלה:",
      question:
        "כמה החלטות מתקבלות בשוק שלך מדי יום, מבלי שהעסק שלך נלקח בכלל בחשבון?",
      closing: [
        "רוב החברות אף פעם לא שואלות את השאלה הזאת.",
        "אלו שכן, בדרך כלל מגלות משהו חשוב.",
      ],
    },
    connect: {
      title: "בואו נמשיך את השיחה",
      paragraphs: [
        "אם משהו כאן עורר סקרנות, עניין או מחשבה חדשה, אשמח להמשיך את השיחה.",
        "לא בהכרח על מה שאני בונה.",
        "אלא על מה שאתה בונה. על השוק שלך. על האתגרים שאתה רואה. ועל ההזדמנויות שאולי עדיין אינן גלויות לעין.",
      ],
      cta: "קביעת פגישה",
      ctaSub: "קבעו פגישה",
    },
    contact: {
      title: "פרטי קשר",
      name: "איתי גלמן",
      role: "מייסד ומנכ\"ל | Gintex.ai",
      email: "itai@gintex.ai",
      phone: "+972 55-680-0600",
      whatsappHref: "https://wa.me/972556800600",
      whatsapp: "וואטסאפ",
      linkedin: "לינקדאין",
      linkedinHref: "https://linkedin.com",
      website: "Gintex.ai",
      websiteHref: "https://gintex-ai.vercel.app",
    },
    footer: {
      brand: "Gintex.ai",
      tagline: "בינת נראות עסקית",
      storyLink: "הסיפור שמאחורי הסיפור",
      quote: "רוב האנשים מתמקדים בתוצאה. אותי תמיד עניין להבין מה יוצר אותה.",
      quoteAuthor: "איתי גלמן",
      rights: "כל הזכויות שמורות.",
    },
  },
};

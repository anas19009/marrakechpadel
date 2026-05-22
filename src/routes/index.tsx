import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-padel.jpg";
import villaSocial from "@/assets/villa-social.jpg";
import villaLifestyle from "@/assets/villa-lifestyle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Padel Retreats à Marrakech — Sport, Culture & Bien-être" },
      { name: "description", content: "Retraites de padel de luxe à Marrakech : coaching certifié, hébergement 5★, gastronomie et expériences culturelles exclusives." },
      { property: "og:title", content: "Padel Retreats à Marrakech" },
      { property: "og:description", content: "Sport, culture et bien-être sous le soleil marocain." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Lang = "fr" | "en";

const T = {
  fr: {
    nav: "Marrakech",
    book: "Réserver",
    heroEyebrow: "Là où le jeu rencontre la sérénité marocaine",
    heroTitle1: "Padel",
    heroTitle2: "Retreats",
    heroTitle3: "à Marrakech",
    heroSub: "Sport, culture et bien-être sous le soleil marocain. Une parenthèse signature pour joueurs exigeants.",
    discover: "Découvrir les retraites",
    introEyebrow: "L'expérience",
    introTitle1: "Une",
    introTitleItalic: "parenthèse",
    introTitle2: "de jeu, de soleil et de raffinement.",
    introBody: "Deux formats signature, pensés pour les amoureux du padel comme pour les esthètes du voyage. Chaque retraite associe heures de coaching, hébergement d'exception et immersion culturelle au cœur de Marrakech.",
    r1Eyebrow: "Édition UK · 4 jours / 3 nuits",
    r1Title: "Social",
    r1Italic: "Championship",
    r1Duration: "Villa Palmeraie privatisée",
    r1Price: "À partir de 2 000 € / personne (base 12)",
    r1Inc: "12 h de coaching padel, tournoi Pro-Am avec joueurs professionnels, hébergement 5★, tous repas signés par un chef privé, spa & hammam, excursion quad dans le désert.",
    r2Eyebrow: "Édition FR · 4 jours / 3 nuits",
    r2Title: "Art de Vivre",
    r2Italic: "& Performance",
    r2Duration: "Suites 5★ Fairmont Royal Palm",
    r2Price: "À partir de 2 300 € / personne (base 12)",
    r2Inc: "Coaching intensif avec analyse vidéo, 3 h de padel par jour, détente au spa, hammam traditionnel, visites exclusives (Jardin Majorelle, Musée YSL), haute gastronomie.",
    reserve: "Réserver maintenant",
    featEyebrow: "Caractéristiques",
    featTitle1: "Ce qui rend nos retraites",
    featItalic: "singulières",
    features: [
      "Encadrement par coachs certifiés FFT / LTA et parcours adapté à votre niveau",
      "Hébergement 4–5★ et transports privés inclus",
      "Expériences culturelles haut de gamme : désert d'Agafay, Médina, gastronomie",
      "Formule tout-compris : repas, boissons, excursions, photographies professionnelles",
      "Groupes exclusifs (12 à 16 joueurs) avec suivi personnalisé",
    ],
    tableEyebrow: "Comparatif",
    tableTitle1: "Prestations",
    tableItalic: "incluses",
    tableHead: ["Prestations", "Social Championship", "Art de Vivre & Perf."],
    tableRows: [
      ["Coaching padel", "12 h — coachs anglophones + tournoi", "12 h — coachs francophones certifiés"],
      ["Hébergement", "Villa de luxe privatisée", "Suites Fairmont Royal Palm"],
      ["Restauration", "Chef privé & tous repas", "Restaurants 5★ & déjeuners gastronomiques"],
      ["Bien-être", "Spa villa, hammam", "Spa signature, hammam traditionnel"],
      ["Transferts", "Chauffeur privé & voiture 24 h", "Transferts aéroport & excursions privées"],
      ["Activités", "Dîner dans le désert, photographe drone", "Excursions culturelles, coach vidéo individuel"],
    ],
    priceEyebrow: "Tarifs & réservation",
    priceTitle1: "À partir de",
    priceItalic: "1 800 €",
    priceTitle2: "par personne",
    priceBody: "Prix variable selon date et options. Contactez-nous pour un devis personnalisé.",
    contact: "Contactez-nous",
    formEyebrow: "B2B",
    formTitle1: "Demande de",
    formItalic: "réservation",
    formIntro: "Pour les clubs, comités d'entreprise et conciergeries : écrivez-nous ou remplissez le formulaire ci-dessous.",
    fName: "Nom",
    fEmail: "Courriel",
    fPhone: "Téléphone",
    fCountry: "Pays",
    fCountryPh: "Sélectionnez votre pays",
    fOffer: "Type d'offre",
    fOfferPh: "Sélectionnez une offre",
    offers: [
      { v: "social", l: "Social Championship (UK)" },
      { v: "lifestyle", l: "Art de Vivre & Performance (FR)" },
      { v: "custom", l: "Offre sur mesure" },
      { v: "b2b", l: "Groupe / B2B" },
    ],
    fLevel: "Niveau padel (FFT / LTA / Playtomic)",
    fLevelPh: "Classement ou niveau de jeu",
    fGdpr: "J'accepte que mes données soient utilisées pour la gestion de ma demande (RGPD).",
    send: "Envoyer",
    footerRights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    legal: "Mentions légales",
    waLabel: "WhatsApp",
    waMsg: "Bonjour, je souhaite en savoir plus sur vos retraites de padel à Marrakech.",
  },
  en: {
    nav: "Marrakech",
    book: "Book",
    heroEyebrow: "Where spirited play meets moroccan calm",
    heroTitle1: "Padel",
    heroTitle2: "Retreats",
    heroTitle3: "in Marrakech",
    heroSub: "Sport, culture and wellness under the Moroccan sun. A signature escape for discerning players.",
    discover: "Discover the retreats",
    introEyebrow: "The experience",
    introTitle1: "An",
    introTitleItalic: "interlude",
    introTitle2: "of play, sun and refinement.",
    introBody: "Two signature formats, crafted for padel lovers and travel aesthetes alike. Each retreat blends coaching hours, exceptional stays and cultural immersion in the heart of Marrakech.",
    r1Eyebrow: "UK Edition · 4 days / 3 nights",
    r1Title: "Social",
    r1Italic: "Championship",
    r1Duration: "Private Palmeraie villa",
    r1Price: "From €2,000 / person (base 12)",
    r1Inc: "12 h of padel coaching, Pro-Am tournament with professional players, 5★ stay, all meals by a private chef, spa & hammam, desert quad excursion.",
    r2Eyebrow: "FR Edition · 4 days / 3 nights",
    r2Title: "Art of Living",
    r2Italic: "& Performance",
    r2Duration: "5★ Suites at Fairmont Royal Palm",
    r2Price: "From €2,300 / person (base 12)",
    r2Inc: "Intensive coaching with video analysis, 3 h padel daily, spa relaxation, traditional hammam, exclusive visits (Jardin Majorelle, YSL Museum), fine dining.",
    reserve: "Book now",
    featEyebrow: "Highlights",
    featTitle1: "What makes our retreats",
    featItalic: "singular",
    features: [
      "FFT / LTA certified coaching, programme tailored to your level",
      "4–5★ accommodation and private transfers included",
      "High-end cultural experiences: Agafay desert, Medina, gastronomy",
      "All-inclusive: meals, drinks, excursions, professional photography",
      "Exclusive groups (12 to 16 players) with personalised follow-up",
    ],
    tableEyebrow: "Comparison",
    tableTitle1: "What's",
    tableItalic: "included",
    tableHead: ["Services", "Social Championship", "Art of Living & Perf."],
    tableRows: [
      ["Padel coaching", "12 h — English-speaking coaches + tournament", "12 h — certified French-speaking coaches"],
      ["Accommodation", "Private luxury villa", "Fairmont Royal Palm suites"],
      ["Dining", "Private chef & all meals", "5★ restaurants & gourmet lunches"],
      ["Wellness", "Villa spa, hammam", "Signature spa, traditional hammam"],
      ["Transfers", "24 h private driver & car", "Airport transfers & private excursions"],
      ["Activities", "Desert dinner, drone photographer", "Cultural excursions, personal video coach"],
    ],
    priceEyebrow: "Pricing & booking",
    priceTitle1: "From",
    priceItalic: "€1,800",
    priceTitle2: "per person",
    priceBody: "Price varies by date and options. Contact us for a personalised quote.",
    contact: "Contact us",
    formEyebrow: "B2B",
    formTitle1: "Booking",
    formItalic: "enquiry",
    formIntro: "For clubs, corporate teams and concierges: write to us or fill in the form below.",
    fName: "Name",
    fEmail: "Email",
    fPhone: "Phone",
    fCountry: "Country",
    fCountryPh: "Select your country",
    fOffer: "Offer type",
    fOfferPh: "Select an offer",
    offers: [
      { v: "social", l: "Social Championship (UK)" },
      { v: "lifestyle", l: "Art of Living & Performance (FR)" },
      { v: "custom", l: "Bespoke offer" },
      { v: "b2b", l: "Group / B2B" },
    ],
    fLevel: "Padel level (FFT / LTA / Playtomic)",
    fLevelPh: "Ranking or playing level",
    fGdpr: "I agree my data may be used to handle my request (GDPR).",
    send: "Send",
    footerRights: "All rights reserved.",
    privacy: "Privacy policy",
    legal: "Legal notice",
    waLabel: "WhatsApp",
    waMsg: "Hello, I'd like to know more about your padel retreats in Marrakech.",
  },
} as const;

const WA_NUMBER = "212600000000";

function LangToggle({ lang, setLang, tone = "light" }: { lang: Lang; setLang: (l: Lang) => void; tone?: "light" | "dark" }) {
  const base = tone === "light" ? "text-primary-foreground/80 border-primary-foreground/30" : "text-foreground/70 border-border";
  const active = tone === "light" ? "text-primary-foreground border-primary-foreground" : "text-burgundy border-burgundy";
  return (
    <div className={`flex items-center gap-1 eyebrow text-[0.65rem]`}>
      <button onClick={() => setLang("fr")} className={`px-2 py-1 border-b ${lang === "fr" ? active : base} transition-colors`}>FR</button>
      <span className={tone === "light" ? "text-primary-foreground/40" : "text-border"}>/</span>
      <button onClick={() => setLang("en")} className={`px-2 py-1 border-b ${lang === "en" ? active : base} transition-colors`}>EN</button>
    </div>
  );
}

function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = T[lang];
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-6 text-primary-foreground">
      <div className="flex items-center gap-6">
        <div className="eyebrow hidden sm:block">{t.nav}</div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
      <div className="text-center font-display text-xl md:text-2xl tracking-wide">
        Padel <span className="italic">Retreats</span>
      </div>
      <a href="#book" className="hidden md:inline-block bg-burgundy hover:bg-burgundy-dark transition-colors px-6 py-3 text-primary-foreground eyebrow">
        {t.book}
      </a>
    </nav>
  );
}

function WhatsAppButton({ lang }: { lang: Lang }) {
  const t = T[lang];
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t.waMsg)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.waLabel}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg pl-4 pr-5 py-3 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.696 4.605 1.892 6.475L4 29l7.74-1.86A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.8c-1.86 0-3.59-.5-5.08-1.36l-.364-.21-4.594 1.104 1.13-4.475-.237-.378A9.78 9.78 0 0 1 6.2 15c0-5.404 4.396-9.8 9.8-9.8 5.405 0 9.8 4.396 9.8 9.8 0 5.405-4.395 9.8-9.8 9.8Zm5.39-7.34c-.295-.148-1.748-.862-2.018-.96-.27-.099-.467-.148-.664.149-.197.295-.762.96-.934 1.158-.172.197-.345.222-.64.074-.295-.148-1.246-.46-2.374-1.467-.878-.783-1.47-1.748-1.643-2.043-.172-.296-.018-.456.13-.604.133-.132.296-.345.444-.517.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.074-.148-.664-1.602-.91-2.193-.24-.578-.484-.5-.664-.51l-.566-.01c-.197 0-.518.074-.79.37-.27.295-1.034 1.01-1.034 2.464 0 1.454 1.058 2.86 1.205 3.057.148.197 2.082 3.18 5.045 4.46.706.305 1.256.487 1.685.624.708.225 1.353.193 1.864.117.568-.085 1.748-.715 1.995-1.405.247-.69.247-1.282.173-1.405-.074-.123-.27-.197-.566-.346Z"/>
      </svg>
      <span className="eyebrow text-[0.7rem]">{t.waLabel}</span>
    </a>
  );
}

type RetreatProps = {
  eyebrow: string; title: string; italic: string; duration: string; price: string; includes: string;
  img: string; reverse?: boolean; cta: string;
};

function Retreat({ eyebrow, title, italic, duration, price, includes, img, reverse, cta }: RetreatProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div className="overflow-hidden">
        <img src={img} alt={title} width={1200} height={800} loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover" />
      </div>
      <div>
        <p className="eyebrow text-burgundy">{eyebrow}</p>
        <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
          {title} <span className="italic">{italic}</span>
        </h3>
        <p className="mt-4 text-muted-foreground">{duration}</p>
        <div className="my-8 h-px w-16 bg-border" />
        <p className="font-display italic text-2xl text-burgundy">{price}</p>
        <p className="mt-6 leading-relaxed text-foreground/80">{includes}</p>
        <a href="#book" className="inline-block mt-8 bg-burgundy hover:bg-burgundy-dark transition-colors px-8 py-4 text-primary-foreground eyebrow">
          {cta}
        </a>
      </div>
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = T[lang];

  return (
    <div className="bg-background text-foreground">
      <header className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img src={heroImg} alt="Padel" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <Nav lang={lang} setLang={setLang} />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-primary-foreground max-w-3xl">
            <p className="eyebrow mb-6 text-primary-foreground/90">{t.heroEyebrow}</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              <span className="italic">{t.heroTitle1}</span> {t.heroTitle2}<br />{t.heroTitle3}
            </h1>
            <p className="mt-8 font-light text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto">{t.heroSub}</p>
            <a href="#retreats" className="inline-block mt-10 border border-primary-foreground/80 hover:bg-primary-foreground hover:text-ink transition-colors px-8 py-4 eyebrow">
              {t.discover}
            </a>
          </div>
        </div>
      </header>

      <section className="py-24 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow text-burgundy">{t.introEyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            {t.introTitle1} <span className="italic">{t.introTitleItalic}</span> {t.introTitle2}
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed">{t.introBody}</p>
        </div>
      </section>

      <section id="retreats" className="px-6 md:px-12 pb-24 md:pb-32 space-y-24 md:space-y-32 max-w-7xl mx-auto">
        <Retreat eyebrow={t.r1Eyebrow} title={t.r1Title} italic={t.r1Italic} duration={t.r1Duration} price={t.r1Price} includes={t.r1Inc} img={villaSocial} cta={t.reserve} />
        <Retreat eyebrow={t.r2Eyebrow} title={t.r2Title} italic={t.r2Italic} duration={t.r2Duration} price={t.r2Price} includes={t.r2Inc} img={villaLifestyle} cta={t.reserve} reverse />
      </section>

      <section className="bg-secondary py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.featEyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            {t.featTitle1} <span className="italic">{t.featItalic}</span>
          </h2>
        </div>
        <ul className="mt-16 max-w-3xl mx-auto divide-y divide-border">
          {t.features.map((f) => (
            <li key={f} className="flex items-start gap-6 py-6">
              <span className="font-display italic text-2xl text-burgundy leading-none mt-1">✦</span>
              <span className="text-foreground/80 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <p className="eyebrow text-burgundy">{t.tableEyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{t.tableTitle1} <span className="italic">{t.tableItalic}</span></h2>
        </div>
        <div className="mt-14 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-y border-border">
                <th className="py-5 pr-4 eyebrow text-muted-foreground font-normal">{t.tableHead[0]}</th>
                <th className="py-5 px-4 font-display italic text-xl text-burgundy">{t.tableHead[1]}</th>
                <th className="py-5 px-4 font-display italic text-xl text-burgundy">{t.tableHead[2]}</th>
              </tr>
            </thead>
            <tbody>
              {t.tableRows.map(([a, b, c]) => (
                <tr key={a} className="border-b border-border/60 align-top">
                  <td className="py-5 pr-4 font-medium">{a}</td>
                  <td className="py-5 px-4 text-foreground/75">{b}</td>
                  <td className="py-5 px-4 text-foreground/75">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-burgundy text-primary-foreground py-24 md:py-32 px-6 text-center">
        <p className="eyebrow text-primary-foreground/80">{t.priceEyebrow}</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">
          {t.priceTitle1} <span className="italic">{t.priceItalic}</span><br />{t.priceTitle2}
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-primary-foreground/85">{t.priceBody}</p>
        <a href="mailto:contact@padelretreat.com" className="inline-block mt-10 bg-primary-foreground text-burgundy hover:bg-primary-foreground/90 transition-colors px-10 py-4 eyebrow">
          {t.contact}
        </a>
      </section>

      <section id="book" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="eyebrow text-burgundy">{t.formEyebrow}</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">{t.formTitle1} <span className="italic">{t.formItalic}</span></h2>
            <p className="mt-6 text-foreground/75">{t.formIntro}</p>
          </div>

          <form className="mt-14 grid gap-6" method="post">
            <Field label={t.fName} id="name"><input id="name" name="name" required className="field" /></Field>
            <Field label={t.fEmail} id="email"><input id="email" type="email" name="email" required className="field" /></Field>
            <Field label={t.fPhone} id="phone"><input id="phone" type="tel" name="phone" className="field" /></Field>
            <Field label={t.fCountry} id="country">
              <select id="country" name="country" required className="field">
                <option value="">{t.fCountryPh}</option>
                <option value="FR">France</option>
                <option value="UK">United Kingdom</option>
                <option value="BE">Belgium</option>
                <option value="CH">Switzerland</option>
                <option value="OTHER">Other</option>
              </select>
            </Field>
            <Field label={t.fOffer} id="offer">
              <select id="offer" name="offer" required className="field">
                <option value="">{t.fOfferPh}</option>
                {t.offers.map((o) => (
                  <option key={o.v} value={o.v}>{o.l}</option>
                ))}
              </select>
            </Field>
            <Field label={t.fLevel} id="level"><input id="level" name="level" placeholder={t.fLevelPh} className="field" /></Field>
            <label className="flex items-start gap-3 text-sm text-foreground/75">
              <input type="checkbox" required className="mt-1" />
              <span>{t.fGdpr}</span>
            </label>
            <button type="submit" className="bg-burgundy hover:bg-burgundy-dark transition-colors text-primary-foreground py-4 eyebrow">
              {t.send}
            </button>
          </form>
        </div>

        <style>{`
          .field { width: 100%; padding: 0.85rem 1rem; background: transparent; border: 1px solid var(--border); border-radius: 2px; font-family: var(--font-sans); color: var(--ink); }
          .field:focus { outline: none; border-color: var(--burgundy); }
        `}</style>
      </section>

      <footer className="bg-ink text-primary-foreground/80 py-10 px-6 text-center text-sm">
        <p className="font-display text-xl text-primary-foreground">Marrakech <span className="italic">Padel</span> Retreats</p>
        <p className="mt-4">© 2026 — {t.footerRights} <a href="#" className="underline-offset-4 hover:underline">{t.privacy}</a> · <a href="#" className="underline-offset-4 hover:underline">{t.legal}</a></p>
      </footer>

      <WhatsAppButton lang={lang} />
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-muted-foreground block mb-3">{label}</label>
      {children}
    </div>
  );
}

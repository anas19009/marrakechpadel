import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-sunrise.jpg";
import villaSocial from "@/assets/villa-social.jpg";
import villaLifestyle from "@/assets/villa-lifestyle.jpg";
import villaSilence from "@/assets/villa-silence.jpg";
import slowMoment from "@/assets/slow-moment.jpg";
import desertLife from "@/assets/desert-life.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Padel Retreats — Marrakech" },
      { name: "description", content: "Padel, silence et lumière marocaine. Retraites confidentielles à Marrakech, en petits groupes." },
      { property: "og:title", content: "Padel Retreats — Marrakech" },
      { property: "og:description", content: "Padel, silence et lumière marocaine." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/src/assets/hero-sunrise.jpg" },
    ],
  }),
  component: Index,
});

type Lang = "fr" | "en";

const T = {
  fr: {
    nav: "Marrakech",
    book: "Réserver",
    heroEyebrow: "Padel · Marrakech",
    heroTitle1: "Jouer",
    heroTitleItalic: "lentement.",
    heroTitle2: "Vivre intensément.",
    heroSub: "Une retraite. Quelques joueurs. La lumière du Maroc.",
    discover: "Découvrir",

    expEyebrow: "L'expérience",
    expTitle1: "Un",
    expItalic: "silence",
    expTitle2: "entre deux échanges.",
    expBody: "Le padel comme prétexte. Le Maroc comme décor. Tout le reste : pensé pour qu'on l'oublie.",

    rhythmEyebrow: "Le rythme du séjour",
    rhythmTitle1: "Trois",
    rhythmItalic: "temps",
    rhythmTitle2: "par jour.",
    rhythms: [
      { k: "Matin", v: "Court au lever du soleil. Coaching, deux heures, sans bruit." },
      { k: "Après-midi", v: "Hammam, sieste, thé. Le corps se repose." },
      { k: "Soir", v: "Dîner privé. Médina, désert, ou silence." },
    ],

    dayEyebrow: "Une journée type",
    dayTitle1: "Du",
    dayItalic: "lever",
    dayTitle2: "au feu de camp.",
    day: [
      { h: "07:00", t: "Court — lumière dorée, coaching." },
      { h: "10:00", t: "Petit-déjeuner sous les oliviers." },
      { h: "13:00", t: "Déjeuner du chef, repos à la villa." },
      { h: "16:00", t: "Spa, hammam ou Médina." },
      { h: "20:00", t: "Dîner — désert ou riad." },
    ],

    r1Eyebrow: "Édition UK · 4 jours",
    r1Title: "Social",
    r1Italic: "Championship",
    r1Duration: "Villa privatisée · Palmeraie",
    r1Price: "Dès 2 000 € / personne",
    r1Inc: "Coaching anglophone, tournoi Pro-Am, chef privé, hammam, dîner dans le désert.",
    r2Eyebrow: "Édition FR · 4 jours",
    r2Title: "Art de Vivre",
    r2Italic: "& Performance",
    r2Duration: "Suites 5★ · Fairmont Royal Palm",
    r2Price: "Dès 2 300 € / personne",
    r2Inc: "Coaching francophone, analyse vidéo, gastronomie, Jardin Majorelle, Musée YSL.",
    reserve: "Réserver",

    trustEyebrow: "L'équipe",
    trustTitle1: "Des",
    trustItalic: "visages",
    trustTitle2: "que vous reconnaîtrez.",
    trustBody: "Coachs certifiés FFT et LTA, partenaires de clubs en France et au Royaume-Uni. Groupes limités à 12 joueurs.",
    coaches: [
      { name: "Antoine", role: "Coach FFT · Paris" },
      { name: "Sofia", role: "Coach LTA · Londres" },
      { name: "Mehdi", role: "Coach résident · Marrakech" },
    ],
    partnersLabel: "Clubs partenaires",
    partners: ["All In Padel — Paris", "Padel4all — Londres", "Royal Padel Club — Marrakech", "La Cala — Lyon"],
    limited: "Groupes limités · 12 joueurs maximum",

    priceEyebrow: "Options d'accès",
    priceTitle1: "Trois manières",
    priceItalic: "d'entrer",
    priceTitle2: "dans la retraite.",
    accessOptions: [
      { tag: "Individuel", price: "Dès 1 800 €", desc: "Une place dans la prochaine retraite ouverte." },
      { tag: "Duo", price: "Dès 3 400 €", desc: "Deux joueurs, même chambre, même court." },
      { tag: "Privatisation", price: "Sur devis", desc: "Votre groupe, votre villa, vos dates." },
    ],
    contact: "Demander une place",

    formEyebrow: "Réservation",
    formTitle1: "Écrivez-nous",
    formItalic: "directement.",
    formIntro: "Nous répondons sous 24 h.",
    fName: "Nom",
    fEmail: "Courriel",
    fPhone: "Téléphone",
    fCountry: "Pays",
    fCountryPh: "Sélectionnez votre pays",
    fOffer: "Type d'accès",
    fOfferPh: "Sélectionnez une option",
    offers: [
      { v: "individual", l: "Place individuelle" },
      { v: "duo", l: "Duo" },
      { v: "private", l: "Privatisation" },
      { v: "b2b", l: "Club / B2B" },
    ],
    fLevel: "Niveau padel",
    fLevelPh: "Classement ou niveau",
    fGdpr: "J'accepte que mes données soient utilisées pour ma demande (RGPD).",
    send: "Envoyer",
    footerRights: "Tous droits réservés.",
    privacy: "Confidentialité",
    legal: "Mentions légales",
    waLabel: "WhatsApp",
    waMsg: "Bonjour, je souhaite en savoir plus sur vos retraites de padel à Marrakech.",
  },
  en: {
    nav: "Marrakech",
    book: "Book",
    heroEyebrow: "Padel · Marrakech",
    heroTitle1: "Play",
    heroTitleItalic: "slowly.",
    heroTitle2: "Live fully.",
    heroSub: "One retreat. A few players. The light of Morocco.",
    discover: "Discover",

    expEyebrow: "The experience",
    expTitle1: "A",
    expItalic: "silence",
    expTitle2: "between two rallies.",
    expBody: "Padel as the pretext. Morocco as the setting. Everything else: designed to be forgotten.",

    rhythmEyebrow: "The rhythm of the stay",
    rhythmTitle1: "Three",
    rhythmItalic: "moments",
    rhythmTitle2: "a day.",
    rhythms: [
      { k: "Morning", v: "Court at sunrise. Coaching, two hours, no noise." },
      { k: "Afternoon", v: "Hammam, nap, mint tea. The body rests." },
      { k: "Evening", v: "Private dinner. Medina, desert, or silence." },
    ],

    dayEyebrow: "A typical day",
    dayTitle1: "From",
    dayItalic: "sunrise",
    dayTitle2: "to the fire.",
    day: [
      { h: "07:00", t: "Court — golden light, coaching." },
      { h: "10:00", t: "Breakfast under the olive trees." },
      { h: "13:00", t: "Chef's lunch, rest at the villa." },
      { h: "16:00", t: "Spa, hammam or Medina." },
      { h: "20:00", t: "Dinner — desert or riad." },
    ],

    r1Eyebrow: "UK Edition · 4 days",
    r1Title: "Social",
    r1Italic: "Championship",
    r1Duration: "Private villa · Palmeraie",
    r1Price: "From €2,000 / person",
    r1Inc: "English-speaking coaching, Pro-Am tournament, private chef, hammam, desert dinner.",
    r2Eyebrow: "FR Edition · 4 days",
    r2Title: "Art of Living",
    r2Italic: "& Performance",
    r2Duration: "5★ Suites · Fairmont Royal Palm",
    r2Price: "From €2,300 / person",
    r2Inc: "French-speaking coaching, video analysis, fine dining, Majorelle Garden, YSL Museum.",
    reserve: "Book",

    trustEyebrow: "The team",
    trustTitle1: "Faces",
    trustItalic: "you'll",
    trustTitle2: "recognise.",
    trustBody: "FFT and LTA certified coaches. Partner clubs in France and the United Kingdom. Groups limited to 12 players.",
    coaches: [
      { name: "Antoine", role: "FFT Coach · Paris" },
      { name: "Sofia", role: "LTA Coach · London" },
      { name: "Mehdi", role: "Resident coach · Marrakech" },
    ],
    partnersLabel: "Partner clubs",
    partners: ["All In Padel — Paris", "Padel4all — London", "Royal Padel Club — Marrakech", "La Cala — Lyon"],
    limited: "Limited groups · 12 players maximum",

    priceEyebrow: "Access options",
    priceTitle1: "Three ways",
    priceItalic: "to enter",
    priceTitle2: "the retreat.",
    accessOptions: [
      { tag: "Single", price: "From €1,800", desc: "One seat in the next open retreat." },
      { tag: "Duo", price: "From €3,400", desc: "Two players, same room, same court." },
      { tag: "Private", price: "On request", desc: "Your group, your villa, your dates." },
    ],
    contact: "Request a seat",

    formEyebrow: "Booking",
    formTitle1: "Write to us",
    formItalic: "directly.",
    formIntro: "We reply within 24 h.",
    fName: "Name",
    fEmail: "Email",
    fPhone: "Phone",
    fCountry: "Country",
    fCountryPh: "Select your country",
    fOffer: "Access type",
    fOfferPh: "Select an option",
    offers: [
      { v: "individual", l: "Single seat" },
      { v: "duo", l: "Duo" },
      { v: "private", l: "Private retreat" },
      { v: "b2b", l: "Club / B2B" },
    ],
    fLevel: "Padel level",
    fLevelPh: "Ranking or level",
    fGdpr: "I agree my data may be used to handle my request (GDPR).",
    send: "Send",
    footerRights: "All rights reserved.",
    privacy: "Privacy",
    legal: "Legal",
    waLabel: "WhatsApp",
    waMsg: "Hello, I'd like to know more about your padel retreats in Marrakech.",
  },
} as const;

const WA_NUMBER = "212600000000";

function LangToggle({ lang, setLang, tone = "light" }: { lang: Lang; setLang: (l: Lang) => void; tone?: "light" | "dark" }) {
  const base = tone === "light" ? "text-primary-foreground/80 border-primary-foreground/30" : "text-foreground/70 border-border";
  const active = tone === "light" ? "text-primary-foreground border-primary-foreground" : "text-burgundy border-burgundy";
  return (
    <div className="flex items-center gap-1 eyebrow text-[0.65rem]">
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
      <a href="#book" className="hidden md:inline-block border border-primary-foreground/60 hover:bg-primary-foreground hover:text-ink transition-colors px-5 py-2.5 text-primary-foreground eyebrow text-[0.7rem]">
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
  const coachImgs = [coach1, coach2, coach3];

  return (
    <div className="bg-background text-foreground">
      {/* HERO — minimal, emotional */}
      <header className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img src={heroImg} alt="Padel court at sunrise in Marrakech" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/70" />
        <Nav lang={lang} setLang={setLang} />
        <div className="relative z-10 flex h-full items-end md:items-center justify-center md:justify-start px-6 md:px-16 pb-20 md:pb-0">
          <div className="text-primary-foreground max-w-xl">
            <p className="eyebrow mb-6 text-primary-foreground/80">{t.heroEyebrow}</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              {t.heroTitle1} <span className="italic">{t.heroTitleItalic}</span><br />{t.heroTitle2}
            </h1>
            <p className="mt-8 font-light text-base md:text-lg text-primary-foreground/85 max-w-md">{t.heroSub}</p>
            <a href="#experience" className="inline-block mt-10 border-b border-primary-foreground/80 pb-1 eyebrow hover:text-primary-foreground/70 transition-colors">
              {t.discover} →
            </a>
          </div>
        </div>
      </header>

      {/* THE EXPERIENCE */}
      <section id="experience" className="py-28 md:py-40 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.expEyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            {t.expTitle1} <span className="italic">{t.expItalic}</span> {t.expTitle2}
          </h2>
          <p className="mt-8 text-foreground/70 leading-relaxed">{t.expBody}</p>
        </div>
        <div className="mt-20 max-w-5xl mx-auto">
          <img src={villaSilence} alt="" width={1600} height={1100} loading="lazy" className="w-full h-[400px] md:h-[600px] object-cover" />
        </div>
      </section>

      {/* RHYTHM OF THE STAY */}
      <section className="bg-secondary py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden">
            <img src={slowMoment} alt="" width={1600} height={1100} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover" />
          </div>
          <div>
            <p className="eyebrow text-burgundy">{t.rhythmEyebrow}</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              {t.rhythmTitle1} <span className="italic">{t.rhythmItalic}</span> {t.rhythmTitle2}
            </h2>
            <ul className="mt-10 divide-y divide-border/60">
              {t.rhythms.map((r) => (
                <li key={r.k} className="py-6">
                  <p className="font-display italic text-2xl text-burgundy">{r.k}</p>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{r.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* A TYPICAL DAY */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-burgundy">{t.dayEyebrow}</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              {t.dayTitle1} <span className="italic">{t.dayItalic}</span> {t.dayTitle2}
            </h2>
            <ol className="mt-10 space-y-5">
              {t.day.map((d) => (
                <li key={d.h} className="grid grid-cols-[5rem_1fr] gap-4 items-baseline border-b border-border/40 pb-4">
                  <span className="font-display italic text-xl text-burgundy">{d.h}</span>
                  <span className="text-foreground/80">{d.t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden md:order-first">
            <img src={desertLife} alt="" width={1600} height={1100} loading="lazy" className="w-full h-[420px] md:h-[600px] object-cover" />
          </div>
        </div>
      </section>

      {/* RETREATS */}
      <section id="retreats" className="px-6 md:px-12 py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto">
        <Retreat eyebrow={t.r1Eyebrow} title={t.r1Title} italic={t.r1Italic} duration={t.r1Duration} price={t.r1Price} includes={t.r1Inc} img={villaSocial} cta={t.reserve} />
        <Retreat eyebrow={t.r2Eyebrow} title={t.r2Title} italic={t.r2Italic} duration={t.r2Duration} price={t.r2Price} includes={t.r2Inc} img={villaLifestyle} cta={t.reserve} reverse />
      </section>

      {/* TRUST LAYER */}
      <section className="bg-secondary py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.trustEyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            {t.trustTitle1} <span className="italic">{t.trustItalic}</span> {t.trustTitle2}
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">{t.trustBody}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {t.coaches.map((c, i) => (
            <div key={c.name} className="text-center">
              <div className="overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img src={coachImgs[i]} alt={c.name} width={400} height={400} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <p className="mt-5 font-display text-2xl">{c.name}</p>
              <p className="mt-1 eyebrow text-muted-foreground">{c.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="eyebrow text-muted-foreground">{t.partnersLabel}</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-foreground/70">
            {t.partners.map((p) => (
              <li key={p} className="font-display italic text-lg">{p}</li>
            ))}
          </ul>
          <p className="mt-12 inline-block border border-burgundy text-burgundy px-5 py-2 eyebrow text-[0.7rem]">{t.limited}</p>
        </div>
      </section>

      {/* ACCESS OPTIONS (was pricing) */}
      <section className="bg-burgundy text-primary-foreground py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-primary-foreground/70">{t.priceEyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            {t.priceTitle1} <span className="italic">{t.priceItalic}</span> {t.priceTitle2}
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-primary-foreground/15 max-w-5xl mx-auto">
          {t.accessOptions.map((o) => (
            <div key={o.tag} className="bg-burgundy p-10 text-center">
              <p className="eyebrow text-primary-foreground/70">{o.tag}</p>
              <p className="mt-6 font-display italic text-3xl">{o.price}</p>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed text-sm">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href="#book" className="inline-block bg-primary-foreground text-burgundy hover:bg-primary-foreground/90 transition-colors px-10 py-4 eyebrow">
            {t.contact}
          </a>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-28 md:py-36 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="eyebrow text-burgundy">{t.formEyebrow}</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">{t.formTitle1} <span className="italic">{t.formItalic}</span></h2>
            <p className="mt-6 text-foreground/70">{t.formIntro}</p>
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

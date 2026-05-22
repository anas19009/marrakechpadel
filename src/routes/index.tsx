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
import sigProam from "@/assets/signature-proam.jpg";
import sigDinner from "@/assets/signature-dinner.jpg";
import sigDesert from "@/assets/signature-desert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marrakech Padel Retreats — A Private Winter Edition" },
      { name: "description", content: "An invitation-only padel retreat in Marrakech. Curated villas, golden-hour courts, desert silence. Limited to a few players each season." },
      { property: "og:title", content: "Marrakech Padel Retreats" },
      { property: "og:description", content: "An invitation-only winter retreat. Padel, light and silence in Morocco." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/src/assets/hero-sunrise.jpg" },
    ],
  }),
  component: Index,
});

type Lang = "fr" | "en";

const T = {
  fr: {
    nav: "Marrakech · Saison d'hiver",
    request: "Demander une invitation",
    heroEyebrow: "Édition d'hiver · Sur invitation",
    heroTitle1: "Une saison",
    heroTitleItalic: "à part.",
    heroTitle2: "",
    heroSub: "Une retraite confidentielle, conçue pour quelques joueurs. Le padel, la lumière marocaine, le silence d'un riad.",
    discover: "Explorer la retraite",

    expEyebrow: "L'expérience",
    expTitle1: "Pas un voyage.",
    expItalic: "Une parenthèse.",
    expTitle2: "",
    expBody: "Pensée comme une retraite, vécue comme un art de vivre. Le padel devient le rythme. Marrakech devient le décor.",

    rhythmEyebrow: "Un jour à Marrakech",
    rhythmTitle1: "L'aube,",
    rhythmItalic: "le silence,",
    rhythmTitle2: "le feu.",
    rhythms: [
      { k: "Matin", v: "Court à la lumière dorée. Coaching, sans agitation." },
      { k: "Midi", v: "Déjeuner du chef, sieste, hammam." },
      { k: "Coucher du soleil", v: "Session amicale, médina ou jardin." },
      { k: "Soir", v: "Dîner privé. Désert ou riad. Toujours intime." },
    ],

    sigEyebrow: "Moments signature",
    sigTitle1: "Quelques",
    sigItalic: "instants",
    sigTitle2: "que l'on n'oublie pas.",
    signatures: [
      { t: "Pro-Am au coucher du soleil", d: "Un match amical avec un joueur professionnel local, sur un court privé, à la lumière la plus belle de la journée.", img: sigProam },
      { t: "Dîner du chef en riad", d: "Une table dressée pour douze, dans un patio éclairé aux lanternes. Cuisine marocaine signée, vins choisis.", img: sigDinner },
      { t: "Sunset dans l'Agafay", d: "Quatre-quatre dans le désert, feu de camp, ciel ouvert. Le contrepoint du court : l'immensité.", img: sigDesert },
    ],

    retreatsEyebrow: "Éditions de la retraite",
    retreatsTitle1: "Deux",
    retreatsItalic: "éditions",
    retreatsTitle2: "par saison.",
    r1Eyebrow: "Édition UK · 4 nuits",
    r1Title: "Social",
    r1Italic: "Championship",
    r1Duration: "Villa privatisée · Palmeraie",
    r1Price: "Accès à partir de 2 000 €",
    r1Inc: "Coaching anglophone, Pro-Am, chef privé, hammam, dîner dans le désert.",
    r2Eyebrow: "Édition FR · 4 nuits",
    r2Title: "Art de Vivre",
    r2Italic: "& Performance",
    r2Duration: "Suites 5★ · Fairmont Royal Palm",
    r2Price: "Accès à partir de 2 300 €",
    r2Inc: "Coaching francophone, analyse vidéo, gastronomie, Jardin Majorelle, Musée YSL.",
    reserve: "Demander l'accès",

    forEyebrow: "Sélection",
    forTitle1: "Pour",
    forItalic: "qui",
    forTitle2: "cette retraite est pensée.",
    forFor: ["Joueurs intermédiaires à confirmés.", "Cadres, entrepreneurs, voyageurs lents.", "Ceux qui cherchent un cercle, pas une foule."],
    forNot: ["Premiers pas sur un court.", "Voyages en grand groupe.", "Recherche d'animation continue."],
    forForLabel: "Conçue pour",
    forNotLabel: "Ne convient pas à",
    forFoot: "Sélection par niveau pour garantir l'harmonie du groupe.",

    trustEyebrow: "L'équipe",
    trustTitle1: "Des",
    trustItalic: "visages",
    trustTitle2: "que vous reconnaîtrez.",
    trustBody: "Coachs certifiés FFT et LTA, partenaires de clubs en France et au Royaume-Uni.",
    coaches: [
      { name: "Antoine", role: "Coach FFT · Paris" },
      { name: "Sofia", role: "Coach LTA · Londres" },
      { name: "Mehdi", role: "Coach résident · Marrakech" },
    ],
    partnersLabel: "Clubs partenaires",
    partners: ["All In Padel — Paris", "Padel4all — Londres", "Royal Padel Club — Marrakech", "La Cala — Lyon"],
    limited: "12 à 16 joueurs · Saison d'hiver uniquement",

    priceEyebrow: "Options d'accès",
    priceTitle1: "Trois manières",
    priceItalic: "d'entrer",
    priceTitle2: "dans la saison.",
    accessOptions: [
      { tag: "Place individuelle", price: "À partir de 1 800 €", desc: "Une place dans la prochaine édition ouverte." },
      { tag: "Duo", price: "À partir de 3 400 €", desc: "Deux joueurs, une suite, un même rythme." },
      { tag: "Édition privée", price: "Sur demande", desc: "Votre cercle, votre villa, vos dates." },
    ],
    priceFoot: "Le tarif est secondaire. La sélection l'est moins.",
    contact: "Demander une invitation",

    formEyebrow: "Demande d'accès",
    formTitle1: "Quelques mots",
    formItalic: "suffisent.",
    formIntro: "Nous répondons personnellement, sous 24 heures.",
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
      { v: "private", l: "Édition privée" },
      { v: "b2b", l: "Club / B2B" },
    ],
    fLevel: "Niveau padel",
    fLevelPh: "Classement ou niveau",
    fGdpr: "J'accepte que mes données soient utilisées pour ma demande (RGPD).",
    send: "Envoyer ma demande",
    footerRights: "Tous droits réservés.",
    privacy: "Confidentialité",
    legal: "Mentions légales",
    waLabel: "WhatsApp",
    waMsg: "Bonjour, je souhaite recevoir une invitation pour la prochaine édition à Marrakech.",
  },
  en: {
    nav: "Marrakech · Winter Season",
    request: "Request an invitation",
    heroEyebrow: "Winter Edition · By invitation",
    heroTitle1: "A season",
    heroTitleItalic: "apart.",
    heroTitle2: "",
    heroSub: "A confidential retreat for a few players. Padel, Moroccan light, and the quiet of a private riad.",
    discover: "Explore the retreat",

    expEyebrow: "The experience",
    expTitle1: "Not a trip.",
    expItalic: "An interlude.",
    expTitle2: "",
    expBody: "Lived as a retreat, designed as an art of living. Padel sets the rhythm. Marrakech sets the scene.",

    rhythmEyebrow: "A day in Marrakech",
    rhythmTitle1: "Dawn,",
    rhythmItalic: "silence,",
    rhythmTitle2: "and fire.",
    rhythms: [
      { k: "Morning", v: "Court in golden light. Coaching, without noise." },
      { k: "Midday", v: "Chef's lunch, siesta, hammam." },
      { k: "Sunset", v: "Friendly session, medina or garden." },
      { k: "Evening", v: "Private dinner. Desert or riad. Always intimate." },
    ],

    sigEyebrow: "Signature moments",
    sigTitle1: "A few",
    sigItalic: "moments",
    sigTitle2: "you don't forget.",
    signatures: [
      { t: "Sunset Pro-Am", d: "A friendly match with a visiting professional, on a private court, in the most beautiful light of the day.", img: sigProam },
      { t: "Chef's dinner at the riad", d: "A table for twelve, in a patio lit by lanterns. Signature Moroccan cuisine, curated wines.", img: sigDinner },
      { t: "Agafay sunset", d: "4x4 into the desert, a fire, an open sky. The counterpoint to the court: the vastness.", img: sigDesert },
    ],

    retreatsEyebrow: "Retreat editions",
    retreatsTitle1: "Two",
    retreatsItalic: "editions",
    retreatsTitle2: "a season.",
    r1Eyebrow: "UK Edition · 4 nights",
    r1Title: "Social",
    r1Italic: "Championship",
    r1Duration: "Private villa · Palmeraie",
    r1Price: "Access from €2,000",
    r1Inc: "English-speaking coaching, Pro-Am, private chef, hammam, desert dinner.",
    r2Eyebrow: "FR Edition · 4 nights",
    r2Title: "Art of Living",
    r2Italic: "& Performance",
    r2Duration: "5★ Suites · Fairmont Royal Palm",
    r2Price: "Access from €2,300",
    r2Inc: "French-speaking coaching, video analysis, fine dining, Majorelle Garden, YSL Museum.",
    reserve: "Request access",

    forEyebrow: "Selection",
    forTitle1: "Who this retreat",
    forItalic: "is for.",
    forTitle2: "",
    forFor: ["Intermediate to advanced players.", "Founders, executives, slow travellers.", "Those looking for a circle, not a crowd."],
    forNot: ["First steps on a court.", "Large-group travel.", "A search for constant entertainment."],
    forForLabel: "Designed for",
    forNotLabel: "Not suited to",
    forFoot: "Selection by level to ensure the group's harmony.",

    trustEyebrow: "The team",
    trustTitle1: "Faces",
    trustItalic: "you'll",
    trustTitle2: "recognise.",
    trustBody: "FFT and LTA certified coaches. Partner clubs in France and the United Kingdom.",
    coaches: [
      { name: "Antoine", role: "FFT Coach · Paris" },
      { name: "Sofia", role: "LTA Coach · London" },
      { name: "Mehdi", role: "Resident coach · Marrakech" },
    ],
    partnersLabel: "Partner clubs",
    partners: ["All In Padel — Paris", "Padel4all — London", "Royal Padel Club — Marrakech", "La Cala — Lyon"],
    limited: "12 to 16 players · Winter season only",

    priceEyebrow: "Access options",
    priceTitle1: "Three ways",
    priceItalic: "to enter",
    priceTitle2: "the season.",
    accessOptions: [
      { tag: "Single seat", price: "From €1,800", desc: "One seat in the next open edition." },
      { tag: "Duo", price: "From €3,400", desc: "Two players, one suite, one rhythm." },
      { tag: "Private edition", price: "On request", desc: "Your circle, your villa, your dates." },
    ],
    priceFoot: "The price is secondary. The selection is not.",
    contact: "Request an invitation",

    formEyebrow: "Request access",
    formTitle1: "A few words",
    formItalic: "are enough.",
    formIntro: "We reply personally, within 24 hours.",
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
      { v: "private", l: "Private edition" },
      { v: "b2b", l: "Club / B2B" },
    ],
    fLevel: "Padel level",
    fLevelPh: "Ranking or level",
    fGdpr: "I agree my data may be used to handle my request (GDPR).",
    send: "Send my request",
    footerRights: "All rights reserved.",
    privacy: "Privacy",
    legal: "Legal",
    waLabel: "WhatsApp",
    waMsg: "Hello, I would like to receive an invitation for the next edition in Marrakech.",
  },
} as const;

const WA_NUMBER = "212600000000";

function LangToggle({ lang, setLang, tone = "light" }: { lang: Lang; setLang: (l: Lang) => void; tone?: "light" | "dark" }) {
  const base = tone === "light" ? "text-primary-foreground/70" : "text-foreground/60";
  const active = tone === "light" ? "text-primary-foreground" : "text-burgundy";
  return (
    <div className="flex items-center gap-2 eyebrow text-[0.65rem]">
      <button onClick={() => setLang("fr")} className={`${lang === "fr" ? active : base} transition-colors`}>FR</button>
      <span className={tone === "light" ? "text-primary-foreground/30" : "text-border"}>·</span>
      <button onClick={() => setLang("en")} className={`${lang === "en" ? active : base} transition-colors`}>EN</button>
    </div>
  );
}

function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = T[lang];
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-7 text-primary-foreground">
      <div className="flex items-center gap-6">
        <span className="eyebrow hidden sm:block text-primary-foreground/75">{t.nav}</span>
      </div>
      <div className="text-center font-display text-lg md:text-xl tracking-[0.18em] uppercase">
        Marrakech<span className="italic normal-case tracking-normal"> · </span>Padel
      </div>
      <div className="flex items-center gap-5">
        <LangToggle lang={lang} setLang={setLang} />
        <a href="#book" className="hidden md:inline-block eyebrow text-[0.7rem] text-primary-foreground border-b border-primary-foreground/50 hover:border-primary-foreground pb-1 transition-colors">
          {t.request}
        </a>
      </div>
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
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.696 4.605 1.892 6.475L4 29l7.74-1.86A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.8c-1.86 0-3.59-.5-5.08-1.36l-.364-.21-4.594 1.104 1.13-4.475-.237-.378A9.78 9.78 0 0 1 6.2 15c0-5.404 4.396-9.8 9.8-9.8 5.405 0 9.8 4.396 9.8 9.8 0 5.405-4.395 9.8-9.8 9.8Zm5.39-7.34c-.295-.148-1.748-.862-2.018-.96-.27-.099-.467-.148-.664.149-.197.295-.762.96-.934 1.158-.172.197-.345.222-.64.074-.295-.148-1.246-.46-2.374-1.467-.878-.783-1.47-1.748-1.643-2.043-.172-.296-.018-.456.13-.604.133-.132.296-.345.444-.517.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.074-.148-.664-1.602-.91-2.193-.24-.578-.484-.5-.664-.51l-.566-.01c-.197 0-.518.074-.79.37-.27.295-1.034 1.01-1.034 2.464 0 1.454 1.058 2.86 1.205 3.057.148.197 2.082 3.18 5.045 4.46.706.305 1.256.487 1.685.624.708.225 1.353.193 1.864.117.568-.085 1.748-.715 1.995-1.405.247-.69.247-1.282.173-1.405-.074-.123-.27-.197-.566-.346Z"/>
      </svg>
    </a>
  );
}

type RetreatProps = {
  eyebrow: string; title: string; italic: string; duration: string; price: string; includes: string;
  img: string; reverse?: boolean; cta: string;
};

function Retreat({ eyebrow, title, italic, duration, price, includes, img, reverse, cta }: RetreatProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div className="overflow-hidden">
        <img src={img} alt={title} width={1200} height={800} loading="lazy" className="w-full h-[460px] md:h-[600px] object-cover" />
      </div>
      <div className="md:px-6">
        <p className="eyebrow text-burgundy">{eyebrow}</p>
        <h3 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
          {title} <span className="italic">{italic}</span>
        </h3>
        <p className="mt-5 text-muted-foreground">{duration}</p>
        <div className="my-10 h-px w-12 bg-burgundy/40" />
        <p className="font-display italic text-xl text-burgundy">{price}</p>
        <p className="mt-6 leading-relaxed text-foreground/75 max-w-md">{includes}</p>
        <a href="#book" className="inline-block mt-10 border-b border-burgundy pb-1 text-burgundy hover:opacity-70 eyebrow transition-opacity">
          {cta} →
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
      {/* HERO — luxury invitation */}
      <header className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <img src={heroImg} alt="A private padel court in Marrakech at sunrise" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/65" />
        <Nav lang={lang} setLang={setLang} />
        <div className="relative z-10 flex h-full items-end md:items-center justify-center px-6 md:px-12 pb-24 md:pb-0">
          <div className="text-primary-foreground max-w-3xl text-center">
            <p className="eyebrow text-primary-foreground/85">{t.heroEyebrow}</p>
            <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98]">
              {t.heroTitle1} <span className="italic">{t.heroTitleItalic}</span>
            </h1>
            <p className="mt-10 font-light text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto leading-relaxed">{t.heroSub}</p>
            <a href="#experience" className="inline-block mt-12 border-b border-primary-foreground/70 hover:border-primary-foreground pb-1 eyebrow text-[0.7rem] transition-colors">
              {t.discover} →
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 z-10 text-center eyebrow text-[0.6rem] text-primary-foreground/55">
          {t.limited}
        </div>
      </header>

      {/* THE EXPERIENCE — editorial intro */}
      <section id="experience" className="py-32 md:py-48 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.expEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05]">
            {t.expTitle1} <span className="italic">{t.expItalic}</span>
          </h2>
          <p className="mt-10 text-foreground/70 leading-relaxed text-lg max-w-lg mx-auto">{t.expBody}</p>
        </div>
        <div className="mt-24 max-w-6xl mx-auto">
          <img src={villaSilence} alt="" width={1600} height={1100} loading="lazy" className="w-full h-[440px] md:h-[640px] object-cover" />
        </div>
      </section>

      {/* A DAY IN MARRAKECH — rhythm */}
      <section className="bg-secondary py-32 md:py-48 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="overflow-hidden">
            <img src={slowMoment} alt="" width={1600} height={1100} loading="lazy" className="w-full h-[440px] md:h-[620px] object-cover" />
          </div>
          <div>
            <p className="eyebrow text-burgundy">{t.rhythmEyebrow}</p>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
              {t.rhythmTitle1} <span className="italic">{t.rhythmItalic}</span> {t.rhythmTitle2}
            </h2>
            <ul className="mt-12 divide-y divide-border/50">
              {t.rhythms.map((r) => (
                <li key={r.k} className="py-7">
                  <p className="eyebrow text-burgundy/80">{r.k}</p>
                  <p className="mt-3 font-display italic text-xl text-foreground/85">{r.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SIGNATURE MOMENTS */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.sigEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05]">
            {t.sigTitle1} <span className="italic">{t.sigItalic}</span> {t.sigTitle2}
          </h2>
        </div>
        <div className="mt-20 max-w-6xl mx-auto space-y-20 md:space-y-32">
          {t.signatures.map((s, i) => (
            <div key={s.t} className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7 overflow-hidden">
                <img src={s.img} alt={s.t} width={1600} height={1100} loading="lazy" className="w-full h-[360px] md:h-[520px] object-cover" />
              </div>
              <div className="md:col-span-5 md:px-4">
                <p className="eyebrow text-burgundy/80">0{i + 1}</p>
                <h3 className="mt-5 font-display text-3xl md:text-4xl italic leading-tight">{s.t}</h3>
                <p className="mt-6 text-foreground/70 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESERT FULL-BLEED */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src={desertLife} alt="" width={1920} height={1100} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <p className="font-display italic text-3xl md:text-5xl text-primary-foreground text-center max-w-2xl leading-tight">
            “{lang === "fr" ? "Le silence du désert répond au bruit du court." : "The silence of the desert answers the noise of the court."}”
          </p>
        </div>
      </section>

      {/* RETREATS / EDITIONS */}
      <section id="retreats" className="px-6 md:px-12 py-32 md:py-48 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-24 md:mb-32">
          <p className="eyebrow text-burgundy">{t.retreatsEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
            {t.retreatsTitle1} <span className="italic">{t.retreatsItalic}</span> {t.retreatsTitle2}
          </h2>
        </div>
        <div className="space-y-28 md:space-y-40">
          <Retreat eyebrow={t.r1Eyebrow} title={t.r1Title} italic={t.r1Italic} duration={t.r1Duration} price={t.r1Price} includes={t.r1Inc} img={villaSocial} cta={t.reserve} />
          <Retreat eyebrow={t.r2Eyebrow} title={t.r2Title} italic={t.r2Italic} duration={t.r2Duration} price={t.r2Price} includes={t.r2Inc} img={villaLifestyle} cta={t.reserve} reverse />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-secondary py-32 md:py-44 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.forEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
            {t.forTitle1} <span className="italic">{t.forItalic}</span> {t.forTitle2}
          </h2>
        </div>
        <div className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="eyebrow text-burgundy">{t.forForLabel}</p>
            <ul className="mt-6 space-y-4">
              {t.forFor.map((l) => (
                <li key={l} className="font-display italic text-xl text-foreground/85 leading-snug border-b border-border/40 pb-4">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">{t.forNotLabel}</p>
            <ul className="mt-6 space-y-4">
              {t.forNot.map((l) => (
                <li key={l} className="font-display italic text-xl text-muted-foreground leading-snug border-b border-border/40 pb-4">{l}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-16 text-center text-sm eyebrow text-muted-foreground">{t.forFoot}</p>
      </section>

      {/* TRUST LAYER */}
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-burgundy">{t.trustEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
            {t.trustTitle1} <span className="italic">{t.trustItalic}</span> {t.trustTitle2}
          </h2>
          <p className="mt-8 text-foreground/70 leading-relaxed max-w-lg mx-auto">{t.trustBody}</p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {t.coaches.map((c, i) => (
            <div key={c.name} className="text-center">
              <div className="overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img src={coachImgs[i]} alt={c.name} width={400} height={400} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <p className="mt-6 font-display text-2xl">{c.name}</p>
              <p className="mt-2 eyebrow text-muted-foreground text-[0.65rem]">{c.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto text-center">
          <p className="eyebrow text-muted-foreground">{t.partnersLabel}</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-foreground/70">
            {t.partners.map((p) => (
              <li key={p} className="font-display italic text-lg">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACCESS OPTIONS */}
      <section className="bg-burgundy text-primary-foreground py-32 md:py-44 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-primary-foreground/65">{t.priceEyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
            {t.priceTitle1} <span className="italic">{t.priceItalic}</span> {t.priceTitle2}
          </h2>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-primary-foreground/10 max-w-5xl mx-auto">
          {t.accessOptions.map((o) => (
            <div key={o.tag} className="bg-burgundy p-12 text-center">
              <p className="eyebrow text-primary-foreground/65 text-[0.65rem]">{o.tag}</p>
              <p className="mt-8 font-display italic text-2xl">{o.price}</p>
              <p className="mt-6 text-primary-foreground/75 leading-relaxed text-sm max-w-xs mx-auto">{o.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center font-display italic text-lg text-primary-foreground/75">{t.priceFoot}</p>
        <div className="text-center mt-10">
          <a href="#book" className="inline-block border-b border-primary-foreground/70 hover:border-primary-foreground pb-1 eyebrow text-[0.7rem] transition-colors">
            {t.contact} →
          </a>
        </div>
      </section>

      {/* REQUEST ACCESS FORM */}
      <section id="book" className="py-32 md:py-44 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="eyebrow text-burgundy">{t.formEyebrow}</p>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">{t.formTitle1} <span className="italic">{t.formItalic}</span></h2>
            <p className="mt-6 text-foreground/70">{t.formIntro}</p>
          </div>

          <form className="mt-16 grid gap-8" method="post">
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
            <label className="flex items-start gap-3 text-sm text-foreground/70">
              <input type="checkbox" required className="mt-1" />
              <span>{t.fGdpr}</span>
            </label>
            <button type="submit" className="bg-burgundy hover:bg-burgundy-dark transition-colors text-primary-foreground py-5 eyebrow text-[0.7rem] mt-4">
              {t.send}
            </button>
          </form>
        </div>

        <style>{`
          .field { width: 100%; padding: 0.95rem 0; background: transparent; border: 0; border-bottom: 1px solid var(--border); font-family: var(--font-sans); color: var(--ink); font-size: 1rem; }
          .field:focus { outline: none; border-color: var(--burgundy); }
        `}</style>
      </section>

      <footer className="bg-ink text-primary-foreground/75 py-14 px-6 text-center">
        <p className="font-display text-xl text-primary-foreground tracking-[0.15em] uppercase">Marrakech<span className="italic normal-case tracking-normal"> · </span>Padel</p>
        <p className="mt-3 eyebrow text-[0.65rem] text-primary-foreground/55">{t.limited}</p>
        <p className="mt-8 text-sm">© 2026 — {t.footerRights} <a href="#" className="ml-2 underline-offset-4 hover:underline">{t.privacy}</a> · <a href="#" className="underline-offset-4 hover:underline">{t.legal}</a></p>
      </footer>

      <WhatsAppButton lang={lang} />
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-muted-foreground text-[0.65rem] block mb-2">{label}</label>
      {children}
    </div>
  );
}

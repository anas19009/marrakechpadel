import { createFileRoute } from "@tanstack/react-router";
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

function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-6 text-primary-foreground">
      <div className="eyebrow">Marrakech</div>
      <div className="text-center font-display text-xl md:text-2xl tracking-wide">
        Padel <span className="italic">Retreats</span>
      </div>
      <a href="#book" className="hidden md:inline-block bg-burgundy hover:bg-burgundy-dark transition-colors px-6 py-3 text-primary-foreground eyebrow">
        Réserver
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img src={heroImg} alt="Padel à Marrakech" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <Nav />
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-primary-foreground max-w-3xl">
          <p className="eyebrow mb-6 text-primary-foreground/90">Where spirited play meets moroccan calm</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            <span className="italic">Padel</span> Retreats<br />à Marrakech
          </h1>
          <p className="mt-8 font-light text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto">
            Sport, culture et bien-être sous le soleil marocain. Une parenthèse signature pour joueurs exigeants.
          </p>
          <a href="#retreats" className="inline-block mt-10 border border-primary-foreground/80 hover:bg-primary-foreground hover:text-ink transition-colors px-8 py-4 eyebrow">
            Découvrir les retraites
          </a>
        </div>
      </div>
    </header>
  );
}

type RetreatProps = {
  eyebrow: string;
  title: string;
  italic: string;
  duration: string;
  price: string;
  includes: string;
  img: string;
  reverse?: boolean;
};

function Retreat({ eyebrow, title, italic, duration, price, includes, img, reverse }: RetreatProps) {
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
          Réserver maintenant
        </a>
      </div>
    </div>
  );
}

const features = [
  "Encadrement par coachs certifiés FFT / LTA et parcours adapté à votre niveau",
  "Hébergement 4–5★ et transports privés inclus",
  "Expériences culturelles haut de gamme : désert d'Agafay, Médina, gastronomie",
  "Formule tout-compris : repas, boissons, excursions, photographies professionnelles",
  "Groupes exclusifs (12 à 16 joueurs) avec suivi personnalisé",
];

const tableRows: [string, string, string][] = [
  ["Coaching padel", "12 h — coachs anglophones + tournoi", "12 h — coachs francophones certifiés"],
  ["Hébergement", "Villa de luxe privatisée", "Suites Fairmont Royal Palm"],
  ["Restauration", "Chef privé & tous repas", "Restaurants 5★ & déjeuners gastronomiques"],
  ["Bien-être", "Spa villa, hammam", "Spa signature, hammam traditionnel"],
  ["Transferts", "Chauffeur privé & voiture 24 h", "Transferts aéroport & excursions privées"],
  ["Activités", "Dîner dans le désert, photographe drone", "Excursions culturelles, coach vidéo individuel"],
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow text-burgundy">L'expérience</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            Une <span className="italic">parenthèse</span> de jeu, de soleil<br />et de raffinement.
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed">
            Deux formats signature, pensés pour les amoureux du padel comme pour les esthètes du voyage.
            Chaque retraite associe heures de coaching, hébergement d'exception et immersion culturelle au cœur de Marrakech.
          </p>
        </div>
      </section>

      {/* Retreats */}
      <section id="retreats" className="px-6 md:px-12 pb-24 md:pb-32 space-y-24 md:space-y-32 max-w-7xl mx-auto">
        <Retreat
          eyebrow="Édition UK · 4 jours / 3 nuits"
          title="Social"
          italic="Championship"
          duration="Villa Palmeraie privatisée"
          price="À partir de 2 000 € / personne (base 12)"
          includes="12 h de coaching padel, tournoi Pro-Am avec joueurs professionnels, hébergement 5★, tous repas signés par un chef privé, spa & hammam, excursion quad dans le désert."
          img={villaSocial}
        />
        <Retreat
          eyebrow="Édition FR · 4 jours / 3 nuits"
          title="Art de Vivre"
          italic="& Performance"
          duration="Suites 5★ Fairmont Royal Palm"
          price="À partir de 2 300 € / personne (base 12)"
          includes="Coaching intensif avec analyse vidéo, 3 h de padel par jour, détente au spa, hammam traditionnel, visites exclusives (Jardin Majorelle, Musée YSL), haute gastronomie."
          img={villaLifestyle}
          reverse
        />
      </section>

      {/* Features */}
      <section className="bg-secondary py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-burgundy">Caractéristiques</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            Ce qui rend nos retraites <span className="italic">singulières</span>
          </h2>
        </div>
        <ul className="mt-16 max-w-3xl mx-auto divide-y divide-border">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-6 py-6">
              <span className="font-display italic text-2xl text-burgundy leading-none mt-1">✦</span>
              <span className="text-foreground/80 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Table */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <p className="eyebrow text-burgundy">Comparatif</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">Prestations <span className="italic">incluses</span></h2>
        </div>
        <div className="mt-14 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-y border-border">
                <th className="py-5 pr-4 eyebrow text-muted-foreground font-normal">Prestations</th>
                <th className="py-5 px-4 font-display italic text-xl text-burgundy">Social Championship</th>
                <th className="py-5 px-4 font-display italic text-xl text-burgundy">Art de Vivre & Perf.</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(([a, b, c]) => (
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

      {/* Pricing */}
      <section className="bg-burgundy text-primary-foreground py-24 md:py-32 px-6 text-center">
        <p className="eyebrow text-primary-foreground/80">Tarifs & réservation</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">
          À partir de <span className="italic">1 800 €</span><br />par personne
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-primary-foreground/85">
          Prix variable selon date et options. Contactez-nous pour un devis personnalisé.
        </p>
        <a href="mailto:contact@padelretreat.com" className="inline-block mt-10 bg-primary-foreground text-burgundy hover:bg-primary-foreground/90 transition-colors px-10 py-4 eyebrow">
          Contactez-nous
        </a>
      </section>

      {/* Form */}
      <section id="book" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="eyebrow text-burgundy">B2B</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Demande de <span className="italic">réservation</span></h2>
            <p className="mt-6 text-foreground/75">
              Pour les clubs, comités d'entreprise et conciergeries : écrivez-nous ou remplissez le formulaire ci-dessous.
            </p>
          </div>

          <form className="mt-14 grid gap-6" method="post">
            <Field label="Nom / Name" id="name"><input id="name" name="name" required placeholder="Votre nom" className="field" /></Field>
            <Field label="Courriel / Email" id="email"><input id="email" type="email" name="email" required placeholder="Votre email" className="field" /></Field>
            <Field label="Téléphone / Phone" id="phone"><input id="phone" type="tel" name="phone" placeholder="Votre téléphone" className="field" /></Field>
            <Field label="Pays / Country" id="country">
              <select id="country" name="country" required className="field">
                <option value="">Sélectionnez votre pays</option>
                <option value="FR">France</option>
                <option value="UK">Royaume-Uni</option>
                <option value="BE">Belgique</option>
                <option value="CH">Suisse</option>
                <option value="OTHER">Autre</option>
              </select>
            </Field>
            <Field label="Niveau padel (FFT / LTA / Playtomic)" id="level">
              <input id="level" name="level" placeholder="Classement ou niveau de jeu" className="field" />
            </Field>
            <label className="flex items-start gap-3 text-sm text-foreground/75">
              <input type="checkbox" required className="mt-1" />
              <span>J'accepte que mes données soient utilisées pour la gestion de ma demande (RGPD).</span>
            </label>
            <button type="submit" className="bg-burgundy hover:bg-burgundy-dark transition-colors text-primary-foreground py-4 eyebrow">
              Envoyer / Submit
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
        <p className="mt-4">© 2026 — Tous droits réservés. <a href="#" className="underline-offset-4 hover:underline">Politique de confidentialité</a> · <a href="#" className="underline-offset-4 hover:underline">Mentions légales</a></p>
      </footer>
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

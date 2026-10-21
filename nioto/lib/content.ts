// lib/content.ts
// SOURCE UNIQUE de tout le contenu du site NIOTO
// Toutes les données viennent du briefing.md - rien n'est inventé.

export const SHOW_KARITE_TONNAGE = false; // mettre true pour afficher le chiffre de presse (20 000 t/an)

// ─── IDENTITÉ ────────────────────────────────────────────────────────────────
export const COMPANY = {
  nom: "NIOTO",
  nomComplet: "Nouvelle Industrie des Oléagineux du Togo",
  formeJuridique: "Société anonyme de droit togolais",
  groupe: "GEOCOTON",
  slogan: "L'industrie d'huile au Togo",
  ville: "Lomé, Togo",
  marquePhare: "Queen's",
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  adresse: "Zone industrielle du Port, Katanga, Zone Portuaire",
  bp: "BP 3086, Lomé, Togo",
  telephones: [
    { label: "+228 22 27 23 79", href: "tel:+22822272379" },
    { label: "+228 22 27 26 84", href: "tel:+22822272684" },
    { label: "+228 22 27 35 23", href: "tel:+22822273523" },
  ],
  fax: "+228 22 27 68 33",
  email: null, // non fourni — ne pas afficher
  horaires: "Lundi–vendredi : 08h00–17h00 · Week-end : fermé",
  facebook: "https://www.facebook.com/nioto.togo/",
  gps: { lat: 6.15011111, lng: 1.29146944 },
  googleMaps: "https://www.google.com/maps/dir/?api=1&destination=6.15011111,1.29146944",
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const HERO = {
  titre: ["L'huile du Togo,", "de la graine", "à votre table."],
  sousTitre:
    "NIOTO transforme les oléagineux togolais en produits de qualité. Fabricant de l'huile Queen's, premier producteur de beurre brut de karité en Afrique de l'Ouest.",
  image: "/nioto_images/hero.png",
  autowritePhrases: [
    "L'industrie d'huile au Togo.",
    "De la graine à votre table.",
    "Qualité locale, normes européennes.",
    "L'huile Queen's, fière du Togo.",
    "Santé, nutrition, savoir-faire.",
  ],
};

// ─── À PROPOS ─────────────────────────────────────────────────────────────────
export const ABOUT = {
  titre: "Qui est NIOTO ?",
  paragraphes: [
    "NIOTO — Nouvelle Industrie des Oléagineux du Togo — est une société anonyme de droit togolais, filiale du groupe français GEOCOTON. Installée dans la zone industrielle du port de Lomé, à Katanga, NIOTO est au cœur de l'agro-industrie togolaise.",
    "Depuis son implantation à Lomé, NIOTO transforme les matières premières oléagineuses locales en produits finis de qualité, sous le contrôle permanent d'un laboratoire qualifié, dans le respect des exigences des normes qualité européennes.",
    "Trois activités structurent notre action : la production d'huile raffinée de coton sous la marque Queen's, la trituration d'amandes de karité pour de grands groupes européens, et la valorisation des tourteaux de coton pour l'alimentation animale.",
  ],
  image: "/nioto_images/image4.jpg",
};

// ─── PARCOURS (DU CHAMP À LA BOUTEILLE) ─────────────────────────────────────
export const PROCESS_STEPS = [
  {
    id: 1,
    titre: "La graine de coton",
    texte:
      "Les graines de coton sont produites au Togo par la Société Cotonnière du Togo. Une chaîne 100 % locale, de la terre togolaise jusqu'à nos ateliers.",
    image: "/nioto_images/image1.jpg",
    icon: "seed",
  },
  {
    id: 2,
    titre: "Le pressage",
    texte:
      "Les graines sont pressées avec des techniques modernes pour extraire l'huile brute. La qualité commence ici, à chaque étape de la transformation.",
    image: "/nioto_images/image2.jpg",
    icon: "press",
  },
  {
    id: 3,
    titre: "L'huile raffinée",
    texte:
      "L'huile est raffinée, exempte de résidus de pesticides et de bactéries. Un processus rigoureux qui garantit une huile pure, saine et savoureuse.",
    image: "/nioto_images/image3.jpg",
    icon: "drop",
  },
  {
    id: 4,
    titre: "Contrôle laboratoire",
    texte:
      "Chaque lot est contrôlé en permanence par notre laboratoire qualifié, dans le respect des exigences des normes qualité européennes applicables à l'agroalimentaire.",
    image: "/nioto_images/image5.jpg",
    icon: "lab",
  },
  {
    id: 5,
    titre: "Votre table",
    texte:
      "L'huile Queen's arrive sur votre table : saine, locale, riche en vitamines. De la terre togolaise à votre cuisine, une fierté partagée.",
    image: "/nioto_images/image6.jpg",
    icon: "table",
  },
];

// ─── QUEEN'S ─────────────────────────────────────────────────────────────────
export const QUEENS = {
  titre: "Queen's",
  accroche: "L'huile de coton du Togo. Pure, saine, locale.",
  description:
    "NIOTO produit et commercialise l'huile de coton de marque Queen's, fabriquée à partir de graines produites au Togo, avec des techniques modernes, sous contrôle permanent d'un laboratoire qualifié.",
  images: [
    { src: "/nioto_images/image1.jpg", alt: "Bouteille d'huile Queen's de NIOTO" },
    { src: "/nioto_images/image2.jpg", alt: "Huile Queen's — produit NIOTO" },
    { src: "/nioto_images/image3.jpg", alt: "Emballage Queen's — huile de coton NIOTO" },
    { src: "/nioto_images/image6.jpg", alt: "Gamme huile Queen's de NIOTO" },
    { src: "/nioto_images/image7.jpg", alt: "Huile Queen's — qualité togolaise" },
    { src: "/nioto_images/image8.jpg", alt: "Produits Queen's NIOTO" },
    { src: "/nioto_images/image9.jpg", alt: "Huile de coton Queen's — NIOTO Lomé" },
  ],
  cinqRaisons: [
    { num: "01", titre: "Riche en acides gras essentiels", texte: "Huile végétale apportant des acides gras mono-insaturés (18,7 %) et poly-insaturés (49,8 % — oméga 6 et oméga 3)." },
    { num: "02", titre: "Sans cholestérol", texte: "L'huile de coton Queen's ne contient pas de cholestérol." },
    { num: "03", titre: "Huile mixte polyvalente", texte: "Idéale pour la friture comme pour l'assaisonnement, elle s'adapte à toutes vos préparations culinaires." },
    { num: "04", titre: "Raffinée, sans résidus", texte: "Raffinée selon les normes européennes, exempte de résidus de pesticides et de bactéries." },
    { num: "05", titre: "Riche en vitamines", texte: "Riche en vitamine E (67 UI/100 g) et enrichie en vitamine A couvrant 30 % du besoin journalier recommandé." },
  ],
  nutrition: {
    mention: "Selon NIOTO",
    valeurs: [
      { label: "Acides gras mono-insaturés", valeur: "18,7", unite: "%" },
      { label: "Acides gras poly-insaturés (Ω6, Ω3)", valeur: "49,8", unite: "%" },
      { label: "Vitamine E", valeur: "67", unite: "UI/100 g" },
      { label: "Vitamine A (besoin journalier couvert)", valeur: "30", unite: "%" },
    ],
    note: "Au Togo, 35 % des enfants de moins de 6 ans présentent des carences en vitamine A. L'enrichissement en vitamine A de l'huile Queen's contribue à répondre à cet enjeu de santé publique (selon NIOTO).",
  },
};

// ─── KARITÉ ──────────────────────────────────────────────────────────────────
export const KARITE = {
  titre: "Beurre de Karité",
  accroche: "Premier producteur de beurre brut de karité en Afrique de l'Ouest.",
  description:
    "NIOTO triture les amandes de karité pour le compte de grands groupes européens (prestation à façon), dans une logique de responsabilité sociale et de développement durable.",
  debouches: [
    { titre: "Chocolaterie & Confiserie", texte: "Environ 90 % du beurre de karité est destiné à l'industrie agroalimentaire — chocolatiers et confiseurs européens." },
    { titre: "Cosmétique", texte: "Environ 10 % est valorisé dans la cosmétique, pour des formulations de qualité premium." },
    { titre: "Marchés export", texte: "NIOTO approvisionne de grands groupes européens, contribuant au rayonnement de l'Afrique de l'Ouest sur les marchés mondiaux." },
  ],
  tonnage: SHOW_KARITE_TONNAGE
    ? "Selon la presse économique togolaise, NIOTO produit environ 20 000 tonnes de beurre brut de karité par an (chiffre de presse, à valider avec NIOTO)."
    : null,
};

// ─── TOURTEAUX ───────────────────────────────────────────────────────────────
export const TOURTEAUX = {
  titre: "Tourteaux de coton",
  accroche: "Rien ne se perd. Toute la graine est valorisée.",
  description:
    "Le pressage des graines de coton produit également des tourteaux de coton, valorisés sur le marché comme aliments pour bétail. NIOTO est aussi présent dans la fabrication d'aliments pour bétail, contribuant à une économie agricole locale complète.",
};

// ─── CHIFFRES CLÉS ───────────────────────────────────────────────────────────
export const KEY_FIGURES = [
  { valeur: 100, suffixe: "+", label: "Entreprises et fournisseurs qui travaillent grâce à NIOTO" },
  { valeur: 15, suffixe: "", label: "Pays d'Afrique desservis à l'export", note: "source presse" },
  { valeur: 30, suffixe: "%", label: "Du besoin journalier en vitamine A couvert par l'huile Queen's" },
  { valeur: 0, suffixe: "", label: "Cholestérol — l'huile Queen's en est exempte" },
];

// ─── ENGAGEMENTS (ENTREPRISE CITOYENNE) ──────────────────────────────────────
export const CITIZEN = {
  titre: "Une entreprise citoyenne",
  intro:
    "NIOTO s'associe aux efforts du gouvernement et s'engage pour le développement du Togo.",
  engagements: [
    "Transformer les matières premières locales en huiles raffinées et tourteaux de coton disponibles sur le marché.",
    "Contribuer à la formation et à l'insertion des jeunes.",
    "Lutter contre la malnutrition grâce à l'enrichissement des huiles en micronutriments.",
    "Contribuer à l'essor de l'économie togolaise : valeur ajoutée, impôts, taxes et salaires.",
    "Permettre à plus d'une centaine d'entreprises et fournisseurs d'exister grâce à leurs prestations de service.",
  ],
  image: "/nioto_images/image_baniere.jpg",
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Entreprise", href: "#about" },
  { label: "Notre processus", href: "#process" },
  { label: "Queen's", href: "#queens" },
  { label: "Karité", href: "#karite" },
  { label: "Engagements", href: "#citizen" },
  { label: "Contact", href: "#footer" },
];

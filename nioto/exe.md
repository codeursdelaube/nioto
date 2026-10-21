# EXE — Plan d'exécution du site NIOTO

> **Ordre de lecture : `briefing.md` d'abord, puis ce fichier.**
> `briefing.md` = QUOI (l'entreprise, ses produits, son contenu).
> `exe.md` = COMMENT (stack, design, animations, structure, étapes).
> En cas de doute sur un fait : le briefing fait foi. Ne rien inventer.

---

## 0. Objectif en une phrase

Construire un site vitrine **moderne, animé (GSAP), qui ressemble à NIOTO** : une industrie d'huile togolaise, sérieuse, ancrée dans la terre et le coton, fière du local. Le visiteur doit sentir une **vraie entreprise**, pas un template.

---

## 1. RÈGLE N°1 — Ne PAS ressembler à un site fait par IA

Interdit :
- Icônes **sparkle / étincelles / baguette magique** (Sparkles, Wand, Stars, Zap décoratif). Aucune.
- Emojis dans l'interface.
- Dégradés violet/bleu/rose, effets « néon », glow partout.
- Glassmorphism sur chaque carte, ombres colorées flashy.
- Grille de 3 cartes « icône dans un cercle + titre + 2 lignes » répétée à chaque section.
- Textes génériques type « Révolutionnez votre… », « Solutions innovantes », « Découvrez la magie ».
- Lorem ipsum, faux témoignages, faux chiffres, faux logos partenaires.
- Badges « Nouveau / ✨ AI-powered ».

Obligatoire :
- **Photos réelles des produits** (voir §6) au centre du design.
- Un design **éditorial** : grandes images, gros titres serif, beaucoup d'air, mise en page asymétrique, typographie qui a du caractère.
- Textes **spécifiques à NIOTO** (graine de coton, Katanga, Queen's, karité, laboratoire, port de Lomé…).
- Icônes Lucide **sobres et rares**, uniquement fonctionnelles (téléphone, adresse, horaires, flèche, chevrons du carousel).

---

## 2. Stack imposée

| Rôle | Outil |
|---|---|
| Framework | **Next.js (App Router)**, **TypeScript** |
| Style | **Tailwind CSS v4** + **daisyUI** (thème personnalisé NIOTO, voir §3) |
| Icônes | **lucide-react** |
| Micro-interactions UI | **Framer Motion** |
| Animations de scroll / storytelling | **GSAP** + **ScrollTrigger** (+ `@gsap/react`) |
| Carousel | **Swiper** |
| Images | `next/image` |
| Polices | `next/font/google` |

Installation :
```bash
npm i gsap @gsap/react framer-motion lucide-react swiper
npm i -D daisyui
```

### Répartition des rôles d'animation (IMPORTANT, pour éviter les conflits)
- **GSAP + ScrollTrigger** : tout ce qui est lié au **scroll** (sections épinglées, parallaxe, scrub, compteurs, reveals au scroll, ligne de parcours qui se dessine).
- **Framer Motion** : tout ce qui est **interaction** (hover, tap, apparition du menu mobile, transitions de composants, ouverture d'un modal/lightbox d'image).
- **Règle d'or** : ne jamais animer le **même élément** avec les deux librairies.
- Swiper gère ses propres transitions de slides (pas de GSAP dessus).

---

## 3. Identité visuelle

Palette de départ (à **affiner** en extrayant les couleurs réelles des emballages Queen's dans les images fournies) :

| Token | Hex | Usage |
|---|---|---|
| `--nioto-or` | `#D99A1E` | Or de l'huile, accent principal |
| `--nioto-ambre` | `#A86B10` | Hover, détails chauds |
| `--nioto-vert` | `#1E3A2B` | Fond sombre, sections « terre / agro » |
| `--nioto-coton` | `#FAF7F0` | Fond clair principal (blanc coton) |
| `--nioto-karite` | `#EFE5CC` | Fond secondaire (crème karité) |
| `--nioto-brun` | `#2E2116` | Texte principal |
| `--nioto-rouge` | `#A82A22` | Touche Queen's, très rare |

- Configurer ces couleurs comme **thème daisyUI** nommé `nioto` (plugin daisyUI dans le CSS Tailwind v4 avec `themes`), et aussi comme variables CSS.
- Alterner **fonds clairs (coton/karité)** et **fonds sombres (vert profond)** pour rythmer le scroll.

Typographie :
- Titres : **Fraunces** (serif expressif, poids 600–800, grandes tailles).
- Texte / UI : **Manrope** (400–600).
- Échelle : titres hero en `clamp(3rem, 8vw, 7.5rem)`, interligne serré (≈1).

Logo :
- Si un fichier logo est présent dans `public/images/logo/`, l'utiliser.
- Sinon : logotype provisoire texte « **NIOTO** » en Fraunces, majuscules, espacement léger, avec une petite goutte d'huile en SVG simple. Prévoir le remplacement facile.

Formes et détails :
- Coins peu arrondis (4–8 px). Pas de pilules partout.
- Fins filets (1 px) et grands chiffres/typographie comme éléments graphiques.
- Une **goutte d'huile SVG** comme motif récurrent (séparateurs, curseur du scroll, accent), dessinée proprement, pas décorative à outrance.

---

## 4. Structure du projet

```
app/
  layout.tsx            # polices, metadata, thème daisyUI, <Header/> <Footer/>
  page.tsx              # assemble les sections dans l'ordre du §5
  globals.css           # @import "tailwindcss"; thème nioto; variables
components/
  layout/Header.tsx
  layout/Footer.tsx
  sections/Hero.tsx
  sections/About.tsx
  sections/Process.tsx          # parcours graine → huile (GSAP pin + scrub)
  sections/Queens.tsx           # produit phare + Swiper
  sections/Karite.tsx
  sections/Tourteaux.tsx
  sections/KeyFigures.tsx       # compteurs GSAP
  sections/Citizen.tsx          # engagements
  ui/ProductCarousel.tsx        # Swiper
  ui/OilDrop.tsx                # SVG goutte
  ui/Counter.tsx
  ui/Reveal.tsx                 # utilitaire reveal au scroll (GSAP)
lib/
  content.ts            # TOUT le texte et les faits (source unique, issue du briefing)
  gsap.ts               # enregistrement ScrollTrigger + helpers
public/images/
  logo/
  produits/queens/
  produits/karite/
  produits/tourteaux/
  usine/
  hero/
```

- **Tout le contenu** (textes, chiffres, coordonnées) est centralisé dans `lib/content.ts`, jamais écrit en dur dans les composants.
- Composants avec animations GSAP = `"use client"`.
- Enregistrer les plugins une seule fois dans `lib/gsap.ts` : `gsap.registerPlugin(ScrollTrigger)`.

---

## 5. Sections à implémenter (dans l'ordre)

### Header
- Logo NIOTO à gauche, liens d'ancre : Entreprise · Queen's · Karité · Engagements · Contact.
- Transparent sur le hero, devient fond coton avec filet fin après scroll (GSAP ScrollTrigger ou état scroll).
- Menu mobile : panneau plein écran, ouverture/fermeture avec **Framer Motion**.
- Bouton « Nous contacter » qui scrolle vers le footer.

### 1. Hero
- Très grande image de produit ou d'usine en fond (depuis `public/images/hero/`), avec un voile vert sombre léger pour la lisibilité.
- Titre fort en Fraunces, spécifique : ex. « L'huile du Togo, de la graine à votre table. » + sous-titre court : transformation locale des oléagineux, marque Queen's.
- Une goutte d'huile SVG qui **tombe/se dessine** à l'arrivée.
- **GSAP** : titre révélé ligne par ligne (masque + translateY), image en **parallaxe lente** au scroll (`scrub`).
- Indicateur de scroll discret (flèche Lucide `ArrowDown`, pas d'effet « glow »).

### 2. Qui est NIOTO
- Fond coton. Mise en page asymétrique : grand texte à gauche, image d'usine/produit décalée à droite.
- Contenu (briefing §2–3) : Nouvelle Industrie des Oléagineux du Togo, filiale du groupe GEOCOTON, installée à Lomé près du port.
- **GSAP** : paragraphes en fade-up avec léger décalage ; image qui se « dévoile » (clip-path) au scroll.

### 3. Du champ à la bouteille — section signature (parcours)
- Section **épinglée** (`pin: true`) en fond vert profond, avec scroll « scrubbé ».
- 5 étapes qui s'enchaînent : **Graine de coton → Pressage → Huile raffinée → Contrôle laboratoire → Votre table**.
- Une **ligne SVG** (la « goutte » qui suit un chemin) se dessine progressivement (`stroke-dashoffset` lié au scroll) ; chaque étape s'allume à son tour avec son texte.
- Utiliser des **images réelles** quand elles existent pour chaque étape ; sinon illustration SVG simple et propre.
- Mobile : version **verticale non épinglée** (étapes empilées avec reveal), pour la performance.
- Textes : uniquement des faits du briefing (graines locales de la Société Cotonnière du Togo, laboratoire, normes européennes).

### 4. Queen's — produit phare
- Fond coton/karité. Titre « Queen's » + accroche.
- **Carousel Swiper** des images produits (`ProductCarousel.tsx`) :
  - Modules : `Navigation`, `Pagination`, `Keyboard`, `A11y` (+ `Autoplay` lent, pause au hover).
  - Slides larges avec image `next/image`, légende courte (nom/format si connu, sinon rien).
  - Boutons précédent/suivant avec Lucide `ChevronLeft` / `ChevronRight`, style sobre.
  - Breakpoints : 1 slide mobile, 2 tablette, 3 desktop (effet « coverflow/fade » interdit : rester sobre).
  - **Framer Motion** : léger scale/hover sur la slide active et ouverture d'une **lightbox** au clic.
- Sous le carousel : « Les 5 bonnes raisons de choisir Queen's » (briefing §3.1), présentées en **liste éditoriale numérotée** (grands numéros 01–05), PAS en cartes à icônes.
- Valeurs nutritionnelles en tableau typographique propre (mono-insaturés 18,7 %, poly-insaturés 49,8 %, vitamine E 67 UI/100 g, vitamine A 30 % du besoin journalier), avec la mention « selon NIOTO ».
- **GSAP** : numéros qui apparaissent en cascade ; chiffres nutritionnels qui comptent jusqu'à leur valeur.

### 5. Karité
- Fond vert profond ou brun chaud pour contraster. Images karité (amandes, beurre, unité de production).
- Contenu : trituration à façon pour grands groupes européens, premier producteur de beurre brut de karité en Afrique de l'Ouest (formulation du briefing), débouchés chocolaterie / confiserie / cosmétique.
- Trois débouchés présentés en **bandeau horizontal** qui défile légèrement au scroll (GSAP `x` lié au scroll), pas en cartes icônes.
- Le chiffre « 20 000 t/an » ne s'affiche que si la constante `SHOW_KARITE_TONNAGE` dans `lib/content.ts` vaut `true` (par défaut `false`).

### 6. Tourteaux de coton & aliments bétail
- Section courte, fond karité. Message : « Rien ne se perd, toute la graine est valorisée. »
- Visuel : schéma simple graine → huile + tourteau (SVG propre) ; image réelle si disponible.
- **GSAP** : la graine se « sépare » en deux flux au scroll (huile / tourteau).

### 7. Chiffres clés
- Bandeau sombre avec grands chiffres en Fraunces, compteurs animés au scroll (`ScrollTrigger`, `once: true`) :
  - **100+** entreprises et fournisseurs qui travaillent grâce à NIOTO
  - **15** pays d'Afrique desservis (mention « source presse » discrète si pas validé)
  - **30 %** du besoin journalier en vitamine A (Queen's)
  - **0** cholestérol (huile sans cholestérol)
- Pas d'autres chiffres. Aucune invention.

### 8. Entreprise citoyenne
- Les 5 engagements du briefing §4, en **liste éditoriale** avec filets fins et grand texte, sur image d'ambiance (équipe/usine si fournie).
- **GSAP** : lignes qui se révèlent une à une, filet qui se dessine.

### 9. Footer (CONTACT) — obligatoire et complet
Le contact est **dans le footer**, présent sur toute la page.
- Colonne 1 : logo NIOTO + une phrase d'accroche + mention « Filiale du groupe GEOCOTON ».
- Colonne 2 — **Contact** :
  - Adresse : Zone industrielle du Port, Katanga, Zone Portuaire — BP 3086, Lomé, Togo (`MapPin`)
  - Téléphones cliquables `tel:` : +228 22 27 23 79 · +228 22 27 26 84 · +228 22 27 35 23 (`Phone`)
  - Fax : +228 22 27 68 33
  - Horaires : lun–ven 08h00–17h00, week-end fermé (`Clock`)
  - Email : n'afficher que s'il est fourni dans `content.ts`, sinon ne pas l'afficher
- Colonne 3 : liens d'ancre vers les sections + lien **Facebook** (https://www.facebook.com/nioto.togo/). Lucide n'a plus d'icône de marque : utiliser un petit SVG Facebook inline.
- Bouton **« Itinéraire »** vers Google Maps : `https://www.google.com/maps/dir/?api=1&destination=6.15011111,1.29146944`.
- Ligne basse : © année courante NIOTO SA · Lomé, Togo. Pas de mention inventée.
- **GSAP** : le footer se révèle (léger fade-up) ; **Framer Motion** : hover des liens.

---

## 6. Images produits (fournies par Eric)

- L'utilisateur dépose ses images dans `public/images/` selon les dossiers du §4.
- **Avant de coder**, l'agent **liste le contenu de `public/images/`** et construit les carousels/sections à partir des fichiers réellement présents.
- Si un dossier est vide : afficher un **placeholder neutre** (aplat crème + nom du produit), jamais d'image externe ni générée.
- Utiliser `next/image` avec `fill` + `sizes`, `priority` seulement pour l'image du hero, `alt` descriptif en français (ex. « Bouteille d'huile Queen's de NIOTO »).
- Conserver les ratios ; prévoir `object-fit: cover` avec point focal correct.
- Ne pas retoucher ni recolorier les packshots.

---

## 7. Détails d'implémentation GSAP

- Utiliser le hook `useGSAP` de `@gsap/react` avec un `scope` (ref) et le nettoyage automatique.
- `ScrollTrigger.matchMedia` / `gsap.matchMedia()` :
  - **Desktop (≥1024 px)** : sections épinglées, parallaxe, scrub complet.
  - **Mobile** : pas de pin, reveals simples (fade-up), animations réduites.
- **`prefers-reduced-motion: reduce`** : désactiver pin, parallaxe et scrub ; afficher le contenu directement, sans animation.
- Reveal générique : `Reveal.tsx` qui applique `opacity 0→1`, `y 40→0`, `duration ~0.9`, `ease: "power3.out"`, déclenché à `start: "top 85%"`.
- Après chargement des images : `ScrollTrigger.refresh()`.
- Pas de `will-change` partout, seulement sur les éléments animés en continu.
- Nettoyer les triggers au démontage (déjà géré par `useGSAP`).
- Smooth scroll global (Lenis, etc.) : **non**, pour garder une base simple et fiable.

---

## 8. Qualité, accessibilité, SEO

- Responsive mobile-first, testé à 360 px, 768 px, 1280 px, 1920 px. Aucun défilement horizontal.
- Contraste AA minimum (texte sur fond vert/sombre à vérifier).
- Navigation clavier, focus visible, `aria-label` sur les boutons du carousel et du menu.
- Liens `tel:` fonctionnels, cibles tactiles ≥ 44 px.
- Performance : images optimisées, polices via `next/font`, pas de librairie en plus, animations uniquement `transform`/`opacity`.
- SEO : `metadata` complète en français (title, description, Open Graph), balisage JSON-LD `Organization` (nom, adresse Lomé, téléphones, URL).
- Langue `<html lang="fr">`.

---

## 9. Étapes d'exécution (suivre dans cet ordre)

1. Lire `briefing.md` puis `exe.md`.
2. Lister `public/images/` et résumer ce qui est disponible.
3. Initialiser Next.js + TypeScript + Tailwind v4, installer les dépendances du §2.
4. Configurer le thème daisyUI `nioto`, les polices et les variables (§3).
5. Écrire `lib/content.ts` à partir du briefing (textes, faits, coordonnées, drapeaux `SHOW_KARITE_TONNAGE`).
6. Créer `lib/gsap.ts`, `Reveal`, `OilDrop`, `Counter`.
7. Construire Header + Footer.
8. Construire les sections dans l'ordre : Hero → About → Process → Queens (+ Swiper) → Karité → Tourteaux → KeyFigures → Citizen.
9. Brancher les animations GSAP (desktop) et les versions mobiles / reduced-motion.
10. Passer la **checklist du §10**, corriger.
11. Lancer `npm run build` et `npm run lint` : 0 erreur.

---

## 10. Checklist finale (à cocher avant de rendre)

- [ ] Aucune icône sparkle/étincelles, aucun emoji, aucun dégradé violet.
- [ ] Aucune grille répétitive de cartes à icônes.
- [ ] Tous les textes viennent de `lib/content.ts` et du briefing, rien d'inventé.
- [ ] Aucun nom de dirigeant sur le site.
- [ ] Vraies images produits utilisées ; placeholders propres ailleurs.
- [ ] Carousel Swiper fonctionnel (clavier, tactile, boutons).
- [ ] Section « Du champ à la bouteille » épinglée sur desktop, empilée sur mobile.
- [ ] Compteurs animés, uniquement avec les chiffres autorisés.
- [ ] Footer complet : adresse, 3 téléphones cliquables, fax, horaires, Facebook, bouton Itinéraire.
- [ ] `prefers-reduced-motion` respecté.
- [ ] Mention « selon NIOTO » sur les allégations nutritionnelles.
- [ ] `npm run build` passe sans erreur.

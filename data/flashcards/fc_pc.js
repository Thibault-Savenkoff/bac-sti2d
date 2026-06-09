export const CARDS = [

  // ── PC_ENERGIE ──────────────────────────────────────────────────
  {
    id: 'pc_e01',
    front: "Quelle est l'unité SI de l'énergie et ses équivalences courantes ?",
    back: "Joule (J). Conversions : 1 kWh = 3,6×10⁶ J ; 1 eV = 1,6×10⁻¹⁹ J ; 1 cal = 4,18 J.",
    tags: ['PC_ENERGIE'], difficulty: 1
  },
  {
    id: 'pc_e02',
    front: "Que vaut la puissance instantanée P(t) en fonction de l'énergie ?",
    back: "$$P(t) = \\frac{\\mathrm{d}E}{\\mathrm{d}t}$$  C'est la dérivée de l'énergie par rapport au temps.",
    tags: ['PC_ENERGIE'], difficulty: 2
  },
  {
    id: 'pc_e03',
    front: "Comment calculer l'autonomie d'un système embarquant une énergie ΔE à puissance P constante ?",
    back: "$$\\Delta t = \\frac{\\Delta E}{P}$$",
    tags: ['PC_ENERGIE'], difficulty: 1
  },
  {
    id: 'pc_e04',
    front: "Définir le rendement η d'un convertisseur.",
    back: "$$\\eta = \\frac{E_{\\text{utile}}}{E_{\\text{entrante}}} = \\frac{P_{\\text{utile}}}{P_{\\text{entrante}}} \\qquad 0 \\leq \\eta \\leq 1$$",
    tags: ['PC_ENERGIE'], difficulty: 1
  },
  {
    id: 'pc_e05',
    front: "Comment retrouver l'énergie à partir d'un graphique P = f(t) ?",
    back: "L'énergie est égale à l'**aire sous la courbe** P(t). Pour un triangle : E = Base × Hauteur / 2.",
    tags: ['PC_ENERGIE'], difficulty: 2
  },

  // ── PC_OXREDO ────────────────────────────────────────────────────
  {
    id: 'pc_ox01',
    front: "Qu'est-ce qu'un oxydant ? Un réducteur ?",
    back: "**Oxydant** : capte des électrons (e⁻). **Réducteur** : cède des électrons.",
    tags: ['PC_OXREDO'], difficulty: 1
  },
  {
    id: 'pc_ox02',
    front: "Dans une pile, quelle est la réaction à l'anode ? À la cathode ?",
    back: "**Anode (pôle −) : oxydation** — le réducteur cède des e⁻.\n**Cathode (pôle +) : réduction** — l'oxydant capte des e⁻.\n\nMémo : Cathode/Réduction (consonnes) — Anode/Oxydation (voyelles).",
    tags: ['PC_OXREDO'], difficulty: 1
  },
  {
    id: 'pc_ox03',
    front: "Écrire les demi-équations et l'équation-bilan de la pile Daniell.",
    back: "Anode : Zn(s) → Zn²⁺(aq) + 2e⁻\nCathode : Cu²⁺(aq) + 2e⁻ → Cu(s)\nBilan : Zn(s) + Cu²⁺(aq) → Cu(s) + Zn²⁺(aq)",
    tags: ['PC_OXREDO'], difficulty: 3
  },
  {
    id: 'pc_ox04',
    front: "Quelle différence entre une pile et un accumulateur ?",
    back: "**Pile** : réactions irréversibles → non rechargeable.\n**Accumulateur** : réactions réversibles → rechargeable (en charge, un générateur extérieur force les réactions inverses).",
    tags: ['PC_OXREDO'], difficulty: 1
  },
  {
    id: 'pc_ox05',
    front: "Donner la formule de l'énergie stockée dans une pile (capacité Q, tension U).",
    back: "$$E = Q \\times U \\quad (\\mathrm{W \\cdot h})$$\nSi on veut en joules : 1 W·h = 3600 J.",
    tags: ['PC_OXREDO'], difficulty: 2
  },
  {
    id: 'pc_ox06',
    front: "Dans la pile à hydrogène, écrire les deux demi-réactions.",
    back: "Cathode : O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)\nAnode : H₂(g) → 2H⁺(aq) + 2e⁻\nBilan : O₂ + 2H₂ → 2H₂O",
    tags: ['PC_OXREDO'], difficulty: 3
  },

  // ── PC_SIGNAUX ───────────────────────────────────────────────────
  {
    id: 'pc_si01',
    front: "Comment calculer la valeur efficace d'un signal sinusoïdal d'amplitude A_max ?",
    back: "$$A_{\\text{eff}} = \\frac{A_{\\max}}{\\sqrt{2}}$$\nEx. réseau 230 V efficace → amplitude ≈ 325 V.",
    tags: ['PC_SIGNAUX'], difficulty: 1
  },
  {
    id: 'pc_si02',
    front: "Donner la relation entre pulsation ω, fréquence f et période T.",
    back: "$$\\omega = 2\\pi f = \\frac{2\\pi}{T} \\quad (\\mathrm{rad \\cdot s^{-1}})$$",
    tags: ['PC_SIGNAUX'], difficulty: 1
  },
  {
    id: 'pc_si03',
    front: "Donner la formule de la puissance apparente S.",
    back: "$$S = U_{\\text{eff}} \\times I_{\\text{eff}} \\quad (\\mathrm{VA})$$\nC'est la puissance de dimensionnement des installations.",
    tags: ['PC_SIGNAUX'], difficulty: 2
  },
  {
    id: 'pc_si04',
    front: "Définir et donner la formule du facteur de puissance k.",
    back: "$$k = \\frac{P}{S} \\quad (0 \\leq k \\leq 1)$$\nPlus k est proche de 1, moins il y a de pertes Joule dans les lignes.",
    tags: ['PC_SIGNAUX'], difficulty: 2
  },

  // ── PC_TRANSPORT ─────────────────────────────────────────────────
  {
    id: 'pc_tr01',
    front: "Donner la formule de la puissance dissipée par effet Joule dans une ligne de résistance R parcourue par un courant I.",
    back: "$$P_{\\text{Joule}} = R \\times I^2 \\quad (\\mathrm{W})$$\nDoubler I → pertes × 4 !",
    tags: ['PC_TRANSPORT'], difficulty: 1
  },
  {
    id: 'pc_tr02',
    front: "Pourquoi élève-t-on la tension lors du transport de l'énergie électrique ?",
    back: "P = U×I → pour même puissance, une tension plus haute nécessite un courant plus faible → pertes Joule (∝ I²) beaucoup réduites.",
    tags: ['PC_TRANSPORT'], difficulty: 2
  },
  {
    id: 'pc_tr03',
    front: "Donner la formule du rapport de transformation m d'un transformateur idéal.",
    back: "$$m = \\frac{u_2}{u_1} = \\frac{N_2}{N_1}$$\nm > 1 : élévateur ; m < 1 : abaisseur ; m = 1 : isolation galvanique.",
    tags: ['PC_TRANSPORT'], difficulty: 2
  },
  {
    id: 'pc_tr04',
    front: "À quelle intensité le courant électrique est-il dangereux pour l'homme ?",
    back: "10 mA : contraction et seuil de non-lâcher.\n30 mA (3 min) : paralysie respiratoire.\n50 mA (1 s) : fibrillation cardiaque irréversible.\nTensions dangereuses : 25 V (peau humide) à 50 V (peau sèche).",
    tags: ['PC_TRANSPORT'], difficulty: 2
  },

  // ── PC_THERMO ────────────────────────────────────────────────────
  {
    id: 'pc_th01',
    front: "Donner la formule de la quantité d'énergie Q lors d'un changement de température (sans changement d'état).",
    back: "$$Q = m \\times c \\times (T_f - T_i) \\quad (\\mathrm{J})$$",
    tags: ['PC_THERMO'], difficulty: 1
  },
  {
    id: 'pc_th02',
    front: "Qu'est-ce que le flux thermique φ ?",
    back: "Quantité d'énergie traversant une paroi par seconde :\n$$\\phi = \\frac{Q}{\\Delta t} \\quad (\\mathrm{W})$$",
    tags: ['PC_THERMO'], difficulty: 1
  },
  {
    id: 'pc_th03',
    front: "Donner la formule de la résistance thermique R_th d'une paroi.",
    back: "$$R_{\\mathrm{th}} = \\frac{e}{\\lambda \\times S} \\quad (\\mathrm{K \\cdot W^{-1}})$$\ne : épaisseur (m), λ : conductivité (W·m⁻¹·K⁻¹), S : surface (m²).",
    tags: ['PC_THERMO'], difficulty: 2
  },
  {
    id: 'pc_th04',
    front: "Donner la loi de Fourier intégrale (analogie thermique de la loi d'Ohm).",
    back: "$$\\Delta T = T_{\\text{chaud}} - T_{\\text{froid}} = R_{\\mathrm{th}} \\times \\phi$$\nAnalogue à ΔU = R × I en électricité.",
    tags: ['PC_THERMO'], difficulty: 2
  },
  {
    id: 'pc_th05',
    front: "Résistances thermiques en série vs en parallèle ?",
    back: "Série : $$R_{\\text{tot}} = \\sum R_i$$\nParallèle : $$\\frac{1}{R_{\\text{tot}}} = \\sum \\frac{1}{R_i}$$",
    tags: ['PC_THERMO'], difficulty: 3
  },

  // ── PC_MECA ──────────────────────────────────────────────────────
  {
    id: 'pc_me01',
    front: "Donner l'expression de la force de frottement aérodynamique à grande vitesse.",
    back: "$$f = \\frac{1}{2} \\rho \\, C_x \\, S \\, v^2$$\nρ : masse volumique du fluide, C_x : coefficient de traînée, S : surface frontale.",
    tags: ['PC_MECA'], difficulty: 3
  },
  {
    id: 'pc_me02',
    front: "Énoncer le Principe Fondamental de la Dynamique (PFD, 2e loi de Newton).",
    back: "$$\\sum \\vec{F}_{\\text{ext}} = m \\times \\vec{a}$$\nDans un référentiel galiléen.",
    tags: ['PC_MECA'], difficulty: 1
  },
  {
    id: 'pc_me03',
    front: "Énoncer le théorème de l'énergie cinétique.",
    back: "$$\\Delta E_c = \\sum W_{AB}(\\vec{F}_i)$$\nVariation d'énergie cinétique = somme des travaux de toutes les forces.",
    tags: ['PC_MECA'], difficulty: 2
  },
  {
    id: 'pc_me04',
    front: "Donner la formule du travail d'une force F sur un déplacement AB (angle φ).",
    back: "$$W = F \\times AB \\times \\cos\\varphi$$\nMoteur si φ = 0 (W > 0) ; résistant si φ = π (W < 0) ; nul si φ = π/2.",
    tags: ['PC_MECA'], difficulty: 2
  },

  // ── PC_ROTATION ──────────────────────────────────────────────────
  {
    id: 'pc_ro01',
    front: "Donner la relation entre vitesse linéaire v et vitesse angulaire ω.",
    back: "$$v = R \\times \\omega$$\nR : distance entre le point et l'axe de rotation.",
    tags: ['PC_ROTATION'], difficulty: 1
  },
  {
    id: 'pc_ro02',
    front: "Convertir une fréquence de rotation n (tr/min) en vitesse angulaire ω (rad/s).",
    back: "$$\\omega = \\frac{2\\pi \\times n}{60}$$",
    tags: ['PC_ROTATION'], difficulty: 2
  },
  {
    id: 'pc_ro03',
    front: "Définir le moment d'une force M(F) et son unité.",
    back: "$$M(\\vec{F}) = F \\times d \\quad (\\mathrm{N \\cdot m})$$\nd = bras de levier : distance perpendiculaire entre la droite d'action et l'axe.",
    tags: ['PC_ROTATION'], difficulty: 2
  },
  {
    id: 'pc_ro04',
    front: "Définir un couple de forces et donner la formule de son moment M_C.",
    back: "Deux forces de même intensité F, même direction, sens contraires, distantes de D :\n$$M_C = F \\times D \\quad (\\mathrm{N \\cdot m})$$",
    tags: ['PC_ROTATION'], difficulty: 2
  },

  // ── PC_LUMIERE ───────────────────────────────────────────────────
  {
    id: 'pc_lu01',
    front: "Donner la formule de l'énergie transportée par un photon.",
    back: "$$\\Delta E = h \\times f = h \\times \\frac{c}{\\lambda}$$\nh = 6,63×10⁻³⁴ J·s, c = 3,0×10⁸ m·s⁻¹.",
    tags: ['PC_LUMIERE'], difficulty: 2
  },
  {
    id: 'pc_lu02',
    front: "Qu'est-ce que la puissance crête d'un panneau photovoltaïque ?",
    back: "Puissance maximale délivrée sous un ensoleillement de **1000 W·m⁻²** à 25 °C.",
    tags: ['PC_LUMIERE'], difficulty: 1
  },
  {
    id: 'pc_lu03',
    front: "Dans la caractéristique I = f(U) d'une cellule PV, où se trouve la puissance maximale ?",
    back: "Dans le **coude** de la caractéristique (point de fonctionnement optimal).",
    tags: ['PC_LUMIERE'], difficulty: 2
  },

  // ── PC_FLUIDES ───────────────────────────────────────────────────
  {
    id: 'pc_fl01',
    front: "Donner la formule de la force pressante exercée par un fluide sur une surface S.",
    back: "$$F = P \\times S \\quad (\\mathrm{N})$$\nForce perpendiculaire à la paroi, du fluide vers la paroi.",
    tags: ['PC_FLUIDES'], difficulty: 1
  },
  {
    id: 'pc_fl02',
    front: "Énoncer la loi fondamentale de la statique des fluides.",
    back: "$$p_B - p_A = \\rho \\times g \\times (z_A - z_B)$$\nLa pression augmente avec la profondeur.",
    tags: ['PC_FLUIDES'], difficulty: 2
  },

  // ── PC_CHANGE ────────────────────────────────────────────────────
  {
    id: 'pc_ch01',
    front: "Que se passe-t-il à la température lors d'un changement d'état ?",
    back: "La température **ne varie pas** : toute l'énergie sert à rompre ou former les liaisons intermoléculaires.",
    tags: ['PC_CHANGE'], difficulty: 1
  },
  {
    id: 'pc_ch02',
    front: "Donner la formule de l'énergie de changement d'état.",
    back: "$$Q = m \\times L \\quad (\\mathrm{J})$$\nL = énergie massique de changement d'état (J·kg⁻¹).\nEx. : L_vap(eau) = 2257 kJ·kg⁻¹ à 100 °C.",
    tags: ['PC_CHANGE'], difficulty: 1
  },
  {
    id: 'pc_ch03',
    front: "Quels changements d'état sont exothermiques (libèrent de l'énergie) ?",
    back: "**Solidification**, **liquéfaction** et **condensation** → création de liaisons → exothermique.\n(Fusion, vaporisation, sublimation sont endothermiques → rupture de liaisons.)",
    tags: ['PC_CHANGE'], difficulty: 2
  },
  {
    id: 'pc_ch04',
    front: "Qu'est-ce que le point triple sur un diagramme d'état (p, T) ?",
    back: "Point de coexistence des **3 états** simultanément (solide, liquide, gaz).\nPour l'eau : T = 0,01 °C, p = 611,7 Pa.",
    tags: ['PC_CHANGE'], difficulty: 2
  },

  // ── PC_RADIOACT ──────────────────────────────────────────────────
  {
    id: 'pc_ra01',
    front: "Donner la loi de décroissance radioactive.",
    back: "$$N(t) = N_0 \\times e^{-\\lambda t}$$\nN₀ : nombre initial de noyaux, λ : constante de désintégration (s⁻¹).",
    tags: ['PC_RADIOACT'], difficulty: 2
  },
  {
    id: 'pc_ra02',
    front: "Définir la demi-vie t₁/₂ et donner sa relation avec λ.",
    back: "Durée pour que N₀/2 noyaux se soient désintégrés :\n$$\\lambda = \\frac{\\ln 2}{t_{1/2}}$$",
    tags: ['PC_RADIOACT'], difficulty: 2
  },
  {
    id: 'pc_ra03',
    front: "Citer les 3 types de rayonnements radioactifs et la particule émise.",
    back: "α : noyau d'hélium ⁴He\nβ⁻ : électron e⁻ (neutron → proton)\nγ : photon haute énergie (pas de changement de noyau)",
    tags: ['PC_RADIOACT'], difficulty: 1
  },
  {
    id: 'pc_ra04',
    front: "Qu'est-ce que l'activité A d'une source radioactive ?",
    back: "Nombre de désintégrations par seconde.\n$$A(t) = \\lambda \\times N(t) \\quad (\\mathrm{Bq})$$",
    tags: ['PC_RADIOACT'], difficulty: 2
  },

  // ── PC_ACIDOBASE ─────────────────────────────────────────────────
  {
    id: 'pc_ab01',
    front: "Définir un acide et une base au sens de Brønsted.",
    back: "**Acide** : espèce qui *donne* un proton H⁺.\n**Base** : espèce qui *accepte* un proton H⁺.",
    tags: ['PC_ACIDOBASE'], difficulty: 1
  },
  {
    id: 'pc_ab02',
    front: "Donner la formule du pH en fonction de [H₃O⁺].",
    back: "$$\\mathrm{pH} = -\\log\\!\\left(\\frac{[\\mathrm{H_3O^+}]}{c^\\circ}\\right)$$\npH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.",
    tags: ['PC_ACIDOBASE'], difficulty: 1
  },
  {
    id: 'pc_ab03',
    front: "Donner la relation entre [H₃O⁺] et [HO⁻] à 25 °C.",
    back: "$$[\\mathrm{H_3O^+}] \\times [\\mathrm{HO^-}] = 10^{-14}$$",
    tags: ['PC_ACIDOBASE'], difficulty: 2
  },
  {
    id: 'pc_ab04',
    front: "Comment évolue le pH lors de la dilution d'une solution acide ? Basique ?",
    back: "**Acide** : pH augmente vers 7.\n**Basique** : pH diminue vers 7.\n(L'eau distillée a pH ≈ 7.)",
    tags: ['PC_ACIDOBASE'], difficulty: 1
  },

  // ── PC_SONORE ────────────────────────────────────────────────────
  {
    id: 'pc_so01',
    front: "Quelle différence entre son pur et son composé ?",
    back: "**Son pur** : signal sinusoïdal → spectre avec *un seul pic*.\n**Son composé** : signal périodique → spectre avec *plusieurs pics* (fondamental + harmoniques).",
    tags: ['PC_SONORE'], difficulty: 1
  },
  {
    id: 'pc_so02',
    front: "Donner la formule du niveau d'intensité sonore L.",
    back: "$$L = 10 \\times \\log\\!\\left(\\frac{I}{I_0}\\right) \\quad (\\mathrm{dB})$$\nI₀ = 10⁻¹² W·m⁻² (seuil d'audibilité).",
    tags: ['PC_SONORE'], difficulty: 2
  },
  {
    id: 'pc_so03',
    front: "Quelle est la plage de fréquences audibles par l'oreille humaine ?",
    back: "De **20 Hz à 20 kHz**. En dehors : infrasons (< 20 Hz) et ultrasons (> 20 kHz).",
    tags: ['PC_SONORE'], difficulty: 1
  },

  // ── PC_ONDES ─────────────────────────────────────────────────────
  {
    id: 'pc_on01',
    front: "Donner la relation entre célérité c, fréquence f et longueur d'onde λ.",
    back: "$$c = \\lambda \\times f \\quad \\Leftrightarrow \\quad \\lambda = \\frac{c}{f}$$\nc = 3,0×10⁸ m·s⁻¹ dans le vide.",
    tags: ['PC_ONDES'], difficulty: 1
  },
  {
    id: 'pc_on02',
    front: "Quelle est la longueur d'une antenne demi-onde ?",
    back: "$$L_{\\text{antenne}} = \\frac{\\lambda}{2}$$\nPour une antenne quart d'onde (avec réflecteur) : L = λ/4.",
    tags: ['PC_ONDES'], difficulty: 2
  },
  {
    id: 'pc_on03',
    front: "Qu'est-ce que la modulation d'amplitude (AM) ? Quelles fréquences contient le signal modulé ?",
    back: "On multiplie un signal informatif (basse fréquence f_m) par un signal porteur (haute fréquence f_p). Le signal modulé contient **f_p − f_m** et **f_p + f_m**. Bande passante = 2f_m.",
    tags: ['PC_ONDES'], difficulty: 3
  },
];

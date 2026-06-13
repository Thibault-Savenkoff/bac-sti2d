export const CARDS = [

  // ── PC_ENERGIE ──────────────────────────────────────────────────
  {
    id: 'pc_e01',
    front: "Quelle est l'unité SI de l'énergie et ses équivalences courantes ?",
    back: "Joule (J). Conversions : 1 kWh = 3,6×10⁶ J ; 1 eV = 1,6×10⁻¹⁹ J ; 1 cal = 4,18 J.",
    tags: ['PC_ENERGIE'], difficulty: 1,
    mcq: {
      question: "Combien de joules y a-t-il dans 1 kWh ?",
      choices: [
        { text: "3,6×10⁶ J", correct: true },
        { text: "3,6×10³ J", correct: false },
        { text: "1000 J", correct: false },
        { text: "3,6×10⁹ J", correct: false },
      ],
      explanation: "1 kWh = 1000 W × 3600 s = 3 600 000 J = 3,6×10⁶ J."
    }
  },
  {
    id: 'pc_e02',
    front: "Que vaut la puissance instantanée P(t) en fonction de l'énergie ?",
    back: "$$P(t) = \\frac{\\mathrm{d}E}{\\mathrm{d}t}$$  C'est la dérivée de l'énergie par rapport au temps.",
    tags: ['PC_ENERGIE'], difficulty: 2,
    mcq: {
      question: "La puissance instantanée P(t) est :",
      choices: [
        { text: "La dérivée de l'énergie par rapport au temps", correct: true },
        { text: "L'intégrale de l'énergie par rapport au temps", correct: false },
        { text: "L'énergie divisée par la tension", correct: false },
        { text: "Le produit de l'énergie et du temps", correct: false },
      ],
      explanation: "P(t) = dE/dt. Réciproquement, E = ∫P(t)dt = aire sous la courbe P(t)."
    }
  },
  {
    id: 'pc_e03',
    front: "Comment calculer l'autonomie d'un système embarquant une énergie ΔE à puissance P constante ?",
    back: "$$\\Delta t = \\frac{\\Delta E}{P}$$",
    tags: ['PC_ENERGIE'], difficulty: 1,
    mcq: {
      question: "Un véhicule embarque 54 kWh et consomme 18 kW en moyenne. Quelle est son autonomie ?",
      choices: [
        { text: "3 h", correct: true },
        { text: "36 h", correct: false },
        { text: "0,33 h", correct: false },
        { text: "972 h", correct: false },
      ],
      explanation: "Δt = ΔE / P = 54 kWh / 18 kW = 3 h."
    }
  },
  {
    id: 'pc_e04',
    front: "Définir le rendement η d'un convertisseur.",
    back: "$$\\eta = \\frac{E_{\\text{utile}}}{E_{\\text{entrante}}} = \\frac{P_{\\text{utile}}}{P_{\\text{entrante}}} \\qquad 0 \\leq \\eta \\leq 1$$",
    tags: ['PC_ENERGIE'], difficulty: 1,
    mcq: {
      question: "Un moteur reçoit 5 kW et fournit 4,25 kW. Quel est son rendement ?",
      choices: [
        { text: "0,85 (85%)", correct: true },
        { text: "1,18 (118%)", correct: false },
        { text: "0,75 (75%)", correct: false },
        { text: "0,50 (50%)", correct: false },
      ],
      explanation: "η = P_utile / P_entrante = 4,25 / 5 = 0,85."
    }
  },
  {
    id: 'pc_e05',
    front: "Comment retrouver l'énergie à partir d'un graphique P = f(t) ?",
    back: "L'énergie est égale à l'**aire sous la courbe** P(t). Pour un triangle : E = Base × Hauteur / 2.",
    tags: ['PC_ENERGIE'], difficulty: 2,
    mcq: {
      question: "Sur un graphique P(t), la puissance varie de 0 à 600 W linéairement sur 10 s (triangle). Quelle énergie est échangée ?",
      choices: [
        { text: "3 000 J", correct: true },
        { text: "6 000 J", correct: false },
        { text: "60 J", correct: false },
        { text: "300 J", correct: false },
      ],
      explanation: "Aire du triangle = (base × hauteur) / 2 = (10 × 600) / 2 = 3 000 J."
    }
  },

  // ── PC_OXREDO ────────────────────────────────────────────────────
  {
    id: 'pc_ox01',
    front: "Qu'est-ce qu'un oxydant ? Un réducteur ?",
    back: "**Oxydant** : capte des électrons (e⁻). **Réducteur** : cède des électrons.",
    tags: ['PC_OXREDO'], difficulty: 1,
    mcq: {
      question: "Dans la réaction Cu²⁺ + 2e⁻ → Cu, Cu²⁺ est :",
      choices: [
        { text: "Un oxydant (il capte des e⁻)", correct: true },
        { text: "Un réducteur (il cède des e⁻)", correct: false },
        { text: "Ni oxydant ni réducteur", correct: false },
        { text: "Un catalyseur", correct: false },
      ],
      explanation: "Cu²⁺ capte 2 électrons → c'est un oxydant. La réduction est toujours du côté de l'oxydant."
    }
  },
  {
    id: 'pc_ox02',
    front: "Dans une pile, quelle est la réaction à l'anode ? À la cathode ?",
    back: "**Anode (pôle −) : oxydation** — le réducteur cède des e⁻.\n**Cathode (pôle +) : réduction** — l'oxydant capte des e⁻.\n\nMémo : Cathode/Réduction (consonnes) — Anode/Oxydation (voyelles).",
    tags: ['PC_OXREDO'], difficulty: 1,
    mcq: {
      question: "À l'anode d'une pile, il se produit :",
      choices: [
        { text: "Une oxydation (le réducteur cède des e⁻)", correct: true },
        { text: "Une réduction (l'oxydant capte des e⁻)", correct: false },
        { text: "Une neutralisation acido-basique", correct: false },
        { text: "Rien — les réactions n'ont lieu qu'à la cathode", correct: false },
      ],
      explanation: "Mémo consonnes/voyelles : Cathode↔Réduction, Anode↔Oxydation. L'anode est le pôle −."
    }
  },
  {
    id: 'pc_ox03',
    front: "Écrire les demi-équations et l'équation-bilan de la pile Daniell.",
    back: "Anode : Zn(s) → Zn²⁺(aq) + 2e⁻\nCathode : Cu²⁺(aq) + 2e⁻ → Cu(s)\nBilan : Zn(s) + Cu²⁺(aq) → Cu(s) + Zn²⁺(aq)",
    tags: ['PC_OXREDO'], difficulty: 3,
    mcq: {
      question: "Dans la pile Daniell, quelle espèce est oxydée ?",
      choices: [
        { text: "Zn (zinc solide)", correct: true },
        { text: "Cu²⁺ (ion cuivre)", correct: false },
        { text: "Cu (cuivre solide)", correct: false },
        { text: "Zn²⁺ (ion zinc)", correct: false },
      ],
      explanation: "Zn → Zn²⁺ + 2e⁻ : le zinc perd des électrons → oxydation. Cu²⁺ gagne des e⁻ → réduction."
    }
  },
  {
    id: 'pc_ox04',
    front: "Quelle différence entre une pile et un accumulateur ?",
    back: "**Pile** : réactions irréversibles → non rechargeable.\n**Accumulateur** : réactions réversibles → rechargeable (en charge, un générateur extérieur force les réactions inverses).",
    tags: ['PC_OXREDO'], difficulty: 1,
    mcq: {
      question: "Pourquoi une pile alcaline ne se recharge-t-elle pas ?",
      choices: [
        { text: "Ses réactions électrochimiques sont irréversibles", correct: true },
        { text: "Sa tension est trop faible pour la recharge", correct: false },
        { text: "Elle manque d'électrolyte après usage", correct: false },
        { text: "La recharge crée des gaz explosifs", correct: false },
      ],
      explanation: "Dans une pile, les réactions chimiques ne peuvent pas être inversées par un courant extérieur, contrairement à un accumulateur Li-ion."
    }
  },
  {
    id: 'pc_ox05',
    front: "Donner la formule de l'énergie stockée dans une pile (capacité Q, tension U).",
    back: "$$E = Q \\times U \\quad (\\mathrm{W \\cdot h})$$\nSi on veut en joules : 1 W·h = 3600 J.",
    tags: ['PC_OXREDO'], difficulty: 2,
    mcq: {
      question: "Une batterie de 12 V et 60 Ah contient quelle énergie ?",
      choices: [
        { text: "720 Wh", correct: true },
        { text: "72 Wh", correct: false },
        { text: "5 Wh", correct: false },
        { text: "7200 Wh", correct: false },
      ],
      explanation: "E = Q × U = 60 Ah × 12 V = 720 Wh."
    }
  },
  {
    id: 'pc_ox06',
    front: "Dans la pile à hydrogène, écrire les deux demi-réactions.",
    back: "Cathode : O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)\nAnode : H₂(g) → 2H⁺(aq) + 2e⁻\nBilan : O₂ + 2H₂ → 2H₂O",
    tags: ['PC_OXREDO'], difficulty: 3,
    mcq: {
      question: "Dans la pile à hydrogène, quel est le seul déchet produit ?",
      choices: [
        { text: "De l'eau (H₂O)", correct: true },
        { text: "Du CO₂", correct: false },
        { text: "Du méthane CH₄", correct: false },
        { text: "De l'O₂", correct: false },
      ],
      explanation: "Bilan : O₂ + 2H₂ → 2H₂O. Le seul produit est de l'eau, d'où l'intérêt écologique de cette technologie."
    }
  },

  // ── PC_SIGNAUX ───────────────────────────────────────────────────
  {
    id: 'pc_si01',
    front: "Comment calculer la valeur efficace d'un signal sinusoïdal d'amplitude A_max ?",
    back: "$$A_{\\text{eff}} = \\frac{A_{\\max}}{\\sqrt{2}}$$\nEx. réseau 230 V efficace → amplitude ≈ 325 V.",
    tags: ['PC_SIGNAUX'], difficulty: 1,
    mcq: {
      question: "Le réseau 230 V est une valeur efficace. Quelle est l'amplitude (valeur max) du signal ?",
      choices: [
        { text: "≈ 325 V", correct: true },
        { text: "115 V", correct: false },
        { text: "460 V", correct: false },
        { text: "230 V", correct: false },
      ],
      explanation: "A_max = A_eff × √2 = 230 × 1,414 ≈ 325 V."
    }
  },
  {
    id: 'pc_si02',
    front: "Donner la relation entre pulsation ω, fréquence f et période T.",
    back: "$$\\omega = 2\\pi f = \\frac{2\\pi}{T} \\quad (\\mathrm{rad \\cdot s^{-1}})$$",
    tags: ['PC_SIGNAUX'], difficulty: 1,
    mcq: {
      question: "Le réseau électrique français a f = 50 Hz. Quelle est sa pulsation ω ?",
      choices: [
        { text: "100π rad/s ≈ 314 rad/s", correct: true },
        { text: "50 rad/s", correct: false },
        { text: "2π rad/s ≈ 6,28 rad/s", correct: false },
        { text: "25π rad/s ≈ 78,5 rad/s", correct: false },
      ],
      explanation: "ω = 2πf = 2π × 50 = 100π ≈ 314 rad/s."
    }
  },
  {
    id: 'pc_si03',
    front: "Donner la formule de la puissance apparente S.",
    back: "$$S = U_{\\text{eff}} \\times I_{\\text{eff}} \\quad (\\mathrm{VA})$$\nC'est la puissance de dimensionnement des installations.",
    tags: ['PC_SIGNAUX'], difficulty: 2,
    mcq: {
      question: "Un appareil fonctionne sous 230 V et consomme 10 A. Sa puissance apparente est :",
      choices: [
        { text: "2300 VA", correct: true },
        { text: "23 VA", correct: false },
        { text: "230 W", correct: false },
        { text: "2300 W dans tous les cas", correct: false },
      ],
      explanation: "S = U × I = 230 × 10 = 2300 VA. S est en VA, pas en W (la puissance active P = S × cos φ)."
    }
  },
  {
    id: 'pc_si04',
    front: "Définir et donner la formule du facteur de puissance k.",
    back: "$$k = \\frac{P}{S} \\quad (0 \\leq k \\leq 1)$$\nPlus k est proche de 1, moins il y a de pertes Joule dans les lignes.",
    tags: ['PC_SIGNAUX'], difficulty: 2,
    mcq: {
      question: "Un moteur a P = 1800 W et S = 2300 VA. Son facteur de puissance k est :",
      choices: [
        { text: "≈ 0,78", correct: true },
        { text: "≈ 1,28", correct: false },
        { text: "≈ 0,22", correct: false },
        { text: "1 (car c'est un moteur)", correct: false },
      ],
      explanation: "k = P/S = 1800/2300 ≈ 0,78. Un facteur de puissance < 1 signifie qu'une partie du courant ne fait pas de travail utile."
    }
  },

  // ── PC_TRANSPORT ─────────────────────────────────────────────────
  {
    id: 'pc_tr01',
    front: "Donner la formule de la puissance dissipée par effet Joule dans une ligne de résistance R parcourue par un courant I.",
    back: "$$P_{\\text{Joule}} = R \\times I^2 \\quad (\\mathrm{W})$$\nDoubler I → pertes × 4 !",
    tags: ['PC_TRANSPORT'], difficulty: 1,
    mcq: {
      question: "On double le courant dans une ligne. Les pertes Joule sont multipliées par :",
      choices: [
        { text: "4", correct: true },
        { text: "2", correct: false },
        { text: "8", correct: false },
        { text: "1 (inchangées)", correct: false },
      ],
      explanation: "P_Joule = RI². Si I → 2I alors P → R(2I)² = 4RI². Les pertes sont multipliées par 4."
    }
  },
  {
    id: 'pc_tr02',
    front: "Pourquoi élève-t-on la tension lors du transport de l'énergie électrique ?",
    back: "P = U×I → pour même puissance, une tension plus haute nécessite un courant plus faible → pertes Joule (∝ I²) beaucoup réduites.",
    tags: ['PC_TRANSPORT'], difficulty: 2,
    mcq: {
      question: "On multiplie la tension de transport par 10 (puissance transportée inchangée). Les pertes Joule sont :",
      choices: [
        { text: "Divisées par 100", correct: true },
        { text: "Divisées par 10", correct: false },
        { text: "Multipliées par 10", correct: false },
        { text: "Inchangées", correct: false },
      ],
      explanation: "P = UI constant → si U×10 alors I÷10. Pertes = RI² → divisées par 100."
    }
  },
  {
    id: 'pc_tr03',
    front: "Donner la formule du rapport de transformation m d'un transformateur idéal.",
    back: "$$m = \\frac{u_2}{u_1} = \\frac{N_2}{N_1}$$\nm > 1 : élévateur ; m < 1 : abaisseur ; m = 1 : isolation galvanique.",
    tags: ['PC_TRANSPORT'], difficulty: 2,
    mcq: {
      question: "Un transformateur a N₁ = 400 spires et N₂ = 40 spires. C'est :",
      choices: [
        { text: "Un abaisseur (m = 0,1)", correct: true },
        { text: "Un élévateur (m = 10)", correct: false },
        { text: "Un transformateur d'isolement (m = 1)", correct: false },
        { text: "Impossible à déterminer sans les tensions", correct: false },
      ],
      explanation: "m = N₂/N₁ = 40/400 = 0,1 < 1 → abaisseur. La tension secondaire est 10 fois plus faible que la primaire."
    }
  },
  {
    id: 'pc_tr04',
    front: "À quelle intensité le courant électrique est-il dangereux pour l'homme ?",
    back: "10 mA : contraction et seuil de non-lâcher.\n30 mA (3 min) : paralysie respiratoire.\n50 mA (1 s) : fibrillation cardiaque irréversible.\nTensions dangereuses : 25 V (peau humide) à 50 V (peau sèche).",
    tags: ['PC_TRANSPORT'], difficulty: 2,
    mcq: {
      question: "À partir de quelle intensité risque-t-on une fibrillation cardiaque irréversible (en 1 s) ?",
      choices: [
        { text: "50 mA", correct: true },
        { text: "10 mA", correct: false },
        { text: "500 mA", correct: false },
        { text: "1 A", correct: false },
      ],
      explanation: "50 mA pendant 1 s peut provoquer une fibrillation cardiaque. 10 mA est le seuil de non-lâcher, 30 mA provoque une paralysie respiratoire."
    }
  },

  // ── PC_THERMO ────────────────────────────────────────────────────
  {
    id: 'pc_th01',
    front: "Donner la formule de la quantité d'énergie Q lors d'un changement de température (sans changement d'état).",
    back: "$$Q = m \\times c \\times (T_f - T_i) \\quad (\\mathrm{J})$$",
    tags: ['PC_THERMO'], difficulty: 1,
    mcq: {
      question: "On chauffe 2 kg d'eau (c = 4180 J/kg·K) de 20 °C à 100 °C. Quelle énergie faut-il ?",
      choices: [
        { text: "668 800 J", correct: true },
        { text: "8360 J", correct: false },
        { text: "334 400 J", correct: false },
        { text: "16 720 J", correct: false },
      ],
      explanation: "Q = m × c × ΔT = 2 × 4180 × (100 − 20) = 2 × 4180 × 80 = 668 800 J."
    }
  },
  {
    id: 'pc_th02',
    front: "Qu'est-ce que le flux thermique φ ?",
    back: "Quantité d'énergie traversant une paroi par seconde :\n$$\\phi = \\frac{Q}{\\Delta t} \\quad (\\mathrm{W})$$",
    tags: ['PC_THERMO'], difficulty: 1,
    mcq: {
      question: "Une paroi laisse passer 18 000 J en 1 h. Quel est son flux thermique φ ?",
      choices: [
        { text: "5 W", correct: true },
        { text: "18 000 W", correct: false },
        { text: "300 W", correct: false },
        { text: "0,083 W", correct: false },
      ],
      explanation: "φ = Q/Δt = 18 000 J / 3600 s = 5 W."
    }
  },
  {
    id: 'pc_th03',
    front: "Donner la formule de la résistance thermique R_th d'une paroi.",
    back: "$$R_{\\mathrm{th}} = \\frac{e}{\\lambda \\times S} \\quad (\\mathrm{K \\cdot W^{-1}})$$\ne : épaisseur (m), λ : conductivité (W·m⁻¹·K⁻¹), S : surface (m²).",
    tags: ['PC_THERMO'], difficulty: 2,
    mcq: {
      question: "On double l'épaisseur d'un isolant sans changer sa surface. Sa résistance thermique R_th :",
      choices: [
        { text: "Double", correct: true },
        { text: "Reste identique", correct: false },
        { text: "Est divisée par 2", correct: false },
        { text: "Est multipliée par 4", correct: false },
      ],
      explanation: "R_th = e/(λS). Si e est doublé, R_th est doublé. Une paroi plus épaisse isole mieux."
    }
  },
  {
    id: 'pc_th04',
    front: "Donner la loi de Fourier intégrale (analogie thermique de la loi d'Ohm).",
    back: "$$\\Delta T = T_{\\text{chaud}} - T_{\\text{froid}} = R_{\\mathrm{th}} \\times \\phi$$\nAnalogue à ΔU = R × I en électricité.",
    tags: ['PC_THERMO'], difficulty: 2,
    mcq: {
      question: "Une paroi a R_th = 2 K/W et subit ΔT = 20 °C. Quel est le flux thermique φ ?",
      choices: [
        { text: "10 W", correct: true },
        { text: "40 W", correct: false },
        { text: "0,1 W", correct: false },
        { text: "22 W", correct: false },
      ],
      explanation: "ΔT = R_th × φ → φ = ΔT / R_th = 20 / 2 = 10 W. Même raisonnement que la loi d'Ohm."
    }
  },
  {
    id: 'pc_th05',
    front: "Résistances thermiques en série vs en parallèle ?",
    back: "Série : $$R_{\\text{tot}} = \\sum R_i$$\nParallèle : $$\\frac{1}{R_{\\text{tot}}} = \\sum \\frac{1}{R_i}$$",
    tags: ['PC_THERMO'], difficulty: 3,
    mcq: {
      question: "Deux parois R_th = 1 K/W et R_th = 3 K/W sont traversées en série par le même flux. R_th totale ?",
      choices: [
        { text: "4 K/W", correct: true },
        { text: "0,75 K/W", correct: false },
        { text: "3 K/W", correct: false },
        { text: "1,5 K/W", correct: false },
      ],
      explanation: "En série : R_tot = R₁ + R₂ = 1 + 3 = 4 K/W. (En parallèle on aurait 1/R_tot = 1/1 + 1/3 → R_tot = 0,75 K/W.)"
    }
  },

  // ── PC_MECA ──────────────────────────────────────────────────────
  {
    id: 'pc_me01',
    front: "Donner l'expression de la force de frottement aérodynamique à grande vitesse.",
    back: "$$f = \\frac{1}{2} \\rho \\, C_x \\, S \\, v^2$$\nρ : masse volumique du fluide, C_x : coefficient de traînée, S : surface frontale.",
    tags: ['PC_MECA'], difficulty: 3,
    mcq: {
      question: "Si la vitesse d'un véhicule double, la résistance aérodynamique est multipliée par :",
      choices: [
        { text: "4", correct: true },
        { text: "2", correct: false },
        { text: "8", correct: false },
        { text: "√2", correct: false },
      ],
      explanation: "f ∝ v². Si v → 2v, alors f → (2v)² = 4v². La résistance aéro est quadruple."
    }
  },
  {
    id: 'pc_me02',
    front: "Énoncer le Principe Fondamental de la Dynamique (PFD, 2e loi de Newton).",
    back: "$$\\sum \\vec{F}_{\\text{ext}} = m \\times \\vec{a}$$\nDans un référentiel galiléen.",
    tags: ['PC_MECA'], difficulty: 1,
    mcq: {
      question: "Un objet de 5 kg soumis à une résultante de 20 N. Quelle est son accélération ?",
      choices: [
        { text: "4 m/s²", correct: true },
        { text: "100 m/s²", correct: false },
        { text: "0,25 m/s²", correct: false },
        { text: "15 m/s²", correct: false },
      ],
      explanation: "a = ΣF/m = 20/5 = 4 m/s²."
    }
  },
  {
    id: 'pc_me03',
    front: "Énoncer le théorème de l'énergie cinétique.",
    back: "$$\\Delta E_c = \\sum W_{AB}(\\vec{F}_i)$$\nVariation d'énergie cinétique = somme des travaux de toutes les forces.",
    tags: ['PC_MECA'], difficulty: 2,
    mcq: {
      question: "Un véhicule passe de 10 m/s à 20 m/s (m = 1000 kg). Quel travail net a été fourni ?",
      choices: [
        { text: "150 000 J", correct: true },
        { text: "50 000 J", correct: false },
        { text: "200 000 J", correct: false },
        { text: "100 000 J", correct: false },
      ],
      explanation: "ΔEc = ½m(v²−v₀²) = ½×1000×(400−100) = 500×300 = 150 000 J."
    }
  },
  {
    id: 'pc_me04',
    front: "Donner la formule du travail d'une force F sur un déplacement AB (angle φ).",
    back: "$$W = F \\times AB \\times \\cos\\varphi$$\nMoteur si φ = 0 (W > 0) ; résistant si φ = π (W < 0) ; nul si φ = π/2.",
    tags: ['PC_MECA'], difficulty: 2,
    mcq: {
      question: "Une force de 200 N est appliquée à 60° du déplacement de 5 m. Quel est le travail ?",
      choices: [
        { text: "500 J", correct: true },
        { text: "1000 J", correct: false },
        { text: "866 J", correct: false },
        { text: "0 J", correct: false },
      ],
      explanation: "W = F × d × cos60° = 200 × 5 × 0,5 = 500 J."
    }
  },

  // ── PC_ROTATION ──────────────────────────────────────────────────
  {
    id: 'pc_ro01',
    front: "Donner la relation entre vitesse linéaire v et vitesse angulaire ω.",
    back: "$$v = R \\times \\omega$$\nR : distance entre le point et l'axe de rotation.",
    tags: ['PC_ROTATION'], difficulty: 1,
    mcq: {
      question: "Une roue de R = 0,3 m tourne à ω = 20 rad/s. Quelle est la vitesse de son bord ?",
      choices: [
        { text: "6 m/s", correct: true },
        { text: "20,3 m/s", correct: false },
        { text: "0,015 m/s", correct: false },
        { text: "66,7 m/s", correct: false },
      ],
      explanation: "v = Rω = 0,3 × 20 = 6 m/s."
    }
  },
  {
    id: 'pc_ro02',
    front: "Convertir une fréquence de rotation n (tr/min) en vitesse angulaire ω (rad/s).",
    back: "$$\\omega = \\frac{2\\pi \\times n}{60}$$",
    tags: ['PC_ROTATION'], difficulty: 2,
    mcq: {
      question: "Un moteur tourne à 1500 tr/min. Quelle est sa vitesse angulaire ω ?",
      choices: [
        { text: "50π rad/s ≈ 157 rad/s", correct: true },
        { text: "1500 rad/s", correct: false },
        { text: "25 rad/s", correct: false },
        { text: "300π rad/s", correct: false },
      ],
      explanation: "ω = 2π × n/60 = 2π × 1500/60 = 2π × 25 = 50π ≈ 157 rad/s."
    }
  },
  {
    id: 'pc_ro03',
    front: "Définir le moment d'une force M(F) et son unité.",
    back: "$$M(\\vec{F}) = F \\times d \\quad (\\mathrm{N \\cdot m})$$\nd = bras de levier : distance perpendiculaire entre la droite d'action et l'axe.",
    tags: ['PC_ROTATION'], difficulty: 2,
    mcq: {
      question: "On applique 50 N à 0,4 m de l'axe (perpendiculairement). Quel est le moment ?",
      choices: [
        { text: "20 N·m", correct: true },
        { text: "50,4 N·m", correct: false },
        { text: "125 N·m", correct: false },
        { text: "0,008 N·m", correct: false },
      ],
      explanation: "M = F × d = 50 × 0,4 = 20 N·m."
    }
  },
  {
    id: 'pc_ro04',
    front: "Définir un couple de forces et donner la formule de son moment M_C.",
    back: "Deux forces de même intensité F, même direction, sens contraires, distantes de D :\n$$M_C = F \\times D \\quad (\\mathrm{N \\cdot m})$$",
    tags: ['PC_ROTATION'], difficulty: 2,
    mcq: {
      question: "Un couple applique deux forces de 30 N distantes de 0,2 m. Quel est son moment ?",
      choices: [
        { text: "6 N·m", correct: true },
        { text: "3 N·m", correct: false },
        { text: "60 N·m", correct: false },
        { text: "0 N·m (elles s'annulent)", correct: false },
      ],
      explanation: "M_C = F × D = 30 × 0,2 = 6 N·m. Les deux forces s'annulent en translation mais créent bien un moment de rotation."
    }
  },

  // ── PC_LUMIERE ───────────────────────────────────────────────────
  {
    id: 'pc_lu01',
    front: "Donner la formule de l'énergie transportée par un photon.",
    back: "$$\\Delta E = h \\times f = h \\times \\frac{c}{\\lambda}$$\nh = 6,63×10⁻³⁴ J·s, c = 3,0×10⁸ m·s⁻¹.",
    tags: ['PC_LUMIERE'], difficulty: 2,
    mcq: {
      question: "Que se passe-t-il à l'énergie d'un photon si sa fréquence double ?",
      choices: [
        { text: "Elle double (E = hf)", correct: true },
        { text: "Elle est divisée par 2", correct: false },
        { text: "Elle est multipliée par 4", correct: false },
        { text: "Elle ne change pas", correct: false },
      ],
      explanation: "E = hf : l'énergie est proportionnelle à la fréquence. Doubler f → doubler E."
    }
  },
  {
    id: 'pc_lu02',
    front: "Qu'est-ce que la puissance crête d'un panneau photovoltaïque ?",
    back: "Puissance maximale délivrée sous un ensoleillement de **1000 W·m⁻²** à 25 °C.",
    tags: ['PC_LUMIERE'], difficulty: 1,
    mcq: {
      question: "La puissance crête d'un panneau PV est mesurée avec un ensoleillement de :",
      choices: [
        { text: "1000 W/m²", correct: true },
        { text: "500 W/m²", correct: false },
        { text: "1500 W/m²", correct: false },
        { text: "La puissance crête = puissance par temps nuageux", correct: false },
      ],
      explanation: "Par convention, la puissance crête est mesurée sous 1000 W/m² à 25 °C (conditions standard STC)."
    }
  },
  {
    id: 'pc_lu03',
    front: "Dans la caractéristique I = f(U) d'une cellule PV, où se trouve la puissance maximale ?",
    back: "Dans le **coude** de la caractéristique (point de fonctionnement optimal).",
    tags: ['PC_LUMIERE'], difficulty: 2,
    mcq: {
      question: "Sur la courbe I-V d'un panneau PV, le point de puissance maximale se situe :",
      choices: [
        { text: "Dans le coude de la courbe", correct: true },
        { text: "Au courant de court-circuit I_cc", correct: false },
        { text: "À la tension de circuit ouvert U_oc", correct: false },
        { text: "Au milieu de la courbe", correct: false },
      ],
      explanation: "P = U×I est maximale dans le coude. Aux extrêmes : à I_cc, U ≈ 0 donc P ≈ 0 ; à U_oc, I = 0 donc P = 0."
    }
  },

  // ── PC_FLUIDES ───────────────────────────────────────────────────
  {
    id: 'pc_fl01',
    front: "Donner la formule de la force pressante exercée par un fluide sur une surface S.",
    back: "$$F = P \\times S \\quad (\\mathrm{N})$$\nForce perpendiculaire à la paroi, du fluide vers la paroi.",
    tags: ['PC_FLUIDES'], difficulty: 1,
    mcq: {
      question: "Un piston de 0,02 m² est soumis à une pression de 5×10⁵ Pa. Quelle est la force exercée ?",
      choices: [
        { text: "10 000 N", correct: true },
        { text: "25 000 N", correct: false },
        { text: "1 000 N", correct: false },
        { text: "2,5×10⁷ N", correct: false },
      ],
      explanation: "F = P × S = 5×10⁵ × 0,02 = 10 000 N."
    }
  },
  {
    id: 'pc_fl02',
    front: "Énoncer la loi fondamentale de la statique des fluides.",
    back: "$$p_B - p_A = \\rho \\times g \\times (z_A - z_B)$$\nLa pression augmente avec la profondeur.",
    tags: ['PC_FLUIDES'], difficulty: 2,
    mcq: {
      question: "On s'enfonce de 10 m dans l'eau (ρ = 1000 kg/m³). De combien la pression augmente-t-elle ?",
      choices: [
        { text: "98 100 Pa ≈ 1 bar", correct: true },
        { text: "10 000 Pa", correct: false },
        { text: "9810 kPa", correct: false },
        { text: "1000 Pa", correct: false },
      ],
      explanation: "Δp = ρ × g × Δz = 1000 × 9,81 × 10 = 98 100 Pa ≈ 1 bar."
    }
  },

  // ── PC_CHANGE ────────────────────────────────────────────────────
  {
    id: 'pc_ch01',
    front: "Que se passe-t-il à la température lors d'un changement d'état ?",
    back: "La température **ne varie pas** : toute l'énergie sert à rompre ou former les liaisons intermoléculaires.",
    tags: ['PC_CHANGE'], difficulty: 1,
    mcq: {
      question: "Que se passe-t-il à la température de l'eau pendant qu'elle bout (à 100 °C sous 1 atm) ?",
      choices: [
        { text: "Elle reste constante à 100 °C", correct: true },
        { text: "Elle monte progressivement au-delà de 100 °C", correct: false },
        { text: "Elle oscille autour de 100 °C", correct: false },
        { text: "Elle descend légèrement", correct: false },
      ],
      explanation: "Pendant un changement d'état, la température est constante. Toute l'énergie fournie sert à rompre les liaisons intermoléculaires."
    }
  },
  {
    id: 'pc_ch02',
    front: "Donner la formule de l'énergie de changement d'état.",
    back: "$$Q = m \\times L \\quad (\\mathrm{J})$$\nL = énergie massique de changement d'état (J·kg⁻¹).\nEx. : L_vap(eau) = 2257 kJ·kg⁻¹ à 100 °C.",
    tags: ['PC_CHANGE'], difficulty: 1,
    mcq: {
      question: "Combien faut-il d'énergie pour vaporiser 0,5 kg d'eau à 100 °C ? (L_vap = 2257 kJ/kg)",
      choices: [
        { text: "1 128,5 kJ", correct: true },
        { text: "2 257 kJ", correct: false },
        { text: "4514 kJ", correct: false },
        { text: "1 128,5 J", correct: false },
      ],
      explanation: "Q = m × L = 0,5 × 2257 = 1128,5 kJ."
    }
  },
  {
    id: 'pc_ch03',
    front: "Quels changements d'état sont exothermiques (libèrent de l'énergie) ?",
    back: "**Solidification**, **liquéfaction** et **condensation** → création de liaisons → exothermique.\n(Fusion, vaporisation, sublimation sont endothermiques → rupture de liaisons.)",
    tags: ['PC_CHANGE'], difficulty: 2,
    mcq: {
      question: "La condensation de la vapeur d'eau est :",
      choices: [
        { text: "Exothermique (libère de l'énergie)", correct: true },
        { text: "Endothermique (absorbe de l'énergie)", correct: false },
        { text: "Sans échange d'énergie", correct: false },
        { text: "Exothermique seulement si refroidissement rapide", correct: false },
      ],
      explanation: "Condensation = vapeur → liquide : formation de liaisons → exothermique. C'est pourquoi la vapeur brûle plus que l'eau bouillante."
    }
  },
  {
    id: 'pc_ch04',
    front: "Qu'est-ce que le point triple sur un diagramme d'état (p, T) ?",
    back: "Point de coexistence des **3 états** simultanément (solide, liquide, gaz).\nPour l'eau : T = 0,01 °C, p = 611,7 Pa.",
    tags: ['PC_CHANGE'], difficulty: 2,
    mcq: {
      question: "Au point triple d'une substance, combien d'états coexistent en équilibre ?",
      choices: [
        { text: "3 (solide, liquide, gazeux)", correct: true },
        { text: "2 (solide et liquide)", correct: false },
        { text: "2 (liquide et gazeux)", correct: false },
        { text: "1 seul état est stable", correct: false },
      ],
      explanation: "Le point triple est l'unique point (T, p) où les trois états coexistent en équilibre. Pour l'eau : 0,01 °C et 611,7 Pa."
    }
  },

  // ── PC_RADIOACT ──────────────────────────────────────────────────
  {
    id: 'pc_ra01',
    front: "Donner la loi de décroissance radioactive.",
    back: "$$N(t) = N_0 \\times e^{-\\lambda t}$$\nN₀ : nombre initial de noyaux, λ : constante de désintégration (s⁻¹).",
    tags: ['PC_RADIOACT'], difficulty: 2,
    mcq: {
      question: "Après 2 demi-vies, quelle fraction des noyaux radioactifs reste-t-il ?",
      choices: [
        { text: "1/4 (25%)", correct: true },
        { text: "1/2 (50%)", correct: false },
        { text: "1/8 (12,5%)", correct: false },
        { text: "0 (tous désintégrés)", correct: false },
      ],
      explanation: "Après 1 t½ : N₀/2. Après 2 t½ : N₀/4. La décroissance est géométrique de raison 1/2."
    }
  },
  {
    id: 'pc_ra02',
    front: "Définir la demi-vie t₁/₂ et donner sa relation avec λ.",
    back: "Durée pour que N₀/2 noyaux se soient désintégrés :\n$$\\lambda = \\frac{\\ln 2}{t_{1/2}}$$",
    tags: ['PC_RADIOACT'], difficulty: 2,
    mcq: {
      question: "Le carbone-14 a t½ = 5730 ans. Sa constante λ vaut environ :",
      choices: [
        { text: "1,21×10⁻⁴ an⁻¹", correct: true },
        { text: "5730 an⁻¹", correct: false },
        { text: "0,693 an⁻¹", correct: false },
        { text: "8000 an⁻¹", correct: false },
      ],
      explanation: "λ = ln2 / t½ = 0,693 / 5730 ≈ 1,21×10⁻⁴ an⁻¹."
    }
  },
  {
    id: 'pc_ra03',
    front: "Citer les 3 types de rayonnements radioactifs et la particule émise.",
    back: "α : noyau d'hélium ⁴He\nβ⁻ : électron e⁻ (neutron → proton)\nγ : photon haute énergie (pas de changement de noyau)",
    tags: ['PC_RADIOACT'], difficulty: 1,
    mcq: {
      question: "Quel rayonnement radioactif est le moins pénétrant (arrêté par une feuille de papier) ?",
      choices: [
        { text: "Alpha (α)", correct: true },
        { text: "Bêta (β)", correct: false },
        { text: "Gamma (γ)", correct: false },
        { text: "Tous ont le même pouvoir de pénétration", correct: false },
      ],
      explanation: "α (noyau He) est très lourd et peu pénétrant. β traverse quelques mm d'alu. γ nécessite plusieurs cm de plomb."
    }
  },
  {
    id: 'pc_ra04',
    front: "Qu'est-ce que l'activité A d'une source radioactive ?",
    back: "Nombre de désintégrations par seconde.\n$$A(t) = \\lambda \\times N(t) \\quad (\\mathrm{Bq})$$",
    tags: ['PC_RADIOACT'], difficulty: 2,
    mcq: {
      question: "Si le nombre de noyaux N diminue de moitié, l'activité A :",
      choices: [
        { text: "Diminue de moitié aussi (A = λN)", correct: true },
        { text: "Reste constante", correct: false },
        { text: "Double", correct: false },
        { text: "Devient nulle", correct: false },
      ],
      explanation: "A = λN. λ est constant, donc si N → N/2 alors A → A/2. L'activité diminue avec le temps comme N."
    }
  },

  // ── PC_ACIDOBASE ─────────────────────────────────────────────────
  {
    id: 'pc_ab01',
    front: "Définir un acide et une base au sens de Brønsted.",
    back: "**Acide** : espèce qui *donne* un proton H⁺.\n**Base** : espèce qui *accepte* un proton H⁺.",
    tags: ['PC_ACIDOBASE'], difficulty: 1,
    mcq: {
      question: "Dans la réaction HCl → H⁺ + Cl⁻, HCl est :",
      choices: [
        { text: "Un acide (il donne H⁺)", correct: true },
        { text: "Une base (il accepte H⁺)", correct: false },
        { text: "Ni acide ni base (réaction ionique)", correct: false },
        { text: "Un amphotère", correct: false },
      ],
      explanation: "HCl cède un proton H⁺ → c'est un acide au sens de Brønsted."
    }
  },
  {
    id: 'pc_ab02',
    front: "Donner la formule du pH en fonction de [H₃O⁺].",
    back: "$$\\mathrm{pH} = -\\log\\!\\left(\\frac{[\\mathrm{H_3O^+}]}{c^\\circ}\\right)$$\npH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.",
    tags: ['PC_ACIDOBASE'], difficulty: 1,
    mcq: {
      question: "Une solution a [H₃O⁺] = 10⁻³ mol/L. Son pH est :",
      choices: [
        { text: "3 (solution acide)", correct: true },
        { text: "11 (solution basique)", correct: false },
        { text: "-3", correct: false },
        { text: "7 (solution neutre)", correct: false },
      ],
      explanation: "pH = −log(10⁻³) = 3. pH < 7 → solution acide."
    }
  },
  {
    id: 'pc_ab03',
    front: "Donner la relation entre [H₃O⁺] et [HO⁻] à 25 °C.",
    back: "$$[\\mathrm{H_3O^+}] \\times [\\mathrm{HO^-}] = 10^{-14}$$",
    tags: ['PC_ACIDOBASE'], difficulty: 2,
    mcq: {
      question: "Dans une solution de pH = 11, quelle est [H₃O⁺] ?",
      choices: [
        { text: "10⁻¹¹ mol/L", correct: true },
        { text: "11 mol/L", correct: false },
        { text: "10⁻³ mol/L", correct: false },
        { text: "10⁻⁷ mol/L", correct: false },
      ],
      explanation: "pH = 11 → [H₃O⁺] = 10⁻¹¹ mol/L. Et [HO⁻] = 10⁻¹⁴/10⁻¹¹ = 10⁻³ mol/L."
    }
  },
  {
    id: 'pc_ab04',
    front: "Comment évolue le pH lors de la dilution d'une solution acide ? Basique ?",
    back: "**Acide** : pH augmente vers 7.\n**Basique** : pH diminue vers 7.\n(L'eau distillée a pH ≈ 7.)",
    tags: ['PC_ACIDOBASE'], difficulty: 1,
    mcq: {
      question: "On dilue 10 fois une solution acide de pH = 3. Le nouveau pH est approximativement :",
      choices: [
        { text: "4 (pH augmente d'une unité par ×10)", correct: true },
        { text: "30 (pH × 10)", correct: false },
        { text: "2 (pH diminue car plus dilué)", correct: false },
        { text: "0,3 (pH ÷ 10)", correct: false },
      ],
      explanation: "Dilution ×10 → [H₃O⁺] ÷10 → pH + 1. pH 3 → pH 4. La limite est pH = 7 (eau pure)."
    }
  },

  // ── PC_SONORE ────────────────────────────────────────────────────
  {
    id: 'pc_so01',
    front: "Quelle différence entre son pur et son composé ?",
    back: "**Son pur** : signal sinusoïdal → spectre avec *un seul pic*.\n**Son composé** : signal périodique → spectre avec *plusieurs pics* (fondamental + harmoniques).",
    tags: ['PC_SONORE'], difficulty: 1,
    mcq: {
      question: "Le spectre d'un son composé présente :",
      choices: [
        { text: "Plusieurs pics (fondamental + harmoniques)", correct: true },
        { text: "Un seul pic à la fréquence fondamentale", correct: false },
        { text: "Un spectre continu sans pics", correct: false },
        { text: "Autant de pics que de décibels", correct: false },
      ],
      explanation: "Son composé = somme de sinusoïdes → spectre en fréquence avec un pic par sinusoïde. Un son pur n'a qu'un seul pic."
    }
  },
  {
    id: 'pc_so02',
    front: "Donner la formule du niveau d'intensité sonore L.",
    back: "$$L = 10 \\times \\log\\!\\left(\\frac{I}{I_0}\\right) \\quad (\\mathrm{dB})$$\nI₀ = 10⁻¹² W·m⁻² (seuil d'audibilité).",
    tags: ['PC_SONORE'], difficulty: 2,
    mcq: {
      question: "Si l'intensité sonore est multipliée par 100, le niveau L en dB :",
      choices: [
        { text: "Augmente de 20 dB", correct: true },
        { text: "Augmente de 2 dB", correct: false },
        { text: "Augmente de 100 dB", correct: false },
        { text: "Double", correct: false },
      ],
      explanation: "L = 10 log(I/I₀). Multiplier I par 100 = 10² ajoute 10×log(100) = 10×2 = 20 dB."
    }
  },
  {
    id: 'pc_so03',
    front: "Quelle est la plage de fréquences audibles par l'oreille humaine ?",
    back: "De **20 Hz à 20 kHz**. En dehors : infrasons (< 20 Hz) et ultrasons (> 20 kHz).",
    tags: ['PC_SONORE'], difficulty: 1,
    mcq: {
      question: "Un capteur ultrasonique émet à 40 kHz. Ce son est-il audible par l'humain ?",
      choices: [
        { text: "Non — au-dessus de 20 kHz (ultrasons)", correct: true },
        { text: "Oui — 40 kHz est dans la plage audible", correct: false },
        { text: "Non — en dessous de 20 Hz (infrasons)", correct: false },
        { text: "Cela dépend du volume sonore", correct: false },
      ],
      explanation: "L'oreille humaine perçoit de 20 Hz à 20 000 Hz (20 kHz). 40 kHz > 20 kHz → ultrasons, inaudibles."
    }
  },

  // ── PC_ONDES ─────────────────────────────────────────────────────
  {
    id: 'pc_on01',
    front: "Donner la relation entre célérité c, fréquence f et longueur d'onde λ.",
    back: "$$c = \\lambda \\times f \\quad \\Leftrightarrow \\quad \\lambda = \\frac{c}{f}$$\nc = 3,0×10⁸ m·s⁻¹ dans le vide.",
    tags: ['PC_ONDES'], difficulty: 1,
    mcq: {
      question: "Une onde radio à f = 100 MHz. Quelle est sa longueur d'onde ?",
      choices: [
        { text: "3 m", correct: true },
        { text: "0,33 m", correct: false },
        { text: "300 m", correct: false },
        { text: "30 km", correct: false },
      ],
      explanation: "λ = c/f = 3×10⁸ / 10⁸ = 3 m. FM est autour de 100 MHz → antennes de ~75 cm (λ/4)."
    }
  },
  {
    id: 'pc_on02',
    front: "Quelle est la longueur d'une antenne demi-onde ?",
    back: "$$L_{\\text{antenne}} = \\frac{\\lambda}{2}$$\nPour une antenne quart d'onde (avec réflecteur) : L = λ/4.",
    tags: ['PC_ONDES'], difficulty: 2,
    mcq: {
      question: "Une antenne demi-onde pour la FM à 100 MHz (λ = 3 m) mesure :",
      choices: [
        { text: "1,5 m", correct: true },
        { text: "3 m", correct: false },
        { text: "0,75 m", correct: false },
        { text: "6 m", correct: false },
      ],
      explanation: "L = λ/2 = 3/2 = 1,5 m. Une antenne quart d'onde avec réflecteur mesurerait 0,75 m."
    }
  },
  {
    id: 'pc_on03',
    front: "Qu'est-ce que la modulation d'amplitude (AM) ? Quelles fréquences contient le signal modulé ?",
    back: "On multiplie un signal informatif (basse fréquence f_m) par un signal porteur (haute fréquence f_p). Le signal modulé contient **f_p − f_m** et **f_p + f_m**. Bande passante = 2f_m.",
    tags: ['PC_ONDES'], difficulty: 3,
    mcq: {
      question: "Une station AM émet sur f_p = 1 MHz avec un signal audio f_m = 5 kHz. La bande occupée est :",
      choices: [
        { text: "De 995 kHz à 1005 kHz (largeur 10 kHz)", correct: true },
        { text: "De 0 à 1 MHz (largeur 1 MHz)", correct: false },
        { text: "Exactement 1 MHz (aucune bande)", correct: false },
        { text: "De 1 MHz à 5 MHz (largeur 4 MHz)", correct: false },
      ],
      explanation: "Le signal modulé contient f_p ± f_m = 1000±5 kHz. Bande = 2×5 = 10 kHz."
    }
  },
];

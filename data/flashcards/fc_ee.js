export const CARDS = [
  // ── EE_CHAIN ─────────────────────────────────────────────────────────────
  {
    id: 'ee_chain_001', chapterId: 'EE_CHAIN', difficulty: 'easy',
    front: 'Donner les 5 fonctions de la chaîne d\'énergie dans l\'ordre.',
    back: 'ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE → AGIR',
    mcq: {
      question: 'Quel est le bon ordre des fonctions de la chaîne d\'énergie ?',
      choices: [
        { text: 'Alimenter → Distribuer → Convertir → Transmettre → Agir', correct: true },
        { text: 'Alimenter → Convertir → Distribuer → Transmettre → Agir', correct: false },
        { text: 'Distribuer → Alimenter → Convertir → Agir → Transmettre', correct: false },
        { text: 'Convertir → Alimenter → Distribuer → Agir → Transmettre', correct: false },
      ],
      explanation: 'L\'énergie est d\'abord fournie (alimenter), puis son accès est commandé (distribuer), transformée (convertir), acheminée (transmettre) et enfin utilisée (agir).'
    }
  },
  {
    id: 'ee_chain_002', chapterId: 'EE_CHAIN', difficulty: 'medium',
    front: 'Formule du rendement global d\'une chaîne de conversions.',
    back: '\\(\\eta_{global} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times \\ldots\\)',
    mcq: {
      question: 'Un moteur (η = 0,92) entraîne un réducteur (η = 0,97). Quel est le rendement global ?',
      choices: [
        { text: '0,892 (89,2%)', correct: true },
        { text: '0,945 (94,5%)', correct: false },
        { text: '0,92 + 0,97 = 1,89', correct: false },
        { text: '0,845 (84,5%)', correct: false },
      ],
      explanation: 'η_global = 0,92 × 0,97 = 0,8924. Les rendements se multiplient.'
    }
  },
  {
    id: 'ee_chain_003', chapterId: 'EE_CHAIN', difficulty: 'medium',
    front: 'Un capteur de courant à effet Hall : à quelle fonction de la chaîne d\'information appartient-il ?',
    back: 'ACQUÉRIR — il mesure le courant électrique et produit un signal de mesure.',
    mcq: {
      question: 'À quelle fonction de la chaîne d\'information appartient un capteur de courant ?',
      choices: [
        { text: 'Acquérir', correct: true },
        { text: 'Traiter', correct: false },
        { text: 'Communiquer', correct: false },
        { text: 'Distribuer', correct: false },
      ],
      explanation: 'Un capteur réalise la fonction Acquérir : il traduit une grandeur physique en signal exploitable.'
    }
  },

  // ── EE_SRC ────────────────────────────────────────────────────────────────
  {
    id: 'ee_src_001', chapterId: 'EE_SRC', difficulty: 'medium',
    front: 'Formule de la puissance éolienne captée par une éolienne.',
    back: '\\(P = C_p \\cdot \\frac{1}{2} \\rho S v^3\\) avec \\(C_p^{max} = 16/27 \\approx 0{,}59\\) (Betz)',
    mcq: {
      question: 'Si la vitesse du vent double, la puissance éolienne disponible est multipliée par :',
      choices: [
        { text: '8', correct: true },
        { text: '2', correct: false },
        { text: '4', correct: false },
        { text: '6', correct: false },
      ],
      explanation: 'P ∝ v³. Si v → 2v, alors P → (2v)³ = 8v³. La puissance est multipliée par 8.'
    }
  },
  {
    id: 'ee_src_002', chapterId: 'EE_SRC', difficulty: 'medium',
    front: 'Qu\'est-ce que le point MPP (MPPT) d\'un panneau solaire ?',
    back: 'Le Point de Puissance Maximum : le point de fonctionnement optimal de la caractéristique I-V où P = U × I est maximale. Le MPPT est l\'algorithme qui suit ce point en temps réel.',
    mcq: {
      question: 'Que signifie MPPT pour un panneau solaire ?',
      choices: [
        { text: 'Maximum Power Point Tracking — suivi du point de puissance max', correct: true },
        { text: 'Minimum Power Point Transfer — limitation de la puissance', correct: false },
        { text: 'Maximum Panel Protection Technology — protection du panneau', correct: false },
        { text: 'Multi-Phase Power Tracking — suivi triphasé', correct: false },
      ],
      explanation: 'Le MPPT adapte en permanence le point de fonctionnement pour extraire le maximum de puissance du panneau, quelle que soit la variation d\'ensoleillement.'
    }
  },
  {
    id: 'ee_src_003', chapterId: 'EE_SRC', difficulty: 'hard',
    front: 'Calcule la puissance d\'une centrale hydraulique : Q = 50 m³/s, H = 80 m, η = 0,88.',
    back: '\\(P = \\rho g Q H \\eta = 1000 \\times 9{,}81 \\times 50 \\times 80 \\times 0{,}88 \\approx 34{,}6\\) MW',
    mcq: {
      question: 'La puissance hydraulique P = ρgQHη avec ρ=1000 kg/m³, g=9,81 m/s², Q=50 m³/s, H=80 m, η=0,88 vaut environ :',
      choices: [
        { text: '34,6 MW', correct: true },
        { text: '39,2 MW', correct: false },
        { text: '4,9 MW', correct: false },
        { text: '68 MW', correct: false },
      ],
      explanation: '1000 × 9,81 × 50 × 80 = 39 240 000 W. Avec η = 0,88 : 39 240 000 × 0,88 = 34 531 200 W ≈ 34,6 MW.'
    }
  },

  // ── EE_ELEC ───────────────────────────────────────────────────────────────
  {
    id: 'ee_elec_001', chapterId: 'EE_ELEC', difficulty: 'easy',
    front: 'FCEM d\'un moteur à courant continu (formule).',
    back: '\\(E = k \\cdot \\Phi \\cdot n\\) — k : constante machine, Φ : flux inducteur, n : vitesse de rotation',
  },
  {
    id: 'ee_elec_002', chapterId: 'EE_ELEC', difficulty: 'medium',
    front: 'Équation de la maille d\'induit d\'un MCC.',
    back: '\\(U = E + R_a \\cdot I_a\\) — U : tension d\'alimentation, E : FCEM, Ra : résistance d\'induit',
    mcq: {
      question: 'Un MCC a U = 200 V, E = 185 V, Ra = 0,5 Ω. Quel est le courant d\'induit ?',
      choices: [
        { text: '30 A', correct: true },
        { text: '370 A', correct: false },
        { text: '15 A', correct: false },
        { text: '400 A', correct: false },
      ],
      explanation: 'Ia = (U - E) / Ra = (200 - 185) / 0,5 = 15 / 0,5 = 30 A'
    }
  },
  {
    id: 'ee_elec_003', chapterId: 'EE_ELEC', difficulty: 'medium',
    front: 'Formule du glissement d\'un moteur asynchrone.',
    back: '\\(g = \\dfrac{n_s - n}{n_s}\\) — ns : vitesse synchrone, n : vitesse du rotor. Typiquement 2 à 8%.',
    mcq: {
      question: 'Un MAS a ns = 3000 tr/min et tourne à n = 2850 tr/min. Quel est le glissement ?',
      choices: [
        { text: '5%', correct: true },
        { text: '2%', correct: false },
        { text: '10%', correct: false },
        { text: '95%', correct: false },
      ],
      explanation: 'g = (3000 - 2850) / 3000 = 150 / 3000 = 0,05 = 5%'
    }
  },
  {
    id: 'ee_elec_004', chapterId: 'EE_ELEC', difficulty: 'easy',
    front: 'Rapport de transformation d\'un transformateur.',
    back: '\\(m = N_2 / N_1 = U_2 / U_1 = I_1 / I_2\\)',
    mcq: {
      question: 'Un transformateur a N1 = 2000 spires et N2 = 500 spires. Sa tension primaire est 400 V. Quelle est la tension secondaire ?',
      choices: [
        { text: '100 V', correct: true },
        { text: '1600 V', correct: false },
        { text: '200 V', correct: false },
        { text: '50 V', correct: false },
      ],
      explanation: 'm = N2/N1 = 500/2000 = 0,25. U2 = m × U1 = 0,25 × 400 = 100 V'
    }
  },
  {
    id: 'ee_elec_005', chapterId: 'EE_ELEC', difficulty: 'hard',
    front: 'Vitesse synchrone d\'un moteur asynchrone triphasé 4 pôles alimenté en 50 Hz.',
    back: '\\(n_s = \\dfrac{60 \\cdot f}{p} = \\dfrac{60 \\times 50}{2} = 1500\\) tr/min (p = nb paires de pôles = 4/2 = 2)',
    mcq: {
      question: 'Quelle est la vitesse synchrone d\'un MAS triphasé à 4 pôles (2 paires) alimenté en 50 Hz ?',
      choices: [
        { text: '1500 tr/min', correct: true },
        { text: '3000 tr/min', correct: false },
        { text: '1000 tr/min', correct: false },
        { text: '750 tr/min', correct: false },
      ],
      explanation: 'ns = 60f/p = 60 × 50 / 2 = 1500 tr/min. Attention : p = nombre de PAIRES de pôles.'
    }
  },

  // ── EE_POW ────────────────────────────────────────────────────────────────
  {
    id: 'ee_pow_001', chapterId: 'EE_POW', difficulty: 'medium',
    front: 'Formule de la tension de sortie d\'un hacheur abaisseur (buck).',
    back: '\\(U_s = \\alpha \\cdot U_e\\) — α = rapport cyclique (0 ≤ α ≤ 1)',
    mcq: {
      question: 'Un hacheur buck a Ue = 48 V et α = 0,625. Quelle est la tension de sortie ?',
      choices: [
        { text: '30 V', correct: true },
        { text: '48 V', correct: false },
        { text: '76,8 V', correct: false },
        { text: '18 V', correct: false },
      ],
      explanation: 'Us = α × Ue = 0,625 × 48 = 30 V'
    }
  },
  {
    id: 'ee_pow_002', chapterId: 'EE_POW', difficulty: 'medium',
    front: 'Tension moyenne de sortie d\'un redresseur en pont de Graëtz monophasé.',
    back: '\\(U_{moy} = \\dfrac{2U_{max}}{\\pi} \\approx 0{,}637 \\cdot U_{max}\\)',
    mcq: {
      question: 'Un pont de Graëtz alimente une charge depuis 230 V eff (50 Hz). Quelle est la tension continue moyenne ?',
      choices: [
        { text: '≈ 207 V', correct: true },
        { text: '115 V', correct: false },
        { text: '325 V', correct: false },
        { text: '230 V', correct: false },
      ],
      explanation: 'Umax = 230√2 ≈ 325 V. Umoy = 2 × 325 / π ≈ 207 V'
    }
  },
  {
    id: 'ee_pow_003', chapterId: 'EE_POW', difficulty: 'hard',
    front: 'Formule de la tension de sortie d\'un hacheur boost (élévateur).',
    back: '\\(U_s = \\dfrac{U_e}{1 - \\alpha}\\) — toujours Us > Ue',
    mcq: {
      question: 'Un hacheur boost avec Ue = 12 V et α = 0,6. Quelle est la tension de sortie ?',
      choices: [
        { text: '30 V', correct: true },
        { text: '7,2 V', correct: false },
        { text: '20 V', correct: false },
        { text: '12 V', correct: false },
      ],
      explanation: 'Us = Ue / (1 - α) = 12 / (1 - 0,6) = 12 / 0,4 = 30 V'
    }
  },

  // ── EE_STOCK ──────────────────────────────────────────────────────────────
  {
    id: 'ee_stock_001', chapterId: 'EE_STOCK', difficulty: 'easy',
    front: 'Quelle technologie de batterie est la plus utilisée dans les véhicules électriques modernes ?',
    back: 'Li-ion (lithium-ion) — notamment les chimies NMC (Nickel-Manganèse-Cobalt) et LFP (Lithium-Fer-Phosphate). Densité d\'énergie : 150–250 Wh/kg.',
    mcq: {
      question: 'Quelle technologie de batterie est la plus utilisée dans les VE modernes ?',
      choices: [
        { text: 'Li-ion (NMC ou LFP)', correct: true },
        { text: 'Plomb-acide', correct: false },
        { text: 'NiMH', correct: false },
        { text: 'Supercondensateurs', correct: false },
      ],
      explanation: 'Les batteries Li-ion offrent la meilleure densité d\'énergie (150–250 Wh/kg) pour les VE. Le plomb-acide (30–50 Wh/kg) est trop lourd, et le NiMH est surtout utilisé dans les hybrides.'
    }
  },
  {
    id: 'ee_stock_002', chapterId: 'EE_STOCK', difficulty: 'medium',
    front: 'Avantage principal des supercondensateurs par rapport aux batteries.',
    back: 'Charge/décharge très rapide (quelques secondes), très forte puissance massique et très grand nombre de cycles (> 1 million). Inconvénient : faible énergie massique.',
    mcq: {
      question: 'Quel est le principal avantage des supercondensateurs vs batteries ?',
      choices: [
        { text: 'Charge/décharge très rapide et forte puissance massique', correct: true },
        { text: 'Très grande densité d\'énergie', correct: false },
        { text: 'Coût très faible', correct: false },
        { text: 'Pas d\'autodécharge', correct: false },
      ],
      explanation: 'Les supercondensateurs stockent peu d\'énergie (5–10 Wh/kg) mais peuvent délivrer des puissances très élevées en très peu de temps. Idéal pour récupérer l\'énergie de freinage.'
    }
  },

  // ── EE_TRANS ──────────────────────────────────────────────────────────────
  {
    id: 'ee_trans_001', chapterId: 'EE_TRANS', difficulty: 'easy',
    front: 'Formule de la puissance active en triphasé.',
    back: '\\(P = \\sqrt{3} \\cdot U_L \\cdot I \\cdot \\cos\\varphi\\) [W] — UL : tension de ligne',
    mcq: {
      question: 'Un moteur triphasé 400 V absorbe 10 A avec cos φ = 0,85. Quelle est la puissance active ?',
      choices: [
        { text: '≈ 5,88 kW', correct: true },
        { text: '4 kW', correct: false },
        { text: '6,93 kW', correct: false },
        { text: '3,4 kW', correct: false },
      ],
      explanation: 'P = √3 × 400 × 10 × 0,85 = 1,732 × 400 × 8,5 ≈ 5883 W ≈ 5,88 kW'
    }
  },
  {
    id: 'ee_trans_002', chapterId: 'EE_TRANS', difficulty: 'medium',
    front: 'Pourquoi transporter l\'électricité en très haute tension (THT) ?',
    back: 'Pour réduire les pertes Joule : P_pertes = R·I². À puissance fixée P = U·I, augmenter U diminue I, donc les pertes diminuent en I². Doubler la tension → pertes ÷ 4.',
    mcq: {
      question: 'Pourquoi le transport d\'électricité se fait-il en haute tension ?',
      choices: [
        { text: 'Pour réduire l\'intensité et donc les pertes Joule en R·I²', correct: true },
        { text: 'Pour augmenter la puissance transportée', correct: false },
        { text: 'Pour réduire les coûts de câbles', correct: false },
        { text: 'Pour augmenter le facteur de puissance', correct: false },
      ],
      explanation: 'À puissance constante P = UI, si U double alors I est divisé par 2. Les pertes Joule P = RI² sont divisées par 4.'
    }
  },

  // ── EE_BILAN ─────────────────────────────────────────────────────────────
  {
    id: 'ee_bilan_001', chapterId: 'EE_BILAN', difficulty: 'easy',
    front: 'Formule des pertes Joule dans une résistance.',
    back: '\\(P_J = R \\cdot I^2 = U^2/R = U \\cdot I\\)',
    mcq: {
      question: 'Un câble de résistance R = 0,5 Ω parcourue par I = 20 A. Quelles sont les pertes Joule ?',
      choices: [
        { text: '200 W', correct: true },
        { text: '10 W', correct: false },
        { text: '400 W', correct: false },
        { text: '100 W', correct: false },
      ],
      explanation: 'PJ = R × I² = 0,5 × 20² = 0,5 × 400 = 200 W'
    }
  },
  {
    id: 'ee_bilan_002', chapterId: 'EE_BILAN', difficulty: 'medium',
    front: 'Formule de conduction thermique (flux thermique à travers un mur).',
    back: '\\(\\Phi = \\lambda \\cdot S \\cdot \\Delta T / e\\) ou \\(\\Phi = \\Delta T / R_{th}\\) avec \\(R_{th} = e / (\\lambda S)\\)',
    mcq: {
      question: 'Un mur en béton (λ = 1,75 W/m·K, épaisseur e = 20 cm, S = 10 m²) subit ΔT = 20°C. Quel est le flux ?',
      choices: [
        { text: '1750 W', correct: true },
        { text: '875 W', correct: false },
        { text: '350 W', correct: false },
        { text: '3500 W', correct: false },
      ],
      explanation: 'Φ = λ × S × ΔT / e = 1,75 × 10 × 20 / 0,20 = 1750 W'
    }
  },

  // ── EE_DD ─────────────────────────────────────────────────────────────────
  {
    id: 'ee_dd_001', chapterId: 'EE_DD', difficulty: 'easy',
    front: 'Quels sont les trois piliers du développement durable ?',
    back: 'Environnemental, Social et Économique. Tous trois doivent être conciliés pour un développement durable.',
    mcq: {
      question: 'Quels sont les 3 piliers du développement durable ?',
      choices: [
        { text: 'Environnemental, Social, Économique', correct: true },
        { text: 'Énergétique, Social, Technologique', correct: false },
        { text: 'Écologique, Industriel, Politique', correct: false },
        { text: 'Climatique, Social, Financier', correct: false },
      ],
      explanation: 'Le triangle du développement durable : environnemental (préserver la planète), social (équité) et économique (croissance soutenable).'
    }
  },
  {
    id: 'ee_dd_002', chapterId: 'EE_DD', difficulty: 'medium',
    front: 'Quelle est l\'intensité carbone approximative de l\'électricité française (g CO₂/kWh) ?',
    back: '50–80 g CO₂/kWh (parmi les plus faibles d\'Europe grâce au parc nucléaire). Comparaison : Allemagne ~400 g/kWh, moyenne EU ~300 g/kWh.',
    mcq: {
      question: 'Pourquoi l\'électricité française a-t-elle une faible empreinte carbone ?',
      choices: [
        { text: 'Grande part de nucléaire (~70%) dans le mix énergétique', correct: true },
        { text: 'Usage massif de gaz naturel', correct: false },
        { text: 'Éoliennes et solaire majoritaires', correct: false },
        { text: 'Importation d\'électricité verte d\'Allemagne', correct: false },
      ],
      explanation: 'La France produit environ 70% de son électricité via le nucléaire, qui émet très peu de CO₂ en fonctionnement. Cela donne une intensité carbone de 50–80 g/kWh vs ~400 g/kWh en Allemagne.'
    }
  },
];

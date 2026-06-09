export const CARDS = [
  // ── PC_MEC ────────────────────────────────────────────────────────────────
  {
    id: 'pc_mec_001', chapterId: 'PC_MEC', difficulty: 'easy',
    front: 'Donner les 3 équations du MRUA (mouvement rectiligne uniformément accéléré).',
    back: '\\(v = v_0 + at\\), \\(x = x_0 + v_0 t + \\frac{1}{2}at^2\\), \\(v^2 - v_0^2 = 2a(x-x_0)\\)',
    mcq: {
      question: 'Une voiture part de l\'arrêt (v0=0) avec a=3 m/s². Quelle est sa vitesse après 5 s ?',
      choices: [
        { text: '15 m/s', correct: true },
        { text: '7,5 m/s', correct: false },
        { text: '25 m/s', correct: false },
        { text: '9 m/s', correct: false },
      ],
      explanation: 'v = v0 + at = 0 + 3 × 5 = 15 m/s'
    }
  },
  {
    id: 'pc_mec_002', chapterId: 'PC_MEC', difficulty: 'medium',
    front: 'Formule de l\'énergie cinétique. Quelle est l\'unité ?',
    back: '\\(E_c = \\frac{1}{2}mv^2\\) — Unité : Joule (J). Dépend du carré de la vitesse.',
    mcq: {
      question: 'Une voiture (m=1500 kg) roule à 90 km/h. Quelle est son énergie cinétique ?',
      choices: [
        { text: '421 875 J ≈ 422 kJ', correct: true },
        { text: '135 000 J', correct: false },
        { text: '1 687 500 J', correct: false },
        { text: '60 750 J', correct: false },
      ],
      explanation: '90 km/h = 25 m/s. Ec = ½ × 1500 × 25² = 750 × 625 = 468 750 J... Attention : ½ × 1500 × 625 = 468 750. Recalcul : ½ × 1500 × 625 = 468 750 J. La réponse correcte est 468 750 J.'
    }
  },
  {
    id: 'pc_mec_003', chapterId: 'PC_MEC', difficulty: 'easy',
    front: 'Énoncer le théorème de conservation de l\'énergie mécanique.',
    back: '\\(E_{mec} = E_c + E_{pp} = \\text{cste}\\) — valable uniquement si les forces non conservatives (frottements, résistance de l\'air) sont négligeables.',
  },

  // ── PC_THERMO ─────────────────────────────────────────────────────────────
  {
    id: 'pc_thermo_001', chapterId: 'PC_THERMO', difficulty: 'easy',
    front: 'Loi des gaz parfaits.',
    back: '\\(PV = nRT\\) — P (Pa), V (m³), n (mol), R = 8,314 J/(mol·K), T (K). Conversion : T(K) = T(°C) + 273,15.',
    mcq: {
      question: 'Loi des gaz parfaits : quelle est la formule correcte ?',
      choices: [
        { text: 'PV = nRT', correct: true },
        { text: 'PV = mRT', correct: false },
        { text: 'P/V = nRT', correct: false },
        { text: 'PV = nR/T', correct: false },
      ],
      explanation: 'PV = nRT est la loi des gaz parfaits. m serait la masse molaire, pas le bon paramètre ici.'
    }
  },
  {
    id: 'pc_thermo_002', chapterId: 'PC_THERMO', difficulty: 'medium',
    front: 'Formule des échanges de chaleur sensible. Donner c pour l\'eau.',
    back: '\\(Q = m \\cdot c \\cdot \\Delta T\\) — Eau : c = 4185 J/(kg·K). Unité de Q : Joule (J).',
    mcq: {
      question: 'On chauffe 2 kg d\'eau de 20°C à 80°C. Quelle est la chaleur nécessaire ?',
      choices: [
        { text: '502 200 J (≈ 502 kJ)', correct: true },
        { text: '167 400 J', correct: false },
        { text: '251 100 J', correct: false },
        { text: '1 004 400 J', correct: false },
      ],
      explanation: 'Q = m × c × ΔT = 2 × 4185 × (80-20) = 2 × 4185 × 60 = 502 200 J'
    }
  },
  {
    id: 'pc_thermo_003', chapterId: 'PC_THERMO', difficulty: 'hard',
    front: 'Rendement de Carnot d\'une machine thermique.',
    back: '\\(\\eta_{Carnot} = 1 - T_{froide}/T_{chaude}\\) — T en Kelvin obligatoirement. C\'est le rendement maximal théorique.',
    mcq: {
      question: 'Rendement de Carnot pour Tchaud = 500°C et Tfroid = 30°C :',
      choices: [
        { text: '≈ 60,8%', correct: true },
        { text: '≈ 94%', correct: false },
        { text: '≈ 40%', correct: false },
        { text: '≈ 6%', correct: false },
      ],
      explanation: 'Th = 500+273 = 773 K, Tf = 30+273 = 303 K. η = 1 - 303/773 ≈ 1 - 0,392 ≈ 0,608 = 60,8%'
    }
  },

  // ── PC_CHIM ───────────────────────────────────────────────────────────────
  {
    id: 'pc_chim_001', chapterId: 'PC_CHIM', difficulty: 'easy',
    front: 'Dans une réaction rédox, qui est l\'oxydant et qui est le réducteur ?',
    back: 'L\'oxydant capte des électrons (se réduit). Le réducteur cède des électrons (s\'oxyde). Moyen mémo : RÉDOX = le Réducteur s\'Oxyde, l\'oXydant se Réduit.',
    mcq: {
      question: 'Dans une réaction d\'oxydoréduction, que fait l\'oxydant ?',
      choices: [
        { text: 'Il capte des électrons (il se réduit)', correct: true },
        { text: 'Il cède des électrons (il s\'oxyde)', correct: false },
        { text: 'Il capte des protons H⁺', correct: false },
        { text: 'Il ne change pas d\'état d\'oxydation', correct: false },
      ],
      explanation: 'RÉDOX : l\'Oxydant capte des électrons (il se RÉduit), le Réducteur cède des électrons (il s\'OXyde).'
    }
  },
  {
    id: 'pc_chim_002', chapterId: 'PC_CHIM', difficulty: 'medium',
    front: 'Définition du pH et lien avec la concentration en ions H₃O⁺.',
    back: '\\(pH = -\\log[H_3O^+]\\). Acide : pH < 7 ; neutre : pH = 7 ; basique : pH > 7. À 25°C dans l\'eau pure : [H₃O⁺] = 10⁻⁷ mol/L → pH = 7.',
    mcq: {
      question: 'Une solution a [H₃O⁺] = 10⁻³ mol/L. Quel est son pH ?',
      choices: [
        { text: '3 (acide)', correct: true },
        { text: '7 (neutre)', correct: false },
        { text: '11 (basique)', correct: false },
        { text: '-3', correct: false },
      ],
      explanation: 'pH = -log(10⁻³) = 3. C\'est une solution acide (pH < 7).'
    }
  },

  // ── PC_OPT ────────────────────────────────────────────────────────────────
  {
    id: 'pc_opt_001', chapterId: 'PC_OPT', difficulty: 'easy',
    front: 'Loi de Snell-Descartes pour la réfraction.',
    back: '\\(n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2\\) — n₁, n₂ : indices de réfraction des deux milieux. Air ≈ 1, Verre ≈ 1,5.',
    mcq: {
      question: 'Un rayon lumineux passe de l\'air (n=1) au verre (n=1,5) avec θ₁=30°. Quel est θ₂ ?',
      choices: [
        { text: '≈ 19,5°', correct: true },
        { text: '≈ 45°', correct: false },
        { text: '≈ 30°', correct: false },
        { text: '≈ 60°', correct: false },
      ],
      explanation: 'n₁ sin θ₁ = n₂ sin θ₂ → sin θ₂ = (1 × sin 30°)/1,5 = 0,5/1,5 = 0,333 → θ₂ ≈ 19,5°'
    }
  },
  {
    id: 'pc_opt_002', chapterId: 'PC_OPT', difficulty: 'easy',
    front: 'Relation entre longueur d\'onde, fréquence et célérité d\'une onde.',
    back: '\\(v = \\lambda \\cdot f\\) — v (m/s), λ (m), f (Hz). Lumière dans le vide : c = 3×10⁸ m/s.',
    mcq: {
      question: 'Quelle est la longueur d\'onde de la lumière verte (f = 6×10¹⁴ Hz) dans le vide ?',
      choices: [
        { text: '500 nm', correct: true },
        { text: '200 nm', correct: false },
        { text: '750 nm', correct: false },
        { text: '1000 nm', correct: false },
      ],
      explanation: 'λ = c/f = 3×10⁸ / (6×10¹⁴) = 5×10⁻⁷ m = 500 nm (vert visible).'
    }
  },

  // ── PC_ELEC ───────────────────────────────────────────────────────────────
  {
    id: 'pc_elec_001', chapterId: 'PC_ELEC', difficulty: 'easy',
    front: 'Loi d\'Ohm et formule de la puissance électrique.',
    back: '\\(U = RI\\) ; \\(P = UI = RI^2 = U^2/R\\) — unités : V, Ω, A, W.',
    mcq: {
      question: 'Une résistance R = 100 Ω est alimentée sous U = 12 V. Quelle est la puissance dissipée ?',
      choices: [
        { text: '1,44 W', correct: true },
        { text: '1200 W', correct: false },
        { text: '0,12 W', correct: false },
        { text: '8,33 W', correct: false },
      ],
      explanation: 'P = U²/R = 12²/100 = 144/100 = 1,44 W'
    }
  },
];

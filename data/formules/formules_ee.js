export const FORMULAS = [
  // ── EE_ELEC ───────────────────────────────────────────────────────────────
  { chapterId: 'EE_ELEC', group: 'Moteur à courant continu', name: 'Force contre-électromotrice', symbol: 'E = kΦn', latex: 'E = k \\cdot \\Phi \\cdot n', units: 'V', note: 'k : constante machine, Φ : flux inducteur (Wb), n : vitesse (tr/s)' },
  { chapterId: 'EE_ELEC', group: 'Moteur à courant continu', name: 'Couple électromagnétique', symbol: 'Cem = kΦIa', latex: 'C_{em} = k \\cdot \\Phi \\cdot I_a', units: 'N·m', note: 'Ia : courant d\'induit' },
  { chapterId: 'EE_ELEC', group: 'Moteur à courant continu', name: 'Maille d\'induit', symbol: 'U = E + Ra·Ia', latex: 'U = E + R_a \\cdot I_a', units: 'V', note: 'Ra : résistance d\'induit' },
  { chapterId: 'EE_ELEC', group: 'Moteur asynchrone', name: 'Vitesse synchrone', symbol: 'ns = 60f/p', latex: 'n_s = \\frac{60 \\cdot f}{p}', units: 'tr/min', note: 'f : fréquence (Hz), p : nombre de paires de pôles' },
  { chapterId: 'EE_ELEC', group: 'Moteur asynchrone', name: 'Glissement', symbol: 'g = (ns-n)/ns', latex: 'g = \\frac{n_s - n}{n_s}', units: 'sans', note: 'Typiquement 2–8% en charge nominale' },
  { chapterId: 'EE_ELEC', group: 'Moteur asynchrone', name: 'Puissance mécanique', symbol: 'Pmec = Pem(1-g)', latex: 'P_{mec} = P_{em}(1-g)', units: 'W', note: 'Pem : puissance électromagnétique' },
  { chapterId: 'EE_ELEC', group: 'Transformateur', name: 'Rapport de transformation', symbol: 'm = N2/N1 = U2/U1 = I1/I2', latex: 'm = \\frac{N_2}{N_1} = \\frac{U_2}{U_1} = \\frac{I_1}{I_2}', units: 'sans', note: 'N : nombre de spires' },

  // ── EE_POW ────────────────────────────────────────────────────────────────
  { chapterId: 'EE_POW', group: 'Hacheurs', name: 'Buck (abaisseur)', symbol: 'Us = α·Ue', latex: 'U_s = \\alpha \\cdot U_e', units: 'V', note: 'α = rapport cyclique (0≤α≤1)' },
  { chapterId: 'EE_POW', group: 'Hacheurs', name: 'Boost (élévateur)', symbol: 'Us = Ue/(1-α)', latex: 'U_s = \\frac{U_e}{1-\\alpha}', units: 'V', note: 'Toujours Us > Ue' },
  { chapterId: 'EE_POW', group: 'Hacheurs', name: 'Buck-boost (inverseur)', symbol: 'Us = -α/(1-α)·Ue', latex: 'U_s = -\\frac{\\alpha}{1-\\alpha} U_e', units: 'V', note: 'Tension inversée' },
  { chapterId: 'EE_POW', group: 'Redresseurs', name: 'Pont de Graëtz (mono)', symbol: 'Umoy = 2Umax/π', latex: 'U_{moy} = \\frac{2U_{max}}{\\pi} \\approx 0{,}637 U_{max}', units: 'V', note: 'Redresseur double alternance' },
  { chapterId: 'EE_POW', group: 'Redresseurs', name: 'Monoalternance', symbol: 'Umoy = Umax/π', latex: 'U_{moy} = \\frac{U_{max}}{\\pi}', units: 'V', note: '≈ 0,318 Umax' },

  // ── EE_SRC ────────────────────────────────────────────────────────────────
  { chapterId: 'EE_SRC', group: 'Éolien', name: 'Puissance éolienne', symbol: 'P = Cp·½ρSv³', latex: 'P = C_p \\cdot \\frac{1}{2} \\rho S v^3', units: 'W', note: 'Limite de Betz : Cp_max = 16/27 ≈ 0,59' },
  { chapterId: 'EE_SRC', group: 'Hydraulique', name: 'Puissance hydraulique', symbol: 'P = ρgQHη', latex: 'P = \\rho g Q H \\eta', units: 'W', note: 'ρ=1000 kg/m³, g=9,81, Q en m³/s, H en m' },
  { chapterId: 'EE_SRC', group: 'Solaire PV', name: 'Rendement cellule PV', symbol: 'η = Pmax/(E·S)', latex: '\\eta = \\frac{P_{max}}{E \\cdot S}', units: 'sans', note: 'E : éclairement (W/m²), S : surface' },
  { chapterId: 'EE_SRC', group: 'Thermique', name: 'Rendement de Carnot', symbol: 'η = 1 - Tc/Th', latex: '\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}', units: 'sans', note: 'T en Kelvin ! Limite théorique.' },

  // ── EE_TRANS ──────────────────────────────────────────────────────────────
  { chapterId: 'EE_TRANS', group: 'Puissances triphasé', name: 'Puissance active', symbol: 'P = √3·UL·I·cosφ', latex: 'P = \\sqrt{3} \\cdot U_L \\cdot I \\cdot \\cos\\varphi', units: 'W', note: 'UL : tension de ligne' },
  { chapterId: 'EE_TRANS', group: 'Puissances triphasé', name: 'Puissance réactive', symbol: 'Q = √3·UL·I·sinφ', latex: 'Q = \\sqrt{3} \\cdot U_L \\cdot I \\cdot \\sin\\varphi', units: 'VAR', note: '' },
  { chapterId: 'EE_TRANS', group: 'Puissances triphasé', name: 'Puissance apparente', symbol: 'S = √3·UL·I', latex: 'S = \\sqrt{3} \\cdot U_L \\cdot I', units: 'VA', note: 'S² = P² + Q²' },
  { chapterId: 'EE_TRANS', group: 'Puissances triphasé', name: 'Triangle des puissances', symbol: 'S² = P² + Q²', latex: 'S^2 = P^2 + Q^2', units: '', note: '' },
  { chapterId: 'EE_TRANS', group: 'Lignes', name: 'Pertes Joule dans une ligne', symbol: 'PJ = R·I²', latex: 'P_J = R_{ligne} \\cdot I^2', units: 'W', note: 'Raison du transport HT : réduire I → réduire PJ' },

  // ── EE_BILAN ──────────────────────────────────────────────────────────────
  { chapterId: 'EE_BILAN', group: 'Rendement', name: 'Rendement', symbol: 'η = Putile/Pabsorbée', latex: '\\eta = \\frac{P_{utile}}{P_{absorbée}}', units: 'sans (0–1)', note: '' },
  { chapterId: 'EE_BILAN', group: 'Rendement', name: 'Rendement global', symbol: 'η_global = η1×η2×…', latex: '\\eta_{global} = \\prod_i \\eta_i', units: 'sans', note: '' },
  { chapterId: 'EE_BILAN', group: 'Thermique', name: 'Flux de conduction', symbol: 'Φ = λ·S·ΔT/e', latex: '\\Phi = \\frac{\\lambda \\cdot S \\cdot \\Delta T}{e}', units: 'W', note: 'λ : conductivité (W/m·K), e : épaisseur' },
  { chapterId: 'EE_BILAN', group: 'Thermique', name: 'Résistance thermique', symbol: 'Rth = e/(λ·S)', latex: 'R_{th} = \\frac{e}{\\lambda \\cdot S}', units: 'K/W', note: 'Analogie : ΔT = Rth × Φ ↔ U = R × I' },
  { chapterId: 'EE_BILAN', group: 'Thermique', name: 'Chaleur massique', symbol: 'Q = mcΔT', latex: 'Q = m \\cdot c \\cdot \\Delta T', units: 'J', note: 'Eau : c = 4185 J/(kg·K)' },

  // ── EE_CHAIN ─────────────────────────────────────────────────────────────
  { chapterId: 'EE_CHAIN', group: 'Chaîne énergie', name: 'Bilan de puissance', symbol: 'Pabs = Putile + Ppertes', latex: 'P_{abs} = P_{utile} + P_{pertes}', units: 'W', note: '' },
];

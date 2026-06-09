export const FORMULAS = [
  // ── PC_MEC ────────────────────────────────────────────────────────────────
  { chapterId: 'PC_MEC', group: 'Cinématique', name: 'MRUA — vitesse', symbol: 'v = v0 + at', latex: 'v(t) = v_0 + a \\cdot t', units: 'm/s', note: '' },
  { chapterId: 'PC_MEC', group: 'Cinématique', name: 'MRUA — position', symbol: 'x = x0 + v0t + ½at²', latex: 'x(t) = x_0 + v_0 t + \\frac{1}{2}at^2', units: 'm', note: '' },
  { chapterId: 'PC_MEC', group: 'Cinématique', name: 'Relation Torricelli', symbol: 'v² = v0² + 2a(x-x0)', latex: 'v^2 = v_0^2 + 2a(x-x_0)', units: 'm/s', note: '' },
  { chapterId: 'PC_MEC', group: 'Énergie', name: 'Énergie cinétique', symbol: 'Ec = ½mv²', latex: 'E_c = \\frac{1}{2}mv^2', units: 'J', note: '' },
  { chapterId: 'PC_MEC', group: 'Énergie', name: 'Énergie potentielle de pesanteur', symbol: 'Epp = mgh', latex: 'E_{pp} = mgh', units: 'J', note: 'g = 9,81 m/s²' },
  { chapterId: 'PC_MEC', group: 'Énergie', name: 'Travail d\'une force', symbol: 'W = F·d·cosα', latex: 'W = F \\cdot d \\cdot \\cos\\alpha', units: 'J', note: '' },

  // ── PC_THERMO ─────────────────────────────────────────────────────────────
  { chapterId: 'PC_THERMO', group: 'Gaz parfaits', name: 'Loi des gaz parfaits', symbol: 'PV = nRT', latex: 'PV = nRT', units: 'Pa·m³', note: 'R = 8,314 J/(mol·K), T en Kelvin' },
  { chapterId: 'PC_THERMO', group: 'Échanges thermiques', name: 'Chaleur sensible', symbol: 'Q = mcΔT', latex: 'Q = m \\cdot c \\cdot \\Delta T', units: 'J', note: 'Eau : c = 4185 J/(kg·K)' },
  { chapterId: 'PC_THERMO', group: 'Échanges thermiques', name: 'Chaleur latente', symbol: 'Q = mL', latex: 'Q = m \\cdot L', units: 'J', note: 'Eau : Lfusion=334 kJ/kg, Lvap=2260 kJ/kg' },
  { chapterId: 'PC_THERMO', group: 'Rendement', name: 'Rendement de Carnot', symbol: 'η = 1 - Tc/Th', latex: '\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}', units: 'sans', note: 'Températures en Kelvin !' },

  // ── PC_CHIM ───────────────────────────────────────────────────────────────
  { chapterId: 'PC_CHIM', group: 'Acide-base', name: 'Définition du pH', symbol: 'pH = -log[H3O+]', latex: 'pH = -\\log[H_3O^+]', units: 'sans', note: 'pH < 7 : acide, pH > 7 : basique' },
  { chapterId: 'PC_CHIM', group: 'Acide-base', name: 'Formule de Henderson-Hasselbalch', symbol: 'pH = pKa + log([B]/[A])', latex: 'pH = pK_a + \\log\\frac{[\\text{base}]}{[\\text{acide}]}', units: 'sans', note: 'Solution tampon' },
  { chapterId: 'PC_CHIM', group: 'Électrochimie', name: 'Tension de pile', symbol: 'U = E°(ox) - E°(red)', latex: 'U = E°_{\\text{oxydant}} - E°_{\\text{réducteur}}', units: 'V', note: '' },

  // ── PC_OPT ────────────────────────────────────────────────────────────────
  { chapterId: 'PC_OPT', group: 'Optique', name: 'Snell-Descartes', symbol: 'n1 sinθ1 = n2 sinθ2', latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', units: 'sans', note: 'n_air ≈ 1, n_verre ≈ 1,5' },
  { chapterId: 'PC_OPT', group: 'Optique', name: 'Conjugaison lentille mince', symbol: '1/v - 1/u = 1/f\'', latex: '\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f\'} = D', units: 'δ, m⁻¹', note: 'D : vergence (dioptries)' },
  { chapterId: 'PC_OPT', group: 'Ondes', name: 'Relation onde', symbol: 'v = λ·f', latex: 'v = \\lambda \\cdot f', units: 'm/s', note: 'Lumière : c = 3×10⁸ m/s' },

  // ── PC_ELEC ───────────────────────────────────────────────────────────────
  { chapterId: 'PC_ELEC', group: 'Circuits', name: 'Loi d\'Ohm', symbol: 'U = R·I', latex: 'U = R \\cdot I', units: 'V', note: '' },
  { chapterId: 'PC_ELEC', group: 'Circuits', name: 'Puissance électrique', symbol: 'P = UI = RI² = U²/R', latex: 'P = UI = RI^2 = \\frac{U^2}{R}', units: 'W', note: '' },
  { chapterId: 'PC_ELEC', group: 'Circuits', name: 'Résistances en série', symbol: 'R = R1 + R2 + ...', latex: 'R_{série} = R_1 + R_2 + \\ldots', units: 'Ω', note: '' },
  { chapterId: 'PC_ELEC', group: 'Circuits', name: 'Résistances en parallèle', symbol: '1/R = 1/R1 + 1/R2', latex: '\\frac{1}{R_{//}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\ldots', units: 'Ω', note: '' },
];

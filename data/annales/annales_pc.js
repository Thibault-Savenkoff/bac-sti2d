export const EXERCISES = [

  // ── PC_ENERGIE ──────────────────────────────────────────────────
  {
    id: 'pc_ex_e01',
    chapterId: 'PC_ENERGIE',
    year: 2024,
    source: 'Lycée Guillaume Apollinaire – TD Énergie',
    title: 'Vélo à assistance électrique — autonomie',
    difficulty: 2,
    statement: `
      <p>Un vélo à assistance électrique (VAE) dispose d'une batterie de capacité Q = 10 Ah sous une tension nominale U = 36 V. Le moteur consomme une puissance P = 250 W.</p>`,
    questions: [
      { num: 1, text: 'Calculer l\'énergie stockée dans la batterie en W·h puis en joules.', points: 3 },
      { num: 2, text: 'Estimer l\'autonomie (en heures et en km) si la vitesse moyenne est v = 25 km/h.', points: 3 },
      { num: 3, text: 'Le rendement du moteur est η = 0,85. Quelle est la puissance mécanique utile ?', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> E = Q × U = 10 × 36 = <strong>360 W·h</strong> = 360 × 3600 = <strong>1,296 MJ</strong>.</p>
      <p><strong>2.</strong> Δt = E/P = 360/250 = <strong>1,44 h</strong>. Distance = 25 × 1,44 = <strong>36 km</strong>.</p>
      <p><strong>3.</strong> P<sub>utile</sub> = η × P = 0,85 × 250 = <strong>212,5 W</strong>.</p>`
  },

  {
    id: 'pc_ex_e02',
    chapterId: 'PC_ENERGIE',
    year: 2023,
    source: 'Exercice type BAC',
    title: 'Chaîne de convertisseurs — rendement global',
    difficulty: 2,
    statement: `
      <p>Une installation solaire comporte 3 convertisseurs en série : panneau PV (η₁ = 0,18), onduleur (η₂ = 0,95), transformateur (η₃ = 0,98). La puissance solaire reçue est P = 5 kW.</p>`,
    questions: [
      { num: 1, text: 'Calculer la puissance utile en sortie du système.', points: 4 },
      { num: 2, text: 'Calculer les pertes totales en watts.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> P<sub>utile</sub> = η₁ × η₂ × η₃ × P = 0,18 × 0,95 × 0,98 × 5000 ≈ <strong>839 W</strong>.</p>
      <p><strong>2.</strong> Pertes = 5000 − 839 = <strong>4161 W</strong> (surtout dues au faible rendement du panneau PV).</p>`
  },

  // ── PC_OXREDO ────────────────────────────────────────────────────
  {
    id: 'pc_ex_ox01',
    chapterId: 'PC_OXREDO',
    year: 2024,
    source: 'Exercice type BAC – Accumulateur Li-ion',
    title: 'Capacité et énergie d\'une batterie Li-ion',
    difficulty: 2,
    statement: `
      <p>Une batterie de smartphone est constituée d'un accumulateur Li-ion de tension nominale U = 3,7 V et de capacité Q = 3000 mAh. Le téléphone consomme une puissance moyenne P = 1 W.</p>`,
    questions: [
      { num: 1, text: 'Calculer l\'énergie stockée en W·h puis en joules.', points: 3 },
      { num: 2, text: 'Estimer l\'autonomie du téléphone en heures.', points: 2 },
      { num: 3, text: 'Si on charge avec un courant I = 1,5 A, combien de temps dure la charge complète ?', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> Q = 3000 mAh = 3 A·h. E = 3 × 3,7 = <strong>11,1 W·h</strong> = 11,1 × 3600 ≈ <strong>40 kJ</strong>.</p>
      <p><strong>2.</strong> Δt = E/P = 11,1/1 = <strong>11,1 heures</strong>.</p>
      <p><strong>3.</strong> Δt = Q/I = 3/1,5 = <strong>2 heures</strong>.</p>`
  },

  {
    id: 'pc_ex_ox02',
    chapterId: 'PC_OXREDO',
    year: 2023,
    source: 'Exercice type BAC – Pile à hydrogène',
    title: 'Bilan de matière dans une pile à hydrogène',
    difficulty: 3,
    statement: `
      <p>On considère une pile à hydrogène. Cathode : O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l). Anode : H₂(g) → 2H⁺(aq) + 2e⁻. La pile échange n(e⁻) = 8,0 mol d'électrons lors d'une réaction.</p>`,
    questions: [
      { num: 1, text: 'Calculer la quantité de matière de H₂ consommée.', points: 3 },
      { num: 2, text: 'Calculer la quantité de matière de O₂ consommée.', points: 3 },
      { num: 3, text: 'Calculer la quantité de matière de H₂O produite.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> n(H₂)/1 = n(e⁻)/2 → n(H₂) = 8,0/2 = <strong>4,0 mol</strong>.</p>
      <p><strong>2.</strong> n(O₂)/1 = n(e⁻)/4 → n(O₂) = 8,0/4 = <strong>2,0 mol</strong>.</p>
      <p><strong>3.</strong> n(H₂O)/2 = n(e⁻)/4 → n(H₂O) = 2 × 2,0 = <strong>4,0 mol</strong>.</p>`
  },

  // ── PC_SIGNAUX ───────────────────────────────────────────────────
  {
    id: 'pc_ex_si01',
    chapterId: 'PC_SIGNAUX',
    year: 2024,
    source: 'Exercice type BAC – Réseau électrique',
    title: 'Caractéristiques du réseau 230 V / 50 Hz',
    difficulty: 1,
    statement: `
      <p>Le réseau électrique français délivre une tension sinusoïdale de fréquence f = 50 Hz et de valeur efficace U<sub>eff</sub> = 230 V.</p>`,
    questions: [
      { num: 1, text: 'Calculer l\'amplitude (valeur maximale) de la tension.', points: 2 },
      { num: 2, text: 'Calculer la pulsation ω et la période T.', points: 3 },
      { num: 3, text: 'Écrire l\'expression de u(t) en supposant φ = 0.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> U<sub>max</sub> = U<sub>eff</sub> × √2 = 230 × √2 ≈ <strong>325 V</strong>.</p>
      <p><strong>2.</strong> ω = 2πf = 2π × 50 ≈ <strong>314 rad·s⁻¹</strong>. T = 1/f = 1/50 = <strong>20 ms</strong>.</p>
      <p><strong>3.</strong> u(t) = 325 × sin(314t) V.</p>`
  },

  {
    id: 'pc_ex_si02',
    chapterId: 'PC_SIGNAUX',
    year: 2023,
    source: 'Exercice type BAC – Facteur de puissance',
    title: 'Machine industrielle — facteur de puissance',
    difficulty: 2,
    statement: `
      <p>Une machine industrielle est alimentée sous U<sub>eff</sub> = 230 V. Elle consomme une puissance active P = 4 kW avec un courant efficace I<sub>eff</sub> = 20 A.</p>`,
    questions: [
      { num: 1, text: 'Calculer la puissance apparente S.', points: 2 },
      { num: 2, text: 'Calculer le facteur de puissance k.', points: 2 },
      { num: 3, text: 'Pour k\' = 1, expliquer comment évolue l\'intensité dans les lignes.', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> S = U<sub>eff</sub> × I<sub>eff</sub> = 230 × 20 = <strong>4600 VA</strong>.</p>
      <p><strong>2.</strong> k = P/S = 4000/4600 ≈ <strong>0,87</strong>.</p>
      <p><strong>3.</strong> I = P/(U·k) = 4000/(230 × 1) ≈ 17,4 A (au lieu de 20 A) → moins de pertes Joule.</p>`
  },

  // ── PC_TRANSPORT ─────────────────────────────────────────────────
  {
    id: 'pc_ex_tr01',
    chapterId: 'PC_TRANSPORT',
    year: 2024,
    source: 'Exercice type BAC – Ligne haute tension',
    title: 'Pertes Joule dans une ligne de transport',
    difficulty: 2,
    statement: `
      <p>Une ligne électrique de résistance totale R = 2 Ω transporte une puissance P = 10 MW sous une tension U = 400 kV.</p>`,
    questions: [
      { num: 1, text: 'Calculer l\'intensité du courant dans la ligne.', points: 2 },
      { num: 2, text: 'Calculer la puissance dissipée par effet Joule.', points: 2 },
      { num: 3, text: 'Calculer le pourcentage de pertes.', points: 2 },
      { num: 4, text: 'Si on transporte la même puissance sous U\' = 20 kV (20 fois moins), par quel facteur les pertes sont-elles multipliées ?', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> I = P/U = 10×10⁶ / 400×10³ = <strong>25 A</strong>.</p>
      <p><strong>2.</strong> P<sub>J</sub> = R × I² = 2 × 625 = <strong>1250 W</strong>.</p>
      <p><strong>3.</strong> Pertes = 1250/10⁷ = <strong>0,0125 %</strong>.</p>
      <p><strong>4.</strong> I' = 10⁷/20×10³ = 500 A (×20). P'<sub>J</sub> = 2 × 500² = 500 000 W. Rapport = 500 000/1250 = <strong>×400</strong>.</p>`
  },

  {
    id: 'pc_ex_tr02',
    chapterId: 'PC_TRANSPORT',
    year: 2023,
    source: 'Exercice type BAC – Transformateur',
    title: 'Rapport de transformation d\'un transformateur',
    difficulty: 2,
    statement: `
      <p>Un transformateur élévateur possède N₁ = 500 spires au primaire et N₂ = 10 000 spires au secondaire. La tension au primaire est u₁ = 230 V (efficace).</p>`,
    questions: [
      { num: 1, text: 'Calculer le rapport de transformation m.', points: 2 },
      { num: 2, text: 'Calculer la tension au secondaire u₂.', points: 2 },
      { num: 3, text: 'Si la puissance au secondaire est P₂ = 1 kW, calculer l\'intensité au secondaire.', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> m = N₂/N₁ = 10 000/500 = <strong>20</strong> (élévateur de tension).</p>
      <p><strong>2.</strong> u₂ = m × u₁ = 20 × 230 = <strong>4600 V</strong>.</p>
      <p><strong>3.</strong> I₂ = P₂/u₂ = 1000/4600 ≈ <strong>0,22 A</strong>.</p>`
  },

  // ── PC_THERMO ────────────────────────────────────────────────────
  {
    id: 'pc_ex_th01',
    chapterId: 'PC_THERMO',
    year: 2024,
    source: 'Exercice type BAC – Isolation thermique',
    title: 'Isolation d\'un mur de maison',
    difficulty: 2,
    statement: `
      <p>Un mur est composé de deux couches en série (surface S = 15 m²) :</p>
      <ul>
        <li>Brique : e₁ = 20 cm, λ₁ = 0,84 W·m⁻¹·K⁻¹</li>
        <li>Polystyrène : e₂ = 10 cm, λ₂ = 0,036 W·m⁻¹·K⁻¹</li>
      </ul>
      <p>T<sub>int</sub> = 20 °C, T<sub>ext</sub> = 0 °C.</p>`,
    questions: [
      { num: 1, text: 'Calculer la résistance thermique de chaque couche.', points: 3 },
      { num: 2, text: 'Calculer la résistance thermique totale.', points: 2 },
      { num: 3, text: 'Calculer le flux thermique à travers le mur.', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> R<sub>brique</sub> = 0,20/(0,84 × 15) ≈ 0,0159 K·W⁻¹.<br>
      R<sub>poly</sub> = 0,10/(0,036 × 15) ≈ 0,185 K·W⁻¹.</p>
      <p><strong>2.</strong> R<sub>tot</sub> = 0,0159 + 0,185 ≈ <strong>0,201 K·W⁻¹</strong>.</p>
      <p><strong>3.</strong> φ = ΔT/R<sub>tot</sub> = 20/0,201 ≈ <strong>99,5 W</strong>.</p>`
  },

  // ── PC_MECA ──────────────────────────────────────────────────────
  {
    id: 'pc_ex_me01',
    chapterId: 'PC_MECA',
    year: 2024,
    source: 'Exercice type BAC – Voiture électrique',
    title: 'Forces de frottement sur une voiture',
    difficulty: 2,
    statement: `
      <p>Une voiture électrique de masse m = 1800 kg roule à vitesse constante v = 130 km/h. Son coefficient de traînée est C<sub>x</sub> = 0,28, sa surface frontale S = 2,2 m² et la masse volumique de l'air ρ = 1,2 kg·m⁻³.</p>`,
    questions: [
      { num: 1, text: 'Convertir v en m·s⁻¹.', points: 1 },
      { num: 2, text: 'Calculer la force de frottement aérodynamique.', points: 3 },
      { num: 3, text: 'À vitesse constante, quelle est la force motrice nécessaire ?', points: 2 },
      { num: 4, text: 'Calculer la puissance consommée pour vaincre le frottement.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> v = 130/3,6 ≈ <strong>36,1 m·s⁻¹</strong>.</p>
      <p><strong>2.</strong> f = ½ × ρ × C<sub>x</sub> × S × v² = 0,5 × 1,2 × 0,28 × 2,2 × 36,1² ≈ <strong>962 N</strong>.</p>
      <p><strong>3.</strong> À vitesse constante : ΣF = 0 → F<sub>motrice</sub> = f ≈ <strong>962 N</strong>.</p>
      <p><strong>4.</strong> P = F × v = 962 × 36,1 ≈ <strong>34,7 kW</strong>.</p>`
  },

  // ── PC_ROTATION ──────────────────────────────────────────────────
  {
    id: 'pc_ex_ro01',
    chapterId: 'PC_ROTATION',
    year: 2024,
    source: 'Exercice type BAC – Moteur de bus électrique',
    title: 'Vitesses et réducteur d\'un bus électrique',
    difficulty: 2,
    statement: `
      <p>Un bus roule à v = 75 km/h. Chaque moteur entraîne une roue via un réducteur de rapport 1/7. La fréquence de rotation du moteur est n<sub>M</sub> = 3340 tr/min.</p>`,
    questions: [
      { num: 1, text: 'Convertir la vitesse v en m·s⁻¹.', points: 1 },
      { num: 2, text: 'Calculer la vitesse angulaire du moteur ω<sub>M</sub> en rad·s⁻¹.', points: 2 },
      { num: 3, text: 'En déduire la vitesse de rotation d\'une roue ω<sub>roue</sub>.', points: 2 },
      { num: 4, text: 'Calculer le diamètre d\'une roue en mm.', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> v = 75/3,6 ≈ <strong>20,8 m·s⁻¹</strong>.</p>
      <p><strong>2.</strong> ω<sub>M</sub> = 2π × 3340/60 ≈ <strong>350 rad·s⁻¹</strong>.</p>
      <p><strong>3.</strong> ω<sub>roue</sub> = ω<sub>M</sub>/7 ≈ <strong>50 rad·s⁻¹</strong>.</p>
      <p><strong>4.</strong> R = v/ω<sub>roue</sub> = 20,8/50 ≈ 0,416 m → D = 2R ≈ <strong>832 mm</strong>.</p>`
  },

  // ── PC_LUMIERE ───────────────────────────────────────────────────
  {
    id: 'pc_ex_lu01',
    chapterId: 'PC_LUMIERE',
    year: 2024,
    source: 'Exercice type BAC – Panneau solaire PV',
    title: 'Rendement d\'un panneau photovoltaïque',
    difficulty: 2,
    statement: `
      <p>Un panneau solaire de surface A = 1,6 m² est soumis à un ensoleillement E = 800 W·m⁻². Sa puissance crête est P<sub>crête</sub> = 250 W (mesurée à 1000 W·m⁻²).</p>`,
    questions: [
      { num: 1, text: 'Calculer la puissance lumineuse reçue dans ces conditions.', points: 2 },
      { num: 2, text: 'Calculer la puissance électrique produite (proportionnelle à l\'ensoleillement).', points: 2 },
      { num: 3, text: 'Calculer le rendement du panneau.', points: 2 },
      { num: 4, text: 'Calculer l\'énergie produite en une journée si l\'ensoleillement dure 6 heures.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> P<sub>reçue</sub> = E × A = 800 × 1,6 = <strong>1280 W</strong>.</p>
      <p><strong>2.</strong> P<sub>élec</sub> = 250 × (800/1000) = <strong>200 W</strong>.</p>
      <p><strong>3.</strong> η = 200/1280 ≈ <strong>15,6 %</strong>.</p>
      <p><strong>4.</strong> E<sub>jour</sub> = 200 × 6 = <strong>1200 W·h = 1,2 kW·h</strong>.</p>`
  },

  // ── PC_FLUIDES ───────────────────────────────────────────────────
  {
    id: 'pc_ex_fl01',
    chapterId: 'PC_FLUIDES',
    year: 2024,
    source: 'Exercice type BAC – Plongée sous-marine',
    title: 'Pression à différentes profondeurs',
    difficulty: 2,
    statement: `
      <p>Un plongeur descend à h = 30 m. P₀ = 1,013×10⁵ Pa, ρ<sub>eau</sub> = 1025 kg·m⁻³, g = 9,81 m·s⁻².</p>`,
    questions: [
      { num: 1, text: 'Calculer la pression absolue à 30 m de profondeur.', points: 4 },
      { num: 2, text: 'Calculer la force exercée par l\'eau sur le masque (surface S = 200 cm²).', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> p = P₀ + ρgh = 1,013×10⁵ + 1025 × 9,81 × 30 ≈ <strong>4,03×10⁵ Pa</strong>.</p>
      <p><strong>2.</strong> S = 0,02 m². F = p × S = 4,03×10⁵ × 0,02 ≈ <strong>8060 N</strong>.</p>`
  },

  // ── PC_CHANGE ────────────────────────────────────────────────────
  {
    id: 'pc_ex_ch01',
    chapterId: 'PC_CHANGE',
    year: 2024,
    source: 'Exercice type BAC – Bilan thermique',
    title: 'Énergie pour vaporiser de l\'eau',
    difficulty: 2,
    statement: `
      <p>On souhaite faire passer 5 kg d'eau de 20 °C à l'état gazeux à 100 °C. Données : c<sub>eau</sub> = 4,18×10³ J·kg⁻¹·K⁻¹ ; L<sub>vap</sub> = 2257 kJ·kg⁻¹.</p>`,
    questions: [
      { num: 1, text: 'Calculer l\'énergie pour chauffer l\'eau de 20 °C à 100 °C.', points: 3 },
      { num: 2, text: 'Calculer l\'énergie pour vaporiser l\'eau à 100 °C.', points: 3 },
      { num: 3, text: 'Calculer l\'énergie totale.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> Q₁ = m × c × ΔT = 5 × 4180 × 80 = <strong>1,672 MJ</strong>.</p>
      <p><strong>2.</strong> Q₂ = m × L<sub>vap</sub> = 5 × 2 257 000 = <strong>11,285 MJ</strong>.</p>
      <p><strong>3.</strong> Q<sub>tot</sub> = Q₁ + Q₂ = <strong>12,957 MJ ≈ 13 MJ</strong>.</p>`
  },

  // ── PC_RADIOACT ──────────────────────────────────────────────────
  {
    id: 'pc_ex_ra01',
    chapterId: 'PC_RADIOACT',
    year: 2024,
    source: 'Exercice type BAC – Datation au carbone-14',
    title: 'Demi-vie et décroissance du carbone-14',
    difficulty: 2,
    statement: `
      <p>Le carbone-14 a une demi-vie t<sub>½</sub> = 5730 ans. Un échantillon contient N = 6,25 % du carbone-14 initial N₀.</p>`,
    questions: [
      { num: 1, text: 'Calculer la constante de désintégration λ du carbone-14.', points: 3 },
      { num: 2, text: 'Combien de demi-vies se sont écoulées pour passer de N₀ à 6,25 % N₀ ?', points: 3 },
      { num: 3, text: 'En déduire l\'âge de l\'échantillon.', points: 2 },
    ],
    correction: `
      <p><strong>1.</strong> λ = ln(2)/t<sub>½</sub> = 0,693/5730 ≈ <strong>1,21×10⁻⁴ ans⁻¹</strong>.</p>
      <p><strong>2.</strong> (1/2)<sup>n</sup> = 0,0625 = (1/2)<sup>4</sup> → <strong>n = 4 demi-vies</strong>.</p>
      <p><strong>3.</strong> Âge = 4 × 5730 = <strong>22 920 ans</strong>.</p>`
  },

  // ── PC_ACIDOBASE ─────────────────────────────────────────────────
  {
    id: 'pc_ex_ab01',
    chapterId: 'PC_ACIDOBASE',
    year: 2024,
    source: 'Exercice type BAC – Eau d\'une piscine',
    title: 'pH d\'une solution acide et dilution',
    difficulty: 2,
    statement: `
      <p>Une solution d'acide chlorhydrique a une concentration [H₃O⁺] = 5×10⁻³ mol·L⁻¹.</p>`,
    questions: [
      { num: 1, text: 'Calculer le pH de cette solution.', points: 3 },
      { num: 2, text: 'Calculer la concentration en ions HO⁻.', points: 3 },
      { num: 3, text: 'On dilue 10 fois cette solution. Quel sera le pH ?', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> pH = −log(5×10⁻³) = −log(5) + 3 ≈ 3 − 0,70 = <strong>2,3</strong>.</p>
      <p><strong>2.</strong> [HO⁻] = 10⁻¹⁴/[H₃O⁺] = 10⁻¹⁴/(5×10⁻³) = <strong>2×10⁻¹² mol·L⁻¹</strong>.</p>
      <p><strong>3.</strong> [H₃O⁺]' = 5×10⁻⁴ mol·L⁻¹ → pH' = −log(5×10⁻⁴) ≈ <strong>3,3</strong> (augmente vers 7).</p>`
  },

  // ── PC_SONORE ────────────────────────────────────────────────────
  {
    id: 'pc_ex_so01',
    chapterId: 'PC_SONORE',
    year: 2024,
    source: 'Exercice type BAC – Concert de musique',
    title: 'Niveau d\'intensité sonore et distance',
    difficulty: 2,
    statement: `
      <p>Une enceinte émet une puissance sonore P = 10 W de manière sphérique. I₀ = 10⁻¹² W·m⁻².</p>`,
    questions: [
      { num: 1, text: 'Calculer l\'intensité sonore I à une distance R = 2 m.', points: 3 },
      { num: 2, text: 'Calculer le niveau d\'intensité sonore L en dB.', points: 3 },
      { num: 3, text: 'Cette intensité est-elle dangereuse pour l\'oreille ?', points: 1 },
    ],
    correction: `
      <p><strong>1.</strong> I = P/(4πR²) = 10/(4π×4) ≈ <strong>0,199 W·m⁻²</strong>.</p>
      <p><strong>2.</strong> L = 10×log(0,199/10⁻¹²) ≈ 10×11,3 = <strong>113 dB</strong>.</p>
      <p><strong>3.</strong> Oui, 113 dB est très dangereux (seuil douleur ≈ 120 dB, risque dès 85 dB prolongé).</p>`
  },

  // ── PC_ONDES ─────────────────────────────────────────────────────
  {
    id: 'pc_ex_on01',
    chapterId: 'PC_ONDES',
    year: 2024,
    source: 'Exercice type BAC – Antenne Wi-Fi',
    title: 'Longueur d\'onde et dimensionnement d\'antenne',
    difficulty: 2,
    statement: `
      <p>Le Wi-Fi fonctionne sur des fréquences f₁ = 2,4 GHz et f₂ = 5 GHz. c = 3,0×10⁸ m·s⁻¹.</p>`,
    questions: [
      { num: 1, text: 'Calculer la longueur d\'onde λ₁ pour f₁ = 2,4 GHz.', points: 2 },
      { num: 2, text: 'Calculer la longueur d\'onde λ₂ pour f₂ = 5 GHz.', points: 2 },
      { num: 3, text: 'Calculer la longueur d\'une antenne demi-onde pour chaque fréquence.', points: 3 },
    ],
    correction: `
      <p><strong>1.</strong> λ₁ = c/f₁ = 3×10⁸/(2,4×10⁹) = <strong>12,5 cm</strong>.</p>
      <p><strong>2.</strong> λ₂ = c/f₂ = 3×10⁸/(5×10⁹) = <strong>6 cm</strong>.</p>
      <p><strong>3.</strong> L₁ = λ₁/2 = <strong>6,25 cm</strong> ; L₂ = λ₂/2 = <strong>3 cm</strong>.</p>`
  },
];

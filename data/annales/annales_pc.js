export const EXERCISES = [
  {
    id: 'pc_ex_001',
    chapterId: 'PC_THERMO',
    year: 2023,
    source: 'BAC STI2D – 2023 (PC)',
    title: 'Chauffage solaire — bilan thermique',
    difficulty: 2,
    statement: `
      <p>Un chauffe-eau solaire contient V = 200 L d'eau. L'eau est à T<sub>i</sub> = 15°C en début de journée. Les capteurs solaires apportent une puissance P = 2 kW pendant Δt = 4 heures. On donne c<sub>eau</sub> = 4185 J/(kg·K) et ρ<sub>eau</sub> = 1 kg/L.</p>
    `,
    questions: [
      { num: 1, text: 'Calculer la masse m d\'eau dans le ballon.', points: 1 },
      { num: 2, text: 'Calculer l\'énergie thermique apportée par les capteurs.', points: 2 },
      { num: 3, text: 'Calculer la température finale T<sub>f</sub> de l\'eau.', points: 4 },
      { num: 4, text: 'Le système perd 20% d\'énergie (pertes). Recalculer T<sub>f</sub>.', points: 4 },
    ],
    correction: `
      <p><strong>1. Masse :</strong></p>
      <p>m = ρ × V = 1 × 200 = <strong>200 kg</strong></p>

      <p><strong>2. Énergie apportée :</strong></p>
      <p>Q = P × Δt = 2000 × (4×3600) = 2000 × 14400 = <strong>28 800 000 J = 28,8 MJ</strong></p>

      <p><strong>3. Température finale :</strong></p>
      <p>Q = m·c·ΔT → ΔT = Q/(m·c) = 28 800 000 / (200 × 4185) = 28 800 000 / 837 000 ≈ <strong>34,4°C</strong></p>
      <p>T<sub>f</sub> = T<sub>i</sub> + ΔT = 15 + 34,4 = <strong>49,4°C</strong></p>

      <p><strong>4. Avec 20% de pertes :</strong></p>
      <p>Q<sub>utile</sub> = 0,80 × 28,8 MJ = 23,04 MJ</p>
      <p>ΔT = 23 040 000 / 837 000 ≈ 27,5°C</p>
      <p>T<sub>f</sub> = 15 + 27,5 = <strong>42,5°C</strong></p>
    `
  },
  {
    id: 'pc_ex_002',
    chapterId: 'PC_CHIM',
    year: 2022,
    source: 'BAC STI2D – 2022 (PC)',
    title: 'Pile à combustible hydrogène',
    difficulty: 3,
    statement: `
      <p>Dans une pile à combustible, la réaction globale est :</p>
      <p style="text-align:center">H<sub>2</sub> + ½O<sub>2</sub> → H<sub>2</sub>O</p>
      <p>Les demi-équations aux électrodes sont :</p>
      <p>Cathode : O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>-</sup> → 2H<sub>2</sub>O<br>
      Anode : H<sub>2</sub> → 2H<sup>+</sup> + 2e<sup>-</sup></p>
    `,
    questions: [
      { num: 1, text: 'Identifier l\'oxydant et le réducteur dans cette réaction.', points: 2 },
      { num: 2, text: 'Écrire l\'équation bilan équilibrée de la réaction.', points: 3 },
      { num: 3, text: 'Quel est le seul produit de la réaction ? Quel avantage environnemental cela représente-t-il ?', points: 2 },
      { num: 4, text: 'Le rendement global (électrolyse + PAC) est de 35%. Si on consomme 100 kWh électriques pour produire H₂, quelle quantité d\'énergie électrique peut-on restituer ?', points: 4 },
    ],
    correction: `
      <p><strong>1. Oxydant et réducteur :</strong></p>
      <p>Oxydant : O<sub>2</sub> (capte 4e⁻ à la cathode)</p>
      <p>Réducteur : H<sub>2</sub> (cède 2e⁻ à l'anode)</p>

      <p><strong>2. Équation bilan :</strong></p>
      <p>Multiplier l'anode ×2 : 2H<sub>2</sub> → 4H<sup>+</sup> + 4e<sup>-</sup></p>
      <p>Bilan : O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>-</sup> + 2H<sub>2</sub> → 2H<sub>2</sub>O + 4H<sup>+</sup> + 4e<sup>-</sup></p>
      <p><strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong></p>

      <p><strong>3. Produit unique :</strong></p>
      <p>Le seul produit est l'eau (H<sub>2</sub>O). Aucune émission de CO₂ ni de polluants. Idéal pour la mobilité propre.</p>

      <p><strong>4. Énergie restituée :</strong></p>
      <p>E<sub>restituée</sub> = 100 × 0,35 = <strong>35 kWh</strong></p>
      <p>65 kWh sont perdus (pertes d'électrolyse + pertes de la PAC). Le stockage hydrogène est moins efficace qu'une batterie (~90% aller-retour) mais permet un stockage massif longue durée.</p>
    `
  },
  {
    id: 'pc_ex_003',
    chapterId: 'PC_MEC',
    year: 2023,
    source: 'BAC STI2D – 2023 (PC)',
    title: 'Satellite en orbite — énergie',
    difficulty: 4,
    statement: `
      <p>Un satellite de masse m = 500 kg orbite à h = 400 km d'altitude. On donne : g<sub>0</sub> = 9,81 m/s², R<sub>Terre</sub> = 6370 km.</p>
      <p>La vitesse orbitale est v = 7670 m/s.</p>
    `,
    questions: [
      { num: 1, text: 'Calculer l\'énergie cinétique du satellite.', points: 3 },
      { num: 2, text: 'Calculer l\'altitude totale r = R + h (rayon de l\'orbite).', points: 1 },
      { num: 3, text: 'Si le satellite descend en altitude et que son énergie mécanique est conservée, que devient sa vitesse ? (principe qualitatif)', points: 3 },
    ],
    correction: `
      <p><strong>1. Énergie cinétique :</strong></p>
      <p>E<sub>c</sub> = ½·m·v² = ½ × 500 × 7670² = 250 × 58 828 900 = <strong>14,7×10⁹ J ≈ 14,7 GJ</strong></p>

      <p><strong>2. Rayon orbital :</strong></p>
      <p>r = R + h = 6370 + 400 = <strong>6770 km = 6,77×10⁶ m</strong></p>

      <p><strong>3. Conservation de l\'énergie mécanique :</strong></p>
      <p>Si le satellite descend, son énergie potentielle de pesanteur diminue (E<sub>pp</sub> = -GMm/r, r diminue → E<sub>pp</sub> devient plus négative). Par conservation de l'énergie mécanique, l'énergie cinétique augmente → <strong>la vitesse augmente</strong>. Plus un satellite est bas, plus il va vite (paradoxe apparent).</p>
    `
  }
];

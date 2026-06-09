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
      <p>Un vélo à assistance électrique (VAE) dispose d'une batterie de capacité Q = 10 Ah sous une tension nominale U = 36 V. Le moteur consomme une puissance P = 250 W.</p>
      <ol>
        <li>Calculer l'énergie stockée dans la batterie en watt-heures puis en joules.</li>
        <li>Estimer l'autonomie du vélo (en heures et en km) si la vitesse moyenne est v = 25 km/h.</li>
        <li>Le rendement du moteur est η = 0,85. Quelle est la puissance mécanique utile ?</li>
      </ol>`,
    questions: [
      { q: "1. Énergie en W·h puis en J.", hint: "E = Q × U" },
      { q: "2. Autonomie : Δt = E/P", hint: "distance = vitesse × durée" },
      { q: "3. P_utile = η × P_moteur", hint: "" }
    ],
    correction: `
      <p><strong>1.</strong> E = Q × U = 10 × 36 = <strong>360 W·h</strong> = 360 × 3600 = 1,296×10⁶ J ≈ <strong>1,3 MJ</strong>.</p>
      <p><strong>2.</strong> Δt = E/P = 360/250 = <strong>1,44 h</strong>. Distance = 25 × 1,44 ≈ <strong>36 km</strong>.</p>
      <p><strong>3.</strong> P_utile = 0,85 × 250 = <strong>212,5 W</strong>.</p>`
  },

  {
    id: 'pc_ex_e02',
    chapterId: 'PC_ENERGIE',
    year: 2023,
    source: 'Exercice type BAC',
    title: 'Chaîne de convertisseurs — rendement global',
    difficulty: 2,
    statement: `
      <p>Une installation solaire comporte 3 convertisseurs en série :</p>
      <ul>
        <li>Panneau PV : η₁ = 0,18</li>
        <li>Onduleur : η₂ = 0,95</li>
        <li>Transformateur : η₃ = 0,98</li>
      </ul>
      <p>La puissance solaire reçue est P_solaire = 5 kW.</p>
      <ol>
        <li>Calculer la puissance utile en sortie du système.</li>
        <li>Calculer les pertes totales.</li>
      </ol>`,
    questions: [
      { q: "1. P_utile = η₁ × η₂ × η₃ × P_solaire", hint: "Multiplier les rendements pour une chaîne" },
      { q: "2. Pertes = P_entrante − P_utile", hint: "" }
    ],
    correction: `
      <p><strong>1.</strong> P_utile = 0,18 × 0,95 × 0,98 × 5000 = 0,168 × 5000 ≈ <strong>839 W</strong>.</p>
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
      <p>Une batterie de smartphone est constituée d'un accumulateur Li-ion de tension nominale U = 3,7 V et de capacité Q = 3000 mAh.</p>
      <ol>
        <li>Calculer l'énergie stockée dans la batterie en W·h puis en J.</li>
        <li>Le téléphone consomme une puissance moyenne P = 1 W en utilisation normale. Estimer l'autonomie en heures.</li>
        <li>Si on charge la batterie avec un courant I = 1,5 A, combien de temps dure la charge complète ?</li>
      </ol>`,
    questions: [
      { q: "1. E = Q × U", hint: "Convertir Q en A·h" },
      { q: "2. Δt = E/P", hint: "" },
      { q: "3. Q = I × Δt → Δt = Q/I", hint: "" }
    ],
    correction: `
      <p><strong>1.</strong> Q = 3000 mAh = 3 A·h. E = 3 × 3,7 = <strong>11,1 W·h</strong> = 11,1 × 3600 = <strong>39 960 J ≈ 40 kJ</strong>.</p>
      <p><strong>2.</strong> Δt = 11,1/1 = <strong>11,1 heures</strong>.</p>
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
      <p>On considère une pile à hydrogène avec les demi-réactions suivantes :</p>
      <ul>
        <li>Cathode : O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)</li>
        <li>Anode : H₂(g) → 2H⁺(aq) + 2e⁻</li>
      </ul>
      <p>La pile échange 8,0 mol d'électrons lors d'une réaction.</p>
      <ol>
        <li>Calculer la quantité de matière de H₂ consommée.</li>
        <li>Calculer la quantité de matière de O₂ consommée.</li>
        <li>Calculer la quantité de matière de H₂O produite.</li>
      </ol>`,
    questions: [
      { q: "1. n(H₂)/1 = n(e⁻)/2", hint: "Rapport stœchiométrique" },
      { q: "2. n(O₂)/1 = n(e⁻)/4", hint: "" },
      { q: "3. n(H₂O)/2 = n(e⁻)/4", hint: "" }
    ],
    correction: `
      <p><strong>1.</strong> n(H₂) = n(e⁻)/2 = 8,0/2 = <strong>4,0 mol</strong>.</p>
      <p><strong>2.</strong> n(O₂) = n(e⁻)/4 = 8,0/4 = <strong>2,0 mol</strong>.</p>
      <p><strong>3.</strong> n(H₂O) = 2 × n(O₂) = 2 × 2,0 = <strong>4,0 mol</strong>.</p>`
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
      <p>Le réseau électrique français délivre une tension sinusoïdale de fréquence f = 50 Hz et de valeur efficace U_eff = 230 V.</p>
      <ol>
        <li>Calculer l'amplitude (valeur maximale) de la tension.</li>
        <li>Calculer la pulsation ω et la période T.</li>
        <li>Écrire l'expression de u(t) en supposant φ = 0.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> U_max = U_eff × √2 = 230 × √2 ≈ <strong>325 V</strong>.</p>
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
      <p>Une machine industrielle est alimentée sous U_eff = 230 V. Elle consomme une puissance active P = 4 kW avec un courant efficace I_eff = 20 A.</p>
      <ol>
        <li>Calculer la puissance apparente S.</li>
        <li>Calculer le facteur de puissance k.</li>
        <li>Pour améliorer le facteur de puissance à k' = 1, expliquer qualitativement ce qui change pour l'intensité circulant dans les lignes.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> S = U_eff × I_eff = 230 × 20 = <strong>4600 VA</strong>.</p>
      <p><strong>2.</strong> k = P/S = 4000/4600 ≈ <strong>0,87</strong>.</p>
      <p><strong>3.</strong> Si k = 1, I = P/(U·k) = 4000/230 ≈ 17,4 A (au lieu de 20 A). L'intensité diminue → pertes Joule réduites.</p>`
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
      <p>Une ligne électrique de résistance totale R = 2 Ω transporte une puissance P = 10 MW sous une tension U = 400 kV.</p>
      <ol>
        <li>Calculer l'intensité du courant dans la ligne.</li>
        <li>Calculer la puissance dissipée par effet Joule.</li>
        <li>Calculer le pourcentage de pertes.</li>
        <li>Si on transporte la même puissance sous U' = 20 kV (20 fois moins), par quel facteur les pertes sont-elles multipliées ?</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> I = P/U = 10×10⁶/400×10³ = <strong>25 A</strong>.</p>
      <p><strong>2.</strong> P_J = R × I² = 2 × 25² = <strong>1250 W</strong> = 1,25 kW.</p>
      <p><strong>3.</strong> % = 1250/10×10⁶ = 0,0125 % (très faible).</p>
      <p><strong>4.</strong> À U' = 20 kV, I' = 10×10⁶/20×10³ = 500 A (×20). P_J' = 2 × 500² = 500 000 W. Rapport : 500 000/1250 = <strong>×400</strong>.</p>`
  },

  {
    id: 'pc_ex_tr02',
    chapterId: 'PC_TRANSPORT',
    year: 2023,
    source: 'Exercice type BAC – Transformateur',
    title: 'Rapport de transformation d\'un transformateur',
    difficulty: 2,
    statement: `
      <p>Un transformateur élévateur possède N₁ = 500 spires au primaire et N₂ = 10 000 spires au secondaire. La tension au primaire est u₁_eff = 230 V.</p>
      <ol>
        <li>Calculer le rapport de transformation m.</li>
        <li>Calculer la tension au secondaire u₂_eff.</li>
        <li>Si la puissance au secondaire est P₂ = 1 kW, calculer l'intensité au secondaire.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> m = N₂/N₁ = 10000/500 = <strong>20</strong> (élévateur de tension).</p>
      <p><strong>2.</strong> u₂_eff = m × u₁_eff = 20 × 230 = <strong>4600 V</strong>.</p>
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
      <p>Un mur de maison est composé de :</p>
      <ul>
        <li>Brique : épaisseur e₁ = 20 cm, λ₁ = 0,84 W·m⁻¹·K⁻¹</li>
        <li>Polystyrène : épaisseur e₂ = 10 cm, λ₂ = 0,036 W·m⁻¹·K⁻¹</li>
      </ul>
      <p>La surface du mur est S = 15 m². La température intérieure est T_int = 20 °C et extérieure T_ext = 0 °C.</p>
      <ol>
        <li>Calculer la résistance thermique de chaque couche.</li>
        <li>Calculer la résistance thermique totale.</li>
        <li>Calculer le flux thermique à travers le mur.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> R_brique = e₁/(λ₁ × S) = 0,20/(0,84 × 15) = 0,0159 K·W⁻¹.<br>
      R_polystyrène = e₂/(λ₂ × S) = 0,10/(0,036 × 15) = 0,185 K·W⁻¹.</p>
      <p><strong>2.</strong> R_tot = R_brique + R_polystyrène = 0,0159 + 0,185 ≈ <strong>0,201 K·W⁻¹</strong>.</p>
      <p><strong>3.</strong> φ = ΔT/R_tot = (20−0)/0,201 ≈ <strong>99,5 W</strong>.</p>`
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
      <p>Une voiture électrique de masse m = 1800 kg roule à vitesse constante v = 130 km/h. Son coefficient de traînée est C_x = 0,28, sa surface frontale S = 2,2 m² et la masse volumique de l'air est ρ = 1,2 kg·m⁻³.</p>
      <ol>
        <li>Convertir v en m/s.</li>
        <li>Calculer la force de frottement aérodynamique.</li>
        <li>Si la voiture roule à vitesse constante, quelle est la force motrice nécessaire ?</li>
        <li>Calculer la puissance consommée pour vaincre le frottement.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> v = 130/3,6 ≈ <strong>36,1 m·s⁻¹</strong>.</p>
      <p><strong>2.</strong> f = ½ × ρ × C_x × S × v² = 0,5 × 1,2 × 0,28 × 2,2 × 36,1² ≈ <strong>962 N</strong>.</p>
      <p><strong>3.</strong> À vitesse constante, ΣF = 0 → F_motrice = f ≈ <strong>962 N</strong>.</p>
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
      <p>Un bus comporte deux moteurs électriques. Chaque moteur entraîne une roue par l'intermédiaire d'un réducteur de rapport 1/7. Quand le bus roule à v = 75 km/h, le moteur tourne à n_M = 3340 tr/min.</p>
      <ol>
        <li>Convertir la vitesse v en m·s⁻¹.</li>
        <li>Calculer la vitesse angulaire du moteur ω_M.</li>
        <li>En déduire la vitesse de rotation d'une roue ω_roue.</li>
        <li>Calculer le diamètre d'une roue.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> v = 75/3,6 ≈ <strong>20,8 m·s⁻¹</strong>.</p>
      <p><strong>2.</strong> ω_M = 2π × 3340/60 ≈ <strong>350 rad·s⁻¹</strong>.</p>
      <p><strong>3.</strong> ω_roue = ω_M/7 ≈ <strong>50 rad·s⁻¹</strong>.</p>
      <p><strong>4.</strong> v = R × ω_roue → R = v/ω_roue = 20,8/50 ≈ 0,416 m → D = 2R ≈ <strong>832 mm</strong>.</p>`
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
      <p>Un panneau solaire de surface A = 1,6 m² est soumis à un ensoleillement E = 800 W·m⁻². Sa puissance crête est P_crête = 250 W (mesurée à 1000 W·m⁻²).</p>
      <ol>
        <li>Calculer la puissance lumineuse reçue par le panneau dans ces conditions.</li>
        <li>Calculer la puissance électrique produite (proportionnelle à l'ensoleillement).</li>
        <li>Calculer le rendement du panneau.</li>
        <li>Calculer l'énergie produite en une journée si l'ensoleillement dure 6 heures.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> P_reçue = E × A = 800 × 1,6 = <strong>1280 W</strong>.</p>
      <p><strong>2.</strong> P_élec = P_crête × (E/1000) = 250 × (800/1000) = <strong>200 W</strong>.</p>
      <p><strong>3.</strong> η = P_élec/P_reçue = 200/1280 = <strong>15,6 %</strong>.</p>
      <p><strong>4.</strong> E_jour = P_élec × Δt = 200 × 6 = <strong>1200 W·h = 1,2 kW·h</strong>.</p>`
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
      <p>Un plongeur descend à une profondeur h = 30 m. La pression atmosphérique au niveau de la mer est P₀ = 1,013×10⁵ Pa, la masse volumique de l'eau de mer est ρ = 1025 kg·m⁻³ et g = 9,81 m·s⁻².</p>
      <ol>
        <li>Calculer la pression absolue à 30 m de profondeur.</li>
        <li>Calculer la force exercée par l'eau sur une paroi du masque du plongeur (surface S = 200 cm²).</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> p(30) = P₀ + ρ × g × h = 1,013×10⁵ + 1025 × 9,81 × 30 = 1,013×10⁵ + 3,02×10⁵ ≈ <strong>4,03×10⁵ Pa</strong>.</p>
      <p><strong>2.</strong> S = 200 cm² = 200×10⁻⁴ m² = 0,02 m². F = p × S = 4,03×10⁵ × 0,02 ≈ <strong>8060 N</strong>.</p>`
  },

  // ── PC_CHANGE ────────────────────────────────────────────────────
  {
    id: 'pc_ex_ch01',
    chapterId: 'PC_CHANGE',
    year: 2024,
    source: 'Exercice type BAC – Pompe à chaleur',
    title: 'Énergie pour vaporiser de l\'eau',
    difficulty: 2,
    statement: `
      <p>On souhaite faire passer 5 kg d'eau de 20 °C à l'état gazeux à 100 °C. Données : c_eau = 4,18×10³ J·kg⁻¹·K⁻¹ ; L_vap = 2257 kJ·kg⁻¹.</p>
      <ol>
        <li>Calculer l'énergie nécessaire pour chauffer l'eau de 20 °C à 100 °C.</li>
        <li>Calculer l'énergie nécessaire pour vaporiser l'eau à 100 °C.</li>
        <li>Calculer l'énergie totale.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> Q₁ = m × c × ΔT = 5 × 4180 × (100−20) = 5 × 4180 × 80 = <strong>1,672 MJ</strong>.</p>
      <p><strong>2.</strong> Q₂ = m × L_vap = 5 × 2257×10³ = <strong>11,285 MJ</strong>.</p>
      <p><strong>3.</strong> Q_tot = Q₁ + Q₂ = 1,672 + 11,285 = <strong>12,957 MJ ≈ 13 MJ</strong>.</p>`
  },

  // ── PC_RADIOACT ──────────────────────────────────────────────────
  {
    id: 'pc_ex_ra01',
    chapterId: 'PC_RADIOACT',
    year: 2024,
    source: 'Exercice type BAC – Datation au carbone 14',
    title: 'Demi-vie et décroissance du carbone-14',
    difficulty: 2,
    statement: `
      <p>Le carbone-14 a une demi-vie t₁/₂ = 5730 ans. Un échantillon archéologique contient N = 6,25 % du carbone-14 initial N₀.</p>
      <ol>
        <li>Calculer la constante de désintégration λ du carbone-14.</li>
        <li>Combien de demi-vies se sont écoulées pour que N₀ se réduise à 6,25 % ?</li>
        <li>En déduire l'âge de l'échantillon.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> λ = ln(2)/t₁/₂ = 0,693/5730 ≈ <strong>1,21×10⁻⁴ ans⁻¹</strong>.</p>
      <p><strong>2.</strong> N/N₀ = (1/2)^n = 0,0625 = (1/2)⁴ → <strong>n = 4 demi-vies</strong>.</p>
      <p><strong>3.</strong> Âge = 4 × t₁/₂ = 4 × 5730 = <strong>22 920 ans</strong>.</p>`
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
      <p>Une solution d'acide chlorhydrique a une concentration en ions H₃O⁺ de [H₃O⁺] = 5×10⁻³ mol·L⁻¹.</p>
      <ol>
        <li>Calculer le pH de cette solution.</li>
        <li>Calculer la concentration en ions HO⁻.</li>
        <li>On dilue 10 fois cette solution. Quel sera le pH de la solution diluée ?</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> pH = −log(5×10⁻³) = −log(5) − log(10⁻³) = −0,70 + 3 = <strong>2,3</strong>.</p>
      <p><strong>2.</strong> [HO⁻] = 10⁻¹⁴/[H₃O⁺] = 10⁻¹⁴/(5×10⁻³) = <strong>2×10⁻¹² mol·L⁻¹</strong>.</p>
      <p><strong>3.</strong> Dilution ×10 : [H₃O⁺]' = 5×10⁻⁴ mol·L⁻¹. pH' = −log(5×10⁻⁴) ≈ <strong>3,3</strong> (augmente vers 7).</p>`
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
      <p>Une enceinte acoustique émet une puissance sonore P = 10 W de manière sphérique.</p>
      <ol>
        <li>Calculer l'intensité sonore à une distance R = 2 m.</li>
        <li>Calculer le niveau d'intensité sonore L en dB à cette distance. (I₀ = 10⁻¹² W·m⁻²)</li>
        <li>Est-ce une intensité dangereuse pour l'oreille ?</li>
        <li>À quelle distance faut-il se placer pour que L = 85 dB ?</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> I = P/(4πR²) = 10/(4π×4) = 10/50,3 ≈ <strong>0,199 W·m⁻²</strong>.</p>
      <p><strong>2.</strong> L = 10×log(0,199/10⁻¹²) = 10×log(1,99×10¹¹) ≈ 10×11,3 = <strong>113 dB</strong>.</p>
      <p><strong>3.</strong> Oui, 113 dB dépasse largement le seuil de danger (85 dB prolongé).</p>
      <p><strong>4.</strong> L = 85 dB → I = I₀×10^(L/10) = 10⁻¹²×10^8,5 ≈ 3,16×10⁻⁴ W·m⁻². R = √(P/(4πI)) = √(10/(4π×3,16×10⁻⁴)) ≈ <strong>50 m</strong>.</p>`
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
      <p>Le Wi-Fi fonctionne sur des fréquences de f₁ = 2,4 GHz et f₂ = 5 GHz. La célérité est c = 3,0×10⁸ m·s⁻¹.</p>
      <ol>
        <li>Calculer la longueur d'onde λ₁ pour f₁ = 2,4 GHz.</li>
        <li>Calculer la longueur d'onde λ₂ pour f₂ = 5 GHz.</li>
        <li>Calculer la longueur d'une antenne demi-onde pour chaque fréquence.</li>
      </ol>`,
    questions: [],
    correction: `
      <p><strong>1.</strong> λ₁ = c/f₁ = 3×10⁸/(2,4×10⁹) = <strong>0,125 m = 12,5 cm</strong>.</p>
      <p><strong>2.</strong> λ₂ = c/f₂ = 3×10⁸/(5×10⁹) = <strong>0,060 m = 6 cm</strong>.</p>
      <p><strong>3.</strong> L₁ = λ₁/2 = <strong>6,25 cm</strong> ; L₂ = λ₂/2 = <strong>3 cm</strong>.</p>`
  },
];

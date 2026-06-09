export const FICHE = {
  chapterId: 'EE_SRC',
  title: 'Sources d\'énergie',
  sections: [
    {
      id: 'solaire',
      title: 'Énergie solaire photovoltaïque',
      content: `
        <h3>Principe</h3>
        <p>L'effet photovoltaïque : les photons libèrent des électrons dans la jonction p-n d'une cellule PV.</p>

        <h3>Caractéristique I-V d'une cellule PV</h3>
        <ul>
          <li><strong>Icc (courant de court-circuit)</strong> : courant maximal (proportionnel à l'éclairement E)</li>
          <li><strong>Uoc (tension de circuit ouvert)</strong> : tension maximale (~0,5–0,6 V par cellule)</li>
          <li><strong>PPM (Point de Puissance Maximum)</strong> : point optimal sur la courbe, suivi par le MPPT</li>
        </ul>
        <div class="formula-block">$$P_{max} = U_{MPP} \\cdot I_{MPP}$$
$$\\eta_{cellule} = \\frac{P_{max}}{E \\cdot S} \\quad (E = \\text{éclairement W/m}^2)$$</div>

        <h3>Facteur de forme (Fill Factor)</h3>
        <div class="formula-block">$$FF = \\frac{P_{max}}{U_{oc} \\cdot I_{cc}}$$</div>
        <p>FF typique : 0,7–0,85 pour des cellules de bonne qualité.</p>

        <h3>Association de cellules</h3>
        <ul>
          <li><strong>Série</strong> : les tensions s'additionnent (même courant)</li>
          <li><strong>Parallèle</strong> : les courants s'additionnent (même tension)</li>
        </ul>
        <div class="tip-box">Un module 60 cellules poly à 5 A et 0,5 V/cellule : U = 30 V, I = 5 A, P = 150 W environ.</div>
      `
    },
    {
      id: 'eolien',
      title: 'Énergie éolienne',
      content: `
        <h3>Puissance du vent</h3>
        <div class="formula-block">$$P_{vent} = \\frac{1}{2} \\rho S v^3$$</div>
        <p>\\(\\rho\\) = masse volumique de l'air (≈ 1,25 kg/m³), \\(S = \\pi R^2\\) = surface balayée, \\(v\\) = vitesse du vent</p>

        <h3>Limite de Betz</h3>
        <div class="formula-block">$$C_p^{max} = \\frac{16}{27} \\approx 0{,}593$$</div>
        <p>Une éolienne ne peut extraire au maximum que 59,3% de la puissance du vent (limite théorique).</p>
        <div class="formula-block">$$P_{éolienne} = C_p \\cdot \\frac{1}{2} \\rho S v^3$$</div>

        <h3>Types d'éoliennes</h3>
        <table>
          <tr><th>Type</th><th>Axe</th><th>Avantages</th></tr>
          <tr><td>HAWT (tripale)</td><td>Horizontal</td><td>Rendement élevé, grand déploiement</td></tr>
          <tr><td>VAWT (Darrieus)</td><td>Vertical</td><td>Omnidirectionnel, plus silencieux</td></tr>
        </table>
      `
    },
    {
      id: 'hydraulique',
      title: 'Énergie hydraulique',
      content: `
        <h3>Puissance hydraulique</h3>
        <div class="formula-block">$$P = \\rho \\cdot g \\cdot Q \\cdot H \\cdot \\eta$$</div>
        <p>\\(\\rho\\) = 1000 kg/m³ (eau), \\(g\\) = 9,81 m/s², \\(Q\\) = débit (m³/s), \\(H\\) = hauteur de chute (m)</p>

        <h3>Types de centrales</h3>
        <ul>
          <li><strong>Au fil de l'eau</strong> : faible hauteur, fort débit</li>
          <li><strong>Lac de retenue</strong> : grande hauteur, stockage possible</li>
          <li><strong>STEP</strong> (Station de Transfert d'Énergie par Pompage) : stockage d'énergie → pompe la nuit, turbine le jour</li>
          <li><strong>Hydrolienne</strong> : turbine dans un courant marin ou fluvial</li>
        </ul>

        <div class="definition-box">La STEP est actuellement la principale solution de <strong>stockage massif</strong> d'énergie électrique à l'échelle mondiale.</div>
      `
    },
    {
      id: 'thermique',
      title: 'Énergie thermique et nucléaire',
      content: `
        <h3>Centrale thermique (cycle de Rankine)</h3>
        <ol>
          <li>Combustion (charbon, gaz, fioul, biomasse) → vapeur haute pression</li>
          <li>Vapeur → turbine → alternateur (électricité)</li>
          <li>Condenseur → eau → pompe → chaudière</li>
        </ol>
        <div class="formula-block">$$\\eta_{Carnot} = 1 - \\frac{T_{froide}}{T_{chaude}} \\quad (\\text{limite théorique})$$</div>
        <p>Rendement réel : 35–45% pour les meilleures centrales.</p>

        <h3>Centrale nucléaire</h3>
        <p>Fonctionne comme une centrale thermique, mais la chaleur vient de la <strong>fission</strong> de l'uranium-235 :</p>
        <div class="formula-block">$${}^{235}_{92}\\text{U} + n \\rightarrow \\text{produits de fission} + 2{,}5n + \\text{énergie}$$</div>
        <p>Rendement thermique : ~33%. Pas d'émissions CO₂ en fonctionnement. Déchets radioactifs à gérer.</p>

        <h3>Mix énergétique français</h3>
        <ul>
          <li>~70% nucléaire, ~25% renouvelables (hydraulique + éolien + solaire), ~5% fossile</li>
          <li>Intensité carbone ≈ 50–80 g CO₂/kWh (parmi les plus faibles d'Europe)</li>
        </ul>
      `
    }
  ]
};

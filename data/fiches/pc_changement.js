export const FICHE = {
  chapterId: 'PC_CHANGE',
  title: 'Changements d\'état et transfert thermique',
  sections: [
    {
      id: 'etats',
      title: 'États de la matière',
      content: `
        <p>Trois états physiques principaux, selon température et pression :</p>
        <table>
          <thead><tr><th>État</th><th>Volume</th><th>Forme</th><th>Structure microscopique</th></tr></thead>
          <tbody>
            <tr><td>Solide</td><td>Propre</td><td>Propre</td><td>Ordre régulier, atomes proches et peu mobiles</td></tr>
            <tr><td>Liquide</td><td>Propre</td><td>Aucune</td><td>Désorganisé, atomes proches et mobiles</td></tr>
            <tr><td>Gazeux</td><td>Aucun</td><td>Aucune</td><td>Désorganisé, atomes très éloignés et rapides</td></tr>
          </tbody>
        </table>
        <h3>Changements d'état</h3>
        <p>Fusion · Vaporisation · Sublimation · Solidification · Liquéfaction · Condensation.</p>
        <ul>
          <li><strong>Endothermique</strong> (absorbe de l'énergie) : fusion, vaporisation, sublimation → rupture de liaisons.</li>
          <li><strong>Exothermique</strong> (libère de l'énergie) : solidification, liquéfaction, condensation → création de liaisons.</li>
        </ul>
        <p>⚠️ Lors d'un changement d'état, la <strong>température ne varie pas</strong>.</p>`
    },
    {
      id: 'eau',
      title: 'Cas de l\'eau et liaisons hydrogène',
      content: `
        <p>La molécule d'eau est polaire : l'oxygène (plus électronégatif) attire les électrons → charges partielles \\(\\delta^-\\) sur O et \\(\\delta^+\\) sur H.</p>
        <p>Les molécules d'eau forment des <strong>liaisons hydrogène</strong> intermoléculaires (énergie ≈ 10–40 kJ·mol⁻¹). Ces liaisons expliquent les propriétés particulières de l'eau (point d'ébullition élevé pour une molécule si légère…).</p>
        <h3>Diagramme d'état (p, T)</h3>
        <p>Indique l'état physique selon la pression et la température.</p>
        <ul>
          <li><strong>Point triple :</strong> coexistence des 3 états (T = 0,01 °C, p = 611,7 Pa pour l'eau).</li>
          <li><strong>Point critique :</strong> limite de la courbe de vaporisation ; au-delà : fluide supercritique.</li>
        </ul>`
    },
    {
      id: 'bilan',
      title: 'Énergie de changement d\'état et bilan thermique',
      content: `
        <h3>Énergie massique de changement d'état</h3>
        <p>\\[ Q = m \\times L \\quad (\\mathrm{J}) \\]</p>
        <p>avec \\(L\\) l'énergie massique de changement d'état (J·kg⁻¹) — valeur propre au corps et à la transformation.</p>
        <p>Pour l'eau : \\(L_{\\text{vaporisation}} = 2257\\,\\mathrm{kJ \\cdot kg^{-1}}\\) à 100 °C.</p>
        <h3>Bilan énergétique complet</h3>
        <p>Lors d'un chauffage avec changement d'état, sommer :</p>
        <ol>
          <li>Échauffement : \\(Q = m \\times c \\times \\Delta T\\) (avec la valeur de \\(c\\) adaptée à chaque phase)</li>
          <li>Changement d'état : \\(Q = m \\times L\\)</li>
          <li>Nouvel échauffement si nécessaire.</li>
        </ol>`
    }
  ]
};

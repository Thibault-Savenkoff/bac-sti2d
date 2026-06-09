export const FICHE = {
  chapterId: 'PC_ACIDOBASE',
  title: 'Réactions acido-basiques',
  sections: [
    {
      id: 'acides_bases',
      title: 'Acides et bases (Brønsted)',
      content: `
        <p><strong>Acide :</strong> espèce susceptible de <em>donner</em> un proton H⁺.</p>
        <p>\\[ \\mathrm{AH} \\rightleftharpoons \\mathrm{A^-} + \\mathrm{H^+} \\]</p>
        <p><strong>Base :</strong> espèce susceptible de <em>capter</em> un proton H⁺.</p>
        <p>\\[ \\mathrm{A^-} + \\mathrm{H^+} \\rightleftharpoons \\mathrm{AH} \\]</p>
        <p><strong>Couple acide/base :</strong> \\(\\mathrm{AH/A^-}\\) (l'acide et la base conjuguée).</p>
        <p>L'eau est <strong>amphotère</strong> : elle peut jouer le rôle d'acide ou de base selon les espèces en présence.</p>`
    },
    {
      id: 'reactions',
      title: 'Réactions acido-basiques',
      content: `
        <p>Une réaction acido-basique est un <strong>transfert de proton H⁺</strong> entre un acide (couple 1) et une base (couple 2) :</p>
        <p>\\[ \\mathrm{A_1H + A_2^- \\rightleftharpoons A_1^- + A_2H} \\]</p>
        <p>Exemple :</p>
        <p>\\[ \\mathrm{CH_3CO_2H + NH_3 \\rightleftharpoons NH_4^+ + CH_3CO_2^-} \\]</p>
        <p>La double flèche (⇌) indique un équilibre : coexistence des réactifs et des produits.</p>`
    },
    {
      id: 'ph',
      title: 'pH et mesure de l\'acidité',
      content: `
        <p>\\[ \\mathrm{pH} = -\\log\\left(\\frac{[\\mathrm{H_3O^+}]}{c^\\circ}\\right) \\quad \\text{avec } c^\\circ = 1\\,\\mathrm{mol \\cdot L^{-1}} \\]</p>
        <p>Echelle de pH :</p>
        <p>\\[ 0 \\underbrace{\\longleftarrow}_{\\text{acide}} 7 \\underbrace{\\longrightarrow}_{\\text{basique}} 14 \\]</p>
        <p><strong>Mesure :</strong> papier pH (rapide, peu précis) ou pH-mètre (étalonné, précis).</p>
        <h3>Lien entre concentrations</h3>
        <p>\\[ [\\mathrm{H_3O^+}] \\times [\\mathrm{HO^-}] = 10^{-14} \\quad (\\text{à 25 °C}) \\]</p>
        <p>→ Solution neutre : \\([\\mathrm{H_3O^+}] = [\\mathrm{HO^-}] = 10^{-7}\\,\\mathrm{mol \\cdot L^{-1}}\\), pH = 7.</p>
        <h3>Dilution et pH</h3>
        <p>L'ajout d'eau distillée (pH ≈ 7) :</p>
        <ul>
          <li>Solution acide (pH < 7) → dilution → pH <em>augmente</em> vers 7.</li>
          <li>Solution basique (pH > 7) → dilution → pH <em>diminue</em> vers 7.</li>
        </ul>`
    }
  ]
};

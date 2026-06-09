export const FICHE = {
  chapterId: 'EE_DD',
  title: 'Développement durable',
  sections: [
    {
      id: 'enjeux',
      title: 'Enjeux et contexte',
      content: `
        <h3>Définition</h3>
        <p>Le développement durable (Rapport Brundtland, 1987) est "un développement qui répond aux besoins des générations présentes sans compromettre la capacité des générations futures à répondre aux leurs."</p>

        <h3>Trois piliers</h3>
        <ul>
          <li><strong>Environnemental</strong> : préservation des ressources, biodiversité, climat</li>
          <li><strong>Social</strong> : équité, santé, accès à l'énergie</li>
          <li><strong>Économique</strong> : croissance, emploi, innovation</li>
        </ul>

        <h3>Chiffres clés</h3>
        <ul>
          <li>Concentration CO₂ atmosphérique : ~420 ppm (2024), contre 280 ppm avant l'ère industrielle</li>
          <li>Objectif Accord de Paris : limiter le réchauffement à +1,5°C / +2°C</li>
          <li>Objectif France : neutralité carbone d'ici 2050</li>
        </ul>
      `
    },
    {
      id: 'acv',
      title: 'Analyse du Cycle de Vie (ACV)',
      content: `
        <h3>Étapes de l'ACV</h3>
        <div class="formula-block">Extraction des matières → Fabrication → Distribution → Utilisation → Fin de vie</div>

        <h3>Indicateurs environnementaux</h3>
        <table>
          <tr><th>Indicateur</th><th>Unité</th><th>Description</th></tr>
          <tr><td>Réchauffement climatique (GWP)</td><td>kg CO₂ éq.</td><td>Impact sur l'effet de serre</td></tr>
          <tr><td>Acidification</td><td>kg SO₂ éq.</td><td>Pluies acides</td></tr>
          <tr><td>Épuisement des ressources</td><td>kg Sb éq.</td><td>Ressources non renouvelables</td></tr>
          <tr><td>Énergie primaire</td><td>MJ</td><td>Énergie totale consommée</td></tr>
        </table>

        <h3>Exemple : ACV d'un véhicule électrique vs thermique</h3>
        <ul>
          <li><strong>Fabrication</strong> : VE émet plus (fabrication batterie)</li>
          <li><strong>Utilisation</strong> : VE émet moins (dépend du mix électrique)</li>
          <li><strong>Fin de vie</strong> : dépend du taux de recyclage de la batterie</li>
        </ul>
        <div class="tip-box">Sur toute la durée de vie, un VE en France émet 2–4 fois moins de CO₂ qu'un véhicule thermique (grâce au nucléaire).</div>
      `
    },
    {
      id: 'eco-conception',
      title: 'Éco-conception',
      content: `
        <h3>Définition</h3>
        <p>Intégrer les critères environnementaux dès la conception du produit, à toutes les étapes du cycle de vie.</p>

        <h3>Leviers d'action</h3>
        <ul>
          <li><strong>Choix des matériaux</strong> : préférer les matériaux recyclables, biosourcés ou à faible empreinte</li>
          <li><strong>Réduction de la masse</strong> : moins de matière = moins d'énergie de fabrication</li>
          <li><strong>Augmenter la durée de vie</strong> : réparabilité, modularité</li>
          <li><strong>Efficacité énergétique</strong> : réduire la consommation en usage</li>
          <li><strong>Faciliter le recyclage</strong> : marquage des plastiques, assemblages démontables</li>
        </ul>

        <h3>Réglementation</h3>
        <ul>
          <li><strong>Directive ErP</strong> : exige efficacité min pour les appareils liés à l'énergie (EU)</li>
          <li><strong>Étiquette énergie</strong> : A+++ à G pour électroménager</li>
          <li><strong>RE2020</strong> : Réglementation Environnementale bâtiment (France)</li>
          <li><strong>Indice de réparabilité</strong> : obligatoire en France depuis 2021</li>
        </ul>
      `
    },
    {
      id: 'bilan-carbone',
      title: 'Bilan carbone',
      content: `
        <h3>Principe</h3>
        <p>Le bilan carbone comptabilise toutes les émissions de gaz à effet de serre (GES) exprimées en kg CO₂ équivalent.</p>

        <h3>Facteurs d'émission (ordres de grandeur)</h3>
        <table>
          <tr><th>Source</th><th>g CO₂ éq.</th></tr>
          <tr><td>1 kWh électricité France</td><td>50–80 g</td></tr>
          <tr><td>1 kWh électricité Allemagne</td><td>350–450 g</td></tr>
          <tr><td>1 kWh gaz naturel</td><td>206 g</td></tr>
          <tr><td>1 km voiture thermique</td><td>120–200 g</td></tr>
          <tr><td>1 km TGV</td><td>2–5 g</td></tr>
          <tr><td>1 km avion</td><td>200–300 g</td></tr>
        </table>

        <h3>Scopes des émissions (GHG Protocol)</h3>
        <ul>
          <li><strong>Scope 1</strong> : émissions directes (combustion sur site)</li>
          <li><strong>Scope 2</strong> : émissions indirectes liées à l'énergie achetée</li>
          <li><strong>Scope 3</strong> : autres émissions indirectes (chaîne d'approvisionnement, usage, fin de vie)</li>
        </ul>
      `
    }
  ]
};

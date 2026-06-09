export const FICHE = {
  chapterId: 'PC_MEC',
  title: 'Mécanique (PC)',
  sections: [
    {
      id: 'cinematique',
      title: 'Cinématique du point',
      content: `
        <h3>Vecteur position, vitesse, accélération</h3>
        <div class="formula-block">$$\\vec{v} = \\frac{d\\vec{r}}{dt} \\quad ; \\quad \\vec{a} = \\frac{d\\vec{v}}{dt}$$</div>

        <h3>MRUA (Mouvement Rectiligne Uniformément Accéléré)</h3>
        <div class="formula-block">$$v(t) = v_0 + a\\cdot t$$
$$x(t) = x_0 + v_0 t + \\frac{1}{2}at^2$$
$$v^2 - v_0^2 = 2a(x - x_0)$$</div>

        <h3>Chute libre (axe vertical vers le bas)</h3>
        <div class="formula-block">$$y(t) = \\frac{1}{2}gt^2 \\quad ; \\quad v(t) = g\\cdot t \\quad (g = 9{,}81 \\text{ m/s}^2)$$</div>

        <h3>Mouvement de projectile</h3>
        <div class="formula-block">$$x = v_0 \\cos\\theta \\cdot t \\quad ; \\quad y = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2$$</div>
      `
    },
    {
      id: 'dynamique',
      title: 'Dynamique — Lois de Newton',
      content: `
        <h3>1re loi (inertie)</h3>
        <p>Tout objet reste en repos ou en MRU si la somme des forces est nulle.</p>

        <h3>2e loi (PFD)</h3>
        <div class="formula-block">$$\\sum \\vec{F} = m \\cdot \\vec{a}$$</div>

        <h3>3e loi (réciprocité)</h3>
        <p>Les forces d'action et de réaction sont égales et opposées : \\(\\vec{F}_{A/B} = -\\vec{F}_{B/A}\\)</p>

        <h3>Poids et réaction normale</h3>
        <div class="formula-block">$$\\vec{P} = m \\cdot \\vec{g} \\quad ; \\quad \\vec{N} = -\\vec{P}\\text{ (si plan horizontal)}$$</div>
      `
    },
    {
      id: 'energie',
      title: 'Énergie et travail',
      content: `
        <h3>Travail d'une force</h3>
        <div class="formula-block">$$W = \\vec{F} \\cdot \\vec{d} = F \\cdot d \\cdot \\cos\\alpha$$</div>

        <h3>Énergie cinétique</h3>
        <div class="formula-block">$$E_c = \\frac{1}{2}mv^2$$</div>

        <h3>Énergie potentielle de pesanteur</h3>
        <div class="formula-block">$$E_{pp} = mgh$$</div>

        <h3>Conservation de l'énergie mécanique</h3>
        <div class="formula-block">$$E_{mec} = E_c + E_{pp} = \\text{cste} \\quad (\\text{si pas de frottements})$$</div>

        <h3>Théorème travail-énergie</h3>
        <div class="formula-block">$$\\Delta E_c = \\sum W_{\\text{forces}}$$</div>
        <div class="tip-box">Si des frottements existent, \\(W_{frottement} < 0\\) et l'énergie mécanique n'est pas conservée.</div>
      `
    }
  ]
};

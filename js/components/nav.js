import { navigate } from '../router.js';

const TABS = [
  { id: '',           label: 'Accueil',     icon: '⊙' },
  { id: 'fiches',     label: 'Fiches',      icon: '📖' },
  { id: 'flashcards', label: 'Flashcards',  icon: '🃏' },
  { id: 'quiz',       label: 'Quiz',        icon: '✏️' },
  { id: 'formules',   label: 'Formules',    icon: '∑' },
  { id: 'annales',    label: 'Annales',     icon: '📝' },
];

export function renderNav(dueCount = 0) {
  const hash = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav-brand">
      <span class="nav-logo">STI2D</span>
      <span class="nav-subtitle">EE · Révision</span>
    </div>
    <ul class="nav-list">
      ${TABS.map(tab => {
        const active = (hash === tab.id) || (tab.id === '' && hash === '') ? 'active' : '';
        const badge = (tab.id === 'flashcards' && dueCount > 0)
          ? `<span class="nav-badge">${dueCount}</span>` : '';
        return `<li>
          <a href="#/${tab.id}" class="nav-link ${active}" data-id="${tab.id}">
            <span class="nav-icon">${tab.icon}</span>
            <span class="nav-label">${tab.label}</span>
            ${badge}
          </a>
        </li>`;
      }).join('')}
    </ul>
    <div class="nav-footer">BAC 2026</div>
  `;
}

export function updateNavActive() {
  const hash = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.id === hash || (a.dataset.id === '' && hash === ''));
  });
}

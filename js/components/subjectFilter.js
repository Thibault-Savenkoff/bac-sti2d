import { SUBJECTS } from '../../data/subjects.js';
import { navigate } from '../router.js';

export function renderSubjectFilter(containerId, currentChapterId, baseRoute, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <nav class="filter-nav">
      <a href="#/${baseRoute}" class="filter-all ${!currentChapterId ? 'active' : ''}">
        Tout afficher
      </a>
      ${SUBJECTS.map(subject => {
        const hasActive = currentChapterId && subject.chapters.some(c => c.id === currentChapterId);
        return `
          <div class="filter-subject ${hasActive ? 'open' : ''}">
            <button class="filter-subject-btn" data-subject="${subject.id}"
              style="--subject-color:${subject.color}">
              <span class="filter-subject-dot" style="background:${subject.color}"></span>
              ${subject.shortLabel}
              <span class="filter-chevron">›</span>
            </button>
            <ul class="filter-chapters ${hasActive ? 'visible' : ''}">
              ${subject.chapters.map(ch => `
                <li>
                  <a href="#/${baseRoute}/${ch.id}"
                     class="filter-chapter ${ch.id === currentChapterId ? 'active' : ''}"
                     style="--subject-color:${subject.color}">
                    ${ch.label}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>`;
      }).join('')}
    </nav>
  `;

  container.querySelectorAll('.filter-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrap = btn.closest('.filter-subject');
      wrap.classList.toggle('open');
      wrap.querySelector('.filter-chapters').classList.toggle('visible');
    });
  });
}

let activeModal = null;

export function openModal({ title, content, wide = false }) {
  closeModal();
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop">
      <div class="modal ${wide ? 'modal-wide' : ''}">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button class="modal-close" id="modal-close">✕</button>
        </div>
        <div class="modal-body">${content}</div>
      </div>
    </div>
  `;
  root.querySelector('#modal-backdrop').addEventListener('click', e => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
  root.querySelector('#modal-close').addEventListener('click', closeModal);
  activeModal = root;
  document.body.classList.add('modal-open');
}

export function closeModal() {
  const root = document.getElementById('modal-root');
  if (root) root.innerHTML = '';
  document.body.classList.remove('modal-open');
  activeModal = null;
}

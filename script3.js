function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('abrir');
    const fecharBtn = modal.querySelector('.fechar');
    fecharBtn.addEventListener('click', () => {
        modal.classList.remove('abrir');
    });
    modal.addEventListener('click', (e) => {
        
        if (e.target === modal) {
            modal.classList.remove('abrir');
        }
    });
}

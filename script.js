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



function scrollCarrossel(direcao) {
  const carrossel = document.getElementById('carrossel-filmes');
  const scrollAmount = 300; // pixels por clique
  carrossel.scrollBy({
    left: direcao * scrollAmount,
    behavior: 'smooth'
  });
}

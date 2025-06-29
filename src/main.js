function filterCards(botao){ 
  const card = botao.closest('section');
  const bolinha = botao.querySelector('.bolinha');

  const ativo = card.getAttribute('data-status') === 'active';
  if(ativo) {
    card.setAttribute('data-status', 'inactive');
    bolinha.style.transform = 'translate-x-4';
  } else {
    card.setAttribute('data-status', 'active');
    bolinha.style.transform = 'translate-x-4';
  }
  aplicarFiltro();
}




// Selecionar botões do filter e mudar estado " ativo", " inativo" ou " Todos";

const filterBtn = document.getElementById('btn-filter');

filterBtn.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-filter')) {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('ativado'));
    e.target.classList.add('ativado');
  }
});



// Botão para marcar e desmarcar a Extensão
function alternar(botao) {

  
  const bola = botao.querySelector('.bolinha');
  const ligado = botao.classList.contains('bg-[#525868]');

  if(ligado) {
    botao.classList.remove("bg-[#525868]");
    botao.classList.add("bg-[#f15c52]");
    bola.classList.add('translate-x-4');
  } else {
    botao.classList.remove("bg-[#f15c52]");
    botao.classList.add("bg-[#525868]");
    bola.classList.remove('translate-x-4');
  }
};



const filterBtn = document.getElementById('btn-filter');

filterBtn.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-filter')) {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('ativado'));
    e.target.classList.add('ativado');
  }
});



// Botão para marcar e desmarcar a Extensão
function alternar(botao) {

  const sectionCards = botao.closest('section');
  const bola = botao.querySelector('.bolinha');
  const ligado = botao.classList.contains('bg-[#525868]');

  if(ligado) {
    botao.classList.remove("bg-[#525868]");
    botao.classList.add("bg-[#f15c52]");
    bola.classList.add('translate-x-4');

    sectionCards.classList.remove('inactive');
    sectionCards.classList.add('active');
    
  } else {
    botao.classList.remove("bg-[#f15c52]");
    botao.classList.add("bg-[#525868]");
    botao.classList.remove('active');
    bola.classList.remove('translate-x-4');

    sectionCards.classList.remove('active');
    sectionCards.classList.add('inactive');
  }
};

const filterActive = () => {
  const sections = document.querySelectorAll('[data-status');
  sections.forEach(section => {
    if(section.classList.contains('active')) {
      section.style.display = '';
    } else {
      section.style.display = 'none';
    }
  })
}


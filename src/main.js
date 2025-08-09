
const filterButtons = document.querySelectorAll('.btn-filter');


filterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
   
    filterButtons.forEach(btn => btn.classList.remove('ativado'));
    
    e.target.classList.add('ativado');
    
   
    const filterValue = e.target.getAttribute('data-filter');
    console.log('Filtro selecionado:', filterValue); 
    filtrar(filterValue);
  });
});

// Função para alternar o estado do botão de toggle
function alternar(botao) {
  const card = botao.closest('li');
  const bola = botao.querySelector('.bolinha');
  const ligado = botao.classList.contains('bg-[#525868]');

  if (ligado) {
    botao.classList.remove('bg-[#525868]');
    botao.classList.add('bg-[#f15c52]');
    bola.classList.add('translate-x-4');
    card.setAttribute('data-status', 'inactive');
  } else {
    botao.classList.remove('bg-[#f15c52]');
    botao.classList.add('bg-[#525868]');
    bola.classList.remove('translate-x-4');
    card.setAttribute('data-status', 'active');
  }

  // Reaplica o filtro ativo
  const activeFilter = document.querySelector('.btn-filter.ativado').getAttribute('data-filter');
  console.log('Reaplicando filtro:', activeFilter);
  filtrar(activeFilter);
}

// Função para filtrar os cards
function filtrar(status) {
  const cards = document.querySelectorAll('ul.list > li');

  cards.forEach(card => {
    const estado = card.getAttribute('data-status');
    console.log('Card estado:', estado);

    if (status === 'all') {
      card.style.display = 'flex'; 
    } else {
      card.style.display = estado === status ? 'none' : 'flex'; 
    }
  });
}

// Inicializa o estado visual dos botões de toggle e aplica o filtro inicial
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('ul.list > li');
  cards.forEach(card => {
    const botao = card.querySelector('.btn-bolinha');
    const bola = botao.querySelector('.bolinha');
    const estado = card.getAttribute('data-status');

    if (estado === 'inactive') {
      botao.classList.remove('bg-[#525868]');
      botao.classList.add('bg-[#f15c52]');
      bola.classList.add('translate-x-4');
    }
  });

  // Aplica o filtro inicial (all) todos/
  filtrar('all');
});
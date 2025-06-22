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
}
import { getUsuario, ganharRecompensa } from "./api.js";

export function carregarDashboard() {
  const user = getUsuario();

  document.getElementById("saudacao").innerText = "Olá, " + user.nome;
  document.getElementById("nivel").innerText = user.nivel;
  document.getElementById("moedas").innerText = user.moedas;
  document.getElementById("xp").innerText = user.xp;
  document.getElementById("sequencia").innerText = user.sequencia;

  atualizarBarra(user.xp);
}

export function ganharPontos(valor) {
  const user = ganharRecompensa(valor);

  carregarDashboard();
}

function atualizarBarra(xp) {
  let progresso = (xp / 1500) * 100;
  document.getElementById("barraProgresso").style.width = progresso + "%";
}
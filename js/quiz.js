function verificarResposta(resposta) {

  const resultado = document.getElementById("resultado");

  if (resposta === 13) {

    resultado.style.display = "block";
    resultado.style.background = "#57e389";
    resultado.innerText = "Muito bem! 🎉 +10 moedas";

  } else {

    resultado.style.display = "block";
    resultado.style.background = "#ff4d4d";
    resultado.innerText = "Ops! Tente novamente 😢";

  }
}
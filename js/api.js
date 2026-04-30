let usuario = {
  nome: "Ana",
  nivel: 7,
  moedas: 250,
  xp: 1250,
  sequencia: 5
};

export function getUsuario() {
  return usuario;
}

export function ganharRecompensa(valor) {
  usuario.moedas += valor;
  usuario.xp += valor * 5;

  if (usuario.xp >= 1500) {
    usuario.nivel++;
    usuario.xp = 0;
  }

  return usuario;
}
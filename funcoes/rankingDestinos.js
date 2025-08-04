import { exibirMenu, missoes, prompt } from "../spacegirlsMOD.js";

function contagemDestinos(missoes) {
  const contagem = missoes.reduce((acumulador, missao) => {
    let Destino = missao.Destino;
    acumulador[Destino] = (acumulador[Destino] || 0) + 1;
    return acumulador;
  }, {});
  return contagem;
}
export function rankingDestinos(resultadoContagem) {
  resultadoContagem = contagemDestinos(missoes);
  console.clear();
  console.log("------RANKING DE DESTINOS------");
  for (const [destino, quantidade] of Object.entries(resultadoContagem)) {
    console.log(`${destino}: ${quantidade} missões`);
  }
  exibirMenu();
}

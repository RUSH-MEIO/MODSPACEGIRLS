import { exibirMenu } from "./spacegirlsMOD.js";


import { missoes } from "./spacegirlsMOD.js";

export function listarMissoes() {
  missoes.forEach((index, missao) => {
    console.log(missoes);
    exibirMenu();
  });
}


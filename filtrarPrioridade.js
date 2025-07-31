import { exibirMenu } from "./spacegirlsMOD.js";
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

import { missoes } from "./spacegirlsMOD.js";

export function filtrarPrioridade() {
    console.clear();
    console.log(
      "Filtre as missões por prioridade\nAs PRIORIDADES vão de 1 a 5, com importância crescente.\n"
    );
    rl.question("Digite a prioridade desejada: ", (filtro) => {
      filtro = parseInt(filtro, 10);
      if (isNaN(filtro) || filtro < 1 || filtro > 5) {
        console.log(
          "Prioridade inválida.\nDigite um número de 1 a 5, por favor."
        );
        filtrarPrioridade();
        return;
      }
      if (missoes.length == 0) {
        console.log("Não há missões no momento. Voltando ao menu.");
        exibirMenu();
        return;
      }
      const missoesFiltradas = missoes.filter(
        (missao) => missao.Prioridade === filtro
      );
      if (missoesFiltradas.length > 0) {
        console.clear();
        console.log(`======-MISSÕES COM PRIORIDADE ${filtro}-======`);
        missoesFiltradas.forEach((missao, index) => {
          console.log(
            `Nº da Missão: ${index + 1} || Prioridade: ${
              missao.Prioridade
            } | Nome: ${missao.Nome}  | Destino: ${
              missao.Destino
            } | Tripulante: ${missao.tripulantes}`
          );
        });
      } else {
        console.clear();
        console.log("Nenhuma missão com a prioridade " + filtro + " encontrada.");
      }
      exibirMenu();
    });
  }
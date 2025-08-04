import { exibirMenu, missoes, prompt } from "../spacegirlsMOD.js";

export function adicionarMissao() {
  let nome = prompt("Insira o nome da missão que deseja adicionar: ");

  console.clear();
  let destino = prompt("Insira o destino da missão: ");

  destino = destino.toLowerCase();
  console.clear();
  console.log(
    "Insira qual a prioridade da missão:\n1-Minima\n2-Baixa\n3-Média\n4-Alta\n5-Crítico"
  );
  let prioridade = prompt("> ");
  prioridade = parseInt(prioridade);
  if (prioridade > 5 || prioridade < 1 || isNaN(prioridade)) {
    console.clear();
    console.log("Prioridade invalida!");
    adicionarMissao();
  }
  adicionarTripulante(nome, destino, prioridade, []);
}

function adicionarTripulante(nome, destino, prioridade, tripulantesAtuais) {
  console.clear();
  let nomeTripulante = prompt(
    `Insira o nome do tripulante que seja adicionar na missão "${nome}":`
  );
  tripulantesAtuais.push(nomeTripulante);
  console.clear();
  console.log(`Tripulante '${nomeTripulante}' adicionado na missao "${nome}"`);
  console.log("--------------------------------------");

  console.log(
    `Deseja adicionar outro tripulante na missão ${nome}?\n1-Sim\nOutro-Não`
  );
  let outroTripulante = prompt("> ");
  if (outroTripulante == 1) {
    console.clear();
    adicionarTripulante(nome, destino, prioridade, tripulantesAtuais);
  } else {
    const missao = {
      Nome: nome,
      Destino: destino,
      Prioridade: prioridade,
      tripulantes: tripulantesAtuais,

      concluida: false,
    };
    console.clear();
    missoes.push(missao);
    return exibirMenu();
  }

  // }
  //);
}
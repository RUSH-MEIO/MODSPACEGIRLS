import { exibirMenu } from "../spacegirlsMOD.js";

import { missoes, prompt } from "../spacegirlsMOD.js";

function ListarTripulantes() {
  console.log("Nome de todos os Tripulantes Totais das Missoes: ");
  missoes.forEach((missao, index) => {
    index + 1;
    console.log(`${missao.tripulantes}`);
  });
  console.log("-".repeat(20));
}
export function listarPorTripulantes() {
  console.clear();
  ListarTripulantes();
  let filtro = prompt(
    "Qual o nome do Tripulante que deseja listar suas missoes?: "
  );
  const filtroLowerCase = filtro.trim().toLowerCase();
  const missoesFiltradas = missoes.filter((missao) =>
    missao.tripulantes.some((tripulante) =>
      tripulante.includes(filtroLowerCase)
    )
  );

  if (missoesFiltradas.length > 0) {
    console.log(
      `\n=== Missões do Tripulante: ${
        filtro.charAt(0).toUpperCase() + filtro.slice(1)
      } ===`
    );
    missoesFiltradas.forEach((missao, index) => {
      const status = missao.concluida ? "CONCLUÍDA" : "PENDENTE";
      console.log(
        `Missão numero: ${index + 1} | Nivel de Prioridade: ${
          missao.Prioridade
        } | Nome da Missão: ${missao.Nome} | Destino: ${
          missao.Destino
        } | Tripulantes: ${missao.tripulantes.join(", ")} | Status: ${status}\n`
      );
    });
  } else {
    console.log(`Nenhuma missão encontrada para o tripulante "${filtro}".`);
  }
  prompt("Pressione Enter para voltar ao menu...");
  return;
}

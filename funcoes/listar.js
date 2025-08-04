import { exibirMenu, missoes } from "../spacegirlsMOD.js";

export function listarMissoes() {
  console.clear();

  console.log("====== MISSÕES DISPONÍVEIS ======");
  if (missoes.length === 0) {
    console.log("Nenhuma missão cadastrada.");
    exibirMenu();
    return;
  }

  missoes.forEach((missao, index) => {
    const status = missao.concluida ? "CONCLUÍDA" : "PENDENTE";
    console.log(
      `ID: ${index + 1} | Nome: ${missao.Nome} | Prioridade: ${
        missao.Prioridade
      } | Destino: ${missao.Destino} | Status: ${status}`
    );
    exibirMenu();

    if (
      missao.tripulantes &&
      Array.isArray(missao.tripulantes) &&
      missao.tripulantes.length > 0
    ) {
      console.log("  --- Tripulante(s) desta missão ---");
      missao.tripulantes.forEach((tripulante) => {
        console.log(`  - ${tripulante}`);
      });
    } else {
      console.log("  Nenhum tripulante atribuído a esta missão.");
      exibirMenu();
    }
    console.log("------------------------------------");
    exibirMenu();
  });
}

const ranking = require('./ranking')
const { clear } = require("console");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = require('prompt-sync')()

let missoes = []

// let missao = {
//   Nome: nome,
//   Destino: destino,
//   Prioridade: prioridade,
//   tripulante : [],
// };



function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar missão\n2-Listar missões\n3-Editar missao\n4-Marcar como concluída\n5-Filtrar por prioridades\n6-Ranking de destinos\n7-Listar por tripulantes\n0-Sair do programa"
  );
  rl.question("Insira a opção desejada.\n", (opcaoMenu) => {
    opcaoMenu = parseInt(opcaoMenu, 10);
    switch (opcaoMenu) {
      case 1:
        adicionarMissao();
        break;
      case 2:
        listarMissoes();
        break;
      case 3:
        editarMissao();
        break;
      case 4:
        marcarConcluido();
        break;
      case 5:
        filtrarPrioridade();
        break;
      case 6:
        const params = ranking.contagemDestinos(missoes)
        console.log(missoes)
       // console.clear();
       ranking.rankingDestinos(teste){
        teste = params
       }
       break;
      case 7:
        listarPorTripulantes();
        break;z
      case 0:
        process.exit();
        break;
      default:
        console.log("Insira uma opção válida!\n");
        exibirMenu();
    }
  });
}
exibirMenu()


function adicionarMissao() {
  console.clear();
  rl.question("Insira o nome da missão que deseja adicionar: \n", (nome) => {
    console.clear()
    rl.question("Insira o destino da missão: ", (destino) => {
      destino = destino.toLowerCase();
      console.clear()
      rl.question(
        "Insira qual a prioridade da missão:\n1-Minima\n2-Baixa\n3-Média\n4-Alta\n5-Crítico\n",
        (prioridade) => {
          prioridade = parseInt(prioridade);
          adicionarTripulante(nome, destino, prioridade, []);
        }
      );
    });
  });
}


function adicionarTripulante(nome, destino, prioridade, tripulantesAtuais) {
    console.clear()
  rl.question(
    `Insira o nome do tripulante que seja adicionar na missão "${nome}":\n`,
    (nomeTripulante) => {
      tripulantesAtuais.push(nomeTripulante);
      console.clear();
      console.log(`Tripulante '${nomeTripulante}' adicionado na missao "${nome}"`);
      console.log("--------------------------------------")
      rl.question(
        `Deseja adicionar outro tripulante na missão ${nome}?\n1-Sim\nOutro-Não\n`,
        (outroTripulante) => {
          outroTripulante = parseInt(outroTripulante);
          switch (outroTripulante) {
            case 1:
                console.clear()
              adicionarTripulante(nome, destino, prioridade, tripulantesAtuais);
              break;
            default:
                
              const missao = {
                Nome: nome,
                Destino: destino,
                Prioridade: prioridade,
                tripulantes: tripulantesAtuais,
                concluida: false,
              };
              console.clear()
              missoes.push(missao);
              console.log(missoes)

              console.log("Missao adicionada com sucesso!\n");
              exibirMenu();
              break;
          }
          
        }
      );
    }
    
  );

}

module.exports = exibirMenu
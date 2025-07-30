import { exibirMenu } from "./spacegirlsMOD.js";
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

export function listarMissoes(){
    console.log("teste")
    rl.question("Pressione ENTER para retornar ao menu", exibirMenu)
}


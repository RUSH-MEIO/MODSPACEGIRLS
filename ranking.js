function contagemDestinos(missoes){
    const contagem = missoes.reduce((acumulador, missao) => {
        let Destino = missao.Destino
      acumulador[Destino] = (acumulador[Destino] || 0) + 1
      return acumulador
    },{})
    return contagem
 
}

function rankingDestinos(missoes, exibirMenu){
    
    if (!missoes || missoes.length === 0) {
        console.log("------RANKING DE DESTINOS------")
        console.log("Nenhuma missão cadastrada ainda!")
        exibirMenu()
        return
    }
    
    const resultadoContagem = contagemDestinos(missoes)
    console.log("------RANKING DE DESTINOS------")
    for(const [destino, quantidade] of Object.entries(resultadoContagem)){
        console.log(`${destino}: ${quantidade} missões`)
    }
    exibirMenu()
}        

module.exports ={
  contagemDestinos,
  rankingDestinos
}
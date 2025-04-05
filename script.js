function jogar() {
    // Criar uma lista com 3 jogadores
    let personagem = ["", "", ""];  // Nome dos jogadores
  
    let viloes = ["Thanos", "Hidra", "Agtha Harkness"];  // Nome dos vilões
  
    let forcaPersonagem = 0;
    let forcaViloes = 0;
  
    // Inserir nomes dos personagens
    alert("Heróis vs Vilões da MARVEL " + personagem);
    for (let i = 0; i < 3; i++) {
      let escolhaPersonagem = prompt("Digite o nome do seu Herói " + (i + 1));
      personagem[i] = escolhaPersonagem;
  
      // Calcular a força de cada jogador e depois somar para saber a força total do time
      forcaPersonagem += Math.floor(Math.random() * 10) + 1; // Gerar força aleatória de 1 a 10
    }
  
    console.log("Agora, o Array Personagem Contém: " + personagem);
    console.log("Força total dos personagens: " + forcaPersonagem);
  
    // Inserir vilões
    let viloesPossivel = ["Thanos", "Surfista Prateado", "Ultron", "Hidra"];
    for (let i = 0; i < 3; i++) {
      let indiceAleatorio = Math.floor(Math.random() * viloesPossivel.length);  // Selecionar aleatoriamente um vilão
      viloes[i] = viloesPossivel[indiceAleatorio];
  
      // Calcular a força de cada vilão
      forcaViloes += Math.floor(Math.random() * 10) + 1;  // Gerar força aleatória de 1 a 10
    }
  
    console.log("Final dos Vilões: " + viloes);
    console.log("Força total dos vilões: " + forcaViloes);
  
    // Comparar os dois times para saber quem vence
    if (forcaPersonagem > forcaViloes) {
      alert("Heróis Venceu. Você ganhou a disputa de cabo de guerra! Sua força foi " + forcaPersonagem);
    } else if (forcaPersonagem < forcaViloes) {
      alert("Seu time perdeu. Os vilões Thanos, Hidra, Agtha Harkness, ganhou o cabo de guerra com força de " + forcaViloes);
    } else {
      alert("Os Hérois e Vilões lutaram igualmente! Empate");
    }
  }
  
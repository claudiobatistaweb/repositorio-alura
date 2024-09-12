function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (quantidade > (ate - de + 1)) { //se a variável quantidade for maior que 'ate' menos 'de' mais 1
         alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
         //exibe mensagem
        return;
      }

    if (de >= ate) { //se variável 'de' for maior ou igual a variável 'ate'
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'); //exibe mensagem
        return; // interrompe antes de executar a estrutura de repetição 'for'
      }

    //estrutura de repetiçao "para"
    for(let i = 0; i < quantidade; i++){ //variavel i = 0; enquanto variavel i for menos que variavel quantidade, acrescenta 1 à variavel i
        numero = obterNumeroAleatorio(de, ate); // variável numero recebe número aleatório da função obterNumeroAleatorio

        while(sorteados.includes(numero)){ //enquanto array sorteados já tiver incluso o valor da variável numero
            numero = obterNumeroAleatorio(de, ate); //variável numero recebe outro valor aleatório
        }
        sorteados.push(numero);//array sorteados recebe o valor da variável numero
    }

    let resultado = document.getElementById('resultado'); //criou uma variável resultado com valor do id resultado
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    //pega o valor da variável resultado e insira no html o valor: texto concatenado com o valor da variável 'sorteados'
    alterarClasseBotao(); //chama a função
}

function obterNumeroAleatorio(min, max){ //declaração de variável diretamente na função
    return Math.floor(Math.random() * (max - min + 1)) + min; // retorna número inteiro da função random
}

function alterarClasseBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){ //se botão contém na sua lista de classes a classe botao-desabilitado
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarClasseBotao();
}
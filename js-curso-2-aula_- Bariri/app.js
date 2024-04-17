//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Insira um número de 1 a 10";

let listaDeNumerosSorteados=[] // cria uma lista vazia
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTextoInicial() {
    //fazendo a chamada da função
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Insira um número de 1 a 10');
}
exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou o Número Secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('img', './img/vencedor.jpg');
    }else{
        if (chute > numeroAleatorio){
            exibirTextoNaTela ('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
    tentativa++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*4+1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }


    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    alterarImagem('img', './img/ia.png');
}

function alterarImagem(objeto, caminhoImagem) {
    document.getElementById(objeto).src = caminhoImagem;
    
}
let numeroSecreto = gerar();
let tentativa = 1;

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirNaTela('h1', 'Jogo da BeleSa Magnanica');
exibirNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'Ai meu deeeus eu ACERTI e sou MAGNANICA!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você adivinhou o número secreto com ${tentativa} ${palavraTentativa} magnanicas!`;
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirNaTela('h1', 'Erroooouuuuu!');
            exibirNaTela('p', 'Beletzi o número é menor do que ' + chute);
        } else {
            exibirNaTela('h1', 'Erroooouuuuu!');
            exibirNaTela('p', 'Beletzi o número é maior do que ' + chute);
        }
        tentativa++;
        limparCampo();
    }
}

function gerar() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
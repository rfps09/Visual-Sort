var cnv = document.getElementById("quadro");
var ctx = cnv.getContext("2d");
var ready = true;
var para = false;
var delay = 500;
var tamanho = 20;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function render(vetor, mapa = new Map()) {
    ctx.clearRect(0,0,cnv.width, cnv.height);
    var len = vetor.length;
    const estado = mapa.has("ordenado");

    for(let i=0; i < len; i++) {
        ctx.fillStyle = "white";

        if(estado) ctx.fillStyle = mapa.get("ordenado");
        else if(mapa.has(i)) ctx.fillStyle = mapa.get(i);
        
        ctx.fillRect((cnv.width/len)*i,cnv.height-(cnv.height/len)*vetor[i],(cnv.width/len),(cnv.height/len)*vetor[i]);
    }
}

var sequence = [10,8,4,9,7,3,6,2,5,1]
var vetorTeste = [9,7,3,19,12,11,14,16,5,1,4,18,10,15,13,8,6,2,20,17];
var base = vetorTeste.slice();

render(vetorTeste);

function ordenacao(ordenar){
    if(ready){
        ready = false;
        window[ordenar](vetorTeste);
    }
}

async function parar() {
    para = true;
    await sleep(delay+50);
    reset(false);
    render(vetorTeste);
    para = false;
}

function reset(estado = "desordenado") {
    var mapa = new Map();
    mapa.set(estado, "lime");
    render(vetorTeste,mapa);
    vetorTeste = base.slice();
    ready = true;
}

function Delay(acao) {
    if(acao == '+' && delay < 1000) delay += 50;
    else if(acao == '-' && delay >= 100) delay -= 50;
    document.getElementById('velocidade').innerHTML = delay;
}

function Tamanho(acao) {
    if(ready) {
        let TamAtual = tamanho;
        if(acao == '+' && tamanho < 200) tamanho += 10;
        else if(acao == '-' && tamanho >= 20) tamanho -= 10;
        document.getElementById('TamanhoVetor').innerHTML = tamanho;

        if(TamAtual != tamanho) fillAndDisorderVector(tamanho);
    }
}

function fillAndDisorderVector(tam) {
    base.length = tam;
    for(let i = 0; i < tam/10; i++) {
        for(let j = 0; j < 10; j++) {
            base[j+(10*i)] = sequence[j] + i*10;
        }
    }

    for(let i = 0; i < tam; i++) {
        let j = Math.floor(Math.random()*(tam-1));

        let temp = base[i];
        base[i] = base[j];
        base[j] = temp;
    }

    vetorTeste = base.slice();
    render(vetorTeste);
}
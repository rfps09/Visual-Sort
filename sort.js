var cnv = document.getElementById("quadro");
var ctx = cnv.getContext("2d");
var ready = true;
var para = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function render(vetor, index = vetor.length, indexComparer = vetor.length, ordenado = false, pivot = vetor.length, mid = vetor.length) {
    ctx.clearRect(0,0,cnv.width, cnv.height);
    var len = vetor.length;
    for(let i=0; i < len; i++) {
        if(i == index) ctx.fillStyle = "red";
        else if(i == indexComparer || i == pivot || i == mid) ctx.fillStyle = "green";
        else ctx.fillStyle = "#FFFFFF";
        if(ordenado == true) ctx.fillStyle = "#42ff33";
        ctx.fillRect((800/len)*i,600-(600/len)*vetor[i],(800/len),(600/len)*vetor[i]);
    }
}

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
    await sleep(600);
    reset(false);
    render(vetorTeste);
    para = false;
}

function reset(vd) {
    render(vetorTeste,vetorTeste.length,vetorTeste.length,vd);
    vetorTeste = base.slice();
    ready = true;
}
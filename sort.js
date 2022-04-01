var cnv = document.getElementById("quadro");
var ctx = cnv.getContext("2d");
var ready = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function render(vetor, index = vetor.length, indexComparer = vetor.length, ordenado = false) {
    ctx.clearRect(0,0,cnv.width, cnv.height);
    var len = vetor.length;
    for(let i=0; i < len; i++) {
        if(i == index) ctx.fillStyle = "red";
        else if(i == indexComparer) ctx.fillStyle = "green";
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

function reset() {
    render(vetorTeste,vetorTeste.length,vetorTeste.length,true);
    vetorTeste = base.slice();
    ready = true;
}

async function bubbleSort(vetor) {
    var len = vetor.length;
    for(let i=1; i < len; i++) {
        for(let j=0; j < len-i; j++) {
            render(vetor, j);
            await sleep(250);
            if(vetor[j] > vetor[j+1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
            render(vetor, j+1);
            await sleep(250);
        }
    }

    reset();
}

async function selectionSort(vetor) {
    var len = vetor.length;
    var menor;
    for(let i=0; i < len; i++) {
        menor = i;
        for(let j=i; j < len; j++) {
            if(vetor[menor] > vetor[j]) {
                menor = j;
            }
            render(vetor, j, menor);
            await sleep(500);
        }
        let aux = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = aux;
        render(vetor,vetor.length,i);
        await sleep(500);
    }

    reset();
}

async function insertionSort(vetor) {
    var len = vetor.length;
    for(let i=1; i < len; i++) {
        let j=i;
        render(vetor, i)
        await sleep(500);
        while(j && vetor[j] < vetor[j-1]) {
            let aux = vetor[j];
            vetor[j] = vetor[j-1];
            vetor[j-1] = aux;
            j--;
            render(vetor, j)
            await sleep(500);
        }
    }

    reset();
}

async function shellSort(vetor) {
    var len = vetor.length;
    var gap = Math.floor(len/2);

    while(gap) {
        for(let i=gap; i < len; i++) {
            let j=i;
            render(vetor, i)
            await sleep(500);
            while(j-gap >= 0 && vetor[j] < vetor[j-gap]) {
                let aux = vetor[j];
                vetor[j] = vetor[j-gap];
                vetor[j-gap] = aux;
                j-=gap;
                render(vetor, j)
                await sleep(500);
            }
        }

        gap = Math.floor(gap/2);
    }

    reset();
}
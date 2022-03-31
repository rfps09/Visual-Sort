var cnv = document.getElementById("quadro");
var ctx = cnv.getContext("2d");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function render(vetor, index) {
    ctx.clearRect(0,0,cnv.width, cnv.height);
    var len = vetor.length;
    for(let i=0; i < len; i++) {
        if(i == index) ctx.fillStyle = "red";
        else ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(80*i,600-60*vetor[i],80,60*vetor[i]);
    }
}

var vetorTeste = [9,7,3,8,6,2,5,1,4,10];

render(vetorTeste);

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

    render(vetor, len);
}

async function bubbleSort(vetor) {
    var len = vetor.length;
    for(let i=2; i <= len; i++) {
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

    render(vetor, len);
}

sleep(2000).then(()=>{insertionSort(vetorTeste);})
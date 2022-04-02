async function bubbleSort(vetor) {
    render(vetor);
    await sleep(500);

    var len = vetor.length;
    
    for(let i=1; i < len; i++) {
        for(let j=0; j < len-i; j++) {
            if(para) return;
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

    reset(true);
}
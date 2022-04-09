async function bubbleSort(vetor) {
    var len = vetor.length;
    
    for(let i=1; i < len; i++) {
        for(let j=0; j < len-i; j++) {
            if(para) return;
            render(vetor, new Map([[j, "red"]]));
            await sleep(delay);
            if(vetor[j] > vetor[j+1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
        if(para) return;
        render(vetor, new Map([[len-i, "red"]]));
        await sleep(delay);
    }

    reset("ordenado");
}
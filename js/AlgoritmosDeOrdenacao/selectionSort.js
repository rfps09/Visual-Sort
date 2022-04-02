async function selectionSort(vetor) {
    render(vetor);
    await sleep(500);
    
    var len = vetor.length;
    var menor;
    
    for(let i=0; i < len; i++) {
        menor = i;
        for(let j=i; j < len; j++) {
            if(para) return;
            if(vetor[menor] > vetor[j]) {
                menor = j;
            }
            if(j != menor) render(vetor, j, menor);
            else render(vetor,vetor.length,menor);
            await sleep(500);
        }
        let aux = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = aux;
        render(vetor,vetor.length,i);
        await sleep(500);
    }

    reset(true);
}
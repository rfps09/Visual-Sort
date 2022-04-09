async function selectionSort(vetor) {    
    var len = vetor.length;
    var menor;
    
    for(let i=0; i < len; i++) {
        menor = i;
        for(let j=i; j < len; j++) {
            if(para) return;
            if(vetor[menor] > vetor[j]) {
                menor = j;
            }
            render(vetor, new Map([[i, "Chocolate"],[j, "red"],[menor, "green"]]));
            await sleep(delay);
        }
        let aux = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = aux;
        render(vetor,new Map([[i, "green"]]));
        await sleep(delay);
    }

    reset("ordenado");
}
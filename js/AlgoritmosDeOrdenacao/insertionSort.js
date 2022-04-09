async function insertionSort(vetor) {
    var len = vetor.length;
    
    for(let i=1; i < len; i++) {
        if(para) return;
        let j=i;
        render(vetor, new Map([[i, "red"]]))
        await sleep(delay);
        while(j && vetor[j] < vetor[j-1]) {
            if(para) return;
            let aux = vetor[j];
            vetor[j] = vetor[j-1];
            vetor[j-1] = aux;
            j--;
            render(vetor, new Map([[j, "red"]]))
            await sleep(delay);
        }
    }

    reset("ordenado");
}
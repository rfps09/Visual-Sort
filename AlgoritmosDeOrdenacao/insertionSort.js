async function insertionSort(vetor) {
    render(vetor);
    await sleep(500);
    
    var len = vetor.length;
    
    for(let i=1; i < len; i++) {
        if(para) return;
        let j=i;
        render(vetor, i)
        await sleep(500);
        while(j && vetor[j] < vetor[j-1]) {
            if(para) return;
            let aux = vetor[j];
            vetor[j] = vetor[j-1];
            vetor[j-1] = aux;
            j--;
            render(vetor, j)
            await sleep(500);
        }
    }

    reset(true);
}
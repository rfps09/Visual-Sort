async function shellSort(vetor) {
    var len = vetor.length;
    var gap = Math.floor(len/2);

    while(gap) {
        for(let i=gap; i < len; i++) {
            if(para) return;
            let j=i;
            render(vetor, new Map([[i, "red"]]))
            await sleep(delay);
            while(j-gap >= 0 && vetor[j] < vetor[j-gap]) {
                if(para) return;
                let aux = vetor[j];
                vetor[j] = vetor[j-gap];
                vetor[j-gap] = aux;
                j-=gap;
                render(vetor, new Map([[j, "red"]]))
                await sleep(delay);
            }
        }

        gap = Math.floor(gap/2);
    }

    reset("ordenado");
}
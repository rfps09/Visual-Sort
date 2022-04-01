async function shellSort(vetor) {
    render(vetor);
    await sleep(500);
    
    var len = vetor.length;
    var gap = Math.floor(len/2);

    while(gap) {
        for(let i=gap; i < len; i++) {
            if(para) return;
            let j=i;
            render(vetor, i)
            await sleep(500);
            while(j-gap >= 0 && vetor[j] < vetor[j-gap]) {
                if(para) return;
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

    reset(true);
}
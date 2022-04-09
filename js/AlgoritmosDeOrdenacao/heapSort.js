async function heapify(vetor,index,len) {
    let left = index*2+1;
    let right = index*2+2;
    let greater = left;

    if(right < len && vetor[right] > vetor[left])
    greater = right;

    if(left < len && vetor[greater] > vetor[index]) {
        if(para) return;
        render(vetor,greater);
        await sleep(delay);
        let aux = vetor[index];
        vetor[index] = vetor[greater];
        vetor[greater] = aux;
        if(para) return;
        render(vetor,index);
        await sleep(delay);
        await heapify(vetor,greater,len);
    }
}

async function heap(vetor,left,right) {
    let mid = Math.floor((right+left)/2);
    for(let i=mid; i >= left; i--) {
        if(para) return;
        await heapify(vetor,i,right);
    }
}

async function heapSort(vetor,left=0,right=vetor.length) {
    await heap(vetor,left,right);

    for(let i=right-1; i > left; i--) {
        if(para) return;
        render(vetor,0);
        await sleep(delay);
        let aux = vetor[i];
        vetor[i] = vetor[0];
        vetor[0] = aux;
        if(para) return;
        render(vetor,i);
        await sleep(delay);
        await heapify(vetor,0,i);
    }

    reset(true);
}
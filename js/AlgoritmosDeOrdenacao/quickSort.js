async function pickPivot(vetor,left,right) {
    var mid = Math.floor((left+right)/2);
    var vector = [vetor[left],vetor[mid],vetor[right-1]];

    if(para) return;
    render(vetor, vetor.length, left, false, mid, right-1);
    await sleep(delay);

    vector.sort(function(a, b){return a-b});

    if(para) return;
    vetor[left] = vector[0];
    vetor[Math.floor((left+right)/2)] = vector[2];
    vetor[right-1] = vector[1];
    render(vetor, vetor.length, left, false, mid, right-1);
    await sleep(delay);
}

async function partition(vetor, left, right) {
    if(right-left > 2) await pickPivot(vetor,left,right);
    
    if(para) return;
    render(vetor,vetor.length,right-1);
    await sleep(delay);

    var j = left;
    for(let i = left; i < right-1; i++) {
        if(vetor[i] < vetor[right-1]) {
            var aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
            j++;
        }
        if(para) return;
        render(vetor,i,right-1);
        await sleep(delay);
    }
    if(para) return;
    var aux = vetor[right-1];
    vetor[right-1] = vetor[j];
    vetor[j] = aux;
    render(vetor,vetor.length,j);
    await sleep(delay);
    return j;
}

async function quickSort(vetor, left=0, right=vetor.length) {
    if(right-left > 1 && !para) {
        var mid = await partition(vetor,left,right);
        await quickSort(vetor,left,mid);
        await quickSort(vetor,mid+1,right);
        if(left == 0 && right == vetor.length && !para) reset(true);
    }
}
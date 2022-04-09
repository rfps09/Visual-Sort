async function pickPivot(vetor,left,right) {
    var mid = Math.floor((left+right)/2);
    var vector = [vetor[left],vetor[mid],vetor[right-1]];

    if(para) return;
    render(vetor,new Map([[left, "green"],[mid, "green"],[right-1, "green"]]));
    await sleep(delay);

    vector.sort(function(a, b){return a-b});

    if(para) return;
    vetor[left] = vector[0];
    vetor[Math.floor((left+right)/2)] = vector[2];
    vetor[right-1] = vector[1];
    render(vetor, new Map([[left, "green"],[mid, "green"],[right-1, "green"]]));
    await sleep(delay);
}

async function partition(vetor, left, right) {
    if(right-left > 2) await pickPivot(vetor,left,right);
    
    if(para) return;
    render(vetor,new Map([[right-1, "green"]]));
    await sleep(delay);

    var j = left;
    for(let i = left; i < right-1; i++) {
        var valor1 = vetor[i];
        var valor2 = vetor[right-1];
        if(vetor[i] < vetor[right-1]) {
            var aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }

        if(para) return;
        render(vetor,new Map([[j, "Chocolate"],[i, "red"],[right-1, "green"]]));
        await sleep(delay);

        if(valor1 < valor2) j++;
    }
    if(para) return;
    var aux = vetor[right-1];
    vetor[right-1] = vetor[j];
    vetor[j] = aux;
    render(vetor,new Map([[j, "green"]]));
    await sleep(delay);
    return j;
}

async function quickSort(vetor, left=0, right=vetor.length) {
    if(right-left > 1 && !para) {
        var mid = await partition(vetor,left,right);
        await quickSort(vetor,left,mid);
        await quickSort(vetor,mid+1,right);
        if(left == 0 && right == vetor.length && !para) reset("ordenado");
    }
}
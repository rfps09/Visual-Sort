async function merge(vetor,left,right) {
    var mid = Math.floor((right+left)/2);
    var vector = vetor.slice();
    var i=left,j=mid, k=left;

    while(i < mid && j < right && !para) {
        if(vector[i] < vector[j] && !para) {
            vetor[k] = vector[i];
            render(vetor,new Map([[k, "red"]]));
            await sleep(delay);
            i++;
        }
        else {
            vetor[k] = vector[j];
            render(vetor,new Map([[k, "red"]]));
            await sleep(delay);
            j++;
        }
        k++;
    }

    while(k < right && !para) {
        if(i < mid && !para) {
            vetor[k] = vector[i];
            render(vetor,new Map([[k, "red"]]));
            await sleep(delay);
            i++;
        }
        else {
            vetor[k] = vector[j];
            render(vetor,new Map([[k, "red"]]));
            await sleep(delay);
            j++;
        }
        k++;
    }
}

async function mergeSort(vetor,left=0,right=vetor.length) {
    if((right-left) > 1 && !para) {
        var mid = Math.floor((right+left)/2);
        await mergeSort(vetor,left,mid);
        await mergeSort(vetor,mid,right);
        await merge(vetor,left,right);
        if(left==0 && right==vetor.length && !para) reset("ordenado");
    }
}
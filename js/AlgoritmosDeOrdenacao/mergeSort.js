async function merge(vetor,left,right) {
    var mid = Math.floor((right-left)/2);
    var vector = vetor.slice();
    var i=left,j=mid, k=left;

    while(i < mid && j < right) {
        if(vector[i] < vector[j]) {
            vetor[k] = vector[i];
            i++;
        }
        else {
            vetor[k] = vector[j];
            j++;
        }
        k++;
    }

    while(k < right) {
        if(i < mid) {
            vetor[k] = vector[i];
            i++;
        }
        else {
            vetor[k] = vector[j];
            j++;
        }
        k++;
    }
}

async function mergeSort(vetor,left=0,right=vetor.length) {
    console.log(right,left);
    if((right-left) > 1) {
        var mid = Math.floor((right-left)/2);
        await mergeSort(vetor,left,mid);
        await mergeSort(vetor,mid,right);
        await merge(vetor,left,right);
    }
}
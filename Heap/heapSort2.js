function heapSort(array){
    buildMaxHeap(array)
    let sortedArray=[];
    while(array.length){
        sortedArray.push(array.shift());
        buildMaxHeap(array)
    }
    return sortedArray
}

function buildMaxHeap(array){
    for(let i=Math.floor(array.length/2)-1;i>=0;i--){
        heapify(array,i,array.length)
    }
}

function heapify(array,i,length){
    let leftChild=2*i +1;
    let rightChild=2*i +2;
    let largest=i
    if(leftChild<length && array[leftChild]>array[largest]){
        largest=leftChild;
    }
    if(rightChild<length  && array[rightChild]>array[largest]){
        largest=rightChild;
    }

    if(largest!==i){
        let temp=array[i];
        array[i]=array[largest];
        array[largest]=temp;
        heapify(array,largest,length)
    }
}


console.log(heapSort([234,452,3452,34,23]));
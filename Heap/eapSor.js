function heapSort(array){
    buildMaxheap(array);
    let sotedArray=[];
    while(array.length){
        sotedArray.push(array.shift());
        buildMaxheap(array)
    }
}

function buildMaxheap(array){
    for(let i=Math.floor(array.length/2-1);i>=0;i--){
        heapify(array,i,array.length);
    }
}

function heapify(array,i,length){
    let leftChildIndx=2*i +1;
    let rigthChildIndx=2*i +2;
    let largest=i;

    if(leftChildIndx<length && array[leftChildIndx]>array[largest]){
        largest=leftChildIndx;
    }

    if(rigthChildIndx<length && array[rigthChildIndx]>array[largest]){
        largest=rigthChildIndx;
    }

    if(largest!==i){
        let temp=array[largest];
        array[largest]=array[i];
        array[i]=temp;

        heapify(array,largest,length)
    }

}


heapSort([23,45,24,12,34])
class MaxBinaryHeap{
    constructor(){
        this.values = [55,39,41,18,27,12,33]
    }

    extractMax(){
        let end = this.values.pop();
        let max = this.values[0]
        this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown(){
        let index = 0;
        const length = this.values.length
        const element = this.values[0];
        while(true){
            let leftChildIndx = (2*index)+1
            let rightChildIndx = (2*index)+2
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIndx < length){
                leftChild = this.values[leftChildIndx];
                if(leftChild > element){
                    swap = leftChildIndx;
                }
            }
            if(rightChildIndx < length){
                rightChild = this.values[rightChildIndx];
                if((swap===null && rightChild > element)||(swap!==null && leftChild < rightChild)){
                    swap = rightChildIndx;      
                }
            }

            if(swap === null) break;
            this.values[0] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    extractMax(){
        const end=this.values.pop();
        let max=this.values[0];
        this.values[0]=end;
        sinkDown2();
        return max;
    }
    sinkDown2(){
        let index=0;
        const length=this.values.length;
        const element=this.values[0];
        while(true){
            let leftChildIndx=((2*index)+1);
            let rightChildIndx=((2*index)+2);
            let leftChild,rightChild;
            swap = null;
            if(leftChildIndx<length){
                leftChild=this.values[leftChildIndx];
                if(leftChild > element){
                    swap=leftChildIndx;
                }
            }
            if(rightChildIndx<length){
                rightChild=this.values[rightChild];
                if(swap===null && rightChild >element || swap!==null && rightChild>leftChild){
                    swap =rightChildIndx;
                }
            }

            if(swap===null) break;
            this.values[0] = this.values[swap];
            this.values[swap]= element;
        }
    }
}

const heap = new MaxBinaryHeap();
heap.extractMax()
console.log(heap.values);
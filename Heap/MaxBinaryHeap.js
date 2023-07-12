class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length-1;
        const element = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex]
            if(element <= parent) break;
            [this.values[parentIndex],this.values[index]] = [element, parent]
            index = parentIndex;
        }
    }
    
    bubbleUp(){
        const index=this.values.length-1;
        const element=this.values[index];
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            let parent=this.values[parentIndex];
            if(element>parent){
                [this.values[parentIndex],this.values[index]]=[element,parent]
                index=parentIndex;
            }
        }
    }

    print(){
        console.log(this.values);
    }
}

const heap = new MaxBinaryHeap();
heap.insert(55)
heap.print()
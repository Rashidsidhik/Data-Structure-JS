class MaxBinaryHeap{
    
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }

    bubbleUp(){
        let indx = this.values.length - 1;
        const element = this.values[length]

        while(indx > 0 ){
            let parentIndx = Math.floor((indx-1)/2);
            let parent = this.values[parentIndx]
            if(this.values[parentIndx] < element ){
                [this.values[parentIndx],this.values[indx]] = [element, parent]
                indx = parentIndx;
            }
        }
    }
}


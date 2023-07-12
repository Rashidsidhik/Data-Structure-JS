class priorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        const newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();    
    }
    bubbleUp(){
        let index = this.values.length-1;
        const element = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex]
            if(element.priority <= parent.priority) break;
            [this.values[parentIndex],this.values[index]] = [element, parent]
            index = parentIndex;
        }
    }

    dequeue(){
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
                if(leftChild.priority > element.priority){
                    swap = leftChildIndx;
                }
            }
            if(rightChildIndx < length){
                rightChild = this.values[rightChildIndx];
                if((swap===null && rightChild.priority < element.priority)||(swap!==null && leftChild.priority < rightChild.priority)){
                    swap = rightChildIndx;
                }
            }

            if(swap === null) break;
            this.values[0] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    print(){
        console.log(this.values);
    }
}

class Node{
    constructor(val, priority){
        this.val= val;
        this.priority = priority;
    }
}

const pqueue = new priorityQueue();
pqueue.enqueue("malik",1);
pqueue.enqueue("nihal",5);
pqueue.enqueue("ajay",3);
pqueue.enqueue("abin",2);
pqueue.enqueue("rakeeb",4);
pqueue.print()
console.log(pqueue.dequeue());


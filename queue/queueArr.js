class Queue{
    constructor(){
        this.items=[]
    }
    
    enqueue=element=> this.items.push(element);
    dequeue=()=> this.items.shift();
    isEmpty=()=> this.items.length === 0
    getSize=()=> this.items.length
    peek=()=> this.items.length!==0 ? this.items[0] : null
    print=()=> console.log(this.items.toString());
}

const queue=new Queue();
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.getSize());
console.log(queue.dequeue());
console.log(queue.peek());
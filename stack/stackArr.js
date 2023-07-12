class Stack{
    constructor(){
        this.items=[]
    }

    push=element=>this.items.push(element)
    pop=()=> this.items.pop()
    peek=()=> this.items[this.items.length-1]
    isEmpty=()=> this.items.length === 0
    size=()=> this.items.length
    print=()=> console.log(this.items.toString());
}
const stack = new Stack()
console.log(stack.isEmpty());
stack.push(23);
stack.push(3423);
stack.print();
console.log(stack.peek());
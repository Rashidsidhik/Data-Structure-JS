class Stack{
    constructor(){
        this.items=[]
    }

    push=(element)=> this.items.push(element);

    pop=()=> this.items.pop();

    print=()=> console.log(this.items);
}

const stack = new Stack()
stack.push(23);
stack.push(3423);
stack.print();

class Stack{
    constructor(){
        this.items=[]
    }

    isEmpty=()=> this.items.length === 0

    push=(element)=> this.items.push(element);

    pop=()=> this.items.pop();

    print=()=> console.log(this.items);

    reverse(){
        this.reverseStack(this.items,0,this.items.length-1)
    }

    reverseStack(items,start,end){
        if(start >= end){
            return;
        }
        let temp=items[start];
        items[start]=items[end];
        items[end]=temp;
        this.reverseStack(items,start+1,end-1)
    }

}

const stack = new Stack()
stack.push(23);
stack.push(3423);
stack.print();
stack.reverse();
stack.print();

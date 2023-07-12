class Node{
    constructor(value){
        this.value=value;
        this.next= null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }

    isEmpty=()=> this.size===0

    enQueue=(value)=>{
        const node=new Node(value);
        if(this.head==null){
            this.head=node;
            this.tail=node
        }else{
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(){
        this.head= this.head.next
    }
}
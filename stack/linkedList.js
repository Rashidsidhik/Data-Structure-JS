class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty=()=> this.size==0;

    addData(value){
        const node=new Node(value)
        if(isEmpty()){
            this.head=node
        }else{
            let prev = this.head;
            while(prev.next!=null){
                prev = prev.next    
            }
            prev.next = value;
        }
    }
}


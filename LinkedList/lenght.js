class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    
    isEmpty(){
        return this.size==0
    }   

    getSize(){
        return this.size
    }

    addData(value){
        const node = new Node(value)
        if(this.isEmpty()){
            console.log('1');
            this.head=node;
        }else{
            console.log('11');
            node.next=this.head;
            this.head=node;
        }
    }   

    print(){
        if(this.isEmpty()){
            console.log('Empty linked list');
        }else{
            let temp=this.head
            while(temp !=null){
                console.log(temp.value);
                temp=temp.next
            }
        }
    }   

}

const list = new LinkedList()

list.addData(4)
list.addData(8) 
console.log(list.getSize());
list.print()
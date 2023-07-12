class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    //add new node at the begining
    addData(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            node.next = this.head
            this.head= node
        }
        this.size++
    }
    //add data at the end
    addDataEnd(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            let prev=this.head
            while(prev.next){
                prev = prev.next
            }  
            prev.next = node
        }
        this.size++
    }

    reverse(){
        let prev=null;
        let curr=this.head
        while(curr != null){
            let future=curr.next
            curr.next=prev;
            prev = curr;
            curr=future
        }
        this.head=prev;
    }

    print(){
        if(this.isEmpty()){
            console.log('linked list is empty');
        }else{
            let temp=this.head;
            let listValues=''
            while(temp != null){
                listValues += `${temp.value} ` 
                temp = temp.next;
               
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList()

list.addData(7)
list.addDataEnd(2)
list.addDataEnd(21)
list.addDataEnd(2342)
list.addDataEnd(22)
list.addDataEnd(254)   
list.print()
list.reverse()
list.print()


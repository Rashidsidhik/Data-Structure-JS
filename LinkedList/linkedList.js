class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0;
    }

    getSize(){
        return  this.size;
    }

    addData(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addDataEnd(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev  = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    print(){
        let prev = this.head;
        let listValues = '';
        while(prev){
            listValues += `${prev.value}  `;
            prev = prev.next
        }
        console.log(listValues);
    }

    reverse(){
        let prev = null;
        let current = this.head;
        while(current != null){
            let future = current.next;
            current.next = prev;
            prev = current;
            current = future
        }
        this.head = prev
    }
    
    print(){
        let prev = this.head;
        let listValues = '';
        while(prev){
            listValues += `${prev.value}  `;
            prev = prev.next
        }
        console.log(listValues);
    }
}

const list = new LinkedList()

list.addDataEnd(2)
list.addDataEnd(21)
list.addDataEnd(2342)
list.addDataEnd(22)
list.addDataEnd(254)   
list.print()
list.reverse()
list.print()

class Node{
    constructor(value){
        this.value=value;
        this.next=null
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
    
    addArray(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('linked list is empty');
        }else{
            let temp=this.head;
            let listValues=''
            while(temp != null){
                console.log(temp.value);
                listValues += `${temp.value} ` 
                temp = temp.next;
               
            }
            console.log(listValues);
        }
    }
}

const list=new LinkedList()

const array=[1,2,3,4,5,6];

array.forEach((element)=>{
    list.addArray(element)
})

list.print()



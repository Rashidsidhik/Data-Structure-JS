class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode=new Node();
        if(this.root===null) this.root=newNode;
        else{
            let current=this.root;
            while(true){
                if(current.value>value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }
                    current=current.right
                }else if(current.value<value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }
                    current=current.right
                }
            }
        }
    }
}
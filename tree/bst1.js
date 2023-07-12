class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value) 
        if(this.root === null){
            this.root= newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(value == current.value) return undefined;
                if(value>current.value){
                    if(current.right === null){
                        current.right= newNode ;
                        return this;
                    }
                    current = current.right;
                }else{
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
            }
        }
    }

    search(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(current.value > value){
                current = current.left;
            }else if(current.value < value){
                current = current.right
            }else{
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }

    delete(value){
        let current = this.root;
        while(true){
            current =current.right;
        }
    }
}

const tree= new BinarySearchTree();
tree.insert(10);
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.search(7));
tree.delete(7)
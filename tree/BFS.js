class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }else{
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    search(value){
        if(this.root === null){
            return false;
        } 
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }

    BreadthFirstSearch(){
        let node = this.root;
        let queue=[];
        let visited=[];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            visited.push(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return visited;
    }


    bfs(){
        let node=this.root;
        let queue=[];
        let visited=[];
        queue.push(node)
        while(queue.length){
            node = queue.shift();
            visited.push(node.value)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
}

const tree = new BinarySearchTree()
tree.insert(10);
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.BreadthFirstSearch());
console.log(tree.search(10));
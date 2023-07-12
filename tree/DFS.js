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

    DFSPreOrder(){
        let visited=[];
        function traverse(node){
            visited.push(node.value)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return visited;
    }

    DFSPostOrder(){
        let visited =[];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value)
        }
        traverse(this.root)
        return visited;
    }

    DFSInOrder(){
        let visited =[];
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return visited;
    }
    
    dfs(){
        let visited=[];
        (function traverse(){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right);
            visited.push(node.value)
        })(this.root)
        return visited
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
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());



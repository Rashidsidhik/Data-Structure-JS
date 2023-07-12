class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null ) this.root = node
        else{
            let current = this.root
            while(true){
                if(current.value > value){
                    if(current.left == null){
                        current.left = node
                        return
                    }
                    current = current.left
                }else if(current.value < value){
                    if(current.right == null){
                        current.right = node
                        return
                    }
                    current = current.right
                }
            }
        }
    }

    search(value){
        if(this.root === null) return 
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
        return current      
    }



    insert2(value){
       if(this.root) return null;
       const newNode = new Node(value)
       let current = this.root
       while(current){
          if(current.value < value){
              if(current.right ===  null){
                  current = current.right
              }
          }else if(current.value > value){
            if(current.left === null){
                current = current.left
            }
            current = current.left
          }
       }
       current = newNode;  
    }


    search(value){
        if(this.root === null ) return null;
        let current = this.root;
        let found = false
        if(current && !found){
            if(current.value < value){
                current = current.right
            }else if(current.value > value){
                current = current.left
            }else{
                found = true;
                console.log('Element found');
            }
        }
    }


    breadthFirstSearch(){
        node = this.root;
        let queue = []
        let visited = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            visited.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
    }


    preOrder(){
        (function traverse(node){
                console.log(node.value);
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
        })(this.root)
    }

    postOrder(){
        (function traverse(node){
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
                console.log(node.value);
        })(this.root)
    }
    
    Inorder(){
        (function traverse(node){
            if(node.left) traverse(node.left)
            console.log(node.value);
            if(node.right) traverse(node.right)
        })(this.root)
    }
}



const tree = new BinarySearchTree()
tree.insert(10);
tree.insert(5)
tree.insert(13)
tree.insert(12)
tree.insert(11)
tree.insert(2)
tree.insert(3)
tree.insert(1)
tree.insert(0)
tree.insert(16)
tree.insert(7)
tree.insert(15)
tree.insert(17)
tree.postOrder()
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
        const newNode=new Node(value);    
        if(this.root===null){
            this.root=newNode;
        }else{
            let current=this.root
            while(true){
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }   
                    current=current.left;
                }else if(value>current.value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }
                    current=current.right;
                }
            }
        }
    }

    search(value){
        let current = this.root; 
        let found=false;
        if(this.root===null) return undefined;
        while(current && !found){
            if(current.value>value){
                current=current.left;
            }else if(current.value<value){
                current = current.right;
            }else{
                found = true;
            }
        }

        if(!found) return false;
        return current;
    }

    min(root=this.root){
        let current=root;
        if(current===null) return null;
        while(true){
            if(current.left===null){
                return current;
            }
            current=current.next;
        }
    }

    max(){
        let current = this.root;
        if(current===null) return null;
        while(true){
            if(current.right===null){
                return current
            }
            current=current.right;
        }
    }

    postOrder(){
        (function traverse(node){
            if(node!==null){
                traverse(node.left);
                traverse(node.right);
                console.log(node.value);
            }
        })(this.root)
    }
   
    getHeight(root=this.root){
        if(root===null) return 0;
        let leftHeight= this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);
        return Math.max(leftHeight,rightHeight)+1;
    }

    preOrder(){
        (function traverse(node){
            if(node!=null){
                console.log(root.value);
                traverse(root.left);
                traverse(root.right);
            }
        })(this.root)
    }
    postOrder(){
        (function traverse(node){
            if(node!=null){
                traverse(node.left);
                traverse(node.right);
                console.log(node.value);
            }
        })(this.root)
    }

    bfs(){
        let node=this.root;
        let visited=[];
        let queue=[];
        queue.push(node)
        while(queue.length){
            node = queue.shift();
            visited.push(node.value)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    delete(value){
        this.root= this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null) return null;
        if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }else if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else{
            if(!root.left && !root.right) return null;

            if(!root.left) return root.right;
            else if(!root.right) return root.left;

            root.value=this.min(root.right);
            root.right=this.deleteNode(root.right,root.value)
        }
    }



    delete2(value){
        this.root = this.deleteNode2(this.root,value)
    }

    deleteNode2(root,value){
        if(root===null) return null;
        if(value>root){
            root.right= this.deleteNode2(root.right,value)
        }else if(value<root){
            root.left= this.deleteNode2(root.left,value)
        }else{
            if(!root.left && !root.right) return null;
            
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            root.value=this.min(root.right);
            root.right=this.deleteNode2(root.right,root.value)

        }
    }











    delete3(){
        this.root=this.deleteNode3(this.root,value);
    }

    deleteNode3(root,value){
        if(value>root.value){
            root.right=this.deleteNode3(root.right,value)
        }else if(value<root.value){
            root.left=this.deleteNode3(root.left,value)
        }else{
            if(!root.left && !root.right) return null;

            if(!root.left){
                return root.left
            }else if(!root.right){
                return root.right
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode3(root.right,root.value)
        }
    }
}



const tree=new BinarySearchTree();
tree.insert(10);
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(1)
console.log(tree.getHeight());
// console.log(tree.search(16));
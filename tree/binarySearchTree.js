class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root=newNode;
            return this;
        }else{
            let current=this.root
            while(true){
                if(value>current.value){
                    if(current.right===null){
                        current.right= newNode
                        return this;
                    }
                    current=current.right;
                }else{
                    if(current.left===null){
                        current.left = newNode;
                       return this;
                    }
                    current=current.left;
                }
            }
        }
    }

    printPreOrder(){
        (function traverse(node){
            if(node!==null){
                console.log(node.value);
                traverse(node.left) 
                traverse(node.right)
            }
        })(this.root)
    }

    printInOrder(){
        (function traverse(node){
            if(node!==null){
                traverse(node.left);
                console.log(node.value);
                traverse(node.right);
            }
        })(this.root)
    }

    postOrder(){
        (function traverse(node){
            if(node!==null){
                traverse(node.left);
                console.log(node.value);
                traverse(node.right)
            }
        })(this.root)
    }

    search(value){
        if(this.root==null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value>current.value){
                current=current.right
            }else if(value<current.value){
                current = current.left;
            }else{
                console.log('element found');
                found=true;
            }
        } 
    }

    checkBST(){
        let array=[];
        (function traverse(node){
            if(node!==null){
                traverse(node.left);
                array.push(node.value);
                traverse(node.right);e

            }
        })(this.root)
        // if array is sorted then it is a binary search tree.
        return array;
    }

    checkBST2(root){
        if(!root || !root.left && !root.right){
            return true;
        }

        if(root.left && root.left>=root.value){
            return false;
        }
        if(root.right && root.right<=root.value){
            return false;
        }
        return this.checkBST2(root.left) && this.checkBST2(root.right)
    }

    minNode(root=this.root){
        let current=root;
        if(current.left===null) return current.value;
        while(current.left!=null){
            current=current.left;
        }
        return current.value;
    }

    maxNode(){
        let current=this.root
        if(current.right===null) return current.value;
        while(current.right!=null){
            current=current.right;
        }
        return current.value;
    }



    delete(value){
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value){
        if(root === null) return root
        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        }else  if(value > root.value){
            root.right = this.deleteNode(root.right, value);
        }else{
            if(!root.left && !root.right){
                return null
            }
                if(!root.left){
                    return root.right;
                }else if(!root.right){
                    return root.left;
                }

            root.value = this.minNode(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
    }


    delete(value){
        this.root=this.deleteNode2(this.root,value);
    }
    deleteNode2(root,value){
        if(root===null) return true;
        if(root.value>value){
            root.left=this.deleteNode2(root.left,value);
        }else if(root.value<value){
            root.right=this.deleteNode2(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            root.value=this.minNode(root.right);
            root.right=this.deleteNode2(root.right,root.value)
        }
    }


    inOrder() {
        (function traverse(node){
            if(node!==null){  
                traverse(node.left);
                traverse(node.right)
                console.log(node.value);
            }
        })(this.root)
    }

    che(root){
        if(!root || !root.left && !root.right){
            return true
        }

        if(root.left && root.value<root.left){
            return false;
        }
        if(root.right && root.value>root.right){
            return false
        }

        return che(root.left) && cher(root.right)
    }

    depth(){
        (function maxDepth(node) {
            if (!node) { return 0 }
            else return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
        })(this.root)
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
// tree.postOrder()
// console.log(tree.minNode());
// console.log('delete NOde');
// tree.delete(2);
console.log(tree.depth());


class Trie{
    constructor(){
        this.children={};
        this.endOfWord=false;
    }
}

class TrieNode{
    constructor(){
        this.root=new Trie();
    }
    insert(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
            let ch=word.charAt(i)
            if(!node.children[ch]){
                node.children[ch]=new Trie()
            }
            node=node.children[ch];
        }
        node.endOfWord=true;
    }

    search(word){
        let node= this.root;
        for(let i=0;i<word.length;i++){
            let ch=word.charAt(i)
            if(!node.children[ch]){ 
                return false;
            }
            node=node.children[ch]
        }
        return node.endOfWord;
    }
    

    delete(key) {
        this._delete(this.root, key, 0);
      }
    
      _delete(node, key, depth) {
        if (!node) {
          return null;
        }
        if (depth === key.length) {
          node.isEndOfWord = false;
        } else {
          const char = key[depth];
          node.children[char] = this._delete(node.children[char], key, depth + 1);
        }
        if (Object.keys(node.children).length === 0 && !node.isEndOfWord) {
          node = null;
        }
    
        return node;
    }

    // insertion(word){
    //     let node = this.root;
    //     for(let i=0;i<word.length;i++){
    //         let ch=word.charAt(i);
    //         if(!node.children[ch]){
    //             node.children[ch]=new Trie()
    //         }
    //        
    //     }
    //     node.endOfWord=true;
    // }
}

const trie = new TrieNode();
trie.insert("hello");
console.log(trie.search("hello"));
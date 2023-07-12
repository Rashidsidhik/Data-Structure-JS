class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode()
    }

    insert(word){
        let current = this.root
        for(let i = 0; i < word.length; i++){
            const ch = word[i];
            let node = current.children.get(ch)
            if(!node){
                node = new TrieNode();
                current.children.set(ch, node);
            }
            current = node
        }
        current.isEndOfWord = true
    }


    
}
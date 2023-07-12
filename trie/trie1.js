class TrieNode{
    constructor(){
        this.children={};
        this.endOfTheWord=false;
    }
}

class Trie{
    constructor(){
        this.root=null;
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
          const ch = word.charAt(i);
          if (!node.children[ch]) {
            node.children[ch] = new TrieNode();
          }
          node = node.children[ch];
        }
        node.isEndOfWord = true;
    }

    search(word){
        let current = this.root;
        for(let i=0;i<word.length;i++){
            const ch=word.charAt(i);
            if(!current.children[ch]){
                return false;
            }
            current = current.children;;
        }
        return current.isEndOfword;
    }
}

const trie = new Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.search("hi")); // false
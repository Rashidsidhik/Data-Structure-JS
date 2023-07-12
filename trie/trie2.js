class TrieNode {
    constructor() {
      this.children = new Map();
      this.endOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children.has(char)) {
          current.children.set(char, new TrieNode());
        }
        current = current.children.get(char);
      }
      current.endOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (const char of word) {
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return current.endOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
      for (const char of prefix) {
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return true;
    }
}

const trie = new Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.search("hi")); // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("wo")); // true
console.log(trie.startsWith("hi")); // false
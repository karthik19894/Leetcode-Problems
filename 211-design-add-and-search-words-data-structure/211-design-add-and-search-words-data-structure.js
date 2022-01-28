
class TrieNode {
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}
var WordDictionary = function() {
  this.root = new TrieNode();  
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(let i=0; i < word.length; i++){
        let letter = word[i];
        if(!(node.children.hasOwnProperty(letter))) node.children[letter] = new TrieNode();
        node = node.children[letter];
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.searchHelper(word, 0, this.root);
};

WordDictionary.prototype.searchHelper = function(word, idx, node) {
    let current = node;
    for(let i=idx; i < word.length; i++){
        let letter = word[i];
        if(letter === "."){
            for(let childNode of Object.values(current.children)){
                if(this.searchHelper(word, i + 1, childNode)){
                    return true;
                }
            }
            return false;
        }else{
            if(!(letter in current.children)) return false;
            current = current.children[letter];
        }
    }
    return current.isEndOfWord;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head === null) return null;
    populateIndices(head);
    const cache = {};
    return copyList(head, cache);
};

function copyList(head, cache){
    if(head === null) return null;
    const key = `${head.val}:${head.index}`;
    if(key in cache) return cache[key];
    const newHead = new Node(head.val, null, null);
    newHead.index = head.index;
    cache[key] = newHead;
    newHead.next = copyList(head.next, cache);
    newHead.random = copyList(head.random, cache);
    return newHead;
}

function populateIndices(head){
    let current = head;
    let idx = 0;
    while(current !== null){
        current.index = idx;
        idx++;
        current = current.next;
    }
}
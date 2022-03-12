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
    const cache = new WeakMap();
    return copyList(head, cache);
};

function copyList(head, cache){
    if(head === null) return null;
    if(cache.has(head)) return cache.get(head);
    const newHead = new Node(head.val, null, null);
    cache.set(head, newHead);
    newHead.next = copyList(head.next, cache);
    newHead.random = copyList(head.random, cache);
    return newHead;
}

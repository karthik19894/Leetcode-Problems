/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null) return head;
    const length = connectTailAndGetLength(head);
    k = k % length;
    let current = head;
    let pos = 0;
    let newTail = null;
    while(pos < length - k){
        newTail = current;
        current = current.next;
        pos++;
    }
    const newHead = newTail.next;
    newTail.next = null;
    return newHead;
};

function connectTailAndGetLength(head){
    let length = 0;
    let current = head;
    let last = null;
    while(current !== null){
        last = current;
        current = current.next;
        length++;
    }
    if(last !== null) last.next = head;
    return length;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let newHead = null;
    let current = head;
    let last = null;
    let skipVal = null;
    while(current !== null){
        const next = current.next;
        if((next !== null && next.val === current.val) || skipVal === current.val){
            skipVal = current.val;
        }else {
            if(last) last.next = current;
            if(newHead === null) newHead = current;
            last = current;
            last.next = null;
        }
        current = next;
    }
    return newHead;
};
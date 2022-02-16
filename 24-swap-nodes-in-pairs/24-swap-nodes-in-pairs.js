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
var swapPairs = function(head) {
    if(head === null) return head;
    let first = head;
    let second = head.next;
    if(second === null) return head;
    let newHead = second;
    let prevFirst = null;
    while(first && second){
        let nextFirst = second.next;
        second.next = first;
        first.next = nextFirst;
        if(prevFirst) prevFirst.next = second;
        prevFirst = first;
        first = nextFirst;
        second = nextFirst ? nextFirst.next : null;
    }
    return newHead;
};
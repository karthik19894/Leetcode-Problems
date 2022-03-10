/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // the numbers in the linked list are in reverse order which means if a num is 123 then head will be 3
    // so we can add the two numbers iterating forward from the head
    let p1 = l1, p2 = l2, sumList = null;
    let carry = 0, newHead = null, lastNode = null;
    while(p1 || p2 || carry > 0){
        let num1 = p1 ? p1.val : 0;
        let num2 = p2 ? p2.val : 0;
        let sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        let numOfNode = sum % 10;
        if(newHead === null){
            newHead = new ListNode(numOfNode, null);
            lastNode = newHead;
        }else{
            lastNode.next = new ListNode(numOfNode, null);
            lastNode = lastNode.next;
        }
        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next: null;
    }
    return newHead;
};
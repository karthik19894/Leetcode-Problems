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
var sortList = function(head) {
    return mergeSort(head);
};

function mergeSort(head){
    if(head === null || head.next === null) return head;
    const middle = getMiddle(head);
    const firstHalf = mergeSort(head);
    const secondHalf = mergeSort(middle);
    return merge(firstHalf, secondHalf);
}

function merge(l1, l2){
    const dummyHead = new ListNode();
    let current = dummyHead;
    let p1 = l1, p2 = l2;
    while(p1 && p2){
        if(p1.val <= p2.val){
            current.next = p1;
            p1 = p1.next;
            current = current.next;
        }else{
            current.next = p2;
            p2 = p2.next;
            current = current.next;
        }
    }
    if(p2 === null) current.next = p1;
    if(p1 === null) current.next = p2;
    return dummyHead.next;
}

function getMiddle(head){
    let slow = head;
    let fast = head;
    let prevSlow = null;
    while(fast && fast.next){
        prevSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(prevSlow) prevSlow.next = null;
    return slow;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode();
    let current = dummyHead;
    let p1 = list1, p2 = list2;
    while(p1 && p2){
        if(p1.val <= p2.val){
            current.next = p1;
            p1 = p1.next;
            current = current.next;
        } else{
            current.next = p2;
            p2 = p2.next;
            current = current.next;
        }
    }
    if(p1) current.next = p1;
    else if(p2) current.next = p2;
    return dummyHead.next;
};
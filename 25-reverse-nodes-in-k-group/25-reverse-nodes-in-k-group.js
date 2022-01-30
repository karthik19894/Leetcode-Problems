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
var reverseKGroup = function(head, k) {
    // so one important thing we need to care of here is that we cannot reverse nodes in a sub list if they dont contain atleast k nodes
    if(head === null || k === 0) return head;
    const length = getLength(head);
    if(length < k) return head;
    let position = 0;
    let current = head;
    let prev = null;
    while((length - position >= k) && current !== null){
        const previousOfLastPart = prev;
        const lastNodeOfSubList = current;
        let revPosition = 0;
        while(current && revPosition < k){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            revPosition++;
        }
        position = position + revPosition;
        if(previousOfLastPart === null){
            head = prev;
        }else{
            previousOfLastPart.next = prev;
        }
        lastNodeOfSubList.next = current;
        prev = lastNodeOfSubList;
    }
    return head;
};

function getLength(head){
    let current = head;
    let length = 1;
    while(current.next !== null){
        current = current.next;
        length++;
    }
    return length;
}
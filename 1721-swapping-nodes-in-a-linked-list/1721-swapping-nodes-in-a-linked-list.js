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
var swapNodes = function(head, k) {
    const [prevOfFront, front] = getNodesKHead(head, k);
    let end = head, fast = front;
    let prevOfEnd = null;
    while(fast.next !== null){
        prevOfEnd = end;
        end = end.next;
        fast = fast.next;
    }
    // swapping front and nodes at end
    let temp = front.val;
    front.val = end.val;
    end.val = temp;
    return head;
};

function getNodesKHead(head, k){
    let current = head;
    let prev = null;
    let pos = 1;
    while(current !== null && pos < k){
        prev = current;
        current = current.next;
        pos++;
    }
    return [prev, current];
}
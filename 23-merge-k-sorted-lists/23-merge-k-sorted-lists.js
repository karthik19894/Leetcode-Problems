/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const listsWithoutNull = lists.filter(l=> l !== null);
    if(listsWithoutNull.length === 0) return null;
    if(lists.length === 1) return lists[0];
    let head = mergeTwoLists(lists[0], lists[1]);
    for(let i=2; i < lists.length; i++){
        head = mergeTwoLists(head, lists[i]);
    }
    return head;
};

function mergeTwoLists(l1, l2){
    const merged = new ListNode(0);
    let ptr = merged;
    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            ptr.next = l1;
            ptr = ptr.next;
            l1 = l1.next;
        }else{
            ptr.next = l2;
            ptr = ptr.next;
            l2 = l2.next;
        }
    }
    if(l2 === null){
        ptr.next = l1;
    }
    if(l1 === null){
        ptr.next = l2;
    }
    return merged.next;
}
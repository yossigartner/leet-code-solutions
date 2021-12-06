/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head:any) {
    let pointer = head;
    while(pointer != null) {
        if(pointer.visited) return pointer;
        pointer.visited = true;
        pointer = pointer.next;
    }
    
    return null;
};
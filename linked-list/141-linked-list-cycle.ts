/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head:any) {
    if(!head || head.next == null) return false;
    let singleJump = head;
    let doubleJump = head;
    while(doubleJump != null && doubleJump.next != null) {
        singleJump = singleJump.next;
        doubleJump = doubleJump.next.next;
        if(singleJump === doubleJump) return true;
    }
    
    return false;
};
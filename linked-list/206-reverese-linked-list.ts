/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from "./linked-list";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head:any) {
    if(!head) return null;
    const nodesStack = [];
    let pointer = head;
    
    while(pointer != null) {
        nodesStack.push(pointer);
        pointer = pointer.next; 
    }
    
    pointer = nodesStack.pop();
    const newHead = pointer;
    while(nodesStack.length > 0) {
        const next = nodesStack.pop();
        pointer.next = next;
        pointer = next;
    }
    pointer.next = null;
    
    return newHead;
};
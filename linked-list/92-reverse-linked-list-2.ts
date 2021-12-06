/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head:any, left:number, right:number) {
    if(left === right) return head;
    const newHead = reverseLinkedList(head,left,right);
    let pointer = head;
    if(left === 1) pointer = newHead;
    
    return pointer;
    
};

function reverseLinkedList(head:any,left:number,right:number) {
    const nodesStack = [];
    let pointer = head;
    let beforeTheEdge = head;
    let counter = 1;
    while(counter < left) {
        beforeTheEdge = pointer;
        pointer = pointer.next;
        counter++;
    }
    
    while(counter <= right) {
        nodesStack.push(pointer);
        pointer = pointer.next;
        counter++;
    }
    const overTheEdge = pointer;
    pointer = nodesStack.pop();
    beforeTheEdge.next = pointer;
    const newHead = pointer;
    while(nodesStack.length > 0) {
        const temp = nodesStack.pop();
        pointer.next = temp;
        pointer = temp;
    }
    overTheEdge ? pointer.next = overTheEdge:pointer.next = null;
    
    return newHead;
        
}
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
 
/*This is problem 2 from leetcode.com  */


var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let tail = null
    let head = null; 
    while (l1 || l2){
        let num1 = l1?.val ?? 0;
        let num2 = l2?.val ?? 0;

        const sum = num1 + num2 + carry
        carry = Math.floor(sum / 10);
        sum == (carry * 10);

        if (!tail) {
            tail = new ListNode(sum, null);
            head = tail;
        } else {
            head.next = new ListNode(sum, null);
            head = head.next;
        }

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        
        if (carry > 0) {
            head.next = new ListNode(sum, null);
            head = head.next;
        }

        return tail;
    }
};
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

const l1 = [2,4,3]; 
const l2 = [5,6,4];

var addTwoNumbers = function(l1, l2) {
    while (l1 || l2){
        let num1 = l1?.val ?? 0;
        let num2 = l2?.val ?? 0;

        console.log(num1, num2);

        if (l1) {
            l1 - l1.next;
        }
        if (l2) {
            l2 - l2.next;
        }
    }
};
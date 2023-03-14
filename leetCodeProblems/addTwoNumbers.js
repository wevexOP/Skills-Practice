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
    /* first create new list object */
    const dummy = new ListNode();
    /*curr or "current" variable points to the head of the list node */
    let curr = dummy;
    /*carry is created and given the value of 0 to carry the overflow number  */
    let carry = 0;
    /*traverse the length list of our variables */
    while(l1 || l2) {
        let sum = carry;
        /*create an if statement to add the values of each variable as well as push the 
        tail towards the head of the list with the .next */
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        /*the same if statement is created for the second variable */
        if (l2) {
            sum += l2.val;
            l2 = l2.next
        }
        /* now we have the sum resolve that creates a new ListNode and appends it with the 
        curr.next which then goes into the carry value that uses Math.floor and divides the sum */
        curr.next = new ListNode(sum%10);
        carry = Math.floor(sum/10);
        
        /*then the curr or current will point to the next */
        curr = curr.next;
    }
    /*creating a check for the carry value to see if it is greater than 0. If the value is greater than 0,
    the we need to create a new ListNode with a value of the carry.  */
    if (carry > 0) {
        curr.next = new ListNode(carry);
    
    /*returns the original ListNode with the .next attached to it that is the sum function completed */
    return dummy.next;
};

/* solved */
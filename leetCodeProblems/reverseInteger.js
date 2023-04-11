/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    // convert to string
    let str = x.toString();
    // split string into array
    let arr = str.split('');
    // reverse array
    let revArr = arr.reverse();
    // join array into string
    let revStr = revArr.join('');
    // convert string to number
    let revNum = parseInt(revStr);
    // check if number is negative
    if (x < 0) {
        revNum = revNum * -1;
    }
};
// the code above fails the test cases because it does not account for the fact that the number could be negative
// Runtime: 76 ms, faster than 99.99% of JavaScript online submissions for Reverse Integer.     
// Memory Usage: 40.1 MB, less than 5.00% of JavaScript online submissions for Reverse Integer.

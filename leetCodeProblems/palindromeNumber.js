/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
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
    // check if number is a palindrome
    if (x === revNum) {
        return true;
    }
    return false;
    
};
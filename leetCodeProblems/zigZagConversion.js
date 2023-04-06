/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    // if numRows is 1, return s
    if (numRows === 1) return s;

    //let n = s.length;
    let n = s.length;
    //let res = '';
    let res = '';
    // create a for loop to iterate through the number of rows
    for (let i = 0; i < numRows; i++) {
        // create a for loop to iterate through the length of the string
        for (let j = 0; j + i < n; j += 2 * numRows - 2) {
            // add s[j + i] to res
            res += s[j + i];
            // if i is not 0 or numRows - 1, add s[j + 2 * numRows - 2 - i] to res
            if (i !== 0 && i !== numRows - 1 && j + 2 * numRows - 2 - i < n) {
                res += s[j + 2 * numRows - 2 - i];
            }
        }
    }
    // return res
    return res;
    
};

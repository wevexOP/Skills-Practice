/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    // set up and open arr
    const result = [];

    // if numRows is less than 2, return s
    if (numRows < 2) {
        return s;
    }

    // create a for loop to iterate through numRows
    for (let i = 0; i < numRows; i++) {
        let j = i;
        //while j is less than s.length
        while (j < s.length) {
            // push s[j] into result[i]
            result[i].push(s[j]);
            // if i is not 0 and i is not numRows - 1
            if (i !== 0 && i !== numRows - 1) {
                //const k = j + (numRows - i - 1) * 2;
                // push s[k] into result[i]
                // push s[j + (numRows - i - 1) * 2] into result[i]
                result[i].push(s[j + (numRows - i - 1) * 2]);
            }
    }
};
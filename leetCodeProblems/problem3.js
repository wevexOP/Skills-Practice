/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    for (let i=0;i<s.length;i++) {
        for (let j=i+1;j<=s.length;j++) {
            const substring = s.substring(i, j);
            console.log(substring);
        }
    }
};
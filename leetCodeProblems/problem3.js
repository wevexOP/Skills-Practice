/**
 * @param {string} s
 * @return {number}
 */

/* This code is too slow to be accepted by leet code. This is considered to be a 'brute force method'. */
 /* const isUnique = (s) => {
    const set = new Set()
    for (let i=0;i<s.length;i++) {
        if(set.has(s[i])){
            return false;
        }
        set.add(s[i]);
    }
    return true;
}

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for (let i=0;i<s.length;i++) {
        for (let j=i+1;j<=s.length;j++) {
            const substring = s.substring(i, j);
            if(isUnique(substring)) {
                max = Math.max(max, substring.length)
                }
            }
        }
        return max;
}; */

/*Accepted and submitted. This method uses a hash map to find the substring and its repeating characters. */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let i = 0;
    let map = {};

        for (let j=i;j < s.length;j++) {
            if (map[s[j]]!== undefined && map[s[j]] >= i) {
                i = map[s[j]] + 1
            }
            map[s[j]] = j;
            max = Math.max(max, j - i + 1)
    }
    return max;
};
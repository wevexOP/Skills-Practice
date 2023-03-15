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


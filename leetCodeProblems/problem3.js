/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    for (let i=0;i<s.length;i++) {
        for (let j=i+1;j<=s.length;j++) {
            const substring = s.substring(i, j);

            const charsFound = {};
            let isOk = true;
            for (let k=0;k<substring.length;k++) {
                const character = substring[k];
                if (!charsFound[char]){
                    charsFound[char] = true;
                } else {
                    isOK = false;
                    break;
                }
            }
            if (isOK){
                console.log(substring);
            }
        }
    }
};
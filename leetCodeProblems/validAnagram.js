/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // if s.length !== t.length, return false
    if (s.length !== t.length){
        return false;
    }
    // create a s letter object
    let sLetter = {};
   // for let char of s     
    for (let char of s){
        // if sLetter[char] exists, increment
        if (sLetter[char]){
            sLetter[char]++;
        }
        // else, set sLetter[char] to 1
        else {
            sLetter[char] = 1;
        }
    }
    // for let char of t and return false if sLetter[char] doesn't exist 
    for (let char of t){
        if (!sLetter[char]){
            return false;
        }
        // if slLetter[char]
        if (sLetter[char]){
            sLetter[char]--;
        }
        // if sLetter[char] === 0, delete sLetter[char]
        if (sLetter[char] === 0){   
            delete sLetter[char];
        }
    }

    // return object.keys(sLetter).length === 0
    return Object.keys(sLetter).length === 0;
};
//set this function to a variable
const isAnagram = (s, t) => {
    //loop through s
    for (let i = 0; i < s.length; i++) {
        //if s[i] is not in t, return false
        if (!t.includes(s[i])) {
            return false;
        }
        //else, remove s[i] from t
        else {
            t = t.replace(s[i], "");
        }
    }

    //if t is empty, return true
    if (t === "") {
        return true;
    }
    //else, return false
    else {
        return false;
    }
};

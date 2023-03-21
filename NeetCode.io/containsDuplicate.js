/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hTable = {};
    // create for loop to iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // if the hash table has the value of the array, return true
        if (hTable[nums[i]]) {
            return true;
        }
        // else, set the value of the array to the hash table
        else {
            hTable[nums[i]] = 1;
        }
    }
    return false;
};

let test1 = [1,2,3,1];
let test2 = [1,2,3,4];


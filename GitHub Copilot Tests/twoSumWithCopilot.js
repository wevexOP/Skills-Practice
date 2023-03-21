/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i=0;i<nums.length;i++) {
        const elem1 = nums[i];
        for (let j=i+1;j<nums.length;j++){
            const elem2 = nums[j];

            if (elem1 + elem2 === target ){
                console.log("found with", elem1, elem2);
                return [i, j];
            }
        }
    }
}; 

// attempting to make another variation of the function with a hash table
 var twoSum = function(nums, target) {
    let hTable = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hTable[complement] !== undefined) {
            return [hTable[complement], i];
        }
        hTable[nums[i]] = i;
    }
 };
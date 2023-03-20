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
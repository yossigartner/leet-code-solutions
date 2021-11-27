/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums:number[]) {
    let xorRange = 0;
    for(let i = 0; i <= nums.length; i++) {
        xorRange ^= i;
        if(i < nums.length) xorRange ^= nums[i];
    }
    
    return xorRange;
};
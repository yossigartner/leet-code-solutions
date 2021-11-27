/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums:number[]) {
    
    const duplicates = Array(nums.length - 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        if(duplicates[nums[i]-1]) return nums[i];
        duplicates[nums[i]-1]++;  
    }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums:number[]) {
    const numLen = nums.length;
    const combs = (2 ** numLen) -1;
    const subsets = [];
    
    for(let i = 0; i <= combs; i++) {
        const bin = i.toString(2).padStart(numLen,0);
        console.log(bin);
        const subset = [];
        for(let j = 0; j < numLen;j++) {
            if(bin[j] === '1') subset.push(nums[j]);
        }
        
        subsets.push(subset);
    }
    
    return subsets;
};
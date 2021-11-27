/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// VERSION #1
/* var twoSum = function(nums:number[], target:number) {
    const numsPositions = nums.map((num,index) => ({value:num,originalIndex:index}))
    numsPositions.sort((a,b)=> a.value - b.value);
    let leftIterator = 0;
    let rightIterator = numsPositions.length - 1;
    while(leftIterator < rightIterator) {
        const check = numsPositions[leftIterator].value + numsPositions[rightIterator].value; 
        if(check === target) {
            return [numsPositions[leftIterator].originalIndex,numsPositions[rightIterator].originalIndex];
        }
        
        check < target ? ++leftIterator : --rightIterator;
    }
};
 */

// VERSION #2
var twoSum = function (nums: number[], target: number) {
    const numsHash = new Map()
    for(let i = 0; i <nums.length; i++) {
        const lookup = target - nums[i];
        const lookupIndex = numsHash.get(lookup);
        if (lookupIndex != null)
            return [lookupIndex, i];
        numsHash.set(nums[i], i);
    }
};

console.log(twoSum([2,7,11,15],9))
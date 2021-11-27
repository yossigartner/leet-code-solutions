/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums: number[]) {
    const results: number[][] = [];
    const alreadyChecked = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(alreadyChecked.get(nums[i]))
            continue;
        else
            alreadyChecked.set(nums[i],'checked');
        const copy = [...nums];
        copy.splice(i, 1);
        const twoSums = allTwoSum(copy, 0 - nums[i])?.map(twoSum => twoSum.map(ind => ind >= i ? ind + 1 : ind))
        const newResult = twoSums.length > 0 && twoSums.map(twoSum => [i, ...twoSum].map(ind => nums[ind]).sort((a, b) => a - b));
        if (newResult) {
            newResult.forEach(singleResult => {
                if (!results.some(result =>
                    result.every((num, index) => num === singleResult[index])
                )) {
                    results.push(singleResult)
                }
            })
        }
    }

    return results
};

var allTwoSum = function (nums: number[], target: number):number[][] {
    const numsHash = new Map()
    const results:number[][] = []
    for (let i = 0; i < nums.length; i++) {
        const lookup = target - nums[i];
        const lookupIndex = numsHash.get(lookup);
        if (lookupIndex != null)
            results.push([lookupIndex, i]);
        numsHash.set(nums[i], i);
    }

    return results;
};

const result = threeSum([0,0,0,0]);
console.log(result);
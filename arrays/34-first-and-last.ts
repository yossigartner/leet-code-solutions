/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums: number[], target: number) {
    let start = -1;
    let end = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (start === -1)
                start = i;
            end = i;
        }
    }

    return [start, end]

};


console.log(searchRange([1], 1))
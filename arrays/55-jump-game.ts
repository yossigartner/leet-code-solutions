/**
 * @param {number[]} nums
 * @return {boolean}
 */
// VERSION #1
/* var canJump = function (nums: number[]) {
    let result = true;
    if (nums.length === 1) return result;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (i === (nums.length - 1)) {
                result = canReachZero(i, nums)
            } else {
                result = canJumpOverZero(i, nums)
            }
            if (!result) return result
        }
    }

    return result;
};

function canJumpOverZero(zeroIndex: number, nums: number[]) {
    let runningIndex = zeroIndex;
    while (--runningIndex >= 0) {
        if (nums[runningIndex] > (zeroIndex - runningIndex)) {
            return true;
        }
    }

    return false;
}

function canReachZero(zeroIndex: number, nums: number[]) {
    let runningIndex = zeroIndex;
    while (--runningIndex >= 0) {
        if (nums[runningIndex] >= (zeroIndex - runningIndex)) {
            return true;
        }
    }

    return false;
} */

// VERSION #2
var canJump = function (nums: number[]) {
    if (nums.length === 1) return true;

    const steps = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (steps[i - 1] === 0)
            return false;
        steps.push(Math.max(steps[i - 1] - 1, nums[i]))
    }

    return true;
}

console.log(canJump([2, 0, 0]))
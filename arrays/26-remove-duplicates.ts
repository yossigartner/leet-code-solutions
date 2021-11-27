/**
 * @param {number[]} nums
 * @return {number}
 */
// VERSION #1 //////////////////////////////////////////////

/* const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums: number[]) {
    // Finding number of duplications
    let duplications = 0;
    nums.forEach((number, index) => {
        if (nums.indexOf(number) !== index)
            duplications++;
    })

    nums.forEach((number, index) => {
        const nextIndex = index + 1;
        if (number !== 999 && nextIndex < nums.length && number === nums[nextIndex])
            markDuplicates(nums, nextIndex, number);

    })

    const distinctValues = nums.filter(number => number !== 999);
    distinctValues.forEach((value, index) => {
        nums[index] = value;
    })

    return nums.length - duplications;
};

function markDuplicates(nums: number[], index: number, duplicatedNumber: number) {
    for (let i = index; i < nums.length; i++) {
        nums[i] === duplicatedNumber && (nums[i] = 999)
    }
}

removeDuplicates(nums);

console.log(nums) */

// VERSION #2 /////////////////////////////////////////////////////////

/* var removeDuplicates = function(nums:number[]) {
    let currentNumber = nums[0];
    let distinctIndex = 1;
    let numberOfDuplicaitons = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== currentNumber) {
            nums[distinctIndex] = nums[i];
            currentNumber = nums[i];
            distinctIndex++;
        } else {
            numberOfDuplicaitons++;
        }
    }

    return nums.length - numberOfDuplicaitons;
};

const nums = [0,0,1,2,3,4,4,5] 
const k = removeDuplicates(nums);

console.log(k)
console.log(nums); */

// VERSION #3 ////////////////////////////////////

var removeDuplicates = function(nums:number[]) {
    let nextIndex = 0;
    for(let i = 0; i < nums.length ; i++) {
        if(nums[i] !== nums[i + 1]) {
            nums[nextIndex] = nums[i];
            nextIndex++;
        }
    }

    return nextIndex;
};

const nums = [0,0,1,2,3,4,4,5] 
const k = removeDuplicates(nums);

console.log(k)
console.log(nums); 
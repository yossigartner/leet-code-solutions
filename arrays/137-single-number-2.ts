/**
 * @param {number[]} nums
 * @return {number}
 */
/*  var singleNumber = function(nums:number[]) {
    const counterHash = new Map();
    nums.forEach(number => {
        const currentCounter = counterHash.get(number);
        counterHash.set(number, currentCounter ? currentCounter + 1 : 1)
    })

    return Array.from(counterHash.entries())?.find(numberCounter => numberCounter[1] === 1)?.[0];
}; */

var singleNumberTwo = function (nums: number[]) {
    let singles = 0;
    let doubles = 0;

    for (let num of nums) {
        // Add to singles if it's not in doubles. Also remove from singles if it's in there
        singles = (~doubles) & (singles ^ num);
        // Add to doubles if it's not in singles. Also remove from doubles if it's in there
        doubles = (~singles) & (doubles ^ num);
    }

    return [singles, doubles];
};

console.log(singleNumberTwo([1, 1, 1, 2,2,5]))
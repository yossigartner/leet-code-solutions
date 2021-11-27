var singleNumber = function(nums:number[]) {
    const counterHash = new Map();
    nums.forEach(number => {
        const currentCounter = counterHash.get(number);
        counterHash.set(number, currentCounter ? currentCounter + 1 : 1)
    })

    return Array.from(counterHash.entries())?.find(numberCounter => numberCounter[1] === 1)?.[0];
};


console.log(singleNumber([4,1,2,1,2]))
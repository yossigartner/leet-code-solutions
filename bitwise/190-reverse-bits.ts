/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n:number) {
    let result = 0;
    for(let i =0; i< 32; i++) {
        const digit = n & 1;
        result |= digit << (31 - i)
        n = n >> 1;
    }
    
    return result>>>0;
};
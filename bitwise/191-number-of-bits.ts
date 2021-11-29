/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n:number) {
    let bitCounter = 0;
    for(let i = 0; i < 32; i++) {
        bitCounter += (n >>> i) & 1;
    }
    
    return bitCounter;
        
};
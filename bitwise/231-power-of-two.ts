/**
 * @param {number} n
 * @return {boolean}
 */
/* var isPowerOfTwo = function(n:number) {
   if(n < 0 ) return false;
   let countOnes = 0;
   for(let i = 0; i < 32; i++) {
       countOnes += n & 1;
       n = n >> 1;
   }
   
   return countOnes === 1;
}; */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n: number) {
    if (n <= 0) return false;

    return !(n & (n - 1))
};
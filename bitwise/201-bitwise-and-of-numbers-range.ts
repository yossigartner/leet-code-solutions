/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var rangeBitwiseAnd = function(left:number, right:number) {
    let mask = 2**(31);
    let res = 0;
    for(let i = 0; i < 32; i++) {
        const maskLeft = left & mask;
        const maskRight = right & mask;
        if(maskRight > maskLeft) return res;
        else res |= maskRight;
        mask = mask >>> 1;
    }
    return res;
};
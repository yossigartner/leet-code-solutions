/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a:string, b:string) {
    let carry = 0;
    let result = "";

    if(a.length > b.length) b = b.padStart(a.length,"0");
    else a = a.padStart(b.length,"0");
    console.log(a,b)
    for(let i = a.length - 1; i >= 0;i--) {
        const num1 = Number(a[i]);
        const num2 = Number(b[i]);
        const addResult = num1 ^ num2 ^ carry;
        result = String(addResult).concat(result);
        carry = (num1 & num2) | carry & (num1 | num2) 
    }
    
    if(carry) result = String(carry).concat(result);
    
    return result;
};
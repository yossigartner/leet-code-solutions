/**
 * @param {number[]} data
 * @return {boolean}
 */
 var validUtf8 = function(data:number[]) {
    const masks = [
        [0b10000000,0b00000000,0],
        [0b11100000,0b11000000,1],
        [0b11110000,0b11100000,2],
        [0b11111000,0b11110000,3]
    ]
    const single = [0b11000000,0b10000000];
    let nBytes = 0;
    
    for(let i = 0; i < data.length; i++) {
        if(nBytes === 0) {
            const mask = masks.find(mask => (mask[0] & data[i]) === mask[1]);
            if(!mask || mask[2] >= (data.length - i)) return false;
            nBytes = mask[2];
        } else {
            nBytes--;
            if((single[0] & data[i]) !== single[1]) return false;
        }
    }
    return true;
};
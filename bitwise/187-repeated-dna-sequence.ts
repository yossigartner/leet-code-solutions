/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s:string) {
    const map = new Map();
    const repeated = [];
    for(let i =0; i<= s.length - 10;i++) {
        const sub = s.substr(i,10);
        map.set(sub,(map.get(sub) || 0) + 1);
        if(map.get(sub) === 2) repeated.push(sub);
    }
    
    return repeated;
};
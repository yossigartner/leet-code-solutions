/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected:number[][]) {
    const visited = new Map();
    let count = 0;
    var dfs = (city:number) => {
    if(visited.has(city)) return;
    visited.set(city,true);
    for(let i = 0; i < isConnected.length;i++) {
        if(isConnected[city][i] === 1) {
            dfs(i);
        }
    }
    }
    for(let i =0; i< isConnected.length;i++) {
        if(!visited.has(i)) {
            count++;
            dfs(i);
        }
    }
    
    return count;
};
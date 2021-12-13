/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m:number, n:number,visited:any = {}):number {
    if(visited[m+','+n]) return visited[m+','+n];
    if(m === 1 || n === 1) return 1;
    const paths = uniquePaths(m - 1, n,visited) + uniquePaths(m,n-1,visited);
    visited[m+','+n] = paths;
    return paths;
};

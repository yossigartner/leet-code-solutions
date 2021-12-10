/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
 var nearestExit = function(maze:string[][], entrance:number[]) {
    const rows = maze.length;
    const cols = maze[0].length;
    const stepsQueue = [];
    stepsQueue.unshift([entrance,0]);
    while(stepsQueue.length > 0) {
        const currentLocation:any = stepsQueue.pop();
        maze[currentLocation[0][0]][currentLocation[0][1]] = '+';
        const neighbours = getNeighbours(maze,currentLocation[0]);
        for(let neighbour of neighbours) {
            if(isExit(rows,cols,neighbour)) return currentLocation[1] + 1;
            maze[neighbour[0]][neighbour[1]] = '+'
        }
        stepsQueue.unshift(...(neighbours.map(it=>[it,currentLocation[1]+1])));
    }
    
    return -1;
};

function isExit(rows:number,cols:number,location:number[]) {
    return location[0] === 0 || location [0] === (rows - 1) || location[1] === 0 || location[1] === (cols - 1)
}

function getNeighbours(maze:string[][], location:number[]) {
    const neighbours:number[][] = [];
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    dirs.forEach(dir => {
        const newRow = location[0] + dir[0];
        const newCol = location[1] + dir[1];
        if(newRow >= maze.length || newRow < 0 || newCol >=maze[0].length || newCol < 0) return;
        if(maze[newRow][newCol] === '+') return;
        neighbours.push([newRow, newCol]);    
    })
    
    return neighbours
}
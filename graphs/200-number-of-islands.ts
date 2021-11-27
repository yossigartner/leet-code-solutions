/* var numIslands = function (grid: string[][]) {
    const visitMap = new Map();
    let islands = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1" && !visitMap.get(`${row},${col}`)) {
                dfs(grid, row, col, visitMap);
                islands++;
            }
        }
    }

    return islands;
};

function dfs(grid: string[][], row: number, col: number, visitMap: Map<any, any>) {
    const neighbors: number[][] = getNeighbors(grid, row, col)
    neighbors.forEach(neighbor => {
        if (!visitMap.get(`${neighbor[0]},${neighbor[1]}`)) {
            visitMap.set(`${neighbor[0]},${neighbor[1]}`, true)
            dfs(grid, neighbor[0], neighbor[1], visitMap)
        }
    })
}

function getNeighbors(grid: string[][], row: number, col: number) {
    const neighbors: number[][] = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (let i = 0; i < directions.length; i++) {
        const newRow = row + directions[i][0];
        const newCol = col + directions[i][1];
        if (newRow < grid.length &&
            newRow >= 0 &&
            newCol < grid[row].length &&
            newCol >= 0 &&
            grid[newRow][newCol] === "1") {
            neighbors.push([newRow, newCol])
        }
    }
    return neighbors;
} */

// VERSION 2
var maxRow: number; var maxCol: number;
var numIslands = function (grid: string[][]) {
    let islands = 0;
    maxRow = grid.length;
    maxCol = grid[0].length;
    for (let row = 0; row < maxRow; row++) {
        for (let col = 0; col < maxCol; col++) {
            if (grid[row][col] === "1") {
                dfs(grid, row, col);
                islands++;
            }
        }
    }

    return islands;
};

function dfs(grid: string[][], row: number, col: number) {
    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol || grid[row][col] === "0") {
        return;
    }

    grid[row][col] = "0";

    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);


}

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid));
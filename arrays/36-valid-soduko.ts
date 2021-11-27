/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board: string[][]) {
    let result = true;
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            result = result && checkSubBox(i, 0, board) && checkSubBox(i, 3, board) && checkSubBox(i, 6, board);
        }
        result = result && checkRow(i, board) && checkColumn(i, board)
    }

    return result;
};

function checkSubBox(row: number, column: number, board: string[][]) {
    const numbersSet = new Set();
    let numberOfItems = 0;
    for (let i = row; i < (row + 3); i++) {
        for (let j = column; j < (column + 3); j++) {
            if (board[i][j] !== '.') {
                numberOfItems++;
                numbersSet.add(board[i][j])
            }
        }
    }

    return Array.from(numbersSet).length === numberOfItems
}

function checkRow(row: number, board: string[][]) {
    const numbersSet = new Set();
    let numberOfItems = 0;
    board[row].forEach(item => {
        if (item !== '.') {
            numbersSet.add(item);
            numberOfItems++;
        }
    })

    return Array.from(numbersSet).length === numberOfItems;
}

function checkColumn(column: number, board: string[][]) {
    const numbersSet = new Set();
    let numberOfItems = 0;
    board.forEach(row => {
        if (row[column] !== '.') {
            numbersSet.add(row[column])
            numberOfItems++;
        }
    })

    return Array.from(numbersSet).length === numberOfItems;
}

const board =
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


console.log(isValidSudoku(board));
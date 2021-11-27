var lengthLongestPath = function (input: string): number {
    const dirStack: number[] = [];
    let index = 0;
    let currentLevel = 0;
    let totalLength = 0;
    let maxPath = 0;
    while (index < input.length) {
        const nextItem = getNextItem(input, index);
        const nextItemLen = nextItem.length;
        const nextLevel = determineNextItemLevel(input, index + nextItemLen);
        if (nextItem.includes(".")) {
            maxPath = Math.max(maxPath, totalLength + nextItemLen)
        }
        if (nextLevel > currentLevel) {
            dirStack.push(nextItemLen);
            totalLength += nextItemLen + 1;
        } else {
            for (let i = 0; i < currentLevel - nextLevel; i++) {
                totalLength -= (dirStack.pop() || 0) + 1
            }
        }
        index += nextItemLen + nextLevel + 1;
        currentLevel = nextLevel;
    }
    return maxPath;
};

function findNextSeparator(input: string, index: number) {
    const nextItemIndex = input.slice(index).search('\n')
    return nextItemIndex === -1 ? input.length : nextItemIndex + index
}

function getNextItem(input: string, index: number) {
    return input.slice(index, findNextSeparator(input, index))
}

function determineNextItemLevel(input: string, index: number) {
    let tabCounter = 0;
    while (input[index + 1 + tabCounter] === "\t") {
        tabCounter++;
    }
    return tabCounter;
}

console.log(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt"))
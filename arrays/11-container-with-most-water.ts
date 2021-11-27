/**
 * @param {number[]} height
 * @return {number}
 */

// VERSION #1

/* var maxArea = function (height: number[]) {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = i; j < height.length; j++) {
            maxArea = Math.max(Math.min(height[i],height[j]) * (j - i),maxArea)
        }
    }
    return maxArea;
};
 */

// VERSION #2

var maxArea = function (height: number[]) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let maxArea = 0
    while (leftIndex !== rightIndex) {
        maxArea =  Math.max(maxArea,Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex));
        height[leftIndex] >= height[rightIndex] ? rightIndex -= 1 : leftIndex += 1;
    }

    return maxArea;
};

const input = [1, 1, 1, 5, 1, 10, 1];
console.log(maxArea(input))
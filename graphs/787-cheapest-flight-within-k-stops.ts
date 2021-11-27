/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

// NOT GOOD SOLUTION, NEED TO USE BELLMAN-FORD OR ANY OTHER FIND-SHORTEST-PATH ALGO IN A WEIGHTED DIAGRAPH 
var findCheapestPrice = function (n: number, flights: number[][], src: number, dst: number, k: number) {
    const flightMap = new Map();
    flights.forEach(flight => {
        if (flightMap.has(flight[0])) {
            flightMap.get(flight[0]).push([flight[1], flight[2]])
        } else {
            flightMap.set(flight[0], [[flight[1], flight[2]]])
        }
    })

    const destinationExist = flights.some(flight => flight[1] === dst);
    const sourceExist = flights.some(flight => flight[0] === src);
    if (!sourceExist || !destinationExist) return -1;

    function find(map: Map<number, number[][]>, src: number, dst: number, k: number, acc: number, min: number) {
        if (src == dst) return acc;
        if (acc > min || k < 0) return Infinity;
        const srcMap = map.get(src);
        if (!srcMap) return Infinity;
        for (let i = 0; i < srcMap.length; i++) {
            min = Math.min(min, find(map, srcMap[i][0], dst, k - 1, acc + srcMap[i][1], min))
        }

        return min;

    }

    const result = find(flightMap, src, dst, k, 0, Infinity)
    return result === Infinity ? -1 : result
};
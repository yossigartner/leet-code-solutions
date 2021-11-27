var networkDelayTime = function (times: number[][], n: number, k: number) {
    const graph = new Map();
    for (let i = 0; i < times.length; i++) {
        if (!graph.has(times[i][0])) graph.set(times[i][0], []);
        graph.get(times[i][0]).push([times[i][1], times[i][2]]);
    }
    const dist = new Array(n).fill(Infinity);
    dist[k - 1] = 0;
    const q = Array.from(Array(n).keys());

    while (q.length > 0) {
        const min = findMinimum(q,dist);
        const val = q[min];
        q.splice(min, 1);
        if (graph.has(val + 1)) {
            graph.get(val + 1).forEach((w: any) => {
                if (dist[val] + w[1] < dist[w[0] - 1]) {
                    dist[w[0] - 1] = dist[val] + w[1];
                }
            })
        }
    }

    const maxDelayTime = Math.max(...dist);
    return maxDelayTime === Infinity ? -1 : maxDelayTime;
};

function findMinimum(q: number[], dist: number[]):number {
    let minimumIndex = -1;
    let minimumNumber = Infinity;
    q.forEach((number, index) => {
        if (dist[number] < minimumNumber) {
            minimumNumber = dist[number]
            minimumIndex = index;
        }
    })

    return minimumIndex
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
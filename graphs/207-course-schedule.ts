var canFinish = function (numCourses: number, prerequisites: number[][]): boolean {
    const coursesMap = new Map<number, number[]>();
    const visited = new Map<string, boolean>();
    prerequisites.forEach(pre => {
        const coursePrerequisites = coursesMap.get(pre[0]) || [];
        coursePrerequisites.push(pre[1]);
        coursesMap.set(pre[0], coursePrerequisites)
    })
    let isLoop = false;
    for (let i = 0; i < numCourses; i++) {
        isLoop = isLoop || findLoop(i, coursesMap, [], visited)
    }

    return !isLoop;
};

function findLoop(currentCourse: number, coursesMap: Map<number, number[]>, path: number[], visited: Map<string, boolean>): boolean {
    if (path.indexOf(currentCourse) !== -1) {
        return true;
    }
    path.push(currentCourse);
    return coursesMap.get(currentCourse)?.some(course => {
        const isLoop = visited.get(`${currentCourse},${course}`) ? false : findLoop(course, coursesMap, path, visited)
        visited.set(`${currentCourse},${course}`, true);
        path.pop();
        return isLoop
    }) || false

}

console.log(canFinish(8, [[1, 0], [2, 6], [1, 7], [6, 4], [7, 0], [0, 5]]))

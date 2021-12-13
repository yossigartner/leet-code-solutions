/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function (s:string):string[][] {
    if (s.length === 0) return [];
    if (s.length === 1) return [[s]];
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const prefix = s.substring(0, i + 1);
        const suffix = s.substring(i + 1, s.length);
        if (isPolindrom(prefix)) {
            if (suffix.length) {
                const partitions = partition(suffix);
                if (partitions) {
                    partitions?.forEach(part => part.unshift(prefix));
                    result.push(...partitions);
                }
            } else {
                result.push([prefix])
            }
        }
    }
    return result;
};

function isPolindrom(s:string):boolean {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }

    return true;
}
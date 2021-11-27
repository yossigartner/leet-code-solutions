class NestedInteger {
    constructor(num?: number) {

    }
    add(element: NestedInteger | undefined) { };
    setInteger(number: number) { };
}
/* var deserialize = function (s: string) {
    let i = 0;
    const q: NestedInteger[] = [];
    while (i < s.length) {
        const nested = new NestedInteger();
        switch (s[i]) {
            case "[": {
                q.push(nested);
                break;
            }
            case "]": {
                const child = q.pop();
                const parent = q.pop();
                if (parent) {
                    parent.add(child);
                    q.push(parent);
                } else {
                    return child
                }
                break;
            }
            case ",": {
                break;
            }
            default: {
                let num = 0;
                const isNegative = s[i] === "-";
                if (isNegative) i++;
                while (s[i] !== "," && s[i] !== "]" && i < s.length) {
                    num *= 10;
                    num += Number(s[i])
                    i++;
                }
                num = isNegative ? num * -1 : num;
                nested.setInteger(num);
                const parent = q.pop();
                if (parent) {
                    parent.add(nested);
                    q.push(parent);
                } else {
                    return nested;
                }
                if (s[i] === "]") {
                    const child = q.pop();
                    const parent = q.pop();
                    if (parent) {
                        parent.add(child);
                        q.push(parent);
                    } else {
                        return child
                    }
                }
            }
        }
        i++;
    }

}; */

var deserialize = function (s: string) {
    const parsed = JSON.parse(s);
    return helper(parsed);

}

function helper(parsed: any | number) {
    if (Array.isArray(parsed)) {
        const nested = new NestedInteger();
        for (let item of parsed) {
            let result = helper(item);
            nested.add(result);
        }
        return nested;
    } else {
        return new NestedInteger(parsed);
    }
}
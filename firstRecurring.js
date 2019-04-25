const firstRecurring = (input) => {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] != undefined) {
            return input[i];
        }
        else {
            map[input[i]] = i;
        }
    }
    return undefined;
}

console.log(firstRecurring([2,5,3,2,6,7]));
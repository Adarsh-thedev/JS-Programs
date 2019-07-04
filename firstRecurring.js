//Given an array --> find the first recurring character
// ex :- [2,5,1,2,3,5,1,2,4] should return 2
// [2,1,1,2,3,5,] --> 1
// [2,3,4,5]  --> undefined

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
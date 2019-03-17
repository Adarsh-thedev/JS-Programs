// A program to log all pairs of an array
const printPair=(array)=>{
    array.forEach(element => {
        array.forEach(element2=>{
            console.log(element,element2);
        });
    });
}
//nested loops, so the complexity of this program is O(n*n)=O(n^2) 

const array1=['a','b','c','d','e'];
printPair(array1);
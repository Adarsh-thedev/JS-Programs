//Given two arrays, create a function that let the user know wether these two arrays contain any common item
//eg ->  const arr1=['a','b','c','d','x'];          const arr2=['x','y','z']; should return true
// const arr1=['a','b','c','d','e'];          const arr2=['x','y','z']; should return false


const containsCommonItems=(array1,array2)=>{
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i]==array2[j]){
                return true;
            }
        }
    }
    return false;
}

const arr1=['a','b','c','d','x'];
const arr2=['x','y','z'];
console.log(containsCommonItems(arr1,arr2));

//complexity of this program is O(axb) -> two separate arrays
// so this may not be the best solution. 
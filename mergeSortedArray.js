const mergeSortedArrays = (array1,array2) => {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i=1;
    let j=1;
    while(array1Item || array2Item){
       if(!array2Item || array1Item < array2Item){ // !array2Item -> if no item in array2 then it turns it into true
           mergedArray.push(array1Item);
           array1Item = array1[i];
           i++;
       }
       else{
           mergedArray.push(array2Item);
           array2Item = array2[j];
           j++;
       }
    }
    return mergedArray;
}

const Array1 = [1,4,6,7,9];
const Array2 = [2,4,7,8,10];
console.log(mergeSortedArrays(Array1,Array2));
// A function to find if sum of any two elements in an array is equals to a number entered by user

// for example ->
//                        [2,3,4,1,5] , will return true as the array contains 3&5 and 3+5=8
//                        [2,3,4,1] , 8 will return false as there are no two numbers whose sum == 8

const isSumInArray = (array,sumToBeFound) => {
    obj = {};
    let complement;
    for(let i=0; i<array.length; i++){
      complement = sumToBeFound - array[i];
      obj[i] = complement;  //store complements(sum to be found - element in array) of array in an object 
      if(complement in obj){  //checks if element is in object of complements or not
        return true;
      }
    }
  //console.log(obj);
  return false;
  }

// Complexity of  this program is O(n)
// It will require some additional space , space complexity of this program is O(n)
  
console.log(isSumInArray([2,3,4,1],8));
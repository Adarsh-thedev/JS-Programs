// A function to find if sum of any two elements in an array is equals to a number entered by user
// assuming that  the array is sorted
// for example ->
//                        [2,3,4,5] , will return true as the array contains 3&5 and 3+5=8
//                        [2,3,4,7] , 8 will return false as there are no two numbers whose sum == 8
const isSumInArray = (array) =>{
    let i = 0;
    let j = array.length - 1;
    while(i<j){
      //console.log(array[i]+array[j]);
      if(array[i] + array[j] == 8){
        return true;
      }
      else if(array[i] + array[j] < 8){
        i++;
      }
      else{
        j--;
      }
    }
    return false;
  }

//This is the best solution when array is sorted as the time complexity is O(n) and no extra space/memory is required
  // If array is unsorted, refer to another solution in this folder
  
  console.log(isSumInArray([2,3,4,5]));

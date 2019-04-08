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
  
  console.log(isSumInArray([2,3,4,5]));
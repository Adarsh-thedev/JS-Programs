//Given two arrays, create a function that let the user know wether these two arrays contain any common item
//eg ->  const arr1=['a','b','c','d','x'];          const arr2=['x','y','z']; should return true
// const arr1=['a','b','c','d','e'];          const arr2=['x','y','z']; should return flase
 
//in this approach :-
//  => loop through first array and create object where properties = items in array
const containsCOmmonItems=(array1,array2)=>{
    obj ={};
    for(i=0; i<array1.length; i++){
        if(!obj[array1[i]]){
          let item= array1[i];
          obj[item]=true;
        }
    }

// => loop through the second array and check if item in second array exists in created object

    for(let j=0; j<array2.length; j++){
        if(obj[array2[j]]){
            return true;
        }
    }
    return false;
}

const arr1=['a','b','c','d','x'];
const arr11=['a','b','c','d','e'];
const arr2=['x','y','z'];

console.log(containsCOmmonItems(arr1,arr2));

// there are two loops(not nested) of two arrays so:-
// complexity of this program is O(a+b);



const reverse=(str)=>{
    if(!str || str.length<2 || typeof str != 'string'){
       return 'Invalid input';
     }
   let reversed = [];
   let noOfItems = str.length - 1;
   for(let i=noOfItems; i>=0; i--){
     reversed.push(str[i]);
   }
   return reversed.join('');
 }
 
 console.log(reverse('Hello there!!'));
//A script to send connection requests to n number of people according to user's input
var sendRequests=(num)=>{
    var x = document.getElementsByClassName('js-discover-person-card__action-btn'); 
//stores all popped up connections in an array(saves the number of connect buttons)
for(var i=0; i<num; i++){
    x[i].click(); //  clicks the connect button
    }
}


// to run the script -> 1. Open LinkedIn and go to the browser console
//                           -> 2. Copy and paste the program and press enter
//                           -> 3. type    sendRequests(no of people you want to send reqest)


// A function to like multiple instagram posts at same time

function likePosts (num) {
    var likeButton = document.querySelectorAll('.glyphsSpriteHeart__outline__24__grey_9');
    //Stores all the like buttons in an array

    for(var i =0; i<num; i++) {
        likeButton[i].click(2); // clicks the buttons
    }
}

// to run the script         -> 1. Open Instagram and login
//                           -> 2. Copy and paste the program and press enter
//                           -> 3. type    likePosts(no of posts you want to like)
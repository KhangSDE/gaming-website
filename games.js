// SCROLL UP FUNCTION
var scrollUp = document.getElementById("scroll-up");
scrollUp.addEventListener("click", function() {
    window.scrollBy({top: -100000, behavior: "smooth"});
    
});
// SEARCH BAR FUNCTION
var searchInput = document.getElementById("searchInput");
var text = ["fortnite", "minecraft"];

searchInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13 && text.indexOf(searchInput.value) > -1) {
         
            alert("fortnite");
            searchInput.value = "";
        }
    }
);

// LIKING FUNCTION

var likeStatus = false;
var like = document.getElementsByClassName("like-filter");
let likeAudio = new Audio("the-notification-email-143029.mp3");

for (var i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function() {
        this.classList.toggle("like-active");
        likeAudio.play();
    })
}

// SORT OF LIKE
var likeSort = document.getElementById("liked-sort");
var addToLike = false;
var likee = document.querySelectorAll(".like-filter");
var containerGamesSort = document.getElementsByClassName("container-games");
let likeSortClicked = false;

likeSort.addEventListener("click", function() {
    

    
    if(likeSortClicked === false) {
        
        likeSortClicked = true;
        
        for (var i = 0; i < containerGamesSort.length; i++) {
            var likeFilter = containerGamesSort[i].querySelector(".like-filter");
            if (likeFilter.classList.contains("like-active")) {
            containerGamesSort[i].style.visibility = "visible";
            } else {
            containerGamesSort[i].style.display = "none";
            }
        }
        
    }
    else if (likeSortClicked === true) {
        
        // location.reload("games.html", "_self");
        for(var i = 0; i < containerGamesSort.length; i++) {
            if(likeFilter.classList.contains("like-active")) {
                likeFilter.classList.remove("like-active");
            }
            
        }
        
        likeSortClicked = false;
    }

})

// SORT OF ADD
let addSort = document.getElementById("added-sort");
let sortActive = false;

addSort.addEventListener("click", function() {
    
    
    if(sortActive === false ) {
        for(var i = 0; i < containerGamesSort.length; i++) {
            let likeAdd = containerGamesSort[i].querySelector(".addToList");
                if(likeAdd.classList.contains("add-active")) {
                    containerGamesSort[i].style.visibility = "visible";
                    
                }
                else {
                    containerGamesSort[i].style.display = "none"
                }
        }
    }
})

// CONTROLLER BACK TO GAMES
let backToGames = document.getElementById("played-sort");
backToGames.addEventListener("click", backTo);

function backTo() {
    location.reload("games.html");

} 

// SCROLLING TO CONTACT ME SITE
var contactMe = document.getElementById("contactMe");
contactMe.addEventListener("click", function() {
    window.scrollBy({top:10000, left: 0, behavior: "smooth"});
});







// ADDING GAMES TO LIST
  
var addToList = document.getElementsByClassName("addToList");
var listAdd = document.getElementById("list-add")
var addToListStatus = false;

for(var i = 0; i < addToList.length; i++) {
    addToList[i].addEventListener("click", function() {
        this.classList.toggle("add-active");
        if(this.classList.contains("add-active")) {
            var gameName = this.closest(".container-games").querySelector("p").innerHTML;
            listAdd.innerHTML = gameName + " wurde hinzugefügt";
            animateList();

        }
            

    })
}


var listAnimation = document.getElementById("list-animation");

function animateList() {
    listAnimation.classList.add("show");
    setTimeout(function() {
        listAnimation.classList.remove("show"); 
    }, 1000 )
    } 
 
// LOGIN FEATURES

var email = document.getElementsByClassName("emailInput");
var message = document.getElementById("message");


for(var i = 0; i < email.length; i++) {
    email[i].addEventListener("keyup", function(event) {
    
    if(event.keyCode === 13) {
        
        var emailValue = this.value;

        if(emailValue.includes("@")) {
            message.focus();
        }
        else {
            alert("please enter a valid E-Mail");
        }

    }
})

}

message.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        message.blur();
    }
})

// RANK BEWERTUNG STARS


const containers = document.querySelectorAll(".container-games");

containers.forEach((container) => {

const stars = container.querySelectorAll(".stars img");
const starWrapper = container.querySelector(".stars");
let starAudio = new Audio("mixkit-retro-game-notification-212.wav");

stars.forEach((star, clickedIdx) => {
    star.addEventListener("click", () => {
        starAudio.play();
     //   starWrapper.classList.add("disabled");
        stars.forEach((otherStar, otherIdx) => {
            if(otherIdx <= clickedIdx) {
                otherStar.classList.add("active");

            } else {
                otherStar.classList.remove("active");
            }
        })
        
        console.log(`star of index ${clickedIdx + 1} was clicked`);
        
    });
    
});
});



// ADD A NEW GAME

let gamesDiv = document.querySelector(".content-games")
let addCount = 0;
let stopAnim = document.getElementById("stop-add");
let gameAdd = document.querySelector(".add-game");
let addNewGame = document.getElementById("test22");

addNewGame.addEventListener("click", function() {
    let starAudio1 = new Audio("mixkit-retro-game-notification-212.wav");

 
    if(addCount < 4) {

    
        let newGame = document.createElement("div");
        newGame.classList.add("container-games");
        
        
        
                // ADD IMAGE
                let newImage = document.createElement("div");
                newImage.classList.add("game-image");
                // newImage.style.left = "150px";
        
                let appendImage = document.createElement("img");
                appendImage.src ="https://pbs.twimg.com/media/FRwCYsxXIAMqqU5.jpg:large";
                
        
                newImage.appendChild(appendImage);
                //
        
        
        
        
        
        let gameTitle = document.createElement("p");
        gameTitle.textContent = "test";
        // ADDING LIKE
        let likeAddNew = document.createElement("div");
        likeAddNew.classList.add("like");
        var likeImage = document.createElement("img");
        likeImage.classList.add("like-filter");
        likeImage.src ="images/heart (1).png";

        likeAddNew.appendChild(likeImage);

        // ADDING ADD 
        let addNew = document.createElement("div");
        addNew.classList.add("add-list");
        let addImage = document.createElement("img");
        addImage.classList.add("addToList");
        addImage.src = "images/add-button.png";

        addNew.appendChild(addImage);

        // ADD STARS
        let newStars = document.createElement("div");
        newStars.classList.add("stars");

        let starCount = 0;
        for(starCount = 0; starCount < 5; starCount++) {
            let starsImage = document.createElement("img");
            starsImage.src = "images/star.png";
            newStars.appendChild(starsImage);
        }

        
        
        //



        // gamesDiv.appendChild(newGame);
        gamesDiv.insertBefore(newGame, addNewGame);
        newGame.appendChild(newImage);
        newGame.appendChild(gameTitle);
        newGame.appendChild(likeAddNew);
        newGame.appendChild(addNew);
        newGame.appendChild(newStars);
        
        addCount++;


        // NEW ADDED LIKE FUNCTION
        for (var i = 0; i < like.length; i++) {
            like[i].addEventListener("click", function() {
                this.classList.toggle("like-active");
            })
        }

        // NEW ADD FUNCTION
    
       
        //

        // STARS FUNCTION
        const containers = document.querySelectorAll(".container-games");

        containers.forEach((container) => {
        
        const stars = container.querySelectorAll(".stars img");
        const starWrapper = container.querySelector(".stars");
        
        stars.forEach((star, clickedIdx) => {
            star.addEventListener("click", () => {
                starAudio1.play();
             //   starWrapper.classList.add("disabled");
                stars.forEach((otherStar, otherIdx) => {
                    if(otherIdx <= clickedIdx) {
                        otherStar.classList.add("active");
        
                    } else {
                        otherStar.classList.remove("active");
                    }
                })
                
                console.log(`star of index ${clickedIdx + 1} was clicked`);
                
            });
            
        });
        });
        //

    }
    if(addCount === 4) {
        

        function animateStop() {
            stopAnim.classList.add("show");
            setTimeout(function() {
                stopAnim.classList.remove("show"); 
            }, 1000 )
            } 

        animateStop();

    }
})










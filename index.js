var searchInput = document.getElementById("searchInput");
var text = ["fortnite", "minecraft"];

searchInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13 && text.indexOf(searchInput.value) > -1) {
         
            alert("fortnite");
            searchInput.value = "";
        }
    }
)

var spiderman = document.getElementById("spiderman-image");

spiderman.addEventListener("click", function() {
    window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
})

var scrollUp = document.getElementById("scroll-up");
scrollUp.addEventListener("click", function() {
    window.scrollBy({top: -100000, behavior: "smooth"});
    
})

var contactMe = document.getElementById("contactMe");
contactMe.addEventListener("click", function() {
    window.scrollBy({top:10000, left: 0, behavior: "smooth"});
});
""
// LOGIN

var username = document.getElementById("usernameLogin");
var password = document.getElementById("passwordLogin");
var login = document.getElementsByClassName("loginButton");



username.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        username.style.backgroundColor = "rgb(230,45,41)";
        this.style.color = "white";
        password.focus();
    }
})

password.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        this.style.backgroundColor = "rgb(230,45,41)";
        this.style.color = "white";
        password.blur();
        loginClicked();
    }
})

// LOGIN BUTTON



let loginData = [{
    user: "Khang",
    passwordArray: 1234
}, {
    user: "test1234",
    passwordArray: 1234
}];

let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function() {
    
    loginClicked();
})



function loginClicked() {
    
    let usernameValue = username.value;
    let passwordValue = password.value;

    
    let foundUser = loginData.find((data) => data.user === usernameValue && data.passwordArray === Number(passwordValue));
    
    if (foundUser) {
        
        username.style.backgroundColor = "rgb(230,45,41)";
        password.style.backgroundColor = "rgb(230,45,41)";
        username.style.color = "white";
        password.style.color = "white";
        
        alert("succesfully logged in")
    }
    else {
        
        username.style.backgroundColor = "white";
        password.style.backgroundColor = "white";
        username.style.color = "black";
        password.style.color = "black";
        alert("try again");
    }
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


// ABOUT SCROLL

let about = document.getElementById("about");
about.addEventListener("click", function() {
    window.scrollBy({top: 800, behavior: "smooth"});
});
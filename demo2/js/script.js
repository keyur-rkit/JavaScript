// function to make sound 
function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("../sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("../sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("../sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("../sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("../sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("../sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("../sounds/snare.mp3");
            snare.play();
            break;

        default:
            break;
    }
}

// function to give animation to pressed button
function buttonAnimation(key) {
    let currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");

    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 100);
}

// click event on all buttons
let numberOfDrums = document.querySelectorAll(".drum").length;
for (let i=0 ; i< numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// keydown event on whole body or webpage
document.body.addEventListener("keydown",
    function (event) {
        let key = event.key;
        makeSound(key);
        buttonAnimation(key);
    }
)

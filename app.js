
// --------------------------- DETECTING BUTTON PRESS ----------------------------- //

// Create a variable and specify the selector 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Create a for loop with var to iterate 
for (var i = 0; i < numberOfDrumButtons; i++) {
    // Apply eventlistener
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {  
        // Create a variable for the innerHTML of the buttons 
        var buttonInnerHTML = this.innerHTML;
        // Call the function to play a relevant sound on click 
        makeSound(buttonInnerHTML);
        // Call the funtion to animate button on click 
        buttonAnimation(buttonInnerHTML);
        });
    }

// --------------------------- DETECTING KEYBOARD PRESS ---------------------------- //

    // The keypress event listener is applied to the entire document. 
    // Parameter "event" is passed to tap into the event that triggered the event listener.
    document.addEventListener("keydown", function(event) {
        // Call the function to play a relevant sound on keydown
        makeSound(event.key);
        // Call the function to animate the button on keydown 
        buttonAnimation(event.key);
    });

    // Function will make relevant sound according to which key is pressed 
    function makeSound(key) {
        switch (key) {
            // Plays crash sound on click w button 
            case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            // Plays kick-bass sound on click a button
            case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
            // Plays snare sound on click s button
            case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            // Plays tom-1 sound on click d button
            case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            // Plays tom-2 sound on click j button 
            case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            // Plays tom-3 sound on click k button 
            case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            // Plays tom-4 sound on click l button 
            case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            // Default 
            default:
            console.log(buttonInnerHTML);
        }
    }
    //Create a function to animate the buttons when pressed
    function buttonAnimation (currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        // Add the class pressed to the activeButton 
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed")
        }, 100);
    }

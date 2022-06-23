
// Checking for which button is pressed (Event listener ONLY added to querySelector "button")

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {
    const buttonPressed = this.innerHTML;
    makeSound(buttonPressed);

    buttonAnimation(buttonPressed);

  });
}

// Checking for which keyboard letter is pressed

document.addEventListener("keydown", function(event) {  // Event listener added to whole document (page), not a querySelector
  makeSound(event.key);

  buttonAnimation(event.key);

});


// Function to cover both keyboard inputs and mouse clicks on innerHTML of buttons

function makeSound(key) {

  switch (key) {
    case "w":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "a":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
  
    default: ""; // Purposefully left blank so as not to cause issues when other keyboard inputs made
  }    
}


function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
   
  }, 200);
}



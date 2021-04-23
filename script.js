// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");

// TODO: Replace with your own emoji
let currentEmoji = "🐳";
let painting = false;

// Detect the moment we press the mouse down on the canvas div
canvas.addEventListener("mousedown", function (event) {
  console.log("This is the mousedown event");
  console.log(event);
  painting = true;

  // Create a new emoji div on the page and set it equal to your desired emoji
  let newEmoji = document.createElement("div");
  newEmoji.classList.add("emoji");
  newEmoji.innerHTML = currentEmoji;

  // Set the style of that position so that it goes where you just pressed your mouse down
  newEmoji.style.left = event.pageX + "px";
  newEmoji.style.top = event.pageY + "px";

  // Add that emoji to the canvas element so that it appears on the screen
  canvas.appendChild(newEmoji);
})

// TODO: Add functionality that makes it so the emoji "paints" when you hold your mouse down and move it on the screen
canvas.addEventListener("mouseup", function (event){
painting = false;

});

canvas.addEventListener("mousemove", function (event) {
  console.log("This is the mousemove event");
  console.log(event);

if (painting){

    let newEmoji = document.createElement("div");
    newEmoji.classList.add("emoji");
    newEmoji.innerHTML = currentEmoji;

    newEmoji.style.left = event.pageX + "px";
    newEmoji.style.top = event.pageY + "px";

    canvas.appendChild(newEmoji);
    }

    });




// TODO: Add functionality so when you hit the "Backspace" key, the contents of the canvas clears

const emojis = ["🐙", "🐠", "🦭", "🐬", "🐡"];

 function changeEmoji(){
    currentEmoji = emojis[Math.floor
  (Math.random() * emojis.length)]; 
  }

  
document.addEventListener("keydown", function(event){

 console.log("This is the keydown event");


  if(event.keyCode === 8){
    event.preventDefault();
    location.reload();



  }

  if(event.key == "e"){
  changeEmoji();
  }

  })


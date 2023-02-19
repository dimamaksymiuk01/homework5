"use strict"; 


function playMusic() {
  let audio = document.getElementById("myAudio");
  audio.play();
}

let playButton = document.getElementById("playButton");
playButton.addEventListener("click", playMusic);
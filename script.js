// Write your script here

document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.getElementById("buttons");
  
  function playAudio(className) {
    const audio = document.querySelector(`audio.${className}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  buttonsContainer.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("btn")) {
      playAudio(target.classList[1]); // Assuming the second class is the sound class.
    } else if (target.classList.contains("stop")) {
      document.querySelectorAll("audio").forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  });
});

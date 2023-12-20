// Write your script here

document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.getElementById("buttons");

  const audioFiles = {
    applause: "sounds/applause.mp3",
    boo: "sounds/boo.mp3",
    gasp: "sounds/gasp.mp3",
    tada: "sounds/tada.mp3",
    victory: "sounds/victory.mp3",
    wrong: "sounds/wrong.mp3",
  };

  // Function to play audio
  function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
  }

  // Event listener for button clicks
  buttonsContainer.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("btn")) {
      const soundName = target.textContent.toLowerCase();
      const audioSrc = audioFiles[soundName];

      if (audioSrc) {
        playAudio(audioSrc);
      }
    } else if (target.classList.contains("stop")) {
      // Stop all currently playing audio
      document.querySelectorAll("audio").forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  });
});

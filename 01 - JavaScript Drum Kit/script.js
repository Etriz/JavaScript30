function playSound() {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.add("playing");
  key.addEventListener("transitionend", function() {
    key.classList.remove("playing");
  });
}

window.addEventListener("keydown", playSound);

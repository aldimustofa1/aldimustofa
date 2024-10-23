// Get background music element and mute button
const backgroundMusic = document.getElementById("background-music");
const muteBtn = document.getElementById("mute-btn");

// Add event listener to mute button
muteBtn.addEventListener("click", function() {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteBtn.textContent = "Mute";
    } else {
        backgroundMusic.muted = true;
        muteBtn.textContent = "Unmute";
    }
});

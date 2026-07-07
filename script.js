const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelectorAll("[data-skip]");

//play/pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause()  
	}
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

//
function updateButton() {
    if (video.paused) {
        toggle.textContent = "❚ ❚";
    } else {
        toggle.textContent = "►";
    }
}

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

// volume ?
volume.addEventListener("input", function () {
    video.volume = this.value;
});
//speed ?
playbackSpeed.addEventListener("input", function () {
    video.playbackRate = this.value;
});
//for skip
skipButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        video.currentTime += parseFloat(this.dataset.skip);

    });

});
//progress bar
video.addEventListener("timeupdate", function () {

    const percent = (video.currentTime / video.duration) * 100;

    progressFilled.style.width = percent + "%";

});


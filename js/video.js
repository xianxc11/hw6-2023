window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

var video = document.getElementById("player1");
// var volume = document.querySelector('#slider').value;

// Page load
// Initialize the video element and turn off autoplay and turn off looping.
document.addEventListener("DOMContentLoaded", () => {
    video.autoplay = false;
    video.loop = false;
});

// Play Button
// Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", () => {
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Pause Button
// Pause the video.
document.querySelector("#pause").addEventListener("click", () => {
	video.pause();
});

// Slow Down
// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
 document.querySelector("#slower").addEventListener("click", () => {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
 });

//  Speed Up
// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
 document.querySelector("#faster").addEventListener("click", () => {
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
 })

//  Skip Ahead
// Advance the current video by 10 seconds.   - no farther.  
// Log the current location of the video.If the video length has been exceeded go back to the start of the video

document.querySelector("#skip").addEventListener("click", () => {
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10.0;
	}
	console.log(video.currentTime)

 })

//  Mute
// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", () => {
	
	if(video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}

 })

//  Volume Slider
// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", (event) => {
	
	video.volume = event.currentTarget.value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%" ;
 })

// Styled
// Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", () => {
	video.classList.add("oldSchool")
})

// Original
// Remove the oldSchool class from the video.

document.querySelector("#orig").addEventListener("click", () => {
	video.classList.remove("oldSchool")
})















var audioPlayer = document.getElementById("audioPlayer");
var albumCover = document.getElementById("album-cover");
var songTitle = document.getElementById("song-title");
var artistName = document.getElementById("artist-name");
var playPauseBtn = document.querySelector("#controls button:nth-child(2)");

// Set initial values
// albumCover.style.backgroundImage = 'url("images/cover.jpg")'; // Replace with the path to your album cover image
songTitle.textContent = "Perfect - our version";
artistName.textContent = "pri's bitch";

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶️";
  }
}

function rewind() {
  audioPlayer.currentTime -= 10; // Rewind by 10 seconds
}

function skip() {
  audioPlayer.currentTime += 10; // Skip forward by 10 seconds
}

function seek() {
    audioPlayer.currentTime = seekSlider.value;
  }
  
  function initializeSeekSlider() {
    seekSlider.removeAttribute("disabled");
    seekSlider.max = Math.floor(audioPlayer.duration);
  }
  
  // Update seek slider and time display while audio is playing
  audioPlayer.addEventListener("timeupdate", function() {
    seekSlider.value = Math.floor(audioPlayer.currentTime);
    elapsedTimeSpan.textContent = formatTime(Math.floor(audioPlayer.currentTime));
    remainingTimeSpan.textContent = formatTime(Math.floor(audioPlayer.duration - audioPlayer.currentTime));
  });
  
  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  
  
  
  
  
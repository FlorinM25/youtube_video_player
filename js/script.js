var player; // Variable to hold the YouTube player object
// var darkMode = false;
var styleSheet = document.getElementById("styles");
var sunMoonContainer = document.getElementById("modeToggle");
var sun = document.querySelector(".sun");
var moon = document.querySelector(".moon");

// document.getElementById("modeToggle").addEventListener("click", function() {
//     darkMode = !darkMode;
//     if (darkMode) {
//         styleSheet.href = "css/dark-mode.css";
//         sunMoonContainer.style.backgroundColor = "#202020";
//         sun.style.transform = "translateX(25px)";
//         moon.style.transform = "translateX(0)";
//     } else {
//         styleSheet.href = "css/styles.css";
//         sunMoonContainer.style.backgroundColor = "#fff";
//         sun.style.transform = "translateX(0)";
//         moon.style.transform = "translateX(25px)";
//     }
// });

document.getElementById('theme-toggle').addEventListener('click', (e) => {
    const checked = e.target.checked;
    document.body.setAttribute('theme', checked ? 'dark' : 'light');
  });

function playVideo() {
    var youtubeURL = document.getElementById("youtubeURL").value;
    var videoPlayer = document.getElementById("videoPlayer");

    // Extract the video ID from the URL
    var videoID = getYoutubeVideoID(youtubeURL);

    // If a player instance already exists, destroy it
    if (player) {
        player.destroy();
    }

    // Clear previous content
    videoPlayer.innerHTML = "";

    // Create the YouTube player
    player = new YT.Player('videoPlayer', {
        height: '315',
        width: '560',
        videoId: videoID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Function to extract the YouTube video ID from the URL
function getYoutubeVideoID(url) {
    var videoID = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (videoID) {
        return videoID[1];
    } else {
        return url.split("/").pop();
    }
}

function onPlayerReady(event) {
    // Video player is ready
}

function onPlayerStateChange(event) {
    // Video player state change
}

function toggleFullScreen() {
    if (player) {
        var isFullScreen = player.getPlayerState() === 1;
        if (isFullScreen) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }
}


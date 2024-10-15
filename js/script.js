let player;

// Dark mode toggle
document.getElementById('theme-toggle').addEventListener('click', (e) => {
    const checked = e.target.checked;
    document.body.setAttribute('theme', checked ? 'dark' : 'light');
});

// Function to play the video
function playVideo() {
    const youtubeURL = document.getElementById("youtubeURL").value;
    const videoPlayer = document.getElementById("videoPlayer");

    const videoID = getYoutubeVideoID(youtubeURL);

    if (player) {
        player.destroy();
    }

    videoPlayer.innerHTML = "";

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
    const videoID = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/) || url.split("/").pop();
    return videoID ? videoID[1] : '';
}

function onPlayerReady(event) {
    // Placeholder for player ready event
}

function onPlayerStateChange(event) {
    // Placeholder for state change event
}

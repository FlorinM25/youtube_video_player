function loadVideo() {
    const url = document.getElementById('youtube-url').value;
    const videoId = extractVideoId(url);
    const videoContainer = document.getElementById('video-container');
    
    if (videoId) {
        videoContainer.innerHTML = `
            <div class="video-frame">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    } else {
        alert('Please enter a valid YouTube URL.');
    }
}

function addVideo() {
    const url = document.getElementById('youtube-url').value;
    const videoId = extractVideoId(url);
    const videoContainer = document.getElementById('video-container');

    if (videoId) {
        const newVideoFrame = document.createElement('div');
        newVideoFrame.className = 'video-frame';
        newVideoFrame.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
            </iframe>
        `;
        videoContainer.appendChild(newVideoFrame);
    } else {
        alert('Please enter a valid YouTube URL.');
    }
}

function extractVideoId(url) {
    let videoId;
    
    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
    } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1];
    }

    if (videoId && videoId.includes('&')) {
        videoId = videoId.split('&')[0];
    }

    return videoId;
}

// Add animation on hover
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('animate__animated', 'animate__pulse');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('animate__animated', 'animate__pulse');
    });
});
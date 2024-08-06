YouTube Video Player
====================

Overview
--------

The YouTube Video Player is a simple web application that allows users to play YouTube videos by entering the video URL. The app features a theme toggle switch to switch between light and dark modes.

Features
--------

1.  **Play YouTube Videos**: Users can enter a YouTube video URL, and the video will be embedded and played within the app.
2.  **Theme Toggle**: The app supports a theme toggle switch allowing users to switch between light and dark themes.

File Descriptions
-----------------

### HTML (index.html)

-   **Head Section**

    -   **Title**: "YouTube Video Player"
    -   **Stylesheet**: Links to `css/styles.css`
    -   **JavaScript**: Loads `js/script.js` and YouTube IFrame API script
-   **Body Section**

    -   **Header**: Displays the title "YouTube Video Player"
    -   **Input Field**: A text input for users to enter the YouTube video URL
    -   **Play Button**: Button to trigger video playback
    -   **Theme Toggle**: Checkbox to switch between light and dark themes
    -   **Video Player**: A div where the YouTube player will be embedded

### JavaScript (js/script.js)

-   **Global Variables**

    -   `player`: Holds the YouTube player object
    -   `styleSheet`: References the stylesheet
    -   `sunMoonContainer`, `sun`, `moon`: References to elements used in the (commented-out) sun/moon toggle button
-   **Event Listeners**

    -   **Theme Toggle**: Toggles between light and dark themes by changing the `theme` attribute on the body element
-   **Functions**

    -   `playVideo()`: Extracts the video ID from the URL, creates a new YouTube player, and embeds it in the `videoPlayer` div
    -   `getYoutubeVideoID(url)`: Extracts the video ID from a YouTube URL
    -   `onPlayerReady(event)`: Placeholder function for when the player is ready
    -   `onPlayerStateChange(event)`: Placeholder function for when the player state changes
    -   `toggleFullScreen()`: Toggles between full-screen playback (not implemented in the HTML)

### CSS (css/styles.css)

-   **Common Styles**

    -   Sets font family, text alignment, background color, text color, and transitions for the body
    -   Styles for container, headings, paragraphs, input fields, buttons, and the video player
-   **Theme Styles**

    -   **Light Theme**: Default background and text colors
    -   **Dark Theme**: Changes background and text colors when the `theme` attribute on the body is set to `dark`
-   **Theme Toggle Switch**

    -   Styles for the theme toggle switch, including transition effects and icon positions for sun and moon

How to Use
----------

1.  **Enter Video URL**: Type or paste a YouTube video URL into the text input field.
2.  **Play Video**: Click the "Play Video" button to load and play the video in the embedded player.
3.  **Toggle Theme**: Use the checkbox to switch between light and dark themes.

This application provides a basic interface for playing YouTube videos with the added functionality of a light/dark theme switcher. It demonstrates how to embed a YouTube player using the IFrame Player API and how to implement theme switching in a simple web app.

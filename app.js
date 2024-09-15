const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// Ensure the secret key is set in localStorage, otherwise, no comparison can be made.
const st = localStorage.getItem('st') || null;

function checkKey() {
    // If there's no stored key, deny access immediately
    if (!st) {
        alert("You are not an approved user. Please contact the admin.");
        window.location.href = "https://www.example.com";
        return;
    }

    const hasAccess = localStorage.getItem('hasAccess');
    const correctAccessFlag = "true"; // Use consistent flag value

    // Check if user already has access
    if (hasAccess === correctAccessFlag) {
        document.getElementById('content').style.display = 'block'; // Show content
        return; // Skip asking for the key again
    }

    // Ask for the user's key
    const userKey = prompt("Please enter your key:");

    if (userKey === st) {
        // If correct key, grant access
        localStorage.setItem('hasAccess', correctAccessFlag);
        document.getElementById('content').style.display = 'block';
        alert("You are a verified user.");
    } else {
        // If the key is wrong, deny access
        alert("Incorrect key. Contact admin");
        window.location.href = "https://www.example.com"; // Redirect
    }
}

// Check the key after all elements are loaded
document.addEventListener('DOMContentLoaded', (event) => {
    checkKey();
});

// Sidebar toggle functions (unchanged)
function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

function showVideo(videoId) {
    // Hide and pause all videos
    const videos = document.querySelectorAll('.video video'); // Select video elements directly inside .video
    videos.forEach(videoElement => {
        videoElement.parentElement.style.display = 'none'; // Hide the parent .video element
        videoElement.pause(); // Pause the video
        videoElement.currentTime = 0; // Reset the video to the start
    });

    // Show the selected video
    const videoToShow = document.getElementById(videoId);
    if (videoToShow) {
        videoToShow.style.display = 'block';
        const videoElement = videoToShow.querySelector('video');
        if (videoElement) {
            videoElement.play(); // Optionally start playing the new video
        }
    }
}



function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

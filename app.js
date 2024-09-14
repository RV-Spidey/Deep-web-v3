const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const hasAccess = localStorage.getItem('hasAccess'); // Check if user has previously entered the correct key

function checkKey() {
    
    if (hasAccess === 'true') {
        document.getElementById('content').style.display = 'block'; // Show content if access already granted
        return; // No need to ask for the key again
    }

    const userKey = prompt("Please enter your key:");
    const storedKey = localStorage.getItem('storedKey'); // Retrieve the stored key

    if (userKey !== storedKey) {
        alert("You are not an approved user. Contact the hosting team.");
        window.location.href = "https://www.example.com"; // Redirect to another page if incorrect
    } else if (userKey === storedKey) {
        document.getElementById('content').style.display = 'block';
        localStorage.setItem('hasAccess', 'true'); // Store the access flag in localStorage
        console.log("Correct key entered!");
        alert("You are a verified user");
    } else {
        alert("Incorrect key, please try again.");
        window.location.href = "https://www.example.com"; // Redirect to another page if incorrect
    }
}

// Use `DOMContentLoaded` event to ensure all elements are loaded before checking the key
document.addEventListener('DOMContentLoaded', (event) => {
    checkKey();
});

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
    // Hide all videos
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => video.style.display = 'none');

    // Show the selected video
    const videoToShow = document.getElementById(videoId);
    if (videoToShow) {
        videoToShow.style.display = 'block';
    }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

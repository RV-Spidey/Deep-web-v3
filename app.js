const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function checkKey() {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check if user is already logged in
    const storedKey = localStorage.getItem('storedKey'); // Retrieve stored key

    if (isLoggedIn === 'true') {
        document.getElementById('content').style.display = 'block';
        console.log("User already logged in!");
    } else {
        const userKey = prompt("Please enter your key:");

        if (!storedKey) {
            alert("You are not an approved user. Contact the hosting team.");
            window.location.href = "https://www.example.com"; // Redirect to another page if incorrect
        } else if (userKey === storedKey) {
            document.getElementById('content').style.display = 'block';
            localStorage.setItem('isLoggedIn', 'true'); // Set flag to indicate successful login
            console.log("Correct key entered!");
        } else {
            alert("Incorrect key, please try again.");
            window.location.href = "https://www.example.com"; // Redirect to another page if incorrect
        }
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

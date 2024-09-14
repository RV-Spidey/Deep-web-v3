const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function checkKey() {
    const userKey = prompt("Please enter your key:");
    const storedKey = localStorage.getItem('storedKey'); // Retrieve only, do not set it
    
    if (storedKey === null) {
        alert("You are not an approved user. Contact the hosting team.");
    } else if (userKey === storedKey) {
        document.getElementById('sidebar').style.display = 'block';
        console.log("Correct key entered!");
    } else {
        alert("Incorrect key, please try again.");
        //window.location.reload(); // Reload the page to prompt again
    }
}

// Sidebar toggle functions
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

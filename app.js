document.addEventListener('DOMContentLoaded', function() {
  // Handle access code prompt and display logic
  const storedKey = localStorage.getItem('storedKey');

  const userCode = prompt("Enter access code:");

  if (storedKey === null) {
    alert("You are not an approved user. Contact the hosting team.");
  } else if (userCode === storedKey) {
    document.getElementById('content').style.display = 'block';
    console.log("Correct key entered!");
  } else {
    alert("Incorrect key, please try again.");
    window.location.reload(); // Reload the page to prompt again
  }

  // Function to toggle the sidebar
  const toggleButton = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');

  function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
  }

  // Function to toggle sub-menu visibility
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

  // Function to show a specific video and hide others
  function showVideo(videoId) {
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => video.style.display = 'none');

    const videoToShow = document.getElementById(videoId);
    if (videoToShow) {
      videoToShow.style.display = 'block';
    }
  }

  // Function to close all sub-menus
  function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    });
  }

  // Add event listeners or initialize any other functionality here if needed
});

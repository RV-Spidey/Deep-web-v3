
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

const accessCodes = [
            "skibidi"
        ];

        const userCode = prompt("Enter access code:");

        if (!accessCodes.includes(userCode)) {
            alert("Access denied. Incorrect code.");
            window.location.href = "https://www.example.com"; // Redirect to another page if incorrect
        } else {
            document.getElementById('content').style.display = 'block'; // Show the protected content

        }

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
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

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

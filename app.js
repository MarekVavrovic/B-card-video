
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".birthdayCard");
  const cardFront = document.querySelector(".cardFront");
  const video = document.getElementById("birthdayVideo");
  const spinner = document.getElementById("loadingSpinner"); 

  cardFront.addEventListener("click", function () {
    card.classList.add("is-flipped");
    video.load(); 
    spinner.style.display = "block"; // Show the spinner when the card is flipped
    video.style.display = "none"; 
  });

  video.addEventListener("canplay", function () {
    spinner.style.display = "none"; 
    video.style.display = "block"; 
  });

  video.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up to cardFront
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  card.addEventListener("mouseleave", function () {
    if (!video.paused) {
      video.pause(); 
      video.currentTime = 0; 
    }
    card.classList.remove("is-flipped"); 
  });

  video.onerror = function () {
    spinner.innerHTML = "Failed to load video. Please try again later.";
    spinner.style.display = "block"; 
    video.style.display = "none"; 
  };
});

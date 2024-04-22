

// document.querySelector(".cardFront").addEventListener("click", function () {
//   const video = document.getElementById("birthdayVideo");
//   const spinner = document.getElementById("loadingSpinner");

//   // Attempt to play the video and handle cases where play might not be allowed.
//   const promise = video.play();

//   if (promise !== undefined) {
//     promise
//       .then((_) => {
//         // Hide spinner when video is playing.
//         spinner.style.display = "none";
//       })
//       .catch((error) => {
//         // Auto-play was prevented
//         // Show a play button to the user or give other appropriate feedback
//         console.error("Video play failed: ", error);
//         // You might want to add a play button for the user to click on
//         spinner.innerHTML = "Click to play";
//         spinner.style.display = "block";
//         video.style.display = "none";
//         spinner.addEventListener("click", () => {
//           video.play();
//         });
//       });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".birthdayCard");
  const cardFront = document.querySelector(".cardFront");
  const video = document.getElementById("birthdayVideo");
  const spinner = document.getElementById("loadingSpinner");

  cardFront.addEventListener("click", function () {
    card.classList.add("is-flipped");
    video.load(); // Ensure the video is loaded and ready to play
  });

  video.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up to cardFront
    video.play();
  });

  card.addEventListener("mouseleave", function () {
    if (!video.paused) {
      video.pause(); // Stop the video if it is playing
      video.currentTime = 0; // Optional: reset video time to the start
    }
    card.classList.remove("is-flipped"); // Rotate the card back
  });
});

// document.querySelector(".cardFront").addEventListener("mouseover", function () {
//   const video = document.querySelector(".birthdayVideo");
//   if (!video.played.length) {
//     video.play();
//   }
// });
// document.querySelector(".cardFront").addEventListener("click", function () {
//   const video = document.querySelector(".birthdayVideo");
//   if (!video.played.length) {
//     video.play();
//   }
// });

   const video = document.getElementById("birthdayVideo");
   const spinner = document.getElementById("loadingSpinner");
   video.addEventListener("canplaythrough", (event) => {
     spinner.style.display = "none"; // Hide spinner when video is ready to play
     video.style.display = "block"; // Show the video
   });

   video.onerror = () => {
     spinner.innerHTML = "Failed to load video.";
   };

   video.load(); // Attempt to load video
   spinner.style.display = "block"; // Show spinner initially
   video.style.display = "none"; // Hide video initially

   document
     .querySelector(".cardFront")
     .addEventListener("mouseover", function () {
       playVideoOnce(video);
     });
   document.querySelector(".cardFront").addEventListener("click", function () {
     playVideoOnce(video);
   });

   function playVideoOnce(videoElement) {
     if (!videoElement.played.length) {
       videoElement.play();
     }
   }
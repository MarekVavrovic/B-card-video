

//    const video = document.getElementById("birthdayVideo");
//    const spinner = document.getElementById("loadingSpinner");
//    video.addEventListener("canplaythrough", (event) => {
//      spinner.style.display = "none"; // Hide spinner when video is ready to play
//      video.style.display = "block"; // Show the video
//    });

//    video.onerror = () => {
//      spinner.innerHTML = "Failed to load video.";
//    };

//    video.load(); // Attempt to load video
//    spinner.style.display = "block"; // Show spinner initially
//    video.style.display = "none"; // Hide video initially

//    document
//      .querySelector(".cardFront")
//      .addEventListener("mouseover", function () {
//        playVideoOnce(video);
//      });
//    document.querySelector(".cardFront").addEventListener("click", function () {
//      playVideoOnce(video);
//    });

//    function playVideoOnce(videoElement) {
//      if (!videoElement.played.length) {
//        videoElement.play();
//      }
//    }

document.querySelector(".cardFront").addEventListener("click", function () {
  const video = document.getElementById("birthdayVideo");
  const spinner = document.getElementById("loadingSpinner");

  // Attempt to play the video and handle cases where play might not be allowed.
  const promise = video.play();

  if (promise !== undefined) {
    promise
      .then((_) => {
        // Hide spinner when video is playing.
        spinner.style.display = "none";
      })
      .catch((error) => {
        // Auto-play was prevented
        // Show a play button to the user or give other appropriate feedback
        console.error("Video play failed: ", error);
        // You might want to add a play button for the user to click on
        spinner.innerHTML = "Click to play";
        spinner.style.display = "block";
        video.style.display = "none";
        spinner.addEventListener("click", () => {
          video.play();
        });
      });
  }
});

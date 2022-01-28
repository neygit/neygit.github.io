window.addEventListener("DOMContentLoaded", (event) => {
  const head = document.getElementById("head");
  head.style.animation = "face";
  head.style.animationDuration = "10s";
  head.style.animationIterationCount = "infinite";
  head.style.animationTimingFunction = "linear";

  const arrow = document.getElementById("arrow");
  arrow.style.animation = "stepsH";
  arrow.style.animationDuration = "3s";
  arrow.style.animationIterationCount = "infinite";
  arrow.style.animationTimingFunction = "linear";

  arrow.addEventListener(
    "click",
    function () {
      console.log("BITE")
      document.getElementById('door').style.backgroundImage = "url('./assets/door-opened.png')"
    },
    { once: true }
  );
});

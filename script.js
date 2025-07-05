const shareButton = document.querySelector(".footer__share-icon-container");
const shareWindow = document.querySelector(".share__links");
let isClicked = false;

shareButton.addEventListener("click", () => {
  isClicked = !isClicked;
  shareWindow.style.visibility = isClicked ? "visible" : "hidden";
});

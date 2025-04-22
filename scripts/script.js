// This script handles the functionality of the share button and the popup
// when the button is clicked, the popup will be displayed
const btnShare = document.getElementById("btn-share");
btnShare.addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
});

// when the share button is clicked again, the popup will be hidden
const popupBtnShare = document.getElementById("popup-btn-share");
popupBtnShare.addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
});
let popup = document.querySelector(".popup");
let sheet = document.querySelector(".calc-sheet");


//FUNCTIONS
function openPopup() {
  popup.classList.add("open-popup");
  sheet.classList.add("hidden")
}
function closePopup() {
  popup.classList.remove("open-popup");
  sheet.classList.remove("hidden")

}
/*
    inputs -> name interest, loan

        <p class="client-name"></p>
        <p class="loan-amount"></p>
        <p class="int-rate"></p>

*/

let popup = document.querySelector(".popup");
let sheet = document.querySelector(".calc-sheet");
let client = document.querySelector(".client");
let interest = document.querySelector(".interest");
let loan = document.querySelector(".loan");
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")
const approve = document.querySelector(".approve");

submit.addEventListener('click', e => {
  e.preventDefault()
  addName()
  addLoan()
  addInterest()
})

approve.addEventListener('click', e => {
  e.preventDefault()
  client.value = ""
  loan.value = ""
  interest.checked = false
  closePopup()
})


//FUNCTIONS
function openPopup() {
  popup.classList.add("open-popup");
  sheet.classList.add("hidden")
}
function closePopup() {
  popup.classList.remove("open-popup");
  sheet.classList.remove("hidden")

}

function addName() {
  //
  console.log(client.value)
  let div = document.createElement("div");
  div.innerHTML = client.value;
  results.appendChild(div)
  openPopup()
}
function addLoan() {
  //
  console.log(loan.value)
  let div = document.createElement("div");
  div.innerHTML = loan.value;
  results.appendChild(div)
  
}
function addInterest() {
  //
  console.log(interest.value)
  let div = document.createElement("div");
  div.innerHTML = interest.value;
  results.appendChild(div)
  
}
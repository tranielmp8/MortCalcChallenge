/*
    inputs -> name interest, loan

        <p class="client-name"></p>
        <p class="loan-amount"></p>
        <p class="int-rate"></p>

*/

let popup = document.querySelector(".popup");
let sheet = document.querySelector(".calc-sheet");
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")
const approve = document.querySelector(".approve");
const decline = document.querySelector(".decline");

submit.addEventListener('click', e => {

  e.preventDefault(); // PREVENT REFRESH AT SUBMIT OR DEFAULT ACTION
  let client = document.querySelector(".client").value;
  let radio = Number(document.querySelector('input[name="interest"]:checked').value);
  let t = Number(document.querySelector('.term').value);
  let loan = Number(document.querySelector(".loan").value);
  let downpayment = Number(document.querySelector(".downpayment").value);
  if(!radio) {
    alert('Please select an interest rate')
  }
 
      // breakdown of monthly payment formula
    const principal = loan - downpayment;
    const r = (radio/100.00);
    const n =  12;
    const params = (1 + (r / n))
    const expo = n * t
    const numerator = principal * (r / n);
    const denominator = 1 - Math.pow(params, -expo)
    const monthlyPayment = numerator / denominator;
    
    console.log(monthlyPayment)

    let div = document.createElement("div");
    div.innerHTML = `
      <h3>Congratulations ${client}!</h3>
      <p>Your total loan is: $${loan}</p>    
      <p>Your down payment is: $${downpayment}</p>    
      <p>Your approved interest rate is: ${radio}%</p> 
      <p>Your loan term is: ${t} years</p> 
      <h4>Monthly Payments: $${monthlyPayment.toFixed(2)}</h4>   
    `;
    results.appendChild(div)

    // console.log('Interest: ' + Number(radio) * .01);
    // console.log(`Downpayment = ${Number(downpayment)}, and Loan amount = ${Number(loan)} so the Principal = ${Number(loan) - Number(downpayment)}`)

    openPopup()
  

  
  
  decline.addEventListener('click', e => {
    e.preventDefault()
    div.innerHTML = ''
    
  })

  approve.addEventListener('click', e => {
    e.preventDefault()
    alert('Results Submitted')
    location.reload()    
  })
  
  

})
// approve.addEventListener('click', location.reload())

// decline.addEventListener('click', div.innerHTML='')



// let btnSelected = () => {
//   let selected = document.querySelector('.interest:checked').value
//   console.log(selected)
// }

// submit.addEventListener('click', e => {
//   e.preventDefault()
//   addName()
//   addLoan()
//   interest()
//   // let someMath = Number(loan.value) *  Number(interest.value)
//   // console.log(someMath)
//   let h3 = document.createElement("h3");
//   // h3.innerHTML = someMath;
//   h3.innerHTML = `interest * loan = ${Number(loan.value) * Number(interest.value)}`;
//   results.appendChild(h3)
// })

// approve.addEventListener('click', e => {
//   e.preventDefault()
//   location.reload()
// })
// decline.addEventListener('click', e => {
//   e.preventDefault()
//   location.reload()
// })


//FUNCTIONS
function openPopup() {
  popup.classList.add("open-popup");
  sheet.classList.add("hidden")
}
function closePopup() {
  popup.classList.remove("open-popup");
  sheet.classList.remove("hidden")
 }

// function addName() {
//   //
//   console.log(client.value)
//   let div = document.createElement("div");
//   div.innerHTML = Number(client.value);
//   results.appendChild(div)
//   openPopup()
// }
// function addLoan() {
//   //
//   console.log(loan.value)
//   let div = document.createElement("div");
//   div.innerHTML = Number(loan.value);
//   results.appendChild(div)
  
// }

// function interest() {
//   radioBtns.forEach((radio) => {
//     if (radio.checked) {
//     let div = document.createElement("div");
//     div.innerHTML = Number(radio.value);
//     results.appendChild(div)
//     }
//   })
// }


// function addInterest() {
//   radioBtns.forEach(radioBtn => {
//     let div = document.createElement("div");
//     if(radioBtn.checked){
//       div.innerHTML = radioBtn.value;
//       results.appendChild(div)
//       console.log(radioBtn.value)
//     }

    
//   })
  //
  
  

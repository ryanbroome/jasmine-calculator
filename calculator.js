window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function test(x, y) {
  return x + y;
}

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  const values = { amount: 5500, years: 4, rate: 0.12 };
  const amountUI = document.getElementById('loan-amount');
  amountUI.value = values.amount;
  const yearsUI = document.getElementById('loan-years');
  yearsUI.value = values.years;
  const rateUI = document.getElementById('loan-rate');
  rateUI.value = values.rate;

  // TOGGLE const textInputs = document.querySelectorAll('input[type="text"]');
  // Put some default values in the inputs
  //   TOGGLE textInputs[0].value = 5500;
  //   TOGGLE textInputs[1].value = 4;
  //   TOGGLE textInputs[2].value = 0.12;
  // Call a function to calculate the current monthly payment
  // calculateMonthlyPayment();
  update();
}

function update() {
  // Get the current values from the UI
  getCurrentUIValues();
  // Update the monthly payment
  updateMonthly();
}

function calculateMonthlyPayment(values) {
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  values = getCurrentUIValues();
  let i = values.rate / 12;
  let P = values.amount;
  let n = values.years * 12;
  let monthly = (P * i) / (1 - (1 + i) ** -n);
  return monthly.toFixed(2);
}

function updateMonthly(monthly) {
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  let monthlyDisplay = document.querySelector('#monthly-payment');
  monthlyDisplay.innerText = `$${calculateMonthlyPayment()}`;
}

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
//Hide results
document.getElementById('results').style.display = 'none';

    //Show loader
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResults, 1000);

    e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');
  //UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value)* 12;

//Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(-1);

if(isFinite(monthly)) {
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value = (monthly * calculatedPayments).toFixed(2);
totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

//Show results
document.getElementById('results').style.display = 'block';

//Hide loader
document.getElementById('loading').style.display = 'none';

}else{
 showError('Plaese check your numbers');
}
}

//Show Error
function showError(error) {
    //Htde results
document.getElementById('results').style.display = 'none';

//Hide loader
document.getElementById('loading').style.display = 'none';
    //Create a div
    const errorDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //App class
    errorDiv.className = 'alert alert-danger';

    //Create text node append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 1 seconds
    setTimeout(clearError, 1000);
}

//Clear error
function clearError(){
    document.querySelector('.alert').remove();
}
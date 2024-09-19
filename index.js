const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve height and weight values from input fields
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Validate height input
  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height: ${height}`;
  }
  // Validate weight input
  else if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight: ${weight}`;
  }
  // Calculate and display BMI
  else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2); // Correct BMI formula
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});

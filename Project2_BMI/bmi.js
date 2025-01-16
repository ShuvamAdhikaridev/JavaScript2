const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //? Show the result
    let category;
    if (bmi < 18.6) {
      category = "Under Weight";
    } else if (bmi > 18.6 || bmi < 24.9) {
      category = "Normal Range";
    } else if (bmi > 24.9) {
      category = "Over Weight";
    }

    results.innerHTML = `Your BMI index is ${bmi} which is considered ${category}`;
  }
});

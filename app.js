const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");


celciusInput.addEventListener("input", function() {
  const cTem = celciusInput.value;
  const fTem = (cTem * 9/5) + 32;
  fahrenheitInput.value = fTem;
});

let name = "Rashid";
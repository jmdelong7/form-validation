import './styles.css';
import countries from "./countries.js";

(function countriesDropdown() {
  const select = document.getElementById('country');
  const allCountries = countries();
  allCountries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  })
})();
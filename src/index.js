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

function checkEmailValidity(email) {
  const split1 = email.split('@');
  if (split1.length !== 2) return false;
  const split2 = split1[1].split('.');
  if (split2.length !== 2) return false;
  return true;
}
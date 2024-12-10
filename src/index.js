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

const inputs = {
  email: document.getElementById('email'),
  country: document.getElementById('country'),
  zip: document.getElementById('zip'),
  passw1: document.getElementById('passw1'),
  passw2: document.getElementById('passw2')
}

const errors = {
  email: document.getElementById('email-error'),
  country: document.getElementById('country-error'),
  zip: document.getElementById('zip-error'),
  passw1: document.getElementById('passw1-error'),
  passw2: document.getElementById('passw2-error')
}

const validation = {
  general: (value) => {
    // Checks for blank, null, and whitespace (space, tab, linebreak).
    if (value === '' || value === null || /\s/.test(value) === true){
      return false;
    }
    return true;
  },
  email: (email) => {
    const split = email.split('@');
    // valid characters before @
    const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    if (split.length !== 2 || domainRegex.test(split[1]) !== true) return false;
    return true;  
  },
  zip: (zip) => {
    if (zip.includes('-') || zip.includes('.') || zip.length < 5 || zip.length > 5){
      return false;
    };
    return true;
  },
  passw1: (passw) => {
    const safe = /^[A-Za-z0-9!@#$%^&*()_+\-=,.?]{8,}$/;
    if (passw.length < 8 || passw.length > 30 || !safe.test(passw)){
      return false;
    }
    return true;
  },
  passw2: (passw1, passw2) => {
    return passw1 === passw2 ? true : false;
  }
}

function toggleError(test, error) {
  test === false ? error.classList.remove('hidden') : error.classList.add('hidden');
}

function showErrorOnChange(input, test, error) {
  inputs[input].addEventListener('change', () => {
    toggleError(validation['genera'](input.value), error);
    toggleError(validation[test](input.value), error);
  })
}

(function assignListeners() {
  Object.entries(inputs).forEach((input) => {
    if (input !== 'country') {
      console.log(input);
      showErrorOnChange(input, input, input);
    }
  })
})()
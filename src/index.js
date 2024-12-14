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
  emailInput: document.getElementById('email'),
  countryInput: document.getElementById('country'),
  zipInput: document.getElementById('zip'),
  passw1: document.getElementById('passw1'),
  passw2: document.getElementById('passw2')
}

const errors = {
  emailError: document.getElementById('email-error'),
  countryError: document.getElementById('country-error'),
  zipError: document.getElementById('zip-error'),
  passw1Error: document.getElementById('passw1-error'),
  passw2Error: document.getElementById('passw2-error')
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

function toggleError(test, input, error) {
  if (test(input.value) === false) {
    error.classList.remove('hidden');
    return false;
  } else {
    error.classList.add('hidden');
    return true;
  }
}

function checkForError(test, input, error) {
  input.addEventListener('change', () => {
    if (toggleError(validation.general, input, error)) {
      toggleError(test, input, error);
    }
  })
  input.addEventListener('input', () => {
    if (test(input.value) === true) error.classList.add('hidden');
  })
}

checkForError(validation.email, inputs.emailInput, errors.emailError);
checkForError(validation.zip, inputs.zipInput, errors.zipError);
checkForError(validation.passw1, inputs.passw1, errors.passw1Error);
checkForError(validation.passw2, inputs.passw2, errors.passw2Error);
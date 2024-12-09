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

const validation = {
  general: (value) => {
    // Checks for blank, null, and whitespace (space, tab, linebreak).
    if (value === '' || value === null || /\s/.test(value) === true){
      return false;
    }
    return true;
  },
  email: (email) => {
    const split1 = email.split('@');
    if (split1.length !== 2) return false;
    const split2 = split1[1].split('.');
    if (split2.length !== 2) return false;
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


# form-validation

Email, Country, Zip Code, Password and Password Confirmation fields.

Check validation when user leaves field.

# Email
- '@' symbol followed by text which has a '.' somewhere in it.

# Country
- Dropdown with countries, one must be selected.

# Zip Code
- 5 digit number.

# Password
- Minimum 8 characters
- Maximum 30 characters
Safe password regex: /^[A-Za-z0-9!@#$%^&*()_+\-=,.?]{8,}$/

# Password Confirmation
- Check if matches password field exactly.
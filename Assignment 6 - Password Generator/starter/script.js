// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Validate user input
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be a number between 8 and 128 characters');
    return;
  }

  var includeLowercase = confirm('Click OK to include lowercase characters.');
  var includeUppercase = confirm('Click OK to include uppercase characters.');
  var includeNumeric = confirm('Click OK to include numeric characters.');
  var includeSpecial = confirm('Click OK to include special characters.');

  // Validate at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert('At least one character type must be selected.');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };

  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];

  if (options.includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  if (options.includeUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if (options.includeNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }

  if (options.includeSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(possibleCharacters);
    result.push(randomChar);
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
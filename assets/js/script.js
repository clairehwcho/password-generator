// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword () {
  // Set default values for password criteria.
  var lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numStr = "0123456789";
  var specialCharStr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  // Set default values for user input.
  var userLength = 0;
  var userLowercase = false;
  var userUppercase = false;
  var userNumeric = false;
  var userSpecialchars = false;

  // Use a flag variable and while loop to check if user input for the length of the password is valid.
  var lengthError = true;
  while (lengthError) {
    // Prompt user to enter the length of the password
    var askLength = parseInt(window.prompt("Enter the length of the passsword between 8 and 128 characters."));

    // If input is smaller than 8 or greater than 128, ask user to re-enter.
    if (askLength < 8 || askLength > 128) {
      window.alert("Password must be at least 8 characters and no more than 128 characters.");
    }
    // If input is not numeric, ask user to re-enter.
    else if (isNaN(askLength)) {
      window.alert("Please enter numbers.");
    }
    // If input is valid
    else {
      // Assign the input value to the userLength variable.
      userLength = askLength
      console.log("Length: " + userLength);
      // Reset the flag variable to break out of the loop.
      lengthError = false;
    }
  }

  // Use a flag variable and while loop to check if user input for the character type is valid.
  var charTypeError = true;
  while (charTypeError) {
    // Prompt user to confirm whether or not to include the lowercase.
    var askLowercase = window.confirm("Please select at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters.\n\nDo you want to include lowercase in your password?\n(e.g., a-z)\n\nPress OK to include or Cancel not to include.");
    if (askLowercase) {
      console.log("Lowercase included")
      userLowercase = true;
    }
    else {
      console.log("Lowercase not included");
    }

    // Prompt user to confirm whether or not to include the uppercase.
    var askUppercase = window.confirm("Please select at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters.\n\nDo you want to include uppercase in your password?\n(e.g., A-Z)\n\nPress OK to include or Cancel not to include.");
    if (askUppercase) {
      console.log("Uppercase included")
      userUppercase = true;
    }
    else {
      console.log("Uppercase not included");
    }

    // Prompt user to confirm whether or not to include the numeric.
    var askNumeric = window.confirm("Please select at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters.\n\nDo you want to include numeric in your password?\n(e.g., 0-9)\n\nPress OK to include or Cancel not to include.");
    if (askNumeric) {
      console.log("Numeric included")
      userNumeric = true;
    }
    else {
      console.log("Numeric not included");
    }

    // Prompt user to confirm whether or not to include the special characters.
    var askSpecialchars = window.confirm("Please select at least one of the following character types:\nlowercase, uppercase, numeric, and/or special characters.\n\nDo you want to include special characters in your password?\n(e.g., !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)\n\nPress OK to include or Cancel not to include.");
    if (askSpecialchars) {
      console.log("Special characters included")
      userSpecialchars = true;
    }
    else {
      console.log("Special characters not included");
    }

    // Validate if at least one character type has been selected.
    if (!userLowercase && !userUppercase && !userNumeric && !userSpecialchars) {
      console.log("No character type included. Select again.")
      window.alert("At least one character type must be included in your password!\nSelect again.");
    }
    else {
      // Combine the selected password criteria into a new string.
      var userCriteriaStr = "";
      if (userLowercase) {
        userCriteriaStr += lowercaseStr;
      }
      if (userUppercase) {
        userCriteriaStr += uppercaseStr;
      }
      if (userNumeric) {
        userCriteriaStr += numStr;
      }
      if (userSpecialchars) {
        userCriteriaStr += specialCharStr;
      }
      console.log("Password criteria: " + userCriteriaStr);
      // Reset the flag variable to break out of the loop.
      charTypeError = false;
    }
  }
  // Generate password that matches the selected criteria.
  var generateError = true;
  while (generateError) {
    var newPassword = "";
    for (var i = 0; i <= userLength; i++) {
      var randomIdx = Math.floor(Math.random() * userCriteriaStr.length);
      newPassword += userCriteriaStr.substring(randomIdx, randomIdx + 1);
    }
    // Validate if the generated password matches all of the selected criteria.
    var lowercaseArr = lowercaseStr.split("");
    var uppercaseArr = uppercaseStr.split("");
    var numArr = numStr.split("");
    var specialCharArr = specialCharStr.split("");
    if (
      (userLowercase && !lowercaseArr.some(lowercase => newPassword.includes(lowercase))) ||
      (userUppercase && !uppercaseArr.some(uppercase => newPassword.includes(uppercase))) ||
      (userNumeric && !numArr.some(num => newPassword.includes(num))) ||
      (userSpecialchars && !specialCharArr.some(specialchar => newPassword.includes(specialchar)))
    ) {
      console.log("Regenerating password to match the selected criteria");
    }
    else {
      // Reset the flag variable to break out of the loop.
      generateError = false;
    }
  }
  console.log("Password generated: " + newPassword);
  return newPassword;
}

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

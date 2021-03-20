// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperLetters = confirm("Do you want uppercase letters in your password?")
  var lowerLetters = confirm("Do you want lowercase letters in you password?")
  var numbers = confirm("Do you want numbers in your password?")
  var spChar = confirm("Do you want special characters in your password?")
  var passLength = prompt("How long do you want your password to be?")
  var passwordIndex = []
  var password = []
  var index;
  var allLetter = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = allLetter.toUpperCase();
  var allNumber = "1234567890"
  var allSpChar = "!@#$%^&*"
  var upperList = upperCase.split('');
  var letterList = allLetter.split("")
  var numberList = allNumber.split("")
  var spCharList = allSpChar.split("")

  // Generating the list
  if (lowerLetters) {
    passwordIndex = passwordIndex.concat(letterList)
    var index = (Math.floor(Math.random() * letterList.length))
    var passwordItem = (letterList[index]) 
    password.push(passwordItem)
  }
  if (upperLetters) {
    passwordIndex = passwordIndex.concat(upperList)
    var index = (Math.floor(Math.random() * upperList.length))
    var passwordItem = (upperList[index]) 
    password.push(passwordItem)
  }
  if (numbers) {
    passwordIndex = passwordIndex.concat(numberList)
    var index = (Math.floor(Math.random() * numberList.length))
    var passwordItem = (numberList[index]) 
    password.push(passwordItem)
  }
  if (spChar) {
    passwordIndex = passwordIndex.concat(spCharList)
    var index = (Math.floor(Math.random() * spCharList.length))
    var passwordItem = (spCharList[index]) 
    password.push(passwordItem)
  }

  passwordIndex.join('')

  console.log(passwordIndex)
  // passwordIndex.split('')

  passLength = passLength - password.length


  while (passLength > 0) {
    var index = Math.floor(Math.random() * passwordIndex.length);
    var passwordItem = (passwordIndex[index]);
    password.push(passwordItem)


    console.log(passwordItem)
    console.log(password)

    passLength--;
  }
  console.log(password)
  console.log(passwordIndex)
  password = (password.join(''))

  return password
  // var password = "a super secret password"







  // Generating the random password selection



}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// Assignment Code
var generateBtn = document.querySelector("#generate");
var psw_numbers = ["1","2","3","4","5","6","7","8","9","0"];
var psw_alphabet = ["a","b","c","d","e","g","h","i","j","k","L","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  
var psw_special = ["!","?","#","$","&","%","(",")","*","+","{","}","@"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var password = "";
  //ask for criteria
  var pswC_lowercase = window.confirm("Do you want to include lower case characters?");
  var pswC_uppercase = window.confirm("Do you want to include upper case characters?");
  var pswC_numbers = window.confirm("Do you want to include numbers?");
  var pswC_special = window.confirm("Do you want special characters?");
  var pswC_lenght = window.prompt(`How many characters should the password have?\nselecte a number between 8-128 characters`, "16");

  //generate random password
  for (var i = 0; i < pswC_lenght; i++ ){
    password = password + psw_alphabet[i];
  }

  console.log(password);
  return (password);
}




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


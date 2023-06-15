// Assignment Code
var generateBtn = document.querySelector("#generate");
var psw_numbers = ["1","2","3","4","5","6","7","8","9","0"];
var psw_alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  
var psw_special = ["!","?","#","$","&","%","(",")","*","+","{","}","@"];
var psw_alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var passwordMaker = "";
  var characterOptions =[];


  //ask for lenght of password
  var pswC_lenght = window.prompt(`How many characters should the password have?\nselecte a number between 8-128 characters`, "16");
  if(pswC_lenght < 8 || pswC_lenght > 128){
    window.alert("Please select between 8 and 128!");
        return;
  }


  //ask for criteria & add characters to characterOptions to pick from
  var pswC_lowercase = window.confirm("Do you want to include lower case characters?");
    if(pswC_lowercase){
      characterOptions = characterOptions.concat(psw_alphabetLower);
      console.log(characterOptions);
    }
  var pswC_uppercase = window.confirm("Do you want to include upper case characters?");
    if(pswC_uppercase){
      characterOptions = characterOptions.concat(psw_alphabetUpper);
      console.log(characterOptions);
    }
  var pswC_numbers = window.confirm("Do you want to include numbers?");
    if(pswC_numbers){
      characterOptions = characterOptions.concat(psw_numbers);
      console.log(characterOptions);
    }
  var pswC_special = window.confirm("Do you want special characters?");
    if(pswC_special){
      characterOptions = characterOptions.concat(psw_special);
      console.log(characterOptions);
    }
  
  if(!pswC_lowercase && !pswC_uppercase && !pswC_numbers && !pswC_special){
    window.alert("Please select at least one type of character!");
        return;
  }

 
  //generate random password based on characterOptions and user prompted password length
  for (var i = 0; i < pswC_lenght; i++ ){
    passwordMaker = passwordMaker + 
    characterOptions[
      Math.floor(Math.random()*characterOptions.length)
    ];
  }

  //create randomCharacter from the CharacterOptions





  return (passwordMaker);
}


// generate all the random selection for the array indexes
// function randomAlphabetIndex(){
//   var random_alphabet_index = Math.floor(Math.random()*psw_alphabet.length);
//   return (random_alphabet_index);
// }

// function randomNumberIndex(){
//   var random_number_index = Math.floor(Math.random()*psw_number.length);
//   return (random_number_index);
// }

// function randomSpecialIndex(){
//   var random_special_index = Math.floor(Math.random()*psw_special.length);
//   return (random_special_index);
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

 //array of options 
var passwordCriteria = [];
var passUppercase = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passLowercase = ["a","b","c","d","e","f","g","h","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passNumbers = ["1", "2","3","4","5","6","7","8","9","0"];
var passSymbols = ["!","@","$","%","&","*","^","#","/","?","=","+","~",">","<","-","_"];
var passwordCriteriaMet = [].concat(passUppercase,passLowercase,passSymbols,passNumbers)
console.log (passwordCriteriaMet)


var passLength = 0
while (passLength <8 || passLength >128) {
  window.alert("Your password must be between 8-128 characters long.");
  var passLength = (prompt("Choose length below and click OK to confirm."));
  console.log("Length chosen : " + passLength)
}

//turning this values to false because its showing true in console
var passwrdUppercase = false;
var passwrdLowercase = false;
var passwrdNumbers = false;
var passwrdSymbols = false;

while (passwrdUppercase===false && passwrdLowercase===false && passwrdNumbers===false && passwrdSymbols===false){
  window.alert("Would you like to create password?")
var passwrdUppercase = window.confirm("Password will contain at least one uppercase letter, click OK")
  console.log("User added uppercase letters :" + passwrdUppercase)
var passwrdLowercase = window.confirm("Password will contain at least a lowercase letter, click OK")
  console.log ("User added lowercase letters :" + passwrdLowercase)
var passwrdNumbers = window.confirm ("Password will contain at least a number, click OK")
  console.log("User added numbers :" + passwrdNumbers)
var passwrdSymbols = window.confirm("Password will contain at least a symbol, click OK")
  console.log("User added symbols :" + passwrdSymbols)
}
//
if (passwrdUppercase){
  passwordCriteria = passwordCriteria.concat(passwrdUppercase);
    console.log("Uppercase criteria added, show uppercase letters" + passUppercase); 
}
if (passwrdLowercase){
  passwordCriteria = passwordCriteria.concat(passwrdLowercase);
    console.log("Lowercase criteria added, show lowercase letters" + passLowercase); 
}
if (passwrdNumbers){
  passwordCriteria = passwordCriteria.concat(passwrdNumbers);
    console.log("Numbers criteria added, show numbers" + passNumbers); 
}
if (passwrdSymbols){
  passwordCriteria = passwordCriteria.concat(passwrdSymbols);
    console.log("Symbols criteria added, show symbols"+ passSymbols); 
}

function generatePassword(){
// create a for loop to choose password characters
for (i=0; i<passLength; i++){
  passwordCriteria = passwordCriteria + passwordCriteriaMet[Math.floor(Math.random()* passwordCriteriaMet.length)];
  console.log(passwordCriteria);
}
return passwordCriteria;
}



//var passLength = number.parseInt(passLength);
//function randomItem(passLength){
  //return Math.floor(Math.random()* passLength);
//};


//look up spread operator & console.log it (then check it)
//if (passwrdNumbrs){
  //passwordCriteria.push(passwordNumbers);
//console.log(passwordCriteria);
//};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


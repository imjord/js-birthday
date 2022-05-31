let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
// user bitrth month
let userMonth = prompt("What is your birth month?");
// alert birth month and season
let season = "";
if (userMonth === "january" || userMonth === "february" || userMonth === "march") {
    season = "Winter";
   
} else if (userMonth === "april" || userMonth === "may" || userMonth === "june") {
    season = "Spring";
} else if (userMonth === "july" || userMonth === "august" || userMonth === "september") {
    season = "Summer";
} else if (userMonth === "october" || userMonth === "november" || userMonth === "december") {
    season = "Autumn";
}
alert("Your name is " + userName + " and you are " + userAge + " years old. Your birth month is " + userMonth + " and you were born in the " + season + " season.");
// if user is over 50 years old
// if (userAge > 50) {
//   alert("hello " + userName + "your age is " + userAge + " and you are old!");
// } else {    // if user is under 50 years old
//     alert("hello " + userName + "your age is " + userAge + " and you are young!");

//     }
// alert("Hello " + userName + "! You are " + userAge + " years old." + " You were born in " + userMonth + ".");
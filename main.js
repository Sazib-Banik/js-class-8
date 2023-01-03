// function example...
const calculateAge = function(birthYear){
  return 2023 - birthYear;
}
let age = calculateAge(1997);
console.log(age);

// function calling other function...
const jobLeft = function(birthYear){
  const age = calculateAge(birthYear);
  return 65 - age;
}
age = jobLeft(1997);
console.log(age);

//JavaScript Events... ... ...
function displayText(){
  console.log("this is console text..");
}

function mouseHover(){
  console.log("this is mouseHover text...");
}

function alertText(){
  alert("this is alert text..");
}

// JavaScript Strings... ... ...
let firstName = "Asif ";
let lastName = "Akbar";
console.log("your name is " + firstName + lastName);
console.log(`Your name is ${firstName} ${lastName}`);

//example - 1
let text = 'I love "Bangladesh"!';
console.log(text);

//example - 2
text = "I live in 'Chittagong'";
console.log(text);

// escape character ( \ )
text = "I love \"Bangladesh\"!";
console.log(text);

text = "I live in \\ Chittagong";
console.log(text);

// Strings Methods.. .. ..
let name = "sazib banik";

// length Property
console.log(name.length);

//slice (left to right) or positive slice
let fruit = "Apple, Banana, Mango, Orange";
console.log(fruit);

let fruit1 = fruit.slice(0, 5);
console.log(fruit1);

let fruit2 = fruit.slice(7, 13);
console.log(fruit2);

let fruit3 = fruit.slice(15, 20);
console.log(fruit3);

let fruit4 = fruit.slice(22, 28);
console.log(fruit4);

// slice (right to left) or negative slice
let fruit5 = fruit.slice(-6);
console.log(fruit5);

let fruit6 = fruit.slice(-13, -8);
console.log(fruit6);

// substring 
let fruit7 = fruit.substring(0, 5);
console.log(fruit7);

//replace
text = "i love bangladesh.";
text = text.replace("bangladesh", "feni");
console.log(text);

// toUpperCase
let name1 = "othoi";
name1 = name1.toUpperCase();
console.log(name1);

//toLowerCase
name1 = name1.toLowerCase();
console.log(name1);

//trim
text = "            this is text           ";
let trimtext = text.trim();
console.log(trimtext);

trimtext = text.trimStart();
console.log(trimtext);

trimtext = text.trimEnd();
console.log(trimtext);

//search or indexOf both work process are same but they have some difference...
const para = "my name is sazib banik.i am a student. my home town is feni.";
let searchWord = para.indexOf("student");
console.log(searchWord);

searchWord = para.search("student");
console.log(searchWord);















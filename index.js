/************************************************************** Task 1: Warm-up! **************************************************************/

//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 19;

if (votingAge>18) {
    console.log(true);
}
else{
    console.log(false);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var change = 23; //any number
var condition = 44;


if (condition !== change){
    change = condition;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var convert = "1999";

console.log(Number(convert));



//Task d: Write a function to multiply a*b 
var a=2;
var b=3;

console.log(a*b);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
var humanAge =5;
console.log(humanAge*7);




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  var weight = 5;
  var age = 0.7;
  var food;

  if (age >= 1) {
      if (weight <= 5) {
          food = weight*0.5;
          console.log('You should feed: ' + food);
      }
      else if (weight <= 10) {
        food = weight*0.4;
        console.log('You should feed: ' + food);
      }
      else if (weight <= 15) {
        food = weight*0.3;
        console.log('You should feed: ' + food); 
      }
      else{
        food = weight*0.2;
        console.log('You should feed: ' + food);
      }
  }
  else if (age <= 0.25) {
    food = weight*0.1;
    console.log('You should feed: ' + food);
  }
  else if (age <= 0.5) {
    food = weight*0.05;
    console.log('You should feed: ' + food);
  }
  else {
    food = weight*0.04;
    console.log('You should feed: ' + food);
  }





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var computer = 2;
var user = 3;
var rock = 1;
var paper = 2;
var scissor = 3;

if ( Math.floor(Math.random()*3)+1);

if(user === 1 && computer === 1){
    console.log('Tied');
}
else if (user === 1 && computer === 2) {
    console.log('Computer wins');
}
else if (user === 1 && computer === 3) {
    console.log('User wins');
}
else if (user === 2 && computer === 1) {
    console.log('User wins');
}
else if (user === 2 && computer === 2) {
    console.log('Tied');
}
else if (user === 2 && computer === 3) {
    console.log('Computer wins');
}
else if (user === 3 && computer === 1) {
    console.log('Computer wins');
}
else if (user === 3 && computer === 2) {
    console.log('User wins');
}
else if (user === 3 && computer === 3) {
    console.log('Tied');
}

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
var km;
var mi;

mi = km*0.621371;

console.log(mi);




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
var feet;
var cm;

cm = feet*30.48;

console.log(cm);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

var soda = 99;

for (let index = 0; index < 99; index++) {
    // console.log( soda + ' numbers of soda on the wall' );
    console.log(`${soda} numbers of soda on the wall. `);
    soda--;
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

var mark = 80;
if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 80 ) {
    console.log("Grade B");
}
else if (mark >= 70) {
    console.log("Grade C");
}
else if (mark >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstname='Tou '; console.log(firstname);
// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName='Yang'; console.log(lastName);
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
fullName = firstname + lastName; 
console.log(fullName);
// 4 - Console log the value of `fullName`
console.log( fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber=25; console.log(luckyNumber);
// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

console.log('My name is', fullName, 'and i think', luckyNumber, 'is a winner' );

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

let adventurous= true; 
console.log(adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food='pho'; console.log(food);
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets=1; console.log(pets);
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets= 2; console.log(friendsPets);
// 11 - Add two pets to your `pets` variable pets ++; adds one to pets, pets--;
pets += 2;  console.log(pets);
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice.
const allowedPets= 10; console.log(allowedPets);
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"

// if we have the right amount of gear, we can go on adventure 'adventures are great'
//if we have too much gears, we leave some behind. 'need to leave some gears behind'
//if we dont have enough gear, we probably shouldn't go. 'How about we stay home.' 

let gears= 5;
let neededGears = 6; 
if (neededGears === gears){
    console.log('adventures are great')
}

else if( gears > neededGears ){
   console.log('need to leave some gear behind');
}

else  {
    console.log('How about we stay home');
}


// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
//compound conditional has these elements && ||.  
// and && both side must be true.
//or || either side can be true. 
//example: else if ( x1 == x2 || x3 == x4){console.log('text')}
//if you luckyNumber is 2 'Roll the dice.
// if your luckyNumber is > 2 skip your turn.
// if your luckyNumber is < 2 roll two times. 

 let luckNumber = 7;

if (luckNumber === 2 || luckNumber === 7) {
    console.log('Roll the dice!');
}

else if( luckNumber > 8 && luckNumber == 13 ) {
    console.log('skip your turn');}


//else if (luckNumber < 2 ){
    //console.log('roll two times ');}

else  {
console.log('roll two times ');}

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

//If I have less than allowedPets, 'I can have more pets'
//If I have the max amount as alowedPets, 'I have enough pets'
//If i have over the amount of allowedPets, " Oh no I  have too many pets"

pets= 10;
 maxAllowedPets =10;

if (pets < maxAllowedPets ) {
    console.log('I can have more pets');
}

else if( pets ==maxAllowedPets ){
    console.log('I have enough pets');
}

else {
    console.log('oh no I have too many pets');
}
// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

let mostPets = if (pets > friendsPets || friendsPets > pets)
console.log(mostPets);






// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!


 
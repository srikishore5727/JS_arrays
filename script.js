// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
myFavSuperheroes=["Dhanush","Iron-Man","Thor","Captain America","Spider-Man","Batman"];
// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log(myFavSuperheroes[0]);
// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavSuperheroes.length);
// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
myFavSuperheroes[myFavSuperheroes.length-2] = "sri kishore";
console.log(myFavSuperheroes);
// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
myFavSuperheroes.unshift("Mani kandan");
console.log(myFavSuperheroes);
// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
myFavSuperheroes.push("Mithun Raj");
console.log(myFavSuperheroes);
// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
myFavSuperheroes.shift();
console.log(myFavSuperheroes);
// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
myFavSuperheroes.pop();
console.log(myFavSuperheroes);
// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavSuperheroes.splice(2,0,"Mani Kandan");
console.log(myFavSuperheroes);
// Challenge 10:  Remove the 4th and 5th element in the array "myFavSuperheroes",  and add your friend's name (friend 2) at the 4th position using the splice method.
myFavSuperheroes.splice(3,2);
myFavSuperheroes.splice(3,0,"Mithun Raj");
console.log(myFavSuperheroes);
// Challenge 11:  Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
var superheroUniverse = [
  ["Iron-Man", "Thor", "Captain America", "Spider-Man"],
  ["Batman", "Superman", "Wonder Woman", "The Flash"]
];

// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
console.log(superheroUniverse[0][2]);
// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".
console.log(superheroUniverse[1][1])
function Dino(name, period, diet, walksOnFourLegs, yearDiscovered, popularity) {
	this.name = name;
  this.period = period;
  this.diet = diet;
  this.walksOnFourLegs = walksOnFourLegs;
  this.yearDiscovered = yearDiscovered;
  this.popularity = popularity;
}

let dino1 = new Dino("Tyrannosaurus rex", "Mesozoic", "Carnivore", false, 1902, 999);
let dino2 = new Dino("Brachiosaurus", "Jurassic", "Herbivore", true, 1900, 959);
let dino3 = new Dino("Parasaurolophus", "Cretaceous", "Herbivore", true, 1922, 500);
let dino4 = new Dino("Stegosaurus", "Jurassic", "Herbivore", true, 1876, 903);

let dinoList = [dino1, dino2, dino3, dino4];

// console.log(dinoList);

// The client wants users to be able to search for a dinosaurs by diet and period. 
// Write a method that takes in three parameters: a value for the period, a value for the diet, and an array of dinosaur objects to filter.

// Example:

// Given: "Jurassic", "herbivore", [ dino1, dino2, dino3, dino4 ]
// Return: [ dino2, dino4 ]

// searchDino(dino1[1],)



function searchDino (period, diet, array) {
  console.log(period)
  console.log(diet)
  console.log(array)

  let filteredArr = [];

//   for (i = 0; i < array.length; i++) {

//     if (array[i].period.toUpperCase() === period.toUpperCase() && array[i].diet.toUpperCase() === diet.toUpperCase()) {
//  //     filteredArr.push(array[i])
//     }

//   }

//   return filteredArr;
}

function parsedList(){
  dinoList.filter(b => b.diet === "Herbivore" && b.period === "Jurassic");
console.log(parsedList);
}

//searchDino("Jurassic", "herbivore", dinoList);
//console.log(searchDino("Jurassic", "herbivore", dinoList));
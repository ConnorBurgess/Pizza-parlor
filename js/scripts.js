//Business Logic
function Pizza(topping, size, ) {
	this.topping = topping;
  this.size = size;
  this.toppings = ["cheese"];

}

  Pizza.prototype.pizzaCost = function() {
  for (i = 0; i >= this.toppings.length; i++)
  {
    console.log("Failed test")
  }
}


//Testing constructor / prototypes (dev)
let firstPizza = new Pizza("cheese", "medium")

console.log(firstPizza)
console.log(firstPizza.toppings.length)
//UI Logic

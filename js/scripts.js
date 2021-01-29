//Business Logic
function Pizza(topping, size, ) {
	this.topping = topping;
  this.size = size;
  this.toppings = ["cheese"];
  this.totalCost = 0;
}

Pizza.prototype.pizzaCost = function() {
  for (i = 0; i < this.toppings.length; i++)
  console.log("hello");
  this.totalCost = 3;
  console.log(this.totalCost)
  

}

//UI Logic
let firstPizza = new Pizza("cheese", "medium")
firstPizza.pizzaCost();




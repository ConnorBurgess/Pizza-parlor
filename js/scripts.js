//Business Logic
function Pizza(topping, size,) {
  this.topping = topping;
  this.size = size;
  this.toppings = ["cheese", "cheese"];
  this.totalCost = 0;
}

Pizza.prototype.pizzaCost = function () {
  // this.toppings.push(this.topping)
  for (i = 0; i < this.toppings.length; i++) {
    this.totalCost = this.totalCost + 3;
    console.log(this.totalCost)
  }

  return ( this.size === "small" ? this.totalCost += 10
      : this.size === "medium" ? this.totalCost += 14
        : this.size === "large" ? this.totalCost += 20
          : this.totalCost += 24);
}

Pizza.prototype.createPizza = function () {
  
}
//UI Logic
let firstPizza = new Pizza("cheese", "medium")
firstPizza.pizzaCost();
console.log(firstPizza)




//Business Logic
function Pizza(topping, size, ) {
	this.topping = topping;
  this.size = size;
  this.toppings = [];
  
}

function Pizza.prototype.pizzaCost = function() {
  return 0;
}

//UI Logic
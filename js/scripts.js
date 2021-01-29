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
let currentSize = ""
let toppingArr = ["cheese", "pepperoni", "olives", "fried chicken", "banana", "chicken livers", "hot pocket"]
let newPizza = new Pizza("cheese", "medium");
let clickCounter = 0;
newPizza.pizzaCost();
console.log(newPizza)



$(document).ready(function () {

  $("#btn-size").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").show();
    $("#btn-left, #btn-right").hide();

  });

  $("#btn-small, #btn-medium, #btn-large, #btn-XL").click(function (event) {
    let clickedId = $(this).attr("id").slice(4).charAt(0).toUpperCase() + $(this).attr("id").slice(5) + " ";
    $("#output-text-area").append(clickedId);
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-left, #btn-right").show();
  });

  $("#btn-right").click(function (event) {
    $("#output-text-area").append(toppingArr[clickCounter] + " ") ;
    clickCounter++;
    console.log(clickCounter.length);
    console.log(toppingArr.length);
    if (clickCounter >= toppingArr.length) {
      clickCounter = 0;
    }
  });

  $("#btn-toppings").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-left, #btn-right, #btn-add").show();
  });
});
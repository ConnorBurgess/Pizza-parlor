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
  $("#topping-text-area").text(toppingArr[clickCounter]) 
  $("#btn-toppings").hide();
  $("#btn-small, #btn-medium, #btn-large, #btn-XL").fadeIn(1500);
  $("#btn-size").click(function (event) {
    event.preventDefault();
    $("#btn-left, #btn-right, #btn-add, #btn-checkout").hide();
  });

  $("#btn-small, #btn-medium, #btn-large, #btn-XL").click(function (event) {
    let clickedId = $(this).attr("id").slice(4).charAt(0).toUpperCase() + $(this).attr("id").slice(5) + " ";
    $("#output-text-area").append(clickedId);
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-right, #btn-add, #btn-checkout, #btn-toppings").show(1000);
  });

  $("#btn-right").click(function (event) {
    $("#topping-text-area").text(toppingArr[clickCounter]) ;
    clickCounter++;
    console.log(clickCounter.length);
    console.log(toppingArr.length);
    if (clickCounter >= toppingArr.length) {
      clickCounter = 0;
    }
  });

  $("#btn-add").click(function (event) {
    console.log(toppingArr[clickCounter]);
    newPizza.toppings.push(toppingArr[clickCounter]);

  });

  $("#btn-checkout").click(function (event) {
    console.log(toppingArr[clickCounter]);
    newPizza.toppings.push(toppingArr[clickCounter]);

  });

  $("#btn-toppings").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-left, #btn-right, #btn-add").show();
  });
});
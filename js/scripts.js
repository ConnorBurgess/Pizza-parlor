//Business Logic
function Pizza() {
  this.topping = "";
  this.size = "";
  this.toppings = [];
  this.totalCost = 0;
}

Pizza.prototype.pizzaCost = function () {
  // this.toppings.push(this.topping)
  for (i = 0; i < this.toppings.length; i++) {
    this.totalCost = this.totalCost + 3;
    console.log(this.totalCost)
  }
console.log(this.size)
  return ( this.size === "Small" ? this.totalCost += 10
      : this.size === "Medium" ? this.totalCost += 14
        : this.size === "Large" ? this.totalCost += 20
          : this.totalCost += 24);
}

Pizza.prototype.createPizza = function () {

}
//UI Logic
let currentSize = ""
let toppingArr = ["cheese", "pepperoni", "olives", "fried chicken", "banana", "chicken livers", "hot pocket", "mushrooms", "candy canes", "pineapple"]
let newPizza = new Pizza();
let clickCounter = 0;

$(document).ready(function () {
  $("#topping-text-area").text(toppingArr[clickCounter]) 
  $("#btn-toppings").hide();
  $("#btn-small, #btn-medium, #btn-large, #btn-XL").fadeIn(1500);
  $("#btn-size").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").fadeIn(1500);
    $("#btn-left, #btn-right, #btn-add, #btn-checkout").hide();
  });

  $("#btn-small, #btn-medium, #btn-large, #btn-XL").click(function (event) {
    let clickedId = $(this).attr("id").slice(4).charAt(0).toUpperCase() + $(this).attr("id").slice(5) + " ";
    newPizza.size = clickedId
    console.log("Meddddium");
    $("#output-text-area").text(clickedId);
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-right, #btn-add, #btn-checkout, #btn-toppings").show(1000);
  });

  $("#btn-right").click(function (event) {
    $("#topping-text-area").text(toppingArr[clickCounter]) ;
    clickCounter++;
    if (clickCounter >= toppingArr.length) {
      clickCounter = 0;
    }
  });

  $("#btn-add").click(function (event) {
    console.log(toppingArr[clickCounter]);
    newPizza.toppings.push(toppingArr[clickCounter]);

  });

  $("#btn-checkout").click(function (event) {
    console.log(`Created a ${newPizza.size}pizza with ${newPizza.toppings}. Total Cost: ${newPizza.pizzaCost()}`);
    newPizza.totalCost = 0;
  });

  $("#btn-toppings").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-left, #btn-right, #btn-add").show();
  });
});
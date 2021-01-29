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
  return ( this.size.toString() === "Small" ? this.totalCost += 10
      : this.size === "Medium" ? this.totalCost += 14
        : this.size === "Large" ? this.totalCost += 20
          :this.size === "XL" ? this.totalCost += 24 
          : this.totalCost);
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
    let clickedId = $(this).attr("id").slice(4).charAt(0).toUpperCase() + $(this).attr("id").slice(5);
    newPizza.size = clickedId
    console.log(clickedId);
    console.log(typeof clickedId);
    $("#output-text-area").text(`Picked a ${clickedId} size pizza!`);
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-right, #btn-add, #btn-checkout, #btn-toppings").show(1000);
    $("#output-text-area").text(toppingArr[clickCounter]) ;
  });

  $("#btn-right").click(function (event) {
    $("#output-text-area").text(toppingArr[clickCounter]) ;
    clickCounter++;
    if (clickCounter >= toppingArr.length) {
      clickCounter = 0;
    }
  });

  $("#btn-add").click(function (event) {
    $("#output-text-area").text(`Added ${toppingArr[clickCounter- 1]} to the pizza!`);
    newPizza.toppings.push(" " + toppingArr[clickCounter - 1] + " ");

  });

  $("#btn-checkout").click(function (event) {
    $("#final-text-area").append(`<li> Created a ${newPizza.size} pizza with${newPizza.toppings.length >= 1 ? newPizza.toppings : " no ingredients"}. Total Cost: ${newPizza.pizzaCost()}</li>`);
    $("#final-text-area").empty();
    newPizza.totalCost = 0;
  });

  $("#btn-toppings").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-left, #btn-right, #btn-add").show();
  });
});
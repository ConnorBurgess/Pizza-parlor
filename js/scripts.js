//Business Logic
function Pizza() {
  this.size = "";
  this.toppings = [];
  this.totalCost = 0;
}
Pizza.prototype.pizzaCost = function () {
  for (i = 0; i < this.toppings.length; i++) {
    this.totalCost = this.totalCost + 3;
  }
  return (this.size.toString() === "Small" ? this.totalCost += 10
    : this.size === "Medium" ? this.totalCost += 14
      : this.size === "Large" ? this.totalCost += 20
        : this.size === "XL" ? this.totalCost += 24
          : this.totalCost);
}

//UI Logic
$(document).ready(function () {
  $("#output-text-area").text(`What size pizza tickles your fancy?`);
  let toppingArr = ["cheese", "pepperoni", "olives", "fried chicken", "banana", "chicken livers", "hot pocket", "mushrooms", "candy canes", "artichoke", "anchovy", "pineapple"];
  let newPizza = new Pizza();
  let clickCounter = 0;
  $("#btn-toppings").hide();
  $(".jumbotron").fadeIn(2500);
  $("#btn-small, #btn-medium, #btn-large, #btn-XL").fadeIn(1500);
  $("#btn-size").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").fadeIn(2500);
    $("#btn-left, #btn-right, #btn-add, #btn-checkout").hide();
  });
  $("#btn-small, #btn-medium, #btn-large, #btn-XL").click(function (event) {
    let clickedId = $(this).attr("id").slice(4).charAt(0).toUpperCase() + $(this).attr("id").slice(5);
    newPizza.size = clickedId;
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-right, #btn-add, #btn-checkout, #btn-toppings").show(1000);
    return (newPizza.size === "Small" ? $("#output-text-area").text(`Big pizza in a ${clickedId} city!`)
      : newPizza.size === "Medium" ? $("#output-text-area").text(`Strike a happy ${clickedId}!`)
        : newPizza.size === "Large" ? $("#output-text-area").text(`${clickedId} and in charge!`)
          : newPizza.size === "XL" ? $("#output-text-area").text(`${clickedId}, the best size in anything!`)
            : newPizza.size);
  });
  $("#btn-right").click(function (event) {
    $("#output-text-area").text(`Would you like some ${toppingArr[clickCounter]} on that?`);
    clickCounter++;
    if (clickCounter >= toppingArr.length) {
      clickCounter = 0;
    }
  });
  $("#btn-add").click(function (event) {
    $("#output-text-area").text(`Added ${toppingArr[clickCounter - 1]} to the pizza!`);
    newPizza.toppings.push(" " + toppingArr[clickCounter - 1] + " ");
  });
  $("#btn-checkout").click(function (event) {
    let pizzaPrice = newPizza.pizzaCost();
    $("#final-text-area").append(`<li> Bought a ${newPizza.size} pizza with${newPizza.toppings.length >= 1 ? newPizza.toppings : " no ingredients"}. Total Cost: ${pizzaPrice}</li>`);
    $("#output-text-area").text(`Just bought a pizza for $${pizzaPrice}, dude!`);
    newPizza.totalCost = 0;
    newPizza.toppings = [];
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").fadeIn(1500);
    $("#btn-left, #btn-right, #btn-add, #btn-checkout").hide();
  });
  $("#btn-toppings").click(function (event) {
    event.preventDefault();
    $("#btn-small, #btn-medium, #btn-large, #btn-XL").hide();
    $("#btn-checkout, #btn-right, #btn-add").show();
  });
});
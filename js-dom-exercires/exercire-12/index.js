var quantity = document.getElementById("quantity");
var price = document.getElementById("price");
var btn = document.getElementById("btn");
var totalPrice = document.getElementById("total-price");

btn.onclick = function () {
  var quantityVal = parseInt(quantity.value);
  var priceVal = parseInt(price.value);
  totalPrice.innerHTML = quantityVal * priceVal;
}
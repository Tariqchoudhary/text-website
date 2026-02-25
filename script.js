let cart = [];

function addToCart(product) {
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
  const modal = document.getElementById("cart-modal");
  const items = document.getElementById("cart-items");
  items.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${item}`;
    items.appendChild(li);
  });

  modal.style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

// Display Products
function renderProducts() {
  productsDiv.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsDiv.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// Remove from Cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Update Cart UI
function updateCart() {
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Price: ₹${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button onclick="addToCart(${item.id})">+</button>
      <button onclick="decreaseQty(${item.id})">-</button>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;

    cartDiv.appendChild(div);
  });

  totalSpan.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Decrease Quantity
function decreaseQty(id) {
  const item = cart.find(i => i.id === id);
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    removeFromCart(id);
  }
  updateCart();
}

renderProducts();
updateCart();
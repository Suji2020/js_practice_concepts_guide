const product = {
  name: "Parker Jotter Standard CT Ball Pen",
  color: "Black",
  rating: 4,
  reviews: 7002,
  price: 270,
  originalPrice: 285,
  discount: "5% off",
  image: "pen.jpg"   // image file path
};

document.getElementById("productImage").src = product.image;
document.getElementById("productName").innerText = product.name;
document.getElementById("productPrice").innerText = "₹" + product.price;    
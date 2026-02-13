// Create array
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log("Original Array:", companies);

// 1️⃣ Remove the first company
companies.shift();

console.log("After removing first company:", companies);

// 2️⃣ Remove Uber and add Ola in its place
let index = companies.indexOf("Uber");
if (index !== -1) {
  companies.splice(index, 1, "Ola");
}

console.log("After replacing Uber with Ola:", companies);

// 3️⃣ Add Amazon at the end
companies.push("Amazon");

console.log("Final Array:", companies);
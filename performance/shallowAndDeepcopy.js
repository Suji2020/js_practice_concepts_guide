const user = {
  name: "Suji",
  address: { city: "Chennai" }
};

const copy = { ...user };

copy.address.city = "Madurai";

console.log(user.address.city); // Madurai ❌ (changed!)

//Deep copy
const user1 = {
  name: "Suji",
  address: { city: "Chennai" }
};

const deepCopy = JSON.parse(JSON.stringify(user1));

deepCopy.address.city = "Madurai";

console.log(user1.address.city); // Chennai ✅
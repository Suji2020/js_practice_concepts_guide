let user = { profile: { name: "Suji" } };

console.log(user.profile?.name); // Suji
console.log(user.address?.city); // undefined (no error)
//Stops app from crashing if value is missing
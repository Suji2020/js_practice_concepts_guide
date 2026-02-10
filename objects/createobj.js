let user = {
  role: "user",
  login() {
    console.log("User logged in");
  }
};

let admin = Object.create(user);

admin.login();       // User logged in
console.log(admin.role); // user
//admin borrows properties from user.
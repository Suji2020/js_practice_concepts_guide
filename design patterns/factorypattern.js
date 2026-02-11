/**The Factory Pattern is used to create objects using a function.

Instead of using new, we use a function to return objects. */
function createUser(name, role) {
  return {
    name,
    role,
    greet() {
      console.log(`Hi, I am ${this.name} ${this.role}`);
    }
  };
}

const user1 = createUser("Suji", "Admin");
const user2 = createUser("Alex", "Guest");

user1.greet(); // Hi, I am Suji Admin
user2.greet(); // Hi, I am Alex Guest
/**Easy to create multiple similar objects.

Cleaner than repeating object structure again and again.

No need to use new. */
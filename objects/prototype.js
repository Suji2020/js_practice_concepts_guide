let user = {
  name: "Suji",
  sayHi() {
    console.log(this.name);
  }
};

user.sayHi();
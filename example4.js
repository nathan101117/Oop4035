let student = {
  name: "John",
  age: 22,
  greet: function() {
    return "Hello, my name is $(this.name).";
  }
};
console.log(student.greet()); // Hello, my name is John.

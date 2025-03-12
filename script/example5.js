//Getter & Setter properties
let person = {
  firstName: "Jane",
  lastName: "Doe",
  get fullName() (
  return this.firstName + " " + this.lastName;
},
set fullName(name) {
let parts = name.split(" ");
  this.firstName = parts[0];
  this.lastName = parts[1];
}
};

console.log(person.fullName); // Jane Doe
person.fullName = "Alice Johnson";
console.log(person.fullName); // Alice Johnson

function PersonViewModel() {
  this.firstName = ko.observable();
  this.lastName = ko.observable();
  this.fullName = ko.pureComputed(function() {
    return this.firstName() + " " + this.lastName();
  }, this);
  this.dateOfBirth = ko.observable();
  this.age = ko.pureComputed(function() {
    return new Date().getFullYear() - this.this.dateOfBirth().getYear();
  }, this);
}

var person1 = new PersonViewModel();
person1.firstName("Jan");
person1.lastName("Kow");
person1.dateOfBirth(new Date(1999, 1, 1));
ko.applyBindings(person1, document.querySelector("#zad3"));

var person2 = new PersonViewModel();
person2.firstName("Jasso");
person2.lastName("Baso");
person2.dateOfBirth(new Date(1999, 1, 1));

function App() {}
var persons = [];
persons.push(person1);
persons.push(person2);
ko.applyBindings(persons, document.querySelector("#zad4"));

console.log(persons);

function addToList() {
  var person = new PersonViewModel();
  person.firstName(document.getElementById("#firstName"));
  person.lastName(document.getElementById("#lastName"));
  person.dateOfBirth(document.getElementById("#dateOfBirth"));
  persons.push(person);
}

function PersonViewModel(person) {
  var self = this;

  self.firstName = ko.observable(person.firstName);
  self.lastName = ko.observable(person.lastName);
  self.fullName = ko.computed(function () {
    return self.firstName() + " " + self.lastName();
  });
  self.dateOfBirth = ko.observable(new Date(person.dateOfBirth));
  self.age = ko.computed(function () {
    return new Date().getFullYear() - person.dateOfBirth.getFullYear()
  });
}

var App = function (persons) {
  this.persons = ko.observableArray(persons);


  this.AddPerson = function (person) {
    this.persons.push(person);
  }
};

let vm = [
  new PersonViewModel({
    firstName: "Marek",
    lastName: "Bąk",
    dateOfBirth: new Date("08-29-1997")
  }),
  new PersonViewModel({
    firstName: "Mareczek",
    lastName: "Roman",
    dateOfBirth: new Date("01-01-2000")
  })
];

let app = new App(vm)
ko.applyBindings(
  app,
  document.querySelector(".zad7")
);

let vm2 = new PersonViewModel({
  firstName: "",
  lastName: "",
  dateOfBirth: new Date()
})

ko.applyBindings(
  vm2,
  document.querySelector(".zad8")
);

$("#btn1").click(() => {
  app.persons.push(vm2)
})
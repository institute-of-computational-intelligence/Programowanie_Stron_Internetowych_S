function PersonViewModel(person) {
  var self = this;

  self.firstName = ko.observable(person.firstName);
  self.lastName = ko.observable(person.lastName);
  self.fullName = ko.computed(function() {
    return self.firstName() + " " + self.lastName();
  });
  self.dateOfBirth = ko.observable(person.dateOfBirth);
  self.age = ko.computed(function() {
    return (
      new Date(Date.now()).getFullYear() -
      new Date(person.dateOfBirth).getFullYear()
    ).getM;
  });
}

var App = function(persons) {
  var self = this;
  self.persons = ko.observableArray(persons);


  self.AddPerson = function(person) {
      self.persons.push(person);
  }
};

ko.applyBindings(
  new App([
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
  ])
);

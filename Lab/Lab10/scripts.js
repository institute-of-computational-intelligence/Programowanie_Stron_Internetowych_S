function PersonViewModel () {
    this.firstName = ko.observable(),
    this.lastName =  ko.observable(),
    this.fullName = ko.pureComputed(()=> `${this.firstName()} ${this.lastName()}`,this),
    this.dateOfBirth =  ko.observable(),
    this.age = ko.pureComputed(
        ()=> new Date().getFullYear() - this.dateOfBirth().getFullYear(), this
    )
}
var appVm = {
    persons: ko.observableArray()
}
var personVm = new PersonViewModel()
personVm.firstName("Jan")
personVm.lastName("Kowalski");
personVm.dateOfBirth(new Date(1980, 2, 15))

var personVm2 = new PersonViewModel()
personVm2.firstName("Adam")
personVm2.lastName("Nowak");
personVm2.dateOfBirth(new Date(1985, 2, 15))

appVm.persons.push(personVm);
appVm.persons.push(personVm2);
ko.applyBindings(personVm, document.querySelector(".zad3"));
ko.applyBindings(appVm, document.querySelector(".zad4"));
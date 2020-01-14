class Person {
    constructor(firstName, lastName, dateofBirght) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateofBirght = dateofBirght;
        this.fullName = firstName + " " + lastName;
        this.age = new Date().getFullYear() - dateofBirght.getFullYear();
    }
}
let viewModel = {
    firstName: ko.observable(),
    lastName: ko.observable(),
    dataOfBirth: ko.observable(),
    fullName: firstName + " " + lastName,
    age: new Date().getFullYear() - dateofBirght.getFullYear()
}
let App = {
    Persons: ko.
}
ko.applyBindings(viewModel);
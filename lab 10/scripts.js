

function PersonViewModel() {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.fullName = ko.pureComputed(() => {this.firstName() + " " + this.lastName()}, this);
    this.dateOfBirth = ko.observable();
    this.age = ko.pureComputed(() => {new Date().getFullYear() - this.dateOfBirth.getFullYear()}, this);
};

var App = {
    person: ko.observable(),
    persons : ko.observableArray(),
    AddPerson :function() {
        this.persons.push(this.person);
    }
};

var person = new PersonViewModel()
person.firstName("aaaa")
person.lastName("bbbb")
person.dateOfBirth(new Date(2000,1,2))
App.persons.push(person);

// let vm1 = [
//     new PersonViewModel({
//         firstName: "Marek",
//         lastName: "Bąk",
//         dateOfBirth: new Date("01-01-2000")
//     }),
//     new PersonViewModel({
//         firstName: "Mareczek",
//         lastName: "Lis",
//         dateOfBirth: new Date("01-01-1995")
//     })
// ];

// let x = new App(vm1)
// // console.log(x.persons)
// ko.applyBindings(x, document.querySelector(".zad7"));

// let vm2 = 
//     new PersonViewModel({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: new Date()
//     })
//  ;

ko.applyBindings(App, document.querySelector(".zad8"));

// document.getElementById("add-btn").addEventListener("click", x.AddPerson(vm2));
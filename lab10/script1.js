function PersonViewModel(firstName, lastName, dateOfBirth) {
    this.firstName = ko.observable(firstName);
    this.lastName = ko.observable(lastName);
    this.fullName = ko.computed(
        () => {
            return this.firstName() + " " + this.lastName()
        }
    );
    this.dateOfBirth = ko.observable(dateOfBirth);
    this.age = ko.pureComputed(
        () => {
            console.log(this.dateOfBirth().getDay())
            if ((new Date().getMonth()) >= this.dateOfBirth().getMonth() &&
                (new Date().getDay()) >= this.dateOfBirth().getDay())
                return (new Date().getFullYear()) - this.dateOfBirth().getFullYear();
            else {
                return ((new Date().getFullYear()) - this.dateOfBirth().getFullYear()) - 1;
            }
        }
    );
};
/*
persons = [];
function app(person) {
    persons.push(person);
    //ko.applyBindings(person);
    console.log(persons);
}*/

var appVM = {
    persons: ko.observableArray()
}

$(function() {
    var obj = new PersonViewModel("Ala", "Kot", new Date(1997, 08, 08));
    var obj1 = new PersonViewModel("Dawid", "Koty", new Date(1998, 08, 08));
    obj.firstName("Tomek");
    //app(obj);
    appVM.persons.push(obj);
    appVM.persons.push(obj1);
    ko.applyBindings(appVM, document.querySelector("table"));
    ko.applyBindings(obj, document.getElementById("zad1"));
});

obj3 = new PersonViewModel("", "", new Date(""));
ko.applyBindings(obj3, document.getElementById("zad"));

$("#sub").on("click", () => {
    console.log(obj3);
    appVM.persons.push(obj3);
})
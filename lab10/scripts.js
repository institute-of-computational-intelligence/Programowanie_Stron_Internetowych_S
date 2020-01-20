function PersonViewModel() {
    this.firstName = ko.observable(),
        this.lastName = ko.observable(),
        this.fulName = ko.pureComputed(
            () => `${this.firstName()} ${this.lastName()}`, this
        )
    this.dateofBirth = ko.observable(),
        this.age = ko.pureComputed(
            () => new Date().getFullYear() - this.dateofBirth.getFullYear(),
        )
}

var AppVm = {
    persons: ko.observableArray()
}

var personVm = new PersonViewModel();
personVm.firstName("Jan");
personVm.lastName("Kowalsk");
personVm.dateofBirth(new Date(1990, 2, 15));


var personVm2 = new PersonViewModel();
personVm2.firstName("Adam");
personVm2.lastName("Nowak");
personVm2.dateofBirth(new Date(1999, 7, 10));


AppVm.persons.push(personVm);
AppVm.persons.push(personVm2);

ko.applyBindings(personVm, document.querySelector(".zad3"));
ko.applyBindings(AppVm, document.querySelector(".zad4"));
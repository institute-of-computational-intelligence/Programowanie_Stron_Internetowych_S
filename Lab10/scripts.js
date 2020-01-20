function PersonViewModel(){
    this.FirstName = ko.observable(),
    this.LastName = ko.observable(),
    this.FullName = ko.pureComputed(()=> '${this.FirstName()} ${this.LastName()}', this),
    this.DateOfBirth = ko.observable(),
    this.Age = ko.pureComputed(
         ()=> new Date().getFullYear() - this.DateOfBirth.getFullYear(), this 
        )
}

var appVm = {
    persons: ko.observableArray()
}

var personVm = new PersonViewModel();
personVm.FirstName("Jan");
personVm.LastName("Kowalski");
personVm.DateOfBirth(new Date(1990,2,15));

var personVm2 = new PersonViewModel();
personVm2.FirstName("Adam");
personVm2.LastName("Nowak");
personVm2.DateOfBirth(new Date(1995,2,15));

appVm.persons.push(personVm);
appVm.persons.push(personVm2);

ko.applyBindings(personVm, document.querySelector(".zad3"));
ko.applyBindings(appVm, document.querySelector(".zad4"))
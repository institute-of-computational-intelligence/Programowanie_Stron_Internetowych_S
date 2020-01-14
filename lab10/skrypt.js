var PersonViewModel = function() {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.fullName = ko.pureComputed(() => `${this.firstName} ${this.lastName}`, this);
    this.dateOfBirth = ko.observable();
    this.age = ko.pureComputed(() => new Date().getFullYear() - this.dateOfBirth.getFullYear(), this);
};

var p1 = new PersonViewModel();
p1.firstName = "Ddddd";
p1.lastName = "FFF";
p1.dateOfBirth = new Date('1995-12-17');
ko.applyBindings(p1, document.querySelector(".zad1"));


//odtada
/*
var App = function(){
    persons : ko.observableArray();

    this.addItem() = function(){
        this.persons.push();
    }
};

//ko.applyBindings(new BetterListModel();

var app1 = new App();
app1.persons = p1;
ko.applyBindings(app1.persons, document.querySelector(".zad1"));
*/





class PersonViewModel
{
    constructor(firstName, lastName, dateOfBirth)
    {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.dateOfBirth = ko.observable(dateOfBirth);
        this.birthDay = ko.pureComputed(_=>this.dateOfBirth().toLocaleDateString());
        this.fullName = ko.computed(_=>`${this.firstName()} ${this.lastName()}`,this);
        this.age = ko.computed(_=>new Date().getFullYear()-this.dateOfBirth().getFullYear(),this);
    }  
}

var app =
{
    people: ko.observableArray(),
    addPerson: _=>
    {
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let dateOfBirth = document.querySelector("#dateOfBirth").value;
        app.people.push(new PersonViewModel(firstName,lastName,new Date(dateOfBirth)));
    }
};

app.people.push(new PersonViewModel("Karbol","Barszcz",new Date(1997,3,12)));
app.people.push(new PersonViewModel("Asdrian","Zaqjeden",new Date(2001,7,11)));

window.addEventListener("load",_=>
{
    ko.applyBindings(app, document.querySelector(".zad7"));
    document.querySelector("#addPerson").addEventListener("click",app.addPerson);
});


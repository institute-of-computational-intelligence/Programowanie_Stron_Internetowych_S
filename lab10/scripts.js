    var PersonViewModel = function(){
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.fullName = ko.pureComputed(function(){
        return this.firstName() + " " + this.lastName();
    }, this);
    this.dateOfBirth = ko.observable();
    this.age = ko.pureComputed();
};


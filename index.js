"use strict";
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName:', this.lastName);
        var row2 = document.getElementById("#r1c2");
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
    };
    return Greeter;
}());
exports.Greeter = Greeter;
//const greeter = new Greeter('Krishan', 'Verma');
//greeter.showGreeting();
window.onload = function () {
    var greeter = new Greeter('Krishan', 'Verma');
    //greeter.showGreeting();
};

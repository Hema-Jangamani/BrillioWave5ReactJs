var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("welcome");
var username;
username = "Hello";
var age;
age = 20;
var countries = ["India", "China", "England"];
var arr;
arr = ["Hello", 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 20] = "Blue";
    Color[Color["Yellow"] = 30] = "Yellow";
})(Color || (Color = {}));
;
var x = Color.Blue;
console.log(x);
var colorName = Color[10];
console.log(colorName);
var z = 5;
console.log(z);
z = "Welcome";
console.log(z);
var num;
function Show() {
    console.log('Welcome to TypeScript');
}
Show();
function sayHello(username) {
    return "Hello " + username;
}
console.log(sayHello('John'));
var Person = /** @class */ (function () {
    function Person(name) {
        this.username = name;
    }
    Person.prototype.DisplayUsername = function () {
        console.log("hello " + this.username);
    };
    return Person;
}());
var p = new Person("Peter");
p.DisplayUsername();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    return Student;
}(Person));
var s = new Student("Tony");
s.DisplayUsername();

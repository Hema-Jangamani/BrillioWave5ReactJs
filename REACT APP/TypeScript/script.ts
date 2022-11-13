console.log("welcome")

let username:string;
username="Hello";

let age:number;
age=20;

var countries:Array<string>=["India","China","England"];

var arr:[string,number];
arr=["Hello",10];

enum Color{Red=1,Green=10,Blue=20,Yellow=30};
var x:Color=Color.Blue;
console.log(x);

var colorName:string=Color[10];
console.log(colorName);

var z:unknown=5;
console.log(z);

z="Welcome";
console.log(z);

var num:any;

function Show(): void{
    console.log('Welcome to TypeScript');
}
Show();

function sayHello(username:string):string{
    return `Hello ${username}`;
}
console.log(sayHello('John'));

class Person{
    public username:string;
    constructor(name:string){
        this.username=name;
    }
    DisplayUsername():void{
        console.log(`hello ${this.username}`);
    }
}
var p=new Person("Peter");
p.DisplayUsername();

class Student extends Person{
    public mark:number;
    constructor(name:string){
        super(name);
    }
}
var s=new Student("Tony");
s.DisplayUsername();
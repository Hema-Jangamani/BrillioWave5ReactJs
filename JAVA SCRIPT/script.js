// var message = 'Hello';
// console.log(typeof message);

// let firstname='Hema';
// console.log(firstname);
// //var num;
// function f1(){
//     let num=10;
//     console.log(num);
// }
// //console.log(num);

// const age=10;
// //age=20;
// console.log(age);

//Two categories of datatypes in javascript
//1.primitive - string,number,boolean,null,undefined
//2.non primitive- object,array

// var num=null;
// console.log(num);

// const Product={
//     Id: 1,
//     Name: 'Laptop',
//     Brand: 'Dell',
//     show(){
        // console.log(`${this.Id} ${this.Name} ${this.Brand}`);
//     }
// }
// Product.Name='Camera';
// Product.show();

//var fruits= ['Apple', 'Banana', 'Citrus'];
// var fruits =new Array(5);
// fruits[0]='Apple';
// fruits[1]='Banana';
// fruits[2]='Cherry';

// var fruits=new Array('Apple', 'Banana', 'Citrus');
// console.log( fruits[0]);

// var arr=[1,'Apple'];
// console.log(arr);

var arr=[10,20,30];
console.log(arr.length);//size of array

arr.push(40);//push-add new item to an array
console.log(arr);

arr.unshift(100);
console.log(arr);//add value in the beginning

arr.splice(1, 2);
console.log(arr);

arr.splice(1, 2, 1, 2, 3, 4);
console.log(arr);

console.log(arr.indexOf(100));

// let sum=0;
// for (let index = 0; index < arr.length; index++) {
//     sum=sum+arr[index];
    
// }
// console.log(sum);

// let res=arr.reduce((total, num)=>{
//     return total+num;
// });
// console.log(res);

// let num=[[10,20],[30,40,50],[30,40],[90,100]];
// let res=num.reduce((prevalue, currentvalue) =>{
//    return prevalue.concat(currentvalue);
// });
// console.log(res);

let nums1=[10,20,30];
let nums2=[50,60];
let newarr=[...nums1, ...nums2];
console.log(newarr);

// arr.forEach((value, index)=>{
//    console.log(value);
// });

// arr.map((value, index) => {
//     console.log(value);
// });

// const persons=[
//     {
//         name:'John',
//         email:'john@gmail.com',
//         age:20,
//         city:'Bangalore'
//     },
//     {
//         name:'peter',
//         email:'peter@gmail.com',
//         age:22,
//         city:'Bangalore'
//     },
//     {
//         name:'steve',
//         email:'steve@gmail.com',
//         age:24,
//         city:'Bangalore'
//     },
//     {
//         name:'mary',
//         email:'mary@gmail.com',
//         age:26,
//         city:'Bangalore'
//     }
// ]

// persons.forEach((value,index)=>{
//     console.log(value.name);
// });

// let result=persons.map((value,index)=>{
//     return value.name;
// });

// console.log(result);

// let res=persons.filter(x=> x.age>25);
// console.log(res);

// let data = persons.find(item=>item.email=='john@gmail.com');
// console.log(data);
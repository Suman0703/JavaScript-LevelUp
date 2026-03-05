// Object Literal 
let student = {
    id: 1,
    name: "Suman",
    marks: 90
};

document.write(student.id + " " + student.name + " " + student.marks+"<br>");


//By creating instance of object 
let car = new Object();

car.Brand = "Honda";
car.Model = "City";
car.price = "120000";

document.write(car.Brand + " " + car.Model + " " + car.price+"<br>");


//Creating Object using Constructor function 
function Person(ame,age){
    this.ame = ame;
    this.age = age;
}

let p = new Person("Suman", 19);
document.write(p.ame +" "+ p.age);


//Adding method inside Constructor Function 
function BankAccount(name, balance){
  this.name = name;
  this.balance = balance;

  this.deposit = function(amount){
    this.balance = this.balance + amount;
  }
}

let b = new BankAccount("Sita", 5000);

document.write("<br>" +b.name + " " + b.balance);   // Before deposit
b.deposit(2000);                             // Method call
document.write("<br>" + b.name + " " + b.balance);  // After deposit

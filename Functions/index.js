//function declaration

//a.without parameters
function add() {
    let x = 2;
    let y = 3;
    let sum = x + y;
    document.write(sum, "<br>");
}

add();

//b.function with arguments
function addition(a, b) {
    total = a + b;
    document.write(total,"<br>");
}

addition(2, 3);

//c.function with return value 
function getvalue() {
    return "hello JS! <br>"
}

document.write(getvalue());

//Anonymous function 
// A function without a name is called anonymous function 
let variable = function(){
    document.write("Hi from anonymous function <br>");
}

variable();

//Arrow function 
let Sum = (c,d)=>{
let give = c+d;
document.write(give,"<br>");
}

Sum(4,6);

// Immediately Invoked Function 
(function(){
    document.write("I was not called Separetaly by name <br>");
})();

(()=>{
    document.write("I am Arrow function <br>")
})();


//Function Constructor 
let New = new Function (document.write("Hi<br>"));
 
//Async Function
let getdata = async()=>{
let num = await 90;
document.write(num);
}

getdata();
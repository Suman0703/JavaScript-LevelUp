document.write("Hello JavaScript! <br>");

//local variable 
function sum(){
    let x = 11;
    let y = 12;
    let sum = x+y;
    document.write(sum +"<br>");
}

sum();

//Global Variable

 let a = 21;
 let b = 14;

 function s() {
    let total =  a+b;
    document.write(total);
 }

s();

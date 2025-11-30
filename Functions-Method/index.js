//call()
/* this is used to call a function by passing 
1. a custom this value 
2. arguments one by one 
*/

function greet(city){
    document.write("hello"+"\n"+this.name+"\n" +"from" + "\n" + city +"<br>")
}

const person = { name:"Suman"};
greet.call(person, "Hoshiarpur");


//apply 
//arguments are given in array 
function Greet(City, Country){
document.write(`Hello ${this.Name} from ${City}, ${Country}`)
}

const p = {Name: "Suman"};

Greet.apply(p, ["Hoshiarpur","India"]);


//bind
// it does not call the function immediately it creates a new function to call the other 
function Gre(){
document.write("<br>"+"Hello"+ this.am +"<br>");
}

const per = { am: "Suman"};

const newFunc = Gre.bind(per);

newFunc();


//toString()
//return the function code as string 
function add(){
    let a = 9;
    let b = 5;
    document.write(a+b);
}

document.write(add.toString());

let btn_1 = document.getElementById("btn");

btn_1.addEventListener("click", () => {
    let count = Number(document.getElementById("count").innerText);
    count = count + 1;
    document.getElementById("count").innerText = count;
});

let btn_2 = document.getElementById("btn1");

btn_2.addEventListener("click", () => {
    let count = Number(document.getElementById("count").innerText);
    if(count > 0){
    count = count - 1;
    document.getElementById("count").innerText = count;
    } else{
        alert("Count can't go below ")
    }
});

let btn_3 = document.getElementById("resetBtn");

btn_3.addEventListener("click", () => {
    let count = Number(document.getElementById("count").innerText);
    count = 0;
    document.getElementById("count").innerText = count;
});

let btn_4 = document.getElementById("checkBtn");

btn_4.addEventListener("click", () => {
    let marks = Number(document.getElementById("marks").value);
    let result = marks >= 40 ? "Pass" : "Fail";
    
    document.getElementById("status").innerText = result;
});
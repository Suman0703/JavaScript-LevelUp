//FOR LOOP — repeat fixed number of times
console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//WHILE LOOP — runs until condition becomes false
console.log("WHILE LOOP:");
let x = 1;
while (x <= 5) {
    console.log(x);
    x++;
}

//DO-WHILE LOOP — runs at least once
console.log("DO-WHILE LOOP:");
let y = 1;
do {
    console.log(y);
    y++;
} while (y <= 5);

//NESTED LOOP — loop inside a loop
console.log("NESTED LOOP:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}


//FOR-OF LOOP — best for arrays
console.log("FOR-OF LOOP:");
const numbers = [10, 20, 30];
for (let value of numbers) {
    console.log(value);
}

//FOR-IN LOOP — best for objects (keys)
console.log("FOR-IN LOOP:");
const student = {
    name: "Amit",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

//Array Literal 
let rray = [1,2,3,5,"Suman"]

for ( i =0; i<rray.length; i++){
    document.write(rray[i]+"\n");
}

//Array Constructor 
let colors = new Array("red", "green", "blue");
for ( i =0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

//Direct value assign
let name = new Array();
name[0]= "Suman";
name[1]= "Raman";
name[2]="Shivani"
name[3]="sonia"
for ( i =0; i<=3; i++){
    document.write(name[i]+"\n");
}

//multidimentional array
let numbers = [
    [1, 2, 3],   // Row 0
    [4, 5, 6],   // Row 1
    [7, 8, 9]    // Row 2
];

console.log(numbers[0][1]); // Output: 2
console.log(numbers[2][0]); // Output: 7


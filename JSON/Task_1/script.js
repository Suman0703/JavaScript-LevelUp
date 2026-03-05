// // JSON data
// let userData = {
//   "name": "Suman Devi",
//   "age": 19,
//   "city": "Hoshiarpur"
// };

// // Show JSON data in HTML
// document.getElementById("name").innerText = "Name: " + userData.name;
// document.getElementById("age").innerText = "Age: " + userData.age;
// document.getElementById("city").innerText = "City: " + userData.city;

let users = [
  { "name": "Suman", "age": 20, "city": "Delhi" },
  { "name": "Ravi", "age": 22, "city": "Mumbai" },
  { "name": "Anita", "age": 21, "city": "Pune" }
];

let container = document.body;

users.forEach(user => {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Age: ${user.age}</p>
    <p>City: ${user.city}</p>
  `;
  container.appendChild(div);
});

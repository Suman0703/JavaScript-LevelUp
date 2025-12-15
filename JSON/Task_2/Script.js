let form = document.getElementById("userForm");
let output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userData = {
    "name": document.getElementById("name").value,
    "age": document.getElementById("age").value,
    "city": document.getElementById("city").value
  };

  console.log(userData);

  output.innerHTML = `
    <div class="card">
      <p>Name: ${userData.name}</p>
      <p>Age: ${userData.age}</p>
      <p>City: ${userData.city}</p>
    </div>
  `;
});

let jsonString = JSON.stringify(userData);
console.log(jsonString);

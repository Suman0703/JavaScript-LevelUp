document.getElementById("loginBtn")
  .addEventListener("click", loginUser);

async function loginUser() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    let response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    let data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token); //JWT token is generated
      console.log("Token saved:", data.token);

      // ✅ check token AFTER saving
      let token = localStorage.getItem("token");
      console.log("User is logged in, token:", token);

    } else {
      console.log("Login failed:", data.error);
    }

  } catch (error) {
    console.log("Network error", error);
  }
}

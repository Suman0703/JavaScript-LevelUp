let btn = document.getElementById("sendBtn");
let result = document.getElementById("result");

btn.addEventListener("click", sendData);

async function sendData() {

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  let postData = {
    title: title,
    body: body,
    userId: 1
  };

  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      }
    );

    let data = await response.json();

    result.innerHTML = `
      <h3>Data Sent Successfully</h3>
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <p>Body: ${data.body}</p>
    `;

  } catch (error) {
    result.innerHTML = "Error sending data";
  }
}

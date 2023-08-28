const elLogin = document.querySelector("#login");
const elMsg = document.querySelector("#feedback");

function checkUserName(minLength) {
  console.log("test");

  if (elLogin.value.length < minLength) {
    //set Error msg
    elMsg.innerHTML = 'Username must be <span class="error">' + minLength + '</span> characters or <span class="error">more</span>';

  } else {
    elMsg.innerHTML = "";
  }
}

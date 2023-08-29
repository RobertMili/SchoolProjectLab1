const elForm = document.querySelector("#registration-form");
const elInputFirstName = document.querySelector('#txtName');
const elInputLastName = document.querySelector('#txtLastName');
const elEmail = document.querySelector('#txtEmail');
const elPassword  = document.querySelector('#txtPassword');
const elConfirmPasswordInput = document.querySelector('#txtConfirmPassword');



function confirmPassword(event) {

  if (elPassword.value !== elConfirmPasswordInput.value) {
    event.preventDefault();
    alert("Password do not match!");
  }
}

function inputLocalStorage(event){
  event.preventDefault();

  let firstName = elInputFirstName.value;
  let lastName = elInputLastName.value;
  let email = elEmail.value;
 
  
  localStorage.setItem('firstName',firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email',email);

}



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

elForm.addEventListener('submit', confirmPassword, false);
elForm.addEventListener('submit', inputLocalStorage, false);


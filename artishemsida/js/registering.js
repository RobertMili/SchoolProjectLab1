const elFormRegistering = document.querySelector("#registration-form");
const elFormLogin = document.querySelector("#registration-form2");
const elInputFirstName = document.querySelector('#txtName');
const elInputLastName = document.querySelector('#txtLastName');
const elEmail = document.querySelector('#txtEmail');
const elPassword  = document.querySelector('#txtPassword');
const elConfirmPasswordInput = document.querySelector('#txtConfirmPassword');
const elLogin = document.querySelector("#login");
const elPasswordLogin = document.querySelector("#password");
const elMsg = document.querySelector("#feedback");
const submit = document.getElementById('#submit');


function confirmPassword(event) {

  if (elPassword.value !== elConfirmPasswordInput.value) {
    event.preventDefault();
    alert("Password do not match!");
  }
}

// function inputLocalStorageRegistering(event){
//   event.preventDefault();

//   let firstName = elInputFirstName.value;
//   let lastName = elInputLastName.value;
//   let email = elEmail.value;
 
  
//   localStorage.setItem('firstName',firstName);
//   localStorage.setItem('lastName', lastName);
//   localStorage.setItem('email',email);

// }


function checkUserName(minLength) {
  console.log("test");
 

  if (elLogin.value.length < minLength) {
    //set Error msg
    elMsg.innerHTML = 'Username must be <span class="error">' + minLength + '</span> characters or <span class="error">more</span>';

  } else {
    elMsg.innerHTML = "";
  }
}

function inputLocalStorageLogin(){
  let firstNameLogin = elLogin.value;
  
  console.log("this is a login " + firstNameLogin);

  localStorage.setItem('firstNameLogin', firstNameLogin);
  

}


elFormRegistering.addEventListener('submit', confirmPassword, false);
// elForm.addEventListener('submit', inputLocalStorageRegistering, false);
elFormLogin.addEventListener('submit', inputLocalStorageLogin, false);

elFormRegistering.addEventListener('submit', function(){
  event.preventDefault();
  window.location.href = "index.html";
})
elFormLogin.addEventListener('submit', function(event) {
  event.preventDefault();
  window.location.href = "index.html";
});
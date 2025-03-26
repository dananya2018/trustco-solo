// SIGNUP FORM FUNCTIONALITY

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

// adding event listener to form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
})

const sendData = (count, successRate) => {
  if(count === successRate){
    location.href = 'index.html'
  }
}

const formSubmit = () => {
  let formControl = document.getElementsByClassName('form-control');
  var count = formControl.length - 1;
  for (var i = 0; i < formControl.length; i++) {
    if(formControl[i].className === 'form-control success') {
      var successRate = 0 + i;
      sendData(count, successRate)
    } else {
      return false;
    }
  }
}

// defining validate function
const validate = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  // validating username
  if(usernameValue === "") {
    setErrorMsg(username, 'Username cannot be blank');
  } else if(usernameValue.length <= 2) {
    setErrorMsg(username, 'Username should be min 3 char');
  } else {
    setSuccessMsg(username)
  }

  // validating email
  if(emailValue === "") {
    setErrorMsg(email, 'Email cannot be blank');
  } else {
    setSuccessMsg(email)
  }

  // validating phone no
  if(phoneValue === ""){
    setErrorMsg(phone, 'Mobile no cannot be blank');
  } else if(phoneValue.length != 10){
    setErrorMsg(phone, 'Mobile no should be 10 digits');
  } else {
    setSuccessMsg(phone)
  }

  // validate password
  if(passwordValue === ""){
    setErrorMsg(password, 'Password cannot be blank');
  } else if(passwordValue.length < 8){
    setErrorMsg(password, 'Password should have min 8 characters');
  } else {
    setSuccessMsg(password)
  }

  // validate confirm password
  if(confirmpasswordValue === ""){
    setErrorMsg(confirmpassword, 'Confirm Password cannot be blank');
  } else if(confirmpasswordValue !== passwordValue){
    setErrorMsg(confirmpassword, 'Confirm Password does not match the password');
  } else {
    setSuccessMsg(confirmpassword)
  }

  formSubmit();

}

// setting errorMsg function
const setErrorMsg = (input, message) => {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = 'form-control error';
  span.innerText = message;
}

// setting successMsg function
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
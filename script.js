const main = document.getElementById("root");

const newdiv = document.createElement("div");
newdiv.id = "form-box";
newdiv.classList = "form-box";

main.append(newdiv);

// Element load function
function loadElement() {
console.log("load")

  // create form
  const newform = document.createElement("form");
  newform.onsubmit = () => false;

  // create a Login Heading
  const h1 = document.createElement("h1");
  h1.innerHTML = "Login Form";

  // create div for parent of emailinputs
  const parDiv = document.createElement("div");
  parDiv.classList = "form-control";

  // create label for emailfield
  const emailLabel = document.createElement("label");
  emailLabel.innerHTML = "Email";
  emailLabel.htmlFor = "EmailField";

  // first input tag
  const emailinputs = document.createElement("input");
  emailinputs.id = "EmailField";
  emailinputs.placeholder = "Enter email";
  emailinputs.required = true;

  // create div for parent of emailinputs
  const parDiv1 = document.createElement("div");
  parDiv1.classList = "form-control";

  // create label for passwordfield
  const passwordLabel = document.createElement("label");
  passwordLabel.innerHTML = "Password";
  passwordLabel.htmlFor = "PasswordField";

  // second input tag
  const passwordinputs = document.createElement("input");
  passwordinputs.id = "PasswordField";
  passwordinputs.classList = "form-control";
  passwordinputs.placeholder = "Enter password";
  passwordinputs.required = true;

  // Login button
  const btn = document.createElement("button");
  btn.innerText = "Login";
  btn.classList = "btn";
  btn.type = "submit";
  btn.onclick = () => formValidation();

  

  document.getElementById("form-box").appendChild(newform);

  newform.appendChild(h1);

  newform.append(parDiv);

  parDiv.appendChild(emailLabel);
  parDiv.appendChild(emailinputs);

  newform.appendChild(parDiv1);

  parDiv1.appendChild(passwordLabel);
  parDiv1.appendChild(passwordinputs);

  newform.appendChild(btn);




  // from validation function
  function formValidation() {
    if (emailinputs.value.trim() === "") {
      alert("Please enter email");
      return;
    }
    if (passwordinputs.value.trim() === "") {
      alert("Please enter password");
      return;
    }
    formData();
  }

  // User data match with login form
  function formData() {
    const emailvalue = emailinputs.value;
    const password = passwordinputs.value;

    const check = Userdata.find(
      (item) =>
        item.email === emailvalue.toLowerCase() &&
        item.password === Number(password)
    );

    check
      ? localStorage.setItem("userId", check.id)
      : console.log("Invalid password and email");

    const userData = { id: 1, email: emailvalue, password: password };
    console.log(userData);

    const IDmatch = Userdata.find((items) => items.id === Number(USERID));
    function log() {
      console.log("userlogin");
    }
    if (IDmatch) {
      console.log("userlogin");
      log();
    }

    btn.innerHTML = "Logout";
    btn.onclick = () => removeUser();
  }

  const USERID = localStorage.getItem("userId");
  const IDmatch = Userdata.find((items) => items.id === Number(USERID));

  // Logut user funtion
  function removeUser() {
    localStorage.removeItem("userId");
    location.reload();
  }

if (IDmatch) {
    console.log("userlogin");
    btn.innerHTML = "Logout";
    btn.onclick = () => removeUser();
  }
}

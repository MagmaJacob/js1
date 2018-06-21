/*console.log();
let emailInput = document.forms.login.email;
let passwordInput = document.forms.login.password;
let p = document.querySelector("#data_binding")
let submit = document.forms.login.submitBtn;
emailInput.addEventListener('keyup', e => {
  p.textContent = e.target.value;
});

submit.addEventListener('click', e => {
  if(passwordInput.value !== "" || emailInput.value !== "") {
    submit.disabled = false;
  };
}); */

let user = {
  name: "MEESEEKS",
  password: 105181825,
  status: "active"
}; //'this' always refers to the GLOBAL SCOPE... exept in =>

let guest = {
  name: "Guest",
  password: undefined,
  status: "inactive"
}

let newScope = {
  name: "Jerry",
  password: "golf",
  instument: "air",
  context: logMyName
};

// newScope.context("Kill Mr. MEESEEKS") //implicit

function logMyName(greeting) {
  console.log(this.name, this.password);
  alert(`${greeting}, ${this.name}!`)
};

// logMyName.call(user, "What's poppin'"); //explicit
// logMyName.call(guest, "Hello")

let classScore = 90;

const scopeOne = {
  classScore: 75,
  scopeTwo: {
    classScore: 50
  }
};

console.log(classScore);
console.log(scopeOne.classScore);
console.log(scopeOne.scopeTwo.classScore);

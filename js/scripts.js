let object1 = {};
let object2 = new Object()

let person = {
  firstName: "Jacob",
  lastName: "Henry",
  age: 16,
  favorites: ["pizza", "CocaCola"],
};

object1.food = "pizza";

object1["color"] = "black";
console.log(object1);

for(let _ in person) {
  console.log("_", _);
};

let recipe = {
  flour: "20 oz",
  eggs: 3,
  vanilla: true,
  rum: "3 whole bottles"
};

console.log(recipe);
let clone = Object.create(recipe);
console.log(Object.getPrototypeOf(clone));

let vehicle = {
  wheels: 0,
  windows: null,
  engineSize: "4 cylinder",
  doors: 0
};

let motorcycle = Object.create(vehicle);
motorcycle.wheels = 1

let string = new String();
let array = new Array();
let object = new Object();
let boolean = new Boolean();

console.log(string);
console.log(array);
console.log(object);
console.log(boolean);

function Spaceship(rockets, fluxCompacitor, blasters, sheild, landingGear) {
  this.rockets = rockets;
  this.fluxCompacitor = fluxCompacitor;
  this.blasters = blasters;
  this.sheild = sheild;
  this.landingGear = landingGear;
};

let firefly = new Spaceship(4, false, "UB-v24-S", "Hexablock Sheild", "LG-SP-v3");
console.log(firefly);

function User(username, password) {
  this.username = username;
  this.password = password;
};
let userName = prompt("Username");
let passWord = prompt("Password");
let makeUser = new User(userName, passWord);

console.log(makeUser);

let advertisement = "GET SOME DR. PEPPER FOR FREE"
setTimeout(() => {
    alert(advertisement)
  }, 5000);

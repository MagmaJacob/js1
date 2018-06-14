/*let body = document.getElementsByTagName("body");
console.log(body[0]);

let classes = document.getElementsByClassName("my-header");
console.log(classes[0]);

let ids = document.getElementById("my-paragraph");
console.log(ids);

let tag = document.querySelector("body");
console.log(tag);

let myClass = document.querySelector(".my-header");
console.log(myClass);

let myId = document.querySelector("#my-paragraph");
console.log(myId);

let tags = document.querySelectorAll("body")
console.log(tags);*/

// function queryDom(methodName, element) {
//   switch (methodName.toLowerCase) {
//     case "getelementsbytagname":
//       document.getElementsByTagName("element");
//       break;
//     case "queryselector":
//       document.querySelector(`.${element}`);
//       break;
//     default:
//       break;
//   }
// }

let button = document.querySelector('button');
let div = document.querySelector('div');
let h1 = document.querySelector('h1');
button.addEventListener('click', (e) => {
  e.target.textContent = "I SAID NO PRESS"
});
div.addEventListener('mouseenter', (e1) => {
  e1.target.style.backgroundColor = "rgba(255,0,25,.9)"
});
h1.addEventListener('mouseleave', (e2) => {
  console.log(e2);
  e2.target.style.color = "rgba(255,255,50,.9)"
});

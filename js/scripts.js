div = document.querySelector("div")
myImg = document.createElement("img")

myImg.setAttribute("src", "https://www.gamestop.com/common/images/lbox/161901b.jpg")
div.appendChild(myImg)

for (let i = 1; i < 101; i++) {
  p = document.createElement("p");
  p.textContent = i
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = "FizzBuzz";
  } else if(i % 3 === 0) {
    p.textContent = "Fizz";
  } else if(i % 5 === 0) {
    p.textContent = "Buzz";
  } else {
    p.textContent = i
  }

  div.appendChild(p)
}

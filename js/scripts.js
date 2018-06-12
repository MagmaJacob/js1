// let products = [["Switch", 399.99, "By Nintendo. Must be good"], ["3DS", 199.99, "Good game system"], ["NES", 49.99, "The classics"]];
//
// for(let i = products.length - 1; i>= 0; i--) {
//   console.log(products[i]);
// }

//FUNCTIONS

// function capitalCase(string) { //definition
//   let words = string.split(" ");
//   words.forEach(word => {
//     let letters = words.split("");
//     let capped = letters[0].toUpperCase();
//     letters.splice(0, 1, capped);
//   });
//   return words.join(" ");
// }
//
// let newString = capitalCase("peter piper") //function Call
//
// console.log(
//   newString
// );
//
// function(stuff) {
//   console.log(
//     stuff
//   );
// }

// function dogAge(years) {
//   return years * 7;
// };
// function humanAge(years2) {
//   return (80 + years2) / 2;
// };
// function amountUsed(use) {
//   return (years + years2 * use) / 3;
// };
// alert(
//   dogAge(
//     parseInt(
//       prompt("How old is your dog in human years", "7")
//     )
//   )
// )
// alert(
//   humanAge(
//     parseInt(
//       prompt("How old are you", "20")
//     )
//   )
// )
// alert(`you will need ${
//   amountUsed(
//     parseInt(
//       prompt("How much do you use per year", "100")
//     )
//   )
// } dog treats to last you until you are 80`)
let answer = squared(parseInt(prompt("What do you want to square", "2")));

function squared(sqNumber) {
  if(!isNaN(sqNumber)) {
    return sqNumber * sqNumber
  } else {
    squared(parseInt(prompt("That isn't a number. What do you want to square", "2")));
    alert(answer)
};

alert(answer)

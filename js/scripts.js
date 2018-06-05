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

function dogAge(years) {
  return years * 7;
};
function humanAge(years2) {
  return ((years2 * 12) * 80) / 2;
};
alert(
  dogAge(
    parseInt(
      prompt("How old is your dog in human years", "7")
    )
  )
)
alert(`you will need ${
  humanAge(
    parseInt(
      prompt("How old are you", "20")
      prompt("How ")
    )
  )
} dog treats to last you until you are 80`)

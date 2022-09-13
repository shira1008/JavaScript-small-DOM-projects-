const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "pink",
  "blue",
  "yellow",
  "rgb(236, 122, 240)",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //random number as number of my color index
  const randomNumber = RandomNum();
  //   console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//func that give me a random num between 0 - colors.length and round the num (floor)
function RandomNum() {
  return Math.floor(Math.random() * colors.length);
}

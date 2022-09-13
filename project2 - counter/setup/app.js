//initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//foreach over every btn
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const btnClass = event.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "blue";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "hsl(209, 61%, 16%)";
    }
    value.textContent = count;
  });
});

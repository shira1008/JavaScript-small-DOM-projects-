const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//select : deadline, givaway, h4

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

//if i want this to always work no matter what(even if the day passed)
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//calc when the giveaway end - not a real deadline always 10 days from now:
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 20, 30, 0);
//calc when the giveaway end  , if i want a real deadline:
// let futureDate = new Date(2022, 10, 24, 20, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const themonth = months[month];
const day = futureDate.getDay();
const theDay = weekdays[day];
giveaway.textContent = `giveaway ends on ${theDay}, ${date} ${themonth}  ${year} ${hours}:${min}pm `;

//future time in ms calc:
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //to ms:
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  // i want only the hours left in that day:
  let hours = Math.floor((t % oneDay) / oneHour);
  console.log(hours);
  // i want only the min left in that day and sec:
  let min = Math.floor((t % oneHour) / oneMin);
  let sec = Math.floor((t % oneMin) / 1000);

  //if the value < 10 il add 0:
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return `${item}`;
  }
  //add to the h2
  const values = [days, hours, min, sec];
  items.forEach(function (item, i) {
    item.innerHTML = format(values[i]);
  });
  //fix error when we pass the deadline:
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has end </h4>`;
  }
}
//countdown - how many time i wanna call the func, every sec
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

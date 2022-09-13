// local reviews data arrays of objects
const reviews = [
  {
    id: 1,
    name: "Random Name 1",
    job: "Random Job 1",
    img: "https://ik.imagekit.io/mz2muvxvp/snoop2-hero-small-img_BGayRm6tV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661087405985",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Random Name 2",
    job: "Random Job 2",
    img: "https://ik.imagekit.io/mz2muvxvp/snoop-hero-img_oS9Ivcr2_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661087406139",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Random Name 3",
    job: "Random Job 3",
    img: "https://ik.imagekit.io/mz2muvxvp/about-snoop_DZDTskhZh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661087406088",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Random Name 4",
    job: "Random Job 4",
    img: "https://ik.imagekit.io/mz2muvxvp/SniffySniffy_yDIxnzBBl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661087406064",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting items
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  img.src = reviews[currentItem].img;
  author.textContent = reviews[currentItem].name;
  job.textContent = reviews[currentItem].job;
  info.textContent = reviews[currentItem].text;
}

// for next btn :
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// for pre btn :
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// a random one

function RandomNum() {
  return Math.floor(Math.random() * reviews.length);
}

randomBtn.addEventListener("click", function () {
  currentItem = RandomNum();
  showPerson();
});

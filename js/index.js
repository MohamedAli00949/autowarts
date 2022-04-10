// Put persons in testmonial
const persons = document.querySelector(".persons");

// Persons data
const personsArr = [
  {
    name: "Mohamed Ali",
    opinion: "This service helped me with my bussiness.",
    rating: 4,
    x: 0,
    y: 0,
  },
  {
    name: "Ahmed Ali",
    opinion: "This service helped me with my bussiness.",
    rating: 3,
    x: 0,
    y: 0,
  },
  {
    name: "Adam Shady",
    opinion: "This service helped me with my bussiness.",
    rating: 5,
    x: 0,
    y: 0,
  },
  {
    name: "Mahmoud Ali",
    opinion: "This service helped me with my bussiness.",
    rating: 2,
    x: 0,
    y: 0,
  },
  {
    name: "Mohamed Ahmed",
    opinion: "This service helped me with my bussiness.",
    rating: 4,
    x: 0,
    y: 0,
  },
  {
    name: "Mohamed Shady",
    opinion: "This service helped me with my bussiness.",
    rating: 3,
    x: 0,
    y: 0,
  },
];

// get random number for position of person
function getTop(max, min = 10) {
  const top = Math.random() * (max - min) + min;
  if (top > min && top < max) {
    return top;
  } else {
    getTop(max);
  }
}

personsArr.forEach((item, index) => {
  const person = document.createElement("div");
  person.className = "person";

  // Get the random position for the person
  const x = getTop(70, personsArr[index - 1]?.x + 10 || 10, "x");
  const y = getTop(50, personsArr[index - 1]?.y + 10 || 5, "y");
  person.style.left = x + "%";
  person.style.top = y + "%";

  personsArr[index].x = x;
  personsArr[index].y = y;
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  const image = document.createElement("img");
  image.setAttribute("src", `./images/persons/${index}.svg`);
  image.setAttribute("alt", item.name);
  avatar.appendChild(image);

  const details = document.createElement("div");
  details.className = "opinion";
  const name = document.createElement("h3");
  name.textContent = item.name;
  const opinion = document.createElement("p");
  opinion.textContent = item.opinion;
  const rate = document.createElement("div");
  const star = '<img src="../images/star.svg" alt="star-icon" />';
  rate.innerHTML = star.repeat(item.rating);
  rate.className = "rating";
  details.appendChild(name);
  details.appendChild(opinion);
  details.appendChild(rate);
  person.appendChild(avatar);
  person.appendChild(details);

  persons.appendChild(person);
});

// Toggle menu
const menu = document.getElementsByClassName("menu-icon");
const menuItems = document.querySelector("div.items");

menu[0].addEventListener("click", () => {
  menu[0].classList.toggle("active");
  menuItems.classList.toggle("active");
  document.body.classList.toggle("open-menu");
});

// Toggle right bollet 
const allRightBollets = document.querySelectorAll(".main-section .right ul li");

allRightBollets.forEach((bollet) => {
  bollet.addEventListener("click", () => {
    document.querySelector(".main-section .right ul li.active").classList.remove("active");
    bollet.classList.add("active");
  });
});

// Toggle right bollet
const allLeftBollets = document.querySelectorAll(".main-section .left ul li");

allLeftBollets.forEach((bollet) => {
  bollet.addEventListener("click", () => {
    document.querySelector(".main-section .left ul li.active").classList.remove("active");
    bollet.classList.add("active");
  });
});


/**
 * put dots for top area
 */

const dotsContainer = document.querySelector(".dots")

function putDots(type) {
  for(let i = 0; i < 7; i++) {
    const dot = document.createElement("span");
    dot.className = type;
    dot.style.left = getTop(90, 1) + "%";
    dot.style.top = getTop(90, 1) + "%";
    dotsContainer.appendChild(dot);
  }
}

putDots("small");
putDots("big");



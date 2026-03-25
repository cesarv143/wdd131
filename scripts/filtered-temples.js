const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Puebla Mexico",
    location: "Puebla, Mexico",
    dedicated: "2024, May, 19",
    area: 35890,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cc3d661445711eeb789eeeeac1ebb07936a29ec/full/320%2C/0/default"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Hokkaido, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/38167823f98e09f583307561f6c43c7b3967919d/full/320%2C/0/default"
  },
  {
    templeName: "Trujillo Peru",
    location: "Trujillo, Peru",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7a79a61324706509a250764e4324f61e4b95d2c2/full/320%2C/0/default"
  }
];

const templeContainer = document.querySelector("#temple-cards");
const navMenu = document.querySelector("#navMenu");
const mainHeading = document.querySelector("main h2");

function displayTemples(filteredTemples) {

  templeContainer.innerHTML = "";

  filteredTemples.forEach(temple => {
    
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <div class="stats">
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName} Temple" 
           loading="lazy" 
           width="400" 
           height="250">
    `;
    
    templeContainer.appendChild(card);
  });
}


navMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const filterId = event.target.id;
    let filteredList = [];

    switch (filterId) {
      case "old":
        mainHeading.textContent = "Old Temples";
        filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        break;
      case "new":
        mainHeading.textContent = "New Temples";
        filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        break;
      case "large":
        mainHeading.textContent = "Large Temples";
        filteredList = temples.filter(t => t.area > 90000);
        break;
      case "small":
        mainHeading.textContent = "Small Temples";
        filteredList = temples.filter(t => t.area < 10000);
        break;
      case "home":
      default:
        mainHeading.textContent = "Home";
        filteredList = temples;
        break;
    }

    displayTemples(filteredList);
  }
});

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

displayTemples(temples);
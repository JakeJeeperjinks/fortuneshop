// Website Created by JakeJeeperjinks (https://github.com/JakeJeeperjinks)
//A lot of this can probably be refactored
try {
  const typed = new Typed('#typed', {
    strings: ['Cheapest', 'Most Reliable', 'Most Reputable', 'Best'],
    smartBackspace: true, // Default value
    typeSpeed: 60,
    loop: true,
    backDelay: 1100,
    backSpeed: 30,
  });
} catch (err) {
  console.log("Whoops, Typed.js didn't load!")
  console.log(err)
}


const tabButtonPVP = document.querySelector('.pvpkits')
const tabButtonFlight = document.querySelector('.flightkits')
const tabButtonBuilding = document.querySelector('.buildingkits')
const tabButtonIllegal = document.querySelector('.illegalkits')
const tabButtonBooks = document.querySelector('.books')
const tabButtonConsum = document.querySelector('.consumablekits')



function createReview(i) {
  const reviewRow = document.querySelector('.reviewrow')
  const mainDiv = document.createElement('div');
  const cardDiv = document.createElement('div');
  const cardBody = document.createElement('div');
  const img = document.createElement('img');
  const heading = document.createElement('h4');
  const p = document.createElement('p');

  mainDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'justify-content-center', 'mb-3');
  cardDiv.classList.add('card', 'shadow-lg'); //All this stuff adds Bootstrap classes for styling
  cardBody.classList.add('card-body');
  img.src = reviewProfiles[i].img;
  img.classList.add('card-img-top', 'cardimg-about', 'reviewimg');
  heading.classList.add('card-title', 'team-card-title', 'align-middle');
  p.classList.add('card-text');

  heading.innerText = `${reviewProfiles[i].name} - ${reviewProfiles[i].rating}`;
  p.innerText = `"${reviewProfiles[i].review}"`;

  mainDiv.append(cardDiv);
  cardDiv.append(cardBody);
  cardBody.append(img, heading, p);
  reviewRow.append(mainDiv);
}

function createListing(i, type) {
  const itemSection = document.querySelector(`.${type}`);
  const mainDiv = document.createElement('div');
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const heading = document.createElement('h4');
  const img = document.createElement('img');
  const priceP = document.createElement('p');
  const hr = document.createElement('hr')
  const descP = document.createElement('p');
  
  mainDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'pricecard', 'justify-content-center', 'mb-3');
  card.classList.add('card', 'shadow-sm');
  cardBody.classList.add('card-body', 'catalog-listing');
  img.src = catalogListings[i].productimg;
  img.classList.add('card-img-top', 'product-img');
  heading.classList.add('card-title', 'shop-card-title', 'align-middle');
  priceP.classList.add('price');
  hr.classList.add('text-black-100');
  descP.classList.add('card-text');

  heading.innerText = `${catalogListings[i].itemname}`;
  priceP.innerText = `${catalogListings[i].price}`;
  descP.innerText = `${catalogListings[i].desc}`;

  mainDiv.append(card);
  card.append(cardBody);
  cardBody.append(img, heading, priceP, hr, descP);
  itemSection.append(mainDiv);
}

let catalogListings = undefined;
fetch('./json/catalog.json')
  .then(function (data) {
    return data.json();
  })
  .then(function (obj) {
    catalogListings = obj;
    console.log(catalogListings)
  })
  .then(function () {
    for (let i = 0; i < catalogListings.length; i++) {
      createListing(i, catalogListings[i].category);
    }
  })
  .catch(function(err) {
    console.log(err);
    console.log("Whoops, something went wrong when loading listings!")
  })


let reviewProfiles = undefined;

fetch("./json/reviewdata.json")
  .then(function (data) {
    return data.json();
  })
  .then(function (obj) {
    reviewProfiles = obj;
    console.log(reviewProfiles)
  })
  .then(function () {
    for (let i = 0; i < reviewProfiles.length; i++) {
      createReview(i);
    }
  })
  .catch(function (err) {
    //add err msg here, like append an error message to reviews do not load
    console.error('Something went wrong with retrieving the reviews!')
  })



tabButtonPVP.addEventListener('click', () => {
  openCatalog(event, 'pvp')
})
document.querySelector('.pvpkits').click();
tabButtonFlight.addEventListener('click', () => {
  openCatalog(event, 'flight')
})
tabButtonConsum.addEventListener('click', () => {
  openCatalog(event, 'consumable')
})
tabButtonBuilding.addEventListener('click', () => {
  openCatalog(event, 'building')
})
tabButtonIllegal.addEventListener('click', () => {
  openCatalog(event, 'illegal')
})
tabButtonBooks.addEventListener('click', () => {
  openCatalog(event, 'bookstab')
})



function openCatalog(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "inline";
  evt.currentTarget.className += " active";
}


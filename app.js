const typed = new Typed('#typed', {
  strings: ['Cheapest', 'Most Reliable', 'Most Reputable', 'Best'],
  smartBackspace: true, // Default value
  typeSpeed: 60,
  loop: true,
  backDelay: 1100,
  backSpeed: 30,
});

const reviewProfiles = [{
    name: 'BryceDey',
    rating: '10/10',
    review: 'super quick great service',
    img: './imgs/reviews/brycedey.png',
  },
  {
    name: 'Domina',
    rating: '10/10',
    review: "Super nice, helpful, and willing to work with ya despite horrendous server conditions, got me my stuff really fast considering and I'm definitely gonna be ordering more from them in the future! Thanks again so much, ya'll are gonna make life on 2b much easier.",
    img: './imgs/reviews/domina.png',
  },
  {
    name: 'Dr3bb2',
    rating: '7/10',
    review: 'It took me awhile to get there but whenever I got there everything was there except for the spawn kit it was exchanged for a vokit the main reason I was wanting the spawn kit was so I could get sulker heads, but besides that other thing was nice.',
    img: './imgs/reviews/dr3bb2.png',
  },
  {
    name: 'maxmoo12',
    rating: '9/10',
    review: 'All good we’re delivered but the time delay was a minor inconvenience but overall, Excellent',
    img: './imgs/reviews/maxmoo12.png',
  },
  {
    name: 'suicune',
    rating: '10/10',
    review: 'took a while, but in the end everything was worth it! the bodyguard was amazing too!',
    img: './imgs/reviews/suicune.png',
  },
  {
    name: 'xsomniac',
    rating: '10/10',
    review: 'took about two hours and he worked with me fairly. will purchase from again if i need more things',
    img: './imgs/reviews/xsomniac.png',
  }
]

const createReview = function (i) {
  const reviewRow = document.querySelector('.reviewrow')
  const mainDiv = document.createElement('div');
  const cardDiv = document.createElement('div');
  const cardBody = document.createElement('div');
  const img = document.createElement('img');
  const heading = document.createElement('h4');
  const p = document.createElement('p');

  mainDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'justify-content-center', 'mb-3');
  cardDiv.classList.add('card', 'shadow-lg');
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


for (let i = 0; i < reviewProfiles.length; i++) {
  createReview(i);
}
const params = new URLSearchParams(window.location.search);
const tourId = Number(params.get("id")) || 1;

const tours = {
  1: {
    title: "Africa - Amazing African Safari",
    rating: 5,
    reviews: 1,
    duration: 7,
    guests: 200,
    price: 100,
    images: [
      "images/safari.jpg",   // الكبيرة للكارت 1
      "images/yellwo.jpg",
      "images/yellwo2.jpg",
      "images/yellwo3.jpg",
      "images/yellwo4.jpg"
    ]
  },

  2: {
    title: "Dubai – All Stunning Places",
    rating: 5,
    reviews: 1,
    duration: 5,
    guests: 200,
    price: 1200,
    images: [
      "images/dubai.jpg", // ضعي صورة الكارت 2 الكبيرة هنا
      "images/valeria1.jpg", // ضعي الصورة 2 للكارت 2 هنا
      "images/valeria2.jpg", // ضعي الصورة 3 للكارت 2 هنا
      "images/valeria3.jpg", // ضعي الصورة 4 للكارت 2 هنا
      "images/valeria4.jpg"  // ضعي الصورة 5 للكارت 2 هنا
    ]
  },

  3: {
    title: "Venice, Rome and Milan – 9 Days",
    rating: 5,
    reviews: 1,
    duration: 9,
    guests: 200,
    price: 3500,
    images: [
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg"
    ]
  },

  4: {
    title: "Cityscape Chicago 4K",
    rating: 5,
    reviews: 1,
    duration: 4,
    guests: 200,
    price: 3500,
    images: [
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg",
      "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg"
    ]
  },

  5: {
    title: "5-Day Oahu Tour: Honolulu",
    rating: 5,
    reviews: 1,
    duration: 5,
    guests: 200,
    price: 1500,
    images: [
      "images/oahu.jpg",
      "images/houcine1.jpg",
      "images/houcine2.jpg",
      "images/houcine3.jpg",
      "images/hanson4.jpg"
    ]
  },

  6: {
    title: "Molokini and Turtle Snorkeling",
    rating: 5,
    reviews: 0,
    duration: 1,
    guests: 200,
    price: 80,
    images: [
      "images/florian2.jpg",
      "images/florian.jpg",
      "images/florian1.jpg",
      "images/florian3.jpg",
      "images/florian4.jpg"
    ]
  },

  7: {
    title: "Two Moscow Tour of 7 days",
    rating: 5,
    reviews: 0,
    duration: 7,
    guests: 200,
    price: 3500,
    images: [
      "images/cordeiro.jpg",
      "images/mehmet1.jpg",
      "images/mehmet2.jpg",
      "images/mehmet3.jpg",
      "images/mehmet4.jpg"
    ]
  },

  8: {
    title: "Paris – Eiffel Tower, Notre Dame Cath..",
    rating: 5,
    reviews: 1,
    duration: 3,
    guests: 200,
    price: 800,
    images: [
      "images/iStock.jpg",
      "images/iStock1.jpg",
      "images/iStock2.jpg",
      "images/iStock3.jpg",
      "images/iStock4.jpg"
    ]
  },

  9: {
    title: "Austria – 6 Days in Vienna, Hallstatt",
    rating: 5,
    reviews: 1,
    duration: 6,
    guests: 200,
    price: 2100,
    images: [
      "images/dalibor.jpg",
      "images/dalibor1.jpg",
      "images/dalibor2.jpg",
      "images/dalibor3.jpg",
      "images/dalibor4.jpg"
    ]
  },

  10: {
    title: "Greek Island Hopping Adventure",
    rating: 4,
    reviews: 3,
    duration: 8,
    guests: 200,
    price: 2400,
    images: [
      "images/brantley.jpg",
      "images/brantley1.jpg",
      "images/brantley2.jpg",
      "images/brantley3.jpg",
      "images/brantley4.jpg"
    ]
  },

  11: {
    title: "Majestic Swiss Alps Escape",
    rating: 5,
    reviews: 5,
    duration: 7,
    guests: 200,
    price: 3100,
    images: [
      "images/priyanka.jpg",
      "images/priyanka1.jpg",
      "images/priyanka2.jpg",
      "images/priyanka.jpg",
      "images/priyanka.jpg"
    ]
  },

  12: {
    title: "Tokyo & Kyoto Cultural Discovery",
    rating: 5,
    reviews: 2,
    duration: 10,
    guests: 200,
    price: 2800,
    images: [
      "images/oahu.jpg",
      "images/schwarz1.jpg",
      "images/schwarz2.jpg",
      "images/schwarz3.jpg",
      "images/schwarz4.jpg"
    ]
  },

  13: {
    title: "Treasures of Ancient Egypt Cruise",
    rating: 4,
    reviews: 4,
    duration: 5,
    guests: 200,
    price: 1400,
    images: [
      "images/unsplash5.jpg",
      "images/unsplash1.jpg",
      "images/unsplash2.jpg",
      "images/unsplash3.jpg",
      "images/unsplash4.jpg"
    ]
  },

  14: {
    title: "Phuket & Phi Phi Island Getaway",
    rating: 4,
    reviews: 1,
    duration: 4,
    guests: 200,
    price: 950,
    images: [
      "images/shutterstock.jpg",
      "images/shutterstock1.jpg",
      "images/shutterstock2.jpg",
      "images/shutterstock3.jpg",
      "images/shutterstock4.jpg"
    ]
  },

  15: {
    title: "Canadian Rockies Scenic Rail Tour",
    rating: 5,
    reviews: 6,
    duration: 8,
    guests: 200,
    price: 4100,
    images: [
      "images/jerry.jpg",
      "images/jerry1.jpg",
      "images/jerry2.jpg",
      "images/jerry5.jpg",
      "images/jerry0.jpg"
    ]
  },

  16: {
    title: "Iceland Northern Lights Expedition",
    rating: 5,
    reviews: 8,
    duration: 6,
    guests: 200,
    price: 2600,
    images: [
      "images/samuel.jpg",
      "images/samuel3.jpg",
      "images/sammy2.jpg",
      "images/giusi.jpg",
      "images/sammy4.jpg"
    ]
  },

  17: {
    title: "Costa Rica Rainforest & Volcanoes",
    rating: 4,
    reviews: 2,
    duration: 7,
    guests: 200,
    price: 1150,
    images: [
      "images/eliana-M.jpg",
      "images/eliana1.jpg",
      "images/eliana2.jpg",
      "images/eliana3.jpg",
      "images/eliana4.jpg"
    ]
  },

  18: {
    title: "Morocco Desert Kasbahs & Souks",
    rating: 4,
    reviews: 3,
    duration: 5,
    guests: 200,
    price: 990,
    images: [
      "images/nasyr.jpg",
      "images/nasyr1.jpg",
      "images/nasyr2.jpg",
      "images/nasyr3.jpg",
      "images/nasyr4.jpg"
    ]
  },

  19: {
    title: "Prague & Budapest Historic Journey",
    rating: 5,
    reviews: 4,
    duration: 6,
    guests: 200,
    price: 1650,
    images: [
      "images/raphael.jpg",
      "images/raphael2.jpg",
      "images/raphael3.jpg",
      "images/raphael4.jpg",
      "images/raphael1.jpg"
    ]
  },

  20: {
    title: "New York City Highlights & Broadway",
    rating: 5,
    reviews: 9,
    duration: 5,
    guests: 200,
    price: 2200,
    images: [
      "images/florian.jpg",
      "images/florian1.jpg",
      "images/florian2.jpg",
      "images/florian3.jpg",
      "images/florian4.jpg"
    ]
  },

  21: {
    title: "New Zealand South Island Road Trip",
    rating: 5,
    reviews: 7,
    duration: 9,
    guests: 200,
    price: 3400,
    images: [
      "images/shutterstock.jpg",
      "images/shutterstock1.jpg",
      "images/shutterstock2.jpg",
      "images/shutterstock3.jpg",
       "images/raghu.jpg",
    ]
  },

  22: {
    title: "Peru Machu Picchu Trekking Adventure",
    rating: 4,
    reviews: 5,
    duration: 8,
    guests: 200,
    price: 1850,
    images: [
      "images/daniel1.jpg",
      "images/daniel2.jpg",
      "images/daniel3.jpg",
      "images/daniel4.jpg",
      "images/daniel15.jpg"
    ]
  }
};

const tour = tours[tourId] || tours[1];

const titleElement = document.getElementById("tour-title");
const ratingElement = document.querySelector(".rating");
const metaElement = document.querySelector(".tour-meta");
const priceElement = document.querySelector(".price-tag span");
const mainImage = document.getElementById("main-image");
const smallImages = document.querySelectorAll(".sub-images img");

if (titleElement) {
  titleElement.textContent = tour.title;
}

if (ratingElement) {
  ratingElement.innerHTML =
    "★".repeat(tour.rating) +
    ` <span>(${tour.reviews} Review${tour.reviews !== 1 ? "s" : ""})</span>`;
}

if (metaElement) {
  metaElement.innerHTML = `
    <div><i class="fa fa-clock"></i> <span>${tour.duration} Days</span></div>
    <div><i class="fa fa-users"></i> <span>Max Guests: ${tour.guests}</span></div>
  `;
}

if (priceElement) {
  priceElement.textContent = "$" + tour.price.toLocaleString();
}

if (mainImage) {
  mainImage.src = tour.images[0];
  mainImage.style.cursor = "pointer";

  mainImage.addEventListener("click", function () {
    openImagePopup(this.src);
  });
}

smallImages.forEach((img, index) => {
  img.src = tour.images[index + 1] || tour.images[0];
  img.style.cursor = "pointer";

  img.addEventListener("click", function () {
    openImagePopup(this.src);
  });
});

function openImagePopup(imageSrc) {
  const popup = document.createElement("div");

  popup.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 25px;
    cursor: zoom-out;
  `;

  const popupImage = document.createElement("img");
  popupImage.src = imageSrc;
  popupImage.alt = "Tour Image";

  popupImage.style.cssText = `
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    border-radius: 8px;
  `;

  popup.appendChild(popupImage);

  popup.addEventListener("click", function () {
    popup.remove();
  });

  document.body.appendChild(popup);
}

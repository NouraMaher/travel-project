function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  if (modal && frame) {
    frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.add("open");
  }
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  if (modal && frame) {
    frame.src = "";
    modal.classList.remove("open");
  }
}

document.getElementById("videoModal")?.addEventListener("click", function (e) {
  if (e.target === this) closeVideoModal();
});

const totalPages = 3;
let currentPage = 1;
const paginationEl = document.getElementById("pagination");

function renderPagination() {
  if (!paginationEl) return;

  paginationEl.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => goToPage(i));

    li.appendChild(btn);
    paginationEl.appendChild(li);
  }
}

document.querySelectorAll(".itin-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("open");
  });
});

function goToPage(page) {
  const grid = document.getElementById("tourGrid");

  if (page === currentPage || !grid) return;

  grid.style.opacity = "0";
  grid.style.transform = "translateY(15px)";

  setTimeout(() => {
    currentPage = page;
    applySortingAndRendering();

    grid.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    setTimeout(() => {
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
    }, 80);

  }, 250);
}



renderPagination();

function toggleDropdown(id) {
  document.querySelectorAll(".dropdown").forEach(d => {
    if (d.id !== id) {
      d.classList.remove("open");
    }
  });

  document.getElementById(id)?.classList.toggle("open");
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("open");
    });
  }
});

let toursData = [
  { id: 1, title: "Africa - Amazing African Safari", price: 100, oldPrice: null, image: "images/safari.jpg", badge: "Best Seller", rating: 5, reviews: 1, type: "image", durationDays: 7 },
  { id: 2, title: "Dubai – All Stunning Places", price: 1200, oldPrice: null, image: "images/dubai.jpg", badge: "", rating: 5, reviews: 1, type: "image", durationDays: 5 },
  { id: 3, title: "Venice, Rome and Milan – 9 Days", price: 3500, oldPrice: 4300, image: "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg", badge: "Best Seller", rating: 5, reviews: 1, type: "video", videoId: "eZjmjT5SLYs", durationDays: 9 },
  { id: 4, title: "Cityscape Chicago 4K", price: 3500, oldPrice: 4300, image: "https://img.youtube.com/vi/eZjmjT5SLYs/maxresdefault.jpg", badge: "Best Seller", rating: 5, reviews: 1, type: "video", videoId: "eZjmjT5SLYs", durationDays: 4 },
  { id: 5, title: "5-Day Oahu Tour: Honolulu", price: 1500, oldPrice: null, image: "images/moscow.jpg", badge: "", rating: 5, reviews: 1, type: "image", durationDays: 5 },
  { id: 6, title: "Molokini and Turtle Snorkeling", price: 80, oldPrice: null, image: "images/sven.jpg", badge: "", rating: 5, reviews: 0, type: "image", durationDays: 1 },
  { id: 7, title: "Two Moscow Tour of 7 days", price: 3500, oldPrice: 3880, image: "images/victoria.jpg", badge: "", rating: 5, reviews: 0, type: "image", durationDays: 7 },
  { id: 8, title: "Paris – Eiffel Tower, Notre Dame Cath..", price: 800, oldPrice: null, image: "images/iStock.jpg", badge: "", rating: 5, reviews: 1, type: "image", durationDays: 3 },
  { id: 9, title: "Austria – 6 Days in Vienna, Hallstatt", price: 2100, oldPrice: 3600, image: "images/austria.jpg", badge: "Special Offer", rating: 5, reviews: 1, type: "image", durationDays: 6 },
  { id: 10, title: "Greek Island Hopping Adventure", price: 2400, oldPrice: 2900, image: "images/omar.jpg", badge: "", rating: 4, reviews: 3, type: "image", durationDays: 8 },
  { id: 11, title: "Majestic Swiss Alps Escape", price: 3100, oldPrice: 3500, image: "images/isabella.jpg", badge: "Best Seller", rating: 5, reviews: 5, type: "image", durationDays: 7 },
  { id: 12, title: "Tokyo & Kyoto Cultural Discovery", price: 2800, oldPrice: 3200, image: "images/samuel.jpg", badge: "", rating: 5, reviews: 2, type: "image", durationDays: 10 },
  { id: 13, title: "Treasures of Ancient Egypt Cruise", price: 1400, oldPrice: 1700, image: "images/aline.jpg", badge: "Special Offer", rating: 4, reviews: 4, type: "image", durationDays: 5 },
  { id: 14, title: "Phuket & Phi Phi Island Getaway", price: 950, oldPrice: 1200, image: "images/turtle.jpg", badge: "", rating: 4, reviews: 1, type: "image", durationDays: 4 },
  { id: 15, title: "Canadian Rockies Scenic Rail Tour", price: 4100, oldPrice: 4600, image: "images/hanson.jpg", badge: "Best Seller", rating: 5, reviews: 6, type: "image", durationDays: 8 },
  { id: 16, title: "Iceland Northern Lights Expedition", price: 2600, oldPrice: 3000, image: "images/samuel.jpg", badge: "Special Offer", rating: 5, reviews: 8, type: "image", durationDays: 6 },
  { id: 17, title: "Costa Rica Rainforest & Volcanoes", price: 1150, oldPrice: 1350, image: "images/stephen.jpg", badge: "", rating: 4, reviews: 2, type: "image", durationDays: 7 },
  { id: 18, title: "Morocco Desert Kasbahs & Souks", price: 990, oldPrice: 1200, image: "images/andrzej.jpg", badge: "", rating: 4, reviews: 3, type: "image", durationDays: 5 },
  { id: 19, title: "Prague & Budapest Historic Journey", price: 1650, oldPrice: 1900, image: "images/raphael.jpg", badge: "", rating: 5, reviews: 4, type: "image", durationDays: 6 },
  { id: 20, title: "New York City Highlights & Broadway", price: 2200, oldPrice: 2500, image: "images/moscow.jpg", badge: "Best Seller", rating: 5, reviews: 9, type: "image", durationDays: 5 },
  { id: 21, title: "New Zealand South Island Road Trip", price: 3400, oldPrice: 3900, image: "images/turtle.jpg", badge: "", rating: 5, reviews: 7, type: "image", durationDays: 9 },
  { id: 22, title: "Peru Machu Picchu Trekking Adventure", price: 1850, oldPrice: 2100, image: "images/cordeiro.jpg", badge: "Special Offer", rating: 4, reviews: 5, type: "image", durationDays: 8 }
];

let currentSortBy = "release";
let currentOrder = "Descending";

function changeSortCriteria(criteria) {
  currentSortBy = criteria;
  applySortingAndRendering();
}

function changeOrderDirection(order) {
  currentOrder = order;
  applySortingAndRendering();
}

function applySortingAndRendering() {
  toursData.sort((a, b) => {
    let valA;
    let valB;

    switch (currentSortBy) {
      case "release":
      case "tour":
        valA = new Date(a.releaseDate);
        valB = new Date(b.releaseDate);
        break;

      case "title":
        valA = a.title.toLowerCase();
        valB = b.title.toLowerCase();
        break;

      case "price":
        valA = a.price;
        valB = b.price;
        break;

      case "popularity":
        valA = a.reviews;
        valB = b.reviews;
        break;

      case "rating":
        valA = a.rating;
        valB = b.rating;
        break;

      case "duration":
        valA = a.durationDays;
        valB = b.durationDays;
        break;

      default:
        valA = a.price;
        valB = b.price;
    }

    if (currentOrder === "Descending") {
      return valB > valA ? 1 : (valB < valA ? -1 : 0);
    }

    return valA > valB ? 1 : (valA < valB ? -1 : 0);
  });

  renderPagination();
renderTours(toursData);

}

function renderTours(tours) {
  const grid = document.getElementById("tourGrid");
  const countEl = document.getElementById("resultsCount");

  if (!grid) return;

  grid.innerHTML = "";

 const startIndex = (currentPage - 1) * 9;
const toursForCurrentPage = tours.slice(startIndex, startIndex + 9);

toursForCurrentPage.forEach(tour => {

  
    const badgeHTML = tour.badge
      ? `<span class="badge ${tour.badge === "Special Offer" ? "special" : ""}">${tour.badge}</span>`
      : "";

    const oldPriceHTML = tour.oldPrice
      ? `<span class="old-price">$${tour.oldPrice.toLocaleString()}</span>`
      : "";

    let thumbContent = "";

    if (tour.type === "video") {
      thumbContent = `
        <div class="tour-thumb video-thumb" onclick="event.preventDefault(); event.stopPropagation(); openVideoModal('${tour.videoId}')">
          <img src="${tour.image}" alt="${tour.title}">
          <span class="play-btn" aria-label="play video">&#9658;</span>
          ${badgeHTML}
        </div>
      `;
    } else {
      thumbContent = `
        <div class="tour-thumb">
          <img src="${tour.image}" alt="${tour.title}" style="cursor:pointer;">
          ${badgeHTML}
        </div>
      `;
    }

    const reviewHTML = tour.reviews > 0
      ? `<span class="review-count">(${tour.reviews} Review${tour.reviews > 1 ? "s" : ""})</span>`
      : "";

    const starsHTML = "&#9733;".repeat(tour.rating);

    const card = document.createElement("div");
    card.className = "tour-card";

    card.innerHTML = `
      <a href="details.html?id=${tour.id}"
         style="text-decoration: none; color: inherit; display: block;">

        ${thumbContent}

        <div class="tour-info">
          <h3>${tour.title}</h3>

          <div class="tour-rating">
            <span class="stars">${starsHTML}</span>
            ${reviewHTML}
          </div>

          <div class="tour-price">
            ${oldPriceHTML}
            From <span class="new-price">$${tour.price.toLocaleString()}</span>
          </div>
        </div>
      </a>
    `;

    grid.appendChild(card);
  });
}

window.onload = function () {
  applySortingAndRendering();
};

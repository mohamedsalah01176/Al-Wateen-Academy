
const sliderContainer = document.getElementById("slider-container");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const isLarge = window.matchMedia("(min-width: 992px)").matches;
const reviews = [{
    name: "Ahmed Ali",
    img: "images/defaultUser.png",
    rating: 5,
    text: "Excellent service and quality!"
}, {
    name: "Sara Mohamed",
    img: "images/defaultUser.png",
    rating: 4,
    text: "Very good, I love it."
}, {
    name: "Omar Hassan",
    img: "images/defaultUser.png",
    rating: 5,
    text: "Outstanding experience!"
}, {
    name: "Mona Adel",
    img: "images/defaultUser.png",
    rating: 5,
    text: "Perfect, highly recommended."
}, {
    name: "Ahmed Ali",
    img: "images/defaultUser.png",
    rating: 5,
    text: "Excellent service and quality!"
}, {
    name: "Sara Mohamed",
    img: "images/defaultUser.png",
    rating: 4,
    text: "Very good, I love it."
}, {
    name: "Omar Hassan",
    img: "images/defaultUser.png",
    rating: 5,
    text: "Outstanding experience!"
}, {
    name: "Mona Adel",
    img: "images/defaultUser.png",
    rating: 5,
    text: "Perfect, highly recommended."
}, ];
console.log(sliderContainer)
reviews.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div>
      <img src="${r.img}" alt="${r.name}" style="width:80px;height:80px;border-radius:50%;">
      <div>
        <h2>${r.name}</h2>
        <div class="stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
        </div>
      </div>
    </div>
    <p>${r.text}</p>
  `;
    sliderContainer.appendChild(card)
});
let position = 0;

function getCardWidth() {
    const card = document.querySelector(".card");
    if (!card) return 0;
    const style = window.getComputedStyle(sliderContainer);
    const gap = 20;
    if (isLarge) {
        return 340 + gap
    }
    return 300 + gap
}

function getVisibleCards() {
    const sliderWidth = document.querySelector(".slider").offsetWidth;
    return Math.floor(sliderWidth / getCardWidth())
}
rightBtn.onclick = () => {
    console.log(isLarge)
    const cardWidth = getCardWidth();
    const visible = getVisibleCards();
    if (isLarge) {
        const maxPosition = -(cardWidth * (reviews.length - visible)) + 370;
        if (parseInt(position) >= parseInt(maxPosition)) {
            position -= cardWidth;
            sliderContainer.style.transform = `translateX(${position}px)`
        }
    } else {
        const maxPosition = -(cardWidth * (reviews.length - visible)) + 300;
        console.log(position)
        console.log(maxPosition)
        if (position >= maxPosition) {
            position -= cardWidth;
            sliderContainer.style.transform = `translateX(${position}px)`
        }
    }
};
leftBtn.onclick = () => {
    const cardWidth = getCardWidth();
    if (position < 0) {
        position += cardWidth;
        sliderContainer.style.transform = `translateX(${position}px)`
    }
};
window.addEventListener("resize", () => {
    position = 0;
    sliderContainer.style.transform = `translateX(0px)`
})
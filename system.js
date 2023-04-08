
// slideshow js
let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
setInterval(() => {
  plusSlides(1);
}, 4000);

fetch("db.json")
.then(response => response.json())
.then(data => {
const rooms = data.rooms;
// Get flip card containers from the HTML document
const roomsContainer = document.getElementById("rooms-container");
// Create flip card elements for rooms
rooms.forEach(room => {
const flipCard = document.createElement("div");
flipCard.classList.add("flip-card");
const flipCardInner = document.createElement("div");
flipCardInner.classList.add("flip-card-inner");
const flipCardFront = document.createElement("div");
flipCardFront.classList.add("flip-card-front");
const image = document.createElement("img");
image.src = "images/" + room.name + ".jpg"; 
image.alt = room.name;
flipCardFront.appendChild(image);
const name = document.createElement("h3");
name.textContent = room.name;
flipCardFront.appendChild(name);
flipCardInner.appendChild(flipCardFront);
const flipCardBack = document.createElement("div");
flipCardBack.classList.add("flip-card-back");
const description = document.createElement("p");
description.textContent = room.description;
flipCardBack.appendChild(description);
const occupancy = document.createElement("p");
occupancy.textContent = "Occupancy: " + room.occupancy;
flipCardBack.appendChild(occupancy);
const price = document.createElement("p");
price.textContent = "Price per night: $" + room.price;
flipCardBack.appendChild(price);
const capacity = document.createElement("p");
capacity.textContent = "Capacity: " + room.capacity;
flipCardBack.appendChild(capacity);
const duration = document.createElement("p");
duration.textContent = "Duration: " + room.duration;
flipCardBack.appendChild(duration);
flipCardInner.appendChild(flipCardBack);
flipCard.appendChild(flipCardInner);
roomsContainer.appendChild(flipCard);
});
})
.catch(error => console.log(error));

const bookButton = document.querySelector('.book');

bookButton.addEventListener('click', function(event) {
  event.preventDefault();

  const availableRooms = document.querySelector('.available-rooms');
  const numAvailableRooms = parseInt(availableRooms.textContent);
  
  if (numAvailableRooms > 0) {
    availableRooms.textContent = numAvailableRooms - 1;

    const newRoomsBooked = hotel.rooms_booked + 1;
    fetch('http://localhost:4000/rooms${rooms.id}', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rooms_booked: newRoomsBooked })
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not operational');
        }
      })
      .catch(function(error) {
        console.error('There was a problem updating the hotel data:', error);
      });
  } else {
    alert('Sorry, this room has already been booked!');
  }
});










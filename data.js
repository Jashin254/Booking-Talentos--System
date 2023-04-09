
var slides = document.getElementsByClassName("slide");
		var currentSlide = 0;

		function showSlide() {
			slides[currentSlide].style.display = "none";
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].style.display = "block";
			setTimeout(showSlide, 4000);
		}

		showSlide();

fetch("http://localhost:3000/rooms")
  .then(res => res.json())
  .then(data =>data.forEach(rooms => renderRooms(rooms)))
 

    
    
renderRooms=(rooms)=>{
  const card =document.createElement("p")
  card.className ="room-card"
  card.innerHTML=`
  <img class ="image" src =${rooms.image}>
  name:${rooms.name}
  <br></br>
  description:${rooms.description}
  <br></br>
  occupancy:${rooms.occupancy}
  <br></br>
  price:${rooms.price}
  <br></br>
  duration:${rooms.duration}
  <br></br>
  available_rooms:<span>${rooms.available_rooms}</span>
  <br></br>
  <button id = "Book-room" >book</button>
  `
  card.querySelector('#Book-room').addEventListener("click",()=>{
    rooms.available_rooms --;
    if(rooms.available_rooms >0){
      card.querySelector('span').textContent = rooms.available_rooms
    }
    else{
      card.querySelector('span').textContent ='sorry this room has already been booked'
    }

    
    
  })

  document.getElementById('joshua').appendChild(card)
}
      /*const Bookrooms = card.querySelector('.Book-room');

      Bookroom.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const availableRooms = card.querySelector('.available-rooms');
        const numAvailablerooms = parseInt(availablerooms.textContent);
        if (numAvailablerooms > 0) {

          availableRooms.textContent = numAvailablerooms - 1;


          const newHiredroom = room.hired_room + 1;
          fetch('http://localhost:3000/rooms${room.id}', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({hired_rooms: newHiredroom })
          })
            .then(function(response) {
              if (!response.ok) {
                throw new Error('Network response was not operational');
              }
            })
            .catch(function(error) {
              console.error('There was a problem updating the booking data:', error);
            });
        } else {
          alert('Sorry, this room is already booked!');
        }
      });
    }
  .catch(function(error) {
    console.log('There was an error fetching the booking data:', error);
  });*/
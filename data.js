~


fetch("http://localhost:3000/rooms")
  .then(function (response) {
    return response.json();
  })
 

    const vacation = document.querySelector('joshua');

    data.forEach(function (room) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      
           <img src="${room.image}">
          <h1><b>${room.name}</b></h1>
          <p>Occupancy: ${room.occupancy}</p>
          <p>Price: ${room.price}</p>
          <p>Duration: ${room.duration}</p>
          <p>capacity:${room.capacity}</p>
          <p>Description:${room.description}</p>
          <p>Available rooms: <span class="available-rooms">${room.capacity - hired_rooms}</span></p>
          <button class="Book-room">Book room</button>
      
      `;
      vacation.appendChild(card);


      const Bookrooms = card.querySelector('.Book-room');

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
    })
  .catch(function(error) {
    console.log('There was an error fetching the booking data:', error);
  });
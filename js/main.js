//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu"); // Ensure IDs are correct
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", function () {
  console.log("clicked");
  mobileMenu.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

// const roomName = "Luxury King Room";
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription = "private king sized bed balcony";

// const room = {
//     name:'luxery room',
//     price: 300,
//     guests: 2,
//     description: "private king sized bed balcony",
// };

const rooms = [
  {
    name: "Luxury Suite",
    price: 200,
    type: "Private Room",
    guests: 2,
    description:
      "This is a luxury suite with a private bathroom and a king-size bed.",
  },
  {
    name: "Standard Room",
    price: 100,
    type: "Shared Room",
    guests: 4,
    description:
      "This is a standard room with a shared bathroom and two queen-size beds.",
  },
  {
    name: "Economy Room",
    price: 50,
    type: "Shared Room",
    guests: 6,
    description:
      "This is an economy room with a shared bathroom and three twin-size beds.",
  },
];

rooms.forEach((room) => {
  const roomArticle = document.createElement("article");
  roomArticle.classList.add("room");

  const roomNameElement = document.createElement("h3");
  roomNameElement.classList.add("room--name");
  roomNameElement.textContent = room.name;

  const roomPriceElement = document.createElement("p");
  roomPriceElement.textContent = `Price: $${room.price}`;

  const roomTypeElement = document.createElement("p");
  roomTypeElement.textContent = `Type: ${room.type}`;

  const roomGuestsElement = document.createElement("p");
  roomGuestsElement.textContent = `Guests: ${room.guests}`;

  const roomDescriptionElement = document.createElement("p");
  roomDescriptionElement.classList.add("room--description");
  roomDescriptionElement.textContent = room.description;

  roomArticle.appendChild(roomNameElement);
  roomArticle.appendChild(roomPriceElement);
  roomArticle.appendChild(roomTypeElement);
  roomArticle.appendChild(roomGuestsElement);
  roomArticle.appendChild(roomDescriptionElement);

  document.body.appendChild(roomArticle);
});

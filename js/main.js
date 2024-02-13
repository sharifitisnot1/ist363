console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobilemenu");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", function () {
  console.log("Menu button clicked");
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

function renderProperties(properties) {
  properties.forEach((room) => {
    const roomArticle = document.createElement("article");
    roomArticle.classList.add("room");

    const roomNameElement = document.createElement("h3");
    roomNameElement.classList.add("room--name");
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement("p");
    roomDescriptionElement.classList.add("room--description");
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement("p");
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement("p");
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  });
}

// fetch("/js/properties.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Filter the properties to get only cabins if needed
//     const cabins = data.filter((room) => room.type === "Cabin");
//     // Render properties (change "cabins" to "data" to render all properties)
//     renderProperties(cabins);
//   })
//   .catch((error) => {
//     console.error("There was a problem fetching the properties data:", error);
//   });

Promise.all([
  // fetch 1
  fetch("js/properties.json").then((response) => response.json()),
  // fetch 2
  fetch("js/categories.json").then((response) => response.json()),
])
  .then(([properties, categories]) => {
    //console.log({properties});
    //console.log({categories})
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });

const displayCategory = (category, properties) => {
  //console.log("display category")
  const sectionElement = document.createElement("section");
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);
  document.body.appendChild(sectionElement);
};

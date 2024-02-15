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

const displayCategory = (category, properties) => {
  const sectionElement = document.createElement("section");
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = category.label.plural;
  sectionElement.classList.add("category");
  sectionElement.appendChild(sectionTitle);

  const filteredProperties = properties.filter(
    (property) => property.type === category.label.singular
  );

  filteredProperties.sort((a, b) => a.name.localeCompare(b.name));

  filteredProperties.forEach((property) => {
    const articleElement = document.createElement("article");
    articleElement.classList.add("property");

    let propertyHtml = `
      <h3 class="property--title">${property.name}</h3>
      <p class="property--description">${property.description}</p>
      <p class="property--price">Price: ${property.price}</p>
    `;
    articleElement.innerHTML = propertyHtml;
    sectionElement.appendChild(articleElement);
  });

  document.body.appendChild(sectionElement);
};

Promise.all([
  fetch("js/properties.json").then((response) => response.json()),
  fetch("js/categories.json").then((response) => response.json()),
])
  .then(([properties, categories]) => {
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });

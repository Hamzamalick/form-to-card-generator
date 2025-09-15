form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let cardContainer = document.querySelector(".card-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let image = document.createElement("img");
  image.setAttribute("src", inputs[0].value);

  let name = document.createElement("h2");
  name.textContent = inputs[1].value;

  let bio = document.createElement("h4");
  bio.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  profile.appendChild(image);
  card.appendChild(profile);

  card.appendChild(name);
  card.appendChild(bio);
  card.appendChild(p);

  cardContainer.appendChild(card);

  form.reset();
});

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem("Fish Meze", "$28.00"));
  menu.appendChild(createMenuItem("Calamari", "$18.00 - Per 225gr"));
  menu.appendChild(createMenuItem("Octopus", "$19.00"));
  menu.appendChild(createMenuItem("Cuttlefish", "$15.00"));
  menu.appendChild(createMenuItem("Salmon", "$17.00"));
  menu.appendChild(createMenuItem("Sea Bream", "$28.00 - Per Kilo"));
  menu.appendChild(createMenuItem("Prawns", "$18.00"));
  menu.appendChild(createMenuItem("Mussels", "$18.00"));
  return menu;
}

function createMenuItem(name, decription) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = decription;

  const foodImage = document.createElement("img");
  foodImage.src = `assets/dishes/${name.toLowerCase()}.jpeg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 25583099";

  const address = document.createElement("p");
  address.textContent =
    "🏠 22A Georgiou Neophytou Ave Μέσα Γειτονιά 4006 Cyprus";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "assets/map.png";
  restaurantLocation.alt = "map of restaurant";

  const getdirectionsBtn = document.createElement("button");
  getdirectionsBtn.classList.add("getdirectionsBtn");
  getdirectionsBtn.textContent = "Get Directions";
  getdirectionsBtn.addEventListener("click", () => {
    window.open(
      "https://www.google.com/maps/dir//Petroktisto+Fish+Restaurant/data=!4m8!4m7!1m0!1m5!1m1!1s0x14e7335b43de3089:0x4990155b7849f42b!2m2!1d33.0630978!2d34.6958456",
      "_blank"
    );
  });

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);
  contact.appendChild(getdirectionsBtn);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;

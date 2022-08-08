function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const logoImage = document.createElement("img");
  logoImage.src = "assets/petroktisto-logo.jpeg";
  logoImage.alt = "logo of petroktisto";

  home.appendChild(createParagraph("Made with passion since 1985."));
  home.appendChild(logoImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;

const container = document.querySelector(".container");
let row;
for (let k = 0; k < 3; k++) {
  row = document.createElement("div");
  row.className = "row";
  let imgCard;
  for (j = 0; j < 3; j++) {
    imgCard = document.createElement("div");
    imgCard.className = "image-card";
    let img = document.createElement("img");
    img.src = "";
    imgCard.appendChild(img);
    row.appendChild(imgCard);
  }
  container.appendChild(row);
}

const img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {
  img[
    i
  ].attributes[0].value = `https://source.unsplash.com/random/300x300?sig=${Math.round(
    Math.random() * i
  )}`;
}

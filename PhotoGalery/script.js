const img = document.querySelectorAll("img");
console.log(img);

for (let i = 0; i < img.length; i++) {
  img[
    i
  ].attributes[0].value = `https://source.unsplash.com/random/300x300?sig=${Math.round(
    Math.random() * i
  )}`;
}

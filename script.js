function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}

function changeColor() {
  let red = getRandomInt(0, 255);
  let green = getRandomInt(0, 255);
  let blue = getRandomInt(0, 255);

  const container = document.querySelector(".container");

  container.style.backgroundColor =
    getColor = `rgb(${red}, ${green}, ${blue} )`;

  const spanColor = document.querySelector(".color");

  spanColor.innerHTML = getColor;
  spanColor.style.backgroundColor = getColor;
}

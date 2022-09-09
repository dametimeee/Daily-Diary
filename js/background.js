const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
]; /* if you want random bgi, add image this array */

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bgimage");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); /** => 랜덤이미지 html에 img태그 생성 **/

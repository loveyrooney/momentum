const imgs = ["4.jpg", "5.jpg","7.jpg", "8.jpg"]

const randomimg = imgs[Math.floor(Math.random() * quotes.length)]

const bgimg = document.createElement("img");
const img = document.querySelector("#img");

bgimg.src = `img/${randomimg}`;

bgimg.style.opacity = '60%';
bgimg.style.width = '100%';
bgimg.style.height = 'auto';
bgimg.style.backgroundSize = 'cover';

img.prepend(bgimg);
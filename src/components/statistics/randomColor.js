let r = Math.floor(Math.random() * 255 + 1);
let g = Math.floor(Math.random() * 255 + 1);
let b = Math.floor(Math.random() * 255 + 1);
let randomColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);
console.log(randomColor);

export default randomColor;

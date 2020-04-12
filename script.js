
const pixels = document.querySelectorAll('.pixel');
const palette = document.querySelectorAll('.color');
const selected = document.querySelector('.selected');

palette[0].classList.add('selected');
sessionStorage.color = 'Black';

const paletteColors = ['black', 'purple', 'blue', 'green'];
for (let index = 0; index < palette.length; index += 1) {
  palette[index].style.backgroundColor = paletteColors[index];
}

for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener("click", function() {
    let color = sessionStorage.setItem("color", event.target.innerHTML);
    palette[i].classList.add('selected');

    for ( let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener("click", function(){
            pixels[e].style.backgroundColor = sessionStorage.color;
        })
    }
})
}

let buttonClear = document.querySelectorAll("#clear-board");
buttonClear[0].addEventListener("click", function(){
    for( let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    }
})
// let alt = "40px";
// let larg = "40px";

// for(let index = 0; index < 5; index++) {
//     let div = document.createElement("div");
//     div.className = "pixel";
//     document.querySelector("pixel-board").appendChild(createDiv);
// }
let pixels = document.querySelectorAll(".pixel");
let palette = document.querySelectorAll(".color");
// let selected = document.getElementsByClassName(".selected");

let paletteColors = ["black", "purple", "blue", "green", "pink"];
for (let index = 0; index < palette.length; index++) {
    palette[index].style.backgroundColor = paletteColors[index];
}
for( let i = 0; i < palette.length; i++) {
    palette[i].addEventListener("click", function() {
    let color = sessionStorage.setItem("color", event.target.innerHTML);

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
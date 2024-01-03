const container = document.getElementById("container");
const popup = document.getElementById("popup");
let number = 16;

function etchASketch () {
    for (let i = 0; i < (number * number); i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = "black";
        } );
    }
}

etchASketch();

popup.addEventListener('click', function() {
    
    var input;

    do { 
        input = prompt("Please enter a total number of squares per side (max 100)");
    } while (input > 100);

        number = input;
    
    while (container.firstChild) {
        container.firstChild.remove();
    }

    etchASketch();
} )
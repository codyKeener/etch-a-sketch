const container = document.getElementById("container");
const popup = document.getElementById("popup");
let number = 16;

// Chat GPT helped me with this too
function randomRGBColor() {
    const red = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const green = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const blue = Math.floor(Math.random() * 256); // Random value for blue (0-255)

    const rgbColor = `rgb(${red}, ${green}, ${blue})`; // Construct the RGB color string
    return rgbColor;
}

function etchASketch () {
    container.style.setProperty('--number', number); // Set the CSS variable for the number of squares (ChatGPT)
    for (let i = 0; i < (number * number); i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = randomRGBColor();
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
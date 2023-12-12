const spans = document.querySelectorAll('span');

const range = document.querySelector('input[type="range"]');
const canvas = document.querySelector('canvas');
const erase = document.querySelector('button');

let color = black
let width = 2;

spans.forEach((span) => {
    span.addEventListener('click', (e) => {
        color = span.id
        console.log(color)
        canvaHandler(color, width)
    });
});

range.addEventListener('input', (e) => {
    width = e.target.value
    console.log(width)
    canvaHandler(color, width)
});


erase.addEventListener('click', (e) => {
    console.log("erase")
});

const canvaHandler = (color, width) => {

    canvas.height = 600;
    canvas.width = 800;

    let context = canvas.getContext("2d");
    let lastX, lastY;

    function draw(x, y) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);

        context.strokeStyle = color;
        context.lineWidth = width;

        context.stroke();

        lastX = x;
        lastY = y;
    }


    canvas.addEventListener("mousedown", function (e) {
        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;

        canvas.addEventListener("mousemove", mouseMoveHandler);

        canvas.addEventListener("mouseup", function () {
            canvas.removeEventListener("mousemove", mouseMoveHandler);
        });
    });


    function mouseMoveHandler(e) {

        let mouseX = e.clientX - canvas.offsetLeft
        let mouseY = e.clientY - canvas.offsetTop;

        draw(mouseX, mouseY);
    }
    console.log("canva")
}

canvaHandler(color, width)





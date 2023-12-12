const spans = document.querySelectorAll('span');
const range = document.querySelector('input[type="range"]');
const canvas = document.querySelector('canvas');
const erase = document.querySelector('button');

// Defult values
// ==============================
let color = black
let width = 2;


// Canva function
// ===============================================================================

const canvaHandler = (color, width, erase) => {


    canvas.height = 600;
    canvas.width = 800;

    let context = canvas.getContext("2d");

    if (erase == "doom!") {
        return context.clearRect(0, 0, canvas.width, canvas.height);
    }

    let lastX, lastY;

    function draw(x, y) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);

        context.strokeStyle = color;
        context.lineWidth = width;

        context.stroke();
        context.lineCap = 'round';

        lastX = x;
        lastY = y;
    }


    canvas.addEventListener("mousedown", function (e) {
        lastX = e.clientX - canvas.offsetLeft + window.scrollX
        lastY = e.clientY - canvas.offsetTop + window.scrollY;
        // console.log(canvas.offsetLeft)
        // console.log(canvas.getBoundingClientRect().x)
        canvas.addEventListener("mousemove", mouseMoveHandler);

        canvas.addEventListener("mouseup", function () {
            canvas.removeEventListener("mousemove", mouseMoveHandler);
        });
    });


    function mouseMoveHandler(e) {

        let mouseX = e.clientX - canvas.offsetLeft + window.scrollX
        let mouseY = e.clientY - canvas.offsetTop + window.scrollY;

        draw(mouseX, mouseY);
    }

}

canvaHandler(color, width)

// EventLIstener
// ===============================================================================

spans.forEach((span) => {
    span.addEventListener('click', () => {

        spans.forEach((s) => {
            s.classList.remove("clicked")
        });
        color = span.id
        span.classList.add("clicked")
        console.log(color)
        canvaHandler(color, width)
    });
});

range.addEventListener('input', (e) => {
    width = e.target.value
    console.log(width)
    canvaHandler(color, width)
});

erase.addEventListener('click', () => {
    canvaHandler(color, width, "doom!")
});


// canvas.addEventListener('mouseleave',() => {
//     isdrawing = false
// });
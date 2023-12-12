const spans = document.querySelectorAll('span');
const blackSpan = document.getElementById('black');
const blueSpan = document.getElementById('blue');
const greenSpan = document.getElementById('green');
const orangeSpan = document.getElementById('orange');
const redSpan = document.getElementById('red');
const range = document.querySelector('input[type="range"]');
const canva = document.querySelector('canvas');
const erase = document.querySelector('button');


spans.forEach((span) => {
    span.addEventListener('click', (e) => {
        console.log(span.id)
    });
});

range.addEventListener('input', (e) => {
    console.log(e.target.value)
});

canva.addEventListener('mousedown', (e) => {
    console.log("down", canva)
});

canva.addEventListener('mouseup', (e) => {
    console.log("up", canva)
});

erase.addEventListener('click', () => {
    console.log("erase", erase)
});














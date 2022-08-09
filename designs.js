// Select color input
const colorSelect = document.getElementById('colorPicker');
// Select size input
const gridSize = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

const canvasGrid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const pickSize = function(event){
    event.preventDefault();
    makeGrid();
    // console.log("test");
};

// function makeGrid() {
const makeGrid = function() {
    // const makeGrid = function() {
// Your code goes here!
canvasGrid.innerHTML = ""
for (let row = 0; row < height.value; row++){
    const tr = document.createElement('tr')
    for (let cell = 0; cell < width.value; cell++){
    const td = document.createElement('td')
    td.addEventListener('click', colorSelect)
    tr.append(td)
    }
    canvasGrid.append(tr)

    }
}






canvasGrid
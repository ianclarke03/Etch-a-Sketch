/*
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
Use flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to
 research/use CSS Grid for this as Grid will be taught later after the foundations course. This is an opportunity specifically to get more practice in for flexbox!
Be careful with borders and margins, as they can adjust the size of the squares!
“OMG, why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools.
Check if there are any errors in the JavaScript console.
Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
*/





// JavaScript to generate and append grid items
document.addEventListener('DOMContentLoaded', function() {
    //const gridContainer = document.getElementById('grid-container');
    const grid = document.querySelector('.grid-container');


    // Create a 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    }
});



/*
function createGridPiece(){
    let piece = document.createElement("div");
    piece.textContent = "hello boys"
    return piece;
}

//const grid = document.querySelector('#grid-container');
const grid = document.querySelector('.grid-container');

for(let i = 1; i <= 16; i++){
    for(let j = 1; j <= 16; j++){
        grid.appendChild(createGridPiece());
        //document.body.appendChild(createGridPiece())
    }
}

*/








/*

function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));

*/
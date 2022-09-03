let container = document.querySelector(".gridContainer");
let main = document.querySelector(".main");
let gridSize = document.querySelector("#gridSize");

initiateGrid();

//Initiating Grid
function initiateGrid(){
    var a = 50;
    var b = a * a;

    container.style.gridTemplateColumns = `repeat(${a}, 1fr)`
    container.style.gridTemplateRows = `repeat(${a}, 1fr)`

    for (i = 0; i < b; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}
//change Grid Size
function newGrid(){
    a = document.querySelector("input").value;
    b = a * a;
    console.log(b)

    let divsToRemove = document.querySelectorAll(".square").forEach(e => e.remove());

    container.style.gridTemplateColumns = `repeat(${a}, 1fr)`
    container.style.gridTemplateRows = `repeat(${a}, 1fr)`

    for (i = 0; i < b; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

}

//apply button
let apply = document.querySelector("#button");
apply.addEventListener("click", function(){
    newGrid()
})

//reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    document.location.reload(true);
})


//Hover to change color
container.addEventListener('mouseover', function (e) {
    if (e.target.matches('.square')) {
      e.target.classList.add('active');
    }
  });



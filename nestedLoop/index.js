
let symobl = window.prompt("enter a symbol: ");

let rows = window.prompt("enter number of rows: ");
let columns = window.prompt("enter number of columns: ");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("myrect").innerHTML += symobl;

    }
    document.getElementById("myrect").innerHTML += "<br>"
}
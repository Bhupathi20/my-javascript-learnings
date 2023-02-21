// array.map() = executes a provided callback function
//               once for each array element
//                and creates a new array

let numbers = [1,2,3,4,5,6,7,8,9]
let squares = numbers.map(square);
let cube = numbers.map(cubes);

squares.forEach(print)
cube.forEach(print);

function square(element){
    return Math.pow(element, 2)
}

function cubes(element){
    return Math.pow(element, 3)
}

function print(element){
    console.log(element)
}
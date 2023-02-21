// ternary operator = shortcut for an if/else statement
//                      takes 2 operands

//                      1. a condition with ?
//                      2. expression if True :
//                      3. expression if False

// condition ? exprIfTrue : exprIfFase

let adult = checkAge(5);
console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false;
}
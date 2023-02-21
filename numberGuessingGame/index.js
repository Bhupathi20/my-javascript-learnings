let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick= function(){
    let guess = document.getElementById("guessField").value 
    guesses+=1;

    if(guess == answer){
        alert(`${answer} is the correct #. and you guessed in ${guess} guesses`);
    }
    else if(guess < answer){
        alert("too small")
    }
    else {
        alert("too large")
    }
}

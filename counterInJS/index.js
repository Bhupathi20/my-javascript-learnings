let count = 0;

document.getElementById("decBtn").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("incBtn").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
}
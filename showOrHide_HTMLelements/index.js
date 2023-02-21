const button = document.querySelector("#myBtn");
const myImg = document.querySelector("#myImg");

button.addEventListener("click", () => {
    if(myImg.style.display == "none"){
        myImg.style.display = "block";
    }
    else{
        myImg.style.display = "none";
    }
})
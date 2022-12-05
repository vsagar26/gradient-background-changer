// var code = document.querySelector(".code")
var btn = document.querySelector("#btn");

btn.addEventListener("click", changeBackground);



function changeBackground(){

    var letters = "0123456789abcdef"
        var hash1 = "#";    
        var hash2 = "#";
    for(let i=0; i<6; i++){
        hash1 += letters[Math.floor(Math.random()*16)];
        hash2 += letters[Math.floor(Math.random()*16)];
    }
    // code.innerHTML = `background : linear-gradient = (to right, ${hash1}, ${hash2})`
    document.body.style.background = `linear-gradient(to right, ${hash1}, ${hash2})`;
    console.log(`${hash1}`, `${hash2}` )
}
window.onload.changeBackground();

 



function On(){
    document.getElementById("bulb").src = "./images/pic_bulbon.gif";
    document.getElementById("txt").innerHTML = "The light is on";
    document.getElementById("txt").style.color = "Green";
}

function Off(){
    document.getElementById("bulb").src = "./images/pic_bulboff.gif";
    document.getElementById("txt").innerHTML = "The light is off";
    document.getElementById("txt").style.color = "red"; 
}

// function Blink(){
//     setInterval(function(){
//         document.getElementById("bulb").src = "./images/pic_bulbon.gif"; 
//         setTimeout(function(){
//             document.getElementById("bulb").src = "./images/pic_bulboff.gif"; 
//         }, 500);
//     }, 1000);
// }

// Blink();

document.getElementById("on").addEventListener("click", On);
document.getElementById("off").addEventListener("click", Off);
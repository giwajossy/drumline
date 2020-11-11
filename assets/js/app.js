//Function to convert hex format to a rgb color
function rgb2hex(rgb){
    rgb = rgb.match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}



function colorChange() {
    setInterval(function(){ 
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let alpha = 1;
        // document.getElementById("body").style.backgroundColor = "rgba(192,57,43,1)";
        
        var package = red+","+green+","+blue;
        document.getElementsByTagName("Meta")[3].setAttribute("content", rgb2hex(package));
        document.getElementById("body").style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")"; 
        // document.getElementsByTagName("Meta")[4].setAttribute("content", "rgba("+red+","+green+","+blue+","+alpha+")");
    }, 5000);
}



var numberOfButtons = document.querySelectorAll(".instrument").length;

for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", buttonClicked);

    function buttonClicked() {
        var buttonContent = document.querySelectorAll(".instrument")[i].innerText;
        alert(buttonContent);
        // alert("I got here");
    
    }
}
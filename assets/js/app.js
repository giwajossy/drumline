function colorChange() {
    setInterval(function(){ 
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let alpha = Math.random();
        // document.getElementById("body").style.backgroundColor = "rgba(192,57,43,1)";
        // document.querySelector(".kits button").style.borderBottom = "2em solid rgba("+red+","+green+","+blue+","+alpha+")"; 
        document.getElementById("body").style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")"; 
        document.getElementsByTagName("Meta")[4].setAttribute("content", "rgba("+red+","+green+","+blue+","+alpha+")");
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
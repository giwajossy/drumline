function colorChange() {
    setInterval(function(){ 
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let alpha = Math.random();
        // document.getElementById("body").style.backgroundColor = "rgba(192,57,43,1)";
        // document.querySelector(".kits button").style.borderBottom = "2em solid rgba("+red+","+green+","+blue+","+alpha+")"; 
        document.getElementById("body").style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")"; 
    }, 5000);
}




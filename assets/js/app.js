var numberOfButtons = document.querySelectorAll("button").length;
// Add a class="instrument" to every button tag
for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll("button")[i].setAttribute("class", "instrument");
}


//Function to convert hex format to a rgb color
function rgb2hex(rgb){
    rgb = rgb.match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}



function bgColorChange() {
       
    setInterval(function() { 
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let alpha = 1;
        
        let package = red+","+green+","+blue;
        document.getElementsByTagName("Meta")[3].setAttribute("content", rgb2hex(package));
        document.getElementById("body").style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")";
        

        // console.log(package);
        
    }, 3000);
    
        
}


var numberOfInstruments = document.querySelectorAll(".instrument").length;
// console.log(numberOfButtons);
for (var i = 0; i<numberOfInstruments; i++) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", function() {

        let instrument = this.getAttribute("id");
        switch (instrument) {
            case " cymbal":
                var audio = new Audio("assets/sounds/cymbal.mp3");
                audio.play();
                break;
                
                
            case "c snare":
                var audio = new Audio("assets/sounds/snareDrum.mp3");
                audio.play();
                break;
            
            case "v tom":
                var audio = new Audio("assets/sounds/tomDrum.mp3");
                audio.play();
                break;

            case "b kick":
                var audio = new Audio("assets/sounds/bassKicks.mp3");
                audio.play();
                break;

            case "n hiHat":
                var audio = new Audio("assets/sounds/hiHat.mp3");
                audio.play();
                break;

            case "m drumStick":
                var audio = new Audio("assets/sounds/drumstickEffect.mp3");
                audio.play();
                break;

            default:
                break;
        }

        
    });

}

let key = document.addEventListener("keydown", function(e) {

    // alert(e.key + " got pressed");

    switch (e.key) {
        case " ":
            var audio = new Audio("assets/sounds/cymbal.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("assets/sounds/snareDrum.mp3");
            audio.play();
            break;

        case "v":
            var audio = new Audio("assets/sounds/tomDrum.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("assets/sounds/bassKicks.mp3");
            audio.play();
            break;

        case "n":
            var audio = new Audio("assets/sounds/hiHat.mp3");
            audio.play();
            break;

        case "m":
            var audio = new Audio("assets/sounds/drumstickEffect.mp3");
            audio.play();
            break;
    
        default:
            break;
    }

});
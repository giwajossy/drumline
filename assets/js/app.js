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
        

        console.log(package);
        
    }, 3000);
    
        
}


var numberOfButtons = document.querySelectorAll(".instrument").length;
// console.log(numberOfButtons);
for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", function() {

        let instrument = this.getAttribute("id");
        switch (instrument) {
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
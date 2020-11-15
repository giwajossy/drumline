//Function to convert hex format to a rgb color
function rgb2hex(rgb){
    rgb = rgb.match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}



function colorChange() {
    var valueOfInput = parseInt(prompt("Set interval [in seconds]"));
    
    

    

    
    setInterval(function() { 
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let alpha = 1;
        
        var package = red+","+green+","+blue;
        document.getElementsByTagName("Meta")[3].setAttribute("content", rgb2hex(package));
        document.getElementById("body").style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")";
        
        console.log(package);    
    }, valueOfInput+"000");

        
        

    
    
}


// function colorManipulation() {

//     var valueOfInput = parseInt(prompt("Set number of random colors?"));
//     for (var i = 0; i<valueOfInput; i++) {
//         var color = [];

        
        
//         let red = Math.floor(Math.random() * 255);
//         let green = Math.floor(Math.random() * 255);
//         let blue = Math.floor(Math.random() * 255);
//         let alpha = 1;
        
//         var package = red+","+green+","+blue;
//         document.getElementsByTagName("Meta")[3].setAttribute("content", rgb2hex(package));
//         document.getElementById("body").style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")";
        
//         console.log(color.push(package));
//         console.log(package);

//     }

//     // valueOfInput = x;
//     // as long as i <= valueOfInput
//     //  show x random colors

// }


var numberOfButtons = document.querySelectorAll(".instrument").length;

for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", buttonClicked);

    function buttonClicked() {
        // var buttonContent = document.querySelectorAll(".instrument")[i].innerText;
        // alert(buttonContent);
        alert("got clicked");
        var audio = new Audio("assets/sounds/fem.mp3");
        audio.play();
    
    }
}
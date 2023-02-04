function color(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    document.getElementById('red_s').innerHTML = red;
    document.getElementById('green_s').innerHTML = green;
    document.getElementById('blue_s').innerHTML = blue;
    document.body.style.backgroundColor = 'rgb('+red+","+green+","+blue+")";
    
    }



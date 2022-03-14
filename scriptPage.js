function colorChangerHex() {
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

    var bgColor = "rgb("+ x +","+ y +","+ z +")";

    document.getElementById("background").style.backgroundColor = bgColor;
    document.getElementById("textColor").textContent = document.getElementById("background").style.backgroundColor;
}

function colorChangerSimple(){
    var x = Math.floor(Math.random()*10);
    var bgColor = "";

    if(x == 0){
        bgColor = "white";
    } else if(x == 1){
        bgColor = "black"
    } else if(x == 2){
        bgColor = "red";
    } else if(x == 3){
        bgColor = "yellow";
    } else if(x == 4){
        bgColor = "green";
    } else if(x == 5){
        bgColor = "blue";
    } else if(x == 6){
        bgColor = "orange";
    } else if(x == 7){
        bgColor = "brown";
    } else if(x == 8){
        bgColor = "violet";
    } else if(x == 9){
        bgColor = "pink";
    }

    document.getElementById("background").style.backgroundColor = bgColor;
    document.getElementById("textColor").textContent = bgColor;
}
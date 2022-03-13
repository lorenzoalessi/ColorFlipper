function colorChanger() {
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

    var bgColor = "rgb("+ x +","+ y +","+ z +")";
    console.log(bgColor);

    document.getElementById("background").style.backgroundColor = bgColor;
    document.getElementById("textColor").textContent = document.getElementById("background").style.backgroundColor;
}
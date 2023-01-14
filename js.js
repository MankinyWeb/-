var start = 0;
var name = "-胡桃-雷电将军-温迪--派蒙-";
var change;
window.onload = function () {
    charset = "utf-8"
}
var i = 0;
console.log(name[0]);
function Start() {
    if (start == 0) {
        var a = Math.floor((Math.random() * 10) + 1);
        document.getElementById("button-start").innerHTML = "Stop";
        change = setInterval(function () { changing() }, 100);
        start = 1;
	   document.body.style.backgroundImage = "url('backgroud.png')"; 
    }
    else if (start == 1) {
        clearInterval(change);
        document.getElementById("button-start").innerHTML = "ReStart";
        document.getElementById("benming").innerHTML = "坤坤";
        start = 0;
        alert("你的本命是：坤坤");
	   document.body.style.backgroundImage = "url('CXK.jpg')";
	   var mp3Url = "zhiyin.mp3";
        var player = new Audio(mp3Url);
        player.play(); 
    }
}
function changing() {
    document.getElementById("benming").innerHTML = name.substring(i,i+4);
    i += 4;
    if(i>12)i=0;
}
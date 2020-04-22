document.onkeydown = keydown;

function keydown(evt){
  if (!evt) evt = event;
  if (evt.ctrlKey && evt.keyCode==68){ //CTRL+ALT+F4
    evt.preventDefault();
    var iframe = document.createElement('iframe');
    iframe.src = 'hide.html';
    iframe.style.position = "fixed";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.top = "0px";
    iframe.style.bottom = "0px";
    iframe.style.left = "0px";
    iframe.style.right = "0px";
    document.body.style.overflow = "hidden";
    iframe.style.border = "0px";
    console.log("Shortcut Detected");
    if(document.body.appendChild(iframe)) {
      console.log("Game Activated");
    }
  }
}

function opennav() {
  if(document.getElementById("nav").style.left = "0px") {
    document.getElementById("close").style.display = "block";
  }
}

function closenav() {
  if(document.getElementById("nav").style.left = "-100vw") {
    document.getElementById("close").style.display = "none";
  }
}

/* var color;
var r;
var g;
var b;

function generateColorCode() {
  color = Math.floor(Math.random() * 256);
  return color;
}

function colorCycle() {
  r = generateColorCode();
  g = generateColorCode();
  b = generateColorCode();
  document.body.style.background = "rgb("+r+", "+g+", "+b+")";
  window.document.title = r+b+g;
}

setInterval(colorCycle, 1500); */

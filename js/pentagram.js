/* PENTAGRAM */

var cW = $(window).innerWidth();
var cH = $(window).innerHeight();
var W = cW;
var archtype = Raphael("canvas", cW, cH);

Raphael.fn.pentagram = function(xloc, yloc, radius) {
  var path = ""
  for (var i = 0; i <= 4    ; i++) {
    var angle = i * 360/5 * 2,
        x = radius * Math.cos( (angle * Math.PI / 180) + Math.PI/10) + xloc,
        y = radius * Math.sin( (angle * Math.PI / 180) + Math.PI/10) + yloc
    path += (i == 0 ? "M" : "L") + x + "," + y
  }
  path += "Z"
  return this.path(path)
}

Raphael.fn.pentatext = function(xloc, yloc, radius, word, font, color, fontsize) {
    wurd = word.split('');
  for (var i = 0; i <= wurd.length-1; i++) {
    var angle = i * 360/5 + 360/5,
        x = radius * Math.cos( (angle * Math.PI / 180) + Math.PI/10) + xloc,
        y = radius * Math.sin( (angle * Math.PI / 180) + Math.PI/10) + yloc
    this.text(x, y, wurd[i]).attr({'font-family':font,'font-size': fontsize, 'fill': color});
  }
  
}

function randomCol(){
    return Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)
}
var i = 0;
function initAll(){
    //backcol = randomCol();
    //$('body').css("background-color","rgb("+backcol+")");
    var pentag = archtype.pentagram(cW/2, cH/2, 160).attr({
        "stroke-width":20,
        "stroke":"red"
    });
    var txt = archtype.pentatext(cW/2, cH/2, 160+80, "CNFSN", "Times", "red", 40);
    setInterval(function(){ $('#canvas').css("opacity",Math.random()*0.2)}, 5)
}
initAll(); 
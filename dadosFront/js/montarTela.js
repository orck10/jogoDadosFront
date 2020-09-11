var background = new Image();
var canvas;
var ctx;
var largura;
var altura;
var larguraMenu = 800;
var alturaMenu = 400;

var telaJogo = {
    x : parseInt((largura / 2) - (larguraMenu / 2)),
    y : parseInt((altura / 2) - (alturaMenu / 2)),
    
}

function iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
}

function desenhaFundo(){
    largura = window.innerWidth;
    altura = window.innerHeight - 150;
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
    x = parseInt((largura / 2) - (larguraMenu / 2));
    y = parseInt((altura / 2) - (alturaMenu / 2));
    ctx.beginPath();
    ctx.fillStyle = "#66ccff";
    ctx.fillRect(x, y, larguraMenu, alturaMenu);
}

function upDate(){
      desenhaFundo();
}

window.onload = function () {
    iniciar();
    upDate();    
};

window.onmousemove = function(){
    upDate();
}

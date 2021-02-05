var host = window.location.origin;

var background = new Image();
var canvas;
var ctx;
var largura;
var altura;
var larguraMenu = 800;
var alturaMenu = 700;
var fase = 0;
var finalizado = false;

function iniciarImagem(path){
    var base_image = new Image();
    base_image.src = path;
    return base_image;
}

var resultado = {
    nome : "",
    idJogo : "",
    resultados : []
}

var telaJogo = {
    dadosJogo : null,
    dado1 : iniciarImagem('../img/dado1.png'),
    dado2 : iniciarImagem('../img/dado2.png'),
    dado3 : iniciarImagem('../img/dado3.png'),
    dado4 : iniciarImagem('../img/dado4.png'),
    dado5 : iniciarImagem('../img/dado5.png'),
    dado6 : iniciarImagem('../img/dado6.png'),
    n1 : iniciarImagem('../img/01.png'),
    n2 : iniciarImagem('../img/02.png'),
    n3 : iniciarImagem('../img/03.png'),
    n4 : iniciarImagem('../img/04.png'),
    n5 : iniciarImagem('../img/05.png'),
    n6 : iniciarImagem('../img/06.png'),
    n7 : iniciarImagem('../img/07.png'),
    n8 : iniciarImagem('../img/08.png'),
    n9 : iniciarImagem('../img/09.png'),
    n10 : iniciarImagem('../img/10.png'),
    n11 : iniciarImagem('../img/11.png'),
    n12 : iniciarImagem('../img/12.png'),
    posN1 : [],
    posN2 : [],
    posN3 : [],
    posN4 : [],
    posN5 : [],
    posN6 : [],
    posN7 : [],
    posN8 : [],
    posN9 : [],
    posN10 : [],
    posN11 : [],
    posN12 : [],
    retornaDado : function(n){
        switch (n){
            case '1':
                return this.dado1;
            case '2':
                return this.dado2;
            case '3':
                return this.dado3;
            case '4':
                return this.dado4;
            case '5':
                return this.dado5;
            case '6':
                return this.dado6;
            default:
                return null;
        }

    }
}

function iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
}

function desenhaFundo(){
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);

    x = parseInt((largura / 2) - (larguraMenu / 2));
    y = parseInt((altura / 2) - (alturaMenu / 2));

    ctx.beginPath();
    ctx.fillStyle = "#66ccff";
    ctx.fillRect(x, y, larguraMenu, alturaMenu);
    
    telaJogo.posN1[0] = ((largura / 2) - 315);
    telaJogo.posN1[1] = ((altura / 2) + 30);
    ctx.drawImage(telaJogo.n1, telaJogo.posN1[0], telaJogo.posN1[1]);
    
    telaJogo.posN2[0] = ((largura / 2) - 205);
    telaJogo.posN2[1] = ((altura / 2) + 30);
    ctx.drawImage(telaJogo.n2,  telaJogo.posN2[0], telaJogo.posN2[1]);
    
    telaJogo.posN3[0] = ((largura / 2) - 95);
    telaJogo.posN3[1] = ((altura / 2) + 30);
    ctx.drawImage(telaJogo.n3, telaJogo.posN3[0], telaJogo.posN3[1]);
    
    telaJogo.posN4[0] = ((largura / 2) + 25);
    telaJogo.posN4[1] = ((altura / 2) + 30);
    ctx.drawImage(telaJogo.n4, telaJogo.posN4[0], telaJogo.posN4[1]);
    
    telaJogo.posN5[0] = ((largura / 2) + 135);
    telaJogo.posN5[1] = ((altura / 2) + 30);
    ctx.drawImage(telaJogo.n5, telaJogo.posN5[0], telaJogo.posN5[1]);
    
    telaJogo.posN6[0] = ((largura / 2) + 245);
    telaJogo.posN6[1] = ((altura / 2) + 30);
    ctx.drawImage(telaJogo.n6, telaJogo.posN6[0], telaJogo.posN6[1]);
    
    telaJogo.posN7[0] = ((largura / 2) - 315);
    telaJogo.posN7[1] = ((altura / 2) + 110);
    ctx.drawImage(telaJogo.n7, telaJogo.posN7[0], telaJogo.posN7[1]);
    
    telaJogo.posN8[0] = ((largura / 2) - 205);
    telaJogo.posN8[1] = ((altura / 2) + 110);
    ctx.drawImage(telaJogo.n8, telaJogo.posN8[0], telaJogo.posN8[1]);
    
    telaJogo.posN9[0] = ((largura / 2) - 95);
    telaJogo.posN9[1] = ((altura / 2) + 110);
    ctx.drawImage(telaJogo.n9, telaJogo.posN9[0], telaJogo.posN9[1]);
    
    telaJogo.posN10[0] = ((largura / 2) + 25);
    telaJogo.posN10[1] = ((altura / 2) + 110);
    ctx.drawImage(telaJogo.n10, telaJogo.posN10[0], telaJogo.posN10[1]);
    
    telaJogo.posN11[0] = ((largura / 2) + 135);
    telaJogo.posN11[1] = ((altura / 2) + 110);
    ctx.drawImage(telaJogo.n11, telaJogo.posN11[0], telaJogo.posN11[1]);
    
    telaJogo.posN12[0] = ((largura / 2) + 245);
    telaJogo.posN12[1] = ((altura / 2) + 110);
    ctx.drawImage(telaJogo.n12, telaJogo.posN12[0], telaJogo.posN12[1]);

    if(telaJogo.dadosJogo.fases.fases != null){
        
        var faseAtual = telaJogo.dadosJogo.fases.fases[fase]

        ctx.drawImage(telaJogo.retornaDado(String(faseAtual.n1)), ((largura / 2) - 300), 20);
        ctx.drawImage(telaJogo.retornaDado(String(faseAtual.n2)), ((largura / 2) + 90), 20);    
    }
}

function desenhaFundoSemDados(){
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
    x = parseInt((largura / 2) - (larguraMenu / 2));
    y = parseInt((altura / 2) - (alturaMenu / 2));
    ctx.beginPath();
    ctx.fillStyle = "#66ccff";
    ctx.fillRect(x, y, larguraMenu, alturaMenu);
    base_image = new Image();
    base_image.src = '../img/jogoSemDados.png';
    ctx.drawImage(base_image, x, y+95);
}

function desenhaFundoFinal(){
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
    x = parseInt((largura / 2) - (larguraMenu / 2));
    y = parseInt((altura / 2) - (alturaMenu / 2));
    ctx.beginPath();
    ctx.fillStyle = "#66ccff";
    ctx.fillRect(x, y, larguraMenu, alturaMenu);
    base_image = new Image();
    base_image.src = '../img/finalizar.png';
    ctx.drawImage(base_image, x, y+45);
}

function upDate(){
    
    var dadosJogo = document.getElementById("parametrosJogo").value;
    
    if(fase > 5){
        desenhaFundoFinal();
        finalizado = true;
    }else if(dadosJogo != null && dadosJogo != undefined && dadosJogo != ""){
        desenhaFundo();
    }else{
        desenhaFundoSemDados();
    }
}

window.onload = function () {
    iniciar();
    upDate();    
};

window.onmousemove = function(){
    var data = document.getElementById("parametrosJogo").value;
    if(data != null && data != ""){
        telaJogo.dadosJogo = JSON.parse(data);
    }
    
    upDate();
}

function verificaResultado(valor){
    var faseAtual = telaJogo.dadosJogo.fases.fases[fase]
    if((faseAtual.n1 + faseAtual.n2) == valor){
        return true;
    }
    return false;
}

function executaAcaoDeResultado(result){
    if(fase < 6){
        if(result){
            resultado.resultados[fase] = true;
            fase++;
            alert("Resposta correta!");
        }else{
            resultado.resultados[fase] = false;
            fase++;
            alert("Resposta errada!");
        }
    }
}

function onclick(x, y){
    if(x >= telaJogo.posN1[0] && x < (telaJogo.posN1[0] + 70 ) ){
        if(y >= (telaJogo.posN1[1]) && y < ((telaJogo.posN1[1])) + 70){
            executaAcaoDeResultado(verificaResultado(1));
        }
    }
    if(x >= telaJogo.posN2[0] && x < (telaJogo.posN2[0] + 70 ) ){
        if(y >= (telaJogo.posN2[1]) && y < ((telaJogo.posN2[1])) + 70){
            executaAcaoDeResultado(verificaResultado(2));
        }
    }
    if(x >= telaJogo.posN3[0] && x < (telaJogo.posN3[0] + 70 ) ){
        if(y >= (telaJogo.posN3[1]) && y < ((telaJogo.posN3[1])) + 70){
            executaAcaoDeResultado(verificaResultado(3));
        }
    }
    if(x >= telaJogo.posN4[0] && x < (telaJogo.posN4[0] + 70 ) ){
        if(y >= (telaJogo.posN4[1]) && y < ((telaJogo.posN4[1])) + 70){
            executaAcaoDeResultado(verificaResultado(4));
        }
    }
    if(x >= telaJogo.posN5[0] && x < (telaJogo.posN5[0] + 70 ) ){
        if(y >= (telaJogo.posN5[1]) && y < ((telaJogo.posN5[1])) + 70){
            executaAcaoDeResultado(verificaResultado(5));
        }
    }
    if(x >= telaJogo.posN6[0] && x < (telaJogo.posN6[0] + 70 ) ){
        if(y >= (telaJogo.posN6[1]) && y < ((telaJogo.posN6[1])) + 70){
            executaAcaoDeResultado(verificaResultado(6));
        }
    }
    if(x >= telaJogo.posN7[0] && x < (telaJogo.posN7[0] + 70 ) ){
        if(y >= (telaJogo.posN7[1]) && y < ((telaJogo.posN7[1])) + 70){
            executaAcaoDeResultado(verificaResultado(7));
        }
    }
    if(x >= telaJogo.posN8[0] && x < (telaJogo.posN8[0] + 70 ) ){
        if(y >= (telaJogo.posN8[1]) && y < ((telaJogo.posN8[1])) + 70){
            executaAcaoDeResultado(verificaResultado(8));
        }
    }
    if(x >= telaJogo.posN9[0] && x < (telaJogo.posN9[0] + 70 ) ){
        if(y >= (telaJogo.posN9[1]) && y < ((telaJogo.posN9[1])) + 70){
            executaAcaoDeResultado(verificaResultado(9));
        }
    }
    if(x >= telaJogo.posN10[0] && x < (telaJogo.posN10[0] + 70 ) ){
        if(y >= (telaJogo.posN10[1]) && y < ((telaJogo.posN10[1])) + 70){
            executaAcaoDeResultado(verificaResultado(10));
        }
    }
    if(x >= telaJogo.posN11[0] && x < (telaJogo.posN11[0] + 70 ) ){
        if(y >= (telaJogo.posN11[1]) && y < ((telaJogo.posN11[1])) + 70){
            executaAcaoDeResultado(verificaResultado(11));
        }
    }
    if(x >= telaJogo.posN12[0] && x < (telaJogo.posN12[0] + 70 ) ){
        if(y >= (telaJogo.posN12[1]) && y < ((telaJogo.posN12[1])) + 70){
            executaAcaoDeResultado(verificaResultado(12));
        }
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

window.onmousedown = function(){
    var pos = getMousePos(canvas, event);
    var dadosJogo = document.getElementById("parametrosJogo").value;
    if(dadosJogo != null && dadosJogo != undefined && dadosJogo != "" && fase <= 5){
        onclick(pos.x, pos.y);
    }
    if(finalizado){
        var dadosJogo = document.getElementById("parametrosJogo").value;
        dadosJogo = null;
        finalizado = false;
        var concluido = document.getElementById("concluido");
        resultado.nome = document.getElementById("nome").value;
        resultado.idJogo = document.getElementById("njogo").value;
        concluido.value = JSON.stringify(resultado);
        var enviou = postResultado();
        if(!enviou){
            alert("Encerrado com sucesso!");
            document.location.reload(true);
        }else{
            alert("Erro Clique para tentar novamente!");
    
        }
    }
}
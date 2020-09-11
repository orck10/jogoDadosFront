var host = window.location.origin;

function getRequest(urlPath, dadosHeader){
    var xmlHttp = new XMLHttpRequest();
    try {
        xmlHttp.open( "GET", urlPath, false );
        if(dadosHeader){
            for(var i = 0; i < dadosHeader.length; i++){
                xmlHttp.setRequestHeader(dadosHeader[i][0], dadosHeader[i][1]);
            }
        }
        xmlHttp.send( null );
    } catch (error) {
        alert("Falha na requisição tente novamente");
        console.log("Erro :"+error);
        return "{}"
    }
    return xmlHttp.responseText;
};
function postRequest(urlPath, dadosHeader, body){
    var xmlHttp = new XMLHttpRequest();
    try {
        xmlHttp.open( "POST", urlPath, false );
        if(dadosHeader){
            for(var i = 0; i < dadosHeader.length; i++){
                xmlHttp.setRequestHeader(dadosHeader[i][0], dadosHeader[i][1]);
            }
        }
        xmlHttp.send(body);
    } catch (error) {
        alert("Falha na requisição tente novamente");
        console.log("Erro :"+error);
        return "{}"
    }
    if(xmlHttp.status < 300){
        return xmlHttp.response;
    }
    console.log('{"Erro":"'+xmlHttp.response+'", "Status":"'+xmlHttp.status+'"}');
    return '{"Erro":"'+xmlHttp.response+'", "Status":"'+xmlHttp.status+'"}';
};

function getParametrosJogo(){
    var numeroJogo = document.getElementById("njogo").value;
    var parametrosJogo = document.getElementById("parametrosJogo");
    var url = "http://127.0.0.1:8080/api/jogo/jogar?id="+numeroJogo;
    var json = getRequest(url);
    parametrosJogo.value = json;
}
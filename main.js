var x = 0
var y = 0
var drawCircle = ""
var speechR = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()


function start(){
    document.getElementById("status").innerHTML = "o sistema está ouvindo ,pode falar"
    recognition.start()
}

recognition.onResult = function(event){
    var getSpeak = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "a fala foi reconhecida com:"+getSpeak;
    if(getSpeak=='círculo'){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        drawCircle = "set"
    }
}
function setup(){
    canvas=createCanvas(1000,700)
}
function draw(){
    if(drawCircle=='set'){
        r = Math.floor(Math.random()*100)
        circle(x,y,r)
        drawCircle= ""
    }

}
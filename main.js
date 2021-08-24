var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start() {
    document.getElementById("textbox").innerHTML ="";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);
    var Content = event.results [0] [0].transcript;
    console.log(Content);
     
    document.getElementById("textbox").innerHTML = Content;
    if (Content=="take my selfie"){
        talk();
        console.log("taking your selfie");
    }   
}
function talk() {
    var synth = window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){

        take_snapshot();
    }, 5000);
}
function save() {
    link = document.getElementById("link");
    image =document.getElementById("selfieimage").src;
    link.href = image;
    link.click(); 
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
  camera=document.getElementById("camera");

  function take_snapshot(){
      Webcam.snap(function(data_uri)
        {document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
  });
}
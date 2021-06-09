prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8RhrBwYvf/model.jason',modelLoaded);
function modelLoaded()
{
    console.log('model is loaded');
}
function speak()
{
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+prediction;
    var utter=new SpeechSynthesisUtterance(speak1);
    synth.speak(utter);
}
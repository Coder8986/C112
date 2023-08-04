/* https://teachablemachine.withgoogle.com/models/t6mqWjLa2/ */

Webcam.set ({
    width: 300,
    height:350,
    image_format: 'png',
    png_quality:90
    });

    Camera = document.getElementById("camera");
    Webcam.attach("#camera");

    function take_snapshot(){
    Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML = "<img id='captured_img' src= " + data_uri + ">"
        });
    }

    console.log("ml5 version", ml5.version);
    Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/t6mqWjLa2/model.json", ModelLoaded);

    function ModelLoaded(){
        console.log("Model Loaded")
    }
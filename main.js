function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IGb3iscvh/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
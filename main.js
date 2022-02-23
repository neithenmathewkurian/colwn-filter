noseX=0;
nosey=0;
function preload() {
    clownnose = loadImage("https://i.postimg.cc/vHGM0Td3/image-removebg-preview.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
  
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clownnose,noseX,nosey,80,80);
}
function take_picture() {
    save("clown.png");
}
function modelLoaded() {
    console.log("success");

}
function gotResult(error, results) {
    if (error) {
        // console.log(error);
    
    }

    else {
        if (results.length > 0) {
            // console.log(Result)
            console.log("nose x= " + results[0].pose.nose.x);
            console.log("nose y= " + results[0].pose.nose.y);
            noseX=results[0].pose.nose.x;
            nosey=results[0].pose.nose.y;
            console.log(noseX);
            console.log(nosey);
        }


    }
}
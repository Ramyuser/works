nosex = 0;
nosey = 0;

function preload() {
    mouth = loadImage('https://i.postimg.cc/QxtZJTsV/images.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mouth, nosex, nosey, 50, 20);
}

function takeSnapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log("PoseNet is Initialized");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 25;
        console.log("nose x = " + nosex);
        nosey = results[0].pose.nose.y + 15;
        console.log("nose y = " + nosey);
    }
}
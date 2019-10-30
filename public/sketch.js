function preload(){
  // put preload code here
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);
  socket = io(); //connect to soket.io , our sketch can now talk to our server

  socket.on("mouseBroadcast", newDrawing); //when you get a message from the server called mousebroadcast esegui newDrawing
   function newDrawing(receivedData) { //newDrawing is a callback function
     fill('yellow');
     ellipse(receivedData.x, receivedData.y, 10);
   }

  background(255,0,0);
}

function draw() {


}

function mouseDragged(){
  fill('white');
  ellipse(mouseX,mouseY,20);
  //create var w/ things we want to send to the server
  var sendData = {
    x:mouseX,
    y:mouseY
  }

  //call our socket and send it
  socket.emit('mouse', sendData); //emit a message called mouse that contains sendData
}

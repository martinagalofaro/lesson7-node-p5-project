console.log("server is running");

var express = require("express");  //load express module inside this variable

var app = express(); // the var became a function sice we're loading the module in it

//chose a port to comunicate bw server and client
//var port = 3000; port for local host
var port = process.env.PORT || 3000; //now it will work both locally and on server

//tell node to privide public access to the folder 'public'
app.use(express.static('public'));

//tell express to create a client connection
var server = app.listen(port); //we created a local host

console.log("http://localhost" + port)

//conntect among different clients, we need socket

var socket = require('socket.io');

var io = socket(server); //use socket on our new server, which is in the variable 'server'

io.on("connection", newConnection); //when there's a new connection esegui la funzione newConncetion

function newConnection(socket) {
  console.log(socket.id);

  socket.on("mouse", mouseMessage) //when you recive "mouse" esegui mouseMessage

  function mouseMessage(receivedData){ //mouseMessage is a callback function
    console.log(receivedData);

    socket.broadcast.emit("mouseBroadcast", receivedData) //sending from the server an info to all the clients 8apart form the one who is gettingthe info from)


  }

}

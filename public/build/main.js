"use strict";function setup(){createCanvas(displayWidth,displayHeight),strokeWeight(10);var o=location.href.indexOf("/private");socket=io(o>0?"/private":"/public"),room=window.location.pathname.slice(-40),socket.emit("init",room),socket.on("linePositionData",function(o){line(o.x,o.y,o.touchX,o.touchY),console.log("drawing a line")})}function draw(){114===keyCode&&background(256),touchIsDown?(x>0&&y>0&&(line(x,y,touchX,touchY),socket.emit("clientDataPush",room,{x:touchX,y:touchY,touchX:touchX,touchY:touchY})),x=touchX,y=touchY):(x=0,y=0)}function windowResized(){resizeCanvas(windowWidth,windowHeight),strokeWeight(10)}var io,socket,room,x=0,y=0,epsilon=.01;
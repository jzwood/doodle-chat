"use strict";var _slicedToArray=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),io,socket,p5App=new window.p5(function(t){var e=void 0,n=0,r=0;t.setup=function(){var n=t.createCanvas(t.windowWidth,t.windowHeight);n.parent("wrapper__canvas"),n.class("wrapper__canvas__p5"),document.querySelector(".nav--fixed").style.width=t.windowWidth+"px",t.strokeWeight(10);var r=location.href.indexOf("/private");socket=io(r>0?"/private":"/public"),e=window.location.pathname.slice(-40),socket.emit("init",e),socket.on("linePositionData",function(e){t.line(e.x,e.y,e.tx,e.ty)}),socket.on("clear",function(){t.background(256)})},t.draw=function(){if(114===t.keyCode&&(t.background(256),socket.emit("clear",e)),t.touchIsDown||t.mouseIsPressed){var o=t.touchIsDown?[t.touchX,t.touchY]:[t.mouseX,t.mouseY],i=_slicedToArray(o,2),a=i[0],c=i[1];n>0&&r>0&&(t.line(n,r,a,c),socket.emit("pushData",e,{x:n,y:r,tx:a,ty:c})),n=a,r=c}else n=0,r=0}});
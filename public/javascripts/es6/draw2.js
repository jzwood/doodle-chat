'use strict'
var io, socket

document.addEventListener("DOMContentLoaded", e => {
  start()
})

function start(){
  const canvas = document.querySelector('.canvas-wrapper__canvas')
  if (canvas.getContext) {
    const ctrl = controller(canvas)
    ctrl.setBackground('#ffffff')

    const isPrivate = location.href.indexOf('/private')
    socket = isPrivate > 0 ? io('/private') : io('/public')
    let room = window.location.pathname.slice(-40)

    socket.emit('init', room)

    socket.on('linePositionData', data => {
      ctrl.line(data.x, data.y, data.x2, data.y2)
    })

    socket.on('clear', () => {
      ctrl.clearBackground(cx2, canvas)
    })

    MainLoop.setMaxAllowedFPS([60]).setDraw(ctrl.draw).start()
  }

}

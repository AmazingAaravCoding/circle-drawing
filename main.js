canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
mouseEvent = ""
colour = "red"
width = 5
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    mouseEvent = "mousedown"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e) {
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e) {
    mouseEvent = "mouseup"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
    cmx = e.clientX - canvas.offsetLeft
    cmy = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = colour
        ctx.lineWidth = width
        // ctx.moveTo(lx, ly)
        ctx.arc(cmx, cmy, 40, 0, 2 * Math.PI)
        ctx.stroke()

    }
    lx = cmx
    ly = cmy
}
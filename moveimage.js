function Init {
    wWidth = document.body.clientWidth
    wHeight = document.body.clientHeight
    moveImage();
    setInterval('MoveImage()',500);
}
function moeveImage() {
    document.all['moveicon'].style.left = wWidth-100+document.body.scrollLeft;
    document.all['moveicon'].style.top = document.body.scrollTop;
}
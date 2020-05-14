var mawPrintSpan = document.getElementById('maw-print');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    mawPrintSpan.style.top = (y + 20) + 'px';
    mawPrintSpan.style.left = (x + 20) + 'px';
};
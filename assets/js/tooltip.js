var mawPrintSpan = document.getElementById('maw-print');
var aboutSpan = document.getElementById('about');
// var instructSpan = document.getElementById('instruct');
var grueneSpan = document.getElementById('gruene');
var lalaSpan = document.getElementById('lala-berlin');
var parmaSpan = document.getElementById('parma');
var schrotKornSpan = document.getElementById('schrot-korn');
var bodyLoomSpan = document.getElementById('body-loom');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    aboutSpan.style.top = (y - 150) + 'px';
    aboutSpan.style.left = (x + 20) + 'px';
    mawPrintSpan.style.top = (y - 150) + 'px';
    mawPrintSpan.style.left = (x + 20) + 'px';
    grueneSpan.style.top = (y - 150) + 'px';
    grueneSpan.style.left = (x + 20) + 'px';
    lalaSpan.style.top = (y - 400) + 'px';
    lalaSpan.style.left = (x + 20) + 'px';
    parmaSpan.style.top = (y - 150) + 'px';
    parmaSpan.style.left = (x + 20) + 'px';
    bodyLoomSpan.style.top = (y - 400) + 'px';
    bodyLoomSpan.style.left = (x + 20) + 'px';
    // instructSpan.style.top = (y - 150) + 'px';
    // instructSpan.style.left = (x + 20) + 'px';
    schrotKornSpan.style.top = (y - 150) + 'px';
    schrotKornSpan.style.left = (x + 20) + 'px';
};
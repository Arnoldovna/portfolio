var mawPrintSpan = document.getElementById('maw-print');
var instructSpan = document.getElementById('instruct');
var grueneSpan = document.getElementById('gruene');
var lalaSpan = document.getElementById('lala');
var parmaSpan = document.getElementById('parma');
var schrotKornSpan = document.getElementById('schrot-korn');
var bodyLoomSpan = document.getElementById('body-loom');
console.log('s', screen.width);



// window.onresize = function () {
//     if (screen.width > 640) {
//         console.log('hhhhhhhhey smller ');
//     } else {
//         console.log('biggger');
//     }
// }

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    mawPrintSpan.style.top = (y + 20) + 'px';
    mawPrintSpan.style.left = (x + 20) + 'px';
    grueneSpan.style.top = (y + 20) + 'px';
    grueneSpan.style.left = (x + 20) + 'px';
    lalaSpan.style.top = (y + 20) + 'px';
    lalaSpan.style.left = (x + 20) + 'px';
    parmaSpan.style.top = (y + 20) + 'px';
    parmaSpan.style.left = (x + 20) + 'px';
    bodyLoomSpan.style.top = (y + 20) + 'px';
    bodyLoomSpan.style.left = (x + 20) + 'px';
    instructSpan.style.top = (y + 20) + 'px';
    instructSpan.style.left = (x + 20) + 'px';
    schrotKornSpan.style.top = (y + 20) + 'px';
    schrotKornSpan.style.left = (x + 20) + 'px';
}
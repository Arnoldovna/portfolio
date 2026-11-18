// The project preview image follows the mouse pointer on the overview page.
// Each row sets its vertical offset via data-tooltip-offset (tall images use a larger one).
var previews = document.querySelectorAll('.tooltip [data-tooltip-offset]');

window.addEventListener('mousemove', function (event) {
    previews.forEach(function (preview) {
        var offset = Number(preview.getAttribute('data-tooltip-offset')) || 150;
        preview.style.top = (event.clientY - offset) + 'px';
        preview.style.left = (event.clientX + 20) + 'px';
    });
});

// Stagger the fade-in of list rows: every row starts 50 ms after the previous one.
document.querySelectorAll('.hook').forEach(function (line, index) {
    line.setAttribute('data-aos-delay', String(100 + index * 50));
});

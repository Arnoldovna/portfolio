var lines = document.getElementsByClassName('hook');

const timeline = [];
[...lines].forEach((line, i) => {
    var s = 100 + (i * 50);
    timeline[i] = line.setAttribute("data-aos-delay", s);
});
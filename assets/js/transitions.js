var lines = document.getElementsByClassName('hook');

const timeline = [];
[...lines].forEach((line, i) => {
    var s = 200 + (i * 50);
    timeline[i] = line.setAttribute("data-aos-delay", s);
});
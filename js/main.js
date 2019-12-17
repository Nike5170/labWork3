// main_top-right square

var deg = 0;
square.onmousemove = function() {
    go();
};

function go(id) {
    var id = setInterval(rotate, 1);

    function rotate() {
        square.style.WebkitTransform = "rotate(" + deg + "deg)";
        deg = (deg == 360) ? 0 : deg + 1;
        if (deg == 0) clearInterval(id);
    };
};
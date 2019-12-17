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
// tab changes

function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" acti", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " acti ";
    evt.currentTarget.classList.add(" acti ");
}
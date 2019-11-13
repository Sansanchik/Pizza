let count = 0;
document.getElementById("toggler").onclick = function() {
    if(count === 0) {
        document.getElementById("navbar-navul").style.visibility = "visible";
        document.getElementById("toggler").classList.add("hamburger_active");
        count = 1;
    }
    else {
        document.getElementById("navbar-navul").style.visibility = "hidden";
        document.getElementById("toggler").classList.remove("hamburger_active");
        count = 0;
    }
}
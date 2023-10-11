
c = 0;

document.getElementById("menu").onclick = function () {
    if (c == 0) {
        c= 1

        nav.style.width = "280px"
        // nav.style.height="100%"
        document.querySelector(".liar").style.width="100%"
    } else {
        c = 0
        nav.style.width = "0px"
        // nav.style.height ="0%"
        document.querySelector(".liar").style.width = "0%"

    }
}





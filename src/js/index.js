var btn2 = document.getElementById("btn2");
var p2 = document.getElementById("p2");
function open2() {
    if (p2) {
        if (p2.classList == "none") {
            p2.classList.remove('none');
            p2.classList.add("glass");
            p2.animate({
                transform: ["translateX(-950px)", "translatex(0px)"],
            }, {
                duration: 2000,
            });
        }
        else {
            p2.classList.remove('glass');
            p2.classList.add('none');
        }
        ;
    }
}
var btn1 = document.getElementById("btn1");
var p1 = document.getElementById("p1");
function open1() {
    if (p1.classList == "none") {
        p1.classList.remove('none');
        p1.classList.add("glass");
        p1.animate({
            transform: ["translateX(-950px)", "translatex(0px)"],
        }, {
            duration: 2000,
        });
    }
    else {
        p1.classList.remove('glass');
        p1.classList.add('none');
    }
    ;
}
var btn3 = document.getElementById("btn3");
var p3 = document.getElementById("p3");
function open3() {
    if (p3.classList == "none") {
        p3.classList.remove('none');
        p3.classList.add("glass");
        p3.animate({
            transform: ["translateX(-950px)", "translatex(0px)"],
        }, {
            duration: 2000,
        });
    }
    else {
        p3.classList.remove('glass');
        p3.classList.add('none');
    }
    ;
}
btn1.addEventListener("click", open1);
btn2.addEventListener("click", open2);
btn3.addEventListener("click", open3);

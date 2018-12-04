window.addEventListener('load', function () {
    var diff = 0;
    var okno = 0;

    document.addEventListener('mousemove', function (ev) {
        okno = ev.clientX
    });

    function moveWindow(x) {
        window.scrollBy(x, 0)
    }

    document.addEventListener('mousedown', function (ev) {
        console.log(ev.clientX + " t");
        diff += ev.clientX
    });

    document.addEventListener('mouseup', function (ev) {
        console.log(ev.clientX + " zzz");
        diff -= ev.clientX;

        var x = diff - okno;
        moveWindow(x)
    });

});
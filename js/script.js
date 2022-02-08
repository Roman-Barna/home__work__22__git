document.addEventListener('DOMContentLoaded', function () {
    var elems1 = document.querySelectorAll('.slider');
    var instances1 = M.Slider.init(elems1, {
        height:500,
        interval:1000
    });
});
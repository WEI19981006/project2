$(document).ready(function () {
    $("li.type").eq(0).click(function (e) {
        e.preventDefault()
        $(".innerblock1").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type").eq(1).click(function (e) {
        e.preventDefault()
        $(".innerblock2").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type").eq(2).click(function (e) {
        e.preventDefault()
        $(".innerblock3").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type").eq(3).click(function (e) {
        e.preventDefault()
        $(".innerblock4").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type").eq(4).click(function (e) {
        e.preventDefault()
        $(".innerblock5").slideToggle();
    });
});

$(document).ready(function () {
    $("li.type").eq(5).click(function (e) {
        e.preventDefault()
        $(".innerblock6").slideToggle();
    });
});




document.addEventListener("click", function (e) {

    if (e.target.getAttribute("class") == "out") {
        e.target.classList.add("-on");
    }else{
        e.target.classList.remove("-on")
    };
})
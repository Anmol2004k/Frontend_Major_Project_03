const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {

    var elemC = document.querySelector("#elem-con")
var fixed = document.querySelector("#fixed-img")

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";

})

elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";

})

var elemdot = document.querySelectorAll(".elem")
elemdot.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var imgee = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${imgee})`

    })

})
    
}



function swiperAnimation() {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

}

swiperAnimation();
page4Animation();
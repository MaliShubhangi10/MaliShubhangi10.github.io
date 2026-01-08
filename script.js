$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) { $('.navbar').addClass("sticky"); }
        else { $('.navbar').removeClass("sticky"); }

        if (this.scrollY > 500) { $('.scroll-up-btn').addClass("show"); }
        else { $('.scroll-up-btn').removeClass("show"); }
    });

    $('.scroll-up-btn').click(function () { $('html').animate({ scrollTop: 0 }); });

    new Typed(".typing", {
        strings: ["Student", "Software Developer", "Quick Learner"],
        typeSpeed: 100, backSpeed: 60, loop: true
    });

    new Typed(".typing-2", {
        strings: ["Detail Oriented", "Problem Solver", "Persistent"],
        typeSpeed: 100, backSpeed: 60, loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20, loop: true, autoplay: true, autoplayTimeOut: 2000,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
    });

    $('.menu-btn').click(function () { $('.navbar .menu').toggleClass("active"); $('.menu-btn i').toggleClass("active"); });
});

// Modal Logic for Certifications
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Target images inside the certifications carousel
$('.certifications img').click(function(){
    $('#imageModal').css("display", "flex"); // Changed from 'block' to 'flex'
    $('#img01').attr("src", this.src);
    $('#caption').html(this.alt);
});

$('.close-modal, #imageModal').click(function(event){
    // Closes if 'X' is clicked OR if user clicks on the dark background
    if(event.target !== document.getElementById('img01')) {
        $('#imageModal').css("display", "none");
    }
});

$(document).ready(function () {
    // Correct trigger logic
    $('.certifications img').click(function(){
        $('#imageModal').css("display", "flex"); 
        $('#img01').attr("src", this.src);
        $('#caption').html(this.alt);
    });

    // Ensure it closes properly
    $('.close-modal, #imageModal').click(function(event){
        if(event.target !== document.getElementById('img01')) {
            $('#imageModal').css("display", "none");
        }
    });
});

$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        700: { items: 2 },
        1050: { items: 3 } // Shows 3 projects at once on big screens
    }
});

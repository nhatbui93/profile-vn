
$(document).ready(function ($) {
	"use strict";
	awe_backtotop();
});
/* ==== AOS Animation ==== */
  AOS.init();
/* ==== Load plugin when scroll page ==== */
var is_load = 0;
function load_after_scroll(){
    if(is_load) return 
	is_load = 1;
	function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("footer")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }loadCSS("https://use.fontawesome.com/releases/v5.7.2/css/all.css");
}
$(document).ready(function ($) {
	!is_load && setTimeout(load_after_scroll,10000)
	$(window).on('scroll click mousemove touchstart',load_after_scroll);
});
/* ==== Click menu bar mobile ==== */
$('.menu-bar').click(function(e) {
    e.preventDefault();
    $('#mobile-nav').toggleClass('open');
    $('.block-overlay').toggleClass('open');
});
$('.block-overlay').click(function(e) {
    $('#mobile-nav').removeClass('open');
    $('.popup-modal').hide();
    $('.block-overlay').removeClass('open');
});
$('#mobile-nav .nav-close').click(function(e) {
    e.preventDefault();
    $('#mobile-nav').removeClass('open');
    $('.block-overlay').removeClass('open');
});
$('#mobile-nav .site-nav-mb a').click(function(e) {
    $('#mobile-nav').removeClass('open');
    $('.block-overlay').removeClass('open');
});
/* ==== Sticky Header ==== */
$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 0){
            $("header.header").addClass("sticky");
        }else{
            $("header.header").removeClass("sticky");
        }
    });
});
/* ==== Click archor menu ==== */
$('.js-anchor-link').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top - 45;
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
});
var sections = $('section');
$(window).on('scroll',function(){
  sections.each(function(){
    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 70;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top >= offset && top < offset + height){
      $('.site-nav li').removeClass('active');
      $('.site-nav').find(`[href="#${id}"]`).parent('li').addClass('active');
    }
  })
});
/* ==== Click open popup experience ==== */
$('.experience-item .see-detail').click(function(e) {
    var content = $(this).next('[data-modal="detail-experience"]').html();
    $('.popup-modal .modal-body').html(content);
    $('.block-overlay').addClass('open');
    $('.popup-modal').show();
});

$('.popup-modal .close-modal').click(function(e) {
    $('.popup-modal').hide();
    $('.block-overlay').removeClass('open');
});

/* ==== Click show more project ==== */
$('.show-more-project').click(function(){
    $('.section-portfolio .project-item.d-none').removeClass('d-none');
    $(this).hide();
    AOS.init();
});

/*--------------- Feedback Slider ---------------*/ 
var swiper = new Swiper(".feedback-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
    },
    pagination: {
      el: ".feedback-slider .swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },

}); 
$(document).ready(function ($) {
    $(".odometer").appear(function () {
        var odometerItem = $(".odometer");
        odometerItem.each(function () {
            var count = $(this).attr("data-count");
            $(this).html(count);
        })
    });
});
/*--------------- Back to top button ---------------*/ 
function awe_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;
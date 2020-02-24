$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

let breakpoint; // 0 - xs, 1 - sm, 2 - md, 3 - lg, 4 - xl
function setBreakpoint() {
	if (window.matchMedia('(min-width: 1200px)').matches) breakpoint = 4;
	else if (window.matchMedia('(min-width: 992px)').matches) breakpoint = 3;
	else if (window.matchMedia('(min-width: 768px)').matches) breakpoint = 2;
	else if (window.matchMedia('(min-width: 576px)').matches) breakpoint = 1;
	else breakpoint = 0;
}
setBreakpoint();
$(window).resize(setBreakpoint);

$('.header__toggle').click(function() {
	$('.header__list').slideToggle();
});

$('.training__mobile-list').slick({
	prevArrow: '.training__mobile-prev',
	nextArrow: '.training__mobile-next'
});


$('.reviews__list').slick({
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true,
	prevArrow: $('.reviews__prev'),
	nextArrow: $('.reviews__next'),
	appendDots: $('.reviews__dots-wrap'),
	dots: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
				centerMode: false
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				centerMode: false
			}
		}
	]
});

function reviewsUpdateClasses() {
	if (breakpoint < 4) return;
	
	$('.reviews__item--current').removeClass('reviews__item--current');
	$('.reviews__item--prev').removeClass('reviews__item--prev');
	$('.reviews__item--prev-all').removeClass('reviews__item--prev-all');
	$('.reviews__item--next').removeClass('reviews__item--next');
	$('.reviews__item--next-all').removeClass('reviews__item--next-all');
	
	$('.reviews__list .slick-current')
		.addClass('reviews__item--current')
		.prev().addClass('reviews__item--prev')
		.prevAll().addClass('reviews__item--prev-all')
	
	$('.reviews__list .slick-current')
		.next().addClass('reviews__item--next')
		.nextAll().addClass('reviews__item--next-all')
}

reviewsUpdateClasses();

$('.reviews__list').on('afterChange', reviewsUpdateClasses);


$('.faq__question-button').click(function() {
	$(this).toggleClass('active');
	$(this).parents('.faq__item').toggleClass('active');
	$(this).parents('.faq__item').find('.faq__answer').slideToggle();
});

$('.js-modal-open').click(function(e) {
	e.preventDefault();
	$('body').addClass('overflow-hidden');
	$( $(this).attr('href') ).fadeIn();
});

$('.modal__close').click(function() {
	$('body').removeClass('overflow-hidden');
	$(this).parents('.modal-wrapper').fadeOut();
});

$(document).ready(function($) {
	$('.tab__content').hide();
	$('.tab__content:first').show();
	$('.tabs li:first').addClass('active');
	$('.tabs li').click(function(event) {
		event.preventDefault();
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab__content').hide();

		var selectTab = $(this).find('a').attr("href");

		$(selectTab).fadeIn();
	});

	$('.teachers__content').hide();
	$('.teachers__content').eq(0).show();
	$('.teachers__item-box').click(function(event) {
		event.preventDefault();
		$('.teachers__item-box').removeClass('active');
		$(this).addClass('active');
		$('.teachers__content').hide();

		var selectTab = $(this).attr("href");

		$(selectTab).fadeIn();
	});
});

$('.learn-info__theory-toggle').click(function() {
	$(this).toggleClass('active');
	$(this).parents('.learn-info__theory-item').find('.learn-info__theory-desc').slideToggle();
});

$('.teachers__list').slick({
	slidesToShow: 4,
	prevArrow: '.teachers__prev',
	nextArrow: '.teachers__next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: true,
				dotsClass: 'teachers__dots',
				arrows: false
			}
		}
	]
});

$('.fancybox').fancybox();


	
});

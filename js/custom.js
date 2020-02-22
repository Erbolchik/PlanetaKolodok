$(document).ready(function(){

	//scroll menu
	$('.nav__link').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
		}
		if ( $('#top-menu').is(':visible') )
			$('#top-menu').removeClass('show');
		return false;
	});

	$('.toggle, .nav__close').on('click', function() {
		$('#top-menu').toggleClass('show');
	});


	//magnificPopup
	$('.order__btn, .top__btn').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
	}).on('click', function(){
		var title = $(this).data('title') ? $(this).data('title') : $(this).text();
		var header = $(this).data('header') ? $(this).data('header') : $(this).text();
		$('#modal-call').find('.form__desc').html( header );
		$('#modal-call').find('input[name=title]').val( title );
	});

	//slider slick
	$('.steps__nav li').eq(0).addClass('active');
	$('.steps__wrap .steps__slider').slick({
	    prevArrow: '.steps__wrap .steps__arrow_prev',
	    nextArrow: '.steps__wrap .steps__arrow_next',
	    slidesToShow: 1,
	    infinite: false,
	    fade: true,
	});
	$('.steps__wrap .steps__slider').on('afterChange', function(slick, currentSlide){
		$('.steps__nav li').removeClass('active');
		$('.steps__nav li').eq(currentSlide.currentSlide).addClass('active');
	});
	$('.steps__nav').on('click', 'li button', function() {
		var li = $(this).parent('li');
		if ( $(li).hasClass('active') ) return false;
		console.log('sd');

		$('.steps__wrap .steps__slider').slick('slickGoTo', $(li).index() );
		return false;
	});

	
	$('.keyses__wrap .keyses__slider').slick({
	    prevArrow: '.keyses__wrap .keyses__arrow_prev',
	    nextArrow: '.keyses__wrap .keyses__arrow_next',
	    slidesToShow: 1,
	});
	$('.about__pic .about__slider').slick({
	    prevArrow: '.about__pic .about__arrow_prev',
	    nextArrow: '.about__pic .about__arrow_next',
	    slidesToShow: 1,
	});

	if ( window.matchMedia('(max-width: 960px)').matches ){
		$('.attention__col').accordion({
			heightStyle: "content",
			collapsible: true,
		});
	}


});
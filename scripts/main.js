'use strict';
// ready
$(document).ready(function () {

	$('body').addClass('preloader-site');

	$("html, body").animate({ scrollTop: 0 }, 200);

	// FOR ERROR FORM
	if ($('div').hasClass('error')) {
		var position = $(".error").offset();
		$("html, body").animate({ scrollTop: position.top - 100 }, 600);
	}
	// FOR ERROR FORM

	// scrollToTop
	$('.scrollup').fadeOut(500);
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scrollup').fadeIn(500);
		} else {
			$('.scrollup').fadeOut(500);
		}
	});
	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	// scrollToTop

	//busket
	$('.input__quantity-js .inc').click(function () {
		var $input = $(this).parents('.input__quantity-js').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.input__quantity-js .dec').click(function () {
		var $input = $(this).parents('.input__quantity-js').find('input');
		var count = parseInt($input.val()) + 1;
		count = count > 999 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.delete-cart--js').click(function () {
		$(this).parent().parent().remove();
	});
	jQuery.fn.ForceNumericOnly = function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.charCode || e.keyCode || 0;
				// success backspace, tab, delete, arrows, numbers
				return key == 8 || key == 9 || key == 46 || key == 190 || key >= 37 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
			});
		});
	};
	$(".input__number-js").ForceNumericOnly();
	//busket

	// adaptive menu
	$('.hamburger--js').click(function () {
		$('body').toggleClass('fixed');
		$(this).toggleClass('is-active');
		$(this).next().toggleClass('is-active');
	});
	$('.main-nav__item--parent > .main-nav__link').click(function () {
		if ($('.main-nav__item--parent').hasClass('active') && !$(this).parent().hasClass('active')) {
			$('.main-nav__item--parent').removeClass('active');
		}
		$(this).parent().toggleClass('active');
		return false;
	});
	$(document).mouseup(function (e) {
		var submenu = $(".main-nav");
		if (!submenu.is(e.target) && submenu.has(e.target).length === 0) {
			$('.main-nav__item--parent').removeClass('active');
		}
	});
	// adaptive menu

	// mask phone {maskedinput}
	$("[name=phone]").mask("+7 (999) 999-9999");
	// mask phone

	// slider {http://idangero.us/swiper/}
	function swiperMain() {
		new Swiper('.slider-news', {
			slidesPerView: 6,
			loop: true,
			spaceBetween: 20,
			centeredSlides: true,
			navigation: {
				nextEl: '.swiper-btn-next',
				prevEl: '.swiper-btn-prev'
			},
			breakpoints: {
				1366: {
					slidesPerView: 4
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				640: {
					slidesPerView: 2
				},
				320: {
					slidesPerView: 1
				}
			}
		});
	}

	swiperMain();
	var quest = new Swiper('.slider-guest', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction: function renderFraction(currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
			}
		},
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		}
	});
	var review = new Swiper('.slider-review', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: '.swiper-btnR-next',
			prevEl: '.swiper-btnR-prev'
		},
		breakpoints: {
			1023: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});
	var lunch = new Swiper('.slider-lunch', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-btnL-next',
			prevEl: '.swiper-btnL-prev'
		}
	});
	var lunchS = new Swiper('.slider-lunchS', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-btnS-next',
			prevEl: '.swiper-btnS-prev'
		}
	});
	var lunchD = new Swiper('.slider-lunchD', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-btnD-next',
			prevEl: '.swiper-btnD-prev'
		}
	});
	var cards = new Swiper('.slider-cards', {
		slidesPerView: 3,
		spaceBetween: 10,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},
		breakpoints: {
			767: {
				slidesPerView: 2
			}
		}
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 0,
		slidesPerView: 4,
		freeMode: true,
		direction: 'vertical',
		touchRatio: 0,
		preventClicks: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			1280: {
				slidesPerView: 2
			},
			640: {
				slidesPerView: 3
			},
			320: {
				slidesPerView: 3
			}
		}
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-btnS-next',
			prevEl: '.swiper-btnS-prev'
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
	// slider

	//.select--js
	$('.select--js').click(function () {
		$(this).parent().parent().find('.btn').text('Выбрать');
		$(this).parent().parent().find('.lunch-item').removeClass('active');
		$(this).text('Выбрано');
		$(this).parent().addClass('active');
	});
	//.select--js

	// select {select2}
	$('select').select2({
		minimumResultsForSearch: Infinity
	});
	// select

	// type file
	$(function () {
		var inner = $('.file_upload .button');
		var wrapper = $(".file_upload"),
		    inp = wrapper.find("input");
		var file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;
		inp.change(function () {
			var file_name = undefined;
			if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;else file_name = inp.val().replace("C:\\fakepath\\", '');
			if (!file_name.length) return;
			inner.text(file_name);
		}).change();
	});
	// type file

	$('.delivery--js input').click(function () {
		var id = $(this).attr('id');
		$('.hidden').hide();
		$('.hidden[data-value=' + id + ']').show();
	});

	// accordion
	$(".accordion").on("click", ".accordion-header", function () {
		$(this).toggleClass("active").next().slideToggle();
	});
	// accordion

	// popup {magnific-popup}
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		}
	});
	$('.popup-modal').magnificPopup({
		type: 'inline',
		callbacks: {
			open: function open() {
				$('.gallery .gallery-item').removeClass('active');
			}
		}
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	// popup

	// fullpage
	$('#fullpage').fullpage({
		verticalCentered: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		responsiveWidth: 767,
		fitToSectionDelay: 2000,
		onLeave: function onLeave(index, nextIndex, direction) {
			if (direction == "up") {
				$(".section .animated").removeClass("slideInLeft");
				$(".section").removeClass("down");
				$(".section").removeClass("next");
				$(".section").removeClass("prev");
				$("#fullpage .section:nth-child(" + nextIndex + ")").addClass("up");
				$("#fullpage .section:nth-child(" + nextIndex + ")").next().addClass("next up");
				$("#fullpage .section:nth-child(" + nextIndex + ")").prev().addClass("prev up");
				$("#fullpage .section:nth-child(" + nextIndex + ") .animated").addClass("slideInLeft");
			} else {
				$(".section .animated").removeClass("slideInLeft");
				$(".section").removeClass("up");
				$(".section").removeClass("next");
				$(".section").removeClass("prev");
				$("#fullpage .section:nth-child(" + nextIndex + ")").addClass("down");
				$("#fullpage .section:nth-child(" + nextIndex + ")").next().addClass("next down");
				$("#fullpage .section:nth-child(" + nextIndex + ")").prev().addClass("prev down");
				$("#fullpage .section:nth-child(" + nextIndex + ") .animated").addClass("slideInLeft");
			}
		}
	});
	// fullpage

	//form
	$('.btn--js').click(function () {
		$(this).closest('.form').addClass('sent');
		return false; // TEMP
	});
	$(".sent--js").on("click", function () {
		$(this).closest('.form').removeClass('sent');
		return false;
	});
	//form

	// works--js
	$('.works--js').click(function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});
	// works--js

	//tabs
	$('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
		swiperMain();
	});
	//tabs

	//isotop
	var $grid = $('.grid');
	$grid.imagesLoaded(function () {
		setTimeout(function () {
			$grid.isotope({
				itemSelector: '.grid-item',
				layoutMode: 'fitRows',
				masonry: {
					columnWidth: '.grid-sizer',
					gutter: 0
				}
			});
		}, 1000);
	});
	$('#filters').on('click', 'li', function () {
		$('#filters li').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	//isotop

	var idToken = '3184899862.1677ed0.fa4ef83ae9a143ce851f9d20338b4512';
	function sendUserRequest() {
		var endpointUser = 'https://api.instagram.com/v1/users/self/';
		var xhr = new XMLHttpRequest();
		xhr.open('GET', endpointUser + '?access_token=' + encodeURIComponent(idToken));
		xhr.onreadystatechange = function () {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				var data = xhr.responseText;
				var jsonResponse = JSON.parse(data);
				var dataC = jsonResponse.data;
				$('.instagram-userPhoto').html('<img src=' + dataC.profile_picture + ' alt="" />');
				$('.instagram-userDesc-title').html('<p>' + dataC.username + '</p>');
				$('.instagram-userDesc-media').html('<p><b>' + dataC.counts.media + '</b> публикаций</p>');
				$('.instagram-userDesc-follows').html('<p><b>' + dataC.counts.follows + '</b> подписчиков</p>');
				$('.instagram-userDesc-followed_by').html('<p><b>' + dataC.counts.followed_by + '</b> подписок</p>');
				$('.instagram-userDesc-desc').text(dataC.bio);
			}
			if (this.status === 429) {
				$('.instagram').html('<h5>Превышено максимальное количество запросов в час. Наш общий максимальный предел составляет 200 запросов в час</h5>');
			}
		};
		xhr.send();
	}
	function sendPhotoRequest() {
		var endpointPhoto = 'https://api.instagram.com/v1/users/self/media/recent/';
		var xhr = new XMLHttpRequest();
		xhr.open('GET', endpointPhoto + '?access_token=' + encodeURIComponent(idToken));
		xhr.onreadystatechange = function () {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				var data = xhr.responseText;
				var jsonResponse = JSON.parse(data);
				var dataC = jsonResponse.data;
				for (var i = 0; i < 11; i++) {
					$('.instagram-photo').append('<img src=' + dataC[i].images.thumbnail.url + ' alt=\'\' />');
				}
			}
		};
		xhr.send();
	}
	sendUserRequest();
	sendPhotoRequest();
});
// ready

// mobile sctipts
var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
$(window).on("load resize", function () {
	if (screenWidth <= 1024) {
		$(".objects-body-inner, .card-desc").mCustomScrollbar("destroy");
	} else {
		$(".objects-body-inner, .card-desc").mCustomScrollbar();
	}
	if (screenWidth <= 767) {
		(function () {
			var used = undefined;
			$(".gallery .gallery-item a").on("click", function (e) {
				if (used !== this) {
					used = this;e.preventDefault();
					$(this).parent().addClass('active');
				} else {
					$('.gallery .gallery-item').removeClass('active');
				}
			});
		})();
	}
});

$(window).on("load", function () {
	setTimeout(function () {
		$('.preloader-wrapper').fadeOut();
		$('body').removeClass('preloader-site');
	}, 0);
});

function initMap() {
	var markers = [];
	var locations = [[59.91701049, 30.31812429], [59.91916157, 30.3251195], [59.91756978, 30.31812429]];
	var locationsO = [[59.92049517, 30.33250093], [59.91701049, 30.3276515]];
	var hrefId = ['object1', 'object2', 'object3'];
	var hrefIdO = ['object4', 'object5'];

	var locationsOf = [[59.91701049, 30.31812429], [59.91916157, 30.3251195], [59.91756978, 30.31812429]];
	var hrefIdOf = ['object1', 'object2', 'object3'];

	var mapOptions = {
		center: new google.maps.LatLng(59.91916157, 30.3251195),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		zoomControl: true,
		scrollwheel: false
	};
	var mapElement = document.getElementById('map');
	var mapElementOf = document.getElementById('mapOf');
	var map = new google.maps.Map(mapElement, mapOptions);
	var mapOf = new google.maps.Map(mapElementOf, mapOptions);

	// const infowindow = new google.maps.InfoWindow();

	var marker = undefined,
	    markerO = undefined,
	    markerOf = undefined,
	    i = undefined;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map,
			icon: "images/icons/bubble-a.png"
		});
		marker.set('data-href', hrefId[i]);
		markers.push(marker);
		google.maps.event.addListener(marker, 'click', (function (marker) {
			return function () {
				$('.objects-body__item').removeClass('active');
				var val = marker.get('data-href');
				$('#' + val).addClass('active');
				$(".objects-body-inner").mCustomScrollbar("scrollTo", '#' + val);
				return false;
			};
		})(marker));
	}
	for (i = 0; i < locationsO.length; i++) {
		markerO = new google.maps.Marker({
			position: new google.maps.LatLng(locationsO[i][0], locationsO[i][1]),
			map: map,
			icon: "images/icons/bubble.png"
		});
		markerO.set('data-href', hrefIdO[i]);
		markers.push(markerO);
		google.maps.event.addListener(markerO, 'click', (function (markerO) {
			return function () {
				$('.objects-body__item').removeClass('active');
				var val = markerO.get('data-href');
				$('#' + val).addClass('active');
				$(".objects-body-inner").mCustomScrollbar("scrollTo", '#' + val);
				return false;
			};
		})(markerO));
	}

	for (i = 0; i < locationsOf.length; i++) {
		markerOf = new google.maps.Marker({
			position: new google.maps.LatLng(locationsOf[i][0], locationsOf[i][1]),
			map: mapOf,
			icon: "images/icons/bubble-a.png"
		});
		markerOf.set('data-href', hrefIdOf[i]);
		markers.push(markerOf);
		google.maps.event.addListener(markerOf, 'click', (function (marker) {
			return function () {
				$('.objects-body__item').removeClass('active');
				var val = marker.get('data-href');
				$('#' + val).addClass('active');
				$(".objects-body-inner").mCustomScrollbar("scrollTo", '#' + val);
				return false;
			};
		})(markerOf));
	}

	moveMarker(map);
	moveMarker(mapOf);
}

function moveMarker(map) {
	$('.objects-body__item').click(function () {
		$('.objects-body__item').removeClass('active');
		var coords = $(this).data('adr');
		var latlngStr = coords.split(',', 2);
		var lat = parseFloat(latlngStr[0]);
		var lng = parseFloat(latlngStr[1]);
		$(this).addClass('active');
		map.panTo(new google.maps.LatLng(lat, lng));
	});
};
//# sourceMappingURL=main.js.map

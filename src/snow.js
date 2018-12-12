function Snow(params) {
	'use strict';

	function random(min, max) {
		if (max == null) { max = min; min = 0; }
		return Math.random() * (max - min) + min;
	}

	var t 			= TweenMax;
	var tl_bg_far	= new TimelineMax( { paused : false} );
	var tl_bg_near  = new TimelineMax( { paused : false} );
	var tl_mid 		= new TimelineMax( { paused : false} );
	var tl_fore     = new TimelineMax( { paused : false} );
	var tl_front    = new TimelineMax( { paused : false} );

	var bgNum1, bgNum2, midNum, foreNum, frontNum, resizeTimer, snow1_img, snow2_img, flakes, bgFlakes_far, bgFlakes_near, midFlakes, foreFlakes, frontFlakes, target;

	var flakeNum = [];

	if(typeof params.target === 'undefined'){
		params.target = 'body';
	}

	var snowHolder = $('<div>', { id : 'snowHolder'}).css({ position:'absolute', width:'100%', height:'100%', top:0, left:0, overflow:'hidden'}).appendTo(params.target);

	var _width = $(snowHolder).width();
	var _height = $(snowHolder).height();

	if(typeof params.img1 !== 'undefined'){
		snow1_img = params.img1;
		} else {
			snow1_img = 'https://ops-cdn.undertone.com/clients/snow/snow_00.png';
		}

		if(typeof params.img2 !== 'undefined'){
		snow2_img = params.img2;
		} else {
			snow2_img = 'https://ops-cdn.undertone.com/clients/snow/snow_01.png';
		}

		if(typeof params.intensity !== 'undefined'){
			if (params.intensity === 1) {
				flakeNum = [200, 150, 50, 25, 25];
			} else if (params.intensity === 2) {
   			flakeNum = [300, 200, 75, 40, 40];
			} else if (params.intensity === 3) {
   			flakeNum = [500, 500, 200, 100, 100];
			} else {
   			flakeNum = [200, 150, 50, 25, 25];
			}
		} else {
   		flakeNum = [200, 150, 50, 25, 25];
		}

	function initSnow() {
		for (var i = 0; i < flakeNum[0]; i++) {
			bgFlakes_far = $('<div class="flakes"></div>').appendTo(snowHolder);
			t.set(bgFlakes_far, {x:random(0, _width), y:random(-20, -40),  skewY:random(10, 30), scale:random(0.5, 1.5), opacity:random(0.1, 0.3)});
			tl_bg_far.to(bgFlakes_far, random(20, 40), {physics2D:{velocity:random(20, 30), angle:random(90, 110), gravity:random(20, 30), friction:0.025, repeat:-1}, force3D:true, repeat:-1}, random(-10, 10));
		}
		for (var j = 0; j < flakeNum[1]; j++) {
			bgFlakes_near = $('<div class="flakes"></div>').appendTo(snowHolder);
			t.set(bgFlakes_near, {x:random(0, _width), y:random(-20, -40), scale:random(0.9, 1.5), opacity:random(0.5, 0.7)});
			tl_bg_near.to(bgFlakes_near, random(10, 20), {physics2D:{velocity:random(50, 150), angle:random(90, 110), gravity:random(40, 70), friction:0.025, repeat:-1}, force3D:true, repeat:-1}, random(-10, 10) );
		}
		for (var k = 0; k < flakeNum[2]; k++) {
			midFlakes = $('<div class="midFlakes"></div>').appendTo(snowHolder);
			t.set(midFlakes, {x:random(0, _width), y:random(-20, -40), scaleX:random(1, 3), scaleY:random(1, 3), skewX:random(10, 30), opacity:random(0.2, 0.5)});
			tl_mid.to(midFlakes, random(10, 20), {rotation:random(-180, 180), physics2D:{velocity:random(200, 400), angle:random(70, 110), gravity:100, friction:0.03, repeat:-1}, force3D:true, repeat:-1}, random(-10, 10) );
		}
		for (var l = 0; l < flakeNum[3]; l++) {
			foreFlakes = $('<div class="midFlakes"></div>').appendTo(snowHolder);
			t.set(foreFlakes, {x:random(0, _width), y:random(-20, -40), scaleX:random(0.5, 2), scaleY:random(0.5, 2), rotation:random(-360, 360), opacity:random(0.5, 0.9)});
			tl_fore.to(foreFlakes, random(10, 20), {rotation:random(-970, 970), physics2D:{velocity:random(400, 500), angle:random(70, 110), gravity:random(60, 90), friction:random(0.03, 0.05), repeat:-1}, force3D:true, repeat:-1}, random(-10, 10) );
		}
		for (var m = 0; m < flakeNum[4]; m++) {
			frontFlakes = $('<div class="frontFlakes"></div>').appendTo(snowHolder);
			t.set(frontFlakes, {x:random(0, _width), y:random(-100, -150), scale:random(10, 25), rotation:random(-360, 360), opacity:0.2});
			tl_front.to(frontFlakes, random(10, 20), {rotation:random(-360, 360), physics2D:{velocity:random(400, 600), angle:random(70, 110), gravity:90, friction:0.01, repeat:-1}, force3D:true, repeat:-1}, random(-10, 10) );
		}

		$('.flakes').css(   {width:'10px', height:'10px', 'background-image' : 'url(' + snow1_img + ')',   'background-size':'contain' });
		$('.midFlakes').css({width:'10px', height:'10px', 'background-image' : 'url(' + snow2_img + ')', 'background-size':'contain' });
		$('.frontFlakes').css(   {width:'10px', height:'10px', 'background-image' : 'url(' + snow1_img + ')',   'background-size':'contain' });
	}

	$(window).on('resize', function(e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			t.killAll();
			$(snowHolder).empty();
			_width = $(snowHolder).width();
			_height = $(snowHolder).height();
			initSnow();
			}, 250);
	});

	if(typeof params.pause !== 'undefined'){
		if(params.pause === true) {
			$(window).blur(function() {
				tl_bg_far.pause();
			    tl_bg_near.pause();
				tl_mid.pause();
			    tl_fore.pause();
				tl_front.pause();
			});
			$(window).focus(function() {
				tl_bg_far.resume();
			    tl_bg_near.resume();
				tl_mid.resume();
			    tl_fore.resume();
				tl_front.resume();
			});
		}
	}

	initSnow();
}


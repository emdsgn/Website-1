// Copyright 2012 Atomic Motion. All Rights Reserved.

/**
* @fileoverview [description].
* @author [yourname]@atomicmotion.com ([Your Full Name])
*/
$(document).ready(function() {

    /**
    * Please use Google's Styleguide to comment and format JavaScripts
    * http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
    */


    /**
     * Header changes on scroll.
     */
    $(window)
        .scroll(function() {

            var scrollOffset = $(window).scrollTop(),
                header = $('.header'),
                social = $('<ul class="nav nav-social clearfix"><li><a href="http://www.facebook.com/NomadicTraining" class="sprite sprite-facebook" target="_blank">facebook</a></li><li><a href="https://twitter.com/NomadicTraining" class="sprite sprite-twitter" target="_blank">Twitter</a></li><li><a href="http://instagram.com/nomadic_training" class="sprite sprite-instagram" target="_blank">Instagram</a></li></ul>');
                logo = $('<a href="/"><img src="/images/logo.png" width="93" height="40" alt="NomadicX" style="position: absolute; top: 5px; right: 0;" class="logo-temp"></a>');

            if (scrollOffset > 136 && !header.hasClass('header-fixed')) {
                header
                    .addClass('header-fixed')
                        .hide()
                            .fadeIn(150);

                header.find('.nav-social').replaceWith(logo);


            } else if (scrollOffset < 136) {
                header
                    .removeClass('header-fixed');

                header.find('.logo-temp').replaceWith(social);
            }

        }).scroll();



    /**
     * Scrolling navigation in the document.
     */
    $('.nav-main')
        .on('click', 'li', function(evt) {

            var $this = $(this),
                anchor = $this.find('a').attr('href'),
                offset = $(anchor).offset().top,
                index = $this.index();

            console.log(anchor);
            console.log(offset);

            evt.preventDefault();

            $('html, body')
                .animate({
                    scrollTop: index === 0 ? offset - 50 : offset - 80
                }, 750);

        });


    /**
     * Trainers.
     */
    function showTrainer(index) {

        var trainers = {};

        trainers = [
            ['Anjali Benimadhu','Owner / Coach', 'Experienced in weight & circuit training, kettle bell work, kickboxing and mobility, Anjali brings a well-rounded base to Nomadic Training. She hopes to bring the balance of power and movement to her clients and offer Ottawa a workout experience like no other - tap into your potential with the Nomadic family!', 'anjali@nomadicx.com', '613-617-1412'],
            ['Steve Nesrallah','Owner / Coach', 'Exceptional performance and a constant pursuit of excellence has driven Steve\'s training for years. WIth a background in martial arts, weight lifting and kettle bell performance, his knowledge of training and athletics is diversified. He thrives off of sharing his knowledge and experience with others, and hopes to help everyone discover their inner athlete.', 'steve@nomadicx.com', '613-986-4060']
        ];

        $('.trainers-content')
            .stop(true, true)
                .fadeOut(200, function() {
                    $(this).find('h3').text(trainers[index][0]);
                    $(this).find('.h4').text(trainers[index][1]);
                    $(this).find('.trainer-body').text(trainers[index][2]);
                    $(this).find('.trainers-contact').html('<p class="trainers-contact"><a href="mailto:' + trainers[index][3] + '" class="btn btn-email">E-mail Me</a> <span class="or">or</span> Call: ' + trainers[index][4] + '</p>');
                    $(this).fadeIn(200);
                });

    }

    $('.trainer-img')
        .on('click', 'div, img',function() {

            if (!$(this).parent().hasClass('active')) {
                showTrainer($(this).parent().index());
                $('.trainer-img').removeClass('active');
                $(this).parent().addClass('active');
            }

        })
        .eq(1).addClass('active');



    /**
     * Testimonials.
     */
    $('.quote-container').not(':first-child').hide();

    function startTestimonials() {

        setTimeout(function() {
            showTestimonial();
        }, 8000);

    }

    function showTestimonial() {

        var currentQuote = $('.quote-container:visible');
        var nextQuote = currentQuote.next().length === 0 ? $('.quote-container').eq(0) : currentQuote.next();

        currentQuote.fadeOut(500, function() {
            nextQuote.fadeIn(500);
            startTestimonials();
        });

    }

    startTestimonials();




    /**
     * Policy event handlers.
     */
    $('.policy-link')
        .on('click', function(evt) {

            evt.preventDefault();

            $(this)
                .parents('div')
                    .find('.policy')
                        .fadeToggle(250);

        });



    /**
     * Form validation.
     */
    $('.contact-form').validate();


    /**
     * Google Map.
     */
    window.initialize = function() {
        var mapOptions = {
            draggable: false,
            zoom: 16,
            minZoom: 11,
            maxZoom: 20,
            center: new google.maps.LatLng(45.40278910087822, -75.7252836227417),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            panControl: false,
            streetViewControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            scrollwheel: false
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var image = '/images/marker.png';
        var myLatLng = new google.maps.LatLng(45.40278910087822, -75.7252836227417);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });

        google.maps.event.addListener(map, 'bounds_changed', function() {
            map.setCenter(mapOptions.center);
        });

        $('<div class="map-border"></div>')
            .appendTo('#map');

    };

    function loadScript() {
        var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';

        document.body.appendChild(script);
    }

    loadScript();


    /**
     * Image slider.
     */
    $('.slider')
        .slider({
            controls: {
                arrows: true,
                dots: false
            },
            slides: [
                {
                    image: '/uploads/slides/slide1.jpg'
                },
                {
                    image: '/uploads/slides/slide2.jpg'
                },
                {
                    image: '/uploads/slides/slide3.jpg'
                }
            ],
            pause: 8000
        });


    $('.foundation .slider-bg')
        .slider2();


});

/* Validation */
(function(c,b,a,d){c.fn.validate=function(e){var k=c(this),g=k.find("[data-validate]"),j;j={validation:{inline:true}};e=c.extend(j,e);if(e.validation.inline){g.on("change",function(){var m=c(this),l=h(m);m.toggleClass("valid",l[0]).toggleClass("invalid",!l[0]);i(m,l[0],l[1])})}k.on("submit",function(m){var l=false;c.each(g,function(){var n=h(c(this));c(this).toggleClass("valid",n[0]).toggleClass("invalid",!n[0]);i(c(this),n[0],n[1]);l=((!n[0])?true:l)});if(l){m.preventDefault()}});function i(m,n,o){if(!m.next().hasClass("tooltip")&&!n){m.after(c('<p class="tooltip">'+o+"</p>"))}else{if(n){var l=m.next(".tooltip");c(l).remove()}}}function h(m){var t=m,o=t.attr("type"),w=t.val(),B=t.attr("data-validate").split("-"),u=B.shift(),s=B,r,q="",y,z,E,n,p="disabled",x="",A,C,v,l,D;if(u){y=parseInt(((s[0])?s[0]:4),10),z=parseInt(((s[1])?s[1]:999),10);switch(u){case"name":r=/^[\u0041-\u02b9,\u002d]+$/;q="Please enter a valid name.";break;case"email":r=/^[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}$/;q="Please enter a valid e-mail address.";break;case"phone":if(!!s.length){r=f(s);q="Please enter a valid phone number with the following pattern: "+s.join("-")}else{r=/^[\+1\s?]?\(?[\d]{3}\)?[\.\-\s]?[\d]{3}[\.\-\s]?[\d]{4}$/;q="Please enter a valid phone number."}break;case"zip":if(!!s.length){r=f(s);q="Please enter a valid postal code with the following pattern: "+s.join("-");console.log(r)}else{r=/^[a-zA-Z\d]{3,}$/;q="Please enter a valid postal code."}break;case"password":r=new RegExp("^[\\u0000-\\u02b9]+{"+y+","+z+"}$");q="Please enter a password with a length "+((y===z)?"of "+y:"between "+y+" and "+z)+" characters.";break;case"multicheck":C=t.find('[type="checkbox"]');E=C.length;n=C.filter(":checked").length;if(n===z){C.filter(":not(:checked)").attr(p,p)}else{C.filter(":disabled").removeAttr(p);q="Please select "+((y===z)?z:"between "+y+" and "+z)+" options."}return[((n>=y&&n<=z)?true:false),q];case"options":v=t.find("option");E=v.length;n=v.filter(":selected").length;if(n===z){v.filter(":not(:selected)").attr(p,p)}else{v.filter(":disabled").removeAttr(p);q="Please select "+((y===z)?z:"between "+y+" and "+z)+" options."}return[((n>=y&&n<=z)?true:false),q];case"text":l=t.val().length;q="You can enter "+((y===z)?z:"between "+y+" and "+z)+" characters.";return[((l>=y&&l<=z)?true:false),q]}return[r.test(w),q]}else{if(o==="checkbox"){q="This item is required.";return[!!t.is(":checked"),q]}else{if(o==="radio"){D=t.attr("name");q="This item is required.";return[!!c("[name="+D+"]").is(":checked"),q]}else{q="This item is required.";return[!!w,q]}}}}function f(l){var n="^";for(var m=0;m<l.length;m++){n+=((m===0)?"":"[\\.\\-\\s]?")+l[m]}n+="$";return new RegExp(n.replace(/0/g,"[\\d]").replace(/A/g,"[a-zA-Z]"))}};c(".form").validate()})(jQuery,window,document);

/* Slider */
(function(c,b,a,d){c.fn.slider=function(j){var l={controls:{arrows:true,dots:true},speed:1000,pause:5000};j=c.extend(l,j);var B=c(this),z,u,t,v,x,q,n=[],y=[],p,o;function r(){var F,J,H;F=n.shift();J=y.shift();H=c('<div class="slide"></div>').appendTo(B).css({opacity:0});c('<img class="slide-img">').appendTo(H).load(function(){C();if(n.length>0){r()}else{A(function(){s(function(){D();i()})});z=c(".slide")}}).attr("src",F);if(J){var M=c('<div class="slide-content"></div>').appendTo(H);for(var N in J){var L,G=J[N],E=/img/,K="";L=E.test(G.type);for(var I in G.attr){K+=" "+I+'="'+G.attr[I]+'"'}c("<"+G.type+((G.classes)?' class="'+G.classes+'"':"")+K+">"+G.content+(L?"":"</"+G.type+">")).appendTo(M)}}}function h(E){v=c('<div class="slider-loader"><p>loading images</p><div class="slider-loader-progress"></div></div>');v.appendTo(B).css({opacity:0});e(E)}function k(E){v.animate({opacity:1,marginTop:"-=10"},500,function(){e(E)})}function A(E){v.animate({opacity:0,marginTop:"+=10"},500,function(){v.remove();e(E)})}function C(){var F=p-n.length,H=(F/p)*100,E=v.find("p"),G=v.find("div");E.text("loading images ("+F+"/"+p+")");G.animate({width:H+"%"},250)}function s(G){var F=j.controls.arrows,E=j.controls.dots;if(F){x=c('<div class="sprite sprite-arrow-left"></div><div class="sprite sprite-arrow-right"></div>');x.appendTo(B).css({marginTop:"+=20"});c(".sprite-arrow-left").on("click",function(){m("prev")});c(".sprite-arrow-right").on("click",function(){m("next")})}if(E){q=c('<div class="dots"></div>');q.appendTo(B);c.each(z,function(){$dot=c('<div class="dot"></div>');$dot.appendTo(q);q.css({width:"+="+$dot.outerWidth(true),marginLeft:"-="+$dot.outerWidth(true)/2})});q.on("click",".dot",function(){m(c(this).index())})}e(G)}function D(){var F=j.controls.arrows,E=j.controls.dots;if(F){x.animate({marginTop:"-=20"},500)}if(E){q.animate({bottom:"+=20"},500)}}function f(){var E=j.controls.dots;if(E){q.children().removeClass("active").eq(u.index()).addClass("active")}}function m(H){g();var G=((u)?u.index():d),F=0,J=u,E=((u)?u.find(".slide-content"):d),I;if(H==="prev"){F=G-1}else{if((H==="next")||(H===d)){F=G+1}else{F=H}}F=((F+p)%p);u=c(z[F]);t=u.find(".slide-content");I=z.not(u);if(F!==G){if(E){E.stop().animate({left:"+150%",opacity:0},j.speed)}t.stop().css({left:"-50%",opacity:0}).animate({left:"50%",opacity:1},j.speed);u.css({zIndex:3}).stop().animate({opacity:1,zIndex:2},j.speed,function(){I.css({opacity:0,zIndex:1});f()})}i()}function i(){o=setTimeout(function(){m()},j.pause);if(!u){m(0)}}function g(){clearTimeout(o)}function w(){p=j.slides.length;for(var E=0;E<p;E++){n.push(j.slides[E].image);y.push(j.slides[E].contents)}h(function(){k(function(){r()})})}function e(E){if(typeof E==="function"){E()}}w()}})(jQuery,window,document);

/* Bla */
;(function($, window, document, undefined) {

    $.fn.slider2 = function(options) {

        var defaults = {
            timer: null,
            speed: 1000,
            pause: 8000,
            images: [
                '/images/foundation1.jpg',
                '/images/foundation2.jpg',
                '/images/foundation3.jpg'
            ]
        };

        options = $.extend(defaults, options);

        this.each(function() {

            var $this = $(this);

            function init() {

                for (var i = 0; i < options.images.length; i++) {

                    $('<img class="found-slide">')
                        .appendTo($this)
                            .css({
                                opacity: 0,
                                zIndex: 1
                            })
                                .attr('src', options.images[i]);

                }

                showSlide(0);

            }


            function showSlide(index) {


                var $slides = $('.found-slide');

                if (index >= $slides.length) {
                    index = 0;
                }

                var $currentSlide = $($slides[index]);


                $currentSlide
                    .css({
                        opacity: 0,
                        zIndex: 3
                    })
                        .animate({
                            opacity: 1
                        }, options.speed, function() {

                            $slides
                                .not($this)
                                    .css({
                                        zIndex: 1
                                    });

                            $(this)
                                .css({
                                    zIndex: 2
                                });

                            setTimeout(function() {
                                showSlide(index + 1)
                            }, options.pause);

                        });

            }


            init();

        });

    };

})(jQuery, window, document);




jQuery(function( $ ){
	/**
	 * Demo binding and preparation, no need to read this part
	 */
	//borrowed from jQuery easing plugin
	//http://gsgd.co.uk/sandbox/jquery.easing.php
	$.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
	// back links
	$('a.back').click(function(){
		$(this).parents('div.pane').scrollTo( 0, 800, { queue:true } );
		$(this).parents('div.section').find('span.message').text( this.title );
		return false;
	});
	//just for the example, to stop the click on the links.
	$('ul.links').click(function(e){
		e.preventDefault();
		var link = e.target;
		link.blur();
		if( link.title )
			$(this).parent().find('span.message').text(link.title);
	});
	
	// This one is important, many browsers don't reset scroll on refreshes
	// Reset all scrollable panes to (0,0)
	$('div.pane').scrollTo( 0 );
	// Reset the screen to (0,0)
	$.scrollTo( 0 );
	
	// TOC, shows how to scroll the whole window
	$('#toc a').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
		$.scrollTo( this.hash, 1200);
		
		return false;
	});
	
	// Target examples bindings
	// THIS DEMO IS NOT INTENDED TO SHOW HOW TO CODE IT
	// JUST THE MULTIPLE OPTIONS. THIS CODE IS UGLY.
	var $paneTarget = $('#pane-target');
	
	$('#relative-selector').click(function(){
		$paneTarget.stop().scrollTo( 'li:eq(14)', 800 );
	});
	$('#jquery-object').click(function(){
		var $target = $paneTarget.find('li:eq(14)');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('#dom-element').click(function(){
		var target = $paneTarget.find('ul').get(0).childNodes[20];
		$paneTarget.stop().scrollTo( target, 800 );
	});
	$('#absolute-number').click(function(){
		$paneTarget.stop().scrollTo( 150, 800 );
	});
	$('#absolute-number-hash').click(function(){
		$paneTarget.stop().scrollTo( { top:800,left:700} , 800 );
	});
	$('#absolute-position').click(function(){
		$paneTarget.stop().scrollTo( '520px', 800 );
	});
	$('#absolute-position-hash').click(function(){
		$paneTarget.stop().scrollTo( {top:'110px',left:'290px'}, 800 );
	});
	$('#relative-position').click(function(){
		$paneTarget.stop().scrollTo( '+=100', 500 );
	});
	$('#relative-position-hash').click(function(){				
		$paneTarget.stop().scrollTo( {top:'-=100px',left:'+=100'}, 500 );
	});
	
	$('#percentage-position').click(function(){				
		$paneTarget.stop().scrollTo( '50%', 800 );
	});
	
	// Options examples bindings, they will all scroll to the same place, with different options
	function reset_o(){//before each animation, reset to (0,0), skip this.
		$paneOptions.stop(true).attr({scrollLeft:0, scrollTop:0});
	};
	var $paneOptions = $('#pane-options');
	
	$('#options-no').click(function(){
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000 );
	});
	$('#options-axis').click(function(){// only scroll horizontally
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000, { axis:'x' } );
	});
	$('#options-duration').click(function(){// it's the same as specifying it in the 2nd argument
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', { duration: 3000 } );
	});
	$('#options-easing').click(function(){
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 2500, { easing:'elasout' } );
	});
	$('#options-margin').click(function(){//scroll to the "outer" position of the element
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000, { margin:true } );
	});
	$('#options-offset').click(function(){//same as { top:-50, left:-50 }
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000, { offset:-50 } );
	});
	$('#options-offset-hash').click(function(){
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000, { offset:{ top:-5,left:-30 } });
	});
	$('#options-over').click(function(){//same as { top:-50, left:-50 }
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000, { over:0.5 });
	});
	$('#options-over-hash').click(function(){
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1000, { over:{ top:0.2, left:-0.5 } });
	});
	$('#options-queue').click(function(){//in this case, having 'axis' as 'xy' or 'yx' matters.
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 2000, { queue:true });
	});
	$('#options-onAfter').click(function(){
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 2000, { 
			onAfter:function(){
				$('#options-message').text('Got there!');
			}
		});
	});
	// onAfterFirst exists only when queuing
	$('#options-onAfterFirst').click(function(){
		reset_o(); $paneOptions.scrollTo( 'li:eq(15)', 1600, { 
			queue:true,
			onAfterFirst:function(){
				$('#options-message').text('Got there horizontally!');
			},
			onAfter:function(){
				$('#options-message').text('Got there vertically!');
			}
		});
	});
});


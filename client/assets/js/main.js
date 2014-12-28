
$(window).load(function() {
	
	$('.globload').delay(2000).fadeOut("slow")
	
	setTimeout(function() {
		$('h1.tlt').textillate({ in: { effect: 'fadeInUp', shuffle: false, delayScale: 2.0  } });
	}, 2000);
	
	setTimeout(function() {
	
	$(".tlt").addClass("fadeOut animated");
	}, 6000);
	
	setTimeout(function() {
	
	$(".tlt").addClass("display-none");
	}, 8500);
		
	setTimeout(function() {
	
			$("#main-future").removeClass("opacity-0").addClass("opacity-1 animated fadeIn");
			$("#progress2").removeClass("opacity-0").addClass("opacity-1 animated slideInUp");
			$("#tit-main").addClass("animated fadeInDown");
			$(".border").addClass("animated fadeInUp");
			$(".link-box").addClass("animated fadeInUp");
		
		}, 8500);
	
	setTimeout(function() {
		
		$(".days_dash").addClass("animated fadeInDown opacity-1");
		}, 8500);
	
	setTimeout(function() {
	
		$(".hours_dash").addClass("animated fadeInDown opacity-1");
		}, 9000);
	
	setTimeout(function() {
	
		$(".minutes_dash").addClass("animated fadeInDown opacity-1");
		}, 9500);
	
	setTimeout(function() {
		$(".seconds_dash").addClass("animated fadeInDown opacity-1");
		}, 10000);
		
});


jQuery(document).ready(function() {
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		14,
			'month': 	4,
			'year': 	2015,
			'hour': 	5,
			'min': 		27,
			'sec': 		0
		},
		omitWeeks: true
	});
	
	
	
	$('.carousel').carousel({
	  interval: 5000
	})
	
	
		google.maps.event.addDomListener(window, 'load', init);
		google.maps.event.addDomListener(window, 'resize', init);
		
		function init() {
	
			var myLatlng = new google.maps.LatLng(12.12419,-86.256844,17);
	
			var mapOptions = {
			zoom: 11,
			scrollwheel: false,
			draggable: false,
			
			center: myLatlng,
			
			styles: [	{	stylers:[			{hue:'#ff1a00'},			{invert_lightness:true},			{saturation:-100},			{lightness:33},			{gamma:0.5}	]	},{		featureType:'water',		elementType:'geometry',		stylers:[			{color:'#2D333C'}		]	}]
		};
	
			var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
			var contentString = '<div class="info-content"><h1 class="info-h1">We are here</div>';
	
			var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	
			var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Nicaragua'
		});
	
			google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	
	}
	
	/* ****** 5. Notify ******* */
	// Activate notifyMe plugin on a '#notifyMe' element	
		$("#notifyMe").notifyMe();
			
});
	
/* ****** 6. Popup ******* */
	
$(document).ready(function() {

	$('#my_popup').popup({
		transition: 'all 1.2s'
	});

	$('#about-exp').popup({
		pagecontainer: '.container',
		transition: 'all 1.2s'
	});
});
	
/* ****** 8. Buttons, Links & Animations ******* */	
	
jQuery(document).ready(function() {
	
	jQuery('a#supramap').click(function(){
		 jQuery('#map').toggleClass('frontoff');
		 jQuery('.principal').toggleClass('move-top');
		 jQuery('.link-box').toggleClass('move-down');
	});

	$("a#supramap .fa-globe").click(function() {
	   var $this = $(this);
	   if ($this.hasClass("fa-globe")) {
		  $this.removeClass("fa-globe").addClass("fa-compress");
		  return;
	   }
	   if ($this.hasClass("fa-compress")) {
		  $this.removeClass("fa-compress").addClass("fa-globe");
		  return;
	   }
	});

    jQuery('a#about-anim').click(function(){
         jQuery('.about-p').addClass('fadeInLeft animated');
		 jQuery('#img-about').addClass('fadeInRight animated');
		 jQuery('.align-reduce h2').addClass('fadeIn animated');
		 jQuery('#main-future').addClass('fadeOut animated');
    });
	
	jQuery('a#contact-anim').click(function(){
         jQuery('.cont-icon').addClass('fadeInUp animated');
		 jQuery('#main-cont').addClass('fadeInLeft animated');
		 jQuery('#text-cont').addClass('fadeInRight animated');
		 jQuery('.fullwidth').addClass('fadeInUp animated');
		 jQuery('.align-reduce h2').addClass('fadeIn animated');
		 jQuery('#main-future').addClass('fadeOut animated');
    });
	
	jQuery('a.fa-comp').click(function(){
		 jQuery('#main-future').removeClass('fadeOut').addClass('fadeIn');
    });
	
	jQuery('a#newsletter').click(function(){
         jQuery('#subscribe').toggleClass('sub-down');
    });
	
	$("a#fullscreen").click(function() {
	   if ($('#main-future').hasClass("fadeIn")) {
		  $('#main-future').removeClass("fadeIn").addClass("fadeOut animated");
		  return;
	   }
	   if ($('#main-future').hasClass("fadeOut")) {
		  $('#main-future').removeClass("fadeOut").addClass("fadeIn");
		  return;
	   }
	});
	
	jQuery('a.switch').click(function(){
         jQuery('#switcher').toggleClass('showing');
    });
	
});

/* ****** 9. Newsletter ******* */	

$("a#newsletter")
	.each(function(i) {
		
		if (i != 0) { 
		  $("#beep-two")
			.clone()
			.attr("id", "beep-two" + i)
			.appendTo($(this).parent()); 
		}
		
		$(this).data("beeper", i);
	  })
	  
	.mouseenter(function() {
		$("#beep-two" + $(this).data("beeper"))[0].play();
	});
		$("#beep-two").attr("id", "beep-two0");
		
/* ****** 10. Tooltip ******* */		
			
$(function () { $("[data-toggle='tooltip']").tooltip(); });
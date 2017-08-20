/* === Start GSAP animation ===
$('#serviceBtn').on('click', function($) {*/
/*$(document).ready(function(){
    $("#serviceBtn").click(function(){
        alert("The paragraph was clicked.");
    });
});

	// animate onload
	var transition = new TweenMax();
	transition
		.from($('#wrapper'), 0.6, {
			x: 300,
			opacity: 0,
			ease: Power2.easeIn
		});

};

 === End GSAP animation ===
var b = document.getElementById("logo");

b.onclick=function() {
	// Get the Object by ID
	var a = document.getElementById("serviceBtn");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	var svgItem = svgDoc.getElementById("lingkaran");
	// Set the colour to something else
	svgItem.setAttribute("fill", "lime");
};
$(function() {
	var overlayService = document.getElementById("overlayService");

	overlayService.onclick=function() {
	    //get svg object, like a jquery object
	    var svg = $("#serviceBtn").getSVG();
	    //use jquery functions to do some thing
	    svg.find("g path:first-child()").attr('fill', "#FFFFFF");

	};

});
*/

$('#overlayService').on('click', function() {
	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#E91E63"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#E91E63", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#673AB7"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#673AB7", ease: Cubic.easeOut}
		)
		.fromTo($('#servicePage'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

		$('#servicePage').css('display','inline-block');
		$('#servicePage').find('.backBtn').fadeIn(3000);
		$('#wrapper').css('display','none');
});

$('#overlaySkill').on('click', function() {
	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#FFEB3B"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#FFEB3B", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#FF5722"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#FF5722", ease: Cubic.easeOut}
		)
		.fromTo($('#skillPage'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

		$('#skillPage').css('display','inline-block');
		$('#skillPage').find('.backBtn').fadeIn(3000);
		$('#wrapper').css('display','none');
});

$('#overlayWork').on('click', function() {
	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#03A9F4"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#03A9F4", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#3F51B5"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#3F51B5", ease: Cubic.easeOut}
		)
		.fromTo($('#workPage'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

		$('#workPage').css('display','inline-block');
		$('#workPage').find('.backBtn').fadeIn(3000);
		$('#wrapper').css('display','none');
});

$('#overlayContact').on('click', function() {
	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#CDDC39"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#CDDC39", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#2ecc71"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#2ecc71", ease: Cubic.easeOut}
		)
		.fromTo($('#contactPage'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

		$('#contactPage').css('display','inline-block');
		$('#contactPage').find('.backBtn').fadeIn(3000);
		$('#wrapper').css('display','none');
});

$('#servicePage').find('.backBtn').on('click', function() {

	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#E91E63", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#E91E63", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#673AB7", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#673AB7", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#wrapper'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

	$('#wrapper').css('visibility','hidden');
	$('#servicePage').css('display','none');
	$('#servicePage').css('visibility','hidden');
	$('#servicePage').find('.backBtn').css('display','none');
	$('#wrapper').css('display','inline-block');

});

$('#skillPage').find('.backBtn').on('click', function() {

	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#FFEB3B", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#FFEB3B", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#FF5722", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#FF5722", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#wrapper'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

	$('#wrapper').css('visibility','hidden');
	$('#skillPage').css('display','none');
	$('#skillPage').css('visibility','hidden');
	$('#skillPage').find('.backBtn').css('display','none');
	$('#wrapper').css('display','inline-block');

});

$('#workPage').find('.backBtn').on('click', function() {

	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#03A9F4", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#03A9F4", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#3F51B5", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#3F51B5", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#wrapper'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: SlowMo.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

	$('#wrapper').css('visibility','hidden');
	$('#workPage').css('display','none');
	$('#workPage').css('visibility','hidden');
	$('#workPage').find('.backBtn').css('display','none');
	$('#wrapper').css('display','inline-block');

});

$('#contactPage').find('.backBtn').on('click', function() {

	var Transition = new TimelineMax();

	Transition
		.fromTo($('#transition1Page'),
			0.3,
			{width: "0%", backgroundColor: "#CDDC39", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#CDDC39", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#transition2Page'),
			0.3,
			{width: "0%", backgroundColor: "#2ecc71", left: "100%"},
			{width: "100%", autoAlpha: 1, backgroundColor: "#2ecc71", left: "0%", ease: Cubic.easeOut}
		)
		.fromTo($('#wrapper'),
			0.3,
			{width: "0%"},
			{width: "100%", autoAlpha: 1, ease: Cubic.easeOut}
		)
		.staggerTo([$('#transition1Page'), $('#transition2Page')],
			0.01,
			{autoAlpha: 0},
			0.01
		);

		$('#wrapper').css('visibility','hidden');
		$('#contactPage').css('display','none');
		$('#contactPage').css('visibility','hidden');
		$('#contactPage').find('.backBtn').css('display','none');
		$('#wrapper').css('display','inline-block');

});

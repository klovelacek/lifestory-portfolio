var controller;
$(function($) {
		// init controller
		controller = new ScrollMagic();

    // SCENE ONE FAMILY ---- tween in from right

		var tweenOne = TweenMax.to("#animate1", 0.75, {left: 618});
		// build scene
		var sceneOne = new ScrollScene({triggerElement: "#trigger1"})
				.setTween(tweenOne)
				.addTo(controller);

    // SCENEN TWO DRAW ME ---- tween in from top

    var tweenTwo = TweenMax.to("#animate2", 0.75, {bottom: -80});
    // build scene
    var sceneTwo = new ScrollScene({triggerElement: "#trigger2"})
        .setTween(tweenTwo)
        .addTo(controller);

    // SCENE THREE VCU ---- fly in and scale from right

		var tweenThree = {duration: 1, offset: -10};
		var elements = $(".vculayer1");
    // build scene
		new ScrollScene()
  			.addTo(controller)
  			.triggerHook("onCenter")
  			.triggerElement(".vculayer1")
  			.setTween(TweenMax.from(".vculayer1", 1, {scale: 750, ease: Back.easeOut}));

  	//SCENE FOUR MEET JAIVER ---- tween in from right

		var tweenFour = TweenMax.to("#animate4", 1.5, {left: 5});
// 			// build scene
		var sceneFour = new ScrollScene({triggerElement: "#trigger4"})
				.setTween(tweenFour)
				.addTo(controller);


		//SCENE FOUR MEET SHARON ---- tween in from bottom

		var tweenNine = TweenMax.to("#animate9", 1.5, {top: 5});
// 			// build scene
		var sceneNine = new ScrollScene({triggerElement: "#trigger9"})
				.setTween(tweenNine)
				.addTo(controller);


// MARTIN AGENCY CAROUSEL SECTION 5

$(".nextLink0").on("click", function(e){

		var currentActiveImage = $(".image-shown0");
		var nextActiveImage = currentActiveImage.next();

		if(nextActiveImage.length == 0)
			{
				nextActiveImage = $(".carousel-inner0 img").first();
			}

			currentActiveImage.removeClass("image-shown0").addClass("image-hidden0").css("z-index", -10);
			nextActiveImage.addClass("image-shown0").removeClass("image-hidden0").css("z-index", 20);
			$(".carousel-inner0 img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

			e.preventDefault();
	});

$(".previousLink0").on("click", function(e){

		var currentActiveImage = $(".image-shown0");
		var nextActiveImage = currentActiveImage.prev();

		if(nextActiveImage.length == 0)
			{
				nextActiveImage = $(".carousel-inner0 img").last();
			}

			currentActiveImage.removeClass("image-shown0").addClass("image-hidden0").css("z-index", -10);
			nextActiveImage.addClass("image-shown0").removeClass("image-hidden0").css("z-index", 1);
			$(".carousel-inner0 img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

			e.preventDefault();
})



// PORTFOLIO CAROUSEL SECTION 8

$(".nextLink").on("click", function(e){

	var currentActiveImage = $(".image-shown");
	var nextActiveImage = currentActiveImage.next();

	if(nextActiveImage.length == 0)
		{
			nextActiveImage = $(".carousel-inner img").first();
		}

		currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
		nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
		$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

		e.preventDefault();
});

$(".previousLink").on("click", function(e){

	var currentActiveImage = $(".image-shown");
	var nextActiveImage = currentActiveImage.prev();

	if(nextActiveImage.length == 0)
		{
			nextActiveImage = $(".carousel-inner img").last();
		}

		currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
		nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 1);
		$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

		e.preventDefault();
})

// PORTFOLIO CAROUSEL SECTION 10

	$(".nextLink2").on("click", function(e){

		var currentActiveImage = $(".image-shown2");
		var nextActiveImage = currentActiveImage.next();

		if(nextActiveImage.length == 0)
			{
				nextActiveImage = $(".carousel-inner2 img").first();
			}

			currentActiveImage.removeClass("image-shown2").addClass("image-hidden2").css("z-index", -10);
			nextActiveImage.addClass("image-shown2").removeClass("image-hidden2").css("z-index", 20);
			$(".carousel-inner2 img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

			e.preventDefault();
	});

	$(".previousLink2").on("click", function(e){

		var currentActiveImage = $(".image-shown2");
		var nextActiveImage = currentActiveImage.prev();

		if(nextActiveImage.length == 0)
			{
				nextActiveImage = $(".carousel-inner2 img").last();
			}

			currentActiveImage.removeClass("image-shown2").addClass("image-hidden2").css("z-index", -10);
			nextActiveImage.addClass("image-shown2").removeClass("image-hidden2").css("z-index", 1);
			$(".carousel-inner2 img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

			e.preventDefault();
	})

	//SECTION ELEVEN MEET AMARI ---- tween in from bottom

				// Filmstrip 1
		var tweenEleven = TweenMax.to("#animate11", 0.25, {top: 20});
	// 			// build scene filmstrip 1
		var sceneEleven = new ScrollScene({triggerElement: "#trigger11"})
				.setTween(tweenEleven)
				.addTo(controller);

				// Filmstrip 2
		var tweenElevenA = TweenMax.to("#animate11a", 1, {top: 20});
		// 			// build scene filmstrip 2
		var sceneElevenA = new ScrollScene({triggerElement: "#trigger11a"})
				.setTween(tweenElevenA)
				.addTo(controller);

		// Headline text
		var tweenElevenB = TweenMax.to("#animate11b", 1.75, {top: 20});
		// 			// build scene Headline text
		var sceneElevenB = new ScrollScene({triggerElement: "#trigger11b"})
				.setTween(tweenElevenB)
				.addTo(controller);

	// PORTFOLIO CAROUSEL SECTION 12

		$(".nextLink3").on("click", function(e){

			var currentActiveImage = $(".image-shown3");
			var nextActiveImage = currentActiveImage.next();

			if(nextActiveImage.length == 0)
				{
					nextActiveImage = $(".carousel-inner3 img").first();
				}

				currentActiveImage.removeClass("image-shown3").addClass("image-hidden3").css("z-index", -10);
				nextActiveImage.addClass("image-shown3").removeClass("image-hidden3").css("z-index", 20);
				$(".carousel-inner3 img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

				e.preventDefault();
		});

		$(".previousLink3").on("click", function(e){

			var currentActiveImage = $(".image-shown3");
			var nextActiveImage = currentActiveImage.prev();

			if(nextActiveImage.length == 0)
				{
					nextActiveImage = $(".carousel-inner3 img").last();
				}

				currentActiveImage.removeClass("image-shown3").addClass("image-hidden3").css("z-index", -10);
				nextActiveImage.addClass("image-shown3").removeClass("image-hidden3").css("z-index", 1);
				$(".carousel-inner3 img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

				e.preventDefault();
		})

//SECTION THIRTEEN MEET THE IRON YARD ---- tweens in from three sides

			// Boombox tween in from left
	var tweenThirteen = TweenMax.to("#animate13", 0.25, {left: 20});
// 			// build scene Boombox
	var sceneThirteen = new ScrollScene({triggerElement: "#trigger13"})
			.setTween(tweenThirteen)
			.addTo(controller);

			// Thought bubble tween in from right
	var tweenThirteenA = TweenMax.to("#animate13a", 1, {left: 20});
		// build scene filmstrip 2
	var sceneThirteenA = new ScrollScene({triggerElement: "#trigger13a"})
			.setTween(tweenThirteenA)
			.addTo(controller);

	// Headline text
	var tweenThirteenB = TweenMax.to("#animate13b", 1.75, {top: 20});
	// 			// build scene Headline text
	var sceneThirteenB = new ScrollScene({triggerElement: "#trigger13b"})
			.setTween(tweenThirteenB)
			.addTo(controller);



});

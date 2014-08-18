var controller;
$(function($) {
		// init controller
		controller = new ScrollMagic();

    // SCENE ONE
		var tweenOne = TweenMax.to("#animate1", 0.75, {left: 618});
		// build scene
		var sceneOne = new ScrollScene({triggerElement: "#trigger1"})
				.setTween(tweenOne)
				.addTo(controller);

    // SCENEN TWO
    var tweenTwo = TweenMax.to("#animate2", 0.75, {bottom: -80});
    // build scene
    var sceneTwo = new ScrollScene({triggerElement: "#trigger2"})
        .setTween(tweenTwo)
        .addTo(controller);

    // SCENE THREE
		var tweenThree = {duration: 200, offset: -10};
		var elements = $(".vculayer1");
    // build scene
		new ScrollScene()
  			.addTo(controller)
  			.triggerHook("onCenter")
  			.triggerElement(".vculayer1")
  			.setTween(TweenMax.from(".vculayer1", 1, {scale: 750, ease: Back.easeOut}));

    //SCENE FOUR
    // init the controller
    var tweenFour = new ScrollMagic("#wipe", 1, {transform: "translateX(0)"});
    //build scene
    var sceneFour = new ScrollScene({triggerElement: "#trigger4"})
        .setTween(tweenFour)
        .addTo(controller)

	});

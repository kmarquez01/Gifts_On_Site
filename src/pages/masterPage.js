// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

import { cart } from 'wix-stores-frontend'

import wixLocationFrontend from 'wix-location-frontend';

import wixWindowFrontend from 'wix-window-frontend';

import wixAnimations from 'wix-animations';

$w.onReady(function () {

    $w('#searchBox1').hide();
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});

export function vectorImage16_mouseIn(event) {

// $w('#vectorImage16').hide()
    
    let rollOptions = {
        "direction": "right"
    }

    $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_f79afa341d1b4745a6ea1c835dcbb42b.svg"
    // $w('#box2').show();
    // $w('#searchBox1').show("roll", rollOptions)

	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}

export function box2_mouseOut(event){

    // $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_b95dca4971344379a457961bb554df41.svg"
      $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_c3145074200b45fdbea73b38b2d55e8a.svg"

    $w('#box2').hide();

    let rollOptions = {
        "direction": "right"
    }

    $w('#searchBox1').hide("roll", rollOptions)

    const timeline_0 = wixAnimations.timeline({ "repeat": 0 })

        .add($w('#vectorImage16'), { duration: 10, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#vectorImage16'), { duration: 1000, easing: 'easeInOutQuint', opacity: 1.0 })

    timeline_0.replay()


}

export function vectorImage16_click(event) {
	$w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_c3145074200b45fdbea73b38b2d55e8a.svg"
    // wixLocationFrontend.to("/search-results");
}

export function vectorImage13_mouseIn(event) {
	$w('#vectorImage13').src = "https://static.wixstatic.com/shapes/75b9d8_486efd21389e49f08445c2a07637eb23.svg"
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage13_click(event) {
	$w('#vectorImage13').src = "https://static.wixstatic.com/shapes/75b9d8_7a67112b15c34ed587b6a9b9a93d8887.svg"
    if(wixWindowFrontend.formFactor === "Mobile"){
                    $w('#vectorImage13').link = "/cart-page"
                    $w('#vectorImage13').target = "_self"
                }
    else{
        cart.showMiniCart();
    }
 
}

export function vectorImage13_mouseOut(event) {
	$w('#vectorImage13').src = "https://static.wixstatic.com/shapes/75b9d8_4df36a1ce240468f8f78652d98d6a0f5.svg"
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage16_mouseOut(event) {


    // $w('#vectorImage16').hide()
    $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_9265aeb6cbaf40e0b9ec728b2233de6f.svg"

}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function header1_mouseIn(event) {

    // $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_b95dca4971344379a457961bb554df41.svg"

	let rollOptions = {
        "direction": "right"
    }

    $w('#searchBox1').hide("roll", rollOptions)

    $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_9265aeb6cbaf40e0b9ec728b2233de6f.svg"

}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function box2_mouseIn(event) {
	   $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_c3145074200b45fdbea73b38b2d55e8a.svg"
}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function column11_mouseIn(event) {
	// $w('#vectorImage16').show()
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function column11_mouseOut(event) {
    

    let rollOptions = {
        "direction": "right"
    }

    $w('#searchBox1').hide("roll", rollOptions)
	// $w('#vectorImage16').show()
}
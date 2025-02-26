// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
let state = true;

$w.onReady(function () {

    $w('#verticalMenu1').hide()
    // $w('#repeater4').hide()
    // $w('#repeater2').hide()
    // $w('#repeater3').hide()
    // $w('#repeater5').hide()
    // $w('#container5').hide()
    // $w('#container3').hide()
    // $w('#container4').hide()
    // $w('#container6').hide()
    // $w('#button5').hide()
    // $w('#button3').hide()
    // $w('#button4').hide()
    // $w('#button6').hide()
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});


/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {

    if(state === true){

	    $w('#verticalMenu1').show();
        state = false;
        return;
    }
    else
    {
        $w('#verticalMenu1').hide()
        state = true;
        return;
    }
    
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/


/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function categoryPage1_mouseIn(event) {

    $w('#verticalMenu1').hide()
    state = true;


	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}

/**
*	Adds an event handler that runs when a user clicks a menu item.
	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemClick)
*	 @param {$w.MenuItemMouseEvent} event
*/
// export function verticalMenu1_itemClick(event) {
//     $w('#repeater4').hide()
//     $w('#repeater2').hide()
//     $w('#repeater3').hide()
//     $w('#repeater5').hide()
//     $w('#container5').hide()
//     $w('#container3').hide()
//     $w('#container4').hide()
//     $w('#container6').hide()
//     $w('#button5').hide()
//     $w('#button3').hide()
//     $w('#button4').hide()
//     $w('#button6').hide()
// }

/**
*	Adds an event handler that runs when a user stops hovering over a menu item.
	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemMouseOut)
*	 @param {$w.MenuItemMouseEvent} event
*/
// export function verticalMenu1_itemMouseOut(event) {
// 	$w('#repeater4').hide()
//     $w('#repeater2').hide()
//     $w('#repeater3').hide()
//     $w('#repeater5').hide()
//     $w('#container5').hide()
//     $w('#container3').hide()
//     $w('#container4').hide()
//     $w('#container6').hide()
//     $w('#button5').hide()
//     $w('#button3').hide()
//     $w('#button4').hide()
//     $w('#button6').hide()
// }

/**
*	Adds an event handler that runs when a user clicks a menu item.
	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemClick)
*	 @param {$w.MenuItemMouseEvent} event
*/

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function verticalMenu1_mouseIn(event) {
	$w('#repeater4').hide()
    $w('#repeater2').hide()
    $w('#repeater3').hide()
    $w('#repeater5').hide()
    $w('#container5').hide()
    $w('#container3').hide()
    $w('#container4').hide()
    $w('#container6').hide()
    $w('#button5').hide()
    $w('#button3').hide()
    $w('#button4').hide()
    $w('#button6').hide()
}

/**
*	Adds an event handler that runs when a user clicks a menu item.
	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemClick)
*	 @param {$w.MenuItemMouseEvent} event
*/


/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
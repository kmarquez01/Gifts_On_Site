// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

import wixData from 'wix-data'
import { getcollection } from 'backend/shop'
import { products } from 'wix-stores.v2';

$w.onReady(function () {
    $w('#repeater1').hide()
    $w('#repeater2').hide()
    $w('#text30').hide();
    $w('#text24').hide()
    $w('#repeater3').hide()

     $w('#dynamicDataset').onReady(() => {

    $w('#dropdown1').onChange(() => {

        // let categories = $w('#dropdown1').value;
        // $w('#dynamicDataset').setFilter(wixData.filter().contains("collections", categories))

        if($w('#dropdown1').value === "Apparels"){
            $w('#repeater3').hide()
            $w('#listRepeater').hide()
            $w('#repeater1').show()
            $w('#repeater2').hide()
            $w('#text24').hide()
            $w('#text30').hide()
            $w('#text31').show()
        }
        else if($w('#dropdown1').value === "Toys & Games"){
            $w('#repeater3').hide()
            $w('#listRepeater').hide()
            $w('#repeater2').show()
            $w('#repeater1').hide()
            $w('#text24').hide()
            $w('#text30').show()
            $w('#text31').hide()
        }
        else if ($w('#dropdown1').value === "Accessories"){
            $w('#repeater3').show()
            $w('#listRepeater').hide()
            $w('#repeater2').hide()
            $w('#repeater1').hide()
            $w('#text24').show()
            $w('#text30').hide()
            $w('#text31').hide()
            
        }
        else{
            $w('#repeater3').hide()
            $w('#listRepeater').show()
            $w('#repeater2').hide()
            $w('#repeater1').hide()
            $w('#text24').show()
            $w('#text30').hide()
            $w('#text31').hide()
            // $w('#dynamicDataset').setFilter(wixData.filter().hasSome("collections", ["All Products"]))
        }
    })


    //     $w('#dropdown1').onChange(() => {
    //         search();
    //     })

    //     function search() {
    //         let productFilter = wixData.filter();
    //         let category = $w("#dropdown1").value;

    //         if (category) {
    //             productFilter = productFilter.eq("collections", category);
    //         }
           

    //         $w('#dynamicDataset').setFilter(productFilter)


    //     }

    });
		

});


/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage17_mouseIn(event) {
	$w('#vectorImage17').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage17_mouseOut(event) {
	    $w('#vectorImage17').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
 
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage17_click(event) {
	    $w('#vectorImage17').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
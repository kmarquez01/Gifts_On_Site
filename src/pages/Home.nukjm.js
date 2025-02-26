import wixAnimations from 'wix-animations';

import { cart } from 'wix-stores'

import { products } from 'wix-stores.v2';

import wixWindowFrontend from 'wix-window-frontend';

let stateSwitch = false;

let count = 0;

let productSet;

let productCheck

let navigation;

let dropdownOptions = $w("#dropdown1").options;
let firstLabel = dropdownOptions[0].label;  // "First Label"
let firstValue = dropdownOptions[0].value;  // "first_value"
let secondLabel = dropdownOptions[1].label;  // "First Label"
let secondValue = dropdownOptions[1].value;  // "first_value"
let thirdLabel = dropdownOptions[2].label;  // "First Label"
let thirdValue = dropdownOptions[2].value;  // "first_value"
let timeline1 = wixAnimations.timeline({ "repeat": 0 })

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {

    $w('#dropdown1').hide()
    $w('#dropdown2').hide()
    $w('#dropdown3').hide()
    $w('#dropdown4').hide()
    $w('#dropdown5').hide()
    $w('#dropdown6').hide()

    console.log( $w("#gallery3").galleryCapabilities)

    let thisProduct;

    $w('#giftsonsite').hide();

    const timeline1 = wixAnimations.timeline({ "repeat": 0 })

        .add($w('#slogan'), { x: 0, duration: 100, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

    timeline1.replay()

    const timeline2 = wixAnimations.timeline({ "repeat": 0 })

        .add($w('#shop'), { x: 0, duration: 100, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#shop'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

    timeline2.replay()

    // $w('#giftsonsite').show();

    const timeline3 = wixAnimations.timeline({ "repeat": 0 })

        .add($w('#giftsonsite'), { y: 0, duration: 100, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#logovec'), { y: 0, duration: 100, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#giftsonsite'), { y: 50, duration: 100, easing: 'easeInOutQuint', opacity: 0, delay: 1000 })

        .add($w('#logovec'), { y: 0, duration: 100, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#logovec'), { y: 100, duration: 1000, easing: 'easeInOutQuint', opacity: 1.0 })

        .add($w('#giftsonsite'), { y: 100, duration: 1200, easing: 'easeInOutQuint', opacity: 1.0 })

    timeline3.replay()

    const timeline4 = wixAnimations.timeline({ "repeat": 0 })

        .add($w('#box1'), { y: 0, duration: 100, easing: 'easeInOutQuint', opacity: 0 })

        .add($w('#box1'), { y: 0, duration: 1500, easing: 'easeInOutQuint', opacity: 0.25 })

    timeline4.replay()

    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});

export function vectorItem1_click(event) {

    $w('#vectorItem1').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        // $w('#dataset4').setCurrentItemIndex(1)

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = productData._id

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then((updatedCart) => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox1'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                    
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

export function vectorImage2_click(event) {
    // $w('#dataset4').setCurrentItemIndex(2)

    $w('#vectorImage2').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "cd59cd36-b6d2-2cf3-9d48-81793a7bdbbd"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")

                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox2'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

export function vectorImage3_click(event) {

    $w('#vectorImage3').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "df19c1f7-07d8-a265-42f8-e8dfa824cc6e"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox3'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })

}

export function vectorImage4_click(event) {

    $w('#vectorImage4').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "ec50de0a-5026-0d74-7ac1-b6da4526d633"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox4'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

export function vectorImage5_click(event) {

    $w('#vectorImage5').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "e5d00e9c-9435-22d1-92ee-6420a6ee99e2"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox5'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage6_click(event) {

    $w('#vectorImage6').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "ce236f04-a5cf-eb4b-ecee-eb16099cd4a5"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox6'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

export function vectorImage10_click(event) {

    $w('#dropdown1').show()

    $w('#vectorImage10').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset6").onReady(() => {

        let productCheck = $w('#dataset6').getCurrentItemIndex()

        let productData = $w('#dataset6').getCurrentItem()

        dropdownOptions = $w("#dropdown1").options;

        firstLabel = productData.productOptions.Size.choices[0].value
        firstValue = productData.productOptions.Size.choices[0].value
        // secondLabel = productData.productOptions.Size.choices[1].value
        // secondValue = productData.productOptions.Size.choices[1].value

        $w("#dropdown1").options = [
            {"label": firstLabel, "value": firstValue},
            // {"label": secondLabel, "value": secondValue},
            ];

        console.log($w('#dropdown1').options)

        console.log(productData)

        // let productID = productData.productReference

        // let quantity = 1

        // let products = [{
        //                 "productId": productData._id,
        //                 "quantity": quantity,
        //                 "options": {
        //                     "choices": {
        //                         "size": productData.productOptions.Size.choices[0].value,
        //                         "color": productData.productOptions.Color.choices[0].value
        //                     }
        //                 }
        //             }

        //         ]

        // cart.addProducts(products)
        //     .then(() => {
        //         console.log("Product Added")
        //         // console.log(updatedCart)
        //         cart.showMiniCart();

        //         console.log(productCheck);
        //         console.log(products, productData)
        //     })
        //     .catch((error) => {
        //         console.log(error);

        //     })

    })
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage11_click(event) {

     $w('#dropdown2').show()

    $w('#vectorImage11').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset6").onReady(() => {

        let productCheck = $w('#dataset6').getCurrentItemIndex()

        let productID = "1a2d7e83-4bef-31d5-09e1-3326ee271c09"

        let productData = $w('#dataset6').getCurrentItem()

        dropdownOptions = $w("#dropdown2").options;
        
        firstLabel = productData.productOptions.Size.choices[0].value
        firstValue = productData.productOptions.Size.choices[0].value
        // secondLabel = productData.productOptions.Size.choices[1].value
        // secondValue = productData.productOptions.Size.choices[1].value

        $w("#dropdown2").options = [
            {"label": firstLabel, "value": firstValue},
            // {"label": secondLabel, "value": secondValue},
            ];

    })
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage12_click(event) {

     $w('#dropdown3').show()

    $w('#vectorImage12').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset6").onReady(() => {

        let productCheck = $w('#dataset6').getCurrentItemIndex()

        let productID = "6b6778b4-c626-c00d-972c-b138d85e3f07"

        let productData = $w('#dataset6').getCurrentItem()

        dropdownOptions = $w("#dropdown3").options;
        
        firstLabel = productData.productOptions.Size.choices[0].value
        firstValue = productData.productOptions.Size.choices[0].value
        // secondLabel = productData.productOptions.Size.choices[1].value
        // secondValue = productData.productOptions.Size.choices[1].value

        $w("#dropdown3").options = [
            {"label": firstLabel, "value": firstValue},
            // {"label": secondLabel, "value": secondValue},
            ];

    })
}

export function vectorItem1_mouseIn(event) {
    $w('#vectorItem1').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorItem1_mouseOut(event) {
    $w('#vectorItem1').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage2_mouseIn(event) {
    $w('#vectorImage2').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage2_mouseOut(event) {
    $w('#vectorImage2').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage3_mouseIn(event) {
    $w('#vectorImage3').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage3_mouseOut(event) {
    $w('#vectorImage3').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage4_mouseIn(event) {
    $w('#vectorImage4').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage4_mouseOut(event) {
    $w('#vectorImage4').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage5_mouseIn(event) {
    $w('#vectorImage5').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage5_mouseOut(event) {
    $w('#vectorImage5').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage6_mouseIn(event) {
    $w('#vectorImage6').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage6_mouseOut(event) {
    $w('#vectorImage6').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage17_mouseIn(event) {
    $w('#vectorImage17').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage17_mouseOut(event) {
    $w('#vectorImage17').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage18_mouseIn(event) {
    $w('#vectorImage18').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
}

export function vectorImage18_mouseOut(event) {
    $w('#vectorImage18').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage10_mouseIn(event) {
    $w('#vectorImage10').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
    if(stateSwitch === true){
        if(count === 2){
            productSet = $w('#dataset6').setCurrentItemIndex(1)
        }
        else if(count === 3){
            productSet = $w('#dataset6').setCurrentItemIndex(2)
        }
        else if(count === 4){
            productSet = $w('#dataset6').setCurrentItemIndex(3)
            
        }
        else if(count === 5){
            productSet = $w('#dataset6').setCurrentItemIndex(4)
            
        }
        else if(count === 6){
            productSet = $w('#dataset6').setCurrentItemIndex(5)
            
        }
        else if(count === 7){
            productSet = $w('#dataset6').setCurrentItemIndex(6)
            
        }
        else if(count === 8){
            productSet = $w('#dataset6').setCurrentItemIndex(7)
            
        }
        else{
            productSet = $w('#dataset6').setCurrentItemIndex(0)
        }
        
    }
    else{
        productSet = $w('#dataset6').setCurrentItemIndex(0)
    }
    
}

export function vectorImage10_mouseOut(event) {
    $w('#vectorImage10').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage11_mouseIn(event) {
    $w('#vectorImage11').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
    if(stateSwitch === true){
        if(count === 2){
            productSet = $w('#dataset6').setCurrentItemIndex(2)
        }
        else if(count === 3){
            productSet = $w('#dataset6').setCurrentItemIndex(3)
        }
        else if(count === 4){
            productSet = $w('#dataset6').setCurrentItemIndex(4)
            
        }
        else if(count === 5){
            productSet = $w('#dataset6').setCurrentItemIndex(5)
            
        }
        else if(count === 6){
            productSet = $w('#dataset6').setCurrentItemIndex(6)
            
        }
        else if(count === 7){
            productSet = $w('#dataset6').setCurrentItemIndex(7)
            
        }
        else if(count === 8){
            productSet = $w('#dataset6').setCurrentItemIndex(0)
            
        }
        else{
            productSet = $w('#dataset6').setCurrentItemIndex(1)
        }
        
        
    }
    else{
        productSet = $w('#dataset6').setCurrentItemIndex(1)
    }
    
}

export function vectorImage11_mouseOut(event) {
    $w('#vectorImage11').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
    
}

export function vectorImage12_mouseIn(event) {
    $w('#vectorImage12').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg"
    if(stateSwitch === true){
        if(count === 2){
            productSet = $w('#dataset6').setCurrentItemIndex(3)
        }
        else if(count === 3){
            productSet = $w('#dataset6').setCurrentItemIndex(4)
        }
        else if(count === 4){
            productSet = $w('#dataset6').setCurrentItemIndex(5)
            
        }
        else if(count === 5){
            productSet = $w('#dataset6').setCurrentItemIndex(6)
            
        }
        else if(count === 6){
            productSet = $w('#dataset6').setCurrentItemIndex(7)
            
        }
        else if(count === 7){
            productSet = $w('#dataset6').setCurrentItemIndex(0)
            
        }
        else if(count === 8){
            productSet = $w('#dataset6').setCurrentItemIndex(1)
            
        }
        else{
            productSet = $w('#dataset6').setCurrentItemIndex(2)
        }
              
    }
    else{
        productSet = $w('#dataset6').setCurrentItemIndex(2)
    }
    
}

export function vectorImage12_mouseOut(event) {
    $w('#vectorImage12').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

/**
*	Adds an event handler that runs when a gallery's current item changes.
	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onCurrentItemChanged)
*	 @param {$w.GalleryItemChangedEvent} event
*/
export function gallery3_currentItemChanged(event) {

    $w('#button1').show()
    $w('#button2').show()
    // let totalItems = $w('#dataset6').getTotalCount()
    if (count === 0) {
        stateSwitch = false
        count += 1
    } else {

        // console.log(navigation)
        stateSwitch = true

        if(navigation === "right"){

        
        $w('#dataset6').next()
            .then((item) => {
                
                let fieldValue = item.fieldName
                let productData = $w('#dataset6').getCurrentItem()
                productData;
                console.log(productData)
                count += 1

            })
            .catch((err) => {
                let errMsg = err;
            })
        }
        else if (navigation === "left"){
       
        $w('#dataset6').previous()
            .then((item) => {
                
                let fieldValue = item.fieldName
                let productData = $w('#dataset6').getCurrentItem()
                productData;
                console.log(productData)
                count -= 1

            })
            .catch((err) => {
                let errMsg = err;
            })
        }

            

    }
}


export function vectorImage7_mouseIn(event) {
	$w('#vectorImage7').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg" 
    if(stateSwitch === true){
        if(count === 2){
            productSet = $w('#dataset7').setCurrentItemIndex(1)
        }
        else if(count === 3){
            productSet = $w('#dataset7').setCurrentItemIndex(2)
        }
        else if(count === 4){
            productSet = $w('#dataset7').setCurrentItemIndex(3)
            
        }
        else{
            productSet = $w('#dataset7').setCurrentItemIndex(0)
        }
        
    }
    else{
        productSet = $w('#dataset7').setCurrentItemIndex(0)
    }
}

export function vectorImage7_mouseOut(event) {
	$w('#vectorImage7').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function vectorImage7_click(event) {

    $w('#vectorImage7').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset7").onReady(() => {

        // $w('#dropdown4').show()

        let productData = $w('#dataset7').getCurrentItem()

    let products = [{
                        "productId": productData._id,
                        "quantity": 1,
                    }

                ]
    cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)

                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox7'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

        console.log(productData)

        // dropdownOptions = $w("#dropdown4").options;
        
        // firstLabel = productData.productOptions.Color.choices[0].description
        // firstValue = productData.productOptions.Color.choices[0].value

        // if($w('#dataset7').getCurrentItemIndex() !== 1){
        //     secondLabel = productData.productOptions.Color.choices[1].description
        //     secondValue = productData.productOptions.Color.choices[1].value
        //     $w("#dropdown4").options = [
        //         {"label": firstLabel, "value": firstValue},
        //         {"label": secondLabel, "value": secondValue},
        //     ];
        // }
        // else{
            $w("#dropdown4").options = [
                {"label": firstLabel, "value": firstValue},
            ];
        // }


        // if ($w('#dataset7').getCurrentItemIndex() === 1){
        //     products = [{
        //                 "productId": productData._id,
        //                 "quantity": quantity,
        //                 "options": {
        //                     "choices": {
        //                         "color": "#F5F5F5"
        //                     }
        //                 }
        //             }

        //         ]
        // }

        // if (stateSwitch === true) {

        //     if (count === 1) {

        //         productID = "1a2d7e83-4bef-31d5-09e1-3326ee271c09"

        //         products = [{
        //             "productId": productID,
        //             "quantity": quantity,
        //             "options": {
        //                 "choices": {
        //                     "size": "small",
        //                     "color": "rgb(255, 255, 255)"
        //                 }
        //             }
        //         }]
        //         productCheck = $w('#dataset7').getCurrentItemIndex();
        //         productSet = $w('#dataset7').setCurrentItemIndex(productCheck - 1)
        //         // console.log(productCheck)
        //         // console.log("It worked")

        //     } else if (count > 1) {

        //         productCheck = $w('#dataset7').getCurrentItemIndex();
        //         productSet = $w('#dataset7').setCurrentItemIndex(productCheck - 1)
        //         console.log(productCheck)

        //         products = [{
        //                 "productId": productData._id,
        //                 "quantity": quantity,
        //                 "options": {
        //                     "choices": {
        //                         "color": productData.productOptions.Color.choices[0].value
        //                     }
        //                 }
        //             }

        //         ]
                
        //     }

        //     count += 1

        // }
        // else {
        //     productSet = $w('#dataset7').setCurrentItemIndex(0)
        // }

    //     cart.addProducts(products)
    //         .then(() => {
    //             console.log("Product Added")
    //             // console.log(updatedCart)
    //             cart.showMiniCart();

    //             console.log(productCheck);
    //             console.log(products, productData)
    //         })
    //         .catch((error) => {
    //             console.log(error);

    //         })

    }) 
}


export function vectorImage8_mouseIn(event) {
	$w('#vectorImage8').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg" 
     if(stateSwitch === true){
        if(count === 2){
            productSet = $w('#dataset7').setCurrentItemIndex(2)
        }
        else if(count === 3){
            productSet = $w('#dataset7').setCurrentItemIndex(3)
        }
        else if(count === 4){
            productSet = $w('#dataset7').setCurrentItemIndex(0)
        }
        else{
            productSet = $w('#dataset7').setCurrentItemIndex(1)
        }  
    }
    else{
        productSet = $w('#dataset7').setCurrentItemIndex(1)
    }
}

export function vectorImage8_click(event) {

    $w('#vectorImage8').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset7").onReady(() => {

        let productData = $w('#dataset7').getCurrentItem()

        let quantity = 1

    let products = [{
                    "productId": productData._id,
                    "quantity": quantity,
                    // "options": {
                    //     "choices": {
                    //         "color": $w('#dropdown5').value
                    //     }
                    // }
                }

            ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox8'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })


        // $w('#dropdown5').show()

        // console.log(productData)

        // dropdownOptions = $w("#dropdown5").options;
        
        // firstLabel = productData.productOptions.Color.choices[0].description
        // firstValue = productData.productOptions.Color.choices[0].value
        // // secondLabel = productData.productOptions.Color.choices[1].description
        // // secondValue = productData.productOptions.Color.choices[1].value

        // $w("#dropdown5").options = [
        //     {"label": firstLabel, "value": firstValue}
        //     ];

        
    }) 
}

export function vectorImage8_mouseOut(event) {
	$w('#vectorImage8').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

export function button1_mouseIn(event) {
	navigation = "right"
    $w('#button1').hide()
}


export function button2_mouseIn(event) {
	navigation = "left"
    $w('#button2').hide()
}

export function vectorImage9_mouseIn(event) {
	$w('#vectorImage9').src = "https://static.wixstatic.com/shapes/75b9d8_537cd1f03457422498fb3a005be57c65.svg" 
    if(stateSwitch === true){
        if(count === 2){
            productSet = $w('#dataset7').setCurrentItemIndex(3)
        }
        else if(count === 3){
            productSet = $w('#dataset7').setCurrentItemIndex(0)
        }
        else if(count === 4){
            productSet = $w('#dataset7').setCurrentItemIndex(1)
            
        }
        else{
            productSet = $w('#dataset7').setCurrentItemIndex(2)
        }
        
    }
    else{
        productSet = $w('#dataset7').setCurrentItemIndex(2)
    }
}

/**
*	Adds an event handler that runs when the pointer is moved
 off of the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage9_mouseOut(event) {
	$w('#vectorImage9').src = "https://static.wixstatic.com/shapes/75b9d8_53e0d073f6634f0b969bbaa93df261a2.svg"
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage9_click(event) {

    // $w('#dropdown6').show()

	$w('#vectorImage9').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset7").onReady(() => {

        let productData = $w('#dataset7').getCurrentItem()

        let quantity = 1

    let products = [{
                    "productId": productData._id,
                    "quantity": quantity,
                    // "options": {
                    //     "choices": {
                    //         "color": $w('#dropdown6').value
                    //     }
                    // }
                }

            ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox9'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

        // console.log(productData)

        // dropdownOptions = $w("#dropdown4").options;
        
        // firstLabel = productData.productOptions.Color.choices[0].description
        // firstValue = productData.productOptions.Color.choices[0].value
        // secondLabel = productData.productOptions.Color.choices[1].description
        // secondValue = productData.productOptions.Color.choices[1].value

        // $w("#dropdown6").options = [
        //     {"label": firstLabel, "value": firstValue},
        //     {"label": secondLabel, "value": secondValue},
        //     ];

       
    }) 
}

/**
*	Adds an event handler that runs when a gallery's current item changes.
	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onCurrentItemChanged)
*	 @param {$w.GalleryItemChangedEvent} event
*/
export function gallery2_currentItemChanged(event) {
    $w('#button3').show()
    $w('#button4').show()
    // let totalItems = $w('#dataset6').getTotalCount()
    if (count === 0) {
        stateSwitch = false
        count += 1
    } else {

        // console.log(navigation)
        stateSwitch = true

        if(navigation === "right"){

        
        $w('#dataset7').next()
            .then((item) => {
                
                let fieldValue = item.fieldName
                let productData = $w('#dataset7').getCurrentItem()
                productData;
                console.log(productData)
                count += 1

            })
            .catch((err) => {
                let errMsg = err;
            })
        }
        else if (navigation === "left"){
       
        $w('#dataset7').previous()
            .then((item) => {
                
                let fieldValue = item.fieldName
                let productData = $w('#dataset7').getCurrentItem()
                productData;
                console.log(productData)
                count -= 1

            })
            .catch((err) => {
                let errMsg = err;
            })
        }

            

    }
}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function button3_mouseIn(event) {
	navigation = "right"
    $w('#button3').hide()
}

export function button4_mouseIn(event) {
	navigation = "left"
    $w('#button4').hide()
}


export function dropdown1_change(event) {
	$w('#dropdown1').hide()
    let productData = $w('#dataset6').getCurrentItem()

    let products = [{
                        "productId": productData._id,
                        "quantity": 1,
                        "options": {
                            "choices": {
                                // "size": productData.productOptions.Size.choices[0].value,
                                "size": $w('#dropdown1').value,
                            }
                        }
                    }

                ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0})

                    .add($w('#mobileBox10'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })


}


export function dropdown2_change(event) {
	$w('#dropdown2').hide()

    let productData = $w('#dataset6').getCurrentItem()

    let products = [{
                        "productId": productData._id,
                        "quantity": 1,
                        "options": {
                            "choices": {
                                // "size": productData.productOptions.Size.choices[0].value,
                                "size": $w('#dropdown2').value,
                            }
                        }
                    }

                ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)

                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox11'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

}

export function dropdown3_change(event) {
	$w('#dropdown3').hide()

     let productData = $w('#dataset6').getCurrentItem()

    let products = [{
                        "productId": productData._id,
                        "quantity": 1,
                        "options": {
                            "choices": {
                                // "size": productData.productOptions.Size.choices[0].value,
                                "size": $w('#dropdown3').value,
                            }
                        }
                    }

                ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)

                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox12'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })
}

export function dropdown1_mouseOut(event) {
	$w('#dropdown1').hide()
}

export function dropdown2_mouseOut(event) {
	$w('#dropdown2').hide()
}

export function dropdown3_mouseOut(event) {
	$w('#dropdown3').hide()
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown4_change(event) {
	let productData = $w('#dataset7').getCurrentItem()

    let products = [{
                        "productId": productData._id,
                        "quantity": 1,
                        "options": {
                            "choices": {
                                "color": $w('#dropdown4').value
                            }
                        }
                    }

                ]
    cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)

                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox7'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown5_change(event) {
    let productData = $w('#dataset7').getCurrentItem()

	let quantity = 1

    let products = [{
                    "productId": productData._id,
                    "quantity": quantity,
                    // "options": {
                    //     "choices": {
                    //         "color": $w('#dropdown5').value
                    //     }
                    // }
                }

            ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox8'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }

                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown6_change(event) {
	let productData = $w('#dataset7').getCurrentItem()

	let quantity = 1

    let products = [{
                    "productId": productData._id,
                    "quantity": quantity,
                    // "options": {
                    //     "choices": {
                    //         "color": $w('#dropdown6').value
                    //     }
                    // }
                }

            ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox9'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();

                console.log(productCheck);
                console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

}

export function dropdown4_mouseOut(event) {
	$w('#dropdown4').hide()
}

export function dropdown5_mouseOut(event) {
	$w('#dropdown5').hide()
}

export function dropdown6_mouseOut(event) {
	$w('#dropdown6').hide()
}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function section2_mouseIn(event) {
	// $w('#vectorImage16').src = "https://static.wixstatic.com/shapes/75b9d8_9265aeb6cbaf40e0b9ec728b2233de6f.svg"

    let rollOptions = {
        "direction": "right"
    }

    $w('#searchBox1').hide("roll", rollOptions)
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button4_click(event) {
	navigation = "left"
    $w('#button4').hide()

    $w('#gallery2').previous()
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
	navigation = "left"
    $w('#button2').hide()

    $w('#gallery3').previous()
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {
	navigation = "right"
    $w('#button1').hide()

    $w('#gallery3').next();
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button3_click(event) {
	navigation = "right"
    $w('#button3').hide()

    $w('#gallery2').next()
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage17_click(event) {
	$w('#vectorImage17').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "0038fd4b-0af1-0825-dc2f-6796159231ce"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox14'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage18_click(event) {
	$w('#vectorImage18').src = "https://static.wixstatic.com/shapes/75b9d8_fe90d4833b694735bdc7dab110e7c208.svg"

    $w("#dataset4").onReady(() => {

        let productCheck = $w('#dataset4').getCurrentItemIndex()

        let productData = $w('#dataset4').getCurrentItem()

        let productID = "dffb4b8b-67dd-a770-d3e2-69ffc0460037"

        let quantity = 1

        const products = [{
                "productId": productID,
                "quantity": quantity
            }

        ]

        cart.addProducts(products)
            .then(() => {
                console.log("Product Added")
                // console.log(updatedCart)
                if(wixWindowFrontend.formFactor === "Mobile"){
                    timeline1 = wixAnimations.timeline({ "repeat": 0 })

                    .add($w('#mobileBox6'), { x: 0, duration: 5000, easing: 'easeInOutQuint', opacity: 0 })

                    // .add($w('#slogan'), { x: 100, duration: 2000, easing: 'easeInOutQuint', opacity: 1.0 })

                    timeline1.replay()
                }
                cart.showMiniCart();
                // console.log(products, productData)
            })
            .catch((error) => {
                console.log(error);

            })

    })
}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
// Globals
var ids = new Array(6);
console.log(ids);
var cartCounter = 0;





  function loadImgs(){
    var imgArr = new Array();
    var imgTitle = new Array();
    var imgDesc = new Array();
    var itemCost = new Array()
    var decBtn = new Array();
    var incBtn = new Array();
    var addToCartText = new Array();
    var checkBox = new Array();
    var cartBtnText = new Array();

    // Note: This can be optimized with a loop
    cartBtnText.push(
        'Add To Cart',
        'Add To Cart',
        'Add To Cart',
        'Add To Cart',
        'Add To Cart'
    )
    addToCartText.push(
        'Add to cart',
        'Add to cart',
        'Add to cart',
        'Add to cart',
        'Add to cart'
    )
    incBtn.push(
      '+',
      '+',
      '+',
      '+',
      '+'
    )
    decBtn.push(
      '-',
      '-',
      '-',
      '-',
      '-'
    )
    itemCost.push(
        '$13.29',
        '$10.99',
        '$13.29',
        '$8.50',
        '$9.00'
    )
    checkBox.push(
        './menuImages/tick.png',
        './menuImages/tick.png',
        './menuImages/tick.png',
        './menuImages/tick.png',
        './menuImages/tick.png'
    )
    imgArr.push(
        './menuImages/beef-bread-breakfast-1251198.jpg',
        './menuImages/beef-bread-burger-156114.jpg',
        './menuImages/basil-beef-delicious-47725.jpg',
        './menuImages/burger5.jpg',
        './menuImages/burger6.jpg',
    )
    imgTitle.push(
        'Old Classic',
        'Meat Maddness',
        'Vegan Special',
        'Old Classic',
        'KSA Burger'
    )
    imgDesc.push(
        'The old classic is made with love. A house favoritve that can be customized to hears desire.',
        'The Meat Maddess is a burger not for the light of heat. MM comes with your choice of toppings, but includes bacon, two patties, and egge white.',
        'This burger is served to perfection. Topped with cheese of your choice, lettuce, tomatoes, grilled onions, special sauce, and old bay.',
        'The old classic is made with love. A house favoritve that can be customized to hears desire.',
        'The Meat Maddess is a burger not for the light of heat. MM comes with your choice of toppings, but includes bacon, two patties, and egge white.'
    )

for(var i = 0; i < imgArr.length; i++){
   
    //make the wrapper div elements
    burgerContainer = document.createElement('div');
    burgerContainer.className = "burger-container container";
    
    //make the img element and loop through array to get each img
    theImg = document.createElement("img");
    theImg.setAttribute('src', imgArr[i]);
    theImg.className = "burger-image";

    cBox = document.createElement("img")
    cBox.setAttribute('src', checkBox[i]);
    cBox.id = "greenTick";

    theTitle = document.createElement('h3');
    theTitle.id = "itemTitle";
    theTitle.textContent = imgTitle[i];

    theDesc = document.createElement('p');
    theDesc.className = "discription";
    theDesc.textContent = imgDesc[i];

    itemCostContainer = document.createElement('div');
    itemCostContainer.id = "ctaSection";

    costOfItem = document.createElement('span');
    costOfItem.className = "itemCost";
    costOfItem.textContent = itemCost[i];
    

    addToCart2 = document.createElement('button');
    addToCart2.className = "addToCartMobile";
    addToCart2.textContent = addToCartText[i];
    addToCart2.setAttribute("onclick", "buttonToggle()");

    // headerIncButton = document.createElement('button');
    // headerIncButton.id = "headerIncButton";
    // headerIncButton.className = "sizeButton";
    // headerIncButton.textContent = incBtn[i];
    // headerIncButton.setAttribute("onclick", "increaseHeader()");

    // headerDecButton = document.createElement('button');
    // headerDecButton.id = "headerDecButton";
    // headerDecButton.className = "sizeButton";
    // headerDecButton.textContent = decBtn[i];
    // headerDecButton.setAttribute("onclick", "decreaseHeader()");

    addToCart = document.createElement('div');


    cartBtn = document.createElement('div');
    // innerCartBtn = document.createElement('div');
    // innerCartBtn.id = "text";
    // innerCartBtn.setAttribute("onclick", "buttonToggle()");
    // innerCartBtn.textContent = cartBtnText[i];
    
  // NOTE: Optimize this to not repeat itself. - use burgarContainer as the base and append to the theImg, theTitle,...
    //add the imgs and divs to DOM
    $("#food-image-container").append(burgerContainer);
    $(burgerContainer).append(theImg);
    $(burgerContainer).append(theTitle);
    $(burgerContainer).append(theDesc);
    $(burgerContainer).append(cartBtn);
    $(burgerContainer).append(itemCostContainer);
    $(costOfItem).appendTo(itemCostContainer);
    $(addToCart2).appendTo(itemCostContainer);
    // $(headerIncButton).appendTo(itemCostContainer);
    // $(headerDecButton).appendTo(itemCostContainer);

  
    // $(cartBtn).append(innerCartBtn);
    $(theTitle).append(cBox);
    }
}
loadImgs();
// 

var addToCartBtn = document.getElementById("text");
addToCartBtn.value = "notAdded";    

function adder(num){
  cartCounter += 1;
}
function subtractor(num){
  cartCounter -= 1;
}

var uniqueName = ['abc','ght','kuk','dsi']; 

function buttonToggle(){
 var addToCartBtn = document.getElementById("text");

  if (addToCartBtn.value === "notAdded") {
    addToCartBtn.value = "added";
    addToCartBtn.innerHTML = "Remove From Cart";
    
    $("#cartValue").text(adder(cartCounter));
    $("#cartValue").text(cartCounter);
  }
  else {
    addToCartBtn.value = "notAdded";
    addToCartBtn.innerHTML = "Add To Cart";

    $("#cartValue").text(subtractor(cartCounter));
    $("#cartValue").text(cartCounter);
  }
}

//Assign each img an id + #. Loop through the numbers when needed to identify which button was selected. Add and sub per usual, but each function checks if the id has already been selcected.  [*thought: what if the counter in the cart had an array with all the chosen id/fooditems and then comparied them to the ids of the items in the html] if(button has
  // don't add to 
// }


// });  


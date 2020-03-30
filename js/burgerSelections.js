    
    //Section: Loads images and image data onto page
    function loadImgs(){
    var imgArr = new Array();
    var imgTitle = new Array();
    var imgDesc = new Array();
    var checkBox = new Array();
    var cartBtnText = new Array();

    cartBtnText.push(
        'Add To Cart',
        'Add To Cart',
        'Add To Cart',
        'Add To Cart',
        'Add To Cart'
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

    cartBtn = document.createElement('div');
    innerCartBtn = document.createElement('div');
    cartBtn.className = "middle";
    innerCartBtn.id = "text";
    innerCartBtn.setAttribute("onclick", "buttonToggle()");
    innerCartBtn.textContent = cartBtnText[i];
    

    //add the imgs and divs to DOM
    $("#food-image-container").append(burgerContainer);
    $(burgerContainer).append(theImg);
    $(burgerContainer).append(theTitle);
    $(burgerContainer).append(theDesc);
    $(burgerContainer).append(cartBtn);
    $(cartBtn).append(innerCartBtn);
    $(theTitle).append(cBox);
    }
}
loadImgs();


//Section: Handles the cart functionality
var cartCounter = 0;
var mathFuncVar;
var addToCartBtn = document.getElementById("text");
addToCartBtn.value = "notAdded";    

function adder(num){
  cartCounter += 1;
}
function subtractor(num){
  cartCounter -= 1;
}


//Functions that compute the math for the shopping cart.
function cartMath(){
  if(mathFuncVar === 1){
    adder(cartCounter);
      $("#cartValue").text(cartCounter);
      console.log("Items added!");
  }

  if(mathFuncVar === 0){
    subtractor(cartCounter);
      $("#cartValue").text(cartCounter);
      console.log("Items Subtracted!");
  }
}

//Functions that toggle the text for the "add to cart button"
function buttonToggle(){
  if(addToCartBtn.value === "notAdded") {
    mathFuncVar = 1; 
    addToCartBtn.value = "added";
    addToCartBtn.innerHTML = "Remove From Cart";
      cartMath();
  }
  else{
    mathFuncVar = 0;
    addToCartBtn.value = "notAdded";
    addToCartBtn.innerHTML = "Add To Cart";
      cartMath();
  }
}



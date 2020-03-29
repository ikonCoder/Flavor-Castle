$( document ).ready(function() {
    function loadImgs(){
    var imgArr = new Array();
    var imgTitle = new Array();
    var imgDesc = new Array();
    var checkBox = new Array();
    
    checkBox.push(
        './menuImages/tick.png',
        './menuImages/tick.png',
        './menuImages/tick.png',
        './menuImages/tick.png',
        './menuImages/tick.png'
    )
    imgArr.push(
        './menuImages/salad2.jpg',
        './menuImages/salad3.jpg',
        './menuImages/salad4.jpg',
        './menuImages/salad5.jpg',
        './menuImages/salad6.jpg',
    )
    imgTitle.push(
        'Cool Cucumber',
        'Old Classic',
        'Vegan Special',    
        'Old Classic',
        'KSA Salad'
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
    burgerContainer.className = "burger-container";
    
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
    theDesc.textContent =imgDesc[i];

    //add the imgs and divs to DOM
    $("#food-image-container").append(burgerContainer);
    $(burgerContainer).append(theImg);
    $(burgerContainer).append(theTitle);
    $(burgerContainer).append(theDesc);
    }
}

loadImgs();

});


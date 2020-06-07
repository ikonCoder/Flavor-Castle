//Globals 
var cartCounter = 0;
var totalItems = 6;
var cartOpen = 0;
var cartCost;
var burgerPage;
var deepDishPage;
var pastaPage;

if(pageUrl == "/Flavor-Castle/menu/index.html"){
    menuData == burgerData;
}else if(pageUrl == "/Flavor-Castle/menu/deepDish.html"){
    menuData == deepdishData;
}else if(pageUrl == "/Flavor-Castle/menu/pasta.html"){
    menuData == pastaData;
}else if(pageUrl == "/Flavor-Castle/menu/salad.html"){
    menuData == saladData;
}
 



for(i = 0; i < totalItems; i++){
    function menuTemplate(item) {
        return `
            <div class="burger-container container">
                <img class="burger-image" src="${item.imgPath}">
                    <h3 id="itemTitle">${item.item}</h3>
                <p class="discription">${item.desc}</p>
                <div id="ctaSection">
                    <span class="itemCost">${item.cost}</span>
                    <button class="addToCartMobile ${item.cartID}" id="addBtn" ">Add to cart</button>
                </div>
            </div>
        `;
        }
    }

document.getElementById("food-image-container").innerHTML = `
${menuData.map(menuTemplate).join("")} `;


let carts = document.querySelectorAll('.addToCartMobile');

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(menuData[i]);
        totalCost(menuData[i]);
        alert("Your item has been added!");
    })
}

function onLoadCartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('#cartValue').textContent = productNumbers;  
    }
}

function cartNumbers(product){
    var productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cartValue').textContent = productNumbers + 1;
    } 
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cartValue').textContent = 1;  
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.item] == undefined){
            cartItems = {
                ...cartItems,
                [product.item]: product
            }
        }
        cartItems[product.item].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {   
            [product.item]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(menuData){
    cartCost = localStorage.getItem("totalCost");

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        menuData.cost = parseInt(menuData.cost)
        localStorage.setItem("totalCost", cartCost + menuData.cost);
    } else {
        localStorage.setItem("totalCost", menuData.cost);
    }
}



//Code for hiding and showing cart on menu page
var cartBtn = document.querySelector('.cartContainer');
cartBtn.addEventListener('click',() => {
    if(cartOpen == 1){
        hideCart();
    }
    else{
        revealCart();
    }
})

function revealCart(item){
    document.getElementById("hiddenCartContainer").style.display = "block";
    document.querySelector(".justify-content-center").style.opacity = "0.2";
    document.getElementById("food-menu").style.opacity = "0.2";
    document.getElementById("food-image-container").style.opacity = "0.2";
    document.querySelector(".Food-title").style.opacity = "0.2";
    document.querySelector(".ft-1").style.opacity = "0.2";
    cartOpen = 1;
    costCheck();
}

function hideCart(e){
    document.getElementById("hiddenCartContainer").style.display = "none";
    document.querySelector(".justify-content-center").style.opacity = "1";
    document.getElementById("food-image-container").style.opacity = "1";
    document.querySelector(".Food-title").style.opacity = "1";
    document.querySelector(".ft-1").style.opacity = "1";   
    document.getElementById("food-menu").style.opacity = "1";
    cartOpen = 0;
}

function costCheck(){
    if(localStorage.getItem("totalCost") === null){
        $("#total").html("Total: $0.00");
    } else {
        $("#total").html("Total: $" +  localStorage.getItem("totalCost"));
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("#cartHidden");

    if(cartItems && productContainer ){
        console.log(cartItems);
        // productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="itemsInCartContainer"> 
                <img id="cartImg" src="${item.imgPath}">
                <button type="button" class="btn btn-danger removeBtn">Remove</button>
                <div class="qntContainer">
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>
                    <span id="itemInCartNum">${item.inCart}</span>
                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                </div>
            `
        });
    }
}

onLoadCartNumbers();
displayCart();

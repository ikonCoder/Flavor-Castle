//Globals 
var cartCounter = 0;
var totalItems = 6;







//Menu Items
var menuData = [
    {
        "imgPath" : "menuImages/burger-cheeseburger-close-up-1199960.jpg",
        "item" : "New York Style",
        "desc" : "This burger is served to perfection. Topped with cheese of your choice, lettuce, tomatoes, grilled onions, special sauce, and old bay.",
        "cost" : "$13.50",
        "inCart" : "0"      
    },
    {
        "imgPath" : "menuImages/beef-bread-breakfast-1251198.jpg",
        "item" : "Old Classic",
        "desc" : "The old classic is made with love. A house favoritve that can be customized to hears desire.",
        "cost" : "$13.00",
        "inCart" : "0"       
    },
    {
        "imgPath" : "menuImages/beef-bread-burger-156114.jpg",
        "item" : "Meat Maddness",
        "desc" : "The Meat Maddess is a burger not for the light of heat. MM comes with your choice of toppings, but includes bacon, two patties, and egge white.",
        "cost" : "$10.00",
        "inCart" : "0"  
        },
    {
        "imgPath" : "menuImages/basil-beef-delicious-47725.jpg",
        "item" : "Vegan Special",
        "desc" : "This burger is served to perfection. Topped with cheese of your choice, lettuce, tomatoes, grilled onions, special sauce, and old bay.",
        "cost" : "$9.00",
        "inCart" : "0"       
    },
    {
        "imgPath" : "menuImages/burger5.jpg",
        "item" : "Old Classic",
        "desc" : "The old classic is made with love. A house favoritve that can be customized to hears desire.",
        "cost" : "$8.50",
        "inCart" : "0"         
    },
    {
        "imgPath" : "menuImages/burger6.jpg",
        "item" : "KSA Burger",
        "desc" : "The Meat Maddess is a burger not for the light of heat. MM comes with your choice of toppings, but includes bacon, two patties, and egge white.",
        "cost" : "$9.00",
        "inCart" : "0"          
    }
]

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
        alert("Your item has been added!");
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

onLoadCartNumbers();
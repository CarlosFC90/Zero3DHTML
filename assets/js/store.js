const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
}); 

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');
    
    const itemTitle = item.querySelector('h3').textContent;
    const itemPrice = item.querySelector('.price').textContent;
    const itemImage = item.querySelector('.default-img').src;
    
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    
}
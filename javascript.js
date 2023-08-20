
function addToCart(button) {
    const productDiv = button.parentElement;
    const quantityInput = productDiv.querySelector(".quantity");
    const quantity = parseInt(quantityInput.value);

    
    addToCartFunction(productDiv, quantity);
}

function addToCartFunction(productDiv, quantity) {
    const productName = productDiv.querySelector("h2").textContent;
    const productPrice = parseFloat(productDiv.querySelector("p").textContent.slice(1));

    
    console.log(Added ${quantity} ${productName}(s) to the cart. Total cost: $${(productPrice * quantity).toFixed(2)});
}


function addToCart(button) {
    
    const discountThreshold = 29; // Threshold for applying discount
    const discountPercentage = 0.1; // 10% discount

    // Apply discount if price is above the threshold
    if (item.price > discountThreshold) {
        const discountAmount = item.price * discountPercentage;
        item.price -= discountAmount;
    }

    
}

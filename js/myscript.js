//select memory --------------
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateOptionPrice('extra-memory-cost', 0);
    updateTotal()
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateOptionPrice('extra-memory-cost', 180);
    updateTotal()
})

//select storage --------------
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateOptionPrice('extra-storage-cost', 0);
    updateTotal()
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateOptionPrice('extra-storage-cost', 100);
    updateTotal()
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    updateOptionPrice('extra-storage-cost', 180);
    updateTotal()
})

//select delivery time --------------
document.getElementById("delivery-option-1").addEventListener('click', function () {
    updateOptionPrice('delivery-cost', 0);
    updateTotal()

})
document.getElementById("delivery-option-2").addEventListener('click', function () {
    updateOptionPrice('delivery-cost', 20);
    updateTotal()
})

//update selected option price in table
function updateOptionPrice(option, cost) {
    const optionElement = document.getElementById(option);
    optionElement.innerText = cost;
}

// update total price --------------
function updateTotal() {
    const memoryCost = parseInt(document.getElementById('extra-memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalCost = 1299 + memoryCost + storageCost + deliveryCost;

    //update total price in table
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;

    //update total price in discounted price
    totalPrice = document.getElementById('discounted-price');
    totalPrice.innerText = totalCost;
}

//apply promo code --------------
document.getElementById('apply-promo-button').addEventListener('click', function () {
    const promoCodeInput = document.getElementById('promo-input');
    const promoCode = promoCodeInput.value;

    //clear promo code input field
    promoCodeInput.value = '';

    if (promoCode == 'stevekaku') {
        const currentTotalPrice = parseInt(document.getElementById('total-price').innerText);
        const discountValue = currentTotalPrice * .20;
        const newTotalPrice = currentTotalPrice - discountValue;

        const discountedTotal = document.getElementById('discounted-price');
        discountedTotal.innerText = newTotalPrice;
        alert('CONGRATULATIONS, you have got a 20% discount !!!');
    }
})
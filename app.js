// increase and dicrease case and phone amount
function updateProductAmount(product, perProductPrice, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update total amount
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * perProductPrice;

    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1399;
    const caseTotal = getInputValue('case') * 29;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 5;
    const totalPrice = subTotal + tax;

    // update on bottom
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductAmount('phone', 1399, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductAmount('phone', 1399, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductAmount('case', 29, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductAmount('case', 29, false);
})
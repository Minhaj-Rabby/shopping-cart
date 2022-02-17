

function subtotal(name, value, price) {
    const subTotal = document.getElementById(name);
    subTotal.innerText = price * value;
}
function calculate()
{
    const sub = document.getElementById('sub-total');
    const pTotal = document.getElementById('phone-total').innerText;
    const cTotal = document.getElementById('case-total').innerText;
    sub.innerText = parseFloat(pTotal) + parseFloat(cTotal);
    const subtotalValue =parseFloat(sub.innerText);
    const tax = document.getElementById('tax-total');
    const taxTotal=subtotalValue / 10;
    tax.innerText=taxTotal;
    const totalExpenseValue = document.getElementById('expence-total');
    totalExpenseValue.innerText=subtotalValue+taxTotal;
}
function updateNumberValue(product, isok, price) {

    const productNumber = document.getElementById(product + '-number');
    if (isok) {
        
        const updatedNumber = parseInt(productNumber.value) + 1;
        productNumber.value = updatedNumber;
        subtotal((product + '-total'), productNumber.value, price);
    }

    else {
        if (productNumber.value > 0) {
            const updatedNumber = parseInt(productNumber.value) - 1;
            productNumber.value = updatedNumber;
            subtotal((product + '-total'), productNumber.value, price);
        }

    }

    calculate();

}




document.getElementById('case-plus').addEventListener('click', function () {

    updateNumberValue('case', true, 60);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumberValue('case', false, 60);

})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumberValue('phone', true, 1210);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumberValue('phone', false, 1210);

})

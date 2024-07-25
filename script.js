function calculateTotalPrice() {
    // Get the price and quantity values for Spinach
    var price1 = parseFloat(document.getElementById('price1').textContent);
    var quantity1 = parseFloat(document.getElementById('quantity1').value);

    // Get the price and quantity values for Asparagus
    var price2 = parseFloat(document.getElementById('price2').textContent);
    var quantity2 = parseFloat(document.getElementById('quantity2').value);

    // Get the price and quantity values for Broccoli
    var price3 = parseFloat(document.getElementById('price3').textContent);
    var quantity3 = parseFloat(document.getElementById('quantity3').value);

    // Check if the quantity is a valid number, if not set it to 0
    if (isNaN(quantity1) || quantity1 < 0) {
        quantity1 = 0;
    }
    if (isNaN(quantity2) || quantity2 < 0) {
        quantity2 = 0;
    }
    if (isNaN(quantity3) || quantity3 < 0) {
        quantity3 = 0;
    }

    // Calculate the total price
    var totalPrice1 = price1 * quantity1;
    var totalPrice2 = price2 * quantity2;
    var totalPrice3 = price3 * quantity3;

    // Display the total price
    document.getElementById('tprice1').value = totalPrice1.toFixed(2);
    document.getElementById('tprice2').value = totalPrice2.toFixed(2);
    document.getElementById('tprice3').value = totalPrice3.toFixed(2);

    // Calculate and display the total amount
    var totalAmount = totalPrice1 + totalPrice2 + totalPrice3;
    document.getElementById('tamount').value = totalAmount.toFixed(2);

    // Calculate and display the discount
    var discount = parseFloat(document.getElementById('discount').value);
    if (isNaN(discount) || discount < 0) {
        discount = 0;
    }
    var discountAmount = (totalAmount * discount) / 100;
    document.getElementById('less').value = discountAmount.toFixed(2);

    // Calculate and display the amount due
    var amountDue = totalAmount - discountAmount;
    document.getElementById('due').value = amountDue.toFixed(2);

    // Calculate and display the change
    var cashUser = parseFloat(document.getElementById('cash').value);
    if (isNaN(cashUser) || cashUser < 0) {
        cashUser = 0;
    }
    var change = cashUser - amountDue;
    document.getElementById('change').value = change.toFixed(2);
}

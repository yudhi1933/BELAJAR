const cart = {}

function tambah(name, price) {
    if (cart[name]) {
        cart[name] += 1
        cart[name].totalPrice += price;
    } else {
        cart[name] = {
            quantity: 1,
            totalPrice: price
        }
    }
    masukKeranjang();
    total();
}

function masukKeranjang() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    for (const name in cart) {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${name} : ${cart[name].quantity} * ${cart[name].totalPrice}`;
        cartList.appendChild(cartItem);
    }
}

function total () {
    let total = 0;
    for (const name in cart) {
        total += cart[name].totalPrice;
    }
    document.getElementById('total').textContent = total;
}
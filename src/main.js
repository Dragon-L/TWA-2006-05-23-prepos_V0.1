function printInventory(inputs){
    var cartItems = [];
    var total = 0;
    cartItems = jasonToCartItems(inputs);
    total = calculateCartItems(cartItems);
    printCartItems(cartItems,total);
}
function jasonToCartItems(jasons) {
    var cartItems = [];
    for(var i = 0,len = jasons.length;i < len;i++){
        pushCartItem(jasons[i],cartItems);
    }
    return cartItems;
}
function pushCartItem(jason,array){
    if (array[jason.barcode]){
        array[jason.barcode].count++;
    } else {
        array[jason.barcode] = {};
        array[jason.barcode].name = jason.name;
        array[jason.barcode].count = 1;
        array[jason.barcode].unit = jason.unit;
        array[jason.barcode].price = jason.price;
        array[jason.barcode].barcode = jason.barcode;
    }
}
function calculateCartItems(cartItems) {
    for(i in cartItems){
        cartItems[i].subtotal = cartItems[i].count * cartItems[i].price;
    }
    var total = 0.00;
    for(i in cartItems){
        total += cartItems[i].subtotal;
    }
    return total;
}
function printCartItems(cartItems,total) {
    var out = "***<没钱赚商店>购物清单***\n";
    for(i in cartItems){
        out += "名称：" + cartItems[i].name +
            "，数量："+ cartItems[i].count + cartItems[i].unit +
            "，单价：" + cartItems[i].price.toFixed(2) +
            "(元)，小计：" + cartItems[i].subtotal.toFixed(2) +
            "(元)\n";
    }

    out += '----------------------\n' +
        '总计：'+total.toFixed(2) + '(元)\n' +
        '**********************';
    console.log(out);
}
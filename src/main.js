function printInventory(inputs){
    var cartItems = [];
    var total = 0;
    cartItems = jasonToCartItems(inputs);
    total = adjustCartItems(cartItems);
    printCartItems(cartItems,total);
}
function jasonToCartItems(jason) {
    var cartItems = [];
    for(var i = 0,len = jason.length;i < len;i++){
        pushcartItems(jason[i],cartItems);
    }
    return cartItems;
}
function pushcartItems(input,array){
    if (array[input.barcode]){
        array[input.barcode].count++;
    } else {
        array[input.barcode] = {};
        array[input.barcode].name = input.name;
        array[input.barcode].count = 1;
        array[input.barcode].unit = input.unit;
        array[input.barcode].price = input.price;
        array[input.barcode].barcode = input.barcode;
    }
}
function adjustCartItems(cartItems) {
    for(i in cartItems){
        cartItems[i].price = cartItems[i].price;
        cartItems[i].subtotal = (cartItems[i].count * cartItems[i].price);
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
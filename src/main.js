function printInventory(inputs){
    var goodsArray = [];
    var subtotal = 0;
    for(var i = 0,len = inputs.length;i < len;i++){
        insertGoods(inputs[i],goodsArray);
    }
    var out = "***<没钱赚商店>购物清单***\n";
    for(i in goodsArray){
        goodsArray[i].subtotal = goodsArray[i].count * goodsArray[i].price;
        out += "名称：" + goodsArray[i].name +"，数量："+goodsArray[i].count+
            goodsArray[i].unit+"，单价："+goodsArray[i].price.toFixed(2)+"(元)，小计："+
            goodsArray[i].subtotal.toFixed(2)+"(元)\n";
    }
    for(i in goodsArray){
        subtotal += goodsArray[i].subtotal;
    }
    out += '----------------------\n'+'总计：'+subtotal.toFixed(2)+'(元)\n'+'**********************';
    console.log(out);
}
function insertGoods(input,array){
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
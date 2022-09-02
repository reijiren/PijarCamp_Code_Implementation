function PijarFood(harga, promo, jarak, isPajak){
    //cek promo
    let diskon = 0;

    if(promo === "PIJARFOOD5"){
        if(harga >= 50000){
            diskon = harga * 0.5;
            
            if(diskon >= 50000) diskon = 50000;
        }
    }else if(promo === "DITRAKTIRPIJAR"){
        if(harga >= 25000){
            diskon = harga * 0.6;

            if(diskon >= 30000) diskon = 30000;
        }
    }

    //cek jarak
    let ongkir = jarak <= 2 ? 5000 : 5000 + ((jarak - 2) * 3000);

    //cek pajak
    let pajak = isPajak ? harga * 0.05: 0;

    //total
    let total = harga + ongkir + pajak - diskon;

    //return display
    return console.log(
        `Harga        : ${harga}\n` + 
        `Potongan     : ${diskon}\n` +
        `Ongkos kirim : ${ongkir}\n` +
        `Pajak        : ${pajak}\n` +
        `SubTotal     : ${total}`
    )
}

PijarFood(75000, "PIJARFOOD5", 5, true);
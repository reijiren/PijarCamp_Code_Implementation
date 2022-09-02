function divideAndSort(angka){
    if(typeof angka !== "number") return "Masukkan angka";
    let arrSplit = angka.toString().split("0");

    let res = "";
    for(let i = 0; i < arrSplit.length; i++){
        let temp = arrSplit[i];
        let splitTemp = temp.split("");
        let sortTemp = splitTemp.sort();

        res += sortTemp.join("");
    }

    return parseInt(res);
}

console.log(divideAndSort(5956560159466056));
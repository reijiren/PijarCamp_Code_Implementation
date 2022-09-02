// Palindrome
function palindrom(kata){
    kata = kata.toLowerCase();

    for(let i = 0; i < kata.length/2; i++){
        if(kata[i] !== kata[kata.length - 1 - i]){
            return console.log(kata + "Bukan Palindrom");
        }
    }
    return console.log(kata + " adalah Palindrom");
}

palindrom("Malam");

//Reverse Words
function reverseWords(kalimat){
    let arrSplit = kalimat.split(" ");
    let arrReverse = arrSplit.reverse();
    let arrJoin = arrReverse.join(" ");

    console.log(arrJoin);
}

reverseWords("Saya belajar Javascript");
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

/*const convertToRoman = (num) => {
    const numerals={
        1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"
    };

    let romanizedNums = "";
    const arabicNums = Object.keys(numerals).reverse();

    arabicNums.forEach(key => {
        while (key <= num) {
            romanizedNums += numerals[key];
            num -= key;
        }
    });
    return romanizedNums;
}*/

/*convertBtn.addEventListener("click", (num) => {
    const numerals={
        1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"
    };

    let romanizedNums = "";
    const arabicNums = Object.keys(numerals).reverse();
    num = number.value;

    if (!num) {
        output.textContent = "Please enter a valid number";
    }else{
        arabicNums.forEach((key) => {
            while (key <= num) {
                romanizedNums += numerals[key];
                num -= key;
            }
        });
        output.textContent = romanizedNums;
    }
});*/

convertBtn.addEventListener("click", (num) => {
    const numerals= [
        ["M" , 1000], ["CM" , 900], ["D" , 500], ["CD" , 400], ["C" , 100], ["XC" , 90], ["L" , 50], ["XL" , 40], ["X" , 10], ["IX" , 9], ["V" , 5], ["IV" , 4], ["I" , 1]
    ];

    let romanizedNums = [];
    num = number.value;

    if (!num) {
        output.textContent = "Please enter a valid number";
    }else if (num <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1.";
    }else if( num >= 4000){
        output.textContent = "Please enter a number less than or equal to 3999";
    }
    else{
        numerals.forEach((key) => {
            while (num >= key[1]) {
                romanizedNums.push(key[0]);
                num -= key[1];
            }
        });
        output.textContent = romanizedNums.join("");
    }
});
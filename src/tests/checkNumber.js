// checkNumber.js
function checkPositiveNumber(num) {
    if (num < 0) {
        throw new Error("Número negativo não permitido");
    }
    return num;
}

module.exports = checkPositiveNumber;

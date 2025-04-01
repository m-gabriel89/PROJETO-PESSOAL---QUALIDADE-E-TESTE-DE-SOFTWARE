// asyncFunction.js
function asyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Sucesso"), 2000);
    });
}

module.exports = asyncFunction;

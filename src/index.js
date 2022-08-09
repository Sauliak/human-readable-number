module.exports = function toReadable(number) {
    const singleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimalNumbers = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number < 20) {
        return singleNumbers[number];
    }
    if(number < 100 && number % 10 === 0) {
        return decimalNumbers[(number / 10) - 1];
    }
    if(number < 100 && number % 10 !== 0) {
        return decimalNumbers[Math.trunc((number / 10) - 1)] + ' ' + singleNumbers[(number % 10)];
    }
    if(number < 1000 && number % 100 === 0) {
        return singleNumbers[(number / 100)] + ' hundred';
    }
    if(number < 1000 && number % 100 !== 0 && number % 10 === 0) {
        return singleNumbers[Math.trunc((number / 100))] + ' hundred ' + decimalNumbers[((number / 10) - (Math.trunc(number / 100) * 10)) - 1];
    }
    if(number < 1000 && String(number)[1] === '0') {
        return singleNumbers[Math.trunc((number / 100))] + ' hundred ' + singleNumbers[(number % 100)];
    }
    if(number < 1000 && String(number)[1] === '1') {
        return singleNumbers[Math.trunc((number / 100))] + ' hundred ' + singleNumbers[(number % 100)];
    }
    if(number < 1000 && number % 100 !== 0 && number % 10 !== 0) {
        return singleNumbers[Math.trunc((number / 100))] + ' hundred ' + decimalNumbers[Math.trunc(((number / 10) - (Math.trunc(number / 100) * 10)) - 1)]  + ' ' + singleNumbers[(number % 10)];
    }
    if(number === 1000) {
        return 'one thousand';
    }
}

module.exports = function getZerosCount(number, base) {
    let i = Math.floor(Math.log(number)/Math.log(base));
    console.log(i);
    console.log(number / Math.pow(base, i));
    var zero_number = 0,
        slag = 0,
        denominator = 5,
        power = 1;
    while (true) {
        denominator = Math.pow(5, power);
        slag = Math.floor(number / denominator); 
        if (slag < 1) break;
        else zero_number += slag;
        power++;
    }
    console.log(zero_number / i);
    return zero_number;
}
function maxPowerOf(p, n)
{
    var k = 0, powerOfP = 1;
    while (true)
    {
        powerOfP *= p;
        var addend = Math.floor( n / powerOfP);
        if (addend == 0)
            return k;
        k += addend;
    }
}

console.log(maxPowerOf(5, 10) / 2);
getZerosCount(93443454, 194);
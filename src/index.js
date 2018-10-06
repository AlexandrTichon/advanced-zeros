module.exports = function getZerosCountBase(number, base){
    baseProp = primeFactors(base);
    //console.log(baseProp);
    answer = [];
    for (let i = 0; i < Object.keys(baseProp).length; i++) {
        answer[i] = getZerosCount(number, baseProp['number' + i].numb);
        if (baseProp['number' + i].pow > 1) answer[i] = Math.floor(answer[i] / baseProp['number' + i].pow);
    }
    //console.log(Math.min(...answer));
    return Math.min(...answer);
}


function getZerosCount(number, _denominator) {
    var zero_number = 0,
      slag = 0,
      denominator = _denominator;
      power = 1;
  while (true) {
      denominator = Math.pow(_denominator, power);
      slag = Math.floor(number / denominator); 
      if (slag < 1) break;
      else zero_number += slag;
      power++;
    }
    //console.log(zero_number);
    return zero_number;
}


function primeFactors(number){
    var copy_number = number;
    var answer_mass = [];
    let i=2, iter = 0;
    while (i <= number)
    {
        if (number % i == 0)
        {
            answer_mass[iter] = i;
            number /= i;
            iter++;
        }
        else i++;
    }
    //console.log(answer_mass);
    answer = { };
    count = 0;
    for (let i = 0; i < answer_mass.length; i++) {
        primeFactor = answer_mass[i];
        var power = 1;
        for (let j = i + 1; j < answer_mass.length; j++)
        {
            if (answer_mass[j] === primeFactor) power++;
            else break;
        }
        ans_obj = {
            numb: primeFactor,
            pow: power,
        }
        answer['number' + count] = ans_obj;
        count++;
        i += power - 1;
    }
    //console.log(answer);
    return answer;
}
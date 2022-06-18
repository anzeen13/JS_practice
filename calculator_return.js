const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    divide: function(a, b){
        return a / b;
    },
    times: function(a, b){
        return a * b;
    },
    power: function(a, b){
        return a ** b;
    },
}

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, addResult); 
const powerResult = calculator.power(divideResult, minusResult);

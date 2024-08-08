const sumAll = function(first, second) {
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR";
    }
    let output = 0;
    let [min, max] = [0, 0]
    if (first < second) {
        [min, max] = [first, second];
    } else if (second < first) {
        [min, max] = [second, first];
    } else {
        return first;
    }

    for (let i = min; i <= max; i ++) {
        output += i;
    }
    
    return output;

};

// Do not edit below this line
module.exports = sumAll;

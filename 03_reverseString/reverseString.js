const reverseString = function(word) {

    final = "";
    for (let i = word.length; i > 0; i--) {
        final += word[i - 1];
    }

    return final;
};

// Do not edit below this line
module.exports = reverseString;

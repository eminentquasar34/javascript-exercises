const removeFromArray = function(array, ...args) {
    const final = [];
    let deleted = false;
    for (let l = 0; l <= array.length - 1; l++) {
        deleted = false;
        for (let i = 0; i <= args.length - 1; i ++) {
            if (array[l] === args[i]) {
                deleted = true;
            }
        }

        if (!deleted) {
            final.push(array[l]);
        }
    }
    return final;
};


// Do not edit below this line
module.exports = removeFromArray;

const repeatString = function(word, num) {
    if (num == 0) {
        return ; 
    }
    let letter ;

    for (let i = 0 ; i < num ; i ++ ) {
        letter += word;
    }
    return letter;
};

// Do not edit below this line
module.exports = repeatString;

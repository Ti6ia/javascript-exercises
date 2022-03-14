const str = "";
/*const number = Math.floor(Math.random() * 1000);*/
const n = 10;
const repeatString = function(str, n) {
    if(n < 0){
        return "ERROR";
    }
    let tmp = "";
    for(let i = 0; i < n; i++){
        tmp += str;
    }
    return tmp;
};

// Do not edit below this line
module.exports = repeatString;

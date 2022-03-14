n1 = 10;
n2 = [90,1];

const sumAll = function(n1, n2) {
    if(n1<0 || n2<0 || typeof(n1) != "number" || typeof(n2) != "number"){
        return "ERROR";
    }
    if(n1>n2){
        console.log("n1<n2");
        let tmp = n1;
        n1 = n2;
        n2 = tmp;
    }

    let res = n1;
    for (i=n1; i<n2; i++){
        res += i+1;
    }
    return res;
};

//console.log(sumAll(n1,n2));

// Do not edit below this line
module.exports = sumAll;

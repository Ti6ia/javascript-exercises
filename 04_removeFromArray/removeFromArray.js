let array = [1,2,3,4];
let index = 2;
let valuesToRemove = 2;

let removeFromArray = (array, index, valuesToRemove) =>{
    array.splice(index-1, valuesToRemove);
    return array;
};

//console.log(removeFromArray(array,index, valuesToRemove));

// Do not edit below this line
module.exports = removeFromArray;



function copy(list, funcVal) {  // передаем в функцию массив и дополнительную функцию 
    
    let result = [];
    for(let i = 0; i < list.length; i++)
        result[i] = funcVal(list[i]); 
    return result;
}

let list = [5,7,10,3,1];
let newList = copy(list, function(value){return value * 10;});

console.log(list);
console.log(newList);
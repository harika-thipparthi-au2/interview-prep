function smallestMissingInt(inputArray) {
    var arr = [];
    for(let i = 0; i < inputArray.length; i++){     
        if(inputArray[i] > 0){
            arr[inputArray[i]-1] = inputArray[i];
        }
    }
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == undefined){
            return i + 1;
        }
    }
    return arr.length + 1;
};

let inputArray=[7,8,9,11,12];
console.log(smallestMissingInt(inputArray));

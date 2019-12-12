function profit(array){
  let diff = []
  for(var i=0; i<array.length; i++){
    for(var j=i+1; j<array.length; j++){
      diff.push(array[j]-array[i]);
    }
  }
   console.log(diff);
  console.log(Math.max(...diff));
}
profit([7,1,5,3,6,4]);

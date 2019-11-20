//Temporal Dead Zone semantics forbids accessing the variables before its declaration

const pi=3.14;
pi;  //wrks

pi;//doesn't wrk;throws Ref err;====> SO THIS IS IN "TDZ"
const pi = 3.14;


count;  // TDZ
let count;
count=10;


let count;
count;  //works; ansr will be undefined;
count=10;

let count;
count=10;
count;   //works fine

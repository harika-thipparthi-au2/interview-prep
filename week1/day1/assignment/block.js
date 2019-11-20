//function scoped

for (var i = 0; i < 5; i++) {
  // console.log(i+"---");
	setTimeout(function() { console.log(i); }, i * 1000 );
}


//block scoped

for (let i = 0; i < 5; i++) {
  // console.log(i+"---");
	setTimeout(function() { console.log(i); }, i * 1000 );
}

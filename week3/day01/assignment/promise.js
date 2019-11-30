var IsEvenOrOdd = new Promise(
	function (resolve, reject) {
		var heightarray = [];

		for (var i = 1; i <= 5; i++) {
			let random = Math.floor(Math.random() * 100);
			$.ajax({
				'url': 'https://pokeapi.co/api/v2/pokemon/' + random,
				'type': 'GET',
				'datatype': 'JSON',
				success: function (data) {
					// console.log(data.height);
					heightarray.push(data.height);

					if (heightarray.length == 5) {
						console.log(heightarray);
						var sum = heightarray.reduce((total, num) => total + num);
						console.log(sum);
						if (sum % 2 == 0)
							resolve(sum);
						else
							reject(sum);
					}
				}
			});
		}

	}
);

IsEvenOrOdd.then((sum) => alert("Promise Fulfilled " + sum)).catch((error) => alert("Promise rejected " + error));

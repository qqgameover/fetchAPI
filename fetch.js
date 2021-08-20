const url = "http://api.coinlayer.com/api/live?" + secret;

fetch(url)
	.then(response => response.json())
	.then(data => sortData(data))

function sortData(data) {
	if (data.success) {
		data.rates.forEach(rates => {
			console.log(rates)
		});
	} else {
		throw console.error("Something went wrong");
	}
}
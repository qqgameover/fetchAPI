const url = "http://api.coinlayer.com/api/live?" + secret;

let dataSave;

const fetchedData = fetch(url)
	.then(response => response.json())
	.then(data => data.rates)
	.then(data => console.log(data))

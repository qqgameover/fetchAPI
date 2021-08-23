const url = "http://api.coinlayer.com/api/live?" + secret;

let dataSave;

const fetchedData = fetch(url)
	.then(response => response.json())
	.then(data => data.rates)
	.then(data => console.log(data))

async function fetchData() {
	let response = await fetch(url)
	let data = await response.json();
	dataSave = data.rates;
	console.log(dataSave)
}
async function filterData() {
	await fetchData()
	const toArray = Object.entries(dataSave);
	console.log(toArray)
	const filteredData = toArray.filter(toArray => toArray[1] > 10);
	console.log(filteredData)
}

async function tryCatch() {
	const response = await fetch(url)
	const data = await response.json();
	dataSave = data.rates;
	console.log(dataSave)
		.catch(err => console.log(err));
}

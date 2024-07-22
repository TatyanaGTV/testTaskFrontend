
	let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1'
   let result = fetch(url)
	result.then(response => response.json())
	.then((json) => {
			console.log(json)
		let data = json;
		let counter = 0;
			data.forEach(item => {
				let currencyId = item.id;
				console.log(currencyId)
				let currencySymbol = item.symbol;
				console.log(currencySymbol)
				let currencyName = item.name;
				console.log(currencyName)

				let tableElement = document.getElementsByTagName('table')[0];
				let table = document.createElement('tbody');
				table.className = 't-body';
				table.innerHTML = '';
				let rowElement = table.insertRow();
				rowElement.className = 'table-cell';
				rowElement.setAttribute('data-id', counter++);
				let cellElement_1 = rowElement.insertCell();
				let cellElement_2 = rowElement.insertCell();
				let cellElement_3 = rowElement.insertCell();
				cellElement_1.innerText = currencyId;
				cellElement_2.innerHTML = currencySymbol;
				cellElement_3.innerHTML = currencyName;
				if (counter <= 5){
					rowElement.style.backgroundColor = '#9191f2'
				}
				if (currencySymbol === 'usdt'){
					rowElement.style.backgroundColor = '#73ae73'
				}
				table.appendChild(rowElement);
				tableElement.appendChild(table);
			});
	    });






'user strict'
var fs = require('fs');

function personalTax() {
	var data = fs.readFileSync("../documents/个税税率.csv", 'utf-8');
	var buff = data.split('\n');
	var salary = buff[0].split(',');
	var tax = buff[1].split(',');

	var map = new Map();
	for (var i = 0; i < salary.length; i++) {
		map.set(salary[i], tax[i]);
	}

	console.log(map);
	return map;
}

module.exports = personalTax;

'use strict'
var fs = require('fs');

function fiveInsurance() {
	var data = fs.readFileSync("../documents/五险费率.csv", 'utf-8');
	var buff = data.split("\n");
	var company = new Map();
	var individual = new Map();

	var item = buff[0].split(',');
	var companyRateBuff = buff[1].split(',');
	var individualRateBuff = buff[2].split(',');
	for (var i = 1; i < item.length; i++) {
		company.set(item[i], companyRateBuff[i]);
		individual.set(item[i], individualRateBuff[i]);
	}

	return [company, individual];
}

module.exports = fiveInsurance;

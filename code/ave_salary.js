'use strict'

var fs = require('fs');

function calculate() {
	var aveSalary;

	// read data from file
	var data = fs.readFileSync('../documents/本市职工月平均工资.csv', 'utf-8');

	var text = data.toString('utf-8');
	var buff = text.split("\n");
	
	// extract salary
	aveSalary = buff[1];

	var max = aveSalary * 3;
	var min = aveSalary * 0.6;
	return [min, max];
}

module.exports = calculate;

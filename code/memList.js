'use strict'
var fs = require('fs');

function memList() {
	var data = fs.readFileSync("../documents/员工名单.csv", 'utf-8');
	var buff = data.split("\n");

	var map = new Map(); // used to store staff data
	for (var i = 1; i < buff.length; i++) {
		var staff = buff[i].split(',');
		var name = staff[0];
		var info = [staff[1], staff[2], staff[3]]; // [basic, KPI, fund]

	  map.set(name, info);
	}
	return map;
}

module.exports = memList;

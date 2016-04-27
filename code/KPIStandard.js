'use strict'

var fs = require('fs');

function standard() {
	var data = fs.readFileSync("../documents/绩效工资标准.csv", 'utf-8');
	
	var buf = data.split('\n');
	var grade = buf[0].split(',');
	var score = buf[1].split(',');
	
	// creat map to store grading information
	var map = new Map();
	for (var i = 0; i < grade.length; i++) {
		map.set(grade[i], score[i]);
	}
	return map;
}

module.exports = standard;

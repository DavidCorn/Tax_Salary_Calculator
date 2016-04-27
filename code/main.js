'use strict'
var calculate = require('./ave_salary');
var memList = require('./memList');
var fiveInsurance = require('./fiveInsurance');
var calFiveInsOneFond = require('./calFiveInsOneFond');
var printResult = require('./printResult');
var calIncome = require('./calIncome');

function main() {
	if (process.argv.length == 2) {
		readFromFile();
	} else if (process.argv.length == 5) {
		readFromCommand();
	} else {
		console.log("invalid number of input! Valid should be:  [岗位工资] [绩效评分] [住房公积金百分比]");
	}
}

function readFromFile() {
	// fetch salary range
	var salaryRange = calculate();

	// fetch staff information
	var staffMap = memList();
	var fiveIns = fiveInsurance(); // [company, individual]
	staffMap.forEach(function (value, key, map){
		// fetch standard
		var info = memList().get(key);
		var rate = info[1];
  
		// calculate five insurance and house fond	
		var householdRate = parseFloat(memList().get(key)[2]);
		var insFondInfo = calFiveInsOneFond(key, parseInt(info[0]), householdRate);
		var income = calIncome(info[0], rate, insFondInfo);

		printResult(key, insFondInfo, income); // print it on the screen
	});
}

function readFromCommand() {
	var array = process.argv;
  var name = "我";
	var salary = parseFloat(array[2]);
	var rate = array[3];
	var householdRate = parseFloat(array[4]);
  
	// check if inputs are valid
	if (rate < 'A' || rate > 'D') {
		console.log("invalid rate! Please re-enter.");
		return;
	}
	if (householdRate > 0.8 || householdRate < 0) {
		console.log("invalid householdRate! Please re-enter.");
		return;
	}

	var insFondInfo = calFiveInsOneFond(name, salary, householdRate);
	var income = calIncome(salary, rate, insFondInfo);

	printResult(name, insFondInfo, income);
}

main();

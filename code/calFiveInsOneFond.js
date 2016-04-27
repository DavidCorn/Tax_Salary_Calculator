'use strict'
var fiveInsurance = require('./fiveInsurance');
var calculate = require('./ave_salary');
var memList = require('./memList');

function calFiveInsOneFond(name, salary, householdRate) {
	var insurance = fiveInsurance();
	var min = calculate()[0];
	var max = calculate()[1];

	var revisedSalary = salary;
  var total = 0;
	var company5Ins1FondTax = new Map();

	if (salary <= min) {
		revisedSalary = min;
	}
	if (salary >=  max) {
		revisedSalary = max;
	}

	// for comany
	for (var element of insurance[0]) {
		company5Ins1FondTax.set(element[0], element[1] * revisedSalary);
	}
	// one fond
	var household = householdRate * revisedSalary;
	household = household.toFixed(2);
	company5Ins1FondTax.set("住房", parseFloat(household));
	// total
	for (var money of company5Ins1FondTax) {
		total += money[1];
	}
	total = total.toFixed(2);
	company5Ins1FondTax.set("总计", parseFloat(total));

	// for individual
	var individual5Ins1FondTax = new Map();
	for (var element of insurance[1]) {
		individual5Ins1FondTax.set(element[0], element[1] * revisedSalary);
	}
	// one fond
	individual5Ins1FondTax.set("住房", parseFloat(household));
	// total
	total = 0;
	for (var money of individual5Ins1FondTax) {
		total += money[1];
	}
	individual5Ins1FondTax.set("总计", parseFloat(total.toFixed(2)));

	return [company5Ins1FondTax, individual5Ins1FondTax];
}

module.exports = calFiveInsOneFond;

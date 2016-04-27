'use strict'
var standard = require('./KPIStandard');

function calIncome(salary, rate, insFondInfo) {
	var KPISalary = parseFloat(standard().get(rate));
	var individualFund = parseFloat(insFondInfo[1].get("总计"));
	var companyFund = parseFloat(insFondInfo[0].get("总计"));
	
	var beforeTaxSalary = parseFloat(salary) + KPISalary - individualFund;
  var tax = calTax(beforeTaxSalary).toFixed(2);
  var afterTaxSalary = beforeTaxSalary - tax;
	afterTaxSalary = afterTaxSalary.toFixed(2);

	return [salary, KPISalary, individualFund, companyFund, beforeTaxSalary, tax, afterTaxSalary];
}

function calTax(beforeTaxSalary) {
	var tax = 0;
	if (beforeTaxSalary <= 3500) {
		return tax;
	}

	beforeTaxSalary -= 3500;

  if (beforeTaxSalary <= 1500) {
		tax = beforeTaxSalary * 0.03;
	} else if (beforeTaxSalary > 1500 && beforeTaxSalary <= 4500) {
		tax = 1500 * 0.03 + (beforeTaxSalary - 1500) * 0.1;
	} else if (beforeTaxSalary > 4500 && beforeTaxSalary <= 9000) {
		tax = 1500 * 0.03 + 3000 * 0.1 + (beforeTaxSalary - 4500) * 0.2;
	} else if (beforeTaxSalary > 9000 && beforeTaxSalary <= 35000) {
		tax = 1500 * 0.03 + 3000 * 0.1 + 4500 * 0.2 + 
			(beforeTaxSalary - 9000) * 0.25;
	} else if (beforeTaxSalary > 35000 && beforeTaxSalary<= 55000) {
		tax = 1500 * 0.03 + 3000 * 0.1 + 4500 * 0.2 + 26000 * 0.25 + 
			(beforeTaxSalary - 35000) * 0.3;
	} else if (beforeTaxSalary > 55000 && beforeTaxSalary <= 80000) {
		tax = 1500 * 0.03 + 3000 * 0.1 + 4500 * 0.2 + 26000 * 0.25 + 
			20000 * 0.3 + (beforeTaxSalary - 55000) * 0.35;
	} else if (beforeTaxSalary > 80000) {
		tax = 1500 * 0.03 + 3000 * 0.1 + 4500 * 0.2 + 26000 * 0.25 + 
			20000 * 0.3 + 25000 * 0.35 + (beforeTaxSalary - 80000) * 0.45;
	}

	return tax;
}

module.exports = calIncome;

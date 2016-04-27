'use strict'

function printResult(name, insFondInfo, income) {
	/* ------------------------------------------------*/
	// print five insurance and one fond
	console.log("|  | " + name + " | 单位");
	console.log("|");

	console.log("| 养老 | " + insFondInfo[1].get("养老保险") 
			+ " | " + insFondInfo[0].get("养老保险"));
	console.log("| 医疗 | " + insFondInfo[1].get("医疗保险")
			+ " | " + insFondInfo[0].get("医疗保险"));
	console.log("| 失业 | " + insFondInfo[1].get("失业保险")
			+ " | " + insFondInfo[0].get("失业保险"));
	console.log("| 工伤 | " + insFondInfo[1].get("工伤保险")
			+ " | " + insFondInfo[0].get("工伤保险"));
	console.log("| 住房 | " + insFondInfo[1].get("住房")
			+ " | " + insFondInfo[0].get("住房"));
	console.log("| 总计 | " + insFondInfo[1].get("总计")
			+ " | " + insFondInfo[0].get("总计"));

	/* ------------------------------------------------*/
	// print income details
	console.log("");
	console.log("| 姓名 | 岗位工资 | 绩效工资 | 五险一金（个人）|五险一金（单位）|税前收入|扣税|税后收入");
	console.log("|");
	console.log("| " + name + " |" + income[0] + "|" + income[1] + "|" + 
			income[2] + "|" + income[3] + "|" + income[4] + "|" + income[5] + 
			"|" + income[6]);
	console.log("");
	console.log("----------");
	console.log("");
}

module.exports = printResult;

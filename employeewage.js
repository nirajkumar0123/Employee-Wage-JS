// UC1 - check employee is present or absent

const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
}
else {
    console.log("Employee is Present");
}

// UC2 - Calculate daily employee wage based on part time or full time work

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);

// UC3 - Refactor the code to write a function to get work hours

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let employHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
employHrs = getWorkingHours(empCheck);
let employWage = employHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + employWage);

// UC4 - Calculate wages for a month assuming 20 working days in a month

const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total hours: " + totalEmpHrs + " Total wage: " + totalEmpWage);
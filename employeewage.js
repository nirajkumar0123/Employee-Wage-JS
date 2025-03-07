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

// UC5 - Calculate wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const MAX_HRS_IN_MONTH = 160;
const MAX_WORKING_DAYS = 20;
let totalEmpHrs1 = 0;
let totalWorkingDays = 0;
while (totalEmpHrs1 <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs1 += getWorkingHours(empCheck);
}
let totalEmpWage1 = totalEmpHrs1 * WAGE_PER_HOUR;
console.log("Total days: " + totalWorkingDays + " Total hours: " + totalEmpHrs1 + " Total wage: " + totalEmpWage1);

//UC6 - Store the daily wage along with the total wage
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let totalEmpWage2 = calcDailyWage(totalEmpHrs);
console.log("Total days: " + totalWorkingDays + " Total hours: " + totalEmpHrs + " Total wage: " + totalEmpWage2);

// UC7A - Calculate total wage using array forEach traversal or reduce method
let totalEmpWage3 = 0;
function sum(dailyWage) {
    totalEmpWage3 += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total days: " + totalWorkingDays + " Total hours: " + totalEmpHrs + " Total wage: " + totalEmpWage3);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Emp wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC7B - Show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily wage map: ");
console.log(mapDayWithWageArr);

// UC7C - Show days when full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage) {
    return parseInt(dailyWage.split(" = ")[1]) === FULL_TIME_HOURS * WAGE_PER_HOUR;
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Days with full time wage: ");
console.log(fullDayWageArr);

// UC7D - Find the first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return parseInt(dailyWage.split(" = ")[1]) === FULL_TIME_HOURS * WAGE_PER_HOUR;
}
console.log("First time full time wage was earned on day: " + mapDayWithWageArr.find(findFullTimeWage));

// UC7E - Check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("Check all elements have full time wage: " + 
    mapDayWithWageArr
        .filter(dailyWage => parseInt(dailyWage.split(" = ")[1]) > 0) 
        .every(dailyWage => parseInt(dailyWage.split(" = ")[1]) === 160) 
);

// UC7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if any part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days the employee worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC8 - Store the day, hours worked and wage earned in a single object
let empDailyHrsMap = new Map();
let empDailyWageMap = new Map();
totalEmpHrs = 0;
totalWorkingDays = 0;
empDailyWageArr = new Array();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }

    totalEmpHrs += empHrs;
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

// Fixing reduce function
function totalWages(total, daily) {
    return total + daily;
}

console.log("Emp wage map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));


// UC9 - Arrow functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Total hours: " + totalHours + " Total wage: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays);

// UC10 - Object Creation
let empDailyHrsAndWageArr = new Array();
totalEmpHrs = 0;
totalWorkingDays = 0;
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);

    // Ensure we don't exceed MAX_HRS_IN_MONTH
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }

    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return `\nDay ${this.dayNum} => Working Hours: ${this.dailyHours}, Wage Earned: ${this.dailyWage}`;
        },
    });
}

console.log("Daily hours worked and wage earned: " + empDailyHrsAndWageArr);

// UC 11A to UC 11D - Object operations using arrow functions
let totalWages11 = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours11 = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Total hours: " + totalHours11 + " Total wage: " + totalWages11);

process.stdout.write("Logging full work days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDays11 = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nPart working days: " + partWorkingDays11);

let nonWorkingDays11 = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Non working days: " + nonWorkingDays11);

// UC11b - Create Employee Payroll Data
class EmployeePayrollData {
    id;
    salary;
    
    // Constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
   // Getter and setter
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    // Method
    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

// UC12 - Extend Employee Payroll Data to store
class EmployeePayrollData12 {
    id;
    salary;
    gender;
    startDate;

    // Constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // Getter and setter
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    // Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" +
            this.salary + ","+
            "gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayrollData12 = new EmployeePayrollData12(1, "Mark", 30000, "M", new Date());
console.log(employeePayrollData12.toString());
let newEmployeePayrollData = new EmployeePayrollData12(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());

// UC13 - Use Regex to validate name and throw error if name is incorrect
class EmployeePayrollData13 {
    id;
    salary;
    gender;
    startDate;

    // Constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // Getter and setter
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) this._name = name;
        else throw "Name is incorrect!";
    }

    // Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" +
            this.salary + ","+
            "gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayrollData13 = new EmployeePayrollData13(1, "Mark", 30000, "M", new Date());
console.log(employeePayrollData13.toString());
try {
    employeePayrollData13.name = "john";
    console.log(employeePayrollData13.toString());
}
catch (e) {
    console.error(e);
}
let newEmployeePayrollData13 = new EmployeePayrollData13(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData13.toString());

// UC14 - Ability to extend Employee Payroll Data to validate
class EmployeePayrollData14 {
    // Constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = this.validateId(id);
        this.name = this.validateName(name);
        this.salary = this.validateSalary(salary);
        this.gender = this.validateGender(gender);
        this.startDate = this.validateStartDate(startDate);
    }

    // Validate Employee ID (must be a positive non-zero number)
    validateId(id) {
        if (typeof id !== "number" || id <= 0) throw new Error("Invalid ID: Employee ID must be a positive non-zero number.");
        return id;
    }

    // Validate Name (must start with a capital letter and have at least 3 characters)
    validateName(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) throw new Error("Invalid Name: Name must start with a capital letter and have at least 3 characters.");
        return name;
    }

    // Validate Salary (must be a positive number)
    validateSalary(salary) {
        salary = Number(salary); // Convert to number if string
        if (isNaN(salary) || salary <= 0) throw new Error("Invalid Salary: Salary must be a positive non-zero number.");
        return salary;
    }

    // Validate Gender (must be 'M' or 'F')
    validateGender(gender) {
        if (gender !== "M" && gender !== "F") throw new Error("Invalid Gender: Gender must be 'M' or 'F'.");
        return gender;
    }

    // Validate Start Date (must not be a future date)
    validateStartDate(startDate) {
        let today = new Date();
        if (!(startDate instanceof Date) || startDate > today) throw new Error("Invalid Start Date: Date cannot be in the future.");
        return startDate;
    }

    // Method to return employee details
    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${empDate}`;
    }
}

// Try-catch is now outside the constructor
function createEmployee(id, name, salary, gender, startDate) {
    try {
        let employee = new EmployeePayrollData14(id, name, salary, gender, startDate);
        console.log(employee.toString());
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Valid Employee
createEmployee(1, "John", 50000, "M", new Date("2023-01-15"));

// Invalid Employee (ID is 0)
createEmployee(0, "Jane", 60000, "F", new Date("2024-06-10"));





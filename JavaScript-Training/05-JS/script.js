let students = [
    { name: "Geyon", mark: 95, age: 21 },
    { name: "Nobita", mark: 16, age: 21 },
    { name: "Suzuka", mark: 72, age: 20 },
    { name: "Sooniyo", mark: 65, age: 21 },
    { name: "Doremon", mark: 79, age: 22 }
];

// 1. forEach() 
console.log("All Students:");
students.forEach(student => {
    console.log(student.name, student.mark);
});

// 2. filter() 
let passed = students.filter(student => student.mark >= 50);
console.log("Passed Students:", passed);

// 3. find() 
let topper = students.find(student => student.mark >= 80);
console.log("First Topper:", topper);

// 4. reduce() 
let total = students.reduce((sum, student) => {
    return sum + student.mark;
}, 0);
console.log("Total Marks:", total);

// 5. some() 
let hasLowMark = students.some(student => student.mark < 35);
console.log("Has mark below 35:", hasLowMark);

// 6. every() 
let allPassed = students.every(student => student.mark >= 50);
console.log("All Passed:", allPassed);

// 7. sort() 
let sorted = [...students].sort((a, b) => b.mark - a.mark);
console.log("Sorted by Marks:", sorted);

// 8. map()
let number = [2,4,6,8,10];
let res = number.map(num => num-1);
console.log("map result :", res);


let fruits = ["Apple", "Mango", "Orange", "Grapes"];

// 1. toString()
let result1 = fruits.toString();
console.log("toString():", result1);
console.log(typeof result1);

// 2. join() 
console.log("join():", fruits.join(" - "));
console.log("join with comma:", fruits.join(", "));
console.log("join without separator:", fruits.join(""));



let text = "  JavaScript Programming Java ";

// charAt()
console.log("charAt:", text.charAt(2));

// charCodeAt()
console.log("charCodeAt:", text.charCodeAt(2));

// length
console.log("Length:", text.length);

// slice()
console.log("slice:", text.slice(2, 12));

// toUpperCase()
console.log("Uppercase:", text.toUpperCase());

// toLowerCase()
console.log("Lowercase:", text.toLowerCase());

// trim()
console.log("Trim:", text.trim());

// includes()
console.log("Includes JavaScript:", text.includes("JavaScript"));

// split()
console.log("Split:", text.trim().split(" "));

// indexOf()
console.log("Index of Script:", text.indexOf("Script"));

// replace()
console.log("Replace:", text.replace("JavaScript", "Python"));

// replaceAll()
console.log("Replace All :", text.replaceAll("Java", "Python"));

// startsWith()
console.log("Starts with spaces:", text.startsWith("  "));

// endsWith()
console.log("Ends with spaces:", text.endsWith("  "));


let today = new Date();

// Current date and time
console.log("Current Date:", today);

// Individual date and time values
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// Convert date to readable strings
console.log("Date String:", today.toDateString());
console.log("Time String:", today.toTimeString());
console.log("ISO String:", today.toISOString());

// Create a specific date
let birthday = new Date("2003-11-30");
console.log("Birthday:", birthday.toDateString());

// Compare dates
let futureDate = new Date("2027-01-01");
if (today < futureDate) {
    console.log("The target date is in the future");
}

// set
today.setFullYear(2003);
today.getDate(15);
today.setMonth(10);
today.setHours(23);
today.setMinutes(12);
today.setSeconds(20);
console.log("Set Today" , today);

// ============ TASK 7.1: VARIABLES ============

// 👇 REPLACE the values in quotes/numbers below with YOUR real details
let myName = "Clinton Hamisi";  
let myAge = 23;                       
const myBirthYear = 2003;             

// 👇 These are YOUR choices — change if you want, but they're already fine
let isStudent = true;                              
let favoriteColors = ["blue", "white", "black"]; 
let todaysDate = new Date();                       

// 👇 LEAVE ALL OF THIS UNCHANGED — it's just printing your variables
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Birth Year:", myBirthYear);
console.log("Is Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", todaysDate.toDateString());

console.log(typeof myName);        // string
console.log(typeof myAge);         // number
console.log(typeof isStudent);     // boolean
console.log(typeof favoriteColors);// object (arrays are objects)

let score = 100;
score = 150;
console.log("Score:", score);

const PI = 3.14159;
console.log("PI:", PI);

// ============ TASK 7.2: OPERATORS ============

// Number operations
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);

// String operations
let firstName = "Clinton";     
let lastName = "Hamisi";       
let fullName = firstName + " " + lastName;
console.log(`Hello, ${firstName}!`);
console.log(`${firstName} has ${firstName.length} letters.`);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes(firstName));

// Comparison & logical
console.log(5 > 3, 5 < 3, 5 === 5, 5 == "5", 5 !== 3);
console.log(true && true, true || false, !true);

// CHALLENGE — your age calculations
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = myBirthYear + 100;
console.log("Age in days ~", ageInDays);
console.log("Age in hours ~", ageInHours);
console.log("Year I turn 100:", yearTurn100);

// ============ TASK 7.3: FUNCTIONS ============

function calculateArea(width, height) { return width * height; }
function celsiusToFahrenheit(c) { return (c * 9/5) + 32; }
function isEven(num) { return num % 2 === 0; }
function getInitials(fullName) {
    return fullName.split(" ").map(w => w[0].toUpperCase()).join("");
}
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(5, 8));
console.log(celsiusToFahrenheit(25));
console.log(isEven(10), isEven(7));
console.log(getInitials("Clinton Hamisi"));  // ← your name
console.log(reverseString("JavaScript"));

// Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet());
console.log(greet("Friend"));

// Calculate tip
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}
console.log("Tip:", calculateTip(2000), calculateTip(2000, 20));

// ============ TASK 7.4: CONTROL FLOW ============

function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
console.log("Grade for 85:", getGrade(85));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}
console.log(getDayName(3));

// 1. Numbers 1-100
for (let i = 1; i <= 100; i++) console.log(i);

// 2. Even numbers 1-50
for (let i = 2; i <= 50; i += 2) console.log(i);

// 3. FizzBuzz 1-100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// 4. Triangle of stars
for (let i = 1; i <= 5; i++) console.log("*".repeat(i));

//Mini-project : Calculator

// ============ CALCULATOR ============

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) {
    if (y === 0) return "Error: Cannot divide by zero";
    return x / y;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message
console.log(calculate(2, "**", 3));  // 8
console.log(calculate(10, "%", 3));  // 1

// ============ TASK 8.1: ARRAYS ============

const nums = [1, 2, 3, 4, 5, -2, 12, 7];

const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

const positives = nums.filter(n => n >= 0);
console.log("No negatives:", positives);

const firstOver10 = nums.find(n => n > 10);
console.log("First > 10:", firstOver10);

const product = nums.reduce((acc, n) => acc * n, 1);
console.log("Product:", product);

// ============ TASK 8.2: OBJECTS ============

const me = {                          
    firstName: "Clinton",
    lastName: "Hamisi",
    age: 23,
    isStudent: true,
    hobbies: ["music", "coding"],
    address: { city: "Nairobi", country: "Kenya" }
};

console.log(me.firstName);
console.log(me["lastName"]);
console.log(me.address.city);

const calcObj = {
    add(x, y) { return x + y; },
    subtract(x, y) { return x - y; },
    multiply: (x, y) => x * y
};
console.log(calcObj.add(5, 3));

const subjectScores = { math: 95, english: 88, science: 92 };
console.log(Object.keys(subjectScores));
console.log(Object.values(subjectScores));
for (const [subject, sc] of Object.entries(subjectScores)) {
    console.log(`${subject}: ${sc}`);
}

// ============ TASK 8.3: ARRAY OF OBJECTS ============

const students = [
    { name: "Julius", age: 22, grade: 85, major: "CS" },
    { name: "Fidelle", age: 20, grade: 72, major: "Math" },
    { name: "Nia",    age: 23, grade: 90, major: "CS" },
    { name: "Zeynab",   age: 21, grade: 88, major: "Physics" },
    { name: "Tamara",  age: 22, grade: 95, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const nia = students.find(s => s.name === "Nia");
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
const csMajors = students.filter(s => s.major === "CS");
const sortedByGrade = [...students].sort((x, y) => y.grade - x.grade);
const hasTopStudent = students.some(s => s.grade > 90);
const allPassing = students.every(s => s.grade >= 60);

console.log(names);
console.log(highAchievers);
console.log(nia);
console.log("Average:", avgGrade.toFixed(2));
console.log(csMajors);
console.log(sortedByGrade);
console.log(hasTopStudent, allPassing);

// ============ TASK 8.4: JSON ============

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

const posts = JSON.parse(postsJson);
const published = posts.filter(p => p.published);
const sortedPosts = published.sort((x, y) => y.likes - x.likes);
const labels = sortedPosts.map(p => `${p.title} (${p.likes} likes)`);
const backToText = JSON.stringify(sortedPosts, null, 2);

console.log(labels);
console.log(backToText);

// Safe parse (try/catch)
try {
    JSON.parse("{bad json");
} catch (err) {
    console.log("Parse error:", err.name); // SyntaxError
}

// ============ GRADE TRACKER ============

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const s = this.getStudent(name);
        if (!s) return null;
        const vals = Object.values(s.grades);
        return vals.reduce((a, b) => a + b, 0) / vals.length;
    },

    getSubjectAverage(subject) {
        const scores = this.students
            .map(s => s.grades[subject])
            .filter(v => v !== undefined);
        if (scores.length === 0) return null;
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    },

    getTopStudent() {
        let best = null, bestAvg = -Infinity;
        for (const s of this.students) {
            const avg = this.getStudentAverage(s.name);
            if (avg > bestAvg) { bestAvg = avg; best = s; }
        }
        return best;
    },

    getStrugglingStudents() {
        return this.students.filter(
            s => this.getStudentAverage(s.name) < 70
        );
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const s = this.getStudent(name);
        if (!s) return "Student not found";
        const avg = this.getStudentAverage(name);
        const lines = [`===== Report Card: ${name} =====`];
        for (const [subject, score] of Object.entries(s.grades)) {
            lines.push(`${subject}: ${score} (${this.getLetterGrade(score)})`);
        }
        lines.push(`Average: ${avg.toFixed(2)} (${this.getLetterGrade(avg)})`);
        return lines.join("\n");
    }
};

// Test with YOUR OWN student names (not Alice/Bob/Charlie)
gradeTracker.addStudent("Julius", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Fidelle", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Nia",    { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Julius"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Julius"));


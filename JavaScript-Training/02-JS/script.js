// Variables and Data Types
    console.log("-----Variables and Data Types-----");  
    // 1. Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
    var a = 10;
    let b = 20;
    const c = 30;
    a = 20;
    b = 30;
    // c = 40;
    var a = 30;
    // let b = 40;
    // const c = 50;
    console.log(a, b, c);

    // 2. Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
    let name_2 = "Gokul.S";
    let age_2 = 25;
    let programming_knowledge = true;
    console.log(typeof(name_2));
    console.log(typeof(age_2));
    console.log(typeof(programming_knowledge));

    // 3. Create an array of 5 fruits. Print the complete array, the first element, and the last element.
    let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    console.log(fruits);
    console.log(fruits[0]);
    console.log(fruits[fruits.length - 1]);

    // 4. Create an object containing your name, role, and CGPA. Print each property separately.
    let student = {
        name: "Gokul.S",
        role: "Student",
        CGPA: 8.9
    };
    console.log(student.name);
    console.log(student.role);
    console.log(student.CGPA);

    // 5. Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
    let userName_1 = prompt("What is your name?");
    alert(userName_1);
    let userAge_1 = prompt("How old are you?");
    console.log(userAge_1);

// Operators 
    console.log("-----Operators-----");
    // 6. Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
    let num1 = 10;
    let num2 = 5;
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % num2);
    console.log(num1 ** num2);

    // 7. Predict the output:
    let a1 = 5;
    console.log(a1++);  // 5
    console.log(a1);    // 6
    console.log(++a1);  // 7

    // 8. Predict the output:
    let a2 = 10;
    let b1 = a--;
    let c1 = --a;
    console.log(a2);    // 10
    console.log(b1);    // 10
    console.log(c1);    // 8

    // 9. Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
    let a3 = 10;
    a3 += 5;
    console.log(a3);    // 15
    a3 -= 3;
    console.log(a3);    // 12
    a3 *= 2;
    console.log(a3);    // 24
    a3 /= 4;
    console.log(a3);    // 6
    a3 %= 3;
    console.log(a3);    // 0

    // 10. Predict the results of these comparisons:
    console.log(5 == "5");  // true
    console.log(5 === "5"); // false
    console.log(10 != "10");    // false
    console.log(10 !== "10");    // true

    // 11. Use &&, ||, and ! to check different combinations of conditions.
    let a4 = true;
    let b2 = false;
    console.log(a4 && b2);  // false
    console.log(a4 || b2);  // true
    console.log(!a4);   // false

    // 12. Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
    let age_3 = 18;
    console.log(age_3 >= 18 ? "You are eligible to vote" : "You are not eligible to vote");

// Type Casting and Conditions
    console.log("-----Type Casting and Conditions-----");
    // 13. Predict the data type of each expression:
    console.log(typeof ("hello" + 10)); // string
    console.log(typeof (10 + true));    // number
    console.log(typeof (10 + null));    // number
    console.log(typeof ("hello" + undefined));  // string

    // 14. Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
    let num_1 = Number(prompt("Enter a number:"));
    console.log(num_1 + 10);

    // 15. Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
    console.log(Boolean(""));    // false
    console.log(Boolean("Hello"));  // true
    console.log(Boolean(0));    // false
    console.log(Boolean(true)); // true

    // 16. Write an if-else statement to check whether a number is positive or not.
    let num_2 = 5;
    if (num_2 > 0) {
        console.log("The number is positive");
    } else {
        console.log("The number is not positive");
    }

    // 17. Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
    let time = prompt("Enter the time (in hours):");
    if (time < 12) {
        console.log("Good morning");
    } else if (time < 18) {
        console.log("Good afternoon");
    } else if (time < 22) {
        console.log("Good evening");
    } else {
        console.log("Good night");
    }

    // 18. Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
    let age_4 = 25;
    let height_1 = 170;
    let weight_1 = 60;
    if (age_4 >= 18) {
        if (height_1 >= 160) {
            if (weight_1 >= 50) {
                console.log("You are eligible for admission");
            } else {
                console.log("You are not eligible for admission");
            }
        } else {
            console.log("You are not eligible for admission");
        }
    } else {
        console.log("You are not eligible for admission");
    }

// Switch and Loops
    console.log("-----Switch and Loops-----");
    // 19. Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
    let trafficLight = "red";
    switch (trafficLight) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Caution");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid color");
    }

    // 20. Use a for loop to print numbers from 1 to 20.
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }

    // 21. Use a for loop to print all even numbers from 2 to 20.
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }

    // 22. Use a while loop to print numbers from 10 down to 1.
    let i = 10;
    while (i >= 1) {
        console.log(i);
        i--;
    }

    // 23. Use a do-while loop to print numbers from 1 to 10.
    let j = 1;
    do {
        console.log(j);
        j++;
    } while (j <= 10);

    // 24. Use a for-of loop to print each character in the string "JavaScript".
    let str_1 = "JavaScript";
    for (let char of str_1) {
        console.log(char);
    }

    // 25. Use a for-of loop to print every element in an array of 5 student names.
    let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
    for (let student of students) {
        console.log(student);
    }

    // 26. Use a for-in loop to print all keys and values of this object:
    let student_1 = {
        name: "Priya",
        role: "Frontend Developer",
        cgpa: 9
    };
    for (let key in student_1) {
        console.log(key + ": " + student_1[key]);
    }

// Mixed Practice
    console.log("-----Mixed Practice-----");
    // 27. Take two numbers using prompt() and display their sum, difference, product, and remainder.
    let num_3 = Number(prompt("Enter the first number:"));
    let num_4 = Number(prompt("Enter the second number:"));
    console.log("Sum: " + (num_3 + num_4));
    console.log("Difference: " + (num_3 - num_4));
    console.log("Product: " + (num_3 * num_4));
    console.log("Remainder: " + (num_3 % num_4));

    // 28. Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
    let numbers = [5, 15, 25, 35, 45];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i]);
        }
    }

    // 29. Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
    let age_5 = Number(prompt("Enter your age:"));
    if (age_5 >= 18) {
        alert("You are eligible to vote");
    } else {
        alert("You are not eligible to vote");
    }

    // 30. Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.
    let num_5 = Number(prompt("Enter the first number:"));
    let num_6 = Number(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (addition, subtraction, multiplication, division):");
    switch (operation) {
        case "addition":
            console.log("Result: " + (num_5 + num_6));
            break;
        case "subtraction":
            console.log("Result: " + (num_5 - num_6));
            break;
        case "multiplication":
            console.log("Result: " + (num_5 * num_6));
            break;
        case "division":
            console.log("Result: " + (num_5 / num_6));
            break;
        default:
            console.log("Invalid operation");
    }
    


    
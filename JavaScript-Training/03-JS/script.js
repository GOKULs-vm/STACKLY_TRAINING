// 1.  Functions and Parameters
    console.log("-----Functions and Parameters-----");
    // 1. Create a function welcome() that prints "Welcome to JavaScript".
    function welcome() {
        console.log("Welcome to JavaScript");
    }
    welcome();

    // 2. Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
    function studentDetails(name, age, cgpa) {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("CGPA:", cgpa);
    }
    studentDetails("Gokul.S", 25, 9);
    studentDetails("Naveen", 24, 8);

    // 3. Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
    function calculateFee(fee) {
        return fee;
    }
    let studentFee = calculateFee(5000);
    console.log("Student Fee:", studentFee);

    // 4. Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
    function discount(percent) {
        let fee = 200000;
        let discountAmount = fee * (percent / 100);
        let finalFee = fee - discountAmount;
        console.log("Final Fee:", finalFee);
    }
    discount(10);

    // 5. Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
    function studentForm(name, age, disability = "no") {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Disability:", disability);
    }
    studentForm("Gokul.S", 25);
    studentForm("Steawood", 24, "yes");

// 2. Function Types and Scope
    console.log("-----Function Types and Scope-----");
    // 6. Create a named function that accepts a message and prints it.
    function printMessage(message) {
        console.log(message);
    }
    printMessage("Hello, JavaScript!");

    // 7. Create an anonymous function and store it in a variable. Pass a name to it and print the name.
    let printName = function (name) {
        console.log(name);
    }
    printName("Gokul.S");

    // 8. Create an arrow function that accepts a number and prints it.
    let printNumber = (number) => {
        console.log(number);
    }
    printNumber(10);

    // 9. Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
    function checkScope() {
        if (true) {
            var varVariable = "var variable";
            let letVariable = "let variable";
            const constVariable = "const variable";
        }
        console.log(varVariable); // var variable
        // console.log(letVariable); // let variable
        // console.log(constVariable); // const variable
    }
    checkScope();

    // 10. Predict the output of this code:
    console.log(value); // undefined
    var value = 10;

// 3. Callback and Higher-Order Functions
    console.log("-----Callback and Higher-Order Functions-----");
    // 11. Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().
    function first(callback) {
        callback();
    }
    function second() {
        console.log("Second function executed");
    }
    first(second);

    // 12. Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.
    function add(callback, a, b) {
        let sum = a + b;
        console.log("Sum:", sum);
        callback(a, b);
    }
    function print(a, b) {
        console.log("Numbers:", a, b);
    }
    add(print, 5, 10);

    // 13. Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
    let sub = (num1, num2) => {
        console.log("Difference:", num1 - num2);
    }
    add(sub, 10, 5);

    // 14. Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
    function multiply(callback, a, b) {
        let product = a * b;
        console.log("Product:", product);
        callback(a, b);
    }
    function printResult(a, b) {
        console.log("Numbers:", a, b);
    }
    multiply(printResult, 5, 10);

    // 15. Create a divide(num1, num2) function and pass it as a callback to another function.
    function divide(num1, num2) {
        console.log("Quotient:", num1 / num2);
    }
    multiply(divide, 10, 2);

    // 16. Create a higher-order function that accepts a callback and calls it with a student's name.
    function callName(callback) {
        callback("Gokul.S");
    }
    function printName_1(name) {
        console.log("Name:", name);
    }
    callName(printName_1);

// 4. Generator Functions
    console.log("-----Generator Functions-----");
    // 17. Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
    function* cashbackGenerator() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
    }
    const reward = cashbackGenerator();

    console.log(reward.next().value); // Output: "10% cashback"
    console.log(reward.next().value); // Output: "30% cashback"
    console.log(reward.next().value); // Output: "Better luck next time"
    console.log(reward.next().value); // Output: undefined

    // 18. Call .next() three times on a generator object and observe the returned values.
    const generator = cashbackGenerator();
    console.log(generator.next().value); // Output: "10% cashback"
    console.log(generator.next().value); // Output: "30% cashback"
    console.log(generator.next().value); // Output: "Better luck next time"
    console.log(generator.next().value); // Output: undefined

    // 19. Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
    function* discountGenerator() {
        yield "10% discount";
        yield "20% discount";
        yield "30% discount";
        yield "40% discount";
        yield "50% discount";
    }
    const discounts = discountGenerator();

    for (const discount of discounts) {
        console.log(discount);
    }

    // 20. Create a generator function that yields three student names. Use a for-of loop to display them.
    function* studentGenerator() {
        yield "Alice";
        yield "Bob";
        yield "Charlie";
    }
    const students = studentGenerator();

    for (const student of students) {
        console.log(student);
    }

    // 21. Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
    function* generatorWithDone() {
        yield "Value 1";
        yield "Value 2";
        yield "Value 3";
        yield "Value 4";
    }
    const generator_1 = generatorWithDone();
    console.log(generator_1.next().value); // Output: "Value 1"
    console.log(generator_1.next().value); // Output: "Value 2"
    console.log(generator_1.next().value); // Output: "Value 3"
    console.log(generator_1.next().value); // Output: "Value 4"
    console.log(generator_1.next().done); // Output: true

// 5. Currying and Uncurrying
    console.log("-----Currying and Uncurrying-----");
    // 22. Create a normal function add(a, b, c) that prints the sum of three numbers.
    function add(a, b, c) {
        console.log("Sum:", a + b + c);
    }
    add(1, 2, 3);

    // 23. Convert the add(a, b, c) function into a curried function using nested functions.
    function curriedAdd(a) {
        return function(b) {
            return function(c) {
                console.log("Sum:", a + b + c);
            };
        };
    }
    const curried = curriedAdd(1);
    curried(2)(3);

    // 24. Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
    // Defining the curried function using regular functions
    function functionName(a) {
        return function(b) {
            return function(c) {
                return a + b + c; 
            };
        };
    }
    const result = functionName(5)(10)(15);
    console.log(result); // Outputs: 30

    // 25. Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
    function calculateTotalDiscountedPrice(price) {
    return function(discountPercentage) {
        return function(quantity) {
        const discountAmount = price * (discountPercentage / 100);
        const priceAfterDiscount = price - discountAmount;
        return priceAfterDiscount * quantity;
        };
    };
    }
    console.log(calculateTotalDiscountedPrice(100)(20)(3)); // Output: 240

    // 26. Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
    function normalFunction(a, b, c) {
        console.log("Sum:", a + b + c);
    }
    function curriedFunction(a) {
        return function(b) {
            return function(c) {
                console.log("Sum:", a + b + c);
            };
        };
    }
    normalFunction(1, 2, 3);
    curriedFunction(1)(2)(3);

// 6. IIFE, Return, and Mixed Practice
    console.log("-----IIFE, Return, and Mixed Practice-----");
    // 27. Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
    (function(productName, discountPercentage) {
        console.log(`Sale on ${productName} - ${discountPercentage}% off!`);
    })("Laptop", 20);

    // 28. Create a function that returns a number. Store the returned value in a variable and print it.
    function returnNumber() {
        return 42;
    }
    const number = returnNumber();
    console.log(number);

    // 29. Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
    function getMarks(marks) {
        return marks;
    }
    const studentMarks = getMarks(85);
    console.log(studentMarks);

    // 30. Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.
    function calculateFee(fee, discount = 0) {
        const discountAmount = fee * (discount / 100);
        const finalFee = fee - discountAmount;
        return finalFee;
    }
    const student_Fee = calculateFee(5000, 10);
    console.log("Student Fee:", student_Fee);

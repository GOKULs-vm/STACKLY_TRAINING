// 1. Array Higher-Order Methods
    console.log("----- Array Higher-Order Methods -----")
    // 1. Create an array of 10 numbers and use forEach() to print each number.
    let numbers = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10]
    numbers.forEach((num) => console.log(num))

    // 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
    let multipliedNumbers = numbers.map((num) => num * 5)
    console.log(multipliedNumbers)

    // 3. Given an array of numbers, use filter() to get only numbers greater than 20.
    let filteredNumbers = multipliedNumbers.filter((num) => num > 20)
    console.log(filteredNumbers)

    // 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
    let employees = [
        { name: "John", salary: 250000 },
        { name: "Jane", salary: 300000 },
        { name: "Bob", salary: 450000 },
        { name: "Alice", salary: 550000 },
        { name: "Charlie", salary: 650000 }]
    let filteredEmployees = employees.filter((emp) => emp.salary <= 300000)
    console.log(filteredEmployees)

    // 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
    let firstHighSalaryEmployee = employees.find((emp) => emp.salary > 200000)
    console.log(firstHighSalaryEmployee)

    // 6. Use reduce() to calculate the total of all numbers in an array.
    let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(total)

    // 7. Create an array of numbers and use some() to check whether at least one number is even.
    let hasEvenNumber = numbers.some((num) => num % 2 === 0)
    console.log(hasEvenNumber)

    // 8. Use every() to check whether all numbers in an array are greater than zero.
    let allGreaterThanZero = numbers.every((num) => num > 0)
    console.log(allGreaterThanZero)

    // 9. Given an array of numbers, sort them in ascending order using the sort callback.
    let sortedNumbers = numbers.sort((a, b) => a - b)
    console.log(sortedNumbers)

    // 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
    let sortedNumbersDesc = numbers.sort((a, b) => b - a)
    console.log(sortedNumbersDesc)

console.log("")
// 2. String Methods
    console.log("----- String Methods -----")
    // 11. Create a string "javascript" and print the character at index 4 using charAt().
    let str = "javascript"
    console.log(str.charAt(4))

    // 12. Find the character code at index 2 using charCodeAt().
    console.log(str.charCodeAt(2))

    // 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
    let strWithSpaces = "   Hello World!   "
    console.log(strWithSpaces.trim())

    // 14. Convert a string to uppercase and lowercase using the appropriate methods.
    console.log(str.toUpperCase())
    console.log(str.toLowerCase())

    // 15. Check whether a string contains "script" using includes().
    console.log(str.includes("script"))

    // 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
    console.log(str.startsWith("Java"))
    console.log(str.endsWith("Script"))

    // 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
    let newStr = str.replaceAll("java", "python")
    console.log(newStr)

    // 18. Split the string "html-css-javascript-react" into an array using split().
    let techStr = "html-css-javascript-react"
    let techArray = techStr.split("-")
    console.log(techArray)

    // 19. Convert an array of names into a single string using join() with a comma separator.
    let namesArray = ["John", "Jane", "Bob", "Alice"]
    let namesString = namesArray.join(", ")
    console.log(namesString)

    // 20. Create a string and extract a portion of it using slice().
    let slicedStr = str.slice(4, 10)
    console.log(slicedStr)

console.log("")
// 3. Date Methods
    console.log("----- Date Methods -----")
    // 21. Create a Date object and print the current year, month, date, and day.
    let currentDate = new Date()
    console.log("Year:", currentDate.getFullYear())
    console.log("Month:", currentDate.getMonth() + 1) 
    console.log("Date:", currentDate.getDate())
    console.log("Day:", currentDate.getDay()) 

    // 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    console.log("Current Month:", monthNames[currentDate.getMonth()])

    // 23. Print the current hours, minutes, and seconds using the appropriate date methods.
    console.log("Hours:", currentDate.getHours())
    console.log("Minutes:", currentDate.getMinutes())
    console.log("Seconds:", currentDate.getSeconds())

    // 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
    let specificDate = new Date()
    specificDate.setFullYear(2003)
    specificDate.setMonth(0) 
    specificDate.setDate(30)
    console.log("Updated Date:", specificDate)

console.log("")
// 4. Asynchronous JavaScript
    console.log("----- Asynchronous JavaScript -----")
    // 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
    setTimeout(() => {
        console.log("Welcome to JavaScript")
    }, 3000)

    // 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
    let intervalId = setInterval(() => {
        console.log("Learning JavaScript")
    }, 2000)

    // 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
    setTimeout(() => {
        clearInterval(intervalId)
        console.log("Stopped Learning JavaScript")
    }, 8000)

    // 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
    function one() {
        console.log("Function One")
    }
    function two() {
        console.log("Function Two")
    }
    function three() {
        console.log("Function Three")
    }
    one()
    setTimeout(two, 0)
    three()

console.log("")
// 5. Promises and API Fetching
    console.log("----- Promises and API Fetching -----")
    // 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
    let loginPromise = new Promise((resolve, reject) => {
        let isLoggedIn = true
        if (isLoggedIn) {
            resolve("Login successful")
        } else {
            reject("Login failed")
        }
        }
    )
    loginPromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().
    let passwordPromise = new Promise((resolve, reject) => {
        let isPasswordValid = false
        if (isPasswordValid) {
            resolve("Password is valid")
        } else {
            reject("Invalid password")
        }
        }
    )
    passwordPromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
    let processPromise = new Promise((resolve, reject) => {
        let isProcessSuccessful = true
        if (isProcessSuccessful) {
            resolve("Process successful")
        } else {
            reject("Process failed")
        }
        }
    )
    processPromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log("Process completed")
    })
    
    // 32. Fetch product data from the Fake Store API: https://fakestoreapi.com/products
    // Convert the response to JSON and print all product titles using forEach().
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                console.log(product.title)
            })
        })
        .catch((error) => {
            console.log(error)
        })

    // 33. Fetch the same API and print the title, price, and category of every product.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                console.log("Title:", product.title)
                console.log("Price:", product.price)
                console.log("Category:", product.category)
            })
        })
        .catch((error) => {
            console.log(error)
        })

    // 34. Handle API errors using .catch() and display the error message using console.warn().
    fetch("https://fakestoreapi.com/product")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.warn(error)
        })
    
    // 35. Use .finally() to print "API call completed" after the fetch process.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.warn(error)
        })
        .finally(() => {
            console.log("API call completed")
        })

console.log("")
// 6. Real-Time Mini Tasks
    console.log("----- Real-Time Mini Tasks -----")
    // 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
    let employeeReport = employees.filter((emp) => emp.salary < 300000)
    employeeReport.forEach((emp) => {
        console.log("Name:", emp.name, "Salary:", emp.salary)
    })

    // 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productReport = data.map((product) => {
                return {
                    title: product.title,
                    price: product.price
                }
            })
            console.log(productReport)
        })
        .catch((error) => {
            console.warn(error)
        })

    // 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productReport = data.filter((product) => product.category === "men's clothing")
            console.log(productReport)
        })
        .catch((error) => {
            console.warn(error)
        })

    // 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
    let numberAnalysis = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    let multipliedByTwo = numberAnalysis.map((num) => num * 2)
    console.log("Multiplied by 2:", multipliedByTwo)
    let evenNumbers = numberAnalysis.filter((num) => num % 2 === 0)
    console.log("Even numbers:", evenNumbers)
    let total_sum = numberAnalysis.reduce((sum, num) => sum + num, 0)
    console.log("Total sum:", total_sum)
    let hasNegative = numberAnalysis.some((num) => num < 0)
    console.log("Has negative numbers:", hasNegative)
    let allPositive = numberAnalysis.every((num) => num > 0)
    console.log("All positive numbers:", allPositive)

    // 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                console.log("Title:", product.title)
                console.log("Price:", product.price)
                console.log("Category:", product.category)
            })
        })
        .catch((error) => {
            console.warn(error)
        })
        .finally(() => {
            console.log("API call completed")
        })
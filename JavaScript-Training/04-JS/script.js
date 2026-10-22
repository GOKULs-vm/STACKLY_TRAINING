// 1. Array Manipulation Methods
    console.log("----- Array Manipulation Methods -----")
    // 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
    let fruits = ["apple", "banana", "orange", "grape", "kiwi"]
    fruits.push("mango", "pineapple", "strawberry")
    console.log(fruits)

    // 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
    let numbers = [1, 2, 3, 4, 5, 6]
    numbers.pop()
    console.log(numbers)

    // 3. Create an array of 5 names. Remove the first element using shift() and print the array.
    let names = ["Alice", "Bob", "Charlie", "David", "Eve"]
    names.shift()
    console.log(names)

    // 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
    let nums = [10, 20, 30, 40]
    nums.unshift(5, 0)
    console.log(nums)

    // 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
    let arr = [10, 20, 30, 40, 50]
    arr.splice(1, 2)
    console.log(arr)

    // 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
    let arr2 = [1, 2, 3, 4, 5]
    arr2.splice(2, 1, 100)
    console.log(arr2)

    // 7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
    let arr3 = [1, 2, 3, 4, 5]
    arr3.fill("hello", 2, 5)
    console.log(arr3)

console.log("")
// 2. Array Merge and Search Methods
    console.log("----- Array Merge and Search Methods -----")
    // 8. Create two arrays of numbers and combine them using concat().
    let arr4 = [1, 2, 3]
    let arr5 = [4, 5, 6]
    let combinedArr = arr4.concat(arr5)
    console.log(combinedArr)

    // 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
    let arr6 = [10, 20, 30, 40, 50, 60]
    let slicedArr = arr6.slice(1, 5)
    console.log(slicedArr)

    // 10. Create a nested array and convert it into a single-level array using flat(Infinity).
    let nestedArr = [1, [2, [3, [4, 5]]]]
    let flatArr = nestedArr.flat(Infinity)
    console.log(flatArr)

    // 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
    let arr7 = [10, 20, 30, 40, 50]
    let exists = arr7.includes(30)
    console.log(exists)

    // 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
    let arr8 = [5, 10, 15, 20, 25]
    let index = arr8.indexOf(20)
    console.log(index)

    // 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
    let arr9 = [1, 2, 3, 2, 1, 2]
    let lastIndex = arr9.lastIndexOf(2)
    console.log(lastIndex)

    // 14. Create an array of numbers and arrange its elements using sort().
    let arr10 = [5, 2, 9, 1, 5, 6]
    let sortedArr = arr10.sort()
    console.log(sortedArr)

    // 15. Create an array of 7 numbers and reverse the order using reverse().
    let arr11 = [1, 2, 3, 4, 5, 6, 7]
    let reversedArr = arr11.reverse()
    console.log(reversedArr)

console.log("")
// 3. Spread and Rest Operators
    console.log("----- Spread and Rest Operators -----")
    // 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
    let arr12 = [1, 2, 3, 4]
    let arr13 = [5, 6, 7, 8]
    let mergedArr = [...arr12, ...arr13]
    console.log(mergedArr)

    // 17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
    let student = { name: "John", age: 20 }
    let job = { title: "Developer", company: "TechCorp" }
    let mergedObj = { ...student, ...job }
    console.log(mergedObj)

    // 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
    function collectArgs(param1, param2, ...rest) {
        console.log("Param 1:", param1)
        console.log("Param 2:", param2)
        console.log("Rest of the arguments:", rest)
    }
    collectArgs(1, 2, 3, 4, 5, 6)

    // 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
    function one(a, b, ...c) {
        let sum = a + b + c[0] + c[1]
        console.log("Sum:", sum)
    }
    one(1, 2, 3, 4)

    // 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
    let arr14 = [1, 2, 3]
    let arr15 = [...arr14]
    console.log(arr15)

console.log("")
// 4. Array Destructuring
    console.log("----- Array Destructuring -----")
    // 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
    let arr16 = [10, 20, 30, 40]
    let [a, b, c, d] = arr16
    console.log(a, b, c, d)

    // 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
    let nested = [1, 2, [3, 4, [5, 6]]]
    let [x, y, [z, w, [p, q]]] = nested
    console.log(x, y, z, w, p, q)

    // 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
    let studentInfo = ["Alice", 20, 3.8]
    let [name, age, cgpa] = studentInfo
    console.log("Name:", name)
    console.log("Age:", age)
    console.log("CGPA:", cgpa)

console.log("")
// 5. Object Destructuring
    console.log("----- Object Destructuring -----")
    // 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
    let person = { name: "Bob", role: "Developer", location: "New York" }
    let { name: personName, role, location: personLocation } = person
    console.log("Name:", personName)
    console.log("Role:", role)
    console.log("Location:", personLocation)

    // 25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
    let studentObj = { name: "Charlie", address: { city: "Los Angeles", state: "California" } }
    let { address: { city, state } } = studentObj
    console.log("City:", city)
    console.log("State:", state)

    // 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
    let locationObj = { name: "Alice", role: "Designer", mainLocation: "New York", currentLocation: "Los Angeles" }
    let { name: studentName, role: studentRole, mainLocation, currentLocation } = locationObj
    console.log("Name:", studentName)
    console.log("Role:", studentRole)
    console.log("Main Location:", mainLocation)
    console.log("Current Location:", currentLocation)

console.log("")
// 6. Mixed Practical Challenges
    console.log("----- Mixed Practical Challenges -----")
    // 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
    let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr17.shift()
    arr17.pop()
    arr17.unshift(0, -1)
    console.log(arr17)

    // 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
    let arr18 = [1, 2, 3, 2, 4, 5, 2]
    let selectedNumber = 2
    console.log("Includes:", arr18.includes(selectedNumber))
    console.log("Index of:", arr18.indexOf(selectedNumber))
    console.log("Last Index of:", arr18.lastIndexOf(selectedNumber))

    // 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
    let employee1 = { name: "David", role: "Manager" }
    let employee2 = { name: "Eve", role: "Developer" }
    let mergedEmployee = { ...employee1, ...employee2 }
    let { name: employeeName, role: employeeRole } = mergedEmployee
    console.log("Employee Name:", employeeName)
    console.log("Employee Role:", employeeRole)

    // 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
    let nestedArr2 = [1, [2, [3, 4]], 5]
    let flatReversedArr = nestedArr2.flat(Infinity).reverse()
    console.log(flatReversedArr)
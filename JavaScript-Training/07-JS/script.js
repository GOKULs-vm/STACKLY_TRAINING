// 1. Display only the product title inside an <h1> tag.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productTitle = document.createElement("div")
            productTitle.classList.add("product-title")
            productTitle.innerHTML = `<h1>${product.title}</h1>`
            document.querySelector(".api").appendChild(productTitle)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 2. Display the product ID and title inside an <h2> tag.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productTitle = document.createElement("div")
            productTitle.classList.add("product-title")
            productTitle.innerHTML = `<h2>${product.id}. ${product.title}</h2>`
            document.querySelector(".api").appendChild(productTitle)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 3. Display the first 30 characters of each product title.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productTitle = document.createElement("div")
            productTitle.classList.add("product-title")
            productTitle.innerHTML = `<h3>${product.title.slice(0, 30)}</h3>`
            document.querySelector(".api").appendChild(productTitle)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 4. Display the first 100 characters of each product description.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productTitle = document.createElement("div")
            productTitle.classList.add("product-description")
            productTitle.innerHTML = `<p>${product.description.slice(0, 100)}...<p>`
            document.querySelector(".api").appendChild(productTitle)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 5. Display each product's image inside a <div>.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-container")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productImage = document.createElement("div")
            productImage.classList.add("product-image")
            productImage.innerHTML = `<img src="${product.image}" alt="${product.title}">`
            document.querySelector(".product-container").appendChild(productImage)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 6. Display the product title, description, and image inside a single <div>.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-Cardcontainer")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-card")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <p>${product.description.slice(0, 100)}...</p>
            <img src="${product.image}" alt="${product.title}">`
            document.querySelector(".product-Cardcontainer").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 7. Display each product's price inside a <p> tag.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productPrice = document.createElement("div")
            productPrice.classList.add("product-price")
            productPrice.innerHTML = `<p>${product.id}. ${product.price}</p>`
            document.querySelector(".api").appendChild(productPrice)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 8. Display each product's category inside an <h3> tag.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productCategory = document.createElement("div")
            productCategory.classList.add("product-category")
            productCategory.innerHTML = `<h3>${product.category}</h3>`
            document.querySelector(".api").appendChild(productCategory)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 9. Display the product title in uppercase.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productTitle = document.createElement("div")
            productTitle.classList.add("product-titleUppercase")
            productTitle.innerHTML = `<h3>${product.title.toUpperCase()}</h3>`
            document.querySelector(".api").appendChild(productTitle)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 10. Display the product title and its total character count.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productTitle = document.createElement("div")
            productTitle.classList.add("product-title")
            productTitle.innerHTML = `<h3>${product.id}. ${product.title} - (${product.title.length})</h3>`
            document.querySelector(".api").appendChild(productTitle)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 11. Display the first 5 products only.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerFive")
            document.querySelector(".api").appendChild(productContainer)
            data.slice(0, 5).forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-card")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <p>${product.description.slice(0, 100)}...</p>
            <img src="${product.image}" alt="${product.title}">`
            document.querySelector(".product-containerFive").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 12. Display products with their IDs, titles, and prices.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerITP")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardITP")
            productCard.innerHTML = `<h3>${product.id}. ${product.title}</h3> <p>${product.price}</p>`
            document.querySelector(".product-containerITP").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 13. Display each product's image with a width of 200px.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerImage")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardImage")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" width="200px">`
            document.querySelector(".product-containerImage").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 14. Add a separate <div> for each product and give it a class name of "card".
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerCard")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("card")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}">`
            document.querySelector(".product-containerCard").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 15. Display the product title and description, limiting the description to 50 characters.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerDesc")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardDesc")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <p>${product.description.slice(0, 50)}...</p>`
            document.querySelector(".product-containerDesc").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 16. Display all product titles in the browser console and on the webpage.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerTitle")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardTitle")
            productCard.innerHTML = `<h3>${product.title}</h3>`
            document.querySelector(".product-containerTitle").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 17. Display each product's title and category inside the same <div>.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerCat")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardCat")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <p>${product.category}</p>`
            document.querySelector(".product-containerCat").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 18. Display a message inside .api when the API data is successfully loaded.
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            let productContainer = document.createElement("div")
            productContainer.classList.add("product-containerMsg")
            document.querySelector(".api").appendChild(productContainer)
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardMsg")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <p>${product.description}</p> <h4>Data loaded successfully!</h4>`
            document.querySelector(".product-containerMsg").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })

// 19. Display "Loading..." inside .api before fetching the API data.
    document.querySelector(".api").innerHTML = "<h3>Loading...</h3>"
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
            let productCard = document.createElement("div")
            productCard.classList.add("product-cardLoading")
            productCard.innerHTML = `<h3>${product.title}</h3>
            <p>${product.description}</p>`
            document.querySelector(".api").appendChild(productCard)
            })
        })
        .catch((error) => {
            console.warn(error)
        })
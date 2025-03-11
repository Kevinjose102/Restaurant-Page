const about = function(){
    const about = document.createElement("div");
    about.classList.add("about-content")

    const chefImage = document.createElement("img");
    chefImage.src = require("./burger-chef.jpg")
    chefImage.classList.add("chef-image")

    const quote = document.createElement("div")
    quote.classList.add("quote")
    quote.textContent = "\"Twobuns was founded with the simple goal of providing the best burgers in town. What started as a passion for cooking quickly grew into a beloved neighborhood spot known for its quality ingredients and mouth-watering flavors\""
    
    about.appendChild(chefImage)
    about.appendChild(quote)
    
    const content = document.getElementById("content");
    content.innerHTML = '';
    content.appendChild(about)
}

export default about;
function home() {
    const home = document.createElement("div");
    home.classList.add("home-content");
    
    const main = document.createElement("div")
    main.classList.add("main-page")

    const quotes = document.createElement("div")
    quotes.classList.add("quotes-togther");

    const heading = document.createElement("p");
    heading.textContent = "Double the Flavor,";  // Fixed this line
    heading.classList.add("quote")
    quotes.appendChild(heading);

    const headingline = document.createElement("p");
    headingline.textContent = "Double the Fun";  // Fixed this line
    headingline.classList.add("quote")
    quotes.appendChild(headingline);

    main.appendChild(quotes)

    const buyNow = document.createElement("button");
    buyNow.textContent = "Buy Now"
    buyNow.classList.add("buynow")
    main.appendChild(buyNow)

    const temp = document.createElement("div");
    temp.classList.add("timings-together")

    const timing = document.createElement("div");
    timing.classList.add("timing");
    timing.classList.add("timing1");
    timing.textContent = "Mon - Thurs : 10am - 8pm"
    temp.appendChild(timing)

    const timing1 = document.createElement("div");
    timing1.classList.add("timing");
    timing1.classList.add("timing2");
    timing1.textContent = "Fri - Sun : 10am - 11pm"
    temp.appendChild(timing1)

    main.appendChild(temp)
    
    home.appendChild(main)

    const content = document.getElementById("content");
    content.innerHTML = '';  // Clear previous content
    content.appendChild(home);
}

export default home;

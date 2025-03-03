function home() {
    const home = document.createElement("div");
    home.classList.add("home");

    const cimage = document.createElement("img");
    cimage.src = "images/chef.png";
    
    const heading = document.createElement("p");
    heading.textContent = "Best Burgers in the country";  // Fixed this line

    home.appendChild(heading);
    home.appendChild(cimage);

    const content = document.getElementById("content");
    content.innerHTML = '';  // Clear previous content
    content.appendChild(home);
}

export default home;

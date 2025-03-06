function menu() {
    const menu = document.createElement("div");
    menu.classList.add("menu-content")

    menu.appendChild(
        createMenuItem(
          "Chicken Zinger",
          "Chicken, Mozarella, Tomato, Basil"
        )
      );
    
    const content = document.getElementById("content");
    content.innerHTML = '';  // Clear previous content
    content.appendChild(menu);

}
function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/burgers/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
export default menu;
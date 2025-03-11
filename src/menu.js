function menu() {
    const menu = document.createElement("div");
    menu.classList.add("menu-content")

    menu.appendChild(
        createMenuItem(
          "Double Trouble",
          "Juicy double beef patty stacked with gooey cheese and caramelized onions",
          "₹299"
        )
      );
    
    menu.appendChild(
        createMenuItem(
          "Spicy Inferno",
          "Flame-grilled chicken, topped with spicy mayo and jalapeños for a fiery kick",
          "₹249"
        )
      );
    menu.appendChild(
        createMenuItem(
          "Classic Melt",
          "Traditional beef burger with cheddar cheese, lettuce, and tomato",
          "₹199"
        )
      );
    menu.appendChild(
        createMenuItem(
          "Veggie Delight",
          "Fresh veggie patty with avocado, crisp lettuce, and herb aioli",
          "₹179"
        )
      );
    menu.appendChild(
        createMenuItem(
          "BBQ Boss",
          "Smoky BBQ chicken patty with crispy bacon and onion rings",
          "₹279"
        )
      );
    menu.appendChild(
        createMenuItem(
          "Cheese Overload",
          "Double-layered cheese patty, creamy cheddar sauce, and tangy pickles",
          "₹259"
        )
      );
    menu.appendChild(
        createMenuItem(
          "Fries",
          "Crispy golden fries, perfectly seasoned",
          "₹99"
        )
      );
    menu.appendChild(
        createMenuItem(
          "Sodas  ",
          "Chilled soda options like Coke, Pepsi, or Sprite",
          "₹49"
        )
      );
    const content = document.getElementById("content");
    content.innerHTML = '';  // Clear previous content
    content.appendChild(menu);

}
function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    foodDescription.classList.add("foodDescription")
    
    const foodImage = document.createElement("img");
    console.log(name.toLowerCase().replaceAll(" ",""))
    foodImage.src = require(`./burgers/${name.toLowerCase().replaceAll(" ","")}.png`);
    foodImage.classList.add("menu-images")
    foodImage.alt = `${name}`;
    console.log(name.toLowerCase().replaceAll(" ",""))

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price
    foodPrice.classList.add("price")
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice)
  
    return menuItem;
  }
export default menu;
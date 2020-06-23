// JavaScript source code

// displaying the menu items
let newDiv = [];
let newButton = [];
let info = [];
let itemNumber = [];


// morning tea menu
let morningTea = [];

morningTea.push(new menuItems("Cheese Roll", 4, "Morning Tea"));
morningTea.push(new menuItems("Savoury Pinwheel", 3, "Morning Tea"));
morningTea.push(new menuItems("Muffins", 3, "Morning Tea"));
morningTea.push(new menuItems("Cinnamon Swirl", 3, "Morning Tea"));
morningTea.push(new menuItems("Brownie", 3, "Morning Tea"));
morningTea.push(new menuItems("Cheese Pulls", 3, "Morning Tea"));
morningTea.push(new menuItems("Sandwiches", 4, "Morning Tea"));
morningTea.push(new menuItems("Bagels", 4, "Morning Tea"));

// lunch menu for week one
let weekOne = [];

weekOne.push(new menuItems("Chicken nuggets with baked chips", 5, "Lunch"));
weekOne.push(new menuItems("Pumpkin and Feta bake", 5, "Lunch"));
weekOne.push(new menuItems("Macaroni and cheese", 5, "Lunch"));
weekOne.push(new menuItems("Butter chicken on rice", 5, "Lunch"));
weekOne.push(new menuItems("Fried rice", 5, "Lunch"));

// lunch menu for week two
let weekTwo = [];

weekTwo.push(new menuItems("Chicken nuggets with baked chips", 5, "Lunch"));
weekTwo.push(new menuItems("Bacon, egg, potato and spinach pie", 5, "Lunch"));
weekTwo.push(new menuItems("Lasagne", 5, "Lunch"));
weekTwo.push(new menuItems("Meatballs on tomato sauce with rice", 5, "Lunch"));
weekTwo.push(new menuItems("Chicken or beef burgers with tomato relish and cheese", 5, "Lunch"));

// cart array
let cart = [];

// displays the morning tea menu as default
displayMenu("morning tea");

// function to create menu items and put them in an array
function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}

// on button click changes the buttons' styling and menu
function menuButtonClick(dir, week) {
    if (dir === 1) {
        document.getElementById("lunch").classList = "button-current";
        document.getElementById("morning-tea").classList = "button-default";
        displayMenu("lunch", week);
        document.getElementById("dropdown").classList.toggle("show");
    }
    else {
        document.getElementById("morning-tea").classList = "button-current";
        document.getElementById("lunch").classList = "button-default";
        displayMenu("morning tea");
    }
}

// creating an element for the menu display
function createElement(type, obj, name, text) {
    array = document.createElement(type);
    array.classList = name;
    array.innerHTML = text;
    return obj.appendChild(array);
}

// function to display the menu depending on button click
function displayMenu(menu, week) {

    // clears "container" contents
    document.getElementById("container").innerHTML = "";

    if (menu === "morning tea") {
        for (let i = 0; i < morningTea.length; i++) {
            newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
            itemNumber[i] = new createElement("div", newDiv[i], "item-number", "1");
            info[i] = new createElement("blockquote", newDiv[i], "info", morningTea[i].name + "\r\n$" + morningTea[i].price);

            newButton[i].onclick = function () {
                cart.push(morningTea[i]);
                
            };
        }
    }

    else { 

        if (week === 1) {

            for (let i = 0; i < weekOne.length; i++) {
                newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
                newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
                itemNumber[i] = new createElement("div", newDiv[i], "item-number", "1");
                info[i] = new createElement("blockquote", newDiv[i], "info", weekOne[i].name + "\r\n$" + weekOne[i].price);

                newButton[i].onclick = function () {
                    cart.push(weekOne[i]);
                };
            }
        }

        else {

            for (let i = 0; i < weekTwo.length; i++) {
                console.log(2);
                newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
                newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
                itemNumber[i] = new createElement("div", newDiv[i], "item-number", "1");
                info[i] = new createElement("blockquote", newDiv[i], "info", weekTwo[i].name + "\r\n$" + weekTwo[i].price);

                newButton[i].onclick = function () {
                    cart.push(weekTwo[i]);
                };
            }
        }
    }
}

console.log(cart);
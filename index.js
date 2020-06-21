// JavaScript source code



let newDiv = [];
let newButton = [];
let info = [];
let itemNumber = [];

let morningTea = [];

morningTea.push(new menuItems("Cheese Roll", 4, "Morning Tea"));
morningTea.push(new menuItems("Savoury Pinwheel", 3, "Morning Tea"));
morningTea.push(new menuItems("Muffins", 3, "Morning Tea"));
morningTea.push(new menuItems("Cinnamon Swirl", 3, "Morning Tea"));
morningTea.push(new menuItems("Brownie", 3, "Morning Tea"));
morningTea.push(new menuItems("Cheese Pulls", 3, "Morning Tea"));
morningTea.push(new menuItems("Sandwiches", 4, "Morning Tea"));
morningTea.push(new menuItems("Bagels", 4, "Morning Tea"));

let weekOne = [];

weekOne.push(new menuItems("Chicken nuggets with baked chips", 5, "Lunch"));
weekOne.push(new menuItems("Pumpkin and Feta bake", 5, "Lunch"));
weekOne.push(new menuItems("Macaroni and cheese", 5, "Lunch"));
weekOne.push(new menuItems("Butter chicken on rice", 5, "Lunch"));
weekOne.push(new menuItems("Fried rice", 5, "Lunch"));


let weekTwo = [];


weekTwo.push(new menuItems("Chicken nuggets with baked chips", 5, "Lunch"));
weekTwo.push(new menuItems("Bacon, egg, potato and spinach pie", 5, "Lunch"));
weekTwo.push(new menuItems("Lasagne", 5, "Lunch"));
weekTwo.push(new menuItems("Meatballs on tomato sauce with rice", 5, "Lunch"));
weekTwo.push(new menuItems("Chicken or beef burgers with tomato relish and cheese", 5, "Lunch"));

displayMenu("bob");

function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}

function menuButtonClick(dir) {
    if (dir === 1) {
        document.getElementById("lunch").classList = "button-current";
        document.getElementById("morning-tea").classList = "button-default";
        displayMenu("notbob");
    }
    else {
        document.getElementById("morning-tea").classList = "button-current";
        document.getElementById("lunch").classList = "button-default";
        displayMenu("bob");
    }
}

function createElement(type, obj, name, text) {
    array = document.createElement(type);
    array.classList = name;
    array.innerHTML = text;
    return obj.appendChild(array);
}

function displayMenu(menu) {

    document.getElementById("container").innerHTML = "";

    if (menu === "bob") {
        for (let i = 0; i < morningTea.length; i++) {
            newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
            itemNumber[i] = new createElement("div", newDiv[i], "item-number", "1");
            info[i] = new createElement("blockquote", newDiv[i], "info", morningTea[i].name + "\r\n$" + morningTea[i].price);
        }
    }

    else { 

        for (let i = 0; i < weekOne.length; i++) {
            newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
            itemNumber[i] = new createElement("div", newDiv[i], "item-number", "1");
            info[i] = new createElement("blockquote", newDiv[i], "info", weekOne[i].name + "\r\n$" + weekOne[i].price);
        }
    }
}


//document.createElement("d")


//for (let i = 0; i < weekOne.length; i++) {
 //   console.log(weekOne[i].name)
//}

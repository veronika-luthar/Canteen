// JavaScript source code

function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}

let newDiv = [];
let newButton = [];
let info = [];

let morningTea = [];

morningTea.push(new menuItems("Cheese Roll", 4, "Morning Tea"));
morningTea.push(new menuItems("Savoury Pinwheel", 3, "Morning Tea"));
morningTea.push(new menuItems("Muffins", 3, "Morning Tea"));
morningTea.push(new menuItems("Cinnamon Swirl", 3, "Morning Tea"));
morningTea.push(new menuItems("Brownie", 3, "Morning Tea"));
morningTea.push(new menuItems("Cheese Pulls", 3, "Morning Tea"));
morningTea.push(new menuItems("Sandwiches", 4, "Morning Tea"));
morningTea.push(new menuItems("Bagels", 4, "Morning Tea"));

function createElement(type, obj, name, text) {
    array = document.createElement(type);
    array.classList = name;
    array.innerHTML = text;
    return obj.appendChild(array);
}

for (let i = 0; i < morningTea.length; i++) {
    newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
    newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
    info[i] = new createElement("blockquote", newDiv[i], "info", morningTea[i].name);
}

let weekOne = [];

weekOne[0] = new menuItems("Chicken nuggets with baked chips", 5, "Lunch");
weekOne[1] = new menuItems("Pumpkin and Feta bake", 5, "Lunch");
weekOne[2] = new menuItems("Macaroni and cheese", 5, "Lunch");
weekOne[3] = new menuItems("Butter chicken on rice", 5, "Lunch");
weekOne[4] = new menuItems("Fried rice", 5, "Lunch");

let weekTwo = [];

weekTwo[0] = new menuItems("Chicken nuggets with baked chips", 5, "Lunch");
weekTwo[1]= new menuItems("Bacon, egg, potato and spinach pie", 5, "Lunch");
weekTwo[2] = new menuItems("Lasagne", 5, "Lunch");
weekTwo[3] = new menuItems("Meatballs on tomato sauce with rice", 5, "Lunch");
weekTwo[4] = new menuItems("Chicken or beef burgers with tomato relish and cheese", 5, "Lunch");

for (let i = 0; i < weekOne.length; i++) {
    console.log(weekOne[i].name)
}

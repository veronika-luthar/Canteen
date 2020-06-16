// JavaScript source code
//function onClickTest() {
  //  document.getElementById("demo").innerHTML = 5 + 6;
//}

function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}



function addElement() {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("hi there");
    newDiv.appendChild(newContent);
    document.body.insertBefore(newDiv);
}

//document.createElement("div");
//document.getElementsByClassName("Container").appendChild(allItems[allItems.length-1])

// for loop for menu item things (make a div) document.createElement("div") array[array.length  -1]; document.getElementsByClassName("Container").appendChild(array[array.length - 1])
//array of menu items, with html elements
//make a menu file 
let allItems = [];

allItems[0] = new menuItems("Cheese Roll", 4, "Morning Tea");
allItems[1] = new menuItems("Savoury Pinwheel", 3, "Morning Tea");
allItems[2] = new menuItems("Muffins", 3, "Morning Tea");
allItems[3] = new menuItems("Cinnamon Swirl", 3, "Morning Tea");
allItems[4] = new menuItems("Brownie", 3, "Morning Tea");
allItems[5] = new menuItems("Cheese Pulls", 3, "Morning Tea");
allItems[6] = new menuItems("Sandwiches", 4, "Morning Tea");
allItems[7] = new menuItems("Bagels", 4, "Morning Tea");

//allItems.push(new menuItems("name", 4, "Morning Tea"));


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

//creates a div not text output you dumbo 

for (let i = 0; i < allItems.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.appendChild(allItems[allItems.length - 1]);
    console.log(newDiv);

}
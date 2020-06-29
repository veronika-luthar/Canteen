// JavaScript source code

// displaying the menu items
let newDiv = [];
let newButton = [];
let info = [];
let itemNumber = [];


// function to create menu items and put them in an array
function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}

function findPriceByName(menuArray, name) {


    // return menuArray[bla].price;
}
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
document.getElementById("cart-container").style.display = "none";



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
                // cart.push(morningTea[i]);
                if (cart[morningTea[i].name]) {
                    cart[morningTea[i].name]++;
                }
                else
                    cart[morningTea[i].name] = 1;
                
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



// display cart & hide menu
function hideMenu() {
    document.getElementById("container").style.display = "none";
    document.getElementById("button-block").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("morning-tea").style.display = "none";

    document.getElementById("order-online").innerHTML = "CART";
    document.getElementById("cart-container").style.display = "block";

    // display cart items
    //for (let i = 0; i < cart.length; i++) {
    displaycart = new Array();
    Object.keys(cart).forEach(function (key, index) {
        console.log(key + " = " + this[key]);
        displaycart[key] = new createElement("p", document.getElementById("cart-container"), "cart-item", key + " " + this[key]);
    }, cart);
/*    for (var i in cart) {


         cart[i] = new createElement("p", document.getElementById("cart-container"), "cart-item", i.name);
        
      //  cart[i] = new createElement("p", document.getElementById("cart-container"), "quantity", 1);

    //    duplicateElements(cart);
   //     console.log(itemQuantity(cart));
    //    for (var key in cart) {
      //      if (cart.hasOwnProperty(key))
        //        console.log(key + " = " + cart[key]);
        //}

       // console.log(cart, i)
 //       if (cart[i] === cart[i]) {
   //         document.getElementsByClassName("quantity")[i] = parselnt(createElement.text + 1);
            
     //   }
    }
    */
}

function itemQuantity(array) {



   
    let display = [], quantity = [], prev;

    array.sort();
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] !== prev) {
            display.push(array[i]);
            quantity.push(1);
        }
        else {
            quantity[quantity.length - 1]++;
        }
        prev = array[i]
    }
    return [display, quantity];
}

//function duplicateElements(array) {
  //  let sortedArray = array.slice().sort();
 //   let test = [];

 //   for (let i = 0; i < sortedArray.length - 1; i++) {
  //      if (sortedArray[i + 1] === sortedArray[i]) {
  //          test.push(sortedArray[i])
  //          console.log(test);
  //      }
  //  }
//}

//function getOccurence(array, value) {
 //   return array.filter((v) => (v === value)).length;
//};


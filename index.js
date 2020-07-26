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

function getPrice(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (name = array[i].name) {
            return array[i].price;
        }
    }
    return -1;
}

function getAllItemPrice(name) {
    let p0 = getPrice(morningTea, name);
    let p1 = getPrice(weekOne, name);
    let p2 = getPrice(weekTwo, name);
    if (p0 => 0) {
        return p0;
    }
    else if (p1 => 0) {
        return p1;
    }
    else {
        return p2;
    }

};

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
document.getElementById("student-form").style.display = "none";




// on button click changes the buttons' styling and menu
function menuButtonClick(dir) {
    if (dir === 1) {
        document.getElementById("lunch").classList = "button-current";
        document.getElementById("morning-tea").classList = "button-default";
        document.getElementById("dropdown").classList.toggle("show")
    }
    else {
        document.getElementById("morning-tea").classList = "button-current";
        document.getElementById("lunch").classList = "button-default";
        displayMenu("morning tea");
        document.getElementById("dropdown").classList.toggle("hide");
    }
}

// on "week" button click displays correct week

function dropdown(week) {
    if (week === 1) {

        displayMenu("lunch", 1);
        document.getElementById("dropdown").classList.toggle("hide");
    }

    else {
        displayMenu("lunch", 2);
        document.getElementById("dropdown").classList.toggle("hide");
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
            itemNumber[i] = new createElement("textarea", newDiv[i], "input", "1");
            info[i] = new createElement("blockquote", newDiv[i], "info", morningTea[i].name + "\r\n$" + morningTea[i].price);

            newButton[i].onclick = function () {
                // pushes the morning tea item's name to the cart array
                if (cart[morningTea[i].name]) {
                    cart[morningTea[i].name]++;
                }
                else
                    cart[morningTea[i].name] = 1;
                 // on add button click it changes colour and then changes back a second later
                newButton[i].classList = "clicked-buttons";
                setTimeout(function () {
                    newButton[i].classList = "buttons";
                }, 150);
            };
        }
    }

    else { 

        if (week === 1) {

            for (let i = 0; i < weekOne.length; i++) {
                newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
                newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
                itemNumber[i] = new createElement("textarea", newDiv[i], "input", "1");
                info[i] = new createElement("blockquote", newDiv[i], "info", weekOne[i].name + "\r\n$" + weekOne[i].price);

                newButton[i].onclick = function () {
                    //   cart.push(weekOne[i]);
                    if (cart[weekOne[i].name]) {
                        cart[weekOne[i].name]++;
                    }
                    else
                        cart[weekOne[i].name] = 1;

                    newButton[i].classList = "clicked-buttons";
                    setTimeout(function () {
                        newButton[i].classList = "buttons";
                    }, 150);
                };
            }
        }

        else {

            for (let i = 0; i < weekTwo.length; i++) {
                newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
                newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD");
                itemNumber[i] = new createElement("textarea", newDiv[i], "input", "1");
                info[i] = new createElement("blockquote", newDiv[i], "info", weekTwo[i].name + "\r\n$" + weekTwo[i].price);

                newButton[i].onclick = function () {
                    //cart.push(weekTwo[i]);
                    if (cart[weekTwo[i].name]) {
                        cart[weekTwo[i].name]++;
                    }
                    else
                        cart[weekTwo[i].name] = 1;

                    newButton[i].classList = "clicked-buttons";
                    setTimeout(function () {
                        newButton[i].classList = "buttons";
                    }, 150);
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

    document.getElementById("cart-container").innerHTML = "";

    document.getElementById("order-online").innerHTML = "CART";
    document.getElementById("cart-container").style.display = "block";
 //   document.getElementById("ul").style.display = "block";

    let backButton = new createElement("button", document.getElementById("cart-container"), "back-button", "BACK");

    backButton.onclick = function () {
        document.getElementById("container").style.display = "flex";
        document.getElementById("button-block").style.display = "block";
        document.getElementById("lunch").style.display = "";
        document.getElementById("morning-tea").style.display = "";

        document.getElementById("order-online").innerHTML = "ORDER ONLINE";
        document.getElementById("cart-container").style.display = "none";
    }

   // let checkoutButton;

    let num = 0;
    // display cart items
    //for (let i = 0; i < cart.length; i++) {
    displaycart = [];
    Object.keys(cart).forEach(function (name, index) {
        console.log(name + " = " + this[name]);
        displaycart[name] = new createElement("p", document.getElementById("cart-container"), "cart-item", name + " " + this[name] + " $" + this[name] * getAllItemPrice(name)); 
        num++;

        let sum = 0;

        for (let i = 0; i < getAllItemPrice(name).length; i++) {
            sum = sum + getAllItemPrice(name)[i];
            console.log(sum);
        }

    }, cart);

 

    


    if (num >= 1) {
        let checkoutButton = new createElement("button", document.getElementById("cart-container"), "checkout-button", "CHECKOUT");

        checkoutButton.onclick = function () {
            document.getElementById("overlay").classList = "overlay";
            document.getElementById("body").style = "overflow: hidden";
            document.getElementById("student-form").style.display = "flex";
            let studentName = new createElement("input", document.getElementById("student-form"), "student-name", "Student Name");
            studentName.setAttribute("type", "text");
            studentName.setAttribute("placeholder", "Student Name");

            let tutorClass = new createElement("input", document.getElementById("student-form"), "tutor-class", "Tutor Class");
            tutorClass.setAttribute("type", "text");
            tutorClass.setAttribute("placeholder", "Tutor Class");

            let studentNumber = new createElement("input", document.getElementById("student-form"), "student-number", "Student Number");
            studentNumber.setAttribute("type", "text");
            studentNumber.setAttribute("placeholder", "Student Number");

           //console.log(document.getElementById("student-name").value);
            let testButton = new createElement("button", document.getElementById("student-form"), "x-button", "X");
            testButton.onclick = function () {
                console.log(studentName.value);
                console.log(tutorClass.value);
                console.log(studentNumber.value);
}

        }
    }

    else {
        new createElement("p", document.getElementById("cart-container"), "no-items", "NO ITEMS IN CART");
    }

}
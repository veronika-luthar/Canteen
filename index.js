// JavaScript source code

// display menu items (arrays)
let newDiv = [];
let newButton = [];
let info = [];
let itemNumber = [];
let optionsDiv = [];
let subButton = [];


// function to create menu items and put them in an array
function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}

// function to get the price from each array
function getPrice(array, name) {
    for (let i = 0; i < array.length; i++) {
//        console.log(name + " " + array[i].name + " " + array[i].price);
        if (name == array[i].name) {
//            console.log("--");
            return array[i].price;
            
        }
        
    }

    return -1;
}

// function to get the price from all arrays
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

let sandwichOptions = [];

sandwichOptions.push("Beef, cheese, lettuce and onion");
sandwichOptions.push("Ham, tomato, egg, lettuce and mayo");
sandwichOptions.push("Bacon, lettuce and tomato");
sandwichOptions.push("Vegetarian (egg, tomato, alfa sprouts, cucumber and mustard)");
sandwichOptions.push("Chicken, creamy cheese, salad and apricot");

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

// hides the cart and student form divs
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
function createElement(type, obj, name, text, aid ) {
    array = document.createElement(type);
    array.classList = name;
    array.innerHTML = text;
    if (aid) array.id = aid;
    return obj.appendChild(array);
}

// function to display the menu depending on button click
function displayMenu(menu, week) {

    // clears "container" contents
    document.getElementById("container").innerHTML = "";

    if (menu === "morning tea") {
        for (let i = 0; i < morningTea.length; i++) {
            newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD", morningTea[i].name);
            itemNumber[i] = new createElement("input", newDiv[i], "input", "1");
            itemNumber[i].setAttribute("type", "number");
            itemNumber[i].setAttribute("min", "1");
            itemNumber[i].setAttribute("max", "3");
            itemNumber[i].setAttribute("onkeydown", "return false;")
            itemNumber[i].value = 1;
            

            info[i] = new createElement("blockquote", newDiv[i], "info", morningTea[i].name + "<br>$" + morningTea[i].price);

            newButton[i].onclick = function () {

                newButton[i].classList = "clicked-buttons";
                setTimeout(function () {
                    newButton[i].classList = "buttons";
                }, 100);

                if (morningTea[i].name == "Sandwiches") {
                    sandwichDiv = new createElement("div", document.getElementById("body"), "sandwich-options", "");
                    
                    for (let i = 0; i < sandwichOptions.length; i++) {
                        optionsDiv[i] = new createElement("div", sandwichDiv, "sandwich-options-div", "");
                        info[i] = new createElement("blockquote", optionsDiv[i], "info", sandwichOptions[i]);
                        subButton[i] = new createElement("button", optionsDiv[i], "sandwich-buttons", "ADD", sandwichOptions);

                        subButton[i].onclick = function () {
                            subButton[i].classList = "clicked-sandwich-buttons";
                            setTimeout(function () {
                                subButton[i].classList = "sandwich-buttons";
                            }, 100);
                        }
                    }
                }

                else {

                    // pushes the morning tea item's name to the cart array
                    if (cart[morningTea[i].name]) {
                        cart[morningTea[i].name] = cart[morningTea[i].name] + Number(itemNumber[i].value);

                    }
                    else {
                        cart[morningTea[i].name] = Number(itemNumber[i].value);
                    // on "add" button click it changes colour and then changes back a second later
                    }
                }


            };
        }
    }

    else { 

        // gets current day
        switch (new Date().getDay()) {
            // Sunday (displays monday menu)
            case 0:
                day = 0
                break;
            // Monday
            case 1:
                day = 0
                break;
            // Tuesday
            case 2:
                day = 1
                break;
            // Wednesday
            case 3:
                day = 2
                break;
            // Thursday
            case 4:
                day = 3
                break;
            // Friday
            case 5:
                day = 4
                break;
            // Saturday (displays monday menu)
            case 6:
                day = 0
                break;
        }

        // displays week 1 lunch menu
        if (week === 1) {

            newDiv[day] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[day] = new createElement("button", newDiv[day], "buttons", "ADD");
            itemNumber[day] = new createElement("input", newDiv[day], "input", "1");
            itemNumber[day].setAttribute("type", "number");
            itemNumber[day].setAttribute("min", "1");
            itemNumber[day].setAttribute("max", "1");
            itemNumber[day].setAttribute("onkeydown", "return false;")
            itemNumber[day].value = 1;
            info[day] = new createElement("blockquote", newDiv[day], "info", weekOne[day].name + "<br>$" + weekOne[day].price);

            newButton[day].onclick = function () {
                //   cart.push(weekOne[i]);
                if (cart[weekOne[day].name]) {
                    cart[weekOne[day].name] = cart[weekOne[day].name] + Number(itemNumber[day].value);

                }
                else
                    cart[weekOne[day].name] = Number(itemNumber[day].value);

                newButton[day].classList = "clicked-buttons";
                setTimeout(function () {
                    newButton[day].classList = "buttons";
                }, 100);
            };
        }

        // displays week 2 lunch menu
        else {

            newDiv[day] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[day] = new createElement("button", newDiv[day], "buttons", "ADD");
            itemNumber[day] = new createElement("input", newDiv[day], "input", "1");
            itemNumber[day].setAttribute("type", "number");
            itemNumber[day].setAttribute("min", "1");
            itemNumber[day].setAttribute("max", "1");
            itemNumber[day].setAttribute("onkeydown", "return false;")
            itemNumber[day].value = 1;
            info[day] = new createElement("blockquote", newDiv[day], "info", weekTwo[day].name + "<br>$" + weekTwo[day].price);

            newButton[day].onclick = function () {

              //  mennyi cucc van mar ? sok ? alert nem vehetsz tobbet

               // szendvics? 
                //cart.push(weekTwo[i]);
                if (cart[weekTwo[day].name]) {
                    cart[weekTwo[day].name] = cart[weekTwo[day].name] + Number(itemNumber[day].value);

                }
                else
                    cart[weekTwo[day].name] = Number(itemNumber[day].value);

                newButton[day].classList = "clicked-buttons";
                setTimeout(function () {
                    newButton[day].classList = "buttons";
                }, 100);
            };
   
        }
    }
}

// checkout form inputs


// student name input field
let studentName = new createElement("input", document.getElementById("student-form"), "student-name", "Student Name");
studentName.setAttribute("type", "text");
studentName.setAttribute("placeholder", "Student Name");

// tutor class input field
let tutorClass = new createElement("input", document.getElementById("student-form"), "tutor-class", "Tutor Class");
tutorClass.setAttribute("type", "text");
tutorClass.setAttribute("placeholder", "Tutor Class");

// student number input field
let studentNumber = new createElement("input", document.getElementById("student-form"), "student-number", "Student Number");
studentNumber.setAttribute("type", "text");
studentNumber.setAttribute("placeholder", "Student Number");

// "place order" button
let placeOrder = new createElement("button", document.getElementById("student-form"), "place-order-button", "Place Order");
placeOrder.onclick = function () {
    console.log(studentName.value);
    console.log(tutorClass.value);
    console.log(studentNumber.value);

    //document.getElementById("student-form").style.display = "none";
    //document.getElementById("body").style = "none";
    //ddocument.getElementById("overlay").classList = "none";
}

// x button
let xButton = new createElement("button", document.getElementById("student-form"), "x-button", "X");
xButton.onclick = function () {
    document.getElementById("student-form").style.display = "none";
    document.getElementById("body").style = "none";
    document.getElementById("overlay").classList = "none";
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
        if (this[name] > 0)
            displaycart[name] = new createElement("p", document.getElementById("cart-container"), "cart-item", name + " " + this[name] + " $" + this[name] * getAllItemPrice(name));
        num++;

      //  let sum = 0;

       // for (let i = 0; i < getAllItemPrice(name).length; i++) {
    //        sum = sum + getAllItemPrice(name)[i];
     //       console.log(sum);
     //   }

    }, cart);

    if (num >= 1) {
        let checkoutButton = new createElement("button", document.getElementById("cart-container"), "checkout-button", "CHECKOUT");

        checkoutButton.onclick = function () {
            document.getElementById("overlay").classList = "overlay";
            document.getElementById("body").style = "overflow: hidden";
            document.getElementById("student-form").style.display = "flex";
  
        }
    }

    else {
        new createElement("p", document.getElementById("cart-container"), "no-items", "NO ITEMS IN CART");
    }
}


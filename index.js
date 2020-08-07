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
       console.log(name + " " + array[i].name + " " + array[i].price);
        if (name == array[i].name) {
            console.log("--");
            return array[i].price;
            
        }
        
    }

    return -1;
}

// function to get the price from all arrays
function getAllItemPrice(name) {
    name = name.split("-")[0];
    let p0 = getPrice(morningTea, name);
    let p1 = getPrice(weekOne, name);
    let p2 = getPrice(weekTwo, name);
    if (p0 >= 0) {
        return p0;
    }
    else if (p1 >= 0) {
        console.log("p1");
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

// sandwich sub options 
let sandwichOptions = [];

sandwichOptions.push(new menuItems("Beef, cheese, lettuce and onion", 4, "Morning Tea"));
sandwichOptions.push(new menuItems("Ham, tomato, egg, lettuce and mayo", 4, "Morning Tea"));
sandwichOptions.push(new menuItems("Bacon, lettuce and tomato", 4 , "Morning Tea"));
sandwichOptions.push(new menuItems("Vegetarian (egg, tomato, alfa sprouts, cucumber and mustard)", 4, "Morning Tea"));
sandwichOptions.push(new menuItems("Chicken, creamy cheese, salad and apricot", 4, "Morning Tea"));

// bagel sub options
let bagelOptions = [];

bagelOptions.push(new menuItems("Smoked salmon, creamy cheese, alfa sprouts and tomato relish", 4, "Morning Tea"));
bagelOptions.push(new menuItems("Tomato, onion, creamy cheese, avocado and tomato relish", 4, "Morning Tea"));

// lunch menu for week one
let weekOne = [];

weekOne.push(new menuItems("Chimkn nugets with baked chips", 5, "Lunch"));
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

let morningTeaAmount = 0;
let lunchAmount = 0;
let test = [];

// displays the morning tea menu as default
displayMenu("morning tea");

// hides the cart and student form divs
document.getElementById("cart-container").style.display = "none";
document.getElementById("student-form").style.display = "none";

// on button click changes the buttons' styling and menu
function menuButtonClick(dir) {
    if (dir === 1) {

        dropdown();
        document.getElementById("lunch").classList = "button-current";
        document.getElementById("morning-tea").classList = "button-default";
        document.getElementById("dropdown").style.display = "block";

        // displays morning tea menu until the user clicks on either "week 1" or "week 2"
        displayMenu("morning tea");

        let dropdownToggle = document.getElementById("dropdown");
        dropdownToggle.onclick = function () {
            document.getElementById("dropdown").style.display = "none";
        }

    }
    else {
        document.getElementById("morning-tea").classList = "button-current";
        document.getElementById("lunch").classList = "button-default";
        displayMenu("morning tea");
        document.getElementById("dropdown").style.display = "none";
    }
}

// on "week" button click displays correct week
function dropdown(week) {
    if (week === 1) {
        displayMenu("lunch", 1);
    }

    else {
        displayMenu("lunch", 2);
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

// x button

function xButtonCreate(form) {
let xButton = new createElement("button", form, "x-button", "X");
xButton.onclick = function () {
    form.style.display = "none";
    document.getElementById("body").style = "none";
    document.getElementById("overlay").classList = "none";
    }
}

// changes the colour of the "add" buttons to be yellow for 100 ticks
function buttonColourChange(array, type, clicked, defaultbutton) {
    array[type].classList = clicked;
    setTimeout(function () {
        array[type].classList = defaultbutton;
    }, 100);
}

// function to display the menu depending on button click
function displayMenu(menu, week) {

    // clears "container" contents
    document.getElementById("container").innerHTML = "";

    if (menu === "morning tea") {
        for (let i = 0; i < morningTea.length; i++) {

            
            // creates a "div"s for the items to go in
            newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");

            // creates a new button for each item in the array
            newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD", morningTea[i].name);

            // creates a text input where you can choose the amount you would like to put in the cart. min set at 1, max set at 3
            itemNumber[i] = new createElement("input", newDiv[i], "input", "1");
            itemNumber[i].setAttribute("type", "number");
            itemNumber[i].setAttribute("min", "1");
            itemNumber[i].setAttribute("max", "3");
            itemNumber[i].setAttribute("onkeydown", "return false;")
            itemNumber[i].value = 1;
            
            // displays the name and price for each item
            info[i] = new createElement("blockquote", newDiv[i], "info", morningTea[i].name + "<br>$" + morningTea[i].price);

            newButton[i].onclick = function () {

               
                // changes the colour of the button to yellow for 100 ticks as user feedback
                buttonColourChange(newButton, i, "clicked-buttons", "buttons");

                // checks if the item is sandwiches
                if (morningTea[i].name == "Sandwiches") {

                    // grays out the background and turns off overflow
                    document.getElementById("overlay").classList = "overlay";
                    document.getElementById("body").style = "overflow: hidden";

                    // creates a "div" to hold all the elements in
                    let sandwichDiv = new createElement("div", document.getElementById("body"), "sub-options", "");

                    xButtonCreate(sandwichDiv);

                    for (let i = 0; i < sandwichOptions.length; i++) {

                        // creates a div for the text and buttons to be stored in
                        optionsDiv[i] = new createElement("div", sandwichDiv, "sub-options-div", "");

                        // displays the options
                        info[i] = new createElement("blockquote", optionsDiv[i], "options-info", sandwichOptions[i].name);

                        // creates a new button for each item in the array
                        subButton[i] = new createElement("button", optionsDiv[i], "sub-buttons", "ADD", "Sandwiches");

                        // changes the colour of the button to yellow for 100 ticks as user feedback
                        subButton[i].onclick = function () {
                            buttonColourChange(subButton, i, "clicked-sub-buttons", "sub-buttons");
                            sandwichDiv.style.display = "none";
                            document.getElementById("body").style = "none";
                            document.getElementById("overlay").classList = "none";

                            let cartName = this.id + "-" + sandwichOptions[i].name;


                            if ((morningTeaAmount + Number(itemNumber[i].value)) > 3) {
                                window.alert("You may only order 3 morning tea items!");
                            }

                            else if (cart[cartName]) {

                                cart[cartName] = cart[cartName] + Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");

                            }


                            else {
                                cart[cartName] = Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");
                            }
                        }
                    }
                }

                // checks if the item is bagels
                else if (morningTea[i].name == "Bagels") {

                    // grays out the background and turns off overflow
                    document.getElementById("overlay").classList = "overlay";
                    document.getElementById("body").style = "overflow: hidden";

                    // creates "div" to hold elements in
                    bagelDiv = new createElement("div", document.getElementById("body"), "sub-options", "");

                    // creates "x" button
                    xButtonCreate(bagelDiv);

                    for (let i = 0; i < bagelOptions.length; i++) {

                        // creates a div, blockquote and button for each item in the array
                        optionsDiv[i] = new createElement("div", bagelDiv, "sub-options-div", "");

                        info[i] = new createElement("blockquote", optionsDiv[i], "options-info", bagelOptions[i].name);

                        subButton[i] = new createElement("button", optionsDiv[i], "sub-buttons", "ADD", "Bagels");

                        subButton[i].onclick = function () {
                            
                            bagelDiv.style.display = "none";
                            document.getElementById("body").style = "none";
                            document.getElementById("overlay").classList = "none";

                            buttonColourChange(subButton, i, "clicked-sub-buttons", "sub-buttons");

                            let cartName = this.id + "-" + bagelOptions[i].name;

                            if ((morningTeaAmount + Number(itemNumber[i].value)) > 3) {
                                window.alert("You may only order 3 morning tea items!");
                            }

                            else if (cart[cartName]) {

                                cart[cartName] = cart[cartName] + Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");

                            }


                            else {
                                cart[cartName] = Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");
                            }

                        }
                    }
                }

                else {

                    // pushes the morning tea item's name to the cart array

                    if ((morningTeaAmount + Number(itemNumber[i].value)) > 3) {
                        window.alert("You may only order 3 morning tea items!");
                    }

                    else if (cart[morningTea[i].name]) {

                        cart[morningTea[i].name] = cart[morningTea[i].name] + Number(itemNumber[i].value);
                        morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                        window.alert(morningTea[i].name + " x" + itemNumber[i].value + " has been added to the cart.");

                    }
                        
                    
                    else {
                        cart[morningTea[i].name] = Number(itemNumber[i].value);
                        morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                        window.alert(morningTea[i].name + " x" + itemNumber[i].value + " has been added to the cart.");
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

                buttonColourChange(newButton, day, "clicked-buttons", "buttons");

                if (lunchAmount == 1) {
                    window.alert("You may only order 1 lunch item!");
                }

                else if (cart[weekOne[day].name]) {
                    cart[weekOne[day].name] = cart[weekOne[day].name] + Number(itemNumber[day].value);
                    lunchAmount = lunchAmount + Number(itemNumber[day].value);
                    window.alert(weekOne[day].name + " x" + itemNumber[day].value + " has been added to the cart.");

                }
                else {
                    cart[weekOne[day].name] = Number(itemNumber[day].value);
                    lunchAmount++;
                    window.alert(weekOne[day].name + " x" + itemNumber[day].value + " has been added to the cart.");
                }
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

                buttonColourChange(newButton, day, "clicked-buttons", "buttons");

                if (lunchAmount == 1) {
                    window.alert("You may only order 1 lunch item!");
                }

                else if (cart[weekTwo[day].name]) {
                    cart[weekTwo[day].name] = cart[weekTwo[day].name] + Number(itemNumber[day].value);
                    lunchAmount = lunchAmount + Number(itemNumber[day].value);
                    window.alert(weekTwo[day].name + " x" + itemNumber[day].value + " has been added to the cart.");

                }
                else {
                    cart[weekTwo[day].name] = Number(itemNumber[day].value);
                    lunchAmount++;
                    window.alert(weekTwo[day].name + " x" + itemNumber[day].value + " has been added to the cart.");
                }
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
tutorClass.setAttribute("maxlength", 3);

// student number input field
let studentNumber = new createElement("input", document.getElementById("student-form"), "student-number", "Student Number");
studentNumber.setAttribute("type", "text");
studentNumber.setAttribute("placeholder", "Student Number");
studentNumber.setAttribute("maxlength", 5);

// "place order" button
let placeOrder = new createElement("button", document.getElementById("student-form"), "place-order-button", "Place Order");
placeOrder.onclick = function () {
    console.log(studentName.value);
    console.log(tutorClass.value);
    console.log(studentNumber.value);

    document.getElementById("student-form").style.display = "none";
    document.getElementById("body").style = "none";
    document.getElementById("overlay").classList = "none";
}

// "x" button
xButtonCreate(document.getElementById("student-form"));

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


    let num = 0;
    let totalPrice = 0;

    let cartHeader = new createElement("div", document.getElementById("cart-container"), "cart-div", "");

    let itemTag = new createElement("p", cartHeader, "cart-header", "Item");
    let noTag = new createElement("p", cartHeader, "cart-item", "No.");
    let priceTag = new createElement("p", cartHeader, "cart-item", "Price");
    


    displaycart = [];
    Object.keys(cart).forEach(function (name, index) {
        console.log(name + " = " + this[name]);
        let price = 0;

        if (this[name] > 0) {
            price = getAllItemPrice(name) * this[name];
            totalPrice = price + totalPrice;

            let cartDiv = new createElement("div", document.getElementById("cart-container"), "cart-div", "");
            
            displaycart[name] = new createElement("p", cartDiv, "cart-header", name);
            new createElement("p", cartDiv, "cart-item", " x" + this[name] )
            new createElement("p", cartDiv, "cart-item", " $" + price);
            let test = new createElement("button", cartDiv, "minus-button", "-");
            test.onclick = function () {
               // console.log("bleh");

                if (getPrice(morningTea, name) == -1)
                    lunchAmount = lunchAmount - cart[name];

                else
                    morningTeaAmount = morningTeaAmount - cart[name];
                cart[name] = cart[name] - 1;
                hideMenu();

            }

        }

        num++;

    }, cart);

    let totalPriceTag = new createElement("p", document.getElementById("cart-container"), "cart-item", "Total price: $" + totalPrice);

    console.log(totalPrice);

    if (num >= 1) {
        let checkoutButton = new createElement("button", document.getElementById("cart-container"), "checkout-button", "CHECKOUT");

        checkoutButton.onclick = function () {
            document.getElementById("overlay").classList = "overlay";
            document.getElementById("body").style = "overflow: hidden";
            document.getElementById("student-form").style.display = "flex";
  
        }
    }

    else {
        totalPriceTag.style.display = "none";
        priceTag.style.display = "none";
        noTag.style.display = "none";
        itemTag.style.display = "none";
        
        new createElement("p", document.getElementById("cart-container"), "no-items", "NO ITEMS IN CART");
    }
}


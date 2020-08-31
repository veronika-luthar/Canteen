// JavaScript source code

// display menu items (arrays)
let newDiv = [];
let newButton = [];
let info = [];
let itemNumber = [];
let optionsDiv = [];
let subButton = [];

// item mins and maxes
const itemMin = 1;
const morningTeaMax = 3;
const lunchMax = 1;

// tutor class max char length
const tutorClassMaxLength = 3;

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

// sandwich sub-options 
let sandwichOptions = [];

sandwichOptions.push(new menuItems("Beef, cheese, lettuce and onion", 4, "Morning Tea"));
sandwichOptions.push(new menuItems("Ham, tomato, egg, lettuce and mayo", 4, "Morning Tea"));
sandwichOptions.push(new menuItems("Bacon, lettuce and tomato", 4 , "Morning Tea"));
sandwichOptions.push(new menuItems("Vegetarian (egg, tomato, alfa sprouts, cucumber and mustard)", 4, "Morning Tea"));
sandwichOptions.push(new menuItems("Chicken, creamy cheese, salad and apricot", 4, "Morning Tea"));

// bagel sub-options
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

// morning tea and lunch item amounts
let morningTeaAmount = 0;
let lunchAmount = 0;

// tutor class codes
const tutorClassCodes = ["ABH", "AJF", "AHB", "AWA", "BSA", "BLA", "BRI", "BGW", "HKA", "HML", "HMD", "HKI", "RWT", "RTH", "RHR", "RBN", "SMN", "SRO", "SDG", "SDA"];

// displays the morning tea menu as default
displayMenu("morning tea");

// hides the cart and student form divs
document.getElementById("cart-container").style.display = "none";
document.getElementById("student-form").style.display = "none";

// function to create menu items and put them in an array
function menuItems(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
}

// function to get the price from each array
function getPrice(array, name) {
    for (let i = 0; i < array.length; i++) {

        // if name of item in cart is the same as one in the array, return the price
        if (name == array[i].name) {
            return array[i].price;
        }
    }
    return -1;
}

// function to get the price from all arrays
function getAllItemPrice(name) {

    // bagel and sandwich option outputs
    name = name.split("-")[0];
    let p0 = getPrice(morningTea, name);
    let p1 = getPrice(weekOne, name);
    let p2 = getPrice(weekTwo, name);
    if (p0 >= 0) {
        return p0;
    }
    else if (p1 >= 0) {
        return p1;

    }
    else {
        return p2;
    }

};

// on button click changes the buttons' styling and menu
function menuButtonClick(dir) {
    if (dir === 1) {
        // runs the dropdown function
        dropdown();

        // changes lunch button colour to the current and the morning tea to the default
        document.getElementById("lunch").classList = "button-current";
        document.getElementById("morning-tea").classList = "button-default";
        document.getElementById("dropdown").style.display = "block";

        // displays morning tea menu until the user clicks on either "week 1" or "week 2"
        displayMenu("morning tea");

        // when week 1 or week 2 is clicked, the dropdown will be hidden
        let dropdownToggle = document.getElementById("dropdown");
        dropdownToggle.onclick = function () {
            document.getElementById("dropdown").style.display = "none";
        }

    }
    else {

        // changes lunch button colour to the default and the morning tea to the current
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

// creates "x" button which is used throughout the website
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

    // checks if the morning tea button is clicked
    if (menu === "morning tea") {
        for (let i = 0; i < morningTea.length; i++) {

            
            // creates a "div"s for the items to go in
            newDiv[i] = new createElement("div", document.getElementById("container"), "item", "");

            // creates a new button for each item in the array
            newButton[i] = new createElement("button", newDiv[i], "buttons", "ADD", morningTea[i].name);

            // creates a text input where you can choose the amount you would like to put in the cart. min set at 1, max set at 3
            itemNumber[i] = new createElement("input", newDiv[i], "input", "1");
            itemNumber[i].setAttribute("type", "number");
            itemNumber[i].setAttribute("min", itemMin);
            itemNumber[i].setAttribute("max", morningTeaMax);
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

                    // creates "x" button
                    xButtonCreate(sandwichDiv);

                    for (let i = 0; i < sandwichOptions.length; i++) {

                        // creates a div for the text and buttons to be stored in
                        optionsDiv[i] = new createElement("div", sandwichDiv, "sub-options-div", "");

                        // displays the options
                        info[i] = new createElement("blockquote", optionsDiv[i], "options-info", sandwichOptions[i].name);

                        // creates a new button for each item in the array
                        subButton[i] = new createElement("button", optionsDiv[i], "sub-buttons", "ADD", "Sandwiches");

                        subButton[i].onclick = function () {

                            // resets page to previous look
                            sandwichDiv.style.display = "none";
                            document.getElementById("body").style = "none";
                            document.getElementById("overlay").classList = "none";

                            // assigns the variable cartName to the item name and the sub-option
                            let cartName = this.id + "-" + sandwichOptions[i].name;

                            // checks if the item amount the user wants to add exceeds 3
                            if ((morningTeaAmount + Number(itemNumber[i].value)) > 3) {
                                window.alert("You may only order 3 morning tea items!");
                            }

                            // if the item is already in the cart array it adds one onto it
                            else if (cart[cartName]) {

                                cart[cartName] = cart[cartName] + Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");

                            }

                            // if the item is not in the cart array, it adds it
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

                        // displays the options
                        info[i] = new createElement("blockquote", optionsDiv[i], "options-info", bagelOptions[i].name);

                        // creates a new button for each item in the array
                        subButton[i] = new createElement("button", optionsDiv[i], "sub-buttons", "ADD", "Bagels");

                        subButton[i].onclick = function () {

                            // resets page to previous look
                            bagelDiv.style.display = "none";
                            document.getElementById("body").style = "none";
                            document.getElementById("overlay").classList = "none";


                            // assigns the variable cartName to the item name and the sub-option
                            let cartName = this.id + "-" + bagelOptions[i].name;

                            // checks if the item amount the user wants to add exceeds 3
                            if ((morningTeaAmount + Number(itemNumber[i].value)) > 3) {
                                window.alert("You may only order 3 morning tea items!");
                            }

                            // if the item is already in the cart array it adds one onto it
                            else if (cart[cartName]) {
                                cart[cartName] = cart[cartName] + Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");
                            }

                            // if the item is not in the cart array, it adds it
                            else {
                                cart[cartName] = Number(itemNumber[i].value);
                                morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                                window.alert(this.id + " x" + itemNumber[i].value + " has been added to the cart.");
                            }
                        }
                    }
                }

                else {

                    // checks if the item amount the user wants to add exceeds 3
                    if ((morningTeaAmount + Number(itemNumber[i].value)) > 3) {
                        window.alert("You may only order 3 morning tea items!");
                    }

                    // if the item is already in the cart array it adds one onto it
                    else if (cart[morningTea[i].name]) {

                        cart[morningTea[i].name] = cart[morningTea[i].name] + Number(itemNumber[i].value);
                        morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                        window.alert(morningTea[i].name + " x" + itemNumber[i].value + " has been added to the cart.");
                    }
                
                    // if the item is not in the cart array, it adds it
                    else {
                        cart[morningTea[i].name] = Number(itemNumber[i].value);
                        morningTeaAmount = morningTeaAmount + Number(itemNumber[i].value);
                        window.alert(morningTea[i].name + " x" + itemNumber[i].value + " has been added to the cart.");
                    }
                }
            }
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

        // displays week 1 lunch menu, same way as morning tea menu
        if (week === 1) {

            newDiv[day] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[day] = new createElement("button", newDiv[day], "buttons", "ADD");
            itemNumber[day] = new createElement("input", newDiv[day], "input", "1");
            itemNumber[day].setAttribute("type", "number");
            itemNumber[day].setAttribute("min", itemMin);
            itemNumber[day].setAttribute("max", lunchMax);
            itemNumber[day].setAttribute("onkeydown", "return false;")
            itemNumber[day].value = 1;
            info[day] = new createElement("blockquote", newDiv[day], "info", weekOne[day].name + "<br>$" + weekOne[day].price);

            newButton[day].onclick = function () {

                buttonColourChange(newButton, day, "clicked-buttons", "buttons");

                // checks if lunch amount is 1
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
            }
        }

        // displays week 2 lunch menu, same way as morning tea menu
        else {

            newDiv[day] = new createElement("div", document.getElementById("container"), "item", "");
            newButton[day] = new createElement("button", newDiv[day], "buttons", "ADD");
            itemNumber[day] = new createElement("input", newDiv[day], "input", "1");
            itemNumber[day].setAttribute("type", "number");
            itemNumber[day].setAttribute("min", itemMin);
            itemNumber[day].setAttribute("max", lunchMax);
            itemNumber[day].setAttribute("onkeydown", "return false;")
            itemNumber[day].value = 1;
            info[day] = new createElement("blockquote", newDiv[day], "info", weekTwo[day].name + "<br>$" + weekTwo[day].price);

            newButton[day].onclick = function () {

                buttonColourChange(newButton, day, "clicked-buttons", "buttons");

                // checks if lunch amount is 1
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
            }
        }
    }
}

// "x" button
xButtonCreate(document.getElementById("student-form"));

// display cart & hide menu
function hideMenu() {

    // hides the elements of the menu
    document.getElementById("container").style.display = "none";
    document.getElementById("button-block").style.display = "none";
    document.getElementById("lunch").style.display = "none";
    document.getElementById("morning-tea").style.display = "none";

    // removes everything previously in the cart (so there is no repetition of elements)
    document.getElementById("cart-container").innerHTML = "";



    // changes "ORDER ONLINE" text to "CART"
    document.getElementById("order-online").innerHTML = "CART";

    // displays the cart container
    document.getElementById("cart-container").style.display = "block";

    let backButton = new createElement("button", document.getElementById("cart-container"), "back-button", "BACK");

    backButton.onclick = function () {

        // hides cart page and shows menu page
        document.getElementById("container").style.display = "flex";
        document.getElementById("button-block").style.display = "block";
        document.getElementById("lunch").style.display = "";
        document.getElementById("morning-tea").style.display = "";

        // resets the text to "ORDER ONLINE"
        document.getElementById("order-online").innerHTML = "ORDER ONLINE";

        // hides the cart container
        document.getElementById("cart-container").style.display = "none";
    }

    // declares num and total price variables
    let num = 0;
    let totalPrice = 0;

    // creates the header in which itemTag, noTag and priceTag will go in
    let cartHeader = new createElement("div", document.getElementById("cart-container"), "cart-div", "");

    // displays "item"
    let itemTag = new createElement("p", cartHeader, "cart-header", "Item");
    // displays "no."
    let noTag = new createElement("p", cartHeader, "cart-header", "No.");
    // displays "price"
    let priceTag = new createElement("p", cartHeader, "cart-header", "Price");

    // array used to display the cart items
    let displayCart = [];

    Object.keys(cart).forEach(function (name) {
        console.log(name + " = " + this[name]);
        let price = 0;

        // checks if there are any items in the cart
        if (this[name] > 0) {

            // gets the price of all the item
            price = getAllItemPrice(name) * this[name];

            // adds the price onto the total price
            totalPrice = price + totalPrice;

            // creates a div to hold the cart elements in
            let cartDiv = new createElement("div", document.getElementById("cart-container"), "cart-div", "");

            // displays item name
            displayCart[name] = new createElement("p", cartDiv, "cart-item", name);
            // displays item number
            new createElement("p", cartDiv, "cart-item", " x" + this[name])
            // displays item price
            new createElement("p", cartDiv, "cart-item", " $" + price);

            // creates button to remove item/s
            let minusButton = new createElement("button", cartDiv, "minus-button", "-");
            minusButton.onclick = function () {

                window.alert("You have removed an item");

                // if the item is a lunch item it takes 1 off the lunchAmount
                if (getPrice(morningTea, name) == -1) {
                    lunchAmount = lunchAmount - cart[name];
                }

                // if the item is a morning tea item it takes 1 off the morningTeaAmount
                else {
                    morningTeaAmount = morningTeaAmount - cart[name];
                }

                // removes one of the items
                cart[name] = cart[name] - 1;

                // runs the hideMenu function to update the page
                hideMenu();

            }

        }

        // adds onto the num variable
        num++;

    }, cart);

    // displays total price
    let totalPriceTag = new createElement("p", document.getElementById("cart-container"), "cart-total-price", "Total price: $" + totalPrice);

    // checks if there are 1 or more items in the cart
    if (num >= 1) {

        // creates the checkout button
        let checkoutButton = new createElement("button", document.getElementById("cart-container"), "checkout-button", "CHECKOUT");

        // displays the student form div, grays out the background and removes overflow
        checkoutButton.onclick = function () {
            document.getElementById("overlay").classList = "overlay";
            document.getElementById("body").style = "overflow: hidden";
            document.getElementById("student-form").style.display = "flex";
  
        }
    }

    // if there are no items in the cart
    else {

        // hides all these attributes
        totalPriceTag.style.display = "none";
        priceTag.style.display = "none";
        noTag.style.display = "none";
        itemTag.style.display = "none";

        // displays "no items in cart"
        new createElement("p", document.getElementById("cart-container"), "no-items", "NO ITEMS IN CART");
    }
}

// student name input field
let studentName = new createElement("input", document.getElementById("student-form"), "student-input", "Student Name");
studentName.setAttribute("type", "text");
studentName.setAttribute("placeholder", "Student Name");

// tutor class input field
let tutorClass = new createElement("input", document.getElementById("student-form"), "student-input", "Tutor Class");
tutorClass.setAttribute("type", "text");
tutorClass.setAttribute("placeholder", "Tutor Class");
tutorClass.setAttribute("maxlength", tutorClassMaxLength);

// student number input field
let studentNumber = new createElement("input", document.getElementById("student-form"), "student-input", "Student Number");
studentNumber.setAttribute("type", "number");
studentNumber.setAttribute("placeholder", "Student Number");
studentNumber.setAttribute("max", 20999);
studentNumber.setAttribute("min", 16001);
studentNumber.setAttribute("pattern", "\d+");

// "place order" button
let placeOrder = new createElement("button", document.getElementById("student-form"), "place-order-button", "Place Order");
placeOrder.onclick = function () {

    // checks if any field is empty
    if (studentNumber.value == 0 || studentName.value == 0 || tutorClass.value == 0) {
        window.alert("Invalid text field/s.");
    }

    // checks if the tutor class is not in the array
    else if (!tutorClassCodes.includes((tutorClass.value).toUpperCase())) {
        window.alert("Invalid tutor class.");
    }

    // checks if the student number is greater in value than 20999 or less than in value than 16000
    else if (Number.isInteger(Number(studentNumber.value)) === false || studentNumber.value > 20999 || studentNumber.value <= 16000) {
        window.alert("Invalid student number.");
    }


    else {

        // logs all the inputs
        console.log(studentName.value);
        console.log(tutorClass.value);
        console.log(studentNumber.value);

        // hides the form
        document.getElementById("student-form").style.display = "none";
        document.getElementById("body").style = "none";
        document.getElementById("overlay").classList = "none";

        // checks what kind of items the user has (morning tea, lunch or both) and displays relevant message + pick up time
        if (lunchAmount > 0 && morningTeaAmount > 0) {
            window.alert(studentName.value + ", your order has been placed! Please pick up your Morning Tea items at 11:00am and your Lunch items at 1:00pm.");
        }

        else if (morningTeaAmount > 0) {
            window.alert(studentName.value + ", your order has been placed! Please pick up your Morning Tea items at 11:00am.");
        }

        else if (lunchAmount > 0) {
            window.alert(studentName.value + ", your order has been placed! Please pick up your Lunch items at 1:00pm.");
        }

        // resets the cart array, lunch amount and morning tea amount
        cart = [];
        lunchAmount = 0;
        morningTeaAmount = 0;

        // resets student input fields ready for new order
        studentNumber.value = "";
        studentName.value = "";
        tutorClass.value = "";

        // hides cart page and shows menu page
        document.getElementById("container").style.display = "flex";
        document.getElementById("button-block").style.display = "block";
        document.getElementById("lunch").style.display = "";
        document.getElementById("morning-tea").style.display = "";

        // resets the text to "ORDER ONLINE"
        document.getElementById("order-online").innerHTML = "ORDER ONLINE";

        // hides the cart container
        document.getElementById("cart-container").style.display = "none";

    }
}
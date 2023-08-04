// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings
    };
}
var myPizza = pizzaOven("thin", "marinara", ["mozzarella", "cheddar"], ["pepperoni", "mushrooms"]);
console.log(myPizza);


// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}

const deepDishPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(deepDishPizza);


// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}

const handTossedPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(handTossedPizza);


// Create 2 more pizzas with any toppings we like!
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}

const veggiePizza = pizzaOven("thin", "pesto", ["mozzarella"], ["tomatoes", "bell peppers", "spinach", "red onions"]);
console.log(veggiePizza);

const meatLoversPizza = pizzaOven("pan", "barbecue", ["mozzarella", "cheddar"], ["pepperoni", "sausage", "bacon", "ham"]);
console.log(meatLoversPizza);



// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}

function randomPizza() {
    const crustTypes = ["thin", "deep dish", "hand tossed", "pan"];
    const sauceTypes = ["marinara", "pesto", "barbecue", "alfredo"];
    const cheeses = ["mozzarella", "cheddar", "feta", "parmesan"];
    const toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bell peppers", "tomatoes", "spinach", "ham", "bacon"];

    const randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    const randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    const randomCheeses = [cheeses[Math.floor(Math.random() * cheeses.length)]];
    const randomToppings = [];
    const numToppings = Math.floor(Math.random() * (toppings.length + 1)); // Random number of toppings (0 to all)

    for (var i = 0; i < numToppings; i++) {
        const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
        randomToppings.push(randomTopping);
    }

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

const myRandomPizza = randomPizza();
console.log(myRandomPizza);



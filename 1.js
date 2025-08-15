"use strict";
//Homework
// 1. Start the Game
let playerName = prompt("Welcome, apprentice! What is your nice name.😊?");
let age = Number(prompt("How old are you💖?"));
let favoriteElement = prompt("What is your favorite element? (fire🌞, water💧, earth🌍, air🌨)").toLowerCase();

alert(`Welcome ${playerName}! At ${age}, you're just the right ✔ age to master the powers of ${favoriteElement}!`);

// Player gold tracker
let gold = 0;

// 2. Stock Setup
let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];

let potionStock = {
    'Healing Potion': { quantity: 5, price: 10 },
    'Mana Elixir': { quantity: 3, price: 15 },
    'Invisibility Draft': { quantity: 2, price: 25 },
    'Fire Resistance': { quantity: 4, price: 20 }
};

// 3. Customer Orders
for (let customer = 1; customer <= 3; customer++) {
    let customerHere = prompt(`A customer is here! Take their order😧? (yes/no)`).toLowerCase();

    if (customerHere === "yes") {
        let menu = potions.map((p,i) =>`${i + 1}. ${p} - ${potionStock[p].price} gold`).join("\n");
        let choice = prompt(`Potion Menu:\n${menu}\nWhich potion would you like?`).toLowerCase();
// Find potion by name
        let chosenPotion = potions.find(p => p.toLowerCase() === choice);

        if (chosenPotion) {
            if (potionStock[chosenPotion].quantity > 0) {
                potionStock[chosenPotion].quantity--;
                gold += potionStock[chosenPotion].price;
                alert(`Sold 1 ${chosenPotion}! You earned ${potionStock[chosenPotion].price} gold.`);
            } else {
                alert(`Sorry, ${chosenPotion} is out of stock!`);
            }
        } else {
            alert("We don't sell that potion here!");
        }
    } else {
        alert("You let the customer leave without buying anything.");
    }
}
// 4. Brewing Potions
function brewPotion(potionName, amount) {
    if (potionStock[potionName]) {
        potionStock[potionName].quantity += amount;
        alert(`You brewed ${amount} ${potionName}(s)!`);
    } else {
        alert("That potion doesn't exist!");
    }
}

for (let i = 0; i < 2; i++) {
    let potionToBrew = prompt("Which potion would you like to brew?").toLowerCase();
    let amountToBrew = Number(prompt("How many would you like to brew?"));

    let foundPotion = potions.find(p => p.toLowerCase() === potionToBrew);
    if (foundPotion) {
        brewPotion(foundPotion, amountToBrew);
    } else {
        alert("Invalid potion name!");
    }
}

// 5. End of Day Report
let report = "End of Day Report:\n";
for (let potion of potions) {
    let { quantity } = potionStock[potion];
    report += `${potion}: ${quantity} left\n`;
}
report += `Total gold earned: ${gold} gold\n`;

alert(`Great job, ${playerName}💜!\n${report}`);
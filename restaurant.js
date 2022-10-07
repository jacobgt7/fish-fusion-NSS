const { mongerInventory } = require("./fishMonger.js")

//Store result of mongerInventory in a variable. 
//Chef's budget per fish is the argument for mongerInventory.
// Each day, the chef visits the monger and specifies the maximum price she is able to spedn per fish.
const chefsOptions = mongerInventory(7.50)

// If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory.
const fishMenu = () => {
    let fishInStock = []
    for (let fish of chefsOptions) {
        fish.amount = fish.amount / 2
        fishInStock.push(fish)
    }
    //A string to be amended with the automatically generated items below.
    let htmlMenu = `<h1>Menu</h1>`
    //A for of loop which prints 3 differernt menu items per fish in fishInStock with html tags.
    //For example, if tuna was bought, the following meals will be on the menu.
    // Tuna Soup
    // Tuna Sandwich
    // Grilled Tuna
    for (let fish of fishInStock) {
        htmlMenu += `\n<article class="menu">
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
</article>`
    }

    //return menu string
    return htmlMenu
    
} 

module.exports = { fishMenu }
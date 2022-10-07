const { boatInventory } = require("./fishingBoat.js")

//Call boatInventory function and store output in a variable to provide a menu for the fish monger.
const boatOfferings = boatInventory()
//A function should use this array to determine which fish to 'buy'.
const mongerInventory = (maxBudget) => {
    //Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
    let inventory = []
    // The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
    for (let fish of boatOfferings) {
        if (fish.price <= 7.50 && fish.amount >= 10) {
            inventory.push(fish)
        }        
    }
    // Each fish object provided by the fish monger should have a quantity of 10 instead of the original quantity from the fishing boat.
    for (let fish of inventory) {
        fish.amount = 10
        }
    // The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, a chef can tell the monger that she can only spend $5.00 per fish. The function should then return only fish that cost $5.00 or less.
    let chefsChoice = []
    for (let fish of inventory) {
        if (fish.price <= maxBudget) {
            chefsChoice.push(fish)
        }
    }
    return chefsChoice
}

module.exports = { mongerInventory }

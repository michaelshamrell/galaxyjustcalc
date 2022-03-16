
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let age = document.getElementById("ageInput").textContent
// The business logic of your application should take a person's age in years and create a class that does the following:

// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in j years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number.
const earth = 365
const mercury = .24
const venus = .62
const mars = 1.88
const jupiter = 11.86
// let sumEl = document.getElementById("sum-el")
const lifeExpenctancyMale = 76.3
const lifeExpenctancyFemale = 81.4

function mercury() {
    let mercuryYears = earth * .24
    let mercuryAge = age * mercuryYears
    if (lifeExpenctancy < mercuryAge) {
        console.log("You have lived " + (mercuryAge - lifeExpenctancy) + " years past life expenctancy")
    } else if (lifeExpenctancy >= mercuryAge) {
        console.log("You Have " + (lifeExpenctancy - mercuryAge) + " years left to live")
    }
    console.log(mercuryAge + "Is how old you would be")
}

function venus() {
    let venusYears = earth * .62
    let venusAge = age * venusYears
    if (lifeExpenctancy < venusAge) {
        console.log("You have lived " + (venusAge - lifeExpenctancy) + " years past life expenctancy")
    } else if (lifeExpenctancy >= venusAge) {
        console.log("You Have " + (lifeExpenctancy - venusAge) + " years left to live")
    }
    console.log(venusAge + "Is how old you would be")
}

function mars() {
    let marsYears = earth * 1.88
    let marsAge = age * marsYears
    if (lifeExpenctancy < marsAge) {
        console.log("You have lived " + (marsAge - lifeExpenctancy) + " years past life expenctancy")
    } else if (lifeExpenctancy >= marsAge) {
        console.log("You Have " + (lifeExpenctancy - marsAge) + " years left to live")
    }
    console.log(marsAge + "Is how old you would be")
}

function jupiter() {
    let jupiterYears = earth * 11.86
    let jupiterAge = age * jupiterYears
    if (lifeExpenctancy < jupiterAge) {
        console.log("You have lived " + (jupiterAge - lifeExpenctancy) + " years past life expenctancy")
    } else if (lifeExpenctancy >= jupiterAge) {
        console.log("You Have " + (lifeExpenctancy - jupiterAge) + " years left to live")
    }
    console.log(jupiterAge + "Is how old you would be")
}

//if user years (times any planet calc)
//hard code in how old someone can be for each planet

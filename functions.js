let jonSnowHealth = 100

//converting to a number
//jonSnowHealth = parseInt(jonSnowHealth)

//converting using string coercion/concatenation

//jonSnowHealth = jonSnowHealth + ' health'


console.log(jonSnowHealth)

let theWinnerIs = 'Jamie is the winner'

//replacing first word with another word
//newWinner = theWinnerIs.replace('Jamie','Jon')
//console.log(newWinner)

//replacing case sensitive stuff
newWinner = theWinnerIs.toLowerCase().replace('jamie','Jon')

if(newWinner.includes('Jon')){
    console.log('replaced successfully')
} else {
    console.log('not replaced')
}


console.log(newWinner)

//convert to kabob-case eg. jon-is-the-winner
 let newWinnerLower = newWinner.toLowerCase()
 let newWinnerLowerSplit = newWinnerLower.split(' ')
 let newWinnerKebab = newWinnerLowerSplit.join('-')

 //let newWinnerKebab = newWinner.toLowerCase().split("").join('-')

//let newWinnerReplace = newWinner.replaceAll(' ', '-')
console.log(newWinnerKebab)

//functions

function isJonAlive(){
    if(jonSnowHealth > 0) {
        console.log('Jon is alive!')
    } else {
        console.log('RIP Jon Snow')
    }
    }
//invoking the function. it can be invoked anywhere because it is a function declaration
//which hoists it above invocation. This doesn't happen with function expression. Var allows it to move.
// let keeps it in one place. const keeps it in one place. 

isJonAlive()



// create a function to launch attack on Jon

function surpriseAttack(attack){
    jonSnowHealth -= attack
}

surpriseAttack(20)
surpriseAttack(10)
surpriseAttack(40)
surpriseAttack(40)


// let remainingPlusShield = surpriseAttack(18) + 50
isJonAlive()
console.log(jonSnowHealth)

//multiple parameters can be used
function greeting(person1,person2){
    console.log(`${person1} and ${person2} are saying hello to each other`)
}

greeting('Ned','Jon')


//functions with return
//math.floor rounds to lowest(which includes 0), math.ceil rounds to highest 

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6]
    let randomIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomIndex]
}
// this is where the function is being called, so it is where the return will populate
// let firstRoll = rollDice()
// let secondRoll = rollDice()
// console.log(firstRoll,secondRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    console.log(firstRoll,secondRoll)


    return firstRoll * secondRoll
}

let multipliedRoll = diceMultiplier()
console.log(multipliedRoll)

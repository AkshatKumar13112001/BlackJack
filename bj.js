let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard] 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    Name : "Aksh",
    Chips : 100
}

playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    renderGame()
}



function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards:" 
    for (let i=0; i<cards.length;i+=1){
        cardsEl.textContent += cards[i] + " "  
    }
    
    if (sum <= 20){
        message = "Do you want to draw another card??"
    }

    else if (sum === 21){
        hasBlackJack = true
        message = "You have Blackjack!!"
    }

    else {
        isAlive = false
        message = "You're out of the game."
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}
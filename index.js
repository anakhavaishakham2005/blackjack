let hasBlackJack=false
let sum = 0
let cards=[]
let isAlive=false
let messageEl=document.getElementById("message-el")
let message=""
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let player={
    name:"Per",
    chips: 145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips

function randomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber===1) {
        return 11
    }
    else if (randomNumber>10) {
        return 10
    }
    else 
    return randomNumber
    
}

function startGame(){
    let firstCard =randomCard()
    let secondCard = randomCard() 
    cards = [firstCard, secondCard] 
    sum=firstCard+secondCard
    isAlive=true 
    renderGame()
}


function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
       { cardsEl.textContent+=cards[i] + " "}
    sumEl.textContent="Sum: "+ sum;
if (sum<21) {
    message="Do u want to draw a new card?"}
else if (sum===21)
    {message="You've got blackjack"
        hasBlackJack=true
    }
else 
    {message="Youre out"
        isAlive=false
    }
messageEl.innerHTML=message
}

function newCard(){
    if(isAlive && !hasBlackJack){
    let newCard=randomCard();
    sum += newCard
    cards.push(newCard)
    renderGame()
    }
}


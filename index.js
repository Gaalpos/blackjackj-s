let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function getRandomInt(max) {
  let number = Math.floor(Math.random() * max);
  if (number === 0) number = 1
  return number
}
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame(){
    
    firstCard = getRandomInt(12) 
    secondCard = getRandomInt(12)
    document.getElementById("cards").innerText = "Cards: "  + firstCard + " , " + secondCard 
    sum = secondCard+firstCard
    if (sum <= 20) {
        document.getElementById("message").innerText = "Do you want to draw a new card? 🙂"
        
        const buttonsPlace = document.getElementById("botoncillos");
        buttonsPlace.innerHTML = '';
         
        const buttonYes = document.createElement('button')
        const buttonNo = document.createElement('button')
        buttonYes.textContent = "Si"
        buttonNo.textContent = "No"
        buttonYes.id = 'buttonYes'
        buttonNo.id = 'buttonNo'
        
        buttonYes.onclick = function() {
            let newCard = getRandomInt(12);
            sum += newCard;
            document.getElementById("cards").innerText = "Cards: " + firstCard + " , " + secondCard + " , " + newCard;
            document.getElementById("message").innerText = "Current sum: " + sum;
            
            
            if (sum === 21) {
                document.getElementById("message").innerText = "Wohoo! You've got Blackjack! 🥳";
                hasBlackJack = true;
            } else if (sum > 21) {
                document.getElementById("message").innerText = "You're out of the game! 😭";
                isAlive = false;
            }
        };
        
         buttonNo.onclick = function() {
            document.getElementById("message").innerText = "You chose not to draw a new card.";s
        };
        
        buttonsPlace.appendChild(buttonYes);
        buttonsPlace.appendChild(buttonNo);
        
    } else if (sum === 21) {
        document.getElementById("message").innerText =  "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        document.getElementById("message").innerText =  "You're out of the game! 😭"
        isAlive = false
}
    
}

console.log(message)

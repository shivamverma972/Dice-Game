let player1Score = 0
let player2Score = 0
let player1turn = true

const messageEl = document.getElementById("message")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1Scoreboard")
const player2ScoreBoard = document.getElementById("player2Scoreboard")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton(){
    rollBtn.style.display="none"
    resetBtn.style.display="block"
}

rollBtn.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random()*6) + 1
    if(player1turn){
        messageEl.textContent= "Player 2 Turn"
        player1Dice.textContent=randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player1Score += randomNumber
        player1ScoreBoard.textContent =player1Score
    }
    else{
        messageEl.textContent= "Player 1 Turn"
        player2Dice.textContent=randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        player2Score += randomNumber
        player2ScoreBoard.textContent =player2Score
    }

    if (player1Score >= 20) {
        messageEl.textContent= "Player 1 has Won🥳"
        showDisplayButton()
    }
    else if(player2Score >= 20){ 
        messageEl.textContent= "Player 2 has Won🥳" 
        showDisplayButton()
        
    }
    player1turn = !player1turn
})

resetBtn.addEventListener("click",function(){
    messageEl.textContent = "Player 1 Turn"
    player1Score=0
    player2Score=0
    player1ScoreBoard.textContent=0
    player2ScoreBoard.textContent=0
    player1Dice.textContent="-"
    player2Dice.textContent="-"
    player1turn=true
    resetBtn.style.display="none"
    rollBtn.style.display="block"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
})
   
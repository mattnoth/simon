//grab boxes 
const yellow = document.getElementById('yellow')
// 0
const blue = document.getElementById('blue')
// 1
const green = document.getElementById('green')
// 2
const red = document.getElementById('red')
// 3

// grab other elements 
const gameContainer = document.querySelector('.gameContainer')
const button = document.querySelector('.startButton')
const score = document.querySelector('.currentScore')
const message = document.querySelector('.message')

// declare as 0 index for user & computer move; 
// declare as 0 round index 
// declare empty div array
// declare userturn as false 

let divArray = []
let computerIndex = 0
let userTurn = false
let userIndex = 0
let round = 0

button.innerText = "P L A Y"

// meta function: starts brand new game
// empty gamestate array / div array 
// set userTurn to false 
// reset user index 
// round 

const play = function () {
    divArray = []
    userTurn = false 
    userIndex = 0
	round = 0
	button.innerText = "P L A Y"
	message.innerText = "Trying..."
	score.innerText = `${round}`
    createArray()
    startRound()
}

// function that runs after user wins each round 
// userTurn is set to false 
// reset computer index from previous round 
// call computerTurn func 

const startRound = function () {
    userTurn = false
	computerIndex = 0
	computerTurn()
}

// function to switch user turn 
// user index reset 
// userturn set to true

const allowUserTurn = function () {
	userIndex = 0
	userTurn = true
}

// create's the array of divs; passes the div idea via random number index 
// div array remains the whole game 
// for gamelength, create random 20 times; pass random into switch; case 0-3 
// each array index is now a div element 

const createArray = function () {
	for (i = 0; i < 20; i++) {
		random = Math.floor(Math.random() * 4)
		switch (random) {
			case 0:
				divArray.push(yellow)
				break
			case 1:
				divArray.push(blue)
				break
			case 2:
				divArray.push(green)
				break
			case 3:
				divArray.push(red)
		}
	}
}


// first computer action - computer play, adds flashclass to the div index 
// passes i from for loop 

const computerPlay = function (i) {
	message.innerText = "Computer Playing..."
	divArray[i].classList.add('flashClass')
    playSound(divArray[i])
}

// second computer action; removes flash class
//incriments user 

const computerAction = function (i) {
	divArray[i].classList.remove('flashClass')
	computerIndex++
	if (computerIndex > round) {
		allowUserTurn()
		message.innerText = "It's your turn!"
	} else {
        setTimeout(computerTurn, 500)
    }
}

// if the computer turn is 5, it activates computer play and computer action five times 

const computerTurn = function () {
	computerPlay(computerIndex)
	setTimeout(computerAction, 500, computerIndex)
}

// user move; first userTurn must be true; makes unclickable 
// tracks event target; if it is the same div as the the div array; 
// userIndex increases one 
// until user Index is bigger than round; 
// round increases, and then after 2 seconds a new round begins 


const userMove = function (event) {
    console.log(event.target)
    if (!userTurn) {
		// alert('not your turn')
		message.innerText = "It's not your turn!"
		button.innerText = "RESET"
		return
	}
	if (event.target === divArray[userIndex]) {
		message.innerText = "It's your turn!"
        playSound(event.target)
		userIndex++
		if (userIndex > round) {
            round++
            score.innerText = round
			setTimeout(startRound, 2000)
		}
		if (userIndex > 5) {
			message.innerText = "Wow you're pretty good!"
		}
	} else {
		playSound(null)
		message.innerText = `AW bummer, you lost. Your final score was ${round}`
        // score.innerText = `AW bummer, you lost. Your final score was ${round}`
	}
}


// sound function// passes the soundfilename as colodiv // same name 

const playSound = function (colorDiv) {
	let soundFileName = ''
	switch (colorDiv) {
		case yellow:
			soundFileName = 'yellow.mp3'
			break
		case blue:
			soundFileName = 'blue.mp3'
			break
		case green:
			soundFileName = 'green.mp3'
			break
		case red:
			soundFileName = 'red.mp3'
			break
		default:
			soundFileName = 'fail.mp3'
	}

	let theSound = new Audio(soundFileName)
	theSound.play()
	console.log('On Press of ' + soundFileName)
}


gameContainer.addEventListener('click', userMove)
button.addEventListener('click', play)
score.innerText = 0
message.innerText = "Test your memory... how many rounds can you go?" 
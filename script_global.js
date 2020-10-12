const gameContainer = document.querySelector('.gameContainer')
const button = document.querySelector('.startButton')
const score = document.querySelector('.currentScore')
const message = document.querySelector('.message')

let positionArray = []
let computerIndex = 0
let userTurn = false
let userIndex = 0
let round = 0


let dictionary = {
	0: 'Yellow',
	1: 'Blue',
	2: 'Green',
	3: 'Red',
}

button.innerText = 'P L A Y'

const play = function () {
	positionArray = []
	userTurn = false
	userIndex = 0
	round = 0
	button.innerText = 'P L A Y'
	message.innerText = 'Trying...'
	score.innerText = `Current score: ${round}`
	createArray()
	startRound()
}

const startRound = function () {
	userTurn = false
	computerIndex = 0
	computerTurn()
}

const allowUserTurn = function () {
	userIndex = 0
	userTurn = true
}

const createArray = function () {
	for (i = 0; i < 20; i++) {
		random = Math.floor(Math.random() * 4)
		positionArray.push(random)
	}
}

const findDiv = function (position) {
	return document.querySelectorAll(`[data-num='${position}'`)[0]
}

const computerPlay = function (i) {
	message.innerText = 'Computer Playing...'
	findDiv(positionArray[i]).classList.add('flashClass')
	playSound(positionArray[i])
}

const computerAction = function (i) {
	findDiv(positionArray[i]).classList.remove('flashClass')
	computerIndex++
	if (computerIndex > round) {
		allowUserTurn()
		message.innerText = "It's your turn!"
	} else {
		setTimeout(computerTurn, 500)
	}
}

const computerTurn = function () {
	computerPlay(computerIndex)
	setTimeout(computerAction, 500, computerIndex)
}

const userMove = function (event) {
	let userInputNum = Number(event.target.dataset.num)
	if (!userTurn) {
		message.innerText = "It's not your turn!"
		button.innerText = 'RESET'
		return
	}
	if (userInputNum === positionArray[userIndex]) {
		message.innerText = "It's your turn!"
		console.log(event)
		playSound(userInputNum)
		userIndex++
		if (userIndex > round) {	
			round++
			score.innerText = `Current score: ${round}`
			setTimeout(startRound, 2000)
		}
		if (userIndex > 5) {
			message.innerText = "Wow you're pretty good!"
		}
	} else {
		playSound(null)
		message.innerText = `AW bummer, you lost. Your final score was ${round}. You picked ${
			dictionary[userInputNum]
		}, when you should have picked ${
			dictionary[positionArray[userIndex]]
		}.`
		button.innerText = 'RESET'
	}
}

const sounds = {
	0: 'yellow.mp3',
	1: 'blue.mp3',
	2: 'green.mp3',
	3: 'red.mp3',
}

const playSound = function (numColor) {
	let soundFileName = sounds[numColor] || 'fail.mp3'
	let theSound = new Audio(soundFileName)
	theSound.play()
}

gameContainer.addEventListener('click', userMove)
button.addEventListener('click', play)
score.innerText = 0
message.innerText = 'Test your memory... how many rounds can you go?'

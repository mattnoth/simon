const gameContainer = document.querySelector('.gameContainer')

const yellow = document.getElementById('yellow')
// 0
const blue = document.getElementById('blue')
// 1
const green = document.getElementById('green')
// 2
const red = document.getElementById('red')
// 3

const button = document.querySelector('.startButton')

let computerChoiceArr = []

let computerTurnCount = 0
let userClickListens = false
let userClickCount = 0
let round = 0

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

// Create Computer Choice
const generateComputerArr = function () {
	for (i = 0; i < 20; i++) {
		random = Math.floor(Math.random() * 4)
		switch (random) {
			case 0:
				computerChoiceArr.push(yellow)
				break
			case 1:
				computerChoiceArr.push(blue)
				break
			case 2:
				computerChoiceArr.push(green)
				break
			case 3:
				computerChoiceArr.push(red)
		}
	}
}

const computerPlay = function (i) {
	computerChoiceArr[i].classList.add('flashClass')
	playSound(computerChoiceArr[i])
}

const removeColor = function (i) {
	computerChoiceArr[i].classList.remove('flashClass')
	computerTurnCount++
	if (computerTurnCount > round) {
		userTurn()
	} else {
		setTimeout(computerTurn, 500)
	}
}

const userChoice = function (e) {
	if (!userClickListens) {
		alert('not your turn')
		return
	}
	if (e.target === computerChoiceArr[userClickCount]) {
		playSound(e.target)
		userClickCount++
		if (userClickCount > round) {
			round++
			setTimeout(play_round, 2000)
		}
	} else {
		playSound(null)
		alert('You lost!,try again!')

		play_game()
	}
}

const computerTurn = function () {
	computerPlay(computerTurnCount)
	setTimeout(removeColor, 500, computerTurnCount)
}

const userTurn = function () {
	userClickCount = 0
	userClickListens = true
}

const play_round = function () {
	userClickListens = false
	computerTurnCount = 0
	computerTurn()
}

const play_game = function () {
	computerChoiceArr = []
	userClickListens = false
	userClickCount = 0
	round = 0

	generateComputerArr()
	play_round()
}

gameContainer.addEventListener('click', userChoice)

button.addEventListener('click', play_game)

class simon_game {
	constructor() {
		this.positionArray = []
		this.computerIndex = 0
		this.userTurn = false
		this.userIndex = 0
		this.round = 0
		this.gameContainer = document.querySelector('.gameContainer')
		this.button = document.querySelector('.startButton')
		this.score = document.querySelector('.currentScore')
		this.message = document.querySelector('.message')
		this.dictionary = {
			0: 'Yellow',
			1: 'Blue',
			2: 'Green',
			3: 'Red',
		}
		this.sounds = {
			0: 'yellow.mp3',
			1: 'blue.mp3',
			2: 'green.mp3',
			3: 'red.mp3',
		}
		this.button.innerText = 'P L A Y'
		this.score.innerText = 0
		this.message.innerText = 'Test your memory... how many rounds can you go?'
		this.gameContainer.addEventListener('click', this.userMove.bind(this))
		this.button.addEventListener('click', this.play.bind(this))
	}

	// meta function connected to play button; resets game state
	// resets positional array; counters, and turns off Userturn

	play() {
		this.positionArray = []
		this.userTurn = false
		this.userIndex = 0
		this.round = 0
		this.button.innerText = 'P L A Y'
		this.message.innerText = 'Trying...'
		this.score.innerText = `Current score: ${this.round}`
		this.createArray()
		this.startRound()
	}

	// game is broken into 'rounds', consisting of a computer move
	// and a user response move; userTurn is set to false, computer index
	// is set to zero; comuputer Index keeps track of where it is in the array

	startRound() {
		this.userTurn = false
		this.computerIndex = 0
		this.computerTurn()
	}

	// simple function to call that resets the userIndex and sets userTurn to true

	allowUserTurn() {
		this.userIndex = 0
		this.userTurn = true
	}
	// create the gamestate array using 4 random numbers

	createArray() {
		for (let i = 0; i < 20; i++) {
			let random = Math.floor(Math.random() * 4)
			this.positionArray.push(random)
		}
	}

	// each div has a data-num attached to it that corresponds to the color dictionary

	findDiv(position) {
		return document.querySelectorAll(`[data-num='${position}'`)[0]
	}
	
	// controls computer turn; ping pongs between computer play and computer action until its position in the array is equal to the round 
	// settime out is drawn for computer action, to remove the flashclass
	// half a second after it is added 
	// binds scope of this 

	computerTurn() {
		this.computerPlay(this.computerIndex)
		setTimeout(this.computerAction.bind(this), 500, this.computerIndex)
	}

	// computer uses findDiv to add the flashclass to the current positin in the array; positionArray[i] gets passed as the position argument in finddiv 

	computerPlay(i) {
		this.message.innerText = 'Computer Playing...'
		this.findDiv(this.positionArray[i]).classList.add('flashClass')
		this.playSound(this.positionArray[i])
	}

	// removes the flash class; increases computer index, which is the counter for where the computer is in the array 
	// if computerindex surpasses round, its time for the uesr turn 


	computerAction(i) {
		this.findDiv(this.positionArray[i]).classList.remove('flashClass')
		this.computerIndex++
		if (this.computerIndex > this.round) {
			this.allowUserTurn()
			this.message.innerText = "It's your turn!"
		} else {
			setTimeout(this.computerTurn.bind(this), 500)
		}
	}

	// define userinput num, which turns the event click into a number, that coorespondeds to the color dictionary 
	// checks, if not user turn, alerts user 
	// then checks to see if the user hit the correct button
	// user index keeps track of where the user is in the array 
	// user index increments with each succes 
	// if user index surpasses round, round increases, and a timeout is set to start the new round! 

	userMove(event) {
		let userInputNum = Number(event.target.dataset.num)
		if (!this.userTurn) {
			this.message.innerText = "It's not your turn!"
			this.button.innerText = 'RESET'
			return
		}
		if (userInputNum === this.positionArray[this.userIndex]) {
			this.message.innerText = "It's your turn!"
			this.playSound(userInputNum)
			this.userIndex++
			if (this.userIndex > this.round) {
				this.round++
				this.score.innerText = `Current score: ${this.round}`
				setTimeout(this.startRound.bind(this), 2000)
			}
			if (this.userIndex > 5) {
				this.message.innerText = "Wow you're pretty good!"
			}
		} else {
			this.playSound(null)
			this.message.innerText = `AW bummer, you lost. Your final score was ${
				this.round
			}. You picked ${
				this.dictionary[userInputNum]
			}, when you should have picked ${
				this.dictionary[this.positionArray[this.userIndex]]
			}.`
			this.button.innerText = 'RESET'
		}
	}
	playSound(numColor) {
		let soundFileName = this.sounds[numColor] || 'fail.mp3'
		let theSound = new Audio(soundFileName)
		theSound.play()
	}
}

let playSimon = new simon_game()

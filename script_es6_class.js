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

	startRound() {
		this.userTurn = false
		this.computerIndex = 0
		this.computerTurn()
	}

	allowUserTurn() {
		this.userIndex = 0
		this.userTurn = true
	}

	createArray() {
		for (let i = 0; i < 20; i++) {
			let random = Math.floor(Math.random() * 4)
			this.positionArray.push(random)
		}
	}

	findDiv(position) {
		return document.querySelectorAll(`[data-num='${position}'`)[0]
	}

	computerPlay(i) {
		this.message.innerText = 'Computer Playing...'
		this.findDiv(this.positionArray[i]).classList.add('flashClass')
		this.playSound(this.positionArray[i])
	}

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

	computerTurn() {
		this.computerPlay(this.computerIndex)
		setTimeout(this.computerAction.bind(this), 500, this.computerIndex)
	}

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
			this.message.innerText = `AW bummer, you lost. Your final score was ${this.round}. You picked ${
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


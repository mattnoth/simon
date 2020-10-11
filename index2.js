class simon_game {
	constructor(i) {
		this.yellow = document.getElementById('yellow')
		// 0
		this.blue = document.getElementById('blue')
		// 1
		this.green = document.getElementById('green')
		// 2
		this.red = document.getElementById('red')
		// 3

		this.divArray = []
		this.computerIndex = 0
		this.userTurn = false
		this.userIndex = 0
		this.round = 0
		this.gameLength = 20
        this.gameContainer = document.querySelector('.gameContainer')
        this.i = 0
		

        this.gameContainer.addEventListener('click', this.userMove)
        this.button = document.querySelector('.startButton')
		this.button.addEventListener('click', this.play())
	}

	createArray() {
		for (this.i = 0; this.i < 20; this.i++) {
			this.random = Math.floor(Math.random() * 4)
			switch (this.random) {
				case 0:
					this.divArray.push(yellow)
					break
				case 1:
					this.divArray.push(blue)
					break
				case 2:
					this.divArray.push(green)
					break
				case 3:
					this.divArray.push(red)
			}
		}
	}

	computerDecision(i) {
		//computer adds flashclass to each div index as it is called
		this.divArray[i].classList.add('flashClass')
	}

	computerAction(i) {
		this.divArray[i].classList.remove('flashClass')
		computerIndex++
		if (this.computerIndex > this.round) {
			this.allowUserTurn()
		} else {
			setTimeout(this.computerDecision, 500)
		}

		// remove flash class, increment computer turn
		// IF computerTurnCount is greater than the round by one, switch to user turn
		// ELSE computer decides again
	}

	computerTurn() {
		this.computerDecision(this.computerIndex)
		// call computer Decision, pass it the computer index , and
		// wait to remove color; settimeout call computerAction

		setTimeout(this.computerAction, 500, this.computerIndex)
	}

	userMove(event) {
		if (!userTurn) {
			alert("It's not your turn! Please try again.")
			return
		}
		if (event.target === this.divArray[this.userIndex]) {
			userIndex++
			if (this.userIndex > round) {
				round++
				setTimeout(this.startRound, 2000)
			}
		} else {
			alert('Ouch! Wrong note there. Try again.')
		}
	}

	allowUserTurn() {
		//what happens on a userTurn; userTurn = true, and we reset the value of userIndex
		this.userTurn = true
		this.userIndex = 0
	}

	startRound() {
		// at the end / beginning of next round;
		// userTurn is now false
		// computerIndex is reset
		// call computerTurn

		this.userTurn = false
		this.computerIndex = 0
		this.computerTurn()
	}

	play() {
		// meta function
		// reset divArray
		this.divArray = []

		// userTurn goes false
		this.userTurn = false
		// userIndex is reset
		this.userIndex = 0
		// round is reset
		this.round = 0

		//divArray is created
		this.createArray()

		// call startRound
		this.startRound()
	}

	//event listeners

}




let playBall = new simon_game() 
playBall.play()
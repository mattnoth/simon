const gameContainer = document.querySelector('.gameContainer')

const yellow = document.getElementById('yellow')
// 0

const blue = document.getElementById('blue')
// 1

const green = document.getElementById('green')
// 2

const red = document.getElementById('red')
// 3

let userChoiceArr = []
let computerChoiceArr = []




// counter should increment to each

// Create Computer Choice
const generateComputerArr = function () {
	for (i = 0; i < 100; i++) {
		random = Math.floor(Math.random() * 4)
		computerChoiceArr.push(random)
	}
}


generateComputerArr()


console.log(computerChoiceArr)

// recursion? change the computer play function to take an i as an argument; which would get rid of the for loop 

const computerPlay = function (i) {
	if (computerChoiceArr[i] === 0) {
        console.log('yo it should b yellow')
        // yellow.classList.add('flashClass')
        // yellow.setAttribute('id', 'yellow:active')
        yellow.setAttribute('id', 'yellow')
        yellow.setAttribute("id", 'yellow:active')
	} else if (computerChoiceArr[i] === 1) {
        console.log('yo it should be blue')
		blue.classList.add('flashClass')
	} else if (computerChoiceArr[i] === 2) {
        console.log('yo it should be green')
		green.classList.add('flashClass')
	} else if (computerChoiceArr[i] === 3) {
        console.log('Yo it should be red')
		red.classList.add('flashClass')
    } 
}

const removeColor = function() {
    yellow.classList.remove('flashClass')
	blue.classList.remove('flashClass')
	green.classList.remove('flashClass')
    red.classList.remove('flashClass')
    yellow.setAttribute("id", "yellow")
 }



let counter = 4

for (i = 0; i <= counter; i++) {
setTimeout(computerPlay, 1000 * i, i)
setTimeout(removeColor, 1000 * i + 500)
} 

console.log('im finuto')

const userChoice = function (e) {
	if (e.target === red) {
		userChoiceArr.push(3)
	} else if (e.target === green) {
		userChoiceArr.push(2)
	} else if (e.target === blue) {
		userChoiceArr.push(1)
	} else if (e.target === yellow) {
		userChoiceArr.push(0)
	}
	console.log(userChoiceArr)
}

const compareChoices = function () {
	if (userChoiceArr[0] === 0) {
		console.log('user chose 0')
	}
	if (userChoiceArr[0] && !computerChoiceArr[0]) {
		console.log('WRONG')
	} else if (userChoiceArr[0] && computerChoiceArr[0]) {
		console.log('RIGHT')
	}
}

compareChoices()
const userLose = function () {
	// clear screen entirely
}

const play_game = function () {
    
    var user_succeeded = true;
    counter = 1;

    while (user_succeeded) {
        play_round(counter);
        counter++
    }

}

const play_round = function (computer_moves) {
    generateComputerArr_div(computer_moves);
    for (i = 0; i < computer_moves; i++) {
        setTimeout(computerPlay_div(i),500);
    }
}


gameContainer.addEventListener('click', userChoice)



// checkchoices function 

// )arr1, arr2, 

// checkChoices(gameChoice, playerChoice)
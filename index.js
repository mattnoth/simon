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

// sleep timer; will cause a delay based on ms argument 
// const sleep = function(ms) {
//     let startTime = new Date().getTime()
//     while (true) { 
//         let timeElapsed = new Date().getTime() - startTime
//         if (timeElapsed > ms) {
//             break;
//         }
//     }
// }


// recursion? change the computer play function to take an i as an argument; which would get rid of the for loop 

const computerPlay = function (i) {
    
    if (i > counter) {
        return
    }
    
	if (computerChoiceArr[i] === 0) {
        console.log('yo it should b yellow')
		yellow.classList.add('flashClass')
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
    setTimeout(removeColor, 500, i)
}

const removeColor = function(i) {
    yellow.classList.remove('flashClass')
	blue.classList.remove('flashClass')
	green.classList.remove('flashClass')
    red.classList.remove('flashClass')
    setTimeout(computerPlay, 500, i + 1)
}
let counter = 10

computerPlay(0)

// for (i = 0; i <= counter; i++) {
// setTimeout(computerPlay, 1000 * i, i)
// setTimeout(removeColor, 1000 * i + 500)
// } 

// setTimeout(computerPlay, 2000, 1)
// setTimeout(removeColor, 2500)
// setTimeout(computerPlay, 3000, 2)
// setTimeout(removeColor, 3500)
console.log('im finuto')

// const computerPlay = function () {
// 	// yellow.classList.remove('flashClass')
// 	// blue.classList.remove('flashClass')
// 	// green.classList.remove('flashClass')
//     // red.classList.remove('flashClass')

//     // playSound() happens here 
    
// 	for (i = 0; i <= counter; i++) {
// 		if (computerChoiceArr[i] === 0) {
//             console.log('yo it should b yellow')
// 			yellow.classList.add('flashClass')
// 		} else if (computerChoiceArr[i] === 1) {
// 			console.log('yo it should be blue')
// 			blue.classList.add('flashClass')
// 		} else if (computerChoiceArr[i] === 2) {
// 			console.log('yo it should be green')
// 			green.classList.add('flashClass')
// 		} else if (computerChoiceArr[i] === 3) {
// 			console.log('Yo it should be red')
// 			red.classList.add('flashClass')
//         } 
//         sleep(5000)
// 	}
// 	yellow.classList.remove('flashClass')
// 	blue.classList.remove('flashClass')
// 	green.classList.remove('flashClass')
// 	red.classList.remove('flashClass')
// }


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

// User Array needs to become new each time !

// let testArray = [1, 1, 1, 1]

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



gameContainer.addEventListener('click', userChoice)

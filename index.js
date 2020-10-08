const gameContainer = document.querySelector('.gameContainer')

const red = document.getElementById('red')
const blue = document.getElementById('blue')
const green = document.getElementById('green')
const yellow = document.getElementById('yellow')

console.log(gameContainer)

let userChoiceArr = []
let computerChoiceArr = []

// Create Computer Choice
const generateComputerArr = function () {
    
    // possible to modify into object ? or array
    // from the getco  

    let rand1 = Math.floor(Math.random() * 4)
	let rand2 = Math.floor(Math.random() * 4)
	let rand3 = Math.floor(Math.random() * 4)
	let rand4 = Math.floor(Math.random() * 4)
    computerChoiceArr.push(rand1, rand2, rand3, rand4)
    
}

generateComputerArr() 

console.log(computerChoiceArr)

const userChoice = function (e) {
	if (e.target === red) {
        userChoiceArr.push(0)
	} else if (e.target === blue) {
        userChoiceArr.push(1)
	} else if (e.target === green) {
        userChoiceArr.push(2)
	} else if (e.target === yellow) {
        userChoiceArr.push(3)
    }
    
    console.log(userChoiceArr)


}


let testArray = [1,1,1,1]

const compareChoices = function (){
    console.log(computerChoiceArr)        
    console.log(userChoiceArr)
    
    if (userChoiceArr[0] === 0) {
        console.log("user chose 0")
    }
    // if (userChoiceArr[0] && !computerChoiceArr[0]) {
    //     console.log("WRONG")
    // } else if (userChoiceArr[0] && computerChoiceArr[0]) {
    //     console.log("RIGHT")
    // }

}

compareChoices()
const userLose = function () {

    // clear screen entirely 

}

gameContainer.addEventListener('click', userChoice)

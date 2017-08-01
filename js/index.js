//Add event listener to letter buttons and call play function inside
window.onload = function () {
	var letters = document.getElementById("letters").children
	for (letter of letters) {
    letter.addEventListener("click", function(e){ 
    	e.target.disabled = 'true'
    	play(this.innerText)
    	
    })
  }
}

//Array of words
var words = ['BANANA','PHILADELPHIA','OSTRICH',
'JUPITER','CHEESEBURGER','CAPPUCCINO', 
'SNOWBOARDING', 'ARMAGEDDON', 'THANKSGIVING',
'SEPTEMBER', 'PINEAPPLE', 'GIRAFFE',
'SPAGHETTI', 'VENUS', 'MIAMI',
'LEOPARD', 'SMOOTHIE', 'CHRISTMAS',
'TITANIC', 'BASEBALL', 'OCTOBER',
'PHOENIX', 'WATERMELON', 'MONKEY',
'TORONTO', 'RAMEN', 'SHEEP',
'SPRITE', 'QUESADILLA', 'SATURN']

//Array of categories
var categories = ['Fruit','City','Animal',
'Planet','Food','Drink', 
'Sport', 'Movie', 'Holiday',
'Month', 'Fruit', 'Animal',
'Food', 'Planet', 'City',
'Animal', 'Drink', 'Holiday',
'Movie', 'Sport', 'Month',
'City', 'Fruit', 'Animal',
'City', 'Food', 'Animal',
'Drink', 'Food', 'Planet']

//Get random word + category
var random = Math.random()
var word = words[Math.floor(random * words.length)]
var hint = categories[Math.floor(random * words.length)]

//Array of answers
var answerArray = []

//Replace letter with blank at each index
for (let i = 0; i < word.length; i++){
	answerArray[i] = "_"
}

//Get elements by id
function id(str){
	return document.getElementById(str)
}
//Declare variables for elements
var guessWord = id('guessWord')
var category = id('category')
var winLose = id('winLose')
var triesLeft = id('triesLeft')

//Show answer array and hint
guessWord.innerHTML = answerArray.join(" ")
category.innerHTML = "<strong>Category:</strong><br>" + hint

//Keep track of letters that remain to be guessed
var remainingLetters = word.length
//Maximum amount of tries
var maxTries = 5

//Show amount of tries 
triesLeft.innerHTML = "<strong>Tries Left:</strong><br>" + maxTries

function play(letter){
	let found = false	
	// The Game Loop
	if (remainingLetters > 0) {
		//Update inner HTML with answer
		guessWord.innerTextHTML = answerArray
		//Guess equals button letter
		var guess = letter
		for (let j = 0; j < word.length; j++){
			if (word[j] === guess){
				answerArray[j] = guess
				remainingLetters--
				found = true
			}
			// *WIN* Reload
			if (remainingLetters === 0) {
				winLose.innerHTML = "YOU GOT IT!"
				setTimeout(function(){
					window.location.reload()
				}, 2000)
			}
		}
	}
	//Decrease number of max tries if chosen letter is incorrect
	if (!found){
		maxTries--
	}
	// *LOSE* Reload
	if (maxTries === 0) {
		winLose.innerHTML = "SORRY, YOU LOST :("
		setTimeout(function(){
					window.location.reload()
				}, 2000)
	}

	triesLeft.innerHTML = "<strong>Tries Left:</strong><br>" + maxTries
	guessWord.innerHTML = answerArray.join(" ")
}




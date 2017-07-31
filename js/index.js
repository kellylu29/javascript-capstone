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
var words = ['BANANA','PHILADELPHIA','OSTRICH','JUPITER','CHEESEBURGER','CAPPUCCINO']

//Array of categories
var categories = ['Fruit','City','Animal','Planet','Food','Drink']

//Get random word + category
var random = Math.random()
var word = words[Math.floor(random * words.length)]
var hint = categories[Math.floor(random * words.length)]

//Array of answers
var answerArray = []

for (let i = 0; i < word.length; i++){
	answerArray[i] = "_"
}

var guessWord = document.getElementById('guessWord')
var category = document.getElementById('category')
var winLose = document.getElementById('winLose')
var triesLeft = document.getElementById('triesLeft')

guessWord.innerHTML = answerArray.join(" ")
category.innerHTML += hint

//Keep track of letters that remain to be guessed
var remainingLetters = word.length
var maxTries = 10

triesLeft.innerHTML = "Tries Left:<br>" + maxTries

function play(letter){
	let found = false	
	// The Game Loop
	if (remainingLetters > 0) {
		
		guessWord.innerHTML = answerArray

		var guess = letter
		for (let j = 0; j < word.length; j++){
			if (word[j] === guess){
				answerArray[j] = guess
				remainingLetters--
				found = true
			}

			if (remainingLetters === 0) {
				winLose.innerHTML = "YOU GOT IT!"
				setTimeout(function(){
					window.location.reload()
				}, 1500)
			}
		}
	}

	if (!found){
		maxTries--
	}

	if (maxTries === 0) {
		winLose.innerHTML = "<br>SORRY, YOU LOST :("
	}

	triesLeft.innerHTML = "Tries Left:<br>" + maxTries
	guessWord.innerHTML = answerArray.join(" ")
}




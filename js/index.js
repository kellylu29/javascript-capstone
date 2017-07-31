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
var categories = ['FRUIT','CITY','ANIMAL','PLANET','FOOD','DRINK']

//Get random word
var word = words[Math.floor(Math.random() * words.length)]
var hint = categories[Math.floor(random * words.length)]

//Answer array
var answerArray = []

for (let i = 0; i < word.length; i++){
	answerArray[i] = "_"
}

var guessWord = document.getElementById('guessWord')
var category = document.getElementById('category')
guessWord.innerHTML = answerArray.join(" ")

//Keep track of letters that remain to be guessed
var remainingLetters = word.length

function play(letter){
		
	// The Game Loop
	if (remainingLetters > 0) {
		
		guessWord.innerHTML = answerArray

		var guess = letter
		for (let j = 0; j < word.length; j++){
			if (word[j] === guess){
				answerArray[j] = guess
				remainingLetters--
			} 
		}
	}
	guessWord.innerHTML = answerArray.join(" ")
	
}




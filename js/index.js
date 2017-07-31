function id(str){
	return document.getElementById(str)
}

var start = id('start')
var phrase = id('phrase')
var letter = id('letter')

//Choosing a random word
//Create and array of words
var words = [
	'javascript',
	'celebration',
	'animal',
	'animation'
]

var word = words[Math.floor(Math.random() * words.length)]

//Set up answer array
var answerArray = []

for (var i = 0; i < word.length; i++){
	answerArray[i] = "_"
}



//Create variable to keep track of letters that remain to be guessed
var remainingLetters = word.length

class Game {
	constructor(){

	}
	static play(){
		start.addEventListener('click',function(){
			start.classList.add('hidden')
			

			letter.addEventListener('click',function(){
			// The Game Loop
				while (remainingLetters > 0) {
					//Show the player their progress
					phrase.innerHTML = answerArray.join(' ')
					//Get a guess from the player
					var guess = letter.innerText	
					for (var j = 0; j < word.length; j++){
						if (word[j] === guess){
						answerArray[j] = guess
						remainingLetters--
						}
					}
				// The end of the Game Loop
				
				}
				
			})
			phrase.innerHTML = answerArray.join(" ")	
		})	

	}
}

Game.play()

function id(str){
	return document.getElementById(str)
}

var start = id('start')
var phrase = id('phrase')
// var letter = id('letter')

//Array of words
var words = [
	'JAVASCRIPTL',
	'APPLESAUCE',
	'ANIMAL',
	'WATERMELON'
]

//Get random word
var word = words[Math.floor(Math.random() * words.length)]
// var hint = hintArray[Math.floor(random * words.length)]

//Answer array
var answerArray = []

for (let i = 0; i < word.length; i++){
	answerArray[i] = "_"
}
phrase.innerHTML = answerArray.join(" ")

//Keep track of letters that remain to be guessed
var remainingLetters = word.length

function play(letter){
		
	// The Game Loop
	while (remainingLetters > 0) {
		
		phrase.innerHTML = answerArray.join(" ")
	
		var guess = letter
		for (let j = 0; j < word.length; j++){
			if (word[j] === guess){
			answerArray[j] = guess
			remainingLetters--
			} 
		}
	}
	phrase.innerHTML = answerArray.join(" ")	
}




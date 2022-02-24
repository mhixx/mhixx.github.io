
const abc = "abcdefghijklmnopqrstuvwxyz"

let indexLetter = 0
let indexLevel = 0
let words
let answer



// let username = window.prompt("Enter your name","");


function getLetter(letterIndex, levelIndex) {

    const index = letterIndex + (5 * levelIndex)
    return $(`.letter:eq(${index})`)
}

function getLetterBox(letterIndex, levelIndex) {

    const index = letterIndex + (5 * levelIndex)
    return $(`.letter-box:eq(${index})`)
}

function addLetter(key){
    const userAnswer = getWord()
    if (key == "Enter") {
        let valid = false
        words.some( w => {
            if(w == userAnswer){
                valid = true
                return
            }
        } )

        if(valid == false){ return }

        
        updateColor(0)
        updateColor(1)
        updateColor(2)
        updateColor(3)
        updateColor(4)
        if (userAnswer == answer) {
            alert('you guessed the word')
        }
        else{
           
            nextLevel()
        }

    }
    else if(key == "Backspace"){
        backspace()
    }
    if (!abc.includes(key)) return
    getLetter(indexLetter, indexLevel).text(key)

    if (indexLetter < 4) {
        indexLetter++


    }


}

// documnt = 1 websitenya full
$(document).keydown(function (event) {

   
    const key = event['originalEvent']['key']
    addLetter(key)
    
})
function nextLevel() {

    if (indexLetter == 4) {
        indexLevel++
        indexLetter = 0
    }

}
function backspace(){
    if(getLetter(4, indexLevel).text() != ""){
        getLetter(4, indexLevel).text("")
        return
    }

    if(indexLetter > 0){
        indexLetter--
        getLetter(indexLetter, indexLevel).text("")
    }
    
    
}

async function loadWords() {

    await jQuery.get('indonesianwords.txt', function (data) {
        words = data.split('.')
    })

}

function getRandomWordIndex() {
    return Math.floor(Math.random() * words.length)
}


$(document).ready(async function () {
    await loadWords()
    answer = words[getRandomWordIndex()]
    console.log(answer)


})

function getWord() {
    return getLetter(0,indexLevel).text() + getLetter(1, indexLevel).text() + getLetter(2, indexLevel).text() + getLetter(3, indexLevel).text() + getLetter(4, indexLevel).text()

}

function test() {
    getLetterBox(2, 1).css('background-color', 'yellow')
}

function updateColor(index){

    if (answer.includes(getWord()[index])) {
        if (answer[index] == getWord()[index]) {
            getLetterBox(index,indexLevel).css('background-color', 'green')
            return
        } 
        getLetterBox(index,indexLevel).css('background-color', '#c9b458')

    } else {
        getLetterBox(index,indexLevel).css('background-color', 'grey')
    }


}

function resizeGame() {
    const container = $("#container")
    const letterBox = $(".level")
    container.height(container.width())
    letterBox.height(container.height() / 5.1)
}

$( window ).resize(function(e) {
    resizeGame()
})

resizeGame()

function buttonClick(key){
    addLetter(key)
}







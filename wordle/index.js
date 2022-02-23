
const abc = "abcdefghijklmnopqrstuvwxyz"

let indexLetter = 0
let indexLevel = 0
let words
let answer

function getLetter(letterIndex, levelIndex) {

    const index = letterIndex + (5 * levelIndex)
    return $(`.letter:eq(${index})`)

}

// documnt = 1 websitenya full
$(document).keydown(function (event) {
    const key = event['originalEvent']['key']
    if (key == "Enter") {
        nextLevel()
    }
    if (!abc.includes(key)) return
    getLetter(indexLetter, indexLevel).text(key)

    if (indexLetter < 4) {
        indexLetter++


    }

})
function nextLevel() {
    console.log(getWord())
    if (indexLetter == 4) {
        indexLevel++
        indexLetter = 0
    }

}
async function loadWords(){

     await jQuery.get('indonesianwords.txt', function(data){
        words = data.split('.')
    })

}

function getRandomWordIndex(){
   return Math.floor(Math.random() * words.length)
}


$( document ).ready(async function() {
    await loadWords()
    answer = words[getRandomWordIndex()]
    console.log(answer)
    

})

function getWord(){
   return $('.letter:eq(0)').text() + $('.letter:eq(1)').text() + $('.letter:eq(2)').text() + $('.letter:eq(3)').text() + $('.letter:eq(4)').text() 
}







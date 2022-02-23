
const abc = "abcdefghijklmnopqrstuvwxyz"

let indexLetter = 0
let indexLevel = 0

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

    //toTheNextLetter()


    if (indexLetter < 4) {
        indexLetter++


    }

})
function nextLevel() {
    if (indexLetter == 4) {
        indexLevel++
        indexLetter = 0
    }

}
function loadWords(){
    


}






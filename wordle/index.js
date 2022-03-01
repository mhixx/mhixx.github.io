
const abc = "abcdefghijklmnopqrstuvwxyz"

let indexLetter = 0
let indexLevel = 0
let words
let answer
const grey = '#787c7e'
const yellow = '#c9b458'
const green = '#6aaa64'

const url = 'https://mhixx.github.io'
// const url = 'http://localhost:5500'

//copas
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let username = getParameterByName('username')



if (!username) {
    while(!username){
        let input = window.prompt("Enter your name", "")
        username = input

    }
    
} 


function playAgain() {
    window.location.href = url + "/wordle/?username=" + username;
}


function toScore() {
    window.location.href = url+  "/wordle/score/";


}
function getToday() {
    const d = new Date()
    return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()


}


function updateScore(score) {

    addScore(username.toLowerCase(), score, getToday())


}

function setScoreBoxVisible() {
    $('.scorebox').css("visibility", "visible")

}


function win() {
    if (indexLevel == 0) {
        updateScore(100)

    }
    else if (indexLevel == 1) {
        updateScore(80)

    }
    else if (indexLevel == 2) {
        updateScore(60)

    }
    else if (indexLevel == 3) {
        updateScore(40)

    }
    else if (indexLevel == 4) {
        updateScore(20)

    }
    setScoreBoxVisible()

}

function lose() {
    alert("you lost, better luck next time. the answer is: " + answer)
    updateScore(0)

}

function getLetter(letterIndex, levelIndex) {

    const index = letterIndex + (5 * levelIndex)
    return $(`.letter:eq(${index})`)
}

function getLetterBox(letterIndex, levelIndex) {

    const index = letterIndex + (5 * levelIndex)
    return $(`.letter-box:eq(${index})`)
}

function existInDictionary() {
    const userAnswer = getWord()
    let valid = false
    words.some(w => {
        if (w == userAnswer) {
            valid = true
            // break
            return
        }
    })

    return valid
}

function updateKeyColor(index) {
    const userAnswer = getWord()


    if (answer.includes(getWord()[index])) {
        if (answer[index] == getWord()[index]) {
            $(`#k2-button-${userAnswer[index]}`).css('background-color', green)

            return
        }
        $(`#k2-button-${userAnswer[index]}`).css('background-color', yellow)

    } else {
        $(`#k2-button-${userAnswer[index]}`).css('background-color', grey)
    }

}

function addLetter(key) {
    const userAnswer = getWord()
    if (key == "Enter") {

        if (existInDictionary() == false) { return }
        updateKeyColor(0)
        updateKeyColor(1)
        updateKeyColor(2)
        updateKeyColor(3)
        updateKeyColor(4)

        updateColor(0)
        updateColor(1)
        updateColor(2)
        updateColor(3)
        updateColor(4)
        if (userAnswer == answer) {
            win()

        }
        else {
            if (indexLevel == 4) {
                lose()

            }

            nextLevel()
        }

    }
    else if (key == "Backspace") {
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
function backspace() {
    if (getLetter(4, indexLevel).text() != "") {
        getLetter(4, indexLevel).text("")
        return
    }

    if (indexLetter > 0) {
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
    return getLetter(0, indexLevel).text() + getLetter(1, indexLevel).text() + getLetter(2, indexLevel).text() + getLetter(3, indexLevel).text() + getLetter(4, indexLevel).text()

}

function test() {
    getLetterBox(2, 1).css('background-color', 'yellow')
}

function updateColor(index) {

    if (answer.includes(getWord()[index])) {
        if (answer[index] == getWord()[index]) {
            getLetterBox(index, indexLevel).css('background-color', green)

            return
        }
        getLetterBox(index, indexLevel).css('background-color', yellow)

    } else {
        getLetterBox(index, indexLevel).css('background-color', grey)
    }


}

function resizeGame() {
    const container = $("#container")
    const letterBox = $(".level")
    container.height(container.width())
    letterBox.height(container.height() / 5.1)
}

$(window).resize(function (e) {
    resizeGame()
})

resizeGame()

function buttonClick(key) {
    addLetter(key)
}







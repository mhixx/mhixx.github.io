

$(document).ready(_=> {

    
    getWordToAddSeperateByDot().then(words => {
        $('.span1').html(words)

    })

})
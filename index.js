function buttonSubmitClick(){

    const date = new Date()

    const result = date.toLocaleTimeString("sv-SE", { // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })

    addComment("admin", $('#comment-input').val() , result)


}

async function loadComments(){
    const comments = await getComments()
    
    for (let i = 0; i < comments.length; i++) {
        console.log(comments[i]['content'])
        let content = comments[i]['content']
        let commentSpan = `<span id="comment-content"> ${content} </span>`
        let currentHtml = $('.comment-view').html()
        $('.comment-view').html( currentHtml + commentSpan)
        
    }



    
    
}

$(document).ready(_=>{

    loadComments()

})


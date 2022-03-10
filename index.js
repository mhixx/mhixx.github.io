async function buttonSubmitClick(){

    const date = new Date()

    const result = date.toLocaleTimeString("sv-SE", { // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })

    await addComment("unknown", $('#comment-input').val() , result)
     window.location.href = window.location.href
}

async function loadComments(){
    const comments = await getComments()
    
    for (let i = 0; i < comments.length; i++) {
        console.log(comments[i]['content'])
        let content = comments[i]['content']
        let username = comments[i]['username']
        let time = comments[i]['time']

        let commentContent = `<span id="comment-content"> ${content}</span>`
        
        let commentTimeSpan = `<span id="comment-time"> ${time} </span>`

        let commentUser = `<span id="comment-user"> ${username} </span>`
        
        let currentHtml = $('.comment-view').html()
        $('.comment-view').html( currentHtml + commentUser +  commentContent + commentTimeSpan )
        
    }



    
    
}



$(document).ready(_=>{

    loadComments()

})


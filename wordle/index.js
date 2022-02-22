function test() {
    alert("hi")

}


// documnt = 1 websitenya full
$(document).keydown(function (event) {
    const key = event['originalEvent']['key']

    $(".letter").text(key)
    if(key == "Enter"){
        alert("enter")

    }

    //alert("You pressed " + key);
})


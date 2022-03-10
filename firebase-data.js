const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBttB_JeNd40QSMr4OZ3mFPLpSDTYySDas',
    authDomain: 'mhixx-github-io.firebaseapp.com',
    projectId: 'mhixx-github-io'
});

var db = firebase.firestore()


function addScore(name, score, date) {
    db.collection("wordle-score").add({
        name: name,
        score: score,
        date: date
    })
}

async function addWordToAdd(word) {
    const querySnapshot = await db.collection("word-to-add").where("word", "==", word).get()
    if (querySnapshot.empty) {
        db.collection("word-to-add").add({
            word: word
        })
        console.log('word added')
    }  else {
        console.log('cant add word');
    }

}

async function getWordToAddSeperateByDot() {
    let words = ''
    const querySnapshot = await db.collection("word-to-add").get()
    querySnapshot.forEach((doc) => {
        words+=doc.data().word+'.'
    })

    return words
}


async function getScores(date) {
    console.log(`getScores(${date})`);
    let datas = []
    const querySnapshot = await db.collection("wordle-score").where("date", "==", date).get()
    querySnapshot.forEach((doc) => {
        datas.push(doc.data())
    })

    return datas
}

async function getComments(){
    let datas = []
    const querySnapshot = await db.collection("comments").get()
    querySnapshot.forEach((doc) => {
        datas.push(doc.data())
    })
    return datas
}

async function addComment(username, content, time){
    await db.collection("comments").add({
        username: username,
        content: content,
        time: time
    })



}

